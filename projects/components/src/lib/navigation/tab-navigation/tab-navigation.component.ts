import { AfterContentInit, Component, ContentChildren, EventEmitter, Input, OnInit, Output, QueryList } from '@angular/core';
import { TabNavigationItemComponent } from '../tab-navigation-item/tab-navigation-item.component';

@Component({
  selector: 'aa-tab-navigation',
  templateUrl: './tab-navigation.component.html',
  styleUrls: ['./tab-navigation.component.scss']
})
export class TabNavigationComponent implements OnInit, AfterContentInit {
  @ContentChildren(TabNavigationItemComponent) tabNavigationItems: QueryList<TabNavigationItemComponent>;
  @Input() autoChangeTabs = true;
  @Input() displayTabContent = true;
  @Input() tabInfo: boolean;
  @Input() routerOutlet: boolean;
  @Input() ngTemplate: boolean;
  @Input() tabInfoRouterOutlet: boolean;
  @Input() enableIcons: boolean;
  @Input() enableCount: boolean;
  @Input() tabCount: number;
  @Input() iconName: string;
  @Input() iconColour: string;
  @Input() toggleFullscreen: boolean;
  @Input() activeColor: string;
  @Input() standardTabs: boolean;
  @Output() tabClicked = new EventEmitter<TabNavigationItemComponent>();
  @Output() tabChanged = new EventEmitter<TabNavigationItemComponent>();

  currentTab: TabNavigationItemComponent;

  get contentTabs() {
    return this.tabNavigationItems?.filter((tabNavigationItem: TabNavigationItemComponent) => !!tabNavigationItem.templateRef);
  }

  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit() {
    if (this.contentTabs && this.contentTabs[0]) {
      this.changeTab(this.contentTabs[0]);
    }
  }

  isActive(tab: TabNavigationItemComponent) {
    return this.currentTab.tabName === tab.tabName;
  }

  onTabClicked(tab: TabNavigationItemComponent) {
    this.tabClicked.emit(tab);

    if (this.autoChangeTabs) {
      this.changeTab(tab);
    }
  }

  changeTab(tab: TabNavigationItemComponent) {
    this.currentTab = tab;
    this.tabChanged.emit(tab);
  }

  changeTabById(tabId: string) {
    const tab = this.contentTabs.find((x) => x.tabId === tabId);
    if (tab) {
      this.changeTab(tab);
    }
  }
}
