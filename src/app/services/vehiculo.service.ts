import { Vehiculo } from "../models/vehiculo";
import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  model : Vehiculo;
  constructor(private http: HttpClient) { }
  
  public Ingresar(model : Vehiculo): Observable<any>{
    return this.http.post("http://localhost:8087/estacionamiento/api/vehiculos", model);
  }
  
  public Listar(): Observable<any>{
    return this.http.get<any>("http://localhost:8087/estacionamiento/api/vehiculos");
  }
   
  public Salir(placa : string): Observable<any>{
    return this.http.put<any>("http://localhost:8087/estacionamiento/api/salir/" + placa, null);
  }
}
