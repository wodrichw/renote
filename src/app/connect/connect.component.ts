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