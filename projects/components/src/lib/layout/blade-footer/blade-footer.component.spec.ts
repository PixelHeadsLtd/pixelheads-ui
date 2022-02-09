import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { BladeFooterComponent } from './blade-footer.component';

describe('BladeFooterComponent', () => {
  let component: BladeFooterComponent;
  let fixture: ComponentFixture<BladeFooterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BladeFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BladeFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
