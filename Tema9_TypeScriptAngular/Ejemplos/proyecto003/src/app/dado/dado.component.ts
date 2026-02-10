import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dado',
  standalone: false,
  templateUrl: './dado.component.html',
  styleUrl: './dado.component.css'
})
export class DadoComponent implements OnInit {
  // con ! le decimos a angular que le aseguramos que va a tener un valor
  valor!:number //= 1;
  
  /**
   * Este método está relacionado con el ciclo de vida del componente.
   * Todos los componentes tienen un ciclo de vida. 
   * El componente es creado en un tiempo dado, se destruye en otro momento dado.
   * Un componente pasa por distintas etapas en el ciclo de vida. Como
   * ngOnChanges, ngOnDestroy
   * 
   * Se puede decir que este método es como 'onload' de JS normal.
   */
  ngOnInit(): void {
    this.valor = this.generarAleatorio();
  }

  generarAleatorio():number {
    return Math.trunc(Math.random() * 6 ) + 1;
  }
}
