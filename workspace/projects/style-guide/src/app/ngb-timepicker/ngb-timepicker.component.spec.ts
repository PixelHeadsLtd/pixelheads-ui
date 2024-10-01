import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbTimepickerComponent } from './ngb-timepicker.component';

describe('NgbTimepickerComponent', () => {
  let component: NgbTimepickerComponent;
  let fixture: ComponentFixture<NgbTimepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgbTimepickerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgbTimepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
