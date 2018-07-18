import { AutorModel } from './autor.model';

export class DocumentoModel {
    Id: number;
    Titulo: string;
    Anio: number;
    Resumen: string;
    Autor: AutorModel;
}
