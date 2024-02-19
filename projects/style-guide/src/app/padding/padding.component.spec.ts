import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaddingComponent } from './padding.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('PaddingComponent', () => {
  let component: PaddingComponent;
  let fixture: ComponentFixture<PaddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaddingComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
