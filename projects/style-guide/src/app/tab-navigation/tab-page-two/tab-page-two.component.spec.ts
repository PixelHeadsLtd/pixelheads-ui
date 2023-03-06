import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabPageTwoComponent } from './tab-page-two.component';

describe('TabPageTwoComponent', () => {
  let component: TabPageTwoComponent;
  let fixture: ComponentFixture<TabPageTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabPageTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabPageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
