import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-wrapper',
  templateUrl: './custom-wrapper.component.html',
  styleUrls: ['./custom-wrapper.component.scss']
})
export class CustomWrapperComponent {

  toggleBlade: boolean = false;

  constructor() {}

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }
}
