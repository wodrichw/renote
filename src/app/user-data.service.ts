import { Injectable, EventEmitter } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable()
export class UserDataService {
  constructor(private af: AngularFireAuth) { }

  private uid: BehaviorSubject<string> = new BehaviorSubject(null);
  private inquireUid: BehaviorSubject<string> = new BehaviorSubject(null);

  setUid(uid: string) { this.uid.next(uid); }
  getUid() { return this.uid.asObservable(); }

  setInquireUid(uid: string) { this.inquireUid.next(uid); }
  getInquireUid() { return this.inquireUid.asObservable(); }

  resetAuth() {
    this.af.authState.subscribe(user => {
      if (user) {
        this.uid.next(user.uid);
      }
    })
  }
}
