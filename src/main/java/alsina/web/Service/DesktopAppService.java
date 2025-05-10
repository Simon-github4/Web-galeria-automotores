package alsina.web.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import alsina.web.entities.VehiculoAlquilable;
import alsina.web.entities.VehiculoVenta;

@Service
@Scope("singleton")
public class DesktopAppService {

    private List<VehiculoVenta> sellVehicles = new ArrayList<>();
    private List<VehiculoAlquilable> rentVehicles = new ArrayList<>();
    private Map<String, Set<LocalDate>> unavailableDatesPerVehicle = new HashMap<>();
    private Map<String, List<byte[]>> images = new HashMap<>();

    public List<VehiculoVenta> getSellVehicles() {
		return sellVehicles;
	}
	public List<VehiculoAlquilable> getRentVehicles() {
		return rentVehicles;
	}

	public Map<String, Set<LocalDate>> getUnavailableDatesPerVehicle() {
		return unavailableDatesPerVehicle;
	}

	public Map<String, List<byte[]>> getImages(){
		return this.images;
	}
	
	public void updateData(List<VehiculoVenta> sellVehicles,List<VehiculoAlquilable> rentVehicles, Map<String, Set<LocalDate>> unavailableMap) {
        this.sellVehicles = sellVehicles;
        this.rentVehicles = rentVehicles;
        this.unavailableDatesPerVehicle = unavailableMap;
    }
	
	public void updateDate(Map<String, List<byte[]>> map) {
		this.images = map;
	}
	
}

