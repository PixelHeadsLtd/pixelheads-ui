import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipDynamicComponent } from './tooltip-dynamic.component';

describe('TooltipDynamicComponent', () => {
  let component: TooltipDynamicComponent;
  let fixture: ComponentFixture<TooltipDynamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipDynamicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
