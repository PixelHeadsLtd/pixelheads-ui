import { OnInit, EventEmitter } from '@angular/core';
export declare class BladeTopComponent implements OnInit {
    rightPos: number;
    leftPos: number;
    topPos: number;
    zIndex: number;
    maxHeight: number;
    countryFlag: string;
    paddingTop: boolean;
    paddingRight: boolean;
    paddingBottom: boolean;
    paddingLeft: boolean;
    userProfile: boolean;
    borderColour: string;
    profileSize: number;
    borderThickness: string;
    isOpen: boolean;
    isPinned: boolean;
    bladeOpen: EventEmitter<boolean>;
    bladePinned: EventEmitter<boolean>;
    onClose(): void;
    toggleThePin(e: any): void;
    constructor();
    ngOnInit(): void;
}
//# sourceMappingURL=blade-top.component.d.ts.map