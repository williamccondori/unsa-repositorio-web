import { Component, Input, OnInit } from '@angular/core';

import { DocumentoModel } from '../models/documento.model';

@Component({
  selector: 'app-enlace',
  templateUrl: './enlace.component.html',
  styleUrls: ['./enlace.component.css']
})
export class EnlaceComponent implements OnInit {

  @Input() documento: DocumentoModel;

  constructor() { }

  ngOnInit() {
  }

  counter(i: number) {
    return new Array(i);
  }

}
