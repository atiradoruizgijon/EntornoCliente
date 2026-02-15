import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'proyecto004';

  valor1:number = 1;
  valor2:number = 1;
  valor3:number = 1;
  mensaje:string = "";

  generarAleatorio():number {
    return Math.trunc(Math.random() * 6) + 1;
  }

  comprobarJugada() {
    if (this.valor1 == this.valor2 && this.valor1 == this.valor3) {
      this.mensaje = "Has ganado";
    } else {
      this.mensaje = "Sigue intentando";
    }
  }

  ngOnInit(): void {
    this.lanzarDados();
  }

  lanzarDados() {
    this.valor1 = this.generarAleatorio();
    this.valor2 = this.generarAleatorio();
    this.valor3 = this.generarAleatorio();
    this.comprobarJugada();
  }
}
