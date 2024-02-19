import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SummaryTopComponent } from './summary-top.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('SummaryTopComponent', () => {
  let component: SummaryTopComponent;
  let fixture: ComponentFixture<SummaryTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SummaryTopComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
