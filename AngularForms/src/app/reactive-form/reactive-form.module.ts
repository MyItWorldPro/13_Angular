import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormRoutingModule } from './reactive-form-routing.module';
import { ReactiveFormComponent } from './reactive-form.component';
import { ReactiveFormIntroComponent } from './reactive-form-intro/reactive-form-intro.component';


@NgModule({
  declarations: [ReactiveFormComponent, ReactiveFormIntroComponent],
  imports: [
    CommonModule,
    ReactiveFormRoutingModule
  ]
})
export class ReactiveFormModule { }
