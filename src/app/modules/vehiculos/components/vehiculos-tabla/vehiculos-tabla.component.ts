import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../../../models/vehiculo';
import { VehiculoService } from '../../../../services/vehiculo.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-vehiculos-tabla',
  templateUrl: './vehiculos-tabla.component.html',
  styleUrls: ['./vehiculos-tabla.component.css']
})
export class VehiculoComponent implements OnInit {

  title = 'Bienvenido al estacionamiento';
  vehiculosEstacionados : Array<Vehiculo>;

  constructor(private http: Http, private servicioService: VehiculoService) {
    this.http.get('http://localhost:8087/estacionamiento/api/vehiculos').subscribe(resp => this.vehiculosEstacionados = resp.json());
  }

  ngOnInit() {
  }

}
