import { EventEmitter, OnInit } from '@angular/core';
export declare class TabNavigationSecondaryItemComponent implements OnInit {
    isActive: boolean;
    secondaryTabName: string;
    text: string;
    secondaryTabClick: EventEmitter<any>;
    onClick(event: Event): void;
    constructor();
    ngOnInit(): void;
}
//# sourceMappingURL=tab-navigation-secondary-item.component.d.ts.map