import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CardComponent {
    cardName: string;
    cardRole: string;
    cardOptional: boolean;
    cardMini: boolean;
    cardDetailed: boolean;
    cardWidth: any;
    themeColour: string;
    zIndex: number;
    imgPath: any;
    title: any;
    showAsIcon: boolean;
    showAsProfile: boolean;
    iconName: string;
    borderClass: string;
    topPos: any;
    rightPos: any;
    leftPos: any;
    cardClick: EventEmitter<Event>;
    onCardClick(e: Event): void;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<CardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CardComponent, "aa-card", never, { "cardName": { "alias": "cardName"; "required": false; }; "cardRole": { "alias": "cardRole"; "required": false; }; "cardOptional": { "alias": "cardOptional"; "required": false; }; "cardMini": { "alias": "cardMini"; "required": false; }; "cardDetailed": { "alias": "cardDetailed"; "required": false; }; "cardWidth": { "alias": "cardWidth"; "required": false; }; "themeColour": { "alias": "themeColour"; "required": false; }; "zIndex": { "alias": "zIndex"; "required": false; }; "imgPath": { "alias": "imgPath"; "required": false; }; "title": { "alias": "title"; "required": false; }; "showAsIcon": { "alias": "showAsIcon"; "required": false; }; "showAsProfile": { "alias": "showAsProfile"; "required": false; }; "iconName": { "alias": "iconName"; "required": false; }; "borderClass": { "alias": "borderClass"; "required": false; }; "topPos": { "alias": "topPos"; "required": false; }; "rightPos": { "alias": "rightPos"; "required": false; }; "leftPos": { "alias": "leftPos"; "required": false; }; }, { "cardClick": "cardClick"; }, never, ["[card-menu]", "[card-menu-opt]", "[card-hover-content]", "[profile-image]", "[content]", "[card-detailed-content]"], false, never>;
}
