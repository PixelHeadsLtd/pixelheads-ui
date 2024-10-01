import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgSelectComponent } from './ng-select.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('NgSelectComponent', () => {
  let component: NgSelectComponent;
  let fixture: ComponentFixture<NgSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgSelectComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
