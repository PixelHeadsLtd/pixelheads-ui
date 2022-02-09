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

  public activeTab: TabNavigationItemComponent;
  public selectedIndex: number = null;
  tabNgTemplate: boolean;
  tabRouterOutlet: boolean;
  tabInfo: boolean;

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

  constructor() { }

  public readonly tabs: RouterOutletItem[] = [
    {
      name: 'Loading spinner',
      routerLink: ['loading-spinner'],
      tabDisabled: false,
      enableCount: true,
      tabCount: 200
    },
    {
      name: 'Anchor',
      routerLink: ['anchor'],
      tabDisabled: false,
      enableCount: false,
      tabCount: null
    },
    {
      name: 'Disabled',
      routerLink: [''],
      tabDisabled: true,
      enableCount: true,
      tabCount: null
    }
  ];

  tabNgTemplateHTML =
  `// Use this version for state changes
  <section class="control-bar">
    <h1>Page heading</h1>
    <aa-tab-navigation [ngTemplate]="true" [displayTabContent]="false" (tabChanged)="tabChanged($event)">
      <aa-tab-navigation-item tabName="Content tab 1" [enableIcons]="true" iconName="error" iconColour="aa-red-100" [enableCount]="false" tabCount="">
        <ng-template aaTabNavigationContent>
           Tab content here...
        </ng-template>
      </aa-tab-navigation-item>
    </aa-tab-navigation>
  </section>
  <section class="content-container" *ngIf="activeTab">
    <1-- aa-tab-navigation-secondary can be removed if not needed -->
    <aa-tab-navigation-secondary>
      <aa-tab-navigation-secondary-item [secondaryTabName]="'Tab 1'"></aa-tab-navigation-secondary-item>
      <aa-tab-navigation-secondary-item [secondaryTabName]="'Tab 2'"></aa-tab-navigation-secondary-item>
      <aa-tab-navigation-secondary-item [secondaryTabName]="'Tab 3'"></aa-tab-navigation-secondary-item>
    </aa-tab-navigation-secondary>
    <ng-template *ngTemplateOutlet="activeTab.templateRef"></ng-template>
  </section>`;
  
  tabRouterOutletHTML =
  `<aa-tab-navigation [routerOutlet]="true">
  <ng-container list-items>
      <li *ngFor="let tab of tabs" [ngClass]="{'tab-disabled':tab.tabDisabled}">
        <a 
          *ngIf="!tab.tabDisabled"
          [id]="tab.tabId" 
          routerLinkActive="active"
          [routerLink]="tab.routerLink"
        >
          {{ tab.name }}
          <span *ngIf="tab.enableCount" class="tab-count">{{tab.tabCount}}</span>
        </a>
        <span *ngIf="tab.tabDisabled">
          {{ tab.name }}
          <span *ngIf="tab.enableCount" class="tab-count">{{tab.tabCount}}</span>
        </span>
      </li>
  </ng-container>
</aa-tab-navigation>`;

tabInfoHTML = 
`<aa-tab-navigation [tabInfoRouterOutlet]="true">
<li tabs *ngFor="let item of tabDataItems; let i">
  <a routerLinkActive="active" 
  [routerLink]="your.route" 
  class="cursor-none {{item.tabColor}}"
  >
    <aa-progress-circle 
      [panelView]="true" 
      [name]="item.tabName" 
      [percent]="item.percentage"
      [value]="item.valueSplit"
      [enableTooltip]="item.tooltipEnabled" 
      [tooltipMinWidth]="'12'" 
      [tooltipBody]="item.tooltipText" 
      [xpos]="'bottom'" 
      [ypos]="'right'"
      >
  </aa-progress-circle>
  </a>
</li>
</aa-tab-navigation>
<router-outlet></router-outlet>

// Below version uses ng-template
<aa-tab-navigation 
[displayTabContent]="false" 
(tabChanged)="tabChanged($event)" 
[tabInfo]="true"
>
<aa-tab-navigation-item 
  [tabName]="'Primary tab 1'" 
  [activeColor]="'orange'"
  >
  <ng-template aaTabNavigationHeaderContent>
    <!-- Example with tooltip included -->
    <aa-progress-circle 
      [panelView]="true"
      [value]="'2/10'"
      [name]="'Total team'" 
      [percent]="'20'" 
      [tooltipMinWidth]="'12'" 
      [enableTooltip]="true" 
      [tooltipTitle]="'Title here...'" 
      [tooltipBody]="'Copy here...'" 
      [xpos]="'bottom'" 
      [ypos]="'right'"
      >
    </aa-progress-circle>
  </ng-template>
  <ng-template aaTabNavigationContent>
    <h2 class="boxed">Tab 1 content...</h2>
  </ng-template>
</aa-tab-navigation-item>
</aa-navigation>`;
  
  copyToClipboard(item): void {
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

  ngOnInit() {
  }

}
