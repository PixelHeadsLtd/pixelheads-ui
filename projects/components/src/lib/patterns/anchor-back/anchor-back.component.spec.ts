import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnchorBackComponent } from './anchor-back.component';

describe('AnchorBackComponent', () => {
  let component: AnchorBackComponent;
  let fixture: ComponentFixture<AnchorBackComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AnchorBackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnchorBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
