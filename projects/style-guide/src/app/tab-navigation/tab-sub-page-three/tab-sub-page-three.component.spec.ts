import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabSubPageThreeComponent } from './tab-sub-page-three.component';

describe('TabPageThreeComponent', () => {
  let component: TabSubPageThreeComponent;
  let fixture: ComponentFixture<TabSubPageThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabSubPageThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabSubPageThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
