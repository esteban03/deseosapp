import { Component } from '@angular/core';
import { Lista, ListaItem } from '../../app/clases/index';

@Component({
    selector: 'app-agregar',
    templateUrl: 'agregar.component.html'
})
export class AgregarComponent {
    
    nombreLista: string;
    nombreItem: string;
    
    items: ListaItem[] = [];

    constructor(){
        
        this.nombreItem = '';

    }

    agregarItem() {

        if(this.nombreItem.length > 0){
            
            let item = new ListaItem();
            item.nombre = this.nombreItem;

            this.items.push(item);
            this.nombreItem = '';

        }

    }

    eliminarItem(id: number) {

        this.items.splice(id, 1);

    }

    guardar() {

        if(this.nombreLista.length > 0){
            let lista = new Lista(this.nombreLista);
        }

    }

}