import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './Ejercicio1/contador.component';
import { EstudiantesComponent } from './Ejercicio2/estudiantes.component';
import { ListadoComponent } from './Ejercicio3/listado.component';
import { NgifComponent } from './Ngif/ngif.component';
import { NgswitchComponent } from './Ngswitch/ngswitch.component';
import { NgPluralComponent } from './Ngplural/ngplural.component';
import { NgComponentOutletComponent } from './NgcomponentOutlet/ngcomponentOutlet.component';





@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    EstudiantesComponent,
    ListadoComponent,
    NgifComponent,
    NgswitchComponent,
    NgPluralComponent,
    NgComponentOutletComponent
   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
