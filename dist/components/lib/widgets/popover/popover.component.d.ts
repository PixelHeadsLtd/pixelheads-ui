import { OnInit, ElementRef, EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class PopoverComponent implements OnInit {
    private elementRef;
    showPopover: boolean;
    buttonClass: string;
    leftPos: number;
    topPos: any;
    bottomPos: any;
    rightPos: any;
    width: number;
    hideLabel: boolean;
    btnSmall: boolean;
    popoverTop: boolean;
    arrowPos: number;
    zIndex: number;
    popoverVisibilityChanged: EventEmitter<boolean>;
    constructor(elementRef: ElementRef);
    onClick(targetElement: any): void;
    open(): void;
    close(): void;
    changeVisibility(): void;
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<PopoverComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<PopoverComponent, "aa-popover", never, { "buttonClass": "buttonClass"; "leftPos": "leftPos"; "topPos": "topPos"; "bottomPos": "bottomPos"; "rightPos": "rightPos"; "width": "width"; "hideLabel": "hideLabel"; "btnSmall": "btnSmall"; "popoverTop": "popoverTop"; "arrowPos": "arrowPos"; "zIndex": "zIndex"; }, { "popoverVisibilityChanged": "popoverVisibilityChanged"; }, never, ["[call-to-action]", "[custom-content]"]>;
}

//# sourceMappingURL=popover.component.d.ts.map