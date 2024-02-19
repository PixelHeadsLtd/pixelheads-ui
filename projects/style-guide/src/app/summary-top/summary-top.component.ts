import { Component } from '@angular/core';

@Component({
  selector: 'app-summary-top',
  templateUrl: './summary-top.component.html',
  styleUrls: ['./summary-top.component.scss']
})
export class SummaryTopComponent {

  hightlight: boolean = false;
  toggleBlade: boolean = false;
  verticalDisplay: boolean = false;

  constructor() { }

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

}
