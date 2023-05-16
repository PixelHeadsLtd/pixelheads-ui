import { OnInit, EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<BladeTopComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<BladeTopComponent, "aa-blade-top", never, { "isOpen": "isOpen"; "isPinned": "isPinned"; "rightPos": "rightPos"; "leftPos": "leftPos"; "topPos": "topPos"; "zIndex": "zIndex"; "maxHeight": "maxHeight"; "countryFlag": "countryFlag"; "paddingTop": "paddingTop"; "paddingRight": "paddingRight"; "paddingBottom": "paddingBottom"; "paddingLeft": "paddingLeft"; "userProfile": "userProfile"; "borderColour": "borderColour"; "profileSize": "profileSize"; "borderThickness": "borderThickness"; }, { "bladeOpen": "bladeOpen"; "bladePinned": "bladePinned"; }, never, ["[user-profile]", "[custom-content]"]>;
}

//# sourceMappingURL=blade-top.component.d.ts.map