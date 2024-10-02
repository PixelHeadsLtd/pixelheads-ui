import { Component, Input } from '@angular/core';

@Component({
  selector: 'aa-element-slider',
  templateUrl: './element-slider.component.html',
  styleUrl: './element-slider.component.scss',
})
export class ElementSliderComponent {
  @Input() openSlider: boolean = false;

  public toggleSlider() {
    this.openSlider = ! this.openSlider
  }
}
