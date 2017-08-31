import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Angulartics2Module, Angulartics2GoogleAnalytics } from 'angulartics2';
import { ImageUploadModule } from 'angular2-image-upload';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VirtualScrollModule } from 'angular2-virtual-scroll';

//Services
import { UserDataService } from './user-data.service';

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
import { ConnectComponent } from './connect/connect.component';
import { ForumComponent} from './forum/forum.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ProfileSettingsFormComponent } from './profile-settings-form/profile-settings-form.component';
import { InquireProfileComponent } from './inquire-profile/inquire-profile.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';



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
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    AboutComponent,
    DonateComponent,
    ConnectComponent,
    SignupFormComponent,
    ForumComponent,
    ProfileSettingsFormComponent,
    InquireProfileComponent,
    ChatBoxComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
    ImageUploadModule.forRoot(),
    AngularFireModule.initializeApp(FIRECONFIG, 'my-app'),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    VirtualScrollModule
  ],
  providers: [
    UserDataService,
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
