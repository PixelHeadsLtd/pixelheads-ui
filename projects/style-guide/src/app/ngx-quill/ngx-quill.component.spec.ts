import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxQuillComponent } from './ngx-quill.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('NgxQuillComponent', () => {
  let component: NgxQuillComponent;
  let fixture: ComponentFixture<NgxQuillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxQuillComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxQuillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
