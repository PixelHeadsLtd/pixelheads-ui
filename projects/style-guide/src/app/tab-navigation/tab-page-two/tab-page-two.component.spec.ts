import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabPageTwoComponent } from './tab-page-two.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('TabPageTwoComponent', () => {
  let component: TabPageTwoComponent;
  let fixture: ComponentFixture<TabPageTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabPageTwoComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
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
