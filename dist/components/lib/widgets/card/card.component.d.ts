import { OnInit, EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class CardComponent implements OnInit {
    cardName: string;
    cardRole: string;
    cardOptional: boolean;
    cardMini: boolean;
    cardDetailed: boolean;
    cardWidth: any;
    themeColour: boolean;
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
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<CardComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<CardComponent, "aa-card", never, { "cardName": "cardName"; "cardRole": "cardRole"; "cardOptional": "cardOptional"; "cardMini": "cardMini"; "cardDetailed": "cardDetailed"; "cardWidth": "cardWidth"; "themeColour": "themeColour"; "zIndex": "zIndex"; "imgPath": "imgPath"; "title": "title"; "showAsIcon": "showAsIcon"; "showAsProfile": "showAsProfile"; "iconName": "iconName"; "borderClass": "borderClass"; "topPos": "topPos"; "rightPos": "rightPos"; "leftPos": "leftPos"; }, { "cardClick": "cardClick"; }, never, ["[card-menu]", "[card-menu-opt]", "[card-hover-content]", "[profile-image]", "[content]", "[card-detailed-content]"]>;
}

//# sourceMappingURL=card.component.d.ts.map