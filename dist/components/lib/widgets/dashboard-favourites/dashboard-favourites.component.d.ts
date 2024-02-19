import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class DashboardFavouritesComponent {
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
    static ɵfac: i0.ɵɵFactoryDeclaration<DashboardFavouritesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DashboardFavouritesComponent, "aa-dashboard-favourites", never, { "isFavourite": { "alias": "isFavourite"; "required": false; }; "favouritesTitle": { "alias": "favouritesTitle"; "required": false; }; "favouritesText": { "alias": "favouritesText"; "required": false; }; "favouritesURL": { "alias": "favouritesURL"; "required": false; }; "favIconClass": { "alias": "favIconClass"; "required": false; }; "iconColour": { "alias": "iconColour"; "required": false; }; "materialIcons": { "alias": "materialIcons"; "required": false; }; "tagName": { "alias": "tagName"; "required": false; }; "favDescription": { "alias": "favDescription"; "required": false; }; "lastViewed": { "alias": "lastViewed"; "required": false; }; }, { "anchorClick": "anchorClick"; "favClick": "favClick"; }, never, never, false, never>;
}
