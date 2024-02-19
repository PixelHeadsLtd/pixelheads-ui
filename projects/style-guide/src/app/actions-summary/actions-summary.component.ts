import { Component } from '@angular/core';

@Component({
  selector: 'app-actions-summary',
  templateUrl: './actions-summary.component.html',
  styleUrls: ['./actions-summary.component.scss']
})
export class ActionsSummaryComponent {

  toggleBlade: boolean = false;
  verticalDisplay: boolean = false;

  constructor() { }

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

  actionsSummaryItems = [
    {
      heading: 'Total actions',
      status: 'default',
      value: '1'
    },
    {
      heading: 'Accepted',
      status: 'approved',
      value: '1783421'
    },
    {
      heading: 'Not started',
      status: 'not-started',
      value: '0'
    },
    {
      heading: 'In progress',
      status: 'pending',
      value: '1'
    },
    {
      heading: 'Completed',
      status: 'approved',
      value: '0'
    },
    {
      heading: 'Abandoned',
      status: 'rejected',
      value: '1'
    }
  ]
}
