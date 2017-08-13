import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service'
import { Observable } from 'rxjs'
import { AngularFireDatabase } from 'angularfire2/database'

@Component({
  selector: 'app-inquire-profile',
  templateUrl: './inquire-profile.component.html',
  styleUrls: ['./inquire-profile.component.css']
})
export class InquireProfileComponent implements OnInit {
  private inquireUid: Observable<string>;
  private askBio: string = null;
  private askUname: string = null;
  constructor(private db: AngularFireDatabase, private ud: UserDataService) {
  }

  ngOnInit() {
    this.inquireUid = this.ud.getInquireUid();
    this.inquireUid.subscribe(uid => {
      if (uid != undefined && uid != null) {
        this.db.object('users/' + uid, { preserveSnapshot: true }).subscribe(snap => {
          this.askBio = snap.val().bio;
          this.askUname = snap.val().username;
        });
      }
    });
  }
}
