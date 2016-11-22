import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RevistaCasas } from '../revista-casas/revista-casas';
import { RevistaCosas } from '../revista-cosas/revista-cosas';

/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home{

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello HomePage Page');
  }

  revistaTapped(event) {
    this.navCtrl.push(RevistaCosas);
  }
  revistaCasasTapped(event) {
    this.navCtrl.push(RevistaCasas);
  }

  

}
