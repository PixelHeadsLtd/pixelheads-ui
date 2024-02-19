import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabNavigationSecondaryItemComponent } from './tab-navigation-secondary-item.component';

describe('TabNavigationItemComponent', () => {
  let component: TabNavigationSecondaryItemComponent;
  let fixture: ComponentFixture<TabNavigationSecondaryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabNavigationSecondaryItemComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabNavigationSecondaryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
