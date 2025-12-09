import { Component } from '@angular/core';

@Component({
  selector: 'app-ticker',
  templateUrl: './ticker.component.html',
  styleUrl: './ticker.component.scss'
})
export class TickerComponent {
  toggleBlade: boolean = false;

  constructor() {}

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }
}
