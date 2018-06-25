import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Lista } from '../../../app/clases/index';
import { DetalleComponent } from '../../detalle/detalle.component';
import { ListasService } from '../../../app/services/listas.services';

@Component({
    selector: 'app-listas',
    templateUrl: 'listas.component.html'
})
export class ListasComponent {
    
    @Input() pendientes = false;

    constructor(private navCtrl: NavController, 
                public listaDeseos: ListasService) {         
    }
    
    irDetalle(id: number, lista: Lista) {
        this.navCtrl.push(DetalleComponent, { id, lista });
    }
    
}