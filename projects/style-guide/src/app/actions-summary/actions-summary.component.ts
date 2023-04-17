import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actions-summary',
  templateUrl: './actions-summary.component.html',
  styleUrls: ['./actions-summary.component.scss']
})
export class ActionsSummaryComponent implements OnInit {

  toggleBlade: boolean;
  verticalDisplay: boolean;

  constructor() { }

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

  actionsSummaryItems = [
    {
      title: 'Total actions',
      status: 'default',
      value: '1'
    },
    {
      title: 'Accepted',
      status: 'approved',
      value: '0'
    },
    {
      title: 'Not started',
      status: 'not-started',
      value: '0'
    },
    {
      title: 'In progress',
      status: 'pending',
      value: '1'
    },
    {
      title: 'Completed',
      status: 'approved',
      value: '0'
    },
    {
      title: 'Abandoned',
      status: 'rejected',
      value: '1'
    }
  ]

  ngOnInit(): void {
  }

}
