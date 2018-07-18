import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../../../models/vehiculo';
import { TotalPagarDTO } from '../../../../models/TotalPagarDTO';
import { VehiculoService } from '../../../../services/vehiculo.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-vehiculos-tabla',
  templateUrl: './vehiculos-tabla.component.html',
  styleUrls: ['./vehiculos-tabla.component.css']
})
export class VehiculoComponent implements OnInit {

  vehiculosEstacionados : Array<Vehiculo>;
  totalAPagar : Array<TotalPagarDTO>;
  mensajeError: string;

  constructor(private http: Http, private vehiculoService: VehiculoService) {
    this.http.get('http://localhost:8087/estacionamiento/api/vehiculos').subscribe(resp => this.vehiculosEstacionados = resp.json());
  }

  ngOnInit() {
  }

  public hacerRetiro(vehiculo: Vehiculo) {
    debugger;
    this.vehiculoService.Salir(vehiculo.placa).subscribe(resp => this.totalAPagar = resp.json());
    console.log(this.totalAPagar);
  }

}
