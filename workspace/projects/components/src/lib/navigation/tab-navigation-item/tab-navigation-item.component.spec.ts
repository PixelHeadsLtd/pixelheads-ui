import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabNavigationItemComponent } from './tab-navigation-item.component';
import { RouterModule } from '@angular/router';

describe('TabNavigationItemComponent', () => {
  let component: TabNavigationItemComponent;
  let fixture: ComponentFixture<TabNavigationItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TabNavigationItemComponent ],
	  imports:[RouterModule.forRoot([])]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabNavigationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
