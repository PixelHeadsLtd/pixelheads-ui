import { OnInit, ElementRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<ContextMenuComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<ContextMenuComponent, "aa-context-menu", never, { "absolutePosition": "absolutePosition"; "leftPos": "leftPos"; "topPos": "topPos"; "rightPos": "rightPos"; "zIndex": "zIndex"; "minWidth": "minWidth"; "showOnLeft": "showOnLeft"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=context-menu.component.d.ts.map