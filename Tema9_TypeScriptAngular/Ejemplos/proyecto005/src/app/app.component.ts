import { Component, ViewChild } from '@angular/core';
import { CronometroComponent } from './cronometro/cronometro.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto005';

  // el decorador viewchild hace que pueda acceder a propiedades y metodos del componente hijo
  // añado el '!' para que no marque error.
  @ViewChild(CronometroComponent) cronometro!: CronometroComponent;

  mensaje:string = "";

  manejadorMultiplo10(segundos:number) {
    alert("Evento" + segundos);
  }

  manejadorFinalcountdown(segundos:number) {
    this.mensaje = "La cuenta atrás a finalizado";
  }

  reiniciar() {
    this.mensaje = "";
    // llamo a la funcion que reinicia el contador
    this.cronometro.reiniciar();
  }
}
