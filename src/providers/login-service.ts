import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';

@Injectable()
export class UserService {

  public fireAuth: any;

/*
  constructor(public http: Http) {
    this.fireAuth = firebase.auth();
  }
  login( email: string, password: string ): any{
    return this.fireAuth.signInWithEmailAndPassword( email, password );
  }
  register( email:string, password: string ): any{
    return this.fireAuth.createUserWithEmailAndPassword( email, password )
  }
  logout():any{
    return this.fireAuth.signOut();
  }
  */
}
