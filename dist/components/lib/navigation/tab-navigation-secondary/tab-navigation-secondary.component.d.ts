import { AfterContentInit, EventEmitter, QueryList } from '@angular/core';
import { TabNavigationSecondaryItemComponent } from '../tab-navigation-secondary-item/tab-navigation-secondary-item.component';
import * as i0 from "@angular/core";
export declare class TabNavigationSecondaryComponent implements AfterContentInit {
    tabNavigationItems?: QueryList<TabNavigationSecondaryItemComponent>;
    autoChangeTabs: boolean;
    displayTabContent: boolean;
    routerOutletSecondary: boolean;
    ngTemplate: boolean;
    tabColour: any;
    tabActiveColour: any;
    tabClicked: EventEmitter<TabNavigationSecondaryItemComponent>;
    tabChanged: EventEmitter<TabNavigationSecondaryItemComponent>;
    closeTabSecondary: EventEmitter<any>;
    currentTab?: TabNavigationSecondaryItemComponent;
    get contentTabs(): TabNavigationSecondaryItemComponent[] | undefined;
    constructor();
    ngAfterContentInit(): void;
    isActive(tab: TabNavigationSecondaryItemComponent): boolean;
    onTabClicked(tab: TabNavigationSecondaryItemComponent): void;
    changeTab(tab: TabNavigationSecondaryItemComponent): void;
    changeTabById(tabId: string): void;
    onCloseTabSecondary(e: Event, tabId: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TabNavigationSecondaryComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabNavigationSecondaryComponent, "aa-tab-navigation-secondary", never, { "autoChangeTabs": { "alias": "autoChangeTabs"; "required": false; }; "displayTabContent": { "alias": "displayTabContent"; "required": false; }; "routerOutletSecondary": { "alias": "routerOutletSecondary"; "required": false; }; "ngTemplate": { "alias": "ngTemplate"; "required": false; }; "tabColour": { "alias": "tabColour"; "required": false; }; "tabActiveColour": { "alias": "tabActiveColour"; "required": false; }; }, { "tabClicked": "tabClicked"; "tabChanged": "tabChanged"; "closeTabSecondary": "closeTabSecondary"; }, ["tabNavigationItems"], ["[list-items]", "*"], false, never>;
}
