import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary-top',
  templateUrl: './summary-top.component.html',
  styleUrls: ['./summary-top.component.scss']
})
export class SummaryTopComponent implements OnInit {

  hightlight: boolean;
  toggleBlade: boolean;

  constructor() { }

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

  ngOnInit() {
  }

}
