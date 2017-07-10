import { Component, OnInit } from '@angular/core';
import { FormData } from './../email-pass-form/form-data';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { observeOn } from 'rxjs/operator/observeOn';
import * as firebase from 'firebase/app';

import { Router } from '@angular/router';

import { OnLoginService } from './../on-login.index'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ OnLoginService ]
})
export class LoginComponent {
  model: FormData;
  user: Observable<firebase.User>;
  userInit: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth, private router: Router,private _onLoginService: OnLoginService) {
    this.user =  afAuth.authState;
    this.userInit = this.user;
    this.afAuth.authState.subscribe(auth => {
      if(auth) {
        this.router.navigateByUrl('/members');
      }
    });
  }

  setEmailpass(formdata: FormData): void{
    this.model = formdata;
    firebase.auth().signInWithEmailAndPassword(this.model.email, this.model.pass);
    this.afAuth.auth.onAuthStateChanged(auth => {
      if(auth) {
        this._onLoginService.setLogin(auth.uid);
        this.router.navigateByUrl('/members');
      }
    });
  }
  loginGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this.afAuth.auth.onAuthStateChanged(auth => {
      if(auth) {
        this._onLoginService.setLogin(auth.uid);
        this.router.navigateByUrl('/members');
      }
    });
  }

  signup(){
    this.router.navigateByUrl('/signup');
  }

  logout() {
   this.afAuth.auth.signOut();
 }
}
