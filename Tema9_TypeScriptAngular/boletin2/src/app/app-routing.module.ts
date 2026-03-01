import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TragaperrasComponent } from './tragaperras/tragaperras.component';
import { ListadoAlumnosComponent } from './listado-alumnos/listado-alumnos.component';
import { AltaAlumnoComponent } from './alta-alumno/alta-alumno.component';

const routes: Routes = [
  {
    path: 'tragaperras',
    component: TragaperrasComponent
  },
  {
    path: 'listadoAlumnos',
    component: ListadoAlumnosComponent
  },
  {
    path: 'altaAlumnos',
    component: AltaAlumnoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
