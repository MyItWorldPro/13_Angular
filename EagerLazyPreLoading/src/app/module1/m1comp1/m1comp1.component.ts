import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-m1comp1',
  templateUrl: './m1comp1.component.html',
  styleUrls: ['./m1comp1.component.css']
})
export class M1comp1Component implements OnInit {

  constructor() {
    console.log("Module 1 Component 1 Loaded.");
   }

  ngOnInit() {
  }

}
