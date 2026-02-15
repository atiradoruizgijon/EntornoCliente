import { Component } from '@angular/core';
import { Articulo } from './articulo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto008';

  articulos:Articulo[] = [
    { codigo: 1, descripcion: 'papas', precio: 10.55 },
    { codigo: 2, descripcion: 'manzanas', precio: 12.10 },
    { codigo: 3, descripcion: 'melon', precio: 52.30 },
    { codigo: 4, descripcion: 'cebollas', precio: 17 },
    { codigo: 5, descripcion: 'calabaza', precio: 20 }
  ];
}
