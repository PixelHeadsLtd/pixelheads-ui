import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MarkupComponent } from './markup.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('MarkupComponent', () => {
  let component: MarkupComponent;
  let fixture: ComponentFixture<MarkupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarkupComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
