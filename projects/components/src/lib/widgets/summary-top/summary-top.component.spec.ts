import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryTopComponent } from './summary-top.component';

describe('SummaryTopComponent', () => {
  let component: SummaryTopComponent;
  let fixture: ComponentFixture<SummaryTopComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
