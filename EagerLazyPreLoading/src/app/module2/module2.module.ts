import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module2RoutingModule } from './module2-routing.module';
import { Module2Component } from './module2.component';
import { M2comp1Component } from './m2comp1/m2comp1.component';
import { M2comp2Component } from './m2comp2/m2comp2.component';


@NgModule({
  declarations: [Module2Component, M2comp1Component, M2comp2Component],
  imports: [
    CommonModule,
    Module2RoutingModule
  ]
})
export class Module2Module {
  constructor() {
    let timestamp = '[' + new Date().toLocaleTimeString()+ ']';
    console.log(timestamp,'Module 2 Loaded.');
  }
}
