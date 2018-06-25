import { Component } from "@angular/core";
import { ListasService } from '../../app/services/listas.services';
import { DetalleComponent } from '../detalle/detalle.component';
import { Lista } from '../../app/clases/index';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'app-terminados',
    templateUrl: 'terminados.component.html'
})
export class TerminadosComponent {
    
    constructor(public listaDeseos: ListasService, 
                private navCtrl: NavController) {   
    }

    irDetalle(id: number, lista: Lista) {
        this.navCtrl.push(DetalleComponent, { id, lista });
    }

}