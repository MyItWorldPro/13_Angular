import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-m2comp1',
  templateUrl: './m2comp1.component.html',
  styleUrls: ['./m2comp1.component.css']
})
export class M2comp1Component implements OnInit {

  constructor() {
    console.log("Module 2 Component 1 Loaded.");
   }

  ngOnInit() {
  }

}
