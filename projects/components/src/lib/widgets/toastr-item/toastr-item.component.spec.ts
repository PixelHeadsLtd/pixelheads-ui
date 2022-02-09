import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastrItemComponent } from './toastr-item.component';

describe('ToastrItemComponent', () => {
  let component: ToastrItemComponent;
  let fixture: ComponentFixture<ToastrItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToastrItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastrItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
