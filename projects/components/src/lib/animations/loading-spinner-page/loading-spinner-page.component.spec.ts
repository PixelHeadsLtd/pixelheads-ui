import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingSpinnerPageComponent } from './loading-spinner-page.component';

describe('LoadingSpinnerPageComponent', () => {
  let component: LoadingSpinnerPageComponent;
  let fixture: ComponentFixture<LoadingSpinnerPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingSpinnerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingSpinnerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
