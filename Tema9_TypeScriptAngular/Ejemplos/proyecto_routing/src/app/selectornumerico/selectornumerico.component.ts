import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-selectornumerico',
  standalone: false,
  templateUrl: './selectornumerico.component.html',
  styleUrl: './selectornumerico.component.css'
})
export class SelectornumericoComponent implements OnInit {
    @Input() minimo: number = 1;
    @Input() maximo: number = 10;
    actual: number = 1;
  
    ngOnInit() {
      this.actual = this.minimo;
    }
  
    incrementar() {
      if (this.actual < this.maximo) this.actual++;
    }
  
    decrementar() {
      if (this.actual > this.minimo) this.actual--;
    }  
  
    fijar(numero:number) {
      if (numero >= this.minimo && numero <= this.maximo) this.actual = numero;
    }

    resetear() {
      this.ngOnInit();
    }
}
