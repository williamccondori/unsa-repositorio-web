import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  constructor(    
    private route: ActivatedRoute,
    private location: Location) {
   }

  ngOnInit() {
    this.obtenerDocumento();
  }

  obtenerDocumento(): void {
    const id = +this.route.snapshot.paramMap.get('id');
  }

}
