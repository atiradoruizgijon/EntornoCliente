import { Component, OnInit, Output } from '@angular/core';
import { ProductosService } from '../productos.service';
import { ProductoInterface } from '../producto-interface';

@Component({
  selector: 'app-listado-productos',
  standalone: false,
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css'
})
export class ListadoProductosComponent implements OnInit {

  constructor(private servicioProductos:ProductosService) {}
  // productos:any;
  productos:ProductoInterface[] = [];
  
  ngOnInit(): void {
    // va a devolver un objeto de tipo Observable, con subscribe
    this.servicioProductos.rescatarTodo().subscribe(
      datos => {
        console.log(datos);
        this.productos = datos;
      }
    );
  }

}
