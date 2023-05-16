import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
export declare class TextareaAutoresizeDirective implements OnInit, OnDestroy {
    private elementRef;
    private formControlSubscription;
    set formControlInstance(control: AbstractControl);
    constructor(elementRef: ElementRef);
    onInput(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    private cleanControlSubscription;
    private resize;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<TextareaAutoresizeDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<TextareaAutoresizeDirective, "[aaTextareaAutoresize]", never, { "formControlInstance": "aaTextareaAutoresize"; }, {}, never>;
}

//# sourceMappingURL=textarea-autoresize.directive.d.ts.map