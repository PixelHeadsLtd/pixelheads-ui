import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabPageFourComponent } from './tab-page-four.component';

describe('TabPageFourComponent', () => {
  let component: TabPageFourComponent;
  let fixture: ComponentFixture<TabPageFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabPageFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabPageFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
