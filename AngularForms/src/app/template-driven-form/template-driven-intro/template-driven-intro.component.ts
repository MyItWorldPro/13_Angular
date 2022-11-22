import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-intro',
  templateUrl: './template-driven-intro.component.html',
  styleUrls: ['./template-driven-intro.component.scss']
})
export class TemplateDrivenIntroComponent implements OnInit {

  formModel = {
    email: '',
    password: ''
  };

  constructor() { }

  ngOnInit() {
  }

  login(loginForm: NgForm) {
    console.log(loginForm.value);
  }

}
