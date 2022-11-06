import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M2comp1Component } from './m2comp1.component';

describe('M2comp1Component', () => {
  let component: M2comp1Component;
  let fixture: ComponentFixture<M2comp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M2comp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M2comp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
