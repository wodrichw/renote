import { Component, OnInit, Inject } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { ImageUploadModule }from 'angular2-image-upload'
import * as firebase from 'firebase'


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  public member: any;
  public storage: any;
  public database: any;
  public user: firebase.User;

  constructor( @Inject(FirebaseApp) firebaseApp: firebase.app.App, public afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.authState.subscribe(auth => {
      if (auth) {
        this.user = auth;
        this.database = firebaseApp.database();
        this.database.ref('users/' + auth.uid).update({
          username: auth.displayName,
          email: auth.email,
          profile_picture: auth.photoURL
        });
      }
    });
  }

  ngOnInit() { }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigateByUrl('login');
  }

  imageUploaded(event) {
    const storageRef = this.storage.ref().child('images/temp.jpg');
    storageRef.put(event.file).then(function(snapshot) {
      console.log('Uploaded a blob or file!');
    })
  }
  gotoProfile(){
    this.router.navigateByUrl('profile');
  }
}
