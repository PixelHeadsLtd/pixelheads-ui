import { EventEmitter, OnInit } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class DashboardFavouritesComponent implements OnInit {
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
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<DashboardFavouritesComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<DashboardFavouritesComponent, "aa-dashboard-favourites", never, { "isFavourite": "isFavourite"; "favouritesTitle": "favouritesTitle"; "favouritesText": "favouritesText"; "favouritesURL": "favouritesURL"; "favIconClass": "favIconClass"; "iconColour": "iconColour"; "materialIcons": "materialIcons"; "tagName": "tagName"; "favDescription": "favDescription"; "lastViewed": "lastViewed"; }, { "anchorClick": "anchorClick"; "favClick": "favClick"; }, never, never>;
}

//# sourceMappingURL=dashboard-favourites.component.d.ts.map