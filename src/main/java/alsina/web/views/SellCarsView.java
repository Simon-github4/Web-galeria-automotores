package alsina.web.views;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.vaadin.flow.component.orderedlayout.FlexLayout;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.orderedlayout.FlexComponent.Alignment;
import com.vaadin.flow.router.Route;

import alsina.web.Service.ClienteRestVehiculos;
import alsina.web.Service.DesktopAppService;
import alsina.web.entities.VehiculoAlquilable;
import alsina.web.entities.VehiculoVenta;
import jakarta.annotation.PostConstruct;

@Route(value = "venta", layout = MainLayout.class)
public class SellCarsView extends VerticalLayout {
	
	//@Autowired
	//private ClienteRestVehiculos service;
	private VerticalLayout content;	
    @Autowired
    private DesktopAppService desktopService;
    
    public SellCarsView() {
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
   	List<VehiculoVenta> vehicles = getCars();
    	
    	FlexLayout cardContainer = new FlexLayout();
    	cardContainer.setFlexWrap(FlexLayout.FlexWrap.WRAP);
    	cardContainer.setJustifyContentMode(FlexLayout.JustifyContentMode.START);
    	cardContainer.setWidthFull();
    	cardContainer.getStyle()
	        .set("display", "flex")
	        .set("gap", "10px"); // this works as plain CSS
    	content.add(cardContainer);

    	for (VehiculoVenta vehicle : vehicles) {
    	    VehicleCard card = new VehicleCard(vehicle, null);
    	    card.setMaxWidth("325px");
    	    card.setWidth("90%");
    	    card.getStyle().set("margin-bottom", "10px"); 
    	    cardContainer.add(card);
    	}
    }

	private List<VehiculoVenta> getCars() {
		return desktopService.getSellVehicles();
	}
	
	
}

