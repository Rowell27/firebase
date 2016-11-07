import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Login } from  '../pages/login/login';
import { Register } from '../pages/register/register';
import { CategoryPage } from '../pages/category/category';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Login,
    Register,
    CategoryPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Login,
    Register,
    CategoryPage
  ],
  providers: [  ]
})
export class AppModule {}
