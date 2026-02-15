import { Component, Input, OnInit } from '@angular/core';
import { Articulo } from '../articulo';

@Component({
  selector: 'app-listadoarticulos',
  standalone: false,
  templateUrl: './listadoarticulos.component.html',
  styleUrl: './listadoarticulos.component.css'
})
export class ListadoarticulosComponent implements OnInit {
  @Input() datos!:Articulo[];

  ngOnInit() {
  }

}
