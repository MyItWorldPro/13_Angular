import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateDrivenFormRoutingModule } from './template-driven-form-routing.module';
import { TemplateDrivenFormComponent } from './template-driven-form.component';
import { TemplateDrivenIntroComponent } from './template-driven-intro/template-driven-intro.component';


@NgModule({
  declarations: [TemplateDrivenFormComponent, TemplateDrivenIntroComponent],
  imports: [
    CommonModule,
    TemplateDrivenFormRoutingModule
  ]
})
export class TemplateDrivenFormModule { }
