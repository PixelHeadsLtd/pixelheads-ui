import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TreeMenuComponent } from './tree-menu.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('TreeMenuComponent', () => {
  let component: TreeMenuComponent;
  let fixture: ComponentFixture<TreeMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TreeMenuComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
