import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WidthsComponent } from './widths.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('WidthsComponent', () => {
  let component: WidthsComponent;
  let fixture: ComponentFixture<WidthsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WidthsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidthsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
