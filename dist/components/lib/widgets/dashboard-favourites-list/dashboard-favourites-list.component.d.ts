import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class DashboardFavouritesListComponent {
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
    static ɵfac: i0.ɵɵFactoryDeclaration<DashboardFavouritesListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DashboardFavouritesListComponent, "aa-dashboard-favourites-list", never, { "isFavourite": { "alias": "isFavourite"; "required": false; }; "showTags": { "alias": "showTags"; "required": false; }; "itemAnchorTitle": { "alias": "itemAnchorTitle"; "required": false; }; "itemAnchorURL": { "alias": "itemAnchorURL"; "required": false; }; "itemAnchor": { "alias": "itemAnchor"; "required": false; }; "itemTitle": { "alias": "itemTitle"; "required": false; }; "itemDescription": { "alias": "itemDescription"; "required": false; }; "showBody": { "alias": "showBody"; "required": false; }; "favouriteId": { "alias": "favouriteId"; "required": false; }; "iconName": { "alias": "iconName"; "required": false; }; "tagName": { "alias": "tagName"; "required": false; }; "lastViewed": { "alias": "lastViewed"; "required": false; }; "favouritesTitle": { "alias": "favouritesTitle"; "required": false; }; "favDescription": { "alias": "favDescription"; "required": false; }; }, { "anchorClick": "anchorClick"; "favClick": "favClick"; }, never, never, false, never>;
}
