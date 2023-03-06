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
    anchorClick: EventEmitter<Event>;
    favClick: EventEmitter<boolean>;
    onAnchorClick(e: Event): void;
    onFavClick(e: any): void;
    constructor();
    ngOnInit(): void;
}
//# sourceMappingURL=dashboard-favourites.component.d.ts.map