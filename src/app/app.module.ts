import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Home } from '../pages/home/home';
import { Login } from '../pages/login/login';
import { HomeCosas } from '../pages/home-cosas/home-cosas';
import { HomeCasas } from '../pages/home-casas/home-casas';
import { RevistaCosas } from '../pages/revista-cosas/revista-cosas';
import { RevistaCasas } from '../pages/revista-casas/revista-casas';


@NgModule({
  declarations: [
    MyApp,
    Home,
    Login,
    HomeCosas,
    HomeCasas,
    RevistaCosas,
    RevistaCasas
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    Login,
    HomeCosas,
    HomeCasas,
    RevistaCosas,
    RevistaCasas
  ],
  providers: []
})
export class AppModule {}
