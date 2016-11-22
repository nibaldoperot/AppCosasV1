import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the RevistaCasas page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-revista-casas',
  templateUrl: 'revista-casas.html'
})
export class RevistaCasas {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello RevistaCasasPage Page');
  }
  fakeArray = new Array(100);

}
