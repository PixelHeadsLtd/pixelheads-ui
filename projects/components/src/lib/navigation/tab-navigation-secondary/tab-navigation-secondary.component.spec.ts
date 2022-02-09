import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabNavigationSecondaryComponent } from './tab-navigation-secondary.component';

describe('TabNavigationSecondaryComponent', () => {
  let component: TabNavigationSecondaryComponent;
  let fixture: ComponentFixture<TabNavigationSecondaryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TabNavigationSecondaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabNavigationSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
