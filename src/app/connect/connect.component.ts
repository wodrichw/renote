import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { FormData } from './form-data'
import { FirebaseApp } from 'angularfire2';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {
  formData: FormData = new FormData("", "", "", null);
  emailMessages: FirebaseListObservable<any>;
  constructor( @Inject(FirebaseApp) firebaseApp: firebase.app.App, private db: AngularFireDatabase) { 
    this.emailMessages = db.list('/emailMessages');
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log("Submit :)");
    this.emailMessages.push({
      'email': this.formData.email,
      'name': this.formData.name,
      'message': this.formData.message
    });
  }
}

/*
var server = email.server.connect({
      user: "william",
      password: "Woody1##",
      host: "notes2text@gmail.com",
      ssl: true
    });

    // send the message and get a callback with an error or details of the message that was sent 
    server.send({
      text: this.formData.name + "\n" + this.formData.email + "\n" + this.formData.message,
      from: "notes2text@gmail.com",
      to: "notes2text@gmail.com",
      subject: "Renote Connect"
    }, function (err, message) { console.log(err || message); });
  */