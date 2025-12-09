import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputTextareaComponent } from './input-textarea.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('InputTextareaComponent', () => {
  let component: InputTextareaComponent;
  let fixture: ComponentFixture<InputTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputTextareaComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
