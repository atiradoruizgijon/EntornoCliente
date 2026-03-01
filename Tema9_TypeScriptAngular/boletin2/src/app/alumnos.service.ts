import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  url = "http://localhost/EntornoCliente/Tema9_TypeScriptAngular/boletin2/API/devolverAlumnos.php";

  constructor(private http:HttpClient) { }

  recuperarAlumnos() {
    return this.http.get<any>(this.url);
  }
}
