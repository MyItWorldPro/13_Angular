import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M2comp2Component } from './m2comp2.component';

describe('M2comp2Component', () => {
  let component: M2comp2Component;
  let fixture: ComponentFixture<M2comp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M2comp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M2comp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
