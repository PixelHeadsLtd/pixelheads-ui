import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabPageOneComponent } from './tab-page-one.component';

describe('TabPageOneComponent', () => {
  let component: TabPageOneComponent;
  let fixture: ComponentFixture<TabPageOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabPageOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabPageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
