import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dado',
  standalone: false,
  templateUrl: './dado.component.html',
  styleUrl: './dado.component.css'
})
export class DadoComponent {
  // si el hijo va a recibir datos del padre, le ponemos al dato 
  // el decorador @Input(), hay que importarlo
  @Input() valor:number = 1;
}
