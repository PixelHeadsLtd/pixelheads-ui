import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPanelStackedComponent } from './info-panel-stacked.component';

describe('InfoPanelStackedComponent', () => {
  let component: InfoPanelStackedComponent;
  let fixture: ComponentFixture<InfoPanelStackedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoPanelStackedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPanelStackedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
