import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Logout } from './../logout';
import { UserDataService } from './../user-data.service';

const navLinksLeft: string[][] = [
  ['about', 'About'],
  ['donate', 'Donate'],
  ['connect', 'Connect'],
  ['progress', 'Progress'],
  ['login', 'Check Out Renote'],
  ['forum', 'Community Message Board']
];
const navLinksRight: string[][] = [
  ['members', 'Convert']
];


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  private linksL = navLinksLeft;
  private linksR = navLinksRight;
  private loggedIn: boolean = false;
  private dispName: string = 'Profile';
  private uid: Observable<string>;

  constructor(private db: AngularFireDatabase, private router: Router, private afAuth: AngularFireAuth, private udService: UserDataService) {
    this.uid = udService.getUser();

    this.uid.subscribe(uid => {
      db.object(`users/${uid}/displayName`, { preserveSnapshot: true }).subscribe(snap => {
        if (snap.val() != null){
          this.dispName = snap.val();
          this.loggedIn = true;
        } else {
          this.dispName = 'Profile'
          this.loggedIn = false;
        }
      });
    });
  }

  logout(): void{
    this.udService.setUid('null');
    this.afAuth.auth.signOut();
    this.router.navigateByUrl('login');
  }
}
