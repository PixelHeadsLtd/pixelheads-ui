import { ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ContextMenuComponent {
    private elementRef;
    absolutePosition: boolean;
    leftPos: any;
    topPos: any;
    rightPos: any;
    zIndex: number;
    minWidth: any;
    showOnLeft: boolean;
    showContextMenu: boolean;
    constructor(elementRef: ElementRef);
    onClick(targetElement: any): void;
    open(): void;
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ContextMenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ContextMenuComponent, "aa-context-menu", never, { "absolutePosition": { "alias": "absolutePosition"; "required": false; }; "leftPos": { "alias": "leftPos"; "required": false; }; "topPos": { "alias": "topPos"; "required": false; }; "rightPos": { "alias": "rightPos"; "required": false; }; "zIndex": { "alias": "zIndex"; "required": false; }; "minWidth": { "alias": "minWidth"; "required": false; }; "showOnLeft": { "alias": "showOnLeft"; "required": false; }; }, {}, never, ["*"], false, never>;
}
