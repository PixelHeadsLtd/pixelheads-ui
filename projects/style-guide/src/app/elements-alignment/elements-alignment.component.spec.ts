import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElementsAlignmentComponent } from './elements-alignment.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

describe('ElementsAlignmentComponent', () => {
  let component: ElementsAlignmentComponent;
  let fixture: ComponentFixture<ElementsAlignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElementsAlignmentComponent],
      imports: [FormsModule, ReactiveFormsModule, NgSelectModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementsAlignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
