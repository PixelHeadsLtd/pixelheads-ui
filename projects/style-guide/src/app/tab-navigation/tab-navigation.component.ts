import { Component, ChangeDetectorRef, AfterContentChecked } from '@angular/core';
import { TabNavigationItemComponent } from '@angloamerican/components';

@Component({
  selector: 'app-tab-navigation',
  templateUrl: './tab-navigation.component.html',
  styleUrls: ['./tab-navigation.component.scss']
})
export class TabNavigationComponent implements AfterContentChecked {

  activeTab: TabNavigationItemComponent;
  activeGistTab: TabNavigationItemComponent;
  selectedIndex: number;
  selectedIndexTwo: number;
  tabNgTemplate: boolean;
  tabRouterOutlet: boolean;
  tabInfo: boolean;
  toggleBlade: boolean;
  showMore: boolean;
  enableClose: boolean;
  enableCloseSecondary: boolean;
  toggleModal: boolean;
  ngTemplate: boolean;
  ngTemplateSecondary: boolean;
  routerOutlet: boolean;
  routerOutletSecondary: boolean;
  routerOutletSecondaryRO: boolean;
  routerOutletIsActive: boolean;

  constructor(private changeDetector: ChangeDetectorRef) {}

  onCloseTab(tabId: any) { 
    console.log(`Tab closed id:${tabId}`);
    if(this.enableClose = true) {
      this.toggleModal = true;
      this.ngTemplate = true;
      this.ngTemplateSecondary = false;
      this.routerOutlet = false;
      this.routerOutletSecondary = false;
    }
  }

  onCloseTabSecondary(tabId: any) { 
    if(this.enableCloseSecondary = true) {
      this.toggleModal = true;
      this.ngTemplate = false;
      this.ngTemplateSecondary = true;
      this.routerOutlet = false;
      this.routerOutletSecondary = false;
    }
  }

  onCloseTabRO() { 
    if(this.enableClose = true) {
      this.toggleModal = true;
      this.ngTemplate = false;
      this.routerOutlet = true;
      this.routerOutletSecondary = false;
    }
  }

  onCloseTabSecondaryRO() { 
    if(this.enableClose = true) {
      this.toggleModal = true;
      this.ngTemplate = false;
      this.routerOutlet = false;
      this.routerOutletSecondary = true;
    }
  }

  // Ng Template
  removeTab(index: number) {
    if(this.tabsNgTemplate) {
      this.tabsNgTemplate.splice(index, 1)
      this.toggleModal = false;
    }
  }

  removeTabSecondary(index: number) {
    if(this.tabsSecondaryNgTemplate) {
      this.tabsSecondaryNgTemplate.splice(index, 1)
      this.toggleModal = false;
    }
  }

  // Router Outlet 
  removeTabRO(index: number) {
    if(this.tabsRouterOutlet) {
      this.tabsRouterOutlet.splice(index, 1)
      this.toggleModal = false;
    }
  }

  removeTabSecondaryRO(index: number) {
    if(this.tabsSecondaryRouterOutlet) {
      this.tabsSecondaryRouterOutlet.splice(index, 1)
      this.toggleModal = false;
    }
  }

  tabsNgTemplate = [
    {
      tabName: 'Tab 1',
      enableIcons: false,
      iconName: 'error',
      iconColour: 'aa-red-100',
      tabDisabled: false,
      showRightDivider: false,
      enableCount: false,
      enableClose: true,
      tabCount: '',
      countColour: '',
      showTabOneContent: true
    },
    {
      tabName: 'Tab 2',
      enableIcons: true,
      iconName: 'check_circle',
      iconColour: 'aa-green-100',
      tabDisabled: false,
      showRightDivider: false,
      enableCount: false,
      tabCount: '',
      countColour: '',
      showTabTwoContent: true
    },
    {
      tabName: 'Tab 3',
      enableIcons: false,
      iconName: '',
      iconColour: '',
      tabDisabled: false,
      showRightDivider: true,
      enableCount: true,
      tabCount: '200',
      countColour: 'bg-aa-red-100',
      showTabThreeContent: true
    },
    {
      tabName: 'Disabled',
      enableIcons: false,
      iconName: '',
      iconColour: '',
      tabLink: '',
      tabDisabled: true,
      showRightDivider: false,
      enableCount: false,
      tabCount: '',
      countColour: '',
      showTabFourContent: true
    }
  ]

  tabsSecondaryNgTemplate = [
    {
      tabName: 'Tab sec 1',
      showTabSecondaryOneContent: true,
      enableCloseSecondary: true,
    },
    {
      tabName: 'Tab sec 2',
      showTabSecondaryTwoContent: true
    },
    {
      tabName: 'Tab sec 3',
      showTabSecondaryThreeContent: true
    },
    {
      tabName: 'Disabled',
      tabDisabled: true
    }
  ];
  
  tabsRouterOutlet = [
    {
      tabId: 'tabOne',
      name: 'Tab 1',
      routerLink: ['tab-page-one'],
      tabDisabled: false,
      enableCount: true,
      enableClose: true,
      tabCount: 200,
      showRightDivider: false,
      enableIcons: false,
      iconName: '',
      iconColor: ''
    },
    {
      tabId: 'tabTwo',
      name: 'Tab 2',
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
      name: 'Tab 3',
      routerLink: ['tab-page-three'],
      tabDisabled: false,
      enableCount: false,
      tabCount: null,
      showRightDivider: false,
      enableIcons: false,
      iconName: '',
      iconColor: '',
      enableContextMenu: true
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
      routerLink: null,
      tabDisabled: true,
      enableCount: false,
      tabCount: null,
      showRightDivider: false,
      enableIcons: false,
      iconName: '',
      iconColor: ''
    }
  ];

  tabsSecondaryRouterOutlet = [
    {
      tabName: 'Tab sec 1',
      routerLink: ['tab-sub-page-one'],
      enableCloseSecondaryRO: true
    },
    {
      tabName: 'Tab sec 2',
      routerLink: ['tab-sub-page-two'],
      enableContextMenu: true
    },
    {
      tabName: 'Tab sec 3',
      routerLink: ['tab-sub-page-three']
    },
    {
      tabName: 'Disabled',
      tabDisabled: true
    }
  ]

  // info panel version
  tabInfoPanelItems = [
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

  gistNgTemplate = [
    {
      tabName: 'Tab navigation',
      showGistNgTemplate: true
    },
    {
      tabName: 'Tab navigation secondary',
      showGistRouterOutlet: true
    }
  ]

  gistRouterOutlet = [
    {
      tabId: 'tabTwo',
      name: 'Tab navigation',
      routerLink: ['gist-router-outlet-page-one']
    },
    {
      tabId: 'tabTwo',
      name: 'Tab navigation secondary',
      routerLink: ['gist-router-outlet-page-two']
    }
  ]

  routerOutletActive() {
    this.routerOutletIsActive = true
  }

  tabChanged(tab: TabNavigationItemComponent) {
    this.activeTab = tab;
  }

  gistTabChanged(tab: TabNavigationItemComponent) {
    this.activeGistTab = tab;
  }

  setIndex(index: number) {
     this.selectedIndex = index;
  }

  setIndexTwo(index: number) {
     this.selectedIndexTwo = index;
  }

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;

    if (this.tabNgTemplate) {
      console.log("hello")
    }
  }

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }

}
