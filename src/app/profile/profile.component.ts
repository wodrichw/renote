import { Component, OnInit, Inject } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { ImageUploadModule }from 'angular2-image-upload'
import * as firebase from 'firebase'


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent{
  public member: any;
  public storage: any;
  public database: any;
  public user: any;
  bio: string;
  username: string;

  updateBio: boolean = false;
  updateUsername: boolean = false;

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

  setUpdateBio(){
    this. updateBio = true;
  }
  updateBioFirebase(){
    this.database.ref('users/' + this.user.uid).update(
      {bio: this.bio}
    );
    this.updateBio = false;
  }

  setUpdateUsername(){
    this.updateUsername = true;
  }
  updateUsernameFirebase(){
    this.database.ref('users/'+ this.user.uid).update(
      {displayName: this.username}
    );
    this.updateUsername = false;
  }

  routeToMember(){
    this.router.navigateByUrl('members')
  }
}
