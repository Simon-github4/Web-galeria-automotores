package alsina.web.views;

import java.time.LocalDate;

public class CalendarDay {

	private LocalDate date;
    private boolean isAvailable;

    public CalendarDay() {
    }
    public CalendarDay(LocalDate currentDate, boolean available) {
    	this.date = currentDate;
    	this.isAvailable = available;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public boolean isAvailable() {
		return isAvailable;
	}

	public void setAvailable(boolean isAvailable) {
		this.isAvailable = isAvailable;
	}
    
    
}
