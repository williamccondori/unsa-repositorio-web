import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { AppRoutingModule } from './app-routing.module';
import { BuscadorComponent } from './buscador/buscador.component';
import { InicioComponent } from './inicio/inicio.component';
import { EnlaceComponent } from './enlace/enlace.component';
import { MessengerComponent } from './messenger/messenger.component';
import { ExploradorComponent } from './explorador/explorador.component';
import { DetalleComponent } from './detalle/detalle.component';
import { ResultadoComponent } from './resultado/resultado.component';

import { BuscadorService } from './services/buscador.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    BannerComponent,
    BuscadorComponent,
    InicioComponent,
    EnlaceComponent,
    MessengerComponent,
    ExploradorComponent,
    DetalleComponent,
    ResultadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    BuscadorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
