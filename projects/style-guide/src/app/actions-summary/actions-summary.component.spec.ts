import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActionsSummaryComponent } from './actions-summary.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ActionsSummaryComponent', () => {
  let component: ActionsSummaryComponent;
  let fixture: ComponentFixture<ActionsSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActionsSummaryComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
