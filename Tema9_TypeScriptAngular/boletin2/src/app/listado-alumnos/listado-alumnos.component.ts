import { Component, OnInit } from '@angular/core';
import { AlumnosService } from '../alumnos.service';
import { Alumno } from '../alumno';

@Component({
  selector: 'app-listado-alumnos',
  standalone: false,
  templateUrl: './listado-alumnos.component.html',
  styleUrl: './listado-alumnos.component.css'
})
export class ListadoAlumnosComponent implements OnInit {
  alumnos!:Alumno[];

  constructor(private alumnosService:AlumnosService) {}
  
  ngOnInit(): void {
    this.alumnosService.recuperarAlumnos().subscribe(
      (resultado) => {
        this.alumnos = resultado;
        console.log(resultado);
      }
    );
  }
}
