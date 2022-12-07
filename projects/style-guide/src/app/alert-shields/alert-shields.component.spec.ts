import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertShieldsComponent } from './alert-shields.component';

describe('AlertShieldsComponent', () => {
  let component: AlertShieldsComponent;
  let fixture: ComponentFixture<AlertShieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertShieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertShieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
