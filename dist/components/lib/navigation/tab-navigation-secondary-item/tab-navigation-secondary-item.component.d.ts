import { AfterContentChecked, TemplateRef } from '@angular/core';
import { TabNavigationSecondaryContentDirective } from './tab-navigation-secondary-content.directive';
import * as i0 from "@angular/core";
export declare class TabNavigationSecondaryItemComponent implements AfterContentChecked {
    templateRefDirective?: TabNavigationSecondaryContentDirective;
    tabId: any;
    tabName: string;
    tabRoute: string;
    tabDisabled: boolean;
    enableCloseSecondary: boolean;
    routerLink: string | any[];
    routerLinkActive: boolean;
    templateRef?: TemplateRef<any>;
    templateRefHeader?: TemplateRef<any>;
    ngAfterContentChecked(): void;
    get route(): string | any[];
    static ɵfac: i0.ɵɵFactoryDeclaration<TabNavigationSecondaryItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabNavigationSecondaryItemComponent, "aa-tab-navigation-secondary-item", never, { "tabId": { "alias": "tabId"; "required": false; }; "tabName": { "alias": "tabName"; "required": false; }; "tabRoute": { "alias": "tabRoute"; "required": false; }; "tabDisabled": { "alias": "tabDisabled"; "required": false; }; "enableCloseSecondary": { "alias": "enableCloseSecondary"; "required": false; }; "routerLink": { "alias": "routerLink"; "required": false; }; "routerLinkActive": { "alias": "routerLinkActive"; "required": false; }; }, {}, ["templateRefDirective"], never, false, never>;
}
