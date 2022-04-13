import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  
  showFilterGradient: boolean;
  myRadios: string;
  toggleFilter: boolean;
  toggleBlade: boolean;
  showFilter: boolean;
  showFilterLeft: boolean;

  constructor() { }

  onClick() {
    console.log("You clicked")
  }

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

  ngOnInit() {
  }

}
