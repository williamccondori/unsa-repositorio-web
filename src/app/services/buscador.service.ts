import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { ResultModel } from '../models/result.model';
import { BuscadorModel } from '../models/buscador.model';
import { DocumentoModel } from '../models/documento.model';

@Injectable({
    providedIn: 'root',
})
export class BuscadorService {
    private buscadorUrl = 'http://127.0.0.1.xip.io:8000/repositorio/api';

    constructor(private http: HttpClient) { }

    buscar(buscador: any): Observable<ResultModel<DocumentoModel[]>> {
        const resultado = this.http.get<ResultModel<DocumentoModel[]>>(`${this.buscadorUrl}/search`, { params: buscador });
        return resultado;
    }
}
