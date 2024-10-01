import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFavouritesListComponent } from './dashboard-favourites-list.component';

describe('DashboardFavouritesListComponent', () => {
  let component: DashboardFavouritesListComponent;
  let fixture: ComponentFixture<DashboardFavouritesListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardFavouritesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardFavouritesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
