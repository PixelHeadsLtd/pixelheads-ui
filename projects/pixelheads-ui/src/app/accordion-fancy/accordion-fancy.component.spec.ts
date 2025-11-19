import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccordionFancyComponent } from './accordion-fancy.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DashboardFavouritesListComponent } from '@pixelheads/ui';

describe('AccordionFancyComponent', () => {
  let component: AccordionFancyComponent;
  let fixture: ComponentFixture<AccordionFancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccordionFancyComponent, DashboardFavouritesListComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionFancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
