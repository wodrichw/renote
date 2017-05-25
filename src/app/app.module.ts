import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Angulartics2GoogleAnalytics } from 'angulartics2'
import { ImageUploadModule } from 'angular2-image-upload'
import { AppRoutingModule } from './app-routing.module'

import { AngularFireModule } from 'angularfire2'
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth'
import * as firebase from 'firebase';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailPassFormComponent } from './email-pass-form/email-pass-form.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { ChatComponent } from './chat/chat.component';
import { BlogComponent } from './blog/blog.component';

export const FIRECONFIG = {
  apiKey: "AIzaSyDiZ1YBms2zgTNk1jULGT-NpdBsraIhNVo",
  authDomain: "renote-633e0.firebaseapp.com",
  databaseURL: "https://renote-633e0.firebaseio.com",
  projectId: "renote-633e0",
  storageBucket: "renote-633e0.appspot.com",
  messagingSenderId: "325890645640"
};


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailPassFormComponent,
    SignupComponent,
    MembersComponent,
    AdminComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    ChatComponent,
    BlogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ImageUploadModule.forRoot(),
    AngularFireModule.initializeApp(FIRECONFIG, 'my-app'),
    AngularFireAuthModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
