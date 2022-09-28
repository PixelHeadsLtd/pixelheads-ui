import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertShieldComponent } from './alert-shield.component';

describe('AlertShieldComponent', () => {
  let component: AlertShieldComponent;
  let fixture: ComponentFixture<AlertShieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertShieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertShieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
