import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavContextComponent } from './nav-context.component';

describe('NavContextComponent', () => {
  let component: NavContextComponent;
  let fixture: ComponentFixture<NavContextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavContextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
