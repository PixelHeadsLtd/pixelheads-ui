import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabPageThreeComponent } from './tab-page-three.component';

describe('TabPageThreeComponent', () => {
  let component: TabPageThreeComponent;
  let fixture: ComponentFixture<TabPageThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabPageThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabPageThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
