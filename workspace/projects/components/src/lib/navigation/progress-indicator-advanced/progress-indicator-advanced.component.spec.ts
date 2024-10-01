import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressIndicatorAdvancedComponent } from './progress-indicator-advanced.component';

describe('ProgressIndicatorAdvancedComponent', () => {
  let component: ProgressIndicatorAdvancedComponent;
  let fixture: ComponentFixture<ProgressIndicatorAdvancedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressIndicatorAdvancedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressIndicatorAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
