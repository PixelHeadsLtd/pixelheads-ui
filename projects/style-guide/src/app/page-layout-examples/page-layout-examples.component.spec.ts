import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLayoutExamplesComponent } from './page-layout-examples.component';

describe('PageLayoutExamplesComponent', () => {
  let component: PageLayoutExamplesComponent;
  let fixture: ComponentFixture<PageLayoutExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageLayoutExamplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLayoutExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
