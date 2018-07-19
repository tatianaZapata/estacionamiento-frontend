import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { VehiculoComponent } from './modules/vehiculos/components/vehiculos-tabla/vehiculos-tabla.component';
import { VehiculosFormComponent } from './modules/vehiculos/components/vehiculos-form/vehiculos-form.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    VehiculoComponent,
    VehiculosFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
