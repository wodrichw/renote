import { Router } from '@angular/router'
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth'
import { UserDataService } from './user-data.service';

export class Logout {
  private uid: string;
  private validLogout: boolean = false;

  constructor(private au: AngularFireAuth, private udService: UserDataService, private router: Router) {
  }

  logout(): void {
    this.udService.setUid(null);
    this.au.auth.signOut();
    this.router.navigateByUrl('login');
  }


}
