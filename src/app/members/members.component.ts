import { Component, OnInit, Inject } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { ImageUploadModule }from 'angular2-image-upload'
import { Logout } from './../logout';
import * as firebase from 'firebase';
import { UserDataService } from './../user-data.service';


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  private member: any;
  private storage: any;
  private database: any;
  private user: any;

  constructor( @Inject(FirebaseApp) firebaseApp: firebase.app.App, private udService: UserDataService, private afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.authState.subscribe(auth => {
      if (auth != null) {
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
    this.udService.setUid('null');
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
