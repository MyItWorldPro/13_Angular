import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormDeepdiveComponent } from './reactive-form-deepdive/reactive-form-deepdive.component';
import { ReactiveFormIntroComponent } from './reactive-form-intro/reactive-form-intro.component';

const routes: Routes = [
  { path: '', component: ReactiveFormIntroComponent },
  {
    path: 'reactiveFormIntro', component: ReactiveFormIntroComponent
  },
  {
    path: 'reactiveFormDeepdive', component: ReactiveFormDeepdiveComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveFormRoutingModule { }
