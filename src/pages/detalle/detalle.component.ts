import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Lista, ListaItem } from '../../app/clases/index';
import { ListasService } from '../../app/services/listas.services';
import { AlertController } from 'ionic-angular';

@Component({
    selector: 'app-detalle',
    templateUrl: 'detalle.component.html'
})
export class DetalleComponent {
    
    id: number;
    lista: Lista;

    constructor(private navCtrl: NavController,
                private navParams: NavParams, 
                private _lista: ListasService, 
                private alertCtrl: AlertController) { 
        
        this.id = this.navParams.get('id');
        this.lista = this.navParams.get('lista');

    }

    editarItem(item: ListaItem) {
        item.completado = !item.completado;
        
        let todosMarcados = true;
        for (let item of this.lista.items) {
            
            if ( !item.completado ) {
                todosMarcados = false;
                break;
            }

        }

        this.lista.terminada = todosMarcados;

        this._lista.guardarData();
    }

    eliminarLista() {

        const titulo = 'Borrar';
        const mensaje = '¿Esta seguro de eliminar esta lista?';

        const confirm = this.alertCtrl.create({
            title: titulo,
            message: mensaje,
            buttons: [
                {
                    text: 'Cancelar',
                    handler: () => {

                    }
                },
                {
                    text: 'Aceptar',
                    handler: () => {
                        this._lista.eliminarLista(this.id);
                        this.navCtrl.pop();
                    }
                }
            ]
        });
        confirm.present();

    }

}