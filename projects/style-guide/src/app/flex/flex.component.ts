import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flex',
  templateUrl: './flex.component.html',
  styleUrls: ['./flex.component.scss']
})
export class FlexComponent implements OnInit {

  constructor() { }
  
  flexGroup: boolean;
  flexStart: boolean;
  flexEnd: boolean;
  spaceBetween: boolean;
  flexCenter: boolean;
  toggleBlade: boolean;

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

  ngOnInit() {
  }

}
