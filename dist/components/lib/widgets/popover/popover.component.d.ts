import { OnInit, ElementRef, EventEmitter } from '@angular/core';
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
}
//# sourceMappingURL=popover.component.d.ts.map