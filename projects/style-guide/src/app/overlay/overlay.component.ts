import { Component, OnInit } from '@angular/core';
import { TabNavigationItemComponent } from '@angloamerican/components';
import { TabData } from '../class/tab-data';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {
  
  showOverlay: boolean;
  obi: boolean;
  activeTab: TabNavigationItemComponent;
  selectedIndex: number = null;
  toggleBlade: boolean;
  imgPath = "./assets/images/samples/obi-wan.png"

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

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

  ngOnInit() {
  }

}
