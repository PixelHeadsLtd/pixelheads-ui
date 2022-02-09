import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BladeTopComponent } from './blade-top.component';

describe('BladeTopComponent', () => {
  let component: BladeTopComponent;
  let fixture: ComponentFixture<BladeTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BladeTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BladeTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
