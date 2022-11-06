import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module1RoutingModule } from './module1-routing.module';
import { Module1Component } from './module1.component';
import { M1comp1Component } from './m1comp1/m1comp1.component';
import { M1comp2Component } from './m1comp2/m1comp2.component';


@NgModule({
  declarations: [Module1Component, M1comp1Component, M1comp2Component],
  imports: [
    CommonModule,
    Module1RoutingModule
  ]
})
export class Module1Module {
  constructor() {
    let timestamp = '[' + new Date().toLocaleTimeString()+ ']';
    console.log(timestamp,'Module 1 Loaded.');
  }
}
