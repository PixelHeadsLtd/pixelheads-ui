import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blade-top',
  templateUrl: './blade-top.component.html',
  styleUrls: ['./blade-top.component.scss']
})
export class BladeTopComponent {

  isPinned: boolean = false;
  isOpen: boolean = false;
  showBlade: boolean = false;
  toggleBlade: boolean = false;
  isError: boolean = false;
  selectedOption: any;

  constructor() { }

  onClick() {
    console.log("You clicked save");
  }

  bladeIsOpen(open: boolean) {
    this.isOpen = open;
  }

  bladeIsPinned(togglePinned: boolean) {
    this.isPinned = togglePinned;
  }

  sideBladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }
}
