package alsina.web.views;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;

import com.vaadin.flow.component.orderedlayout.FlexLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;

import alsina.web.Service.ControllerRestDesktopApp;
import alsina.web.Service.DesktopAppService;
import alsina.web.entities.VehiculoAlquilable;
import jakarta.annotation.PostConstruct;

@Route(value = "alquileres", layout = MainLayout.class)
public class RentCarsView extends VerticalLayout {
	
	//@Autowired
	//private ClienteRestVehiculos service;
	private VerticalLayout content; 
		
    @Autowired
    private DesktopAppService desktopService;
    
    public RentCarsView() {
        setAlignItems(Alignment.CENTER);

    	content = new VerticalLayout();
    	add(content);
        //content.setWidth("75%");
    	content.setWidthFull(); // makes it adapt to screen
    	content.getStyle()
    	    .set("max-width", "1050px")     // prevents it from being too wide on desktop
    	    .set("margin", "0 auto")        // centers the content
    	    .set("background", "white")
    	    .set("border-radius", "8px")
    	    .set("box-shadow", "0 2px 4px rgba(0,0,0,0.1)")
    	    .set("padding", "1rem")
    	    .set("margin-top", "35px");

        content.setPadding(true);
        content.setSpacing(true);
        setSpacing(true);
    }  
    
    @PostConstruct	// Se ejecuta solo
	private void init() {
    	List<VehiculoAlquilable> vehicles = getCars();
    	
    	FlexLayout cardContainer = new FlexLayout();
    	cardContainer.setFlexWrap(FlexLayout.FlexWrap.WRAP);
    	cardContainer.setJustifyContentMode(FlexLayout.JustifyContentMode.START);
    	cardContainer.setWidthFull();
    	cardContainer.getStyle()
	        .set("display", "flex")
	        .set("gap", "10px"); // this works as plain CSS
    	content.add(cardContainer);

    	for (VehiculoAlquilable vehicle : vehicles) {
    	    VehicleCard card = new VehicleCard(vehicle, desktopService.getUnavailableDatesPerVehicle().get(vehicle.getId().toString()));
    	    System.out.println(vehicle +"\n"+ desktopService.getUnavailableDatesPerVehicle().get(vehicle.getId().toString()));
    	    card.setMaxWidth("325px");
    	    card.setWidth("90%");
    	    card.getStyle().set("margin-bottom", "10px"); 
    	    cardContainer.add(card);
    	}
    }

	private List<VehiculoAlquilable> getCars() {
		//return (Set<VehiculoAlquilable>) service.getVehiculosAlquilables();
		return desktopService.getRentVehicles();
	}

}

