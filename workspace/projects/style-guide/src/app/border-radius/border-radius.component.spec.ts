import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BorderRadiusComponent } from './border-radius.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('BorderRadiusComponent', () => {
  let component: BorderRadiusComponent;
  let fixture: ComponentFixture<BorderRadiusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BorderRadiusComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorderRadiusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
