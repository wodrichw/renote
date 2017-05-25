import { Component, OnInit, Inject } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { ImageUploadModule }from 'angular2-image-upload'
import * as firebase from 'firebase'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent{
  public member: any;
  public storage: any;
  public database: any;
  public user: firebase.User;

  constructor( @Inject(FirebaseApp) firebaseApp: firebase.app.App, public afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.authState.subscribe(auth => {
      if (auth) {
        this.user = auth;
        this.database = firebaseApp.database();
      }
    });
  }


  

}
