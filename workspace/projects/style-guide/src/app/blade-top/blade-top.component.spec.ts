import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BladeTopComponent } from './blade-top.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('BladeTopComponent', () => {
  let component: BladeTopComponent;
  let fixture: ComponentFixture<BladeTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BladeTopComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BladeTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
