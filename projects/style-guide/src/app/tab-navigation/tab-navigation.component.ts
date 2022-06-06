import { Component, OnInit, ChangeDetectorRef, AfterContentChecked } from '@angular/core';
import { TabNavigationItemComponent } from '@angloamerican/components';
import { TabNavInfoPanel } from '../class/tab-nav-info-panel';
import { TabNavRouterOutlet } from '../class/tab-nav-router-oulet';

@Component({
  selector: 'app-tab-navigation',
  templateUrl: './tab-navigation.component.html',
  styleUrls: ['./tab-navigation.component.scss']
})
export class TabNavigationComponent implements AfterContentChecked {

  activeTab: TabNavigationItemComponent;
  selectedIndex: number = null;
  tabNgTemplate: boolean;
  tabRouterOutlet: boolean;
  tabInfo: boolean;
  toggleBlade: boolean;

  public constructor(
    private changeDetector: ChangeDetectorRef,
  ) {}

  public readonly tabs: TabNavRouterOutlet[] = [
    {
      tabId: 'tabOne',
      name: 'Tab one',
      routerLink: ['tab-page-one'],
      tabDisabled: false,
      enableCount: true,
      tabCount: 200,
      showRightDivider: false,
      enableIcons: false,
      iconName: '',
      iconColor: ''
    },
    {
      tabId: 'tabTwo',
      name: 'Tab two',
      routerLink: ['tab-page-two'],
      tabDisabled: false,
      enableCount: false,
      tabCount: null,
      showRightDivider: false,
      enableIcons: true,
      iconName: 'error',
      iconColor: 'aa-red-100'
    },
    {
      tabId: 'tabThree',
      name: 'Tab three',
      routerLink: ['tab-page-three'],
      tabDisabled: false,
      enableCount: false,
      tabCount: null,
      showRightDivider: false,
      enableIcons: false,
      iconName: '',
      iconColor: ''
    },
    {
      tabId: 'tabDivider',
      name: '',
      routerLink: null,
      tabDisabled: false,
      enableCount: false,
      tabCount: null,
      showRightDivider: true,
      enableIcons: false,
      iconName: '',
      iconColor: ''
    },
    {
      tabId: 'disabled',
      name: 'Disabled',
      routerLink: [''],
      tabDisabled: true,
      enableCount: false,
      tabCount: null,
      showRightDivider: false,
      enableIcons: false,
      iconName: '',
      iconColor: ''
    }
  ];

  // info panel version
  public readonly tabInfoPanelItems: TabNavInfoPanel[] = [
    {
      tabColor: 'orange', 
      tabName: 'Total team', 
      percentage: '60', 
      valueSplit: '6/10', 
      isActive: true, 
      tooltipEnabled: true,
      tooltipText: 'Some other text'
    },
    {
      tabColor: 'green', 
      tabName: 'Unchanged', 
      percentage: '40', 
      valueSplit: '4/10',  
      isActive:true, 
      tooltipEnabled: true, 
      tooltipText: 'Some text for the tooltip'
    },
    {
      tabColor: 'blue', 
      tabName: 'Joiners', 
      percentage: '60', 
      valueSplit: '6/10',  
      isActive:true, 
      tooltipEnabled: true, 
      tooltipText: 'Some text for the tooltip'
    },
    {
      tabColor: 'red', 
      tabName: 'Leavers', 
      percentage: '80', 
      valueSplit: '8/10',  
      isActive:true, 
      tooltipEnabled: true, 
      tooltipText: 'Some text for the tooltip'
    },
    {
      tabColor: 'light-blue', 
      tabName: 'Movers', 
      percentage: '90', 
      valueSplit: '9/10', 
      isActive:true, 
      tooltipEnabled: true, 
      tooltipText: 'Some text for the tooltip'
    },
  ];

  tabChanged(tab: TabNavigationItemComponent) {
    this.activeTab = tab;
  }

  setIndex(index: number) {
     this.selectedIndex = index;
  }

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

  // ngOnInit() {
  // }

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }

}
