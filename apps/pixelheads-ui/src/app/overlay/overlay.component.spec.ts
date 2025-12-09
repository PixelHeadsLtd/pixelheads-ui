import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OverlayComponent } from './overlay.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('OverlayComponent', () => {
  let component: OverlayComponent;
  let fixture: ComponentFixture<OverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OverlayComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
