import { Component, Output, EventEmitter } from '@angular/core';
import { SignupFormData } from './signup-form-data';
import { AngularFireDatabase } from 'angularfire2/database'

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  submitted = false;
  showpassword = false;
  model = new SignupFormData("", "", "", "");
  private prevUname: string = "";
  private prevEmail: string = "";
  private nameCheck: boolean = true; 
  private emailCheck: boolean = true;
  @Output() formdata: EventEmitter<SignupFormData> = new EventEmitter<SignupFormData>();

  constructor(private db: AngularFireDatabase) { }


  matchPass(pswd: string, pswdConf: string): boolean {
    if (pswd == pswdConf) {
      return true;
    } else {
      return false;
    }
  }
  checkEmail(email: string): boolean {
    if (email !== this.prevEmail && email.length <= 40 && email.length > 0 && email != null) {
      this.prevEmail = email;
      this.db.object('users/', {
        preserveSnapshot: true
      }).subscribe(snaps => {
        let emailTaken: boolean = false;
       snaps.forEach(snap => {
          console.log(`uname: ${email} username: ${snap.val().email}`);
          if (email === snap.val().email) {
            emailTaken = true;
            return;
          }
        });
        console.log('\n');
        this.emailCheck = !emailTaken;
      });
    }
    return this.emailCheck;
  }
  checkUname(uname: string): boolean {
    if (uname !== this.prevUname && uname.length <= 40 && uname.length > 0 && uname != null) {
      this.prevUname = uname;
      this.db.object('users/', {
        preserveSnapshot: true
      }).subscribe(snaps => {
        let nametaken: boolean = false;
        snaps.forEach(snap => {
          console.log(`uname: ${uname} username: ${snap.val().username}`);
          if (uname === snap.val().username) {
            nametaken = true;
          }
        });
        console.log('\n');
        this.nameCheck = !nametaken;
      });
    }
    return this.nameCheck;
  }

}
