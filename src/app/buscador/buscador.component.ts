import { Component, OnInit } from '@angular/core';

import { ResultadoModel } from './../enlace/resultado.model'
import { RESULTADOS } from './../enlace/resultado.mock';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  resultados = RESULTADOS;

  constructor() { }

  ngOnInit() {
    
  }

  
}
