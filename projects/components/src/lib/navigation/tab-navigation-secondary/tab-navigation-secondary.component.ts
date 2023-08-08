import { AfterContentInit, Component, ContentChildren, EventEmitter, Input, OnInit, Output, QueryList } from '@angular/core';
import { TabNavigationSecondaryItemComponent } from '../tab-navigation-secondary-item/tab-navigation-secondary-item.component';

@Component({
  selector: 'aa-tab-navigation-secondary',
  templateUrl: './tab-navigation-secondary.component.html',
  styleUrls: ['./tab-navigation-secondary.component.scss']
})
export class TabNavigationSecondaryComponent implements OnInit, AfterContentInit {
  @ContentChildren(TabNavigationSecondaryItemComponent) tabNavigationItems: QueryList<TabNavigationSecondaryItemComponent>;
  @Input() autoChangeTabs = true;
  @Input() displayTabContent = true;
  @Input() routerOutletSecondary: boolean;
  @Input() ngTemplate: boolean;
  @Input() tabColour: any;
  @Input() tabActiveColour: any;
  @Output() tabClicked = new EventEmitter<TabNavigationSecondaryItemComponent>();
  @Output() tabChanged = new EventEmitter<TabNavigationSecondaryItemComponent>();
  @Output() closeTabSecondary = new EventEmitter<any>();
  currentTab: TabNavigationSecondaryItemComponent;

  get contentTabs() {
    return this.tabNavigationItems?.filter((tabNavigationItem: TabNavigationSecondaryItemComponent) => !!tabNavigationItem.templateRef);
  }

  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit() {
    if (this.contentTabs && this.contentTabs[0]) {
      this.changeTab(this.contentTabs[0]);
    }
  }

  isActive(tab: TabNavigationSecondaryItemComponent) {
    return this.currentTab.tabName === tab.tabName;
  }

  onTabClicked(tab: TabNavigationSecondaryItemComponent) {
    this.tabClicked.emit(tab);

    if (this.autoChangeTabs) {
      this.changeTab(tab);
    }
  }

  changeTab(tab: TabNavigationSecondaryItemComponent) {
    this.currentTab = tab;
    this.tabChanged.emit(tab);
  }

  changeTabById(tabId: string) {
    const tab = this.contentTabs.find((x) => x.tabId === tabId);
    if (tab) {
      this.changeTab(tab);
    }
  }

  onCloseTabSecondary(e: Event, tabId: any) {
    e.stopPropagation();
    this.closeTabSecondary.emit(tabId);
  }
}
