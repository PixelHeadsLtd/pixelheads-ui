import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class TextareaAutoresizeDirective implements OnInit, OnDestroy {
    private elementRef;
    private formControlSubscription;
    set formControlInstance(control: AbstractControl | undefined);
    constructor(elementRef: ElementRef);
    onInput(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    private cleanControlSubscription;
    private resize;
    static ɵfac: i0.ɵɵFactoryDeclaration<TextareaAutoresizeDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TextareaAutoresizeDirective, "[aaTextareaAutoresize]", never, { "formControlInstance": { "alias": "aaTextareaAutoresize"; "required": false; }; }, {}, never, never, false, never>;
}
