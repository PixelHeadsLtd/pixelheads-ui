import { PopoverComponent } from '@angloamerican/components';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class DlPopoverComponent implements OnInit {

  @ViewChild(PopoverComponent) popOver: PopoverComponent;
  toggleBlade: boolean;

  constructor() { }

  public togglePopover() {
    this.popOver.close();
  }

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

  ngOnInit() {}

}
