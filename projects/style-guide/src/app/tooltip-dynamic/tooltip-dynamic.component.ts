import { TooltipDynamicPosition } from '@angloamerican/components';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip-dynamic.component.html',
  styleUrls: ['./tooltip-dynamic.component.scss']
})
export class TooltipDynamicComponent {
  TooltipDynamicPosition = TooltipDynamicPosition;

  toggleBlade: boolean = false;

  public onClick() { console.log('You clicked the button'); }

  constructor() {}

  showComplete: boolean = false;
  showPending: boolean = false;

  getConditional() {
    if(this.showComplete) {
      return `
      <div class="width-10">
        <h3 class="aa-pink-100">Error</h3>` +
        `There's been an error
      </div>`;
    }
    else {
      return `
      <div class="width-10">
        <h3 class="aa-light-blue-100">Info</h3>` +
        `Just some information for the user here
      </div>`;
    }
  }

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }
}
