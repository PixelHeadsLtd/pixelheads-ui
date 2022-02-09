import { Component, OnInit } from '@angular/core';
import { NavData } from '../class/nav-data';

@Component({
  selector: 'app-nav-context',
  templateUrl: './nav-context.component.html',
  styleUrls: ['./nav-context.component.scss']
})
export class NavContextComponent implements OnInit {

  constructor() { }
  
  navContextHTML =
  `<aa-nav-context 
  zIndex="0"
  navWidth="14" 
  topPos="7.35" 
  leftPos="0" 
  bottomPos="0">          
  <li *ngFor="let item of navDataItems; let i = index" [class.selected]="selectedIndex === i" class="flex-group space-between">
      <a (click)="setIndex(i)" class="flex-group flex-start flex-2 flex-align-center">
          <div><span class="material-icons aa-white-100 {{item.bgColor}}">{{item.iconName}}</span></div>
          <span>{{item.title}}</span>
      </a>
      <aa-context-menu class="padding-right-0-75" minWidth="7.5" [absolutePosition]="true" topPos=".5">
          <aa-context-menu-item menuItemText="Menu item 1"></aa-context-menu-item>
          <aa-context-menu-item menuItemText="Menu item 2"></aa-context-menu-item>
          <aa-context-menu-item menuItemText="Menu item 3"></aa-context-menu-item>
      </aa-context-menu>
  </li>
</aa-nav-context>`;

  public selectedIndex: number = null;

  navDataItems = [
    new NavData('bg-aa-green-100', 'alternate_email', 'Info'),
    new NavData('bg-aa-plum-100', 'money_off', 'Credit limits'),
    new NavData('bg-aa-ochre-100', 'attach_money', 'Bank accounts'),
    new NavData('bg-aa-blue-sky-100', 'local_library', 'Documents'),
    new NavData('bg-aa-burgundy-100', 'grading', 'KYC check'),
    new NavData('bg-aa-brown-100', 'notification_important', 'Credit risk'),
    new NavData('bg-aa-lime-100', 'groups', 'Roles'),
  ];

  myNavData = this.navDataItems[0];

  setIndex(index: number) {
    this.selectedIndex = index;
  }
  
  ngOnInit(): void {
  }  copyToClipboard(item): void {
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

}
