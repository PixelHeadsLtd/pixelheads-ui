import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiBlockComponent } from './ui-block.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('UiBlockComponent', () => {
  let component: UiBlockComponent;
  let fixture: ComponentFixture<UiBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiBlockComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
