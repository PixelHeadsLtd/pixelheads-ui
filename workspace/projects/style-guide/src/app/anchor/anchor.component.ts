import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anchor',
  templateUrl: './anchor.component.html',
  styleUrls: ['./anchor.component.scss']
})
export class AnchorComponent {

  toggleBlade: boolean = false;
  showAnchor: boolean = false;
  showAnchorAdv: boolean = false;
  routerLink = '/'; // Example router link
  anchorURL = 'https://example.com'; // Example external URL

  constructor() {}

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

}
