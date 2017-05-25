import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

export class OnLoginService {
  login: EventEmitter<string> = new EventEmitter();

  setLogin(string){
    this.login.emit(string);
  }

  getLogin(){
    return this.login;
  }
}
