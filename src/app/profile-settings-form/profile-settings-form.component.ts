import { Component, Output, EventEmitter } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserDataService } from '../user-data.service'
import { FormBuilder, Validators } from '@angular/forms'

class ProfileFormData {
  constructor(username: string, bio: string) { }
}

@Component({
  selector: 'app-profile-settings-form',
  templateUrl: './profile-settings-form.component.html',
  styleUrls: ['./profile-settings-form.component.css']
})
export class ProfileSettingsFormComponent {
  submitted = false;
  showpassword = false;
  model = null;
  private nameBioForm = null
  private prevUname: string = "";
  private prevEmail: string = "";
  private nameCheck: boolean = true;
  private emailCheck: boolean = true;

  @Output() formdata: EventEmitter<ProfileFormData> = new EventEmitter<ProfileFormData>();

  constructor(private db: AngularFireDatabase, private af: AngularFireAuth, private us: UserDataService, public fb: FormBuilder) {
    us.getUid().subscribe(uid => {
      if (uid != null) {
        db.object('users/' + uid).subscribe(user => {
          console.log(`username: ${user.username}, bio: ${user.bio}`);
          this.model = new ProfileFormData(user.username, user.bio);
          this.nameBioForm = fb.group({
            name: [user.username, Validators.required],
            bio: [user.bio, Validators.required]
          });
        });
      }
    });
  }

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
    if (uname != null && uname !== this.prevUname && uname.length <= 40 && uname.length > 0) {
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

  submitNameBio() {

  }
}