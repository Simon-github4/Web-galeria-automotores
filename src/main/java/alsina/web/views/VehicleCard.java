package alsina.web.views;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.text.NumberFormat;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.Set;
import java.util.stream.Collectors;

import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.details.Details;
import com.vaadin.flow.component.details.DetailsVariant;
import com.vaadin.flow.component.dialog.Dialog;
import com.vaadin.flow.component.html.H2;
import com.vaadin.flow.component.html.H4;
import com.vaadin.flow.component.html.IFrame;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.component.icon.Icon;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;

import alsina.web.entities.Vehiculo;
import alsina.web.entities.VehiculoAlquilable;
import alsina.web.entities.VehiculoVenta;

public class VehicleCard extends VerticalLayout {

	private final static String baseUrl = "C:\\Users\\simon\\OneDrive\\Imágenes\\FOTOS_";
	private Set<LocalDate> dates;
	public VehicleCard(Vehiculo vehicle, Set<LocalDate> dates) {
		this.dates = dates;
        setSpacing(false);
        setPadding(false);
        setDefaultHorizontalComponentAlignment(Alignment.STRETCH);
        getStyle()
        .set("background", "white")
        .set("border-radius", "8px")
        .set("box-shadow", "0 2px 4px rgba(0,0,0,0.1)")
        .set("transition", "box-shadow 0.3s ease, transform 0.3s ease");

        ImageCarousel carousel= null;
		try {
			carousel = new ImageCarousel(getFileUrls(baseUrl.concat(vehicle.getPlate())));
		}catch (IOException e) {
			carousel = new ImageCarousel(new ArrayList<String>());			
		}

        VerticalLayout cardText = new VerticalLayout();
        cardText.getStyle().set("padding", "16px"); 
        cardText.setSpacing(true);
        
        H2 title = new H2(vehicle.getBrand().getNombre().toUpperCase()); 
        H4 model = new H4(vehicle.getModel());
        Span year = new Span(vehicle.getYear() + "  •  " + formatMileage(vehicle.getKilometers()));      
        Span plate = new Span(vehicle.getPlate());
        Icon locationIcon = VaadinIcon.MAP_MARKER.create();
        Span location = new Span(vehicle.getBranch().getDescription() + "  •  "+vehicle.getBranch().getAdress());//VaadinIcon.LOCATION_ARROW_CIRCLE.create() + 
        
        HorizontalLayout locationLayout = new HorizontalLayout();
        locationLayout.setAlignItems(Alignment.CENTER);
        locationIcon.setSize("21px");
        locationIcon.getStyle().set("color", "#ff5722");
        locationLayout.add(location, locationIcon);
        
        Dialog mapDialog = new Dialog();
        mapDialog.setWidth("400px");
        mapDialog.setHeight("300px");

        IFrame map = new IFrame("https://www.google.com/maps?q=-34.6037,-58.3816&output=embed");
        map.setWidthFull();
        map.setHeightFull();

        mapDialog.add(map);

        Button openMap = new Button("Ver en mapa", e -> mapDialog.open());
        cardText.add(openMap);

        cardText.add(title, model, year, plate, locationLayout);
        
        if(vehicle instanceof VehiculoVenta)
        	setDetails(cardText, (VehiculoVenta)vehicle);
        else
        	setDetails(cardText, (VehiculoAlquilable)vehicle);
        	
        add(carousel, cardText);
    }
    
	private VerticalLayout setDetails(VerticalLayout cardText, VehiculoVenta vehicle) {
        Span price = new Span("Valor Aproximado: ".concat(formatPrice(((VehiculoVenta) vehicle).getSellPrice())));

        Details details = new Details("Mas Informacion");
        details.add(price);
        details.setWidthFull();
        details.addThemeVariants(DetailsVariant.FILLED, DetailsVariant.SMALL);

        cardText.add(details);
 		return cardText;
	}
	
	private VerticalLayout setDetails(VerticalLayout cardText, VehiculoAlquilable vehicle) {
		Details details = new Details("Mas Informacion");
		VerticalLayout content = new VerticalLayout();
		content.setSpacing(false);content.setPadding(false);
		
		Span price = new Span("Valor Aproximado: ".concat(formatPrice(((VehiculoAlquilable) vehicle).getPrice()).concat(" por dia")));
		
		CalendarGridView calendar = new CalendarGridView(dates);
		calendar.setWidthFull();
		
		content.add( price, calendar);
        details.add(content);
        details.setWidthFull();
        details.addThemeVariants(DetailsVariant.FILLED, DetailsVariant.SMALL);
        cardText.add(details);
		return cardText;
	}
	
    private String formatPrice(double price) {
        return "$ " + NumberFormat.getNumberInstance(new Locale("es", "AR")).format(price);
    } 
    
    private String formatMileage(int mileage) {
        return NumberFormat.getNumberInstance(getLocale()).format(mileage) + " km";
    }

    public static List<String> getFileUrls(String folderPath) throws IOException {
    	List<String> urls = Files.list(Paths.get(folderPath))
			                .filter(Files::isRegularFile)
			                .map(Path::toUri)
			                .map(Object::toString)
			                .collect(Collectors.toList());
    	return urls;
    }
}