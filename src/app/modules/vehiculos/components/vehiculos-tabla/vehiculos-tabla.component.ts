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
  totalAPagar : TotalPagarDTO;
  mensajeError: string;

  constructor(private http: Http, private vehiculoService: VehiculoService) {
    this.http.get('http://localhost:8087/estacionamiento/api/vehiculos').subscribe(resp => this.vehiculosEstacionados = resp.json());
    this.totalAPagar = new TotalPagarDTO();
  }

  ngOnInit() {
  }

  public hacerRetiro(vehiculo: Vehiculo) {
    this.vehiculoService.Salir(vehiculo.placa).subscribe(resp => this.totalAPagar = resp);
  }

  public pageRefresh(){
    window.location.reload();
  }

}
