import { Component } from '@angular/core';

/**
 * Decorador, como en Java ej: '@ Deprecated'
 * 
 * Este lo que hace es convertir esta clase en un componente.
 * Que luego se usa en index.html con la etiqueta <app-root>
 */
@Component({
  // aqui se indica la etiqueta
  selector: 'app-root',
  // la plantilla html que se funsiona
  templateUrl: './app.component.html',
  standalone: false,
  // typescript que se fusiona
  styleUrl: './app.component.css'
  // los dos se fusionan en uno
})
export class AppComponent {
  title = 'proyecto001';

  // si queremos tiparlo: nombre:string = 'Antonio'
  nombre = 'Antonio';
  edad = 23;
  sueldos = [1200, 1300, 1600];
  activo = false;

  enActivo() {
    return this.activo ? "En activo":"En paro";
  }

  constructor() {
  }
}
