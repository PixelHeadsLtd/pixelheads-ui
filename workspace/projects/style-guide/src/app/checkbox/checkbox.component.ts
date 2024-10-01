import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {

  myCheckboxes?: string;
  showCheckbox: boolean = false;
  showCheckboxFeature: boolean = false;
  toggleBlade: boolean = false;

  toggleTooltip: boolean = true;

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

}
