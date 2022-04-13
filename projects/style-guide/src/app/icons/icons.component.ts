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
  toggleBlade: boolean;

  constructor() { }
  
  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

  ngOnInit() {
  }

}
