import { EventEmitter, OnInit } from '@angular/core';
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
}
//# sourceMappingURL=favourites-list.component.d.ts.map