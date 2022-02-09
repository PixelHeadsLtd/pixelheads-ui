import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { BladeBottomComponent } from './blade-bottom.component';

describe('BladeBottomComponent', () => {
  let component: BladeBottomComponent;
  let fixture: ComponentFixture<BladeBottomComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BladeBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BladeBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
