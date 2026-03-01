import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tragaperras',
  standalone: false,
  templateUrl: './tragaperras.component.html',
  styleUrl: './tragaperras.component.css'
})
export class TragaperrasComponent {
  @Input() credito:number = 0;
  figuras = [
    "bar", "campana", "cereza", "limon", "naranja", 
    "platano", "sandia", "siete", "uva"      
  ];
  resultado = this.tirarJugada();
  @Output() sinCreditos = new EventEmitter();
  @Output() premio = new EventEmitter();


  jugar() {
    if (this.credito < 5) {
      this.sinCreditos.emit(this.credito);
    } else {
      this.credito -= 5;
      this.resultado = this.tirarJugada();
      this.comprobarResultado(this.resultado);
    }
  }

  figuraAleatoria() {
    return this.figuras[Math.round(Math.random() * (this.figuras.length - 1))];
  }

  tirarJugada() {
    return [this.figuraAleatoria(), this.figuraAleatoria(), this.figuraAleatoria()];
  }

  // r es el array con el resultado
  comprobarResultado(r:any) {
    // si los tres son iguales:
    if (r[0] == r[1] && r[0] == r[2]) {
      // si los 3 son siete:
      if (r[0] == "siete") {
        this.credito += 1000;
        this.premio.emit(1000);
      } else {
        this.credito += 20;
        this.premio.emit(20);
      } 
      // si alguno coinciden dos al menos
    } else if (r[0] == r[1] || r[0] == r[2] || r[1] == r[2]) {
      this.credito += 5;
      this.premio.emit(5);
    }
  }
}
