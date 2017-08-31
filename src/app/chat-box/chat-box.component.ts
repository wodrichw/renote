import { SignupFormData } from './../signup-form/signup-form-data';
import { Component, OnInit } from '@angular/core';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { UserDataService } from '../user-data.service';
import { Observable } from 'rxjs';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {
  private messages: FirebaseListObservable<any>;
  private uidObs: Observable<string>;
  private uid: string = null;
  private uname: string;
  private newMessage: string = null;
  private items = ("as;ldfaddiivnoaivdoaidvnaokodfaodoivaodivnaodvinaodivnaodivnadv").split("");
  constructor(private db: AngularFireDatabase, private uds: UserDataService) {}

  ngOnInit() {
    this.messages = this.db.list('messages/');
    this.uidObs = this.uds.getUid();
    this.uidObs.subscribe(uid => {
      if (uid != null){
        this.uid = uid;
        this.db.object('users/' + uid,  { preserveSnapshot: true }).subscribe(user => {
          this.uname = user.val().username;
        });
      }
    });
  }

  setInquireUser(uid: string): void {
    console.log(`inquire uid ${uid}`);
    this.uds.setInquireUid(uid);
  }
  submit(): void {
    if (this.uid != null && this.newMessage != null){
      this.messages.push({
        'uid': this.uid,
        'username': this.uname,
        'body': this.newMessage
      });
      this.newMessage = null;
    }else{
      console.log('Message not sent correctly');
      console.log(`uid: ${this.uid} message: ${this.newMessage}`);
    }
  }
}
