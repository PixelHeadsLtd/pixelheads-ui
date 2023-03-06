import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  toggleBlade: boolean;

  constructor() {}

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

}
