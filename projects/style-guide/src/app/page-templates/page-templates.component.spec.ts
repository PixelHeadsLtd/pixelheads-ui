import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageTemplatesComponent } from './page-templates.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('PageLayoutExamplesComponent', () => {
  let component: PageTemplatesComponent;
  let fixture: ComponentFixture<PageTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageTemplatesComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
