import { EventEmitter, OnInit } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<DashboardFavouritesListComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<DashboardFavouritesListComponent, "aa-dashboard-favourites-list", never, { "isFavourite": "isFavourite"; "showTags": "showTags"; "itemAnchorTitle": "itemAnchorTitle"; "itemAnchorURL": "itemAnchorURL"; "itemAnchor": "itemAnchor"; "itemTitle": "itemTitle"; "itemDescription": "itemDescription"; "showBody": "showBody"; "favouriteId": "favouriteId"; "iconName": "iconName"; "tagName": "tagName"; "lastViewed": "lastViewed"; "favouritesTitle": "favouritesTitle"; "favDescription": "favDescription"; }, { "anchorClick": "anchorClick"; "favClick": "favClick"; }, never, never>;
}

//# sourceMappingURL=dashboard-favourites-list.component.d.ts.map