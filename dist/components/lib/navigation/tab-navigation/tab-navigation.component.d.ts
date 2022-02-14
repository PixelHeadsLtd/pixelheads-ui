import { AfterContentInit, EventEmitter, OnInit, QueryList } from '@angular/core';
import { TabNavigationItemComponent } from '../tab-navigation-item/tab-navigation-item.component';
export declare class TabNavigationComponent implements OnInit, AfterContentInit {
    tabNavigationItems: QueryList<TabNavigationItemComponent>;
    autoChangeTabs: boolean;
    displayTabContent: boolean;
    tabInfo: boolean;
    routerOutlet: boolean;
    ngTemplate: boolean;
    tabInfoRouterOutlet: boolean;
    enableIcons: boolean;
    enableCount: boolean;
    tabCount: number;
    iconName: string;
    iconColour: string;
    toggleFullscreen: boolean;
    activeColor: string;
    standardTabs: boolean;
    tabClicked: EventEmitter<TabNavigationItemComponent>;
    tabChanged: EventEmitter<TabNavigationItemComponent>;
    currentTab: TabNavigationItemComponent;
    get contentTabs(): TabNavigationItemComponent[];
    constructor();
    ngOnInit(): void;
    ngAfterContentInit(): void;
    isActive(tab: TabNavigationItemComponent): boolean;
    onTabClicked(tab: TabNavigationItemComponent): void;
    changeTab(tab: TabNavigationItemComponent): void;
    changeTabById(tabId: string): void;
}
//# sourceMappingURL=tab-navigation.component.d.ts.map