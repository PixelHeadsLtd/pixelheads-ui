import { Component } from '@angular/core';

@Component({
  selector: 'app-element-slider',
  templateUrl: './element-slider.component.html',
  styleUrl: './element-slider.component.scss'
})
export class ElementSliderComponent {
  toggleBlade: boolean = false;

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }
}
