import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFavouritesComponent } from './dashboard-favourites.component';

describe('DashboardFavouritesComponent', () => {
  let component: DashboardFavouritesComponent;
  let fixture: ComponentFixture<DashboardFavouritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardFavouritesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardFavouritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
