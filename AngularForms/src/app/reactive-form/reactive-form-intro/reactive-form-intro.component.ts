import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-intro',
  templateUrl: './reactive-form-intro.component.html',
  styleUrls: ['./reactive-form-intro.component.scss']
})
export class ReactiveFormIntroComponent implements OnInit {

  formGroup = this.fb.group({
    email: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
    password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  get getEmail() {
    return this.formGroup.controls['email'];
  }

  get getPassword() {
    return this.formGroup.controls['password'];
  }

}
