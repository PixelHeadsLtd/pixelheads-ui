import { AfterContentInit, EventEmitter, OnInit, QueryList } from '@angular/core';
import { TabNavigationItemComponent } from '../tab-navigation-item/tab-navigation-item.component';
import * as ɵngcc0 from '@angular/core';
export declare class TabNavigationComponent implements OnInit, AfterContentInit {
    tabNavigationItems: QueryList<TabNavigationItemComponent>;
    autoChangeTabs: boolean;
    displayTabContent: boolean;
    tabInfo: boolean;
    routerOutlet: boolean;
    ngTemplate: boolean;
    tabInfoRouterOutlet: boolean;
    toggleFullscreen: boolean;
    standardTabs: boolean;
    tabClicked: EventEmitter<TabNavigationItemComponent>;
    tabChanged: EventEmitter<TabNavigationItemComponent>;
    closeTab: EventEmitter<any>;
    currentTab: TabNavigationItemComponent;
    get contentTabs(): TabNavigationItemComponent[];
    constructor();
    ngOnInit(): void;
    ngAfterContentInit(): void;
    isActive(tab: TabNavigationItemComponent): boolean;
    isDividerTab(): boolean;
    onTabClicked(tab: TabNavigationItemComponent): void;
    changeTab(tab: TabNavigationItemComponent): void;
    changeTabById(tabId: string): void;
    onCloseTab(e: Event, tabId: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<TabNavigationComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<TabNavigationComponent, "aa-tab-navigation", never, { "autoChangeTabs": "autoChangeTabs"; "displayTabContent": "displayTabContent"; "tabInfo": "tabInfo"; "routerOutlet": "routerOutlet"; "ngTemplate": "ngTemplate"; "tabInfoRouterOutlet": "tabInfoRouterOutlet"; "toggleFullscreen": "toggleFullscreen"; "standardTabs": "standardTabs"; }, { "tabClicked": "tabClicked"; "tabChanged": "tabChanged"; "closeTab": "closeTab"; }, ["tabNavigationItems"], ["[list-items]", "*", "[tabs]"]>;
}

//# sourceMappingURL=tab-navigation.component.d.ts.map