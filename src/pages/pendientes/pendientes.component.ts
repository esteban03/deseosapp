import { Component } from '@angular/core';
import { ListasService } from '../../app/services/listas.services';
import { NavController } from 'ionic-angular';
import { AgregarComponent } from '../agregar/agregar.component';
import { Lista } from '../../app/clases/lista';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
    selector: 'app-pendientes',
    templateUrl: 'pendientes.component.html'
})
export class PendientesComponent{
    
    pendientes = false;

    constructor(public listaDeseos: ListasService, 
                private navCtrl: NavController){
    }

    irAgregar() {
        this.navCtrl.push(AgregarComponent);
    }

}