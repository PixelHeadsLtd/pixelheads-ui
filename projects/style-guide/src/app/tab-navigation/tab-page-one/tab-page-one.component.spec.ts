import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabPageOneComponent } from './tab-page-one.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TooltipDynamicDirective } from '@angloamerican/components';

describe('TabPageOneComponent', () => {
  let component: TabPageOneComponent;
  let fixture: ComponentFixture<TabPageOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabPageOneComponent, TooltipDynamicDirective],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabPageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
