import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M1comp2Component } from './m1comp2.component';

describe('M1comp2Component', () => {
  let component: M1comp2Component;
  let fixture: ComponentFixture<M1comp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M1comp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M1comp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
