import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../clases/lista';

@Pipe({
    name: 'pendientes',
    pure: false
})

export class PendientesPipe implements PipeTransform {
    transform(value: Lista[], estado: boolean): Lista[] {
        
        let listas: Lista[] = [];
        
        for(let lista of value){
            
            if ( lista.terminada == estado ) {
                listas.push(lista);
            }

        }

        return listas;

    }
}