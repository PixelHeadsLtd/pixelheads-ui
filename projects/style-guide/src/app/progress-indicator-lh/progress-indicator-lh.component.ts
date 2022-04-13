import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-indicator-lh',
  templateUrl: './progress-indicator-lh.component.html',
  styleUrls: ['./progress-indicator-lh.component.scss']
})
export class ProgressIndicatorLhComponent implements OnInit {

  toggleBlade: boolean;

  constructor() { }

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

  ngOnInit() {
  }

}
