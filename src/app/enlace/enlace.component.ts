import { Component, Input, OnInit } from '@angular/core';

import { ResultadoModel } from './resultado.model'

@Component({
  selector: 'app-enlace',
  templateUrl: './enlace.component.html',
  styleUrls: ['./enlace.component.css']
})
export class EnlaceComponent implements OnInit {

  @Input() resultado:ResultadoModel

  constructor() { }

  ngOnInit() {
    console.log(this.resultado)
  }

  counter(i: number) {
    return new Array(i);
  }

}
