import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actions-summary',
  templateUrl: './actions-summary.component.html',
  styleUrls: ['./actions-summary.component.scss']
})
export class ActionsSummaryComponent implements OnInit {

  toggleBlade: boolean;

  constructor() { }

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

  ngOnInit(): void {
  }

}
