import { Component, OnInit } from '@angular/core';
import { TabNavigationItemComponent } from '@angloamerican/components';
import { RouterOutletItem } from '../class/tab-router-oulet';

@Component({
  selector: 'app-blade',
  templateUrl: './blade.component.html',
  styleUrls: ['./blade.component.scss']
})
export class BladeComponent implements OnInit {

  suppressAutoClose: boolean;
  topPosition: number;
  showBladeGist: boolean;
  bladeHalf: boolean;
  oneColWidth: boolean;
  bladeIcon: string;
  bladeHeading: string;
  showIcon: boolean;
  showCustomBladeGist: boolean;
  coreMenuBlade: boolean;
  oneCol: boolean;
  twoCol: boolean;
  xlCol: boolean;
  showCustomBlade: boolean;
  theBladeSize: string = "one-column-width";
  obi: boolean;
  searchText = '';
  showInfo: boolean;
  enablePin: boolean;
  activeTab: TabNavigationItemComponent;
  selectedIndex: number = null;
  favIndex: number;
  showBodyOne: boolean;
  showBodyTwo: boolean;
  showBodyThree: boolean;
  showNestedOne: boolean;
  showNestedTwo: boolean;
  showNestedThree: boolean;
  hasBladeTabs: boolean;

  pinBlade: boolean;
  toggleBlade: boolean;
  showBlade: boolean;

  constructor() { }

  public readonly tabs: RouterOutletItem[] = [
    {
      tabId: 'tabOne',
      name: 'Accordions',
      routerLink: ['tab-page-one'],
      tabDisabled: false,
      enableCount: false,
      tabCount: null
    },
    {
      tabId: 'tabTwo',
      name: 'Mixed',
      routerLink: ['tab-page-two'],
      tabDisabled: false,
      enableCount: false,
      tabCount: null
    },
    {
      tabId: 'tabThree',
      name: 'Standard usage',
      routerLink: ['tab-page-three'],
      tabDisabled: false,
      enableCount: false,
      tabCount: null
    },
  ];

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

  bladeIsPinned(togglePinned: boolean) {
    this.pinBlade = togglePinned;
  }

  imgPath = "./assets/images/samples/obi-wan.png"
  
  menuClicked(event: { stopPropagation: () => void; }) {
    event.stopPropagation();
  }

  ngOnInit() {
  }

}
