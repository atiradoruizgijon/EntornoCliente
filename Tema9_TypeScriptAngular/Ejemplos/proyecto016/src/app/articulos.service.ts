import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
  url='http://localhost/EntornoCliente/Tema9_TypeScriptAngular/Ejemplos/proyecto016/api/'; // disponer url de su servidor que tiene las páginas PHP
  constructor(private http: HttpClient) { }

  recuperarTodos() {
    return this.http.get<any>(`${this.url}recuperartodos.php`);
  }

  alta(articulo:any) {
    return this.http.post<any>(`${this.url}alta.php`, JSON.stringify(articulo));    
  }

  baja(codigo:number) {
    return this.http.get<any>(`${this.url}baja.php?codigo=${codigo}`);
  }
  
  seleccionar(codigo:number) {
    return this.http.get<any>(`${this.url}seleccionar.php?codigo=${codigo}`);
  }

  modificacion(articulo:any) {
    return this.http.post<any>(`${this.url}modificacion.php`, JSON.stringify(articulo));    
  }
}
