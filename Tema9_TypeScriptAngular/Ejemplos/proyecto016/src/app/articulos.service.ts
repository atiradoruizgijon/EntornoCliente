import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Articulo } from './articulo';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

 
  //url='http://scratchya.com.ar/angular/problema016/'; // disponer url de su servidor que tiene las páginas PHP
  //url='http://proyecto016.com.devel/';
  //url='https://ruizgijon.ddns.net/soldadoj/angularya/proyecto016/';
  url=`https://ruizgijon.ddns.net/atirado/proyecto016/api/`;
  
  constructor(private http: HttpClient) { }

  recuperarTodos() {
    return this.http.get<Articulo[]>(`${this.url}recuperartodos.php`);
  }

  alta(articulo:Articulo) {
    return this.http.post<any>(`${this.url}alta.php`, JSON.stringify(articulo));    
  }

  baja(codigo:string) {
    return this.http.delete<any>(`${this.url}baja.php?codigo=${codigo}`);
  }
  
  seleccionar(codigo:string) {
    return this.http.get<any>(`${this.url}seleccionar.php?codigo=${codigo}`);
  }

  modificacion(articulo:Articulo) {
    return this.http.put<any>(`${this.url}modificacion.php`, JSON.stringify(articulo));    
  } 
}
