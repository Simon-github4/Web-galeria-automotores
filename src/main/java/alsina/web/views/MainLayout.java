package alsina.web.views;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.html.Anchor;
import com.vaadin.flow.component.html.Image;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.router.RouterLayout;
import com.vaadin.flow.server.StreamResource;
import com.vaadin.flow.server.VaadinSession;

public class MainLayout extends VerticalLayout implements RouterLayout{

	private static final long serialVersionUID = -7541915872256496445L;
	private VerticalLayout contentWrapper;

	public MainLayout() {
		UI.getCurrent().getPage().addStyleSheet(
	            "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
	    );
	    UI.getCurrent().getPage().executeJs(
	            "document.documentElement.style.setProperty('--lumo-font-family', \"'Montserrat', sans-serif\");" +
	            "document.body.style.fontFamily = \"'Montserrat', sans-serif\";"
	    );    
		
		setWidthFull();
		setPadding(false);  
        setMargin(false);   
        setSpacing(false);
        
        add(new Toolbar());

    }
	
	private class Toolbar extends HorizontalLayout {

	    public Toolbar() {
	    	getStyle().set("background", "#333333");
	    	getStyle().set("font-weight", "").set("color", "white").set("font-size", "var(--lumo-font-size-l)")
	    	.set("padding", "10px"); 

	        Image icon = new Image(("/images/Alsina.png"), "Icon");
	        icon.setHeight("75px");
	        icon.getStyle().set("border-radius", "16px");
	        
	        Anchor mainLink = new Anchor("", icon); 
	        mainLink.getStyle().set("color", "inherit");
	        mainLink.setHeightFull();
	        
	        Anchor alquileresLink = new Anchor("alquileres", "Vehiculos en Alquiler"); 
	        alquileresLink.getStyle().set("color", "inherit");//.setPaddingRight("35px");
	        alquileresLink.setHeightFull();
	        alquileresLink.getStyle().set("text-align", "center");
	        
	        Anchor ventasLink = new Anchor("venta", "Vehiculos a la Venta"); 
	        ventasLink.getStyle().set("color", "inherit");//.setPaddingRight("130px");
	        ventasLink.setHeightFull();
	        ventasLink.getStyle().set("text-align", "center");
	        
	        HorizontalLayout container = new HorizontalLayout( mainLink);
	        container.setAlignItems(Alignment.CENTER); 
	        container.getStyle().set("margin-right", "auto");//.setPaddingLeft("95px");
	        container.setSpacing(true);

	        add(container, alquileresLink, ventasLink);

	        setWidthFull();
	        setSpacing(true);
	        setAlignItems(Alignment.CENTER);     
	        
	        getElement().executeJs("return window.innerWidth < 600;")
	        .then(Boolean.class, isPhone -> {
	            if (isPhone) {
	                getStyle().set("padding", "0");
	                container.getStyle().setPaddingTop("7px");
	                container.getStyle().setPaddingLeft("5px");
	    	        ventasLink.setWidthFull(); 
	    	        alquileresLink.setWidthFull(); 
	            } else {
	                getStyle().set("padding-right", "275px");
	                container.getStyle().set("padding-left", "275px");
	                alquileresLink.getStyle().setPaddingRight("15px");
	            }
	        });

	    }
	}
}
