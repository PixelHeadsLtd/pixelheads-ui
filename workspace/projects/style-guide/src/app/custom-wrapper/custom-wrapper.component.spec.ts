import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomWrapperComponent } from './custom-wrapper.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('CustomWrapperComponent', () => {
  let component: CustomWrapperComponent;
  let fixture: ComponentFixture<CustomWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomWrapperComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
