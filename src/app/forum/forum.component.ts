import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs'
import { UserDataService } from '../user-data.service'

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  private users: FirebaseListObservable<any>;
  private ukeys: string[] = [];
  private seeProfile: boolean = false;
  private inquireUid: Observable<string>

  constructor(private db: AngularFireDatabase, private ud: UserDataService) {
  }

  ngOnInit() {
    this.users = this.db.list('users/');
    this.inquireUid = this.ud.getInquireUid();
    this.inquireUid.subscribe(uid => {
      if (uid != null){
        this.seeProfile = true;
      }
    });
  }
  checkoutProfile(uid: string): void{
    if (uid != null){
      this.ud.setInquireUid(uid);
      this.seeProfile = true;
    }
  }
  doneInquiring(): void {
    this.seeProfile = false;
    this.ud.setInquireUid(null);
  }
}
