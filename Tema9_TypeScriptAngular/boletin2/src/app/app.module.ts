import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TragaperrasComponent } from './tragaperras/tragaperras.component';
import { ListadoAlumnosComponent } from './listado-alumnos/listado-alumnos.component';
import { AltaAlumnoComponent } from './alta-alumno/alta-alumno.component';
import { ConjuntoTragaperrasComponent } from './conjunto-tragaperras/conjunto-tragaperras.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TragaperrasComponent,
    ListadoAlumnosComponent,
    AltaAlumnoComponent,
    ConjuntoTragaperrasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
