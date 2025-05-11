package alsina.web.views;

import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import javax.imageio.ImageIO;

import com.vaadin.flow.component.ClientCallable;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.dialog.Dialog;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.Image;
import com.vaadin.flow.component.icon.Icon;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.server.StreamResource;
import com.vaadin.flow.shared.Registration;

public class ImageCarousel extends Div {
	
    private List<StreamResource> images = new ArrayList<>();//StreamResource
    private int currentIndex = 0;
    private Image currentImage;
    private Button prevButton;
    private Button nextButton;
    
    private int switchInterval = 10000;
    private Registration autoAdvanceRegistration;

    public ImageCarousel(List<byte[]> bytes) {
    	getStyle()
	    	.set("position", "relative")
	        .setHeight("200px")
	        .set("width", "100%");

    	for (byte[] imgBytes : bytes) {
    		if (imgBytes != null && imgBytes.length > 0) {
    			String filename = UUID.randomUUID() + ".png";
   	            StreamResource resource = new StreamResource(filename, 
    	                () -> new ByteArrayInputStream(imgBytes));
   	            resource.setContentType("image/png");
   	            images.add(resource);
    	        }
    	}

        Div imageContainer = new Div();
        imageContainer.getStyle()
        	.set("overflow", "hidden")  
            .set("display", "flex")
            .set("align-items", "center")
            .set("position", "absolute")
            .set("width", "100%")
            .set("height", "200px");
        
        currentImage = new Image();
        currentImage.getStyle()
            .set("object-fit", "cover")
            .set("display", "block")
            .set("width", "100%")
            .set("height", "100%")
            .set("transition", "opacity 0.5s ease-in-out")
            .set("opacity", "1");
        
        imageContainer.add(currentImage);
        
        prevButton = createSwitchButton("left");
        prevButton.addClickListener(e -> {
            resetAutoSwitchTimer();
            showPreviousImage();
        });
        nextButton = createSwitchButton("right");
        nextButton.addClickListener(e -> {
            resetAutoSwitchTimer();
            showNextImage();
        });
        
        add(prevButton, imageContainer, nextButton);
          
        updateImage();
        addDetachListener(e -> stopAutoSwitch());
        addAttachListener(e -> startAutoSwitch());
    	
        StreamResource imageResource = new StreamResource("default.png",
                () -> getClass().getResourceAsStream("/images/default.png"));
        imageResource.setContentType("image/png");

        if(this.images.isEmpty())
    		currentImage.setSrc(imageResource);//"images/default.png");
       
        String contextPath = UI.getCurrent().getElement().getProperty("baseURI");
        System.out.println(contextPath);
        
    	Dialog lightboxDialog = new Dialog();
    	lightboxDialog.setModal(true);
    	lightboxDialog.setCloseOnOutsideClick(true);
    	lightboxDialog.setDraggable(false);
    	lightboxDialog.setResizable(false);
    	lightboxDialog.setMaxWidth("90vw");
    	lightboxDialog.setMaxHeight("90vh");

    	Image enlargedImage = new Image();
    	enlargedImage.setSizeFull();
    	enlargedImage.getStyle().set("object-fit", "contain");

    	currentImage.addClickListener(e -> {
    	    if (!images.isEmpty()) {
    	        enlargedImage.setSrc(currentImage.getSrc());
    	        enlargedImage.setAlt("Imagen ampliada " + (currentIndex + 1));
    	        lightboxDialog.open();
    	    }
    	});
    	currentImage.getStyle().set("cursor", "zoom-in");

    	lightboxDialog.add(enlargedImage);
    	add(lightboxDialog); // agregamos el diálogo al layout actual

    }
    
    private Button createSwitchButton(String side) {
    	Icon icon = (side.equalsIgnoreCase("left")? VaadinIcon.ANGLE_LEFT.create() : VaadinIcon.ANGLE_RIGHT.create());
    	Button b = new Button(icon);
        b.getStyle()
             .set("position", "absolute")
             .set("top", "50%")
             .set(side, "8px")
             .set("transform", "translateY(-50%)")
             .set("background-color", "rgba(255, 255, 255, 0.9)")
             .set("border-radius", "35%")
             .set("width", "32px")
             .set("height", "32px")
             .set("min-width", "32px")
             .set("padding", "0")
             .set("color", "var(--lumo-primary-text-color)")
             .set("z-index", "2")
             .set("cursor", "pointer")
             .set("transition", "all 0.2s ease")
             .set("box-shadow", "0 2px 4px rgba(0,0,0,0.2)")
             .set("font-size", "1.6rem");
        return b; 
    }
    private void showPreviousImage() {
        	currentIndex = (currentIndex - 1 + images.size()) % images.size();
        	animateTransition();
    }  
    private void showNextImage() {
            currentIndex = (currentIndex + 1) % images.size();
            animateTransition();
    }
    
    private void updateImage() {
        if (!images.isEmpty()) {
            currentImage.setSrc(images.get(currentIndex));
            currentImage.setAlt("Vehicle image " + (currentIndex + 1));
        }
        prevButton.setVisible(images.size() > 1);
        nextButton.setVisible(images.size() > 1);
    }
    
    private void startAutoSwitch() {
        if (images.size() <= 1) return;
    	stopAutoSwitch();
    	
    	UI ui = UI.getCurrent();
        
        // Use Vaadin's built-in polling mechanism
        ui.setPollInterval(switchInterval);
        autoAdvanceRegistration = ui.addPollListener(event -> {
            if (ui.isAttached()) {
                showNextImage();
            } else {
                stopAutoSwitch();
            }
        });
    }
    
    private void resetAutoSwitchTimer() {
        stopAutoSwitch(); 
        startAutoSwitch();
    }
    
    private void stopAutoSwitch() {
        if (autoAdvanceRegistration != null) {
            autoAdvanceRegistration.remove();
            autoAdvanceRegistration = null;
        }
        UI ui = UI.getCurrent();
        if (ui != null) {
            ui.setPollInterval(-1); // Disable polling
        }
    }
    
    private void animateTransition() {
        prevButton.setEnabled(false);
        nextButton.setEnabled(false);
        
        currentImage.getElement().getStyle().set("opacity", "0");
        
        currentImage.getElement().executeJs(
            "this.addEventListener('transitionend', function handler(e) {" +
            "  if (e.propertyName === 'opacity' && parseFloat(this.style.opacity) === 0) {" +
            "    this.removeEventListener('transitionend', handler);" +
            "    $0.$server.onFadeOutComplete();" +
            "  }" +
            "});", 
            getElement()
        );
    }
    @ClientCallable
    private void onFadeOutComplete() {
        updateImage();
        
        currentImage.getElement().getStyle().set("opacity", "0");
        currentImage.getElement().executeJs("void this.offsetWidth;"); // Force reflow
        
        currentImage.getElement().getStyle().set("opacity", "1");
        
        prevButton.setEnabled(true);
        nextButton.setEnabled(true);
   }
    
    private StreamResource createStreamResourceNio(String fileUrl) {
        String s = fileUrl.replaceAll("%20", " ");
    	Path filePath = Paths.get(s.replaceFirst("file:///C", "C"));
            
        return new StreamResource(filePath.getFileName().toString(), () -> {
            try {
                return Files.newInputStream(filePath);
            } catch (IOException e) {
            	e.printStackTrace();
                throw new RuntimeException("Error reading file", e);
                //return getClass().getResourceAsStream("images/Alsina.png");
            }
        });
    }
}
