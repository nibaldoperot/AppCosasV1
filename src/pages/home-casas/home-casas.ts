import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RevistaCasas } from '../revista-casas/revista-casas';

/*
  Generated class for the HomeCasas page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home-casas',
  templateUrl: 'home-casas.html'
})
export class HomeCasas {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello HomeCasasPage Page');
  }

  revistaCasasTapped(event) {
		this.navCtrl.push(RevistaCasas);
	}

}
