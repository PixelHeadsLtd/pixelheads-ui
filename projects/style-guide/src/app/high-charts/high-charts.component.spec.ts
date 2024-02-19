import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HighChartsComponent } from './high-charts.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('HighChartsComponent', () => {
  let component: HighChartsComponent;
  let fixture: ComponentFixture<HighChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HighChartsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
