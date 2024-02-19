import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbDatepickerComponent } from './ngb-datepicker.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

describe('NgbDatepickerComponent', () => {
  let component: NgbDatepickerComponent;
  let fixture: ComponentFixture<NgbDatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgbDatepickerComponent],
      imports: [FormsModule, NgbModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
