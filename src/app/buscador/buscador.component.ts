import { Component, OnInit } from '@angular/core';

import { ResultadoModel } from '../enlace/resultado.model'
import { RESULTADOS } from '../enlace/resultado.mock';


import { BuscadorService } from '../services/buscador.service';


import { BuscadorModel } from '../models/buscador.model';
import { DocumentoModel } from '../models/documento.model';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  resultados = RESULTADOS;

  constructor(private buscadorService: BuscadorService) { }

  buscador: BuscadorModel = {
    expression: ''
  };

  documentos: DocumentoModel[];

  ngOnInit() {
  }

  buscarClick(): void {
    this.buscar();
  }

  buscar(): void {
    this.buscadorService.buscar(this.buscador)
      .subscribe(documentos => this.documentos = documentos.Datos);
  }
}
