import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RevistaCosas } from '../revista-cosas/revista-cosas';

/*
  Generated class for the HomeCosas page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home-cosas',
  templateUrl: 'home-cosas.html'
})
export class HomeCosas {
	
	
  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello HomeCosasPage Page');
  }

  revistaTapped(event) {
    this.navCtrl.push(RevistaCosas);
  }

}
