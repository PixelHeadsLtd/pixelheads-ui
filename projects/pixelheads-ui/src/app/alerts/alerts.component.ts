import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent {

  constructor() { }

  toggleBlade: boolean = false;

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

}
