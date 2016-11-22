import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http} from '@angular/http';
import {Md5} from 'ts-md5/dist/md5';
import { Home } from '../home/home';
import { HomeCasas } from '../home-casas/home-casas';
import { HomeCosas } from '../home-cosas/home-cosas';
import 'rxjs/add/operator/map';
import {BLE} from 'ionic-native';
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {
	
	usuario:any;
	usuarios:any;
	pass:any;


  constructor(private http: Http , public navCtrl: NavController) {}

  ionViewDidLoad() {
    window.addEventListener('BluetoothStatus.enabled', function() {
        alert('Bluetooth has been enabled');
    });
    window.addEventListener('BluetoothStatus.disabled', function() {
        alert('Bluetooth has been disabled');
    });


  }

  getName() {
    var nombre = this.usuario;
    var pass = this.pass;

    var md5 = new Md5();
    var hashed_pass = Md5.hashStr(pass);
    var hashed_nombre = Md5.hashStr(nombre);
     console.log(hashed_nombre);
    console.log(hashed_pass);
    var existe = 0;

    this.http.get('http://cosas.com/api.php/wp_6_postmeta/').map(res => res.json()).subscribe(data => {
        this.usuarios = data.data.users;
        for(var i = 0; i < this.usuarios.length; i++){
          if(this.usuarios[i].email == hashed_nombre  && this.usuarios[i].rut == hashed_pass){
           existe=this.usuarios[i].suscripcion;
           continue;
          }
        }

        console.log(existe);
        if(existe == 1) this.navCtrl.push(Home);
        if(existe == 2) this.navCtrl.push(HomeCosas);
        if(existe == 3) this.navCtrl.push(HomeCasas);
    },
    err => {
        console.log("Oops!");
    }
    );
  }

}
