import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BuscadorComponent } from './buscador/buscador.component';
import { InicioComponent } from './inicio/inicio.component';
import { MessengerComponent } from './messenger/messenger.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'buscador', component: BuscadorComponent },
  { path: 'messenger', component: MessengerComponent },
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
