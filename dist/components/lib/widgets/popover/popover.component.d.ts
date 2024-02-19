import { OnInit, ElementRef, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PopoverComponent implements OnInit {
    private elementRef;
    showPopover: boolean;
    buttonClass: string;
    leftPos: any;
    topPos: any;
    bottomPos: any;
    rightPos: any;
    width: any;
    hideLabel: boolean;
    btnSmall: boolean;
    popoverTop: boolean;
    arrowPos: any;
    zIndex: number;
    popoverVisibilityChanged: EventEmitter<boolean>;
    constructor(elementRef: ElementRef);
    onClick(targetElement: any): void;
    open(): void;
    close(): void;
    changeVisibility(): void;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PopoverComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PopoverComponent, "aa-popover", never, { "buttonClass": { "alias": "buttonClass"; "required": false; }; "leftPos": { "alias": "leftPos"; "required": false; }; "topPos": { "alias": "topPos"; "required": false; }; "bottomPos": { "alias": "bottomPos"; "required": false; }; "rightPos": { "alias": "rightPos"; "required": false; }; "width": { "alias": "width"; "required": false; }; "hideLabel": { "alias": "hideLabel"; "required": false; }; "btnSmall": { "alias": "btnSmall"; "required": false; }; "popoverTop": { "alias": "popoverTop"; "required": false; }; "arrowPos": { "alias": "arrowPos"; "required": false; }; "zIndex": { "alias": "zIndex"; "required": false; }; }, { "popoverVisibilityChanged": "popoverVisibilityChanged"; }, never, ["[call-to-action]", "[custom-content]"], false, never>;
}
