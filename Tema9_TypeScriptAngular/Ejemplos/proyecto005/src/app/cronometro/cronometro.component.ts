import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  standalone: false,
  templateUrl: './cronometro.component.html',
  styleUrl: './cronometro.component.css'
})
export class CronometroComponent implements OnInit {
  segundo:number = 0;
  @Input() inicio:number = 0;

  // evento personalizado, entre '< >' se indica lo que puede devolver
  // para que sea un evento, ponemos el decorador @Output
  @Output() multiplo10:EventEmitter<number> = new EventEmitter();

  // @Input() normalmente son datos que vendran del padre
  //  y @Output() que mandaremos

  ngOnInit(): void {
    this.segundo = this.inicio;

    setInterval(() => {
      this.segundo++;
      if (this.segundo % 10 == 0) this.multiplo10.emit(this.segundo);
    }, 1000);
    // para lanzar el evento:
    // this.multiplo10.emit(NUMERO);
  }
}
