import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    Pagina404Component,
    ListadoProductosComponent,
    AcercaDeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
