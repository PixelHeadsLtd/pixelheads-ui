import { Component, OnInit } from '@angular/core';
import { TabNavigationItemComponent } from '@angloamerican/components';
import { TabData } from '../class/tab-data';
import { RouterOutletItem } from '../class/tab-router-oulet';

@Component({
  selector: 'app-tab-navigation',
  templateUrl: './tab-navigation.component.html',
  styleUrls: ['./tab-navigation.component.scss']
})
export class TabNavigationComponent implements OnInit {

  activeTab: TabNavigationItemComponent;
  selectedIndex: number = null;
  tabNgTemplate: boolean;
  tabRouterOutlet: boolean;
  tabInfo: boolean;
  toggleBlade: boolean;

  constructor() { }

  tabDataItems = [
    new TabData('orange', 'Total team', '60', '6/10', true, true, 'Some other text'),
    new TabData('green', 'Unchanged', '40', '4/10',  true, true, 'Some text for the tooltip'),
    new TabData('blue', 'Joiners', '60', '6/10',  true, true, 'Some text for the tooltip'),
    new TabData('red', 'Leavers', '80', '8/10',  true, true, 'Some text for the tooltip'),
    new TabData('light-blue', 'Movers', '90', '9/10', true, true, 'Some text for the tooltip'),
  ];

  myTabData = this.tabDataItems[0];

  tabChanged(tab: TabNavigationItemComponent) {
    this.activeTab = tab;
  }

  setIndex(index: number) {
     this.selectedIndex = index;
  }

  public readonly tabs: RouterOutletItem[] = [
    {
      tabId: 'tabOne',
      name: 'Tab one',
      routerLink: ['tab-page-one'],
      tabDisabled: false,
      enableCount: true,
      tabCount: 200
    },
    {
      tabId: 'tabTwo',
      name: 'Tab two',
      routerLink: ['tab-page-two'],
      tabDisabled: false,
      enableCount: false,
      tabCount: null
    },
    {
      tabId: 'tabThree',
      name: 'Disabled',
      routerLink: [''],
      tabDisabled: true,
      enableCount: true,
      tabCount: null
    }
  ];

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

  ngOnInit() {
  }

}
