import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flex',
  templateUrl: './flex.component.html',
  styleUrls: ['./flex.component.scss']
})
export class FlexComponent {

  constructor() { }

  flexGroup: boolean = false;
  flexStart: boolean = false;
  flexEnd: boolean = false;
  flexColumn: boolean = false;
  flexStretch: boolean = false;
  spaceBetween: boolean = false;
  flexCenter: boolean = false;
  flexEllipsis: boolean = false;
  toggleBlade: boolean = false;

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

}
