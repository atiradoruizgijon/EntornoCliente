import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL_BASE = "https://ejerciciostutorialesya.com/vue/datos.php";

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  // Inyectamos el objecto HttpClient
  // Crear un objecto en el constructor que no pertenece a la clase
  constructor(private http:HttpClient) {}
  /**
   * Ese codigo equivale a:
   * private http;
   * 
   * constructor(http:HttpClient) {
   *  this.http = http;
   * }
   */

  // Métodos CRUD
  rescatarTodo() {
    // ponemos any para que reciba cualquier JSON, que entre lo que sea es decir 'any'
    return this.http.get<any>(`${URL_BASE}`);
  }

  // altaProducto(producto) {

  // }

  // bajaProducto(id) {

  // }
}
