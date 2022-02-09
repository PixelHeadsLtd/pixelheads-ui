import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressIndicatorLhComponent } from './progress-indicator-lh.component';

describe('ProgressIndicatorLhComponent', () => {
  let component: ProgressIndicatorLhComponent;
  let fixture: ComponentFixture<ProgressIndicatorLhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressIndicatorLhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressIndicatorLhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
