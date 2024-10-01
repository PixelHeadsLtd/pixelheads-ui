import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgressCircleComponent } from './progress-circle.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ProgressCircleComponent', () => {
  let component: ProgressCircleComponent;
  let fixture: ComponentFixture<ProgressCircleComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ProgressCircleComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
