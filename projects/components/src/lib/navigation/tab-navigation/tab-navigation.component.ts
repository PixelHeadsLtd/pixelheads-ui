import { AfterContentInit, Component, ContentChildren, EventEmitter, Input, OnInit, Output, QueryList } from '@angular/core';
import { TabNavigationItemComponent } from '../tab-navigation-item/tab-navigation-item.component';

@Component({
  selector: 'aa-tab-navigation',
  templateUrl: './tab-navigation.component.html',
  styleUrls: ['./tab-navigation.component.scss']
})
export class TabNavigationComponent implements OnInit, AfterContentInit {
  @ContentChildren(TabNavigationItemComponent) tabNavigationItems?: QueryList<TabNavigationItemComponent>;
  @Input() autoChangeTabs = true;
  @Input() displayTabContent = true;
  @Input() tabInfo: boolean = false;
  @Input() routerOutlet: boolean = false;
  @Input() ngTemplate: boolean = false;
  @Input() defaultTabId: any;
  @Input() tabInfoRouterOutlet: boolean = false;
  @Input() toggleFullscreen: boolean = false;
  @Input() standardTabs: boolean = false;
  @Input() destroyOnHide: boolean = false;
  @Output() tabClicked = new EventEmitter<TabNavigationItemComponent>();
  @Output() tabChanged = new EventEmitter<TabNavigationItemComponent>();
  @Output() closeTab = new EventEmitter<any>();

  currentTab?: TabNavigationItemComponent;

  get contentTabs() {
    return this.tabNavigationItems?.filter((tabNavigationItem: TabNavigationItemComponent) => !!tabNavigationItem.templateRef);
  }

  constructor() { }

  ngOnInit(): void {
    if (this.defaultTabId) {
      setTimeout((_: any) => {
        this.changeTabById(this.defaultTabId);
      }, 100);
    }
  }

  ngAfterContentInit() {
    if (this.contentTabs && this.contentTabs[0]) {
      this.changeTab(this.contentTabs[0]);
    }
  }

  isActive(tab: TabNavigationItemComponent) {
    return this.currentTab?.tabName === tab.tabName;
  }

  isDividerTab() {
    return true;
  }

  onTabClicked(tab: TabNavigationItemComponent) {
    this.tabClicked.emit(tab);

    if (this.autoChangeTabs) {
      this.changeTab(tab);
    }
  }

  changeTab(tab: TabNavigationItemComponent) {
    if (this.currentTab && this.destroyOnHide) {
      this.currentTab.setVisible(false);
    }
    this.currentTab = tab;
    this.currentTab.setVisible(true);
    this.tabChanged.emit(tab);
  }

  changeTabById(tabId: string) {
    const tab = this.contentTabs?.find((x) => x.tabId === tabId);
    if (tab) {
      this.changeTab(tab);
    }
  }

  onCloseTab(e: Event, tabId: any) {
    e.stopPropagation();
    this.closeTab.emit(tabId);
  }
}
