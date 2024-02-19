import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class FavouritesListComponent {
    isFavourite: boolean;
    itemAnchorTitle: string;
    itemAnchor: string;
    itemDescription: string;
    text: string;
    favClick: EventEmitter<any>;
    anchorClick: EventEmitter<any>;
    onFavClick(event: Event): void;
    onAnchorClick(event: Event): void;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<FavouritesListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FavouritesListComponent, "aa-favourites-list", never, { "isFavourite": { "alias": "isFavourite"; "required": false; }; "itemAnchorTitle": { "alias": "itemAnchorTitle"; "required": false; }; "itemAnchor": { "alias": "itemAnchor"; "required": false; }; "itemDescription": { "alias": "itemDescription"; "required": false; }; "text": { "alias": "text"; "required": false; }; }, { "favClick": "favClick"; "anchorClick": "anchorClick"; }, never, never, false, never>;
}
