import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreventionTipsComponent } from './prevention-tips.component';

describe('PreventionTipsComponent', () => {
  let component: PreventionTipsComponent;
  let fixture: ComponentFixture<PreventionTipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreventionTipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreventionTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
