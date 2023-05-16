import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as ɵngcc0 from '@angular/core';
export declare class ContextMenuItemComponent implements OnInit {
    private router;
    menuItemText: string;
    routerLink: string | any[];
    routerLinkActive: boolean;
    minWidth: number;
    constructor(router: Router);
    onClick(): void;
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<ContextMenuItemComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<ContextMenuItemComponent, "aa-context-menu-item", never, { "menuItemText": "menuItemText"; "routerLink": "routerLink"; "routerLinkActive": "routerLinkActive"; "minWidth": "minWidth"; }, {}, never, never>;
}

//# sourceMappingURL=context-menu-item.component.d.ts.map