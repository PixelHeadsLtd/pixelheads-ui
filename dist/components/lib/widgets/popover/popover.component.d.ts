import { OnInit, ElementRef } from '@angular/core';
export declare class PopoverComponent implements OnInit {
    private elementRef;
    showPopover: boolean;
    setIndex: number;
    buttonClass: string;
    leftPos: number;
    topPos: any;
    bottomPos: any;
    width: number;
    hideLabel: boolean;
    btnSmall: boolean;
    popoverTop: boolean;
    arrowPos: number;
    constructor(elementRef: ElementRef);
    onClick(targetElement: any): void;
    open(): void;
    close(): void;
    ngOnInit(): void;
}
//# sourceMappingURL=popover.component.d.ts.map