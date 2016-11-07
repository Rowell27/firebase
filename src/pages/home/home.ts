import { Component } from '@angular/core';
//import * as firebase from 'firebase';
import { NavController } from 'ionic-angular';
import { CategoryPage } from '../category/category';
import { CategoryTest } from '../../fireframe/test/category-test';
import { PostTest } from '../../fireframe/test/post-test';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  auth:any;
  constructor( private navCtrl: NavController ) {
    // navCtrl.push( CategoryPage );


    new CategoryTest().test(
      () => {
        console.log("CategoryTest End");
        new PostTest().test(
          () => {
            console.log('PostTest End');
          }
        )
      }
    )

  }


}
