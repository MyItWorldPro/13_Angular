import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormRoutingModule } from './reactive-form-routing.module';
import { ReactiveFormComponent } from './reactive-form.component';
import { ReactiveFormIntroComponent } from './reactive-form-intro/reactive-form-intro.component';
import { ReactiveFormDeepdiveComponent } from './reactive-form-deepdive/reactive-form-deepdive.component';
import { AngularMaterialModule } from '../angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ReactiveFormComponent, ReactiveFormIntroComponent, ReactiveFormDeepdiveComponent],
  imports: [
    CommonModule,
    ReactiveFormRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ]
})
export class ReactiveFormModule { }
