import { AfterContentChecked, OnInit, TemplateRef } from '@angular/core';
import { TabNavigationContentDirective } from './tab-navigation-content.directive';
import { TabNavigationHeaderContentDirective } from './tab-navigation-header-content.directive';
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
}
//# sourceMappingURL=tab-navigation-item.component.d.ts.map