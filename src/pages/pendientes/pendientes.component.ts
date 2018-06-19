import { Component } from '@angular/core';
import { ListasService } from '../../app/services/listas.services';
import { NavController } from 'ionic-angular';
import { AgregarComponent } from '../agregar/agregar.component';

@Component({
    selector: 'app-pendientes',
    templateUrl: 'pendientes.component.html'
})
export class PendientesComponent{

    constructor(public listaDeseos: ListasService, 
                private navCtrl: NavController){
    }

    irAgregar() {
        this.navCtrl.push(AgregarComponent);
    }

}