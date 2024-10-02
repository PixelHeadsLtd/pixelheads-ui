import { Component } from '@angular/core';

@Component({
  selector: 'app-alert-shields',
  templateUrl: './alert-shields.component.html',
  styleUrls: ['./alert-shields.component.scss']
})

export class AlertShieldsComponent {

  customShields: boolean = false;
  statusShields: boolean = false;
  regularShields: boolean = false;
  pendingShields: boolean = false;
  riskShields: boolean = false;
  mixedShields: boolean = false;
  toggleBlade: boolean = false;

  constructor() { }

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }
}
