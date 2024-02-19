import { EventEmitter, ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ClickOutsideDirective {
    private elementRef;
    aaClickOutside: EventEmitter<void>;
    constructor(elementRef: ElementRef);
    onClick(target: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ClickOutsideDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ClickOutsideDirective, "[aaClickOutside]", never, {}, { "aaClickOutside": "aaClickOutside"; }, never, never, false, never>;
}
