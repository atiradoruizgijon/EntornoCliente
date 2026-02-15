import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  standalone: false,
  templateUrl: './cronometro.component.html',
  styleUrl: './cronometro.component.css'
})
export class CronometroComponent implements OnInit {
  segundo:number = 0;
  @Input() inicio:number = 9;

  // evento personalizado, entre '< >' se indica lo que puede devolver
  // para que sea un evento, ponemos el decorador @Output
  @Output() multiplo10:EventEmitter<number> = new EventEmitter();
  @Output() finalcountdown:EventEmitter<number> = new EventEmitter();

  // @Input() normalmente son datos que vendran del padre
  //  y @Output() que mandaremos

  ngOnInit(): void {
    this.segundo = this.inicio;

    let contador = setInterval(() => {
      this.segundo--;
      if (this.segundo % 10 == 0 && this.segundo != 0) alert("Segundo " + this.segundo);
      if (this.segundo == 0) clearInterval(contador);
    }, 1000);
    
    // para lanzar el evento:
    // this.multiplo10.emit(NUMERO);
  }

  // vuelvo a llamar al la funcion ngOnInit para que vuelva a empezar.
  reiniciar() {
    this.ngOnInit();
  }
}
