import { OnInit, EventEmitter } from '@angular/core';
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
}
//# sourceMappingURL=blade-bottom.component.d.ts.map