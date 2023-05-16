import { OnInit, EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
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
    toggleFullScreen(e: any): void;
    expandedPosition(): any;
    constructor();
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<BladeBottomComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<BladeBottomComponent, "aa-blade-bottom", never, { "isOpen": "isOpen"; "isPinned": "isPinned"; "isFullScreen": "isFullScreen"; "fullScreenPos": "fullScreenPos"; "splitScreenPos": "splitScreenPos"; "closedPos": "closedPos"; "disablePinning": "disablePinning"; "innitiallyPinned": "innitiallyPinned"; "controlsColor": "controlsColor"; "headerBgColor": "headerBgColor"; "zIndex": "zIndex"; }, { "bladePinned": "bladePinned"; "bladeOpen": "bladeOpen"; "bladeFullScreen": "bladeFullScreen"; }, never, ["[custom-header]", "[custom-content]"]>;
}

//# sourceMappingURL=blade-bottom.component.d.ts.map