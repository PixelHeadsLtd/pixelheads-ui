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
    text: string;
    favClick: EventEmitter<any>;
    anchorClick: EventEmitter<any>;
    onFavClick(event: Event): void;
    onAnchorClick(event: Event): void;
    constructor();
    ngOnInit(): void;
}
//# sourceMappingURL=dashboard-favourites-list.component.d.ts.map