import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabSubPageOneComponent } from './tab-sub-page-one.component';

describe('TabPageOneComponent', () => {
  let component: TabSubPageOneComponent;
  let fixture: ComponentFixture<TabSubPageOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabSubPageOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabSubPageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
