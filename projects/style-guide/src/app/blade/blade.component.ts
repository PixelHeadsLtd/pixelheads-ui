import { Component, AfterContentChecked, ChangeDetectorRef } from '@angular/core';
import { TabNavigationItemComponent } from '@angloamerican/components';
import { RouterOutletItem } from '../../class/tab-router-oulet';

@Component({
  selector: 'app-blade',
  templateUrl: './blade.component.html',
  styleUrls: ['./blade.component.scss']
})
export class BladeComponent implements AfterContentChecked {

  suppressAutoClose: boolean = false;
  topPosition: number = 0;
  showBladeGist: boolean = false;
  bladeHalf: boolean = false;
  oneColWidth: boolean = false;
  bladeIcon: string = '';
  bladeHeading: string = '';
  showIcon: boolean = false;
  showCustomBladeGist: boolean = false;
  coreMenuBlade: boolean = false;
  oneCol: boolean = false;
  twoCol: boolean = false;
  xlCol: boolean = false;
  showCustomBlade: boolean = false;
  theBladeSize: string = "one-column-width";
  obi: boolean = false;
  searchText = '';
  showInfo: boolean = false;
  enablePin: boolean = false;
  activeTab?: TabNavigationItemComponent;
  selectedIndex: number = 0;
  favIndex: number = 0;
  showBodyOne: boolean = false;
  showBodyTwo: boolean = false;
  showBodyThree: boolean = false;
  showNestedOne: boolean = false;
  showNestedTwo: boolean = false;
  showNestedThree: boolean = false;
  hasBladeTabs: boolean = false;
  tabNgTemplate: boolean = false;
  displayBladeModal: boolean = false;

  pinBlade: boolean = false;
  toggleBlade: boolean = false;
  showBlade: boolean = false;
  approvals: any[] = [];
  tabPrimary: any;

  constructor(private changeDetector: ChangeDetectorRef) { }

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
    {
      tabId: 'tabFour',
      name: 'User card',
      routerLink: ['tab-page-four'],
      tabDisabled: false,
      enableCount: false,
      tabCount: null
    },
  ];

  tabsNgTemplate: any[] = [
    {
      tabName: 'Basic',
      tabId: 'tab1',
      showTabOneContent: true
    },
    {
      tabName: 'Tabs (router-outlet)',
      tabId: 'tab2',
      showTabTwoContent: true
    },
    {
      tabName: 'Tabs (ng-template)',
      tabId: 'tab3',
      showTabThreeContent: true
    },
    {
      tabName: 'Blade modal',
      tabId: 'tab4',
      showTabFourContent: true
    },
    {
      tabName: 'Expose min/max tab',
      tabId: 'tab5',
      showTabFiveContent: true
    }
  ]

  tabChanged(tab?: TabNavigationItemComponent) {
    this.activeTab = tab;
  }

  bladeIsOpen(open: boolean, tab?: TabNavigationItemComponent) {
    this.toggleBlade = open;
    if (tab) {
      this.tabChanged(tab)
    }
  }

  onCloseTab() {
  }

  gistBladeOpen(event: any, tabsNgTemplate: any) {
    this.bladeIsOpen(event, tabsNgTemplate);
    this.showBladeGist = true;
    this.showCustomBladeGist = false;
    this.bladeHalf = false;
    this.oneCol = false;
    this.twoCol = false;
    this.xlCol = false;
    this.showCustomBlade = false;
    this.enablePin = false;
    this.bladeHeading = 'Gist';
    this.showIcon = true;
    this.bladeIcon = 'table_rows';
    this.hasBladeTabs = false;
    this.theBladeSize = 'one-column-width'
  }

  bladeIsPinned(togglePinned: boolean) {
    this.pinBlade = togglePinned;
  }

  imgPath1 = "./assets/images/samples/obi-wan.png"
  imgPath2 = "./assets/images/samples/darth.png"
  imgPath3 = "./assets/images/samples/yoda.png"
  imgPath4 = "./assets/images/samples/luke.png"
  imgPath5 = "./assets/images/samples/han-solo.png"

  menuClicked(event: { stopPropagation: () => void; }) {
    event.stopPropagation();
  }

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }
}
