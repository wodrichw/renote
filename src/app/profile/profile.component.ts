import { Component, OnInit, Inject } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { ImageUploadModule } from 'angular2-image-upload';
import * as firebase from 'firebase';
import { UserDataService } from './../user-data.service'


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  private database: any;
  private user: any;
  private bio: string;
  private username: string;
  private checkname: string  = "";
  private nameCheck: boolean = true;
  private prevUname: string = "";
  private confirmUpdate: boolean = false;


  constructor( @Inject(FirebaseApp) firebaseApp: firebase.app.App, private afAuth: AngularFireAuth, private router: Router, private db: AngularFireDatabase, private userServ: UserDataService) {
    this.afAuth.authState.subscribe(auth => {
      if (auth) {
        this.user = auth;
        this.database = firebaseApp.database();
        const dbRef = this.database.ref('users/' + this.user.uid);
        userServ.setUid(auth.uid)
        dbRef.child('bio').on('value', snap => {
          this.bio = snap.val();
        });
        dbRef.child('username').on('value', snap => {
          this.username = snap.val();
          this.checkname = this.username;
        });
      }
    });
  }


  checkUname(uname: string): boolean {
    if (uname  === this.username){
      this.nameCheck = true;
    }
    if (uname !== this.prevUname && uname.length <= 40 && uname.length > 0 && uname != null) {
      this.nameCheck = true;
      this.prevUname = uname;
      this.db.object('users/', {
        preserveSnapshot: true
      }).subscribe(snaps => {
        let nametaken: boolean = false;
        snaps.forEach(snap => {
          if (uname === snap.val().username) {
            this.nameCheck = false;
          }
        });
      });
    }
    return this.nameCheck;
  }



  async updateProfileData() {
    this.db.object('users/' + this.user.uid).update(
      { bio: this.bio }
    );
    this.db.object('users/' + this.user.uid).update(
      { username: this.checkname }
    );
    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    this.confirmUpdate = true;
    await sleep(1000);
    this.confirmUpdate = false;
  }
}
