import { Component, OnInit, Input, Inject } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

import { OnLoginService } from './../on-login.index'
import { Subscription } from 'rxjs/Subscription'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [OnLoginService]
})
export class HeaderComponent {
  uid: string;
  private uname: string;
  private uemail: string ;
  private uphoto: string;
  private database: firebase.database.Database;
  subscription: any;



  constructor(@Inject(FirebaseApp) firebaseApp: firebase.app.App, private onLoginService: OnLoginService) {
    this.database = firebaseApp.database();
  }

  @Input()
  set _uid(uid: string){
    this.uid = uid;
    const dbRef = this.database.ref('users/'+this.uid);
    dbRef.child('email').on('value', snap => {
      this.uemail = snap.val();
    });
    dbRef.child('username').on('value', snap => {
      this.uname = snap.val();
    });
  }

  updateUname(val: string){
    this.uname = val;
  }
  updateUemail(val: string){
    this.uemail = val;
  }
}
