import { Injectable } from '@angular/core';
import { Lista } from '../clases/lista';

@Injectable()
export class ListasService {
    
    listas: Lista[] = [];

    constructor() { 
        this.cargaData();
    }
    
    /**
     * carga la data del LocalStorage en el servicio
     */
    private cargaData(){
        
        const DATA = JSON.parse(localStorage.getItem('data'));

        if (DATA) {
            this.listas = DATA;
        }

    }
    
    /**
     * carga la data del servicio en el LocalStorage 
     */
    guardarData(){
        localStorage.setItem( 'data', JSON.stringify(this.listas) );
    }
    
    /**
     * ingresa y guarda una lista
     * @param lista: Lista
     */
    ingresarLista(lista: Lista){
        this.listas.push(lista);
        this.guardarData();
    }

    eliminarLista(id: number) {
        this.listas.splice(id, 1);
        this.guardarData();
    }

}