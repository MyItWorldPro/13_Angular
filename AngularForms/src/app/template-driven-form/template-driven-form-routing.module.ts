import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateDrivenDeepdiveComponent } from './template-driven-deepdive/template-driven-deepdive.component';
import { TemplateDrivenIntroComponent } from './template-driven-intro/template-driven-intro.component';

const routes: Routes = [{
  path: '', component: TemplateDrivenIntroComponent
},
{
  path: 'templateDrivenFormIntro', component: TemplateDrivenIntroComponent
},
{
  path: 'templateDrivenFormDeepdive', component: TemplateDrivenDeepdiveComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateDrivenFormRoutingModule { }
