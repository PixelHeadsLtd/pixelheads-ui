import { Component } from '@angular/core';

@Component({
  selector: 'app-status-indicator',
  templateUrl: './status-indicator.component.html',
  styleUrls: ['./status-indicator.component.scss']
})
export class StatusIndicatorComponent {

  toggleBlade: boolean = false;

  currentStatus = [
    {
      iconClass: 'material-icons',
      iconStatus: 'done',
      iconName: 'check_circle',
      iconTitle: 'Done'
    },
    {
      iconClass: 'material-icons',
      iconStatus: 'error',
      iconName: 'error',
      iconTitle: 'Error'
    },
    {
      iconClass: 'material-icons',
      iconStatus: 'loading',
      iconName: 'watch_later',
      iconTitle: 'Loading'
    },
    {
      iconClass: 'material-icons',
      iconStatus: 'pending',
      iconName: 'pending',
      iconTitle: 'Pending'
    },
    {
      iconClass: 'material-icons',
      iconStatus: 'stopped',
      iconName: 'stop_circle',
      iconTitle: 'Stopped'
    },
    {
      iconClass: 'material-icons',
      iconStatus: 'not-started',
      iconName: 'expand_circle_down',
      iconTitle: 'Not started'
    },
  ]

  constructor() { }

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

}
