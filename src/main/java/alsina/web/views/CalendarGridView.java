package alsina.web.views;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.format.TextStyle;
import java.time.temporal.TemporalAdjusters;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Locale;
import java.util.Set;

import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;

public class CalendarGridView extends VerticalLayout {

    private final Grid<List<CalendarDay>> calendarGrid = new Grid<>();
    private Set<LocalDate> unavailableDates = new HashSet<>();

    private final static String monthStrings[] = {"Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"};
    private ComboBox<String> monthPicker = new ComboBox<String>();
    private ComboBox<Integer> yearPicker = new ComboBox<Integer>();
    
    public CalendarGridView(Set<LocalDate> unavailableDates) {
        this.unavailableDates = unavailableDates;
        setSizeFull();
        setSpacing(true);
        setPadding(false);

        int actualYear = LocalDate.now().getYear();
        yearPicker.setLabel("Seleccionar Año");
        yearPicker.setItems(Arrays.asList(actualYear, actualYear+1, actualYear+2, actualYear+3));
        yearPicker.setValue(actualYear);
        yearPicker.setWidth("40%");
        yearPicker.addValueChangeListener(event -> {
            if (event.getValue() != null) {
                refreshCalendar();
            }
        });

        monthPicker.setLabel("Seleccionar Mes");
        monthPicker.setItems(monthStrings);//1,2,3,4,5,6,7,8,9,10,11,12));
        monthPicker.setValue(monthStrings[LocalDate.now().getMonthValue() - 1]);
        //monthPicker.setValue(LocalDate.now().getMonthValue());
        /*monthPicker.setI18n(new ComboBoxI18n()
            .setMonthNames(Arrays.asList("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
                                         "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"))
            .setWeekdaysShort(Arrays.asList("Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa")));
	*/
        monthPicker.addValueChangeListener(event -> {
            if (event.getValue() != null) {
                refreshCalendar();
            }
        });
        monthPicker.setWidth("52%");

        calendarGrid.setSelectionMode(Grid.SelectionMode.NONE);

        for (int i = 0; i < 7; i++) {
            int dayOfWeekIndex = i;
            calendarGrid.addComponentColumn(week -> {
                CalendarDay day = week.get(dayOfWeekIndex);
                return createDayCell(day);
            }).setHeader(DayOfWeek.of((i) % 7 + 1)
              .getDisplayName(TextStyle.SHORT, new Locale("es")))
              .setAutoWidth(false)
              .setWidth("70px");
        }

		Span confirmed = new Span("Disponible");
		confirmed.getElement().getThemeList().add("badge success pill");
		Span denied = new Span("No Disponible");
		denied.getElement().getThemeList().add("badge error pill");
		HorizontalLayout badges = new HorizontalLayout();
		badges.add(confirmed, denied);
		
		HorizontalLayout combos = new HorizontalLayout();
		combos.getStyle().set("flex-wrap", "wrap");
		combos.add(yearPicker, monthPicker);
		
		Div div = new Div();
		div.add(combos);
		
        add(combos, badges, calendarGrid);
        refreshCalendar();
    }

    private void refreshCalendar() {
        List<List<CalendarDay>> weeks = generateCalendarDays();
        calendarGrid.setItems(weeks);
        String height =String.valueOf(62 * weeks.size()); 
        calendarGrid.getStyle().setHeight(height.concat("px"));
    }

    private Component createDayCell(CalendarDay day) {
    	Span span = new Span();
    	try{
        	span = new Span(String.valueOf(day.getDate().getDayOfMonth()));
        }catch(NullPointerException e) {
        	span = new Span("");
        }
        span.getStyle()
            .set("display", "inline-block")
            .set("width", "93%")
            .set("text-align", "center")
            .set("padding", "8px")
            .set("border", "1px solid #ccc")
            .setBorderRadius("6px");

        if(day.getDate() == null) {
            span.getStyle().set("background", "white");
        }else if (!day.isAvailable() || day.getDate().isBefore(LocalDate.now())) {
            span.getStyle().set("background", "#ffdddd");
        } else {
            span.getStyle().set("background", "#ddffdd");
        }

        if(day.getDate()!=null && day.getDate().isEqual(LocalDate.now()))
             span.getStyle().set("border", "2px double blue");// Style in Current Day
        
        return span;
    }

    private List<List<CalendarDay>> generateCalendarDays() {
        List<List<CalendarDay>> weeks = new ArrayList<>();
        
        LocalDate firstOfMonth = LocalDate.of(yearPicker.getValue(), getMonthIndex(monthPicker.getValue()), 1);
        LocalDate start = firstOfMonth.with(TemporalAdjusters.previousOrSame(DayOfWeek.SUNDAY));
        LocalDate lastOfMonth = firstOfMonth.with(TemporalAdjusters.lastDayOfMonth());

        for (int week = 0; week < 5; week++) 
            weeks.add(generateWeek(start, week, firstOfMonth));
        
        LocalDate lastDayInGrid = start.plusDays(4 * 7 + 6); // Last day in the 5th week
        if (lastDayInGrid.isBefore(lastOfMonth)) {
            weeks.add(generateWeek(start, 5, firstOfMonth));
        }
        return weeks;
    }
    
    private List<CalendarDay> generateWeek(LocalDate start, int weekOffset, LocalDate firstOfMonth) {
        List<CalendarDay> weekDays = new ArrayList<>();
        int month = firstOfMonth.getMonthValue();

        for (int day = 0; day < 7; day++) {
            LocalDate currentDate = start.plusDays(weekOffset * 7 + day);
            boolean isSameMonth = currentDate.getMonthValue() == month;
            boolean available = isSameMonth && !unavailableDates.contains(currentDate);
            weekDays.add(isSameMonth ? new CalendarDay(currentDate, available) : new CalendarDay(null, false));
        }
        return weekDays;
    }
    
    private int getMonthIndex(String month) {
    	for(int i = 0; i < 11; i++) 
    		if(month.equalsIgnoreCase(monthStrings[i]))
    			return i+1;
    	
    	return 12;
    }
}

