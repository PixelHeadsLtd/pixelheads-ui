import { EventEmitter, OnInit } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class FavouritesListComponent implements OnInit {
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
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<FavouritesListComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<FavouritesListComponent, "aa-favourites-list", never, { "text": "text"; "isFavourite": "isFavourite"; "itemAnchorTitle": "itemAnchorTitle"; "itemAnchor": "itemAnchor"; "itemDescription": "itemDescription"; }, { "favClick": "favClick"; "anchorClick": "anchorClick"; }, never, never>;
}

//# sourceMappingURL=favourites-list.component.d.ts.map