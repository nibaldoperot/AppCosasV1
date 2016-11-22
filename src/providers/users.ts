/*import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { User } from '../models/user';

@Injectable()
export class Users {
  
  constructor(public http: Http) { }

  // Load all github users
  load(): Observable<User[]> {
    return this.http.get(`http://cosas.com/api.php/wp_6_postmeta/`)
      .map(res => <User[]>res.json());
      //https://scotch.io/tutorials/build-a-mobile-app-with-angular-2-and-ionic-2
  }
}*/
