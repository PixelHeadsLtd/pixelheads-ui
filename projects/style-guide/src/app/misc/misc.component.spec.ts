import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MiscComponent } from './misc.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('MiscComponent', () => {
  let component: MiscComponent;
  let fixture: ComponentFixture<MiscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MiscComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
