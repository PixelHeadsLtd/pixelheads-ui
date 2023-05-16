import { AfterContentInit, EventEmitter, OnInit, QueryList } from '@angular/core';
import { TabNavigationSecondaryItemComponent } from '../tab-navigation-secondary-item/tab-navigation-secondary-item.component';
import * as ɵngcc0 from '@angular/core';
export declare class TabNavigationSecondaryComponent implements OnInit, AfterContentInit {
    tabNavigationItems: QueryList<TabNavigationSecondaryItemComponent>;
    autoChangeTabs: boolean;
    displayTabContent: boolean;
    routerOutlet: boolean;
    ngTemplate: boolean;
    tabColour: any;
    tabActiveColour: any;
    tabClicked: EventEmitter<TabNavigationSecondaryItemComponent>;
    tabChanged: EventEmitter<TabNavigationSecondaryItemComponent>;
    closeTabSecondary: EventEmitter<Event>;
    currentTab: TabNavigationSecondaryItemComponent;
    get contentTabs(): TabNavigationSecondaryItemComponent[];
    constructor();
    onCloseTabSecondary(e: Event): void;
    ngOnInit(): void;
    ngAfterContentInit(): void;
    isActive(tab: TabNavigationSecondaryItemComponent): boolean;
    onTabClicked(tab: TabNavigationSecondaryItemComponent): void;
    changeTab(tab: TabNavigationSecondaryItemComponent): void;
    changeTabById(tabId: string): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<TabNavigationSecondaryComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<TabNavigationSecondaryComponent, "aa-tab-navigation-secondary", never, { "autoChangeTabs": "autoChangeTabs"; "displayTabContent": "displayTabContent"; "routerOutlet": "routerOutlet"; "ngTemplate": "ngTemplate"; "tabColour": "tabColour"; "tabActiveColour": "tabActiveColour"; }, { "tabClicked": "tabClicked"; "tabChanged": "tabChanged"; "closeTabSecondary": "closeTabSecondary"; }, ["tabNavigationItems"], ["[list-items]", "*"]>;
}

//# sourceMappingURL=tab-navigation-secondary.component.d.ts.map