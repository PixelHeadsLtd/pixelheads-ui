import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListSelectableComponent } from './list-selectable.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ListSelectableComponent', () => {
  let component: ListSelectableComponent;
  let fixture: ComponentFixture<ListSelectableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListSelectableComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSelectableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
