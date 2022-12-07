import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-shields',
  templateUrl: './alert-shields.component.html',
  styleUrls: ['./alert-shields.component.scss']
})
export class AlertShieldsComponent implements OnInit {

  customShields: boolean;
  statusShields: boolean;
  regularShields: boolean;
  pendingShields: boolean;
  riskShields: boolean;
  mixedShields: boolean;
  toggleBlade: boolean;

  constructor() { }

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

  ngOnInit() {
  }

}
