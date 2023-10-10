import { EventEmitter, OnInit } from '@angular/core';
export declare class DashboardFavouritesListComponent implements OnInit {
    isFavourite: boolean;
    showTags: boolean;
    itemAnchorTitle: string;
    itemAnchorURL: string;
    itemAnchor: string;
    itemTitle: string;
    itemDescription: string;
    showBody: boolean;
    favouriteId: string;
    iconName: string;
    tagName: string;
    lastViewed: string;
    favouritesTitle: string;
    favDescription: string;
    anchorClick: EventEmitter<Event>;
    favClick: EventEmitter<boolean>;
    onAnchorClick(e: Event): void;
    onFavClick(e: any): void;
    constructor();
    ngOnInit(): void;
}
//# sourceMappingURL=dashboard-favourites-list.component.d.ts.map