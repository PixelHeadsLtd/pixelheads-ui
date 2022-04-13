import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blade-top',
  templateUrl: './blade-top.component.html',
  styleUrls: ['./blade-top.component.scss']
})
export class BladeTopComponent implements OnInit {

  isPinned: boolean;
  isOpen: boolean;
  showBlade: boolean;
  toggleBlade: boolean;

  constructor() { }

  bladeIsOpen(open: boolean) {
    this.isOpen = open;
  }

  bladeIsPinned(togglePinned: boolean) {
    this.isPinned = togglePinned;
  }

  sideBladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

  ngOnInit(): void {
  }

}
