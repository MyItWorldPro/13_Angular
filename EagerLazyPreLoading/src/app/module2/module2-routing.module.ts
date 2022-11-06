import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { M2comp1Component } from './m2comp1/m2comp1.component';
import { M2comp2Component } from './m2comp2/m2comp2.component';
import { Module2Component } from './module2.component';

const routes: Routes = [
  { path: '', component: Module2Component },
  { path: 'mod2comp1', component: M2comp1Component },
  { path: 'mod2comp2', component: M2comp2Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module2RoutingModule { }
