import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexComponent } from './flex.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('FlexComponent', () => {
  let component: FlexComponent;
  let fixture: ComponentFixture<FlexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlexComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
