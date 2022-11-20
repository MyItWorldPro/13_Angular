import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormDeepdiveComponent } from './reactive-form-deepdive.component';

describe('ReactiveFormDeepdiveComponent', () => {
  let component: ReactiveFormDeepdiveComponent;
  let fixture: ComponentFixture<ReactiveFormDeepdiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormDeepdiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormDeepdiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
