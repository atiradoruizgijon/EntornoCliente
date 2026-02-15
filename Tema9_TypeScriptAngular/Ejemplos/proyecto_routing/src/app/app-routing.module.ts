import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DadoComponent } from './dado/dado.component';
import { CronometroComponent } from './cronometro/cronometro.component';
import { SelectornumericoComponent } from './selectornumerico/selectornumerico.component';
import { Pagina404Component } from './pagina404/pagina404.component';

const routes: Routes = [
  {
    path: '', 
    redirectTo:'/dado', 
    pathMatch:'full'
  },
  {
    path: 'dado', 
    component: DadoComponent
  },
  {
    path: 'cronometro', 
    component: CronometroComponent
  },
  {
    path: 'selector', 
    component: SelectornumericoComponent
  },
  {
    path: '**',
    component: Pagina404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
