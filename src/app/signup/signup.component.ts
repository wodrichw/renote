import { Component, OnInit } from '@angular/core';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { FormData } from '../email-pass-form/form-data'

import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  model: FormData;
  constructor(public afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }
  setEmailpass(formdata: FormData): void{
    this.model = formdata;

    this.afAuth.auth.createUserWithEmailAndPassword(this.model.email, this.model.pass);
    this.afAuth.auth.onAuthStateChanged(auth => {
      if(auth) {
        this.router.navigateByUrl('/members');
      }
    });
  }
  backToLogin(){
    this.router.navigateByUrl('/login')
  }
}
