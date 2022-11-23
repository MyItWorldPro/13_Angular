import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateDrivenFormRoutingModule } from './template-driven-form-routing.module';
import { TemplateDrivenFormComponent } from './template-driven-form.component';
import { TemplateDrivenIntroComponent } from './template-driven-intro/template-driven-intro.component';
import { AngularMaterialModule } from '../angular-material.module';
import { TemplateDrivenDeepdiveComponent } from './template-driven-deepdive/template-driven-deepdive.component';
import { FormsModule } from '@angular/forms';
import { CustomPasswordStrengthDirective } from '../custom-directives/passwordStrength.directive';
import { SingleErrorOnly } from '../custom-pipes/singleErrorOnly.pipe';


@NgModule({
  declarations: [TemplateDrivenFormComponent, 
    TemplateDrivenIntroComponent, 
    TemplateDrivenDeepdiveComponent,
    CustomPasswordStrengthDirective,
    SingleErrorOnly
  ],
  imports: [
    CommonModule,
    TemplateDrivenFormRoutingModule,
    AngularMaterialModule,
    FormsModule
  ]
})
export class TemplateDrivenFormModule { }
