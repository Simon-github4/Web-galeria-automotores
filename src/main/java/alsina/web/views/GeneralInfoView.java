package alsina.web.views;

import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.html.H2;
import com.vaadin.flow.component.html.Paragraph;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.dom.Style;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.VaadinSession;

@Route(value = "", layout = MainLayout.class)
public class GeneralInfoView extends VerticalLayout{
    public GeneralInfoView() {
        //add(new Span("GeneralInfo Dataaa View Content"));
        
        setSizeFull();
        setPadding(false);
        setMargin(false);
        setJustifyContentMode(JustifyContentMode.CENTER);
        setAlignItems(Alignment.CENTER);
        setSpacing(false);

        VerticalLayout content = new VerticalLayout();
        content.setWidth("60%"); 
        content.setPadding(true);
        content.setSpacing(false);
        content.getStyle()
            .set("background", "white")
            .set("border-radius", "8px")
            .set("box-shadow", "0 2px 4px rgba(0,0,0,0.1)")
            .set("margin-top", "35px");

        H2 title = new H2("SOBRE NOSOTROS");
        title.getStyle()
            .set("color", "var(--lumo-primary-text-color)")
            .set("margin-bottom", "20px")
            .set("text-align", "center")
            .setAlignSelf(Style.AlignSelf.CENTER);
        content.add(title);

        String aboutText = "En Alsina Automotores, nos especializamos en la venta de vehículos " +
                          "nuevos y usados de la más alta calidad. Con más de 15 años de " +
                          "experiencia en el mercado automotriz, ofrecemos a nuestros clientes " +
                          "asesoramiento profesional, financiamiento flexible y un servicio " +
                          "post-venta excepcional. Nuestro compromiso es brindarte la mejor " +
                          "experiencia de compra de automóviles en la región.";

        Paragraph paragraph = new Paragraph(aboutText);
        paragraph.getStyle()
            .set("text-align", "center")
            .set("margin-top", "10px")
            .set("line-height", "1.6");
        content.add(paragraph);
        
        add(content);
        expand(content);
    }
    
 	public static void refreshCurrentPage() { 		  
 	//VaadinSession session = VaadinSession.getCurrent();
    // session.access(() -> {
      //   for (UI ui : session.getUIs()) {
             UI.getCurrent().access(() -> {
            	 UI.getCurrent().navigate(RentCarsView.class);
             });
         }
     //});
 	//}
}
