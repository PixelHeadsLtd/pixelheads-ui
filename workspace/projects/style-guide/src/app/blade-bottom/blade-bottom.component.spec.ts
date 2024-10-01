import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BladeBottomComponent } from './blade-bottom.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BladeBottomComponent', () => {
  let component: BladeBottomComponent;
  let fixture: ComponentFixture<BladeBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BladeBottomComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BladeBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
