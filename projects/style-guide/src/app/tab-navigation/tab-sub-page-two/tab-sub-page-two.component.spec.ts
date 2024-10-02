import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabSubPageTwoComponent } from './tab-sub-page-two.component';

describe('TabPageTwoComponent', () => {
  let component: TabSubPageTwoComponent;
  let fixture: ComponentFixture<TabSubPageTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabSubPageTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabSubPageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
