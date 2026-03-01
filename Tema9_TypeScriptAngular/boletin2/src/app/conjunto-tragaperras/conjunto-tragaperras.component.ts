import { Component } from '@angular/core';

@Component({
  selector: 'app-conjunto-tragaperras',
  standalone: false,
  templateUrl: './conjunto-tragaperras.component.html',
  styleUrl: './conjunto-tragaperras.component.css'
})
export class ConjuntoTragaperrasComponent {
  alertarCreditos(creditos:number) {
    alert(`No tienes créditos suficientes: ${creditos}€`);
  }

  alertarPremio(creditos:number) {
    alert(`Enhorabuena, has ganado ${creditos}€`);
  }
}
