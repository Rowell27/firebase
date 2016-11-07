import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { HomePage } from  '../pages/home/home';
//import { CategoryTest } from '../fireframe/test/category-test';
//import { PostTest } from '../fireframe/test/post-test';
import { CategoryPage } from '../pages/category/category';

@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = CategoryPage;


  constructor(platform: Platform) {
    
  }
}
