import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shields',
  templateUrl: './shields.component.html',
  styleUrls: ['./shields.component.scss']
})
export class ShieldsComponent implements OnInit {
  
  statusShields: boolean;
  regularShields: boolean;
  pendingShields: boolean;
  riskShields: boolean;
  mixedShields: boolean;

  constructor() { }
  
  statusHTML =
  `<div class="alert-shield info">Info</div>
  <div class="alert-shield success">Success</div>
  <div class="alert-shield warning">Warning</div>
  <div class="alert-shield error">Error</div>`;
  
  regularHTML = 
  `<div class="alert-shield blue">Blue</div>
  <div class="alert-shield green">Green</div>
  <div class="alert-shield orange">Orange</div>
  <div class="alert-shield red">Red</div>`;
  
  pendingHTML =
  `<div class="alert-shield pending">Pending</div>
  <div class="alert-shield pending-orange">Pending orange</div>
  <div class="alert-shield pending-red">Pending red</div>`;
  
  riskHTML = 
  `<div class="alert-shield risk-low">Risk low</div>
  <div class="alert-shield risk-medium">Risk medium</div>
  <div class="alert-shield risk-high">Risk high</div>
  <div class="alert-shield risk-green-approved">Risk green approved</div>
  <div class="alert-shield risk-low-approved">Risk low approved</div>
  <div class="alert-shield risk-medium-approved">Risk medium approved</div>
  <div class="alert-shield risk-high-approved">Risk high approved</div>`;
  
  mixedHTML =
  `<div class="alert-shield removed">Removed</div>
  <div class="alert-shield withdrawn">Withdrawn</div>
  <div class="alert-shield import">Import from AD</div>`;
  
  copyToClipboard(item): void {
    let listener = (e: ClipboardEvent) => {
        e.clipboardData.setData('text/plain', (item));
        e.preventDefault();
    };

    document.addEventListener('copy', listener);
    document.execCommand('copy');
    document.removeEventListener('copy', listener);
  }
  
  toggleBlade: boolean;

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

  ngOnInit() {
  }

}
