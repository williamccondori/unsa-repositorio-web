import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BuscadorComponent } from './buscador/buscador.component';
import { InicioComponent } from './inicio/inicio.component';
import { MessengerComponent } from './messenger/messenger.component';
import { ExploradorComponent } from './explorador/explorador.component';
import { DetalleComponent } from './detalle/detalle.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'buscador', component: BuscadorComponent },
  { path: 'messenger', component: MessengerComponent },
  { path: 'explorador', component: ExploradorComponent },
  { path: 'detalle/:id', component: DetalleComponent },
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
