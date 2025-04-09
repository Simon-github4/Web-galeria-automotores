package alsina.web.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Scope;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.ResourceAccessException;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import alsina.web.entities.Alquiler;
import alsina.web.entities.Vehiculo;
import alsina.web.entities.VehiculoAlquilable;
import alsina.web.entities.VehiculoVenta;


@Scope("singleton")
@Service
public class ClienteRestVehiculos {

	protected final Logger logger = LoggerFactory.getLogger(ClienteRestVehiculos.class);

	@Value("${servicevehiculos.address}")
	private String adress;
	private String branch = "rest/";//podria ser cars

	public List<VehiculoAlquilable> getVehiculosAlquilables(){
		String uri = adress.concat(branch).concat("getVehiculosAlquilables");
		UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(uri);
		RestTemplate restTemplate = new RestTemplate();
		try {
			ResponseEntity<List<VehiculoAlquilable>> res = restTemplate.exchange(builder.toUriString(),
					HttpMethod.GET, HttpEntity.EMPTY, new ParameterizedTypeReference<List<VehiculoAlquilable>>() {
			});
			return res.getBody();
			}catch (ResourceAccessException e) {
			    // Manejo de errores de conexión
				e.printStackTrace();
			    return new ArrayList<VehiculoAlquilable>();
		} catch (HttpClientErrorException e2) {
			return new ArrayList<VehiculoAlquilable>();
		}
	}
		
	public List<VehiculoVenta> getVehiculosVenta(){
		String uri = adress.concat(branch).concat("getVehiculosVenta");
		UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(uri);
		RestTemplate restTemplate = new RestTemplate();
		try {
			ResponseEntity<List<VehiculoVenta>> res = restTemplate.exchange(builder.toUriString(),
					HttpMethod.GET, HttpEntity.EMPTY, new ParameterizedTypeReference<List<VehiculoVenta>>() {
			});
			return res.getBody();
			}catch (ResourceAccessException e) {
				e.printStackTrace();
			    return new ArrayList<VehiculoVenta>();
		} catch (HttpClientErrorException e2) {
			e2.printStackTrace();
			return new ArrayList<VehiculoVenta>();
		}
	}

	public List<Alquiler> getAlquileresByVehicle(Vehiculo vehicle) {
		String uri = adress.concat(branch).concat("getAlquileresByVehicle?vehicle=").concat(vehicle.getId().toString());
		System.out.println(uri);
		UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(uri);
		RestTemplate restTemplate = new RestTemplate();
		try {
			ResponseEntity<List<Alquiler>> res = restTemplate.exchange(builder.toUriString(),
					HttpMethod.GET, HttpEntity.EMPTY, new ParameterizedTypeReference<List<Alquiler>>() {
			});
			return res.getBody();
			}catch (ResourceAccessException e) {
				e.printStackTrace();
			    return new ArrayList<Alquiler>();
		} catch (HttpClientErrorException e2) {
			e2.printStackTrace();
			return new ArrayList<Alquiler>();
		}
	}

	public Set<LocalDate> getUnavailablesDatesByVehiculoAlquilable(Vehiculo vehicle) {
		String uri = adress.concat(branch).concat("getUnavailablesDatesByVehiculoAlquilable?vehicle=").concat(vehicle.getId().toString());
		System.out.println(uri);
		UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(uri);
		RestTemplate restTemplate = new RestTemplate();
		try {
			ResponseEntity<Set<LocalDate>> res = restTemplate.exchange(builder.toUriString(),
					HttpMethod.GET, HttpEntity.EMPTY, new ParameterizedTypeReference<Set<LocalDate>>() {
			});
			return res.getBody();
			}catch (ResourceAccessException e) {
				e.printStackTrace();
			    return new HashSet<LocalDate>();
		} catch (HttpClientErrorException e2) {
			e2.printStackTrace();
			return new HashSet<LocalDate>();
		}
	}


}
