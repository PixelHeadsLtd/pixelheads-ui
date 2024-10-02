import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementSliderComponent } from './element-slider.component';

describe('ElementSliderComponent', () => {
  let component: ElementSliderComponent;
  let fixture: ComponentFixture<ElementSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElementSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
