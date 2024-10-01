import { Component, ChangeDetectorRef, AfterContentChecked } from '@angular/core';
import { TabNavigationItemComponent } from '@angloamerican/components';

@Component({
  selector: 'app-tab-navigation',
  templateUrl: './tab-navigation.component.html',
  styleUrls: ['./tab-navigation.component.scss']
})
export class TabNavigationComponent implements AfterContentChecked {

  activeTab?: TabNavigationItemComponent;
  activeGistTab?: TabNavigationItemComponent;
  selectedIndex: number = 0;
  selectedIndexTwo: number = 0;
  tabNgTemplate: boolean = false;
  tabRouterOutlet: boolean = false;
  tabInfo: boolean = false;
  toggleBlade: boolean = false;
  showMore: boolean = false;
  enableClose: boolean = false;
  enableCloseSecondary: boolean = false;
  toggleModal: boolean = false;
  ngTemplate: boolean = false;
  ngTemplateSecondary: boolean = false;
  routerOutlet: boolean = false;
  routerOutletSecondary: boolean = false;
  routerOutletSecondaryRO: boolean = false;
  routerOutletIsActive: boolean = false;
  tabSecondary:any;

  constructor(private changeDetector: ChangeDetectorRef) {}

  onCloseTab() {
    if(this.enableClose = true) {
      this.toggleModal = true;
      this.ngTemplate = true;
      this.ngTemplateSecondary = false;
      this.routerOutlet = false;
      this.routerOutletSecondary = false;
    }
  }

  onCloseTabSecondary() {
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
      this.tabsNgTemplate.splice(index, 1);
      this.toggleModal = false;
    }
  }

  removeTabSecondary(index: number) {
    if(this.tabsSecondaryNgTemplate) {
      this.tabsSecondaryNgTemplate.splice(index, 1);
      this.toggleModal = false;
    }
  }

  // Router Outlet
  removeTabRO(index: number) {
    if(this.tabsRouterOutlet) {
      this.tabsRouterOutlet.splice(index, 1);
      this.toggleModal = false;
    }
  }

  removeTabSecondaryRO(index: number) {
    if(this.tabsSecondaryRouterOutlet) {
      this.tabsSecondaryRouterOutlet.splice(index, 1);
      this.toggleModal = false;
    }
  }

  tabChanged(tab: TabNavigationItemComponent) {
    this.activeTab = tab;
  }

  tabsNgTemplate = [
    {
      tabName: 'Tab 1',
      tabId: 'tab1',
      enableIcons: false,
      iconName: 'error',
      iconColour: 'aa-red-100',
      tabDisabled: false,
      showRightDivider: false,
      enableCount: false,
      enableClose: true,
      tabCount: '',
      countColour: '',
      showTabOneContent: true,
      showTabTwoContent: false,
      showTabThreeContent: false,
      showTabFourContent: false,
      textColour: '',
      closeColour: '',
      showTooltip: false
    },
    {
      tabName: 'Tab 2',
      tabId: 'tab2',
      enableIcons: true,
      iconName: 'check_circle',
      iconColour: 'aa-green-100',
      tabDisabled: false,
      showRightDivider: false,
      enableCount: false,
      tabCount: '',
      countColour: '',
      showTabOneContent: false,
      showTabTwoContent: true,
      showTabThreeContent: false,
      showTabFourContent: false,
      textColour: '',
      closeColour: '',
      enableClose: false,
      showTooltip: true,
      tooltipWidth: '20rem',
      tooltipTitle: 'TOOLTIP INSTRUCTIONS',
      tooltipBody: `
        TOOLTIP'S ONLY WORK WHEN BOTH 'enableIcons' AND 'enableTooltip' ARE SET TO TRUE!!! 
        You can also set the 'iconColour' using one of our modifiers classes. There are 4
        to choose from and these represent the current status. For info messages, use 'aa-light-blue-100', 
        for success use 'aa-green-100', for pending use 'aa-orange-100' and for errors use 
        'aa-red-100'. Other attributes include: 'tooltipWidth', 'tooltipTitle', 'tooltipBody', 
        'tooltipXPos' and 'tooltipYPos'
      `,
      tooltipX: '2rem',
      tooltipY: '1rem'
    },
    {
      tabName: 'Tab 3',
      tabId: 'tab3',
      enableIcons: false,
      iconName: '',
      iconColour: '',
      tabDisabled: false,
      showRightDivider: true,
      enableCount: true,
      enableClose: true,
      tabCount: '200',
      countColour: 'bg-aa-red-100',
      showTabOneContent: false,
      showTabTwoContent: false,
      showTabThreeContent: true,
      showTabFourContent: false,
      textColour: '',
      closeColour: '',
      showTooltip: false
    },
    {
      tabName: 'Disabled',
      tabId: 'tab4',
      enableIcons: false,
      iconName: '',
      iconColour: '',
      tabLink: '',
      tabDisabled: true,
      showRightDivider: false,
      enableCount: false,
      tabCount: '',
      countColour: '',
      showTabOneContent: false,
      showTabTwoContent: false,
      showTabThreeContent: false,
      showTabFourContent: true,
      textColour: '',
      closeColour: '',
      enableClose: false,
      showTooltip: false
    }
  ]

  tabsSecondaryNgTemplate:any[] = [
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

  tabsRouterOutlet:any[] = [
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

  tabsSecondaryRouterOutlet:any[] = [
    {
      name: 'Tab sec 1',
      routerLink: ['tab-sub-page-one'],
      enableCloseSecondaryRO: true
    },
    {
      name: 'Tab sec 2',
      routerLink: ['tab-sub-page-two'],
      enableContextMenu: true
    },
    {
      name: 'Tab sec 3',
      routerLink: ['tab-sub-page-three']
    },
    {
      name: 'Disabled',
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

  gistNgTemplate:any[] = [
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
