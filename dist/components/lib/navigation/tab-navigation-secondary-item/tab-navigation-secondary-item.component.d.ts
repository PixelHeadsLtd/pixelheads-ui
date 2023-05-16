import { AfterContentChecked, OnInit, TemplateRef } from '@angular/core';
import { TabNavigationSecondaryContentDirective } from './tab-navigation-secondary-content.directive';
import * as ɵngcc0 from '@angular/core';
export declare class TabNavigationSecondaryItemComponent implements OnInit, AfterContentChecked {
    templateRefDirective: TabNavigationSecondaryContentDirective;
    tabId: any;
    tabName: string;
    tabRoute: string;
    tabDisabled: boolean;
    enableCloseSecondary: boolean;
    routerLink: string | any[];
    routerLinkActive: boolean;
    templateRef: TemplateRef<any>;
    templateRefHeader: TemplateRef<any>;
    ngOnInit(): void;
    ngAfterContentChecked(): void;
    get route(): string | any[];
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<TabNavigationSecondaryItemComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<TabNavigationSecondaryItemComponent, "aa-tab-navigation-secondary-item", never, { "tabId": "tabId"; "tabName": "tabName"; "tabRoute": "tabRoute"; "tabDisabled": "tabDisabled"; "enableCloseSecondary": "enableCloseSecondary"; "routerLink": "routerLink"; "routerLinkActive": "routerLinkActive"; }, {}, ["templateRefDirective"], never>;
}

//# sourceMappingURL=tab-navigation-secondary-item.component.d.ts.map