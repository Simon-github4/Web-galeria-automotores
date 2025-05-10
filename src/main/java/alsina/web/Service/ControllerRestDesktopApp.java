package alsina.web.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.server.VaadinSession;

import alsina.web.entities.VehiculoAlquilable;
import alsina.web.entities.VehiculoVenta;
import alsina.web.views.GeneralInfoView;
import alsina.web.views.MainLayout;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping(path = "/client/data")
public class ControllerRestDesktopApp {
	
    @Autowired
    private DesktopAppService rentCarDataStore;
    @Autowired
    private ObjectMapper objectMapper;
    
	@PostMapping(path= "/setClientData")
	@ResponseStatus(HttpStatus.CREATED)
	@ResponseBody
	public void setClientData(@RequestBody Map<String, Object> requestedData) {//<VehiculoVenta> vehicles, Map<VehiculoAlquilable, List<LocalDate>> unavailableDatesPerVehicle) {
		List<VehiculoVenta> vehiculos = objectMapper.convertValue(
		        requestedData.get("sellVehicles"),
		        new TypeReference<List<VehiculoVenta>>() {}
		    );
		List<VehiculoAlquilable> vehiculosAlq = objectMapper.convertValue(
		        requestedData.get("rentVehicles"),
		        new TypeReference<List<VehiculoAlquilable>>() {}
		    );
		Map<String, Set<LocalDate>> unavailableMap = objectMapper.convertValue(
		        requestedData.get("unavailableDatesPerVehicle"),
		        new TypeReference<Map<String, Set<LocalDate>>>() {}
		    );
		Map<String, List<byte[]>> images = objectMapper.convertValue(
		        requestedData.get("images"),
		        new TypeReference <Map<String, List<byte[]>>>() {}
		    );
		
		rentCarDataStore.updateData(vehiculos, vehiculosAlq, unavailableMap);
		rentCarDataStore.updateDate(images);
	}
	
	@GetMapping(path= "check")
	public String check() {
		return "all ok";
	}
	
}
