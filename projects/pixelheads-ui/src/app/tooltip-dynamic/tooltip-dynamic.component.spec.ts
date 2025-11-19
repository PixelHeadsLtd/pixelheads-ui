import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TooltipDynamicComponent } from './tooltip-dynamic.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TooltipDynamicDirective } from '@pixelheads/ui';

describe('TooltipDynamicComponent', () => {
  let component: TooltipDynamicComponent;
  let fixture: ComponentFixture<TooltipDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TooltipDynamicComponent, TooltipDynamicDirective],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
