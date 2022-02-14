import { EventEmitter, OnInit } from '@angular/core';
export declare class FavouritesComponent implements OnInit {
    isFavourite: boolean;
    favouritesTitle: string;
    favouritesText: string;
    favClick: EventEmitter<any>;
    anchorClick: EventEmitter<any>;
    onFavClick(event: Event): void;
    onAnchorClick(event: Event): void;
    constructor();
    ngOnInit(): void;
}
//# sourceMappingURL=favourites.component.d.ts.map