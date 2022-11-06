import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-m1comp2',
  templateUrl: './m1comp2.component.html',
  styleUrls: ['./m1comp2.component.css']
})
export class M1comp2Component implements OnInit {

  constructor() {
    console.log("Module 1 Component 2 Loaded.");
  }

  ngOnInit() {
  }

}
