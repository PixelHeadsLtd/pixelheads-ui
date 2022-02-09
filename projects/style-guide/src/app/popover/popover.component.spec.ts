import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DlPopoverComponent } from './popover.component';

describe('DlPopoverComponent', () => {
  let component: DlPopoverComponent;
  let fixture: ComponentFixture<DlPopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DlPopoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DlPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
