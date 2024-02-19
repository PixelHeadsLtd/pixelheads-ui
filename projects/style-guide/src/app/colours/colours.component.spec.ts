import {  ComponentFixture, TestBed } from '@angular/core/testing';
import { ColoursComponent } from './colours.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ColoursComponent', () => {
  let component: ColoursComponent;
  let fixture: ComponentFixture<ColoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColoursComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
