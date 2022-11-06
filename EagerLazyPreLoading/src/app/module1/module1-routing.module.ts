import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { M1comp1Component } from './m1comp1/m1comp1.component';
import { M1comp2Component } from './m1comp2/m1comp2.component';
import { Module1Component } from './module1.component';

const routes: Routes = [
  { path: '', component: Module1Component },
  { path: 'mod1comp1', component: M1comp1Component },
  { path: 'mod1comp2', component: M1comp2Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module1RoutingModule { }
