import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DlAppsBladeComponent } from './dl-apps-blade.component';

describe('DlAppsBladeComponent', () => {
  let component: DlAppsBladeComponent;
  let fixture: ComponentFixture<DlAppsBladeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DlAppsBladeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DlAppsBladeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
