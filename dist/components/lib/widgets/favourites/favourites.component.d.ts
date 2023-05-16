import { EventEmitter, OnInit } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
declare class FavouriteItem {
    favColour: string;
    favLabel: string;
    favTitle: string;
    favTextLineOne: string;
    favTextLineTwo: string;
    favTextLineThree?: string;
    isFavourite: boolean;
}
export declare class FavouritesComponent implements OnInit {
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
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<FavouritesComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<FavouritesComponent, "aa-favourites", never, { "isFavourite": "isFavourite"; "favsTarget": "favsTarget"; "favsOrigin": "favsOrigin"; "showLandscapeFavs": "showLandscapeFavs"; "showPortraitFavs": "showPortraitFavs"; "anchorIsClicked": "anchorIsClicked"; "disableFavsStar": "disableFavsStar"; "toggleFavourite": "toggleFavourite"; "favsHeading": "favsHeading"; "clickAnchor": "clickAnchor"; "favLabel": "favLabel"; "favTitle": "favTitle"; "favTextLineOne": "favTextLineOne"; "favTextLineTwo": "favTextLineTwo"; "favTextLineThree": "favTextLineThree"; "favColour": "favColour"; "favsPortrait": "favsPortrait"; }, { "anchorClick": "anchorClick"; "favClick": "favClick"; }, never, never>;
}
export {};

//# sourceMappingURL=favourites.component.d.ts.map