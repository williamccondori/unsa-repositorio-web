import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BuscadorComponent } from './buscador/buscador.component';
import { InicioComponent } from './inicio/inicio.component';


const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'buscador', component: BuscadorComponent },
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
