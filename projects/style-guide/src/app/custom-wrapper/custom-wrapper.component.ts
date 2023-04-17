import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-wrapper',
  templateUrl: './custom-wrapper.component.html',
  styleUrls: ['./custom-wrapper.component.scss']
})
export class CustomWrapperComponent implements OnInit {

  toggleBlade: boolean;

  constructor() {}

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

  ngOnInit(): void {
  }

}
