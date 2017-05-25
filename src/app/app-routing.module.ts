import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailPassFormComponent } from './email-pass-form/email-pass-form.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { ChatComponent } from './chat/chat.component'

export const appROUTES: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component:  SignupComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'members', component: MembersComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'chat', component: ChatComponent}
];


@NgModule({
  imports: [ RouterModule.forRoot(appROUTES) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
