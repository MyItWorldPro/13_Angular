import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-deepdive',
  templateUrl: './template-driven-deepdive.component.html',
  styleUrls: ['./template-driven-deepdive.component.scss']
})
export class TemplateDrivenDeepdiveComponent implements OnInit {

  formModel = {
    email: '',
    password: ''
  };

  constructor() { }

  ngOnInit() {
  }

  login(loginForm: NgForm, submitEvent: any) {
    console.log(this.formModel);
    // console.log(loginForm.value);
    // console.log(loginForm.valid);
    // console.log(submitEvent);
  }

  onEmailChangeEvent(emailChangeEvent: any) {
    console.log(emailChangeEvent);
  }

}
