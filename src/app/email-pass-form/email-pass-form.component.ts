import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormData } from './form-data'

@Component({
  selector: 'app-email-pass-form',
  templateUrl: './email-pass-form.component.html',
  styleUrls: ['./email-pass-form.component.css']
})
export class EmailPassFormComponent implements OnInit {
  submitted = false;
  showpassword = false;
  model =  new FormData("", "");
  @Output() formdata: EventEmitter<FormData> = new EventEmitter<FormData>();

  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    this.submitted = true;
    this.formdata.next(this.model);
  }
}
