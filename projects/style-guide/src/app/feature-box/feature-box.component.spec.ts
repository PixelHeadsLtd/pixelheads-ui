import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureboxComponent } from './feature-box.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('FeatureboxComponent', () => {
  let component: FeatureboxComponent;
  let fixture: ComponentFixture<FeatureboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatureboxComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
