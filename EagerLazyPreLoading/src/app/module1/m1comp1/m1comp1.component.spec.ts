import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M1comp1Component } from './m1comp1.component';

describe('M1comp1Component', () => {
  let component: M1comp1Component;
  let fixture: ComponentFixture<M1comp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M1comp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M1comp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
