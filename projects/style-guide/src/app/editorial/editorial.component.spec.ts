import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditorialComponent } from './editorial.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('EditorialComponent', () => {
  let component: EditorialComponent;
  let fixture: ComponentFixture<EditorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        EditorialComponent,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
