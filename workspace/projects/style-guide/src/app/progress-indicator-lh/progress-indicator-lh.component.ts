import { Component } from '@angular/core';

@Component({
  selector: 'app-progress-indicator-lh',
  templateUrl: './progress-indicator-lh.component.html',
  styleUrls: ['./progress-indicator-lh.component.scss']
})
export class ProgressIndicatorLhComponent {

  toggleBlade: boolean = false;

  constructor() { }

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }
}
