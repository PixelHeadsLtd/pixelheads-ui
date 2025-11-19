import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-radio',
  templateUrl: './input-radio.component.html',
  styleUrls: ['./input-radio.component.scss']
})
export class InputRadioComponent {

  myRadios?: string;
  myRadios2?: string;
  selectedOption?: string;

  toggleBlade: boolean = false;
  showRadioDefault: boolean = false;
  showRadioRange: boolean = false;

  constructor() {
    this.selectedOption = '';
  }

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

}
