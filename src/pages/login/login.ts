import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';

//import { HomePage } from '../home/home';
//import { Register } from '../register/register';
//import * as firebase from 'firebase';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [  ]
})
export class Login {
  auth: any
  userMail:string;
  userPass:string;
  public loginForm;


  constructor(
    public nav: NavController, 

    private navCtrl: NavController 
    ) {
      //this.auth = firebase.auth();
  }

  onSubmit(){
    console.log(this.userMail)
    
    /*
        this.auth.signInWithEmailAndPassword( this.userMail,this.userPass ). then( userSrvc => {
          this.nav.setRoot( HomePage );
        }, error => {
            console.log( error )
        });
        */
  }

  onClickRegister(){
    //this.navCtrl.push( Register );
  }
}
