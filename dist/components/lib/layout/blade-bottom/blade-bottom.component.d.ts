import { OnInit, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class BladeBottomComponent implements OnInit {
    fullScreenPos: any;
    splitScreenPos: any;
    closedPos: any;
    isOpen: boolean;
    isPinned: boolean;
    disablePinning: boolean;
    isFullScreen: boolean;
    innitiallyPinned: boolean;
    controlsColor: string;
    headerBgColor: string;
    zIndex: number;
    bladePinned: EventEmitter<boolean>;
    bladeOpen: EventEmitter<boolean>;
    bladeFullScreen: EventEmitter<boolean>;
    toggle(): void;
    toggleThePin(e: any): void;
    expandedPosition(): any;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BladeBottomComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BladeBottomComponent, "aa-blade-bottom", never, { "fullScreenPos": { "alias": "fullScreenPos"; "required": false; }; "splitScreenPos": { "alias": "splitScreenPos"; "required": false; }; "closedPos": { "alias": "closedPos"; "required": false; }; "isOpen": { "alias": "isOpen"; "required": false; }; "isPinned": { "alias": "isPinned"; "required": false; }; "disablePinning": { "alias": "disablePinning"; "required": false; }; "isFullScreen": { "alias": "isFullScreen"; "required": false; }; "innitiallyPinned": { "alias": "innitiallyPinned"; "required": false; }; "controlsColor": { "alias": "controlsColor"; "required": false; }; "headerBgColor": { "alias": "headerBgColor"; "required": false; }; "zIndex": { "alias": "zIndex"; "required": false; }; }, { "bladePinned": "bladePinned"; "bladeOpen": "bladeOpen"; "bladeFullScreen": "bladeFullScreen"; }, never, ["[custom-header]", "[custom-content]"], false, never>;
}
