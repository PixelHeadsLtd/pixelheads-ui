import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadingSpinnerPageComponent } from './loading-spinner-page.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('LoadingSpinnerPageComponent', () => {
  let component: LoadingSpinnerPageComponent;
  let fixture: ComponentFixture<LoadingSpinnerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadingSpinnerPageComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingSpinnerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
