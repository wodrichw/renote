import { Component, OnInit, Inject } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database'
import { Router } from '@angular/router';
import { ImageUploadModule }from 'angular2-image-upload'
import * as firebase from 'firebase'


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent{
  private database: any;
  private user: firebase.User;
  private bio: string;
  private username: string;

  private confirmUpdate: boolean = false;


  constructor( @Inject(FirebaseApp) firebaseApp: firebase.app.App, public afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.authState.subscribe(auth => {
      if (auth) {
        this.user = auth;
        this.database = firebaseApp.database();
        const dbRef = this.database.ref('users/'+this.user.uid);
        dbRef.child('bio').on('value', snap => {
          this.bio = snap.val();
        });
        dbRef.child('displayName').on('value', snap => {
          this.username = snap.val();
        });
      }
    });
  }

  async updateProfileData(){
    this.database.ref('users/' + this.user.uid).update(
      {bio: this.bio}
    );
    this.database.ref('users/'+ this.user.uid).update(
      {displayName: this.username}
    );

    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    this.confirmUpdate = true;
    await sleep (1000);
    this.confirmUpdate = false;
  }
}
