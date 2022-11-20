import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenIntroComponent } from './template-driven-intro.component';

describe('TemplateDrivenIntroComponent', () => {
  let component: TemplateDrivenIntroComponent;
  let fixture: ComponentFixture<TemplateDrivenIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDrivenIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
