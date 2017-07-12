import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailPassFormComponent } from './email-pass-form/email-pass-form.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { DonateComponent } from './donate/donate.component';
import { ProgressComponent } from './progress/progress.component';
import { ConnectComponent } from './connect/connect.component';
import { ForumComponent } from './forum/forum.component';

export const appROUTES: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component:  SignupComponent},
  { path: 'members', component: MembersComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'about', component: AboutComponent},
  { path: 'donate', component: DonateComponent},
  { path: 'progress', component: ProgressComponent},
  { path: 'connect', component: ConnectComponent},
  { path: 'forum', component: ForumComponent}
];


@NgModule({
  imports: [ RouterModule.forRoot(appROUTES) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
