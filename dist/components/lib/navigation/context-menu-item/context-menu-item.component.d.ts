import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export declare class ContextMenuItemComponent {
    private router;
    menuItemText: string;
    routerLink: string | any[];
    routerLinkActive: boolean;
    minWidth: number;
    noWrap: boolean;
    constructor(router: Router);
    onClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ContextMenuItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ContextMenuItemComponent, "aa-context-menu-item", never, { "menuItemText": { "alias": "menuItemText"; "required": false; }; "routerLink": { "alias": "routerLink"; "required": false; }; "routerLinkActive": { "alias": "routerLinkActive"; "required": false; }; "minWidth": { "alias": "minWidth"; "required": false; }; "noWrap": { "alias": "noWrap"; "required": false; }; }, {}, never, never, false, never>;
}
