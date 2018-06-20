import { Component } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';
import { Lista, ListaItem } from '../../app/clases/index';
import { ListasService } from '../../app/services/listas.services';

@Component({
    selector: 'app-agregar',
    templateUrl: 'agregar.component.html'
})
export class AgregarComponent {
    
    nombreLista: string;
    nombreItem: string;
    
    items: ListaItem[] = [];

    constructor(private alertCtrl: AlertController, 
                private navCtrl: NavController,
                private _listas: ListasService){
        
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
    
    /**
     * Guarda toda la lista con sus item's asignados
     */
    guardar() {
        
        if (this.nombreLista.length == 0) {
            this.showAlert('Nombre de la lista', 'Es necesario ingresar un nombre para la lista!');
            return;
        }

        let lista = new Lista(this.nombreLista);
        lista.items = this.items;
        
        // ingresamos lista con sus items en el servicio
        this._listas.ingresarLista(lista);
        this.navCtrl.pop(); // devuelve a la pantalla anterior si hemos navegado con NavController

    }

    private showAlert(titulo: string, subTitulo: string) {
        const alert = this.alertCtrl.create({
            title: titulo,
            subTitle: subTitulo,
            buttons: ['OK']
        });
        alert.present();
    }

}