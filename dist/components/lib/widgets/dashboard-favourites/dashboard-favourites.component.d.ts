import { EventEmitter, OnInit } from '@angular/core';
export declare class DashboardFavouritesComponent implements OnInit {
    isFavourite: boolean;
    favouritesTitle: string;
    favouritesText: string;
    favouritesURL: string;
    favIconClass: string;
    iconColour: string;
    materialIcons: boolean;
    tagName: string;
    favDescription: string;
    lastViewed: string;
    favClick: EventEmitter<any>;
    anchorClick: EventEmitter<any>;
    onFavClick(event: Event): void;
    onAnchorClick(event: Event): void;
    constructor();
    ngOnInit(): void;
}
//# sourceMappingURL=dashboard-favourites.component.d.ts.map