import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable()
export class UserDataService {
  private uid: BehaviorSubject<string> = new BehaviorSubject('Profile');


  
  setUid(uid: string) {
    this.uid.next(uid);
  }
  getUser() {
    return this.uid.asObservable();
  }

}
