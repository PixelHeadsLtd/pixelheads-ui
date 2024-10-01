import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertShieldsComponent } from './alert-shields.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AlertShieldsComponent', () => {
  let component: AlertShieldsComponent;
  let fixture: ComponentFixture<AlertShieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlertShieldsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertShieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
