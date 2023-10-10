import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
export declare class ContextMenuItemComponent implements OnInit {
    private router;
    menuItemText: string;
    routerLink: string | any[];
    routerLinkActive: boolean;
    minWidth: number;
    noWrap: boolean;
    constructor(router: Router);
    onClick(): void;
    ngOnInit(): void;
}
//# sourceMappingURL=context-menu-item.component.d.ts.map