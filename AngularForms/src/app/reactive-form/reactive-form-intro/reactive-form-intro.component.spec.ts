import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormIntroComponent } from './reactive-form-intro.component';

describe('ReactiveFormIntroComponent', () => {
  let component: ReactiveFormIntroComponent;
  let fixture: ComponentFixture<ReactiveFormIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
