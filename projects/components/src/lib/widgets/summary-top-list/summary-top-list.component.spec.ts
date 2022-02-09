import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryTopListComponent } from './summary-top-list.component';

describe('SummaryTopListComponent', () => {
  let component: SummaryTopListComponent;
  let fixture: ComponentFixture<SummaryTopListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryTopListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryTopListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
