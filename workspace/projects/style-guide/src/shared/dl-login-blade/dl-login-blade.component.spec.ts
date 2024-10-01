import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DlLoginBladeComponent } from './dl-login-blade.component';

describe('DlLoginBladeComponent', () => {
  let component: DlLoginBladeComponent;
  let fixture: ComponentFixture<DlLoginBladeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DlLoginBladeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DlLoginBladeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
