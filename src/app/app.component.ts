import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { HomePage } from  '../pages/home/home';
import { PostPage } from '../pages/post/post';
import { CategoryTest } from '../fireframe/test/category-test';
import { PostTest } from '../fireframe/test/post-test';


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = HomePage;

  constructor(platform: Platform) {
    
  }
  
}
