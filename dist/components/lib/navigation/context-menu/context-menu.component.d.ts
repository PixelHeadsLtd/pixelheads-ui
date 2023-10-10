import { OnInit, ElementRef } from '@angular/core';
export declare class ContextMenuComponent implements OnInit {
    private elementRef;
    absolutePosition: boolean;
    leftPos: number;
    topPos: number;
    rightPos: number;
    zIndex: number;
    minWidth: number;
    showOnLeft: boolean;
    showContextMenu: boolean;
    constructor(elementRef: ElementRef);
    onClick(targetElement: any): void;
    open(): void;
    close(): void;
    ngOnInit(): void;
}
//# sourceMappingURL=context-menu.component.d.ts.map