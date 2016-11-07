import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Category, categoryData } from '../../fireframe/category';
/*
  Generated class for the CategoryEdit page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-category-edit',
  templateUrl: 'category-edit.html'
})
export class CategoryEditPage {

  c = categoryData;
  category: Category = new Category();
  data;

  constructor(public navCtrl: NavController, public navPar: NavParams) {
    this.c.id = this.navPar.get('id');
    this.c.name = this.navPar.get('name');
    this.c.title = this.navPar.get('title');
    this.c.description = this.navPar.get('description');
    
    // console.log('ID get from Category Page: ' + this.c.id);
  }
  
  ionViewDidLoad() {
    // console.log('Hello CategoryEditPage Page');
  }

  createCategory(){
    this.category
      .set('id',this.c.id)
      .set('name', this.c.name)
      .set('title',this.c.title)
      .set('description', this.c.description)
      .create(s => {
        this.navCtrl.pop();
      }, e => {
        alert('Error: ' + e);
      });
  }

  updateCategory(){
    this.category
      .set('id',this.c.id)
      .set('name', this.c.name)
      .set('title',this.c.title)
      .set('description', this.c.description)
      .update( s=> {
        this.navCtrl.pop();
      }, e => {
        alert('Error: ' + e);
      })
  }

  onClickSubmit() {
    console.log( this.c );

    // this.category.set( this.c.id, this.c.name, this.c.title, this.c.description ).create( s => {
    //   this.navCtrl.pop();
    // }, e => {
    //   alert('Error: ' + e );
    // } );

    if(this.data.id){
    //   //Update category
    //   this.updateCategory();
    // } 
    // else {
    //   //Create category
      this.createCategory();
    }
    
  }
}
