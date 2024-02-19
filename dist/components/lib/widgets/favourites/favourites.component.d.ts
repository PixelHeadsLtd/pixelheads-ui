import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
interface FavouriteItem {
    favColour: string;
    favLabel: string;
    favTitle: string;
    favTextLineOne: string;
    favTextLineTwo: string;
    favTextLineThree?: string;
    isFavourite: boolean;
}
export declare class FavouritesComponent {
    showLandscapeFavs: boolean;
    showPortraitFavs: boolean;
    anchorIsClicked: boolean;
    disableFavsStar: boolean;
    toggleFavourite: string;
    favsHeading: string;
    clickAnchor: string;
    favLabel: string;
    favTitle: string;
    favTextLineOne: string;
    favTextLineTwo: string;
    favTextLineThree: string;
    favColour: string;
    favsOrigin: Array<FavouriteItem>;
    favsTarget: Array<FavouriteItem>;
    favsPortrait: Array<FavouriteItem>;
    isFavourite: any;
    anchorClick: EventEmitter<Event>;
    favClick: EventEmitter<FavouriteItem>;
    onAnchorClick(e: Event): void;
    onFavClick(fav: FavouriteItem): void;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<FavouritesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FavouritesComponent, "aa-favourites", never, { "showLandscapeFavs": { "alias": "showLandscapeFavs"; "required": false; }; "showPortraitFavs": { "alias": "showPortraitFavs"; "required": false; }; "anchorIsClicked": { "alias": "anchorIsClicked"; "required": false; }; "disableFavsStar": { "alias": "disableFavsStar"; "required": false; }; "toggleFavourite": { "alias": "toggleFavourite"; "required": false; }; "favsHeading": { "alias": "favsHeading"; "required": false; }; "clickAnchor": { "alias": "clickAnchor"; "required": false; }; "favLabel": { "alias": "favLabel"; "required": false; }; "favTitle": { "alias": "favTitle"; "required": false; }; "favTextLineOne": { "alias": "favTextLineOne"; "required": false; }; "favTextLineTwo": { "alias": "favTextLineTwo"; "required": false; }; "favTextLineThree": { "alias": "favTextLineThree"; "required": false; }; "favColour": { "alias": "favColour"; "required": false; }; "favsOrigin": { "alias": "favsOrigin"; "required": false; }; "favsTarget": { "alias": "favsTarget"; "required": false; }; "favsPortrait": { "alias": "favsPortrait"; "required": false; }; "isFavourite": { "alias": "isFavourite"; "required": false; }; }, { "anchorClick": "anchorClick"; "favClick": "favClick"; }, never, never, false, never>;
}
export {};
