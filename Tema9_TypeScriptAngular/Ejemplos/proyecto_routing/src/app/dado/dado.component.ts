import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dado',
  standalone: false,
  templateUrl: './dado.component.html',
  styleUrl: './dado.component.css'
})
export class DadoComponent {
  @Input() valor:number = 1;

  lanzar() {
    this.valor = Math.trunc(Math.random() * 6) + 1;
  }
}
