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
  edad = 16;
  sueldos = [1200, 1300, 1600];
  activo = false;
  provincias = [
    {id:1, nombre:"Huelva"},
    {id:2, nombre:"Sevilla"},
    {id:3, nombre:"Córdoba"},
    {id:4, nombre:"Jaén"}
  ];
  contador:number = 1;

  incrementarContador() {
    this.contador++;
  }
  decrementarContador() {
    this.contador--;
  }

  enActivo() {
    return this.activo ? "En activo":"En paro";
  }

  cumplirMayoria() {
    this.edad = 18;
    this.sueldos.push(Math.trunc(Math.random()*2000));
    this.nombre = "Oscar Wilde";
  }
}
