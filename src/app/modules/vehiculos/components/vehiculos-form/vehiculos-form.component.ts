import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../../../models/vehiculo';
import { VehiculoService } from '../../../../services/vehiculo.service';
import { FormBuilder, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import swal from 'sweetalert';

@Component({
  selector: 'app-vehiculos-form',
  templateUrl: './vehiculos-form.component.html',
  styleUrls: ['./vehiculos-form.component.css']
})
export class VehiculosFormComponent implements OnInit {

  public vehiculoForm: FormGroup;

  public vehiculo: Vehiculo;

  constructor(private formBuilder: FormBuilder,  private vehiculoService: VehiculoService) { }

  ngOnInit() {
    this.initForm(this.vehiculo);
  }

  private initForm(vehiculo: Vehiculo) {
    this.vehiculoForm = this.formBuilder.group({
      placa: [undefined, Validators.required],
      cilindraje: [undefined, Validators.required],
      tipoVehiculo: [undefined, Validators.required]
    });
  }

  public submit() {
    const vehiculo = this.prepareDataToSend();
    this.vehiculoService.Ingresar(vehiculo).subscribe(
      res => {
        console.log(res);
        window.location.reload();
      }, 
      error => {
        console.log(error);
        //swal('titulo',mensaje,'tipo icono');
        swal('Error',error.error,'error');
      });
  }

  private prepareDataToSend(): Vehiculo {
    const formValue = this.vehiculoForm.value;
    const vehiculo = {
      placa: formValue.placa,
      cilindraje: formValue.cilindraje,
      codigoTipoVehiculo: formValue.tipoVehiculo
    };
    return vehiculo;
  }

}
