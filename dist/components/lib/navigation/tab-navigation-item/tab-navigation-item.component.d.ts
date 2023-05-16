import { AfterContentChecked, OnInit, TemplateRef } from '@angular/core';
import { TabNavigationContentDirective } from './tab-navigation-content.directive';
import { TabNavigationHeaderContentDirective } from './tab-navigation-header-content.directive';
import * as ɵngcc0 from '@angular/core';
export declare class TabNavigationItemComponent implements OnInit, AfterContentChecked {
    templateRefDirective: TabNavigationContentDirective;
    templateRefHeaderDirective: TabNavigationHeaderContentDirective;
    tabId: any;
    tabName: string;
    activeColor: string;
    enableIcons: boolean;
    iconName: string;
    iconColour: string;
    enableCount: boolean;
    enableClose: boolean;
    tabCount: number;
    countColour: string;
    tabRoute: string;
    tabDisabled: boolean;
    showRightDivider: boolean;
    routerLink: string | any[];
    routerLinkActive: boolean;
    templateRef: TemplateRef<any>;
    templateRefHeader: TemplateRef<any>;
    ngOnInit(): void;
    ngAfterContentChecked(): void;
    get route(): string | any[];
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<TabNavigationItemComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<TabNavigationItemComponent, "aa-tab-navigation-item", never, { "tabId": "tabId"; "tabName": "tabName"; "activeColor": "activeColor"; "enableIcons": "enableIcons"; "iconName": "iconName"; "iconColour": "iconColour"; "enableCount": "enableCount"; "enableClose": "enableClose"; "tabCount": "tabCount"; "countColour": "countColour"; "tabRoute": "tabRoute"; "tabDisabled": "tabDisabled"; "showRightDivider": "showRightDivider"; "routerLink": "routerLink"; "routerLinkActive": "routerLinkActive"; }, {}, ["templateRefDirective", "templateRefHeaderDirective"], never>;
}

//# sourceMappingURL=tab-navigation-item.component.d.ts.map