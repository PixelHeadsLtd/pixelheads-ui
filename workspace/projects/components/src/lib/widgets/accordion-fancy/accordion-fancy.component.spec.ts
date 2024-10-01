import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionFancyComponent } from './accordion-fancy.component';

describe('AccordionFancyComponent', () => {
  let component: AccordionFancyComponent;
  let fixture: ComponentFixture<AccordionFancyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionFancyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionFancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
