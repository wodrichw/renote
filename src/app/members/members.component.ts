import { Component, OnInit, Inject } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase,  FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database'
import { Router } from '@angular/router';
import { ImageUploadModule } from 'angular2-image-upload'
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
  private users: FirebaseListObservable<any>;


constructor(private udService: UserDataService, private afAuth: AngularFireAuth, private router: Router, private db: AngularFireDatabase) {
    this.afAuth.authState.subscribe(auth => {
      if (auth != null) {
        udService.setUid(auth.uid);
        this.users = db.list('users/', { preserveSnapshot: true });
        this.users.subscribe(snaps => {
          let keys: string[] = [];
          snaps.forEach(snap => {
            keys.push(snap.key);
          });
          function findKeys(key){
            return key == auth.uid;
          }
          if (keys.find(findKeys) == undefined){
            db.object('users/' + auth.uid).update({
              username: auth.displayName,
              email: auth.email,
              profile_picture: auth.photoURL
            });
          }
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
    storageRef.put(event.file).then(function (snapshot) {
      console.log('Uploaded a blob or file!');
    })
  }
}
