import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  showFilterGradient: boolean  = false;
  myRadios: string = '';
  toggleFilter: boolean = false;
  toggleBlade: boolean = false;
  showFilter: boolean = false;
  showFilterLeft: boolean = false;

  constructor() { }

  onClick() {
    console.log("You clicked")
  }

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

}
