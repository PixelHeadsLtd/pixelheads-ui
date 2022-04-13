import { Component, OnInit } from '@angular/core';
import { NavContextData } from '../class/nav-context-data';

@Component({
  selector: 'app-nav-context',
  templateUrl: './nav-context.component.html',
  styleUrls: ['./nav-context.component.scss']
})
export class NavContextComponent implements OnInit {

  selectedIndex: number = null;

  constructor() { }

  navContextDataItems = [
    new NavContextData('bg-aa-green-100', 'alternate_email', 'Info', ''),
    new NavContextData('bg-aa-plum-100', 'money_off', 'Credit limits', ''),
    new NavContextData('bg-aa-ochre-100', 'attach_money', 'Bank accounts', ''),
    new NavContextData('bg-aa-blue-sky-100', 'local_library', 'Documents', ''),
    new NavContextData('bg-aa-burgundy-100', 'grading', 'KYC check', ''),
    new NavContextData('bg-aa-brown-100', 'notification_important', 'Credit risk', ''),
    new NavContextData('bg-aa-lime-100', 'groups', 'Roles', ''),
  ];

  myNavData = this.navContextDataItems[0];

  setIndex(index: number) {
    this.selectedIndex = index;
  }

  toggleBlade: boolean;

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

  ngOnInit(): void {
  }

}
