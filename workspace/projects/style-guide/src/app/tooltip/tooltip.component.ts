import { Component } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent {

  toggleBlade: boolean = false;
  toggleTooltip: boolean = true;

  public onClick() { console.log('You clicked the button'); }

  constructor() {}

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }
}
