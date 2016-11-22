import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Home } from '../pages/home/home';
import { Login } from '../pages/login/login';
import { HomeCosas } from '../pages/home-cosas/home-cosas';
import { HomeCasas } from '../pages/home-casas/home-casas';
import { RevistaCosas } from '../pages/revista-cosas/revista-cosas';
import { RevistaCasas } from '../pages/revista-casas/revista-casas';


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage: any = Login;

  constructor(platform: Platform) {}
}
