import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementsAlignmentComponent } from './elements-alignment.component';

describe('ElementsAlignmentComponent', () => {
  let component: ElementsAlignmentComponent;
  let fixture: ComponentFixture<ElementsAlignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementsAlignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementsAlignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
