import { Injectable } from '@angular/core';
import { Lista } from '../clases/lista';

@Injectable()
export class ListasService {
    
    listas: Lista[] = [];

    constructor() { 

        let lista1 = new Lista('Lista de supermercado');
        let lista2 = new Lista('Lista de juegos');
        let lista3 = new Lista('Lista de deportes');

        this.listas.push(lista1);
        this.listas.push(lista2);
        this.listas.push(lista3);
        
    }
}