import { OnInit, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class BladeTopComponent implements OnInit {
    rightPos: any;
    leftPos: any;
    topPos: any;
    zIndex: number;
    maxHeight: any;
    countryFlag: string;
    paddingTop: boolean;
    paddingRight: boolean;
    paddingBottom: boolean;
    paddingLeft: boolean;
    userProfile: boolean;
    borderColour: string;
    profileSize: any;
    borderThickness: any;
    isOpen: boolean;
    isPinned: boolean;
    bladeOpen: EventEmitter<boolean>;
    bladePinned: EventEmitter<boolean>;
    onClose(): void;
    toggleThePin(e: any): void;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BladeTopComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BladeTopComponent, "aa-blade-top", never, { "rightPos": { "alias": "rightPos"; "required": false; }; "leftPos": { "alias": "leftPos"; "required": false; }; "topPos": { "alias": "topPos"; "required": false; }; "zIndex": { "alias": "zIndex"; "required": false; }; "maxHeight": { "alias": "maxHeight"; "required": false; }; "countryFlag": { "alias": "countryFlag"; "required": false; }; "paddingTop": { "alias": "paddingTop"; "required": false; }; "paddingRight": { "alias": "paddingRight"; "required": false; }; "paddingBottom": { "alias": "paddingBottom"; "required": false; }; "paddingLeft": { "alias": "paddingLeft"; "required": false; }; "userProfile": { "alias": "userProfile"; "required": false; }; "borderColour": { "alias": "borderColour"; "required": false; }; "profileSize": { "alias": "profileSize"; "required": false; }; "borderThickness": { "alias": "borderThickness"; "required": false; }; "isOpen": { "alias": "isOpen"; "required": false; }; "isPinned": { "alias": "isPinned"; "required": false; }; }, { "bladeOpen": "bladeOpen"; "bladePinned": "bladePinned"; }, never, ["[user-profile]", "[custom-content]"], false, never>;
}
