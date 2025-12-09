import { PopoverComponent } from '@pixelheads/ui';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class DlPopoverComponent {

  @ViewChild(PopoverComponent) popOver!: PopoverComponent;
  toggleBlade: boolean = false;

  constructor() { }

  public togglePopover() {
    this.popOver.close();
  }

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

}
