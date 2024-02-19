import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgressIndicatorLhComponent } from './progress-indicator-lh.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ProgressIndicatorLhComponent', () => {
  let component: ProgressIndicatorLhComponent;
  let fixture: ComponentFixture<ProgressIndicatorLhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProgressIndicatorLhComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressIndicatorLhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
