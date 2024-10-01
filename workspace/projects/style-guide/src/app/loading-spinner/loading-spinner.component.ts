import { Component } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinnerComponent {

  toggleBlade: boolean = false;

  constructor() { }

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }
}
