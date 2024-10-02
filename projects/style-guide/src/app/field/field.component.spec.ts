import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FieldComponent } from './field.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('FieldComponent', () => {
  let component: FieldComponent;
  let fixture: ComponentFixture<FieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FieldComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
