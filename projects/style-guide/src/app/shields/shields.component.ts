import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shields',
  templateUrl: './shields.component.html',
  styleUrls: ['./shields.component.scss']
})
export class ShieldsComponent implements OnInit {

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
