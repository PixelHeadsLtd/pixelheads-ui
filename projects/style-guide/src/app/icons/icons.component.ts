import { Component, OnInit } from '@angular/core';
import { BoostOptions } from 'highcharts';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  
  materialIcons: Boolean;
  countryFlags: boolean;

  constructor() { }
  
  materialHTML =
  `<div class="material-icons icon-red">face</div>
  <div class="material-icons icon-orange">face</div>
  <div class="material-icons icon-green">face</div>
  <div class="material-icons icon-blue">face</div>
  <div class="material-icons icon-dark-blue">face</div>
  <div class="material-icons icon-black">face</div>`;
  
  countryFlagsHTML =
  `<div class="flag au"></div>
  <div class="flag cn"></div>
  <div class="flag gb"></div>
  <div class="flag sg"></div>
  <div class="flag us"></div>
  <div class="flag za"></div>`;
  
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
