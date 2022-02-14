import { OnInit, EventEmitter } from '@angular/core';
export declare class CardComponent implements OnInit {
    cardName: string;
    cardRole: string;
    cardOptional: boolean;
    cardMini: boolean;
    themeColour: boolean;
    zIndex: number;
    imgPath: any;
    title: any;
    showAsIcon: boolean;
    showAsProfile: boolean;
    iconName: string;
    borderClass: string;
    topPos: number;
    rightPos: number;
    leftPos: number;
    cardClick: EventEmitter<Event>;
    onCardClick(e: Event): void;
    constructor();
    ngOnInit(): void;
}
//# sourceMappingURL=card.component.d.ts.map