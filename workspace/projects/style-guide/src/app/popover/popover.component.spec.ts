import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DlPopoverComponent } from './popover.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('DlPopoverComponent', () => {
  let component: DlPopoverComponent;
  let fixture: ComponentFixture<DlPopoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DlPopoverComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DlPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
