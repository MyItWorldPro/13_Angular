import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenDeepdiveComponent } from './template-driven-deepdive.component';

describe('TemplateDrivenDeepdiveComponent', () => {
  let component: TemplateDrivenDeepdiveComponent;
  let fixture: ComponentFixture<TemplateDrivenDeepdiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDrivenDeepdiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenDeepdiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
