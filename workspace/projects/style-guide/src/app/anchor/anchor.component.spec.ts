import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnchorComponent } from './anchor.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AnchorComponent', () => {
  let component: AnchorComponent;
  let fixture: ComponentFixture<AnchorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnchorComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnchorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
