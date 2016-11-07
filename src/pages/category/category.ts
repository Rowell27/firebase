import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { Category, categoryData } from '../../fireframe/category';
import { CategoryEditPage } from '../category-edit/category-edit';

/*
  Generated class for the Category page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-category',
  templateUrl: 'category.html'
})
export class CategoryPage {
  count;
  c = categoryData;
  category: Category = new Category();
  data;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) { }

  displayCategory() {
    this.category.gets( re => {
      console.log(re);
      this.data = re;
      console.log( this.categories );
    });
  }

  get categories() {
    if ( this.data === void 0 ) return [];
    return Object.keys( this.data );
  }

  ionViewDidLoad() {
    // console.log('Hello CategoryPage Page');
  }

  ionViewWillEnter() {
    //console.log('CategoryPage will enter');
    this.displayCategory();
    this.onCount();
  }

  onClickEditCategory(id) {
    console.log('Details to pass: ' + this.data + this.data[id].id, this.data[id].name);
    this.navCtrl.push( CategoryEditPage, {
      id: this.data[id].id, name: this.data[id].name, 
      title: this.data[id].title, description: this.data[id].description
    });
  }

  onClickCreateCategory() {
    this.navCtrl.push( CategoryEditPage );
  }

  deleteCategory(id) {
    this.category.delete(id, s => {

    }, e => {
      alert('Error: ' + e);
    });
  }

  onClickDeleteCategory(id){
    let prompt = this.alertCtrl.create({
        title: 'Delete',
        message: 'Are you sure to delete?',
        buttons: [{
          text: 'CONFIRM',
          handler: data => {
            this.deleteCategory(id);
            this.displayCategory();
            this.onCount();
          }
        }, {
          text: 'CANCEL',
          handler: data => { }
        }
        ]
      });
      prompt.present(); 
  }
  
  onCount(){
    this.category.counter( (counter) => {
      console.log('Number of categories: ' + counter);
      this.count = counter;
      
    }, e => {
      console.log('Error' + e);
    });
  }

}
