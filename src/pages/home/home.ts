import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { NavController } from 'ionic-angular';
import { CategoryPage } from '../category/category';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  auth:any;
  constructor( private navCtrl: NavController ) {
    navCtrl.push( CategoryPage );
  }


}
