import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidthsComponent } from './widths.component';

describe('WidthsComponent', () => {
  let component: WidthsComponent;
  let fixture: ComponentFixture<WidthsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidthsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidthsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
