import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the RevistaCosas page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-revista-cosas',
  templateUrl: 'revista-cosas.html'
})
export class RevistaCosas {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello RevistaCosasPage Page');
  }

  fakeArray = new Array(100);


}
