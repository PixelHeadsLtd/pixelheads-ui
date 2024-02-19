import * as i0 from '@angular/core';
import { EventEmitter, Directive, Output, HostListener, Input, NgModule, Component, ChangeDetectionStrategy, Pipe, forwardRef, ContentChild, ContentChildren, ElementRef, ViewChildren, ViewChild, Injectable } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule, DatePipe } from '@angular/common';
import * as i2 from '@angular/forms';
import { NG_VALUE_ACCESSOR, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i1$1 from '@angular/router';
import { RouterModule } from '@angular/router';
import * as i1$2 from '@angular/animations';
import { animate, style } from '@angular/animations';
import { Subject } from 'rxjs';

class ClickOutsideDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.aaClickOutside = new EventEmitter();
    }
    onClick(target) {
        const clickedInside = this.elementRef.nativeElement.contains(target);
        if (!clickedInside) {
            this.aaClickOutside.emit();
        }
    }
    static { this.ɵfac = function ClickOutsideDirective_Factory(t) { return new (t || ClickOutsideDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ClickOutsideDirective, selectors: [["", "aaClickOutside", ""]], hostBindings: function ClickOutsideDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function ClickOutsideDirective_click_HostBindingHandler($event) { return ctx.onClick($event.target); }, false, i0.ɵɵresolveDocument);
        } }, outputs: { aaClickOutside: "aaClickOutside" } }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ClickOutsideDirective, [{
        type: Directive,
        args: [{
                selector: '[aaClickOutside]',
            }]
    }], () => [{ type: i0.ElementRef }], { aaClickOutside: [{
            type: Output
        }], onClick: [{
            type: HostListener,
            args: ['document:click', ['$event.target']]
        }] }); })();

class TextareaAutoresizeDirective {
    set formControlInstance(control) {
        this.cleanControlSubscription();
        setTimeout(() => this.resize());
        if (control) {
            this.formControlSubscription = control.valueChanges.subscribe(() => {
                this.resize();
            });
        }
    }
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    onInput() {
        const isResizedThroughFormControl = !!this.formControlSubscription;
        if (!isResizedThroughFormControl) {
            this.resize();
        }
    }
    ngOnInit() {
        if (this.elementRef.nativeElement.scrollHeight) {
            setTimeout(() => this.resize());
        }
    }
    ngOnDestroy() {
        this.cleanControlSubscription();
    }
    cleanControlSubscription() {
        if (this.formControlSubscription) {
            this.formControlSubscription.unsubscribe();
        }
    }
    resize() {
        this.elementRef.nativeElement.style.height = '0';
        this.elementRef.nativeElement.style.height = this.elementRef.nativeElement.scrollHeight + 'px';
    }
    static { this.ɵfac = function TextareaAutoresizeDirective_Factory(t) { return new (t || TextareaAutoresizeDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: TextareaAutoresizeDirective, selectors: [["", "aaTextareaAutoresize", ""]], hostBindings: function TextareaAutoresizeDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("input", function TextareaAutoresizeDirective_input_HostBindingHandler() { return ctx.onInput(); });
        } }, inputs: { formControlInstance: [i0.ɵɵInputFlags.None, "aaTextareaAutoresize", "formControlInstance"] } }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TextareaAutoresizeDirective, [{
        type: Directive,
        args: [{
                selector: '[aaTextareaAutoresize]'
            }]
    }], () => [{ type: i0.ElementRef }], { formControlInstance: [{
            type: Input,
            args: ['aaTextareaAutoresize']
        }], onInput: [{
            type: HostListener,
            args: [':input']
        }] }); })();

class DirectivesModule {
    static { this.ɵfac = function DirectivesModule_Factory(t) { return new (t || DirectivesModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: DirectivesModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DirectivesModule, [{
        type: NgModule,
        args: [{
                declarations: [ClickOutsideDirective, TextareaAutoresizeDirective],
                imports: [
                    CommonModule
                ],
                exports: [ClickOutsideDirective, TextareaAutoresizeDirective]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DirectivesModule, { declarations: [ClickOutsideDirective, TextareaAutoresizeDirective], imports: [CommonModule], exports: [ClickOutsideDirective, TextareaAutoresizeDirective] }); })();

class LoadingSpinnerComponent {
    constructor() {
        this.loadingText = 'Loading...';
    }
    static { this.ɵfac = function LoadingSpinnerComponent_Factory(t) { return new (t || LoadingSpinnerComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LoadingSpinnerComponent, selectors: [["aa-loading-spinner"]], inputs: { loadingText: "loadingText" }, decls: 5, vars: 1, consts: [[1, "align-item-center"], [1, "flex-group", "flex-start"], [1, "loading-spinner-small"], [1, "flex-align-center", "text-info", "font-size-default", "text-pulsate"]], template: function LoadingSpinnerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "div", 1);
            i0.ɵɵelement(2, "div", 2);
            i0.ɵɵelementStart(3, "div", 3);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.loadingText);
        } }, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoadingSpinnerComponent, [{
        type: Component,
        args: [{ selector: 'aa-loading-spinner', changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"align-item-center\">\r\n  <div class=\"flex-group flex-start\">\r\n      <div class=\"loading-spinner-small\"></div>\r\n      <div class=\"flex-align-center text-info font-size-default text-pulsate\">{{loadingText}}</div>\r\n  </div>\r\n</section>\r\n" }]
    }], () => [], { loadingText: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LoadingSpinnerComponent, { className: "LoadingSpinnerComponent", filePath: "lib\\animations\\loading-spinner\\loading-spinner.component.ts", lineNumber: 9 }); })();

const _c0$O = a0 => ({ "z-index": a0 });
class LoadingSpinnerPageComponent {
    constructor() {
        this.loadingMessage = '';
        this.zIndex = 0;
    }
    static { this.ɵfac = function LoadingSpinnerPageComponent_Factory(t) { return new (t || LoadingSpinnerPageComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LoadingSpinnerPageComponent, selectors: [["aa-loading-spinner-page"]], inputs: { loadingMessage: "loadingMessage", zIndex: "zIndex" }, decls: 6, vars: 4, consts: [[1, "loading-spinner-page", 3, "ngStyle"], [1, "foreground"], [1, "loading-spinner-small"], [1, "margin-top-1", "italic", "grey-50"], [1, "background"]], template: function LoadingSpinnerPageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "div", 1);
            i0.ɵɵelement(2, "div", 2);
            i0.ɵɵelementStart(3, "div", 3);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(5, "div", 4);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c0$O, ctx.zIndex));
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.loadingMessage);
        } }, dependencies: [i1.NgStyle], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoadingSpinnerPageComponent, [{
        type: Component,
        args: [{ selector: 'aa-loading-spinner-page', changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"loading-spinner-page\" [ngStyle]=\"{'z-index' : zIndex}\">\r\n  <div class=\"foreground\">\r\n    <div class=\"loading-spinner-small\"></div>\r\n    <div class=\"margin-top-1 italic grey-50\">{{loadingMessage}}</div>\r\n  </div>\r\n  <div class=\"background\"></div>\r\n</section>\r\n" }]
    }], () => [], { loadingMessage: [{
            type: Input
        }], zIndex: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LoadingSpinnerPageComponent, { className: "LoadingSpinnerPageComponent", filePath: "lib\\animations\\loading-spinner-page\\loading-spinner-page.component.ts", lineNumber: 9 }); })();

class AnimationsModule {
    static { this.ɵfac = function AnimationsModule_Factory(t) { return new (t || AnimationsModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AnimationsModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AnimationsModule, [{
        type: NgModule,
        args: [{
                declarations: [LoadingSpinnerComponent, LoadingSpinnerPageComponent],
                imports: [
                    CommonModule
                ],
                exports: [LoadingSpinnerComponent, LoadingSpinnerPageComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AnimationsModule, { declarations: [LoadingSpinnerComponent, LoadingSpinnerPageComponent], imports: [CommonModule], exports: [LoadingSpinnerComponent, LoadingSpinnerPageComponent] }); })();

function ButtonComponent_div_0_div_4_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r7.buttonIcon);
} }
function ButtonComponent_div_0_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate1("count ", ctx_r8.countColor, "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r8.count);
} }
function ButtonComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtemplate(1, ButtonComponent_div_0_div_4_span_1_Template, 2, 1, "span", 8);
    i0.ɵɵelementStart(2, "span", 9);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, ButtonComponent_div_0_div_4_div_4_Template, 2, 4, "div", 1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r5.customIcons);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r5.buttonText);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r5.showCount);
} }
function ButtonComponent_div_0_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r6.buttonIcon);
} }
const _c0$N = a0 => ({ "show-label": a0 });
const _c1$C = (a0, a1) => ({ "material-icons": a0, "material-icons-outlined": a1 });
function ButtonComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "label", 3);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 4);
    i0.ɵɵlistener("click", function ButtonComponent_div_0_Template_button_click_3_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r9.onButtonClick($event)); });
    i0.ɵɵtemplate(4, ButtonComponent_div_0_div_4_Template, 5, 3, "div", 5)(5, ButtonComponent_div_0_span_5_Template, 2, 1, "span", 6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("field ", ctx_r0.fieldClass, "");
    i0.ɵɵclassProp("button-large", ctx_r0.buttonLarge);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(17, _c0$N, ctx_r0.showLabel))("for", ctx_r0.buttonId);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.buttonLabel, " ");
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r0.buttonClass);
    i0.ɵɵproperty("type", ctx_r0.buttonType)("name", ctx_r0.buttonId)("id", ctx_r0.buttonId)("disabled", ctx_r0.disabled)("ngClass", i0.ɵɵpureFunction2(19, _c1$C, ctx_r0.customIconsRound, ctx_r0.customIconsRoundOutlined));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.customIconsRound && !ctx_r0.customIconsRoundOutlined);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.customIconsRound || ctx_r0.customIconsRoundOutlined);
} }
function ButtonComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "button", 11);
    i0.ɵɵlistener("click", function ButtonComponent_div_1_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r11.onButtonClick($event)); });
    i0.ɵɵelementStart(2, "div", 12);
    i0.ɵɵprojection(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 13)(5, "div");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "h2", 14);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("field ", ctx_r1.fieldClass, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("type", ctx_r1.buttonType)("name", ctx_r1.buttonId)("id", ctx_r1.buttonId)("disabled", ctx_r1.disabled);
    i0.ɵɵadvance(4);
    i0.ɵɵclassMapInterpolate1("material-icons ", ctx_r1.iconColour, "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.iconName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.title);
} }
function ButtonComponent_div_2_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 21);
    i0.ɵɵlistener("click", function ButtonComponent_div_2_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r16.showBtnMenu = !ctx_r16.showBtnMenu); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(ctx_r13.buttonClass);
    i0.ɵɵproperty("type", ctx_r13.buttonType)("name", ctx_r13.buttonId)("id", ctx_r13.buttonId);
} }
function ButtonComponent_div_2_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 21);
    i0.ɵɵlistener("click", function ButtonComponent_div_2_button_8_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r19); const ctx_r18 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r18.showBtnMenu = !ctx_r18.showBtnMenu); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(ctx_r14.buttonClass);
    i0.ɵɵproperty("type", ctx_r14.buttonType)("name", ctx_r14.buttonId)("id", ctx_r14.buttonId);
} }
const _c2$r = a0 => ({ "max-height": a0 });
function ButtonComponent_div_2_nav_9_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nav", 22);
    i0.ɵɵlistener("click", function ButtonComponent_div_2_nav_9_Template_nav_click_0_listener() { i0.ɵɵrestoreView(_r21); const ctx_r20 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r20.showBtnMenu = false); });
    i0.ɵɵprojection(1, 1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(1, _c2$r, ctx_r15.maxHeight));
} }
const _c3$k = (a0, a1) => ({ "nav-left-side": a0, "nav-bottom": a1 });
function ButtonComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "label", 15);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 16)(4, "div", 17);
    i0.ɵɵtemplate(5, ButtonComponent_div_2_button_5_Template, 1, 5, "button", 18);
    i0.ɵɵelementStart(6, "button", 19);
    i0.ɵɵlistener("click", function ButtonComponent_div_2_Template_button_click_6_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r22 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r22.onButtonClick($event)); });
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, ButtonComponent_div_2_button_8_Template, 1, 5, "button", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, ButtonComponent_div_2_nav_9_Template, 2, 3, "nav", 20);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("field ", ctx_r2.fieldClass, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("for", ctx_r2.buttonId);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.buttonLabel);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(15, _c3$k, ctx_r2.navLeftside, ctx_r2.navBottom));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.navLeftside);
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r2.buttonClass);
    i0.ɵɵproperty("type", ctx_r2.buttonType)("name", ctx_r2.buttonId)("id", ctx_r2.buttonId);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.buttonText, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r2.navLeftside);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.showBtnMenu);
} }
function ButtonComponent_div_3_p_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 26);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r24 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r24.desc, " ");
} }
function ButtonComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "button")(2, "div", 23)(3, "h1", 24);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "h2", 14);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(7, ButtonComponent_div_3_p_7_Template, 2, 1, "p", 25);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("field ", ctx_r3.fieldClass, " flex-stretch");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("", ctx_r3.status, " button-summary border-radius-0-5 box-shadow-light bg-aa-white-100 padding-1-5 flex-column bd-aa-grey-5");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r3.level);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r3.title);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.showDescription);
} }
function ButtonComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 27);
    i0.ɵɵlistener("click", function ButtonComponent_button_4_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r25 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r25.onButtonClick($event)); });
    i0.ɵɵelementStart(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "div");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("type", ctx_r4.buttonType)("name", ctx_r4.buttonId)("id", ctx_r4.buttonId)("disabled", ctx_r4.disabled);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r4.buttonText);
} }
const _c4$f = [[["", "toolbar", ""]], [["", "bs-buttons", ""]]];
const _c5$d = ["[toolbar]", "[bs-buttons]"];
class ButtonComponent {
    onButtonClick(e) {
        e.stopPropagation();
        this.buttonClick.emit(e);
        this.showBtnMenu = false;
    }
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.buttonLabel = '';
        this.buttonText = '';
        this.buttonId = '';
        this.buttonClass = '';
        this.buttonType = 'button';
        this.disabled = false;
        this.fieldClass = '';
        this.buttonIcon = '';
        this.customIcons = false;
        this.buttonEnriched = false;
        this.showBtnMenu = false;
        this.buttonSplit = false;
        this.navBottom = false;
        this.iconName = '';
        this.title = '';
        this.iconColour = '';
        this.buttonLarge = false;
        this.buttonSummary = false;
        this.showDescription = false;
        this.status = '';
        this.level = 0;
        this.showCount = false;
        this.count = 0;
        this.showLabel = false;
        this.customIconsRound = false;
        this.customIconsRoundOutlined = false;
        this.navLeftside = false;
        this.buttonDayPicker = false;
        this.buttonClick = new EventEmitter();
    }
    onClick(targetElement) {
        const clickedInside = this.elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.showBtnMenu = false;
        }
    }
    open() {
        this.showBtnMenu = true;
    }
    close() {
        this.showBtnMenu = false;
    }
    static { this.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ButtonComponent, selectors: [["aa-button"]], hostBindings: function ButtonComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function ButtonComponent_click_HostBindingHandler($event) { return ctx.onClick($event.target); }, false, i0.ɵɵresolveDocument);
        } }, inputs: { buttonLabel: "buttonLabel", buttonText: "buttonText", buttonId: "buttonId", buttonClass: "buttonClass", buttonType: "buttonType", disabled: "disabled", fieldClass: "fieldClass", buttonIcon: "buttonIcon", customIcons: "customIcons", buttonEnriched: "buttonEnriched", showBtnMenu: "showBtnMenu", buttonSplit: "buttonSplit", navBottom: "navBottom", iconName: "iconName", title: "title", iconColour: "iconColour", buttonLarge: "buttonLarge", buttonSummary: "buttonSummary", showDescription: "showDescription", status: "status", level: "level", desc: "desc", showCount: "showCount", count: "count", countColor: "countColor", maxHeight: "maxHeight", showLabel: "showLabel", customIconsRound: "customIconsRound", customIconsRoundOutlined: "customIconsRoundOutlined", navLeftside: "navLeftside", buttonDayPicker: "buttonDayPicker" }, outputs: { buttonClick: "buttonClick" }, ngContentSelectors: _c5$d, decls: 5, vars: 5, consts: [[3, "class", "button-large", 4, "ngIf"], [3, "class", 4, "ngIf"], ["class", "button-day-picker box-shadow-light", 3, "type", "name", "id", "disabled", "click", 4, "ngIf"], [3, "ngClass", "for"], [3, "type", "name", "id", "disabled", "ngClass", "click"], ["class", "flex-center", 4, "ngIf"], [4, "ngIf"], [1, "flex-center"], ["class", "material-icons", 4, "ngIf"], [1, "text-align-left"], [1, "material-icons"], [1, "btn-enriched", "box-shadow-light", "gradient-v-grey", 3, "type", "name", "id", "disabled", "click"], [1, "flex-group", "flex-end", "btn-enriched-toolbar"], [1, "btn-enriched-content", "flex-group", "flex-start", "flex-align-center"], [1, "margin-0"], [3, "for"], [1, "button-split", 3, "ngClass"], [1, "flex-group", "flex-start", "flex-align-center", "flex-nowrap"], ["class", "chevron-up", 3, "class", "type", "name", "id", "click", 4, "ngIf"], [3, "type", "name", "id", "click"], ["class", "box-shadow", 3, "ngStyle", "click", 4, "ngIf"], [1, "chevron-up", 3, "type", "name", "id", "click"], [1, "box-shadow", 3, "ngStyle", "click"], [1, "flex-group", "flex-start", "flex-align-center"], [1, "priority", "bg-aa-white-100", "border-radius-50", "width-3", "height-3", "flex-center", "bd-solid"], ["class", "margin-top-1", 4, "ngIf"], [1, "margin-top-1"], [1, "button-day-picker", "box-shadow-light", 3, "type", "name", "id", "disabled", "click"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c4$f);
            i0.ɵɵtemplate(0, ButtonComponent_div_0_Template, 6, 22, "div", 0)(1, ButtonComponent_div_1_Template, 9, 12, "div", 1)(2, ButtonComponent_div_2_Template, 10, 18, "div", 1)(3, ButtonComponent_div_3_Template, 8, 9, "div", 1)(4, ButtonComponent_button_4_Template, 4, 5, "button", 2);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.buttonEnriched && !ctx.buttonSplit && !ctx.buttonSummary && !ctx.buttonDayPicker);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.buttonEnriched);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.buttonSplit);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.buttonSummary);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.buttonDayPicker);
        } }, dependencies: [i1.NgClass, i1.NgIf, i1.NgStyle], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ButtonComponent, [{
        type: Component,
        args: [{ selector: 'aa-button', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div \r\n  *ngIf=\"!buttonEnriched && !buttonSplit &&!buttonSummary &&!buttonDayPicker\" \r\n  class=\"field {{fieldClass}}\"\r\n  [class.button-large]=\"buttonLarge\"\r\n>\r\n  <label \r\n    [ngClass]=\"{ 'show-label': showLabel }\"\r\n    [for]=\"buttonId\">\r\n    {{buttonLabel}}\r\n  </label>\r\n  <button \r\n    [type]=\"buttonType\" \r\n    [name]=\"buttonId\" \r\n    [id]=\"buttonId\" \r\n    [class]=\"buttonClass\" \r\n    [disabled]=\"disabled\" \r\n    (click)=\"onButtonClick($event)\"\r\n    [ngClass]=\"{\r\n      'material-icons' : customIconsRound,\r\n      'material-icons-outlined' : customIconsRoundOutlined\r\n    }\"\r\n  >\r\n    <div *ngIf=\"!customIconsRound && !customIconsRoundOutlined\" class=\"flex-center\">\r\n      <span *ngIf=\"customIcons\" class=\"material-icons\">{{buttonIcon}}</span>\r\n      <span class=\"text-align-left\">{{buttonText}}</span>\r\n      <div *ngIf=\"showCount\" class=\"count {{countColor}}\">{{count}}</div>\r\n    </div>\r\n    <span *ngIf=\"customIconsRound || customIconsRoundOutlined\">{{buttonIcon}}</span>\r\n  </button>\r\n</div>\r\n\r\n<div *ngIf=\"buttonEnriched\" class=\"field {{fieldClass}}\">\r\n  <button \r\n    [type]=\"buttonType\" \r\n    [name]=\"buttonId\" \r\n    [id]=\"buttonId\" \r\n    [disabled]=\"disabled\" \r\n    (click)=\"onButtonClick($event)\"\r\n    class=\"btn-enriched box-shadow-light gradient-v-grey\"\r\n  >\r\n    <div class=\"flex-group flex-end btn-enriched-toolbar\">\r\n      <ng-content select=\"[toolbar]\"></ng-content>\r\n    </div>\r\n    <div class=\"btn-enriched-content flex-group flex-start flex-align-center\">\r\n      <div class=\"material-icons {{iconColour}}\">{{iconName}}</div>\r\n      <h2 class=\"margin-0\">{{title}}</h2>\r\n    </div>\r\n  </button>\r\n</div>\r\n\r\n<div *ngIf=\"buttonSplit\" class=\"field {{fieldClass}}\">\r\n  <label [for]=\"buttonId\">{{buttonLabel}}</label>\r\n  <div \r\n    class=\"button-split\" \r\n    [ngClass]=\"{'nav-left-side' : navLeftside, 'nav-bottom' : navBottom}\"\r\n  >\r\n    <div class=\"flex-group flex-start flex-align-center flex-nowrap\">\r\n      <button\r\n        *ngIf=\"navLeftside\"\r\n        class=\"chevron-up\"\r\n        [class]=\"buttonClass\"\r\n        (click)=\"showBtnMenu=!showBtnMenu\" \r\n        [type]=\"buttonType\" \r\n        [name]=\"buttonId\" \r\n        [id]=\"buttonId\"\r\n      >\r\n      </button>\r\n      <button\r\n        (click)=\"onButtonClick($event)\"\r\n        [class]=\"buttonClass\"\r\n        [type]=\"buttonType\" \r\n        [name]=\"buttonId\" \r\n        [id]=\"buttonId\"\r\n      >\r\n        {{buttonText}}\r\n      </button>\r\n      <button\r\n        *ngIf=\"!navLeftside\"\r\n        class=\"chevron-up\"\r\n        [class]=\"buttonClass\"\r\n        (click)=\"showBtnMenu=!showBtnMenu\" \r\n        [type]=\"buttonType\" \r\n        [name]=\"buttonId\" \r\n        [id]=\"buttonId\"\r\n      >\r\n      </button>\r\n    </div>\r\n    <nav \r\n      (click)=\"showBtnMenu=false\" \r\n      *ngIf=\"showBtnMenu\" \r\n      class=\"box-shadow\"\r\n      [ngStyle]=\"{'max-height' : maxHeight}\"\r\n    >\r\n      <ng-content select=\"[bs-buttons]\"></ng-content>\r\n    </nav>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"buttonSummary\" class=\"field {{fieldClass}} flex-stretch\">\r\n  <button\r\n    class=\"{{status}} button-summary border-radius-0-5 box-shadow-light bg-aa-white-100 padding-1-5 flex-column bd-aa-grey-5\"\r\n  >\r\n    <div class=\"flex-group flex-start flex-align-center\">\r\n      <h1 class=\"priority bg-aa-white-100 border-radius-50 width-3 height-3 flex-center bd-solid\">{{level}}</h1>\r\n      <h2 class=\"margin-0\">{{title}}</h2>\r\n    </div>\r\n    <p *ngIf=\"showDescription\" class=\"margin-top-1\">\r\n      {{desc}}\r\n    </p>\r\n  </button>\r\n</div>\r\n\r\n<button\r\n  *ngIf=\"buttonDayPicker\"\r\n  class=\"button-day-picker box-shadow-light\"\r\n  (click)=\"onButtonClick($event)\"\r\n  [type]=\"buttonType\" \r\n  [name]=\"buttonId\" \r\n  [id]=\"buttonId\" \r\n  [disabled]=\"disabled\" \r\n>\r\n  <strong>{{buttonText}}</strong>\r\n  <div></div>\r\n</button>\r\n\r\n" }]
    }], () => [{ type: i0.ElementRef }], { buttonLabel: [{
            type: Input
        }], buttonText: [{
            type: Input
        }], buttonId: [{
            type: Input
        }], buttonClass: [{
            type: Input
        }], buttonType: [{
            type: Input
        }], disabled: [{
            type: Input
        }], fieldClass: [{
            type: Input
        }], buttonIcon: [{
            type: Input
        }], customIcons: [{
            type: Input
        }], buttonEnriched: [{
            type: Input
        }], showBtnMenu: [{
            type: Input
        }], buttonSplit: [{
            type: Input
        }], navBottom: [{
            type: Input
        }], iconName: [{
            type: Input
        }], title: [{
            type: Input
        }], iconColour: [{
            type: Input
        }], buttonLarge: [{
            type: Input
        }], buttonSummary: [{
            type: Input
        }], showDescription: [{
            type: Input
        }], status: [{
            type: Input
        }], level: [{
            type: Input
        }], desc: [{
            type: Input
        }], showCount: [{
            type: Input
        }], count: [{
            type: Input
        }], countColor: [{
            type: Input
        }], maxHeight: [{
            type: Input
        }], showLabel: [{
            type: Input
        }], customIconsRound: [{
            type: Input
        }], customIconsRoundOutlined: [{
            type: Input
        }], navLeftside: [{
            type: Input
        }], buttonDayPicker: [{
            type: Input
        }], buttonClick: [{
            type: Output
        }], onClick: [{
            type: HostListener,
            args: ['document:click', ['$event.target']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ButtonComponent, { className: "ButtonComponent", filePath: "lib\\elements\\button\\button.component.ts", lineNumber: 8 }); })();

class CheckboxComponent {
    constructor() {
        this.checkboxId = '';
        this.checkboxName = '';
        this.checkboxValue = '';
        this.checkboxText = '';
        this.checkboxChecked = '';
        this.fieldClass = '';
        this.disabled = '';
    }
    static { this.ɵfac = function CheckboxComponent_Factory(t) { return new (t || CheckboxComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CheckboxComponent, selectors: [["aa-checkbox"]], inputs: { checkboxId: "checkboxId", checkboxName: "checkboxName", checkboxValue: "checkboxValue", checkboxText: "checkboxText", checkboxChecked: "checkboxChecked", fieldClass: "fieldClass", disabled: "disabled" }, decls: 5, vars: 10, consts: [[3, "for"], ["type", "checkbox", 3, "value", "name", "id", "checked", "disabled"]], template: function CheckboxComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div")(1, "label", 0);
            i0.ɵɵelement(2, "input", 1);
            i0.ɵɵelementStart(3, "span");
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵclassMapInterpolate1("field checkbox ", ctx.fieldClass, "");
            i0.ɵɵadvance();
            i0.ɵɵpropertyInterpolate("for", ctx.checkboxId);
            i0.ɵɵadvance();
            i0.ɵɵpropertyInterpolate("value", ctx.checkboxValue);
            i0.ɵɵpropertyInterpolate("name", ctx.checkboxName);
            i0.ɵɵpropertyInterpolate("id", ctx.checkboxId);
            i0.ɵɵpropertyInterpolate("checked", ctx.checkboxChecked);
            i0.ɵɵpropertyInterpolate("disabled", ctx.disabled);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.checkboxText);
        } }, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CheckboxComponent, [{
        type: Component,
        args: [{ selector: 'aa-checkbox', changeDetection: ChangeDetectionStrategy.OnPush, template: "\r\n  <div class=\"field checkbox {{fieldClass}}\">\r\n      <label for=\"{{checkboxId}}\">\r\n          <input \r\n            type=\"checkbox\" \r\n            value={{checkboxValue}} \r\n            name={{checkboxName}} \r\n            id={{checkboxId}} \r\n            checked={{checkboxChecked}}\r\n            disabled=\"{{disabled}}\"\r\n          >\r\n          <span>{{checkboxText}}</span>\r\n      </label>\r\n  </div>" }]
    }], () => [], { checkboxId: [{
            type: Input
        }], checkboxName: [{
            type: Input
        }], checkboxValue: [{
            type: Input
        }], checkboxText: [{
            type: Input
        }], checkboxChecked: [{
            type: Input
        }], fieldClass: [{
            type: Input
        }], disabled: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CheckboxComponent, { className: "CheckboxComponent", filePath: "lib\\elements\\checkbox\\checkbox.component.ts", lineNumber: 9 }); })();

class DateFormatPipe {
    transform(value) {
        const datePipe = new DatePipe('en-US');
        value = datePipe.transform(value, 'd MMMM y');
        return value;
    }
    static { this.ɵfac = function DateFormatPipe_Factory(t) { return new (t || DateFormatPipe)(); }; }
    static { this.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "DateFormatPipe", type: DateFormatPipe, pure: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DateFormatPipe, [{
        type: Pipe,
        args: [{
                name: 'DateFormatPipe',
            }]
    }], null, null); })();

function CommentsComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Click to add a comment");
    i0.ɵɵelementEnd();
} }
function CommentsComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("There is (", ctx_r1.comments.length, ") comment");
} }
function CommentsComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("There are (", ctx_r2.comments.length, ") comments");
} }
function CommentsComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 7);
    i0.ɵɵtext(1, "There are currently no comments ");
    i0.ɵɵelementEnd();
} }
function CommentsComponent_div_10_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵtext(1, "You need to add a comment ");
    i0.ɵɵelementEnd();
} }
function CommentsComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8)(1, "label");
    i0.ɵɵtext(2, "Comment");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "textarea", 9);
    i0.ɵɵlistener("ngModelChange", function CommentsComponent_div_10_Template_textarea_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r7.txtComment = $event); })("change", function CommentsComponent_div_10_Template_textarea_change_3_listener() { i0.ɵɵrestoreView(_r8); const ctx_r9 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r9.clicked = false); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 10)(5, "button", 11);
    i0.ɵɵlistener("click", function CommentsComponent_div_10_Template_button_click_5_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r10 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r10.addComment($event, ctx_r10.cmt)); });
    i0.ɵɵtext(6, "Add comment");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 12);
    i0.ɵɵlistener("click", function CommentsComponent_div_10_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r8); const ctx_r11 = i0.ɵɵnextContext(); ctx_r11.makeComments = false; return i0.ɵɵresetView(ctx_r11.toggleComments = false); });
    i0.ɵɵtext(8, "Close ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div");
    i0.ɵɵtemplate(10, CommentsComponent_div_10_div_10_Template, 2, 0, "div", 13);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", ctx_r4.txtComment);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", ctx_r4.clicked && !ctx_r4.txtComment);
} }
function CommentsComponent_div_11_h3_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h3");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("Comments (", ctx_r12.comments.length, ")");
} }
function CommentsComponent_div_11_div_2_th_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 24)(1, "div")(2, "span");
    i0.ɵɵtext(3, "\u00A0");
    i0.ɵɵelementEnd()()();
} }
function CommentsComponent_div_11_div_2_tr_19_td_9_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td")(1, "button", 26);
    i0.ɵɵlistener("click", function CommentsComponent_div_11_div_2_tr_19_td_9_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r21); const i_r17 = i0.ɵɵnextContext().index; const ctx_r19 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r19.removeComment(i_r17)); });
    i0.ɵɵtext(2, "delete_forever");
    i0.ɵɵelementEnd()();
} }
function CommentsComponent_div_11_div_2_tr_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 25);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td", 25);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td", 25);
    i0.ɵɵpipe(6, "DateFormatPipe");
    i0.ɵɵtext(7);
    i0.ɵɵpipe(8, "DateFormatPipe");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, CommentsComponent_div_11_div_2_tr_19_td_9_Template, 3, 0, "td", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const cmt_r16 = ctx.$implicit;
    const ctx_r15 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("title", cmt_r16.comment);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(cmt_r16.comment);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("title", ctx_r15.person);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r15.person);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("title", i0.ɵɵpipeBind1(6, 7, ctx_r15.currentDate));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(8, 9, ctx_r15.currentDate));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r15.canDelete);
} }
const _c0$M = () => ({ "max-height": "8rem" });
function CommentsComponent_div_11_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16)(1, "div", 17)(2, "table", 18)(3, "thead")(4, "tr")(5, "th", 19)(6, "div")(7, "span");
    i0.ɵɵtext(8, "Comment");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "th", 20)(10, "div")(11, "span");
    i0.ɵɵtext(12, "Added by");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(13, "th", 21)(14, "div")(15, "span");
    i0.ɵɵtext(16, "Date added");
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(17, CommentsComponent_div_11_div_2_th_17_Template, 4, 0, "th", 22);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "tbody");
    i0.ɵɵtemplate(19, CommentsComponent_div_11_div_2_tr_19_Template, 10, 11, "tr", 23);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction0(3, _c0$M));
    i0.ɵɵadvance(16);
    i0.ɵɵproperty("ngIf", ctx_r13.canDelete);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r13.comments);
} }
function CommentsComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtemplate(1, CommentsComponent_div_11_h3_1_Template, 2, 1, "h3", 3)(2, CommentsComponent_div_11_div_2_Template, 20, 4, "div", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r5.makeComments);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r5.toggleComments);
} }
const noop = () => {
};
const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CommentsComponent),
    multi: true
};
class CommentsComponent {
    constructor() {
        this.comments = [];
        this.commentsMade = new EventEmitter();
        this.toggleComments = false;
        this.clicked = false;
        this.person = '';
        this.makeComments = false;
        this.canDelete = false;
        this.showConfirmation = false;
        this.buttonClass = '';
        // Placeholders for the callbacks which are later provided
        // by the Control Value Accessor
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        this.currentDate = new Date().getTime();
    }
    // get accessor
    get txtComment() {
        return this.innerValue;
    }
    // set accessor including call the onchange callback
    set txtComment(v) {
        if (v !== this.innerValue) {
            this.innerValue = v;
            this.onChangeCallback(v);
        }
    }
    // Set touched on blur
    onBlur() {
        this.onTouchedCallback();
    }
    // From ControlValueAccessor interface
    writeValue(txtComment) {
        if (txtComment !== this.innerValue) {
            this.innerValue = txtComment;
        }
    }
    // From ControlValueAccessor interface
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    // From ControlValueAccessor interface
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    addComment(_EVENT, _COMMENTARRAY) {
        if (this.txtComment) {
            const comments = {
                comment: this.txtComment
            };
            this.comments.push(comments);
            this.commentsMade.emit(this.txtComment);
            console.log('comment is ', this.txtComment);
            console.log('this comment ', this.comments);
            this.txtComment = '';
        }
        else {
            this.clicked = true;
        }
    }
    removeComment(index) {
        this.comments.splice(index, 1);
    }
    static { this.ɵfac = function CommentsComponent_Factory(t) { return new (t || CommentsComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CommentsComponent, selectors: [["aa-comments"]], inputs: { comments: "comments", person: "person", canDelete: "canDelete", iconColour: "iconColour", buttonClass: "buttonClass" }, outputs: { commentsMade: "commentsMade" }, features: [i0.ɵɵProvidersFeature([CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR])], decls: 12, vars: 14, consts: [[1, "aa-comments"], [3, "click"], [1, "flex-center"], [4, "ngIf"], [1, "comments-panel", "margin-top-0-75", "box-shadow", "border-radius-0-25", "bg-aa-white-100", "padding-1"], ["class", "margin-top-0 italic aa-blue-100", 4, "ngIf"], ["class", "field boxed", 4, "ngIf"], [1, "margin-top-0", "italic", "aa-blue-100"], [1, "field", "boxed"], ["placeholder", "Your Comment", 3, "ngModel", "ngModelChange", "change"], [1, "flex-group", "flex-start"], [1, "secondary", "margin-top-1", 3, "click"], [1, "cancel", "margin-top-1", 3, "click"], ["role", "alert", "class", "error margin-top-1", 4, "ngIf"], ["role", "alert", 1, "error", "margin-top-1"], ["class", "scroll-panel", 4, "ngIf"], [1, "scroll-panel"], [1, "scroll-panel-content", 3, "ngStyle"], [1, "table-comments"], ["width", "62%"], ["width", "20%"], ["width", "16%"], ["width", "2", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["width", "2"], [3, "title"], [1, "material-icons", "aa-red-100", "transparent", 3, "click"]], template: function CommentsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "button", 1);
            i0.ɵɵlistener("click", function CommentsComponent_Template_button_click_1_listener() { ctx.makeComments = !ctx.makeComments; ctx.toggleComments = false; return ctx.clicked = false; });
            i0.ɵɵelementStart(2, "div", 2)(3, "span");
            i0.ɵɵtext(4, "chat");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(5, CommentsComponent_span_5_Template, 2, 0, "span", 3)(6, CommentsComponent_span_6_Template, 2, 1, "span", 3)(7, CommentsComponent_span_7_Template, 2, 1, "span", 3);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(8, "div", 4);
            i0.ɵɵtemplate(9, CommentsComponent_p_9_Template, 2, 0, "p", 5)(10, CommentsComponent_div_10_Template, 11, 2, "div", 6)(11, CommentsComponent_div_11_Template, 3, 2, "div", 6);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵclassMapInterpolate1("custom-icons cursor-pointer ", ctx.buttonClass, "");
            i0.ɵɵadvance(2);
            i0.ɵɵclassMapInterpolate1("material-icons ", ctx.iconColour, "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.comments.length === 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.comments.length === 1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.comments.length > 1);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("show-comments", ctx.makeComments);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.comments.length && !ctx.makeComments);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.makeComments);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.comments.length);
        } }, dependencies: [i1.NgForOf, i1.NgIf, i1.NgStyle, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel, DateFormatPipe] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CommentsComponent, [{
        type: Component,
        args: [{ selector: 'aa-comments', providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR], template: "<div class=\"aa-comments\">\r\n  <button \r\n    class=\"custom-icons cursor-pointer {{buttonClass}}\"\r\n    (click)=\"makeComments = ! makeComments; toggleComments=false; clicked=false\"\r\n  >\r\n    <div class=\"flex-center\">\r\n      <span class=\"material-icons {{iconColour}}\">chat</span>\r\n      <span *ngIf=\"comments.length===0\">Click to add a comment</span>\r\n      <span *ngIf=\"comments.length===1\">There is ({{comments.length}}) comment</span>\r\n      <span *ngIf=\"comments.length>1\">There are ({{comments.length}}) comments</span>\r\n    </div>\r\n  </button>\r\n  <div\r\n    class=\"\r\n    comments-panel\r\n    margin-top-0-75\r\n    box-shadow\r\n    border-radius-0-25\r\n    bg-aa-white-100\r\n    padding-1\"\r\n    [class.show-comments]=\"makeComments\"\r\n  >\r\n    <p\r\n      class=\"margin-top-0 italic aa-blue-100\"\r\n      *ngIf=\"!comments.length && !makeComments\"\r\n    >There are currently no comments\r\n    </p>\r\n    <div *ngIf=\"makeComments\" class=\"field boxed\">\r\n      <label>Comment</label>\r\n      <textarea [(ngModel)]=\"txtComment\" placeholder=\"Your Comment\" (change)=\"clicked=false\"></textarea>\r\n      <div class=\"flex-group flex-start\">\r\n        <button class=\"secondary margin-top-1\" (click)=\"addComment($event, cmt)\">Add comment</button>\r\n        <button\r\n          class=\"cancel margin-top-1\"\r\n          (click)=\"makeComments=false; toggleComments=false\"\r\n          >Close\r\n        </button>\r\n        <div>\r\n          <div\r\n            *ngIf=\"clicked && !txtComment\"\r\n            role=\"alert\"\r\n            class=\"error margin-top-1\"\r\n            >You need to add a comment\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"field boxed\" *ngIf=\"comments.length\">\r\n      <h3 *ngIf=\"makeComments\">Comments ({{comments.length}})</h3>\r\n      <div *ngIf=\"!toggleComments\" class=\"scroll-panel\">\r\n          <div class=\"scroll-panel-content\" [ngStyle]=\"{'max-height':'8rem'}\">\r\n            <table class=\"table-comments\">\r\n              <thead>\r\n                <tr>\r\n                  <th width=\"62%\"><div><span>Comment</span></div></th>\r\n                  <th width=\"20%\"><div><span>Added by</span></div></th>\r\n                  <th width=\"16%\"><div><span>Date added</span></div></th>\r\n                  <th width=\"2\" *ngIf=\"canDelete\"><div><span>&nbsp;</span></div></th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                  <tr *ngFor=\"let cmt of comments; let i = index\">\r\n                      <td title=\"{{ cmt.comment }}\">{{ cmt.comment }}</td>\r\n                      <td title=\"{{ person }}\">{{ person }}</td>\r\n                      <td title=\"{{ currentDate | DateFormatPipe }}\">{{ currentDate | DateFormatPipe }}</td>\r\n                      <td *ngIf=\"canDelete\">\r\n                        <button\r\n                          class=\"material-icons aa-red-100 transparent\"\r\n                          (click)=\"removeComment(i)\"\r\n                          >delete_forever</button>\r\n                      </td>\r\n                  </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n" }]
    }], () => [], { comments: [{
            type: Input
        }], commentsMade: [{
            type: Output
        }], person: [{
            type: Input
        }], canDelete: [{
            type: Input
        }], iconColour: [{
            type: Input
        }], buttonClass: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CommentsComponent, { className: "CommentsComponent", filePath: "lib\\elements\\comments\\comments.component.ts", lineNumber: 23 }); })();

function CustomSelectComponent_div_7_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵclassMapInterpolate1("\n          material-icons\n          padding-right-0-5\n          ", option_r1.iconColor, "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(option_r1.icon);
} }
function CustomSelectComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "button", 4);
    i0.ɵɵlistener("click", function CustomSelectComponent_div_7_Template_button_click_1_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r6); const option_r1 = restoredCtx.$implicit; const i_r2 = restoredCtx.index; const ctx_r5 = i0.ɵɵnextContext(); ctx_r5.optionIsSelected($event, option_r1); return i0.ɵɵresetView(ctx_r5.setIndex(i_r2)); });
    i0.ɵɵtemplate(2, CustomSelectComponent_div_7_span_2_Template, 2, 4, "span", 5);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassProp("selected", ctx_r0.sIndex === i_r2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", option_r1.showIcon);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", option_r1.display, " ");
} }
const _c0$L = a0 => ({ "width": a0 });
const _c1$B = a0 => ({ "max-height": a0 });
class CustomSelectComponent {
    set selectedIndex(value) {
        if (value) {
            this.selectedOption = this.options[value];
            this.sIndex = value;
        }
    }
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.options = [];
        this.showDropdown = false;
        this.showIcon = false;
        this.closeDropdown = new EventEmitter();
        this.optionSelected = new EventEmitter();
        this.highlightSection = new EventEmitter();
        this.sIndex = 0;
    }
    onClick(targetElement) {
        const clickedInside = this.elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.closeDropdown.emit(this.showDropdown = false);
        }
    }
    optionIsSelected(event, selectOption) {
        this.showDropdown = false;
        this.optionSelected.emit(selectOption);
        this.selectedOption = selectOption;
    }
    setIndex(index) {
        if (index !== this.sIndex) {
            this.sIndex = index;
            this.highlightSection.emit(this.options[this.sIndex]);
        }
        else {
            this.sIndex = index;
            this.highlightSection.emit(undefined);
        }
    }
    ngOnInit() {
        this.closeDropdown.emit(this.showDropdown);
        this.highlightSection.emit(this.selectedOption);
        if (this.sIndex > -1) {
            this.optionIsSelected(null, this.options[this.sIndex]);
        }
        //console.log(this.selectedOption);
    }
    static { this.ɵfac = function CustomSelectComponent_Factory(t) { return new (t || CustomSelectComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CustomSelectComponent, selectors: [["aa-custom-select"]], hostBindings: function CustomSelectComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function CustomSelectComponent_click_HostBindingHandler($event) { return ctx.onClick($event.target); }, false, i0.ɵɵresolveDocument);
        } }, inputs: { options: "options", setWidth: "setWidth", maxHeight: "maxHeight", selectedIndex: "selectedIndex" }, outputs: { closeDropdown: "closeDropdown", optionSelected: "optionSelected", highlightSection: "highlightSection" }, decls: 8, vars: 14, consts: [[1, "aa-custom-select", 3, "ngStyle"], [1, "border-radius-0-25", "flex-align-center", 3, "click"], [1, "aa-custom-select-dropdown", "box-shadow", 3, "ngStyle"], [4, "ngFor", "ngForOf"], [1, "flex-align-center", 3, "click"], [3, "class", 4, "ngIf"]], template: function CustomSelectComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "button", 1);
            i0.ɵɵlistener("click", function CustomSelectComponent_Template_button_click_1_listener() { return ctx.showDropdown = !ctx.showDropdown; });
            i0.ɵɵelementStart(2, "span");
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "span");
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "div", 2);
            i0.ɵɵtemplate(7, CustomSelectComponent_div_7_Template, 4, 4, "div", 3);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(10, _c0$L, ctx.setWidth));
            i0.ɵɵadvance(2);
            i0.ɵɵclassMapInterpolate1("\n      material-icons\n      padding-right-0-5\n      ", ctx.selectedOption == null ? null : ctx.selectedOption.iconColor, "");
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1("", ctx.selectedOption == null ? null : ctx.selectedOption.icon, " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.selectedOption == null ? null : ctx.selectedOption.display);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("show-dropdown", ctx.showDropdown);
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(12, _c1$B, ctx.maxHeight));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.options);
        } }, dependencies: [i1.NgForOf, i1.NgIf, i1.NgStyle] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CustomSelectComponent, [{
        type: Component,
        args: [{ selector: 'aa-custom-select', template: "<div\r\n  class=\"aa-custom-select\"\r\n  [ngStyle]=\"{'width' : setWidth}\"\r\n>\r\n  <button\r\n    class=\"\r\n    border-radius-0-25\r\n    flex-align-center\"\r\n    (click)=\"showDropdown=!showDropdown\"\r\n  >\r\n    <span\r\n      class=\"\r\n      material-icons\r\n      padding-right-0-5\r\n      {{ selectedOption?.iconColor }}\"\r\n    >{{ selectedOption?.icon }}\r\n    </span>\r\n\r\n    <span>{{ selectedOption?.display }}</span>\r\n\r\n  </button>\r\n\r\n  <!-- dropdown -->\r\n  <div\r\n    [class.show-dropdown]=\"showDropdown\"\r\n    class=\"aa-custom-select-dropdown box-shadow\"\r\n    [ngStyle]=\"{'max-height' : maxHeight}\"\r\n  >\r\n    <div *ngFor=\" let option of options; let i = index\">\r\n      <button\r\n        (click)=\"optionIsSelected($event, option); setIndex(i)\"\r\n        class=\"flex-align-center\"\r\n        [class.selected]=\"sIndex === i\"\r\n      >\r\n        <span\r\n          *ngIf=\"option.showIcon\"\r\n          class=\"\r\n          material-icons\r\n          padding-right-0-5\r\n          {{option.iconColor}}\"\r\n        >{{ option.icon }}</span>\r\n          {{ option.display }}\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n" }]
    }], () => [{ type: i0.ElementRef }], { options: [{
            type: Input
        }], setWidth: [{
            type: Input
        }], maxHeight: [{
            type: Input
        }], closeDropdown: [{
            type: Output
        }], optionSelected: [{
            type: Output
        }], highlightSection: [{
            type: Output
        }], selectedIndex: [{
            type: Input
        }], onClick: [{
            type: HostListener,
            args: ['document:click', ['$event.target']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CustomSelectComponent, { className: "CustomSelectComponent", filePath: "lib\\elements\\custom-select\\custom-select.component.ts", lineNumber: 17 }); })();

class FieldComponent {
    constructor() {
        this.fieldId = '';
        this.fieldLabel = '';
        this.fieldClass = '';
        this.buttonClass = '';
        this.readOnly = false;
    }
    static { this.ɵfac = function FieldComponent_Factory(t) { return new (t || FieldComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FieldComponent, selectors: [["aa-field"]], inputs: { fieldId: "fieldId", fieldLabel: "fieldLabel", fieldClass: "fieldClass", inputValue: "inputValue", buttonClass: "buttonClass", readOnly: "readOnly" }, decls: 4, vars: 9, consts: [[3, "for"], ["type", "text", 3, "name", "id", "readonly", "value"]], template: function FieldComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div")(1, "label", 0);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(3, "input", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassMapInterpolate1("field ", ctx.fieldClass, "");
            i0.ɵɵadvance();
            i0.ɵɵpropertyInterpolate("for", ctx.fieldId);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.fieldLabel);
            i0.ɵɵadvance();
            i0.ɵɵpropertyInterpolate("name", ctx.fieldId);
            i0.ɵɵpropertyInterpolate("id", ctx.fieldId);
            i0.ɵɵpropertyInterpolate("readonly", ctx.readOnly);
            i0.ɵɵpropertyInterpolate("value", ctx.inputValue);
        } }, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FieldComponent, [{
        type: Component,
        args: [{ selector: 'aa-field', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"field {{fieldClass}}\">\r\n  <label for=\"{{fieldId}}\">{{fieldLabel}}</label>\r\n  <input \r\n    type=\"text\" \r\n    name=\"{{fieldId}}\" \r\n    id=\"{{fieldId}}\" \r\n    readonly=\"{{readOnly}}\" \r\n    value=\"{{inputValue}}\" \r\n  >\r\n</div>" }]
    }], () => [], { fieldId: [{
            type: Input
        }], fieldLabel: [{
            type: Input
        }], fieldClass: [{
            type: Input
        }], inputValue: [{
            type: Input
        }], buttonClass: [{
            type: Input
        }], readOnly: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FieldComponent, { className: "FieldComponent", filePath: "lib\\elements\\field\\field.component.ts", lineNumber: 9 }); })();

function InputTextComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 3);
    i0.ɵɵtext(1, "Optional");
    i0.ɵɵelementEnd();
} }
class InputTextComponent {
    constructor() {
        this.isOptional = false;
        this.readOnly = false;
        this.inputTextLabel = '';
        this.inputTextId = '';
        this.inputPlaceholder = '';
        this.fieldClass = '';
    }
    static { this.ɵfac = function InputTextComponent_Factory(t) { return new (t || InputTextComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputTextComponent, selectors: [["aa-input-text"]], inputs: { isOptional: "isOptional", readOnly: "readOnly", inputTextLabel: "inputTextLabel", inputTextId: "inputTextId", inputPlaceholder: "inputPlaceholder", fieldClass: "fieldClass", inputValue: "inputValue" }, decls: 5, vars: 11, consts: [[3, "for"], ["class", "optional", 4, "ngIf"], ["type", "text", 3, "name", "id", "placeholder", "readonly", "value"], [1, "optional"]], template: function InputTextComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div")(1, "label", 0);
            i0.ɵɵtext(2);
            i0.ɵɵtemplate(3, InputTextComponent_span_3_Template, 2, 0, "span", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(4, "input", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassMapInterpolate1("field ", ctx.fieldClass, "");
            i0.ɵɵadvance();
            i0.ɵɵpropertyInterpolate("for", ctx.inputTextId);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.inputTextLabel, " ");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.isOptional);
            i0.ɵɵadvance();
            i0.ɵɵpropertyInterpolate("name", ctx.inputTextId);
            i0.ɵɵpropertyInterpolate("id", ctx.inputTextId);
            i0.ɵɵpropertyInterpolate("placeholder", ctx.inputPlaceholder);
            i0.ɵɵpropertyInterpolate("readonly", ctx.readOnly);
            i0.ɵɵpropertyInterpolate("value", ctx.inputValue);
        } }, dependencies: [i1.NgIf], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputTextComponent, [{
        type: Component,
        args: [{ selector: 'aa-input-text', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"field {{fieldClass}}\">\r\n  <label for=\"{{inputTextId}}\">\r\n    {{inputTextLabel}}\r\n    <span class=\"optional\" *ngIf=\"isOptional\">Optional</span>\r\n  </label>\r\n  <input \r\n    type=\"text\" \r\n    name=\"{{inputTextId}}\" \r\n    id=\"{{inputTextId}}\" \r\n    placeholder=\"{{inputPlaceholder}}\" \r\n    readonly=\"{{readOnly}}\"\r\n    value=\"{{inputValue}}\"\r\n    >\r\n</div>" }]
    }], () => [], { isOptional: [{
            type: Input
        }], readOnly: [{
            type: Input
        }], inputTextLabel: [{
            type: Input
        }], inputTextId: [{
            type: Input
        }], inputPlaceholder: [{
            type: Input
        }], fieldClass: [{
            type: Input
        }], inputValue: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InputTextComponent, { className: "InputTextComponent", filePath: "lib\\elements\\input-text\\input-text.component.ts", lineNumber: 9 }); })();

function FileUploadComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7)(1, "div");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.fileUploadText);
} }
function FileUploadComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div", 1)(2, "div");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("custom-file-upload-graphic ", ctx_r1.bgColor, "");
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("material-icons margin-right-0-25 ", ctx_r1.textColor, "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.iconName);
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r1.textColor);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.fileUploadText);
} }
const _c0$K = a0 => ({ "ellipsis": a0 });
const _c1$A = a0 => ({ "max-width": a0 });
function FileUploadComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("title", ctx_r2.fileUploadName);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c0$K, ctx_r2.truncateFileName))("ngStyle", i0.ɵɵpureFunction1(6, _c1$A, ctx_r2.truncateWidth));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.fileUploadName, " ");
} }
class FileUploadComponent {
    constructor() {
        this.fileUploadLabel = '';
        this.fileUploadId = '';
        this.fileUploadValue = '';
        this.fileUploadName = '';
        this.fileUploadExtentions = '';
        this.fileUploadText = '';
        this.fieldClass = '';
        this.truncateFileName = false;
        this.customButton = false;
        this.iconName = '';
        this.textColor = '';
    }
    static { this.ɵfac = function FileUploadComponent_Factory(t) { return new (t || FileUploadComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FileUploadComponent, selectors: [["aa-file-upload"]], inputs: { fileUploadLabel: "fileUploadLabel", fileUploadId: "fileUploadId", fileUploadValue: "fileUploadValue", fileUploadName: "fileUploadName", fileUploadExtentions: "fileUploadExtentions", fileUploadText: "fileUploadText", fieldClass: "fieldClass", truncateFileName: "truncateFileName", truncateWidth: "truncateWidth", customButton: "customButton", iconName: "iconName", textColor: "textColor", bgColor: "bgColor" }, decls: 9, vars: 12, consts: [[3, "for"], [1, "flex-group", "flex-start", "flex-align-center"], [1, "file-upload"], ["name", "file-upload", "type", "file", 3, "id", "accept", "value", "title"], ["class", "file-upload-graphic", 4, "ngIf"], [3, "class", 4, "ngIf"], ["class", "file-upload-name italic", 3, "title", "ngClass", "ngStyle", 4, "ngIf"], [1, "file-upload-graphic"], [1, "file-upload-name", "italic", 3, "title", "ngClass", "ngStyle"]], template: function FileUploadComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div")(1, "label", 0);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 1)(4, "div", 2);
            i0.ɵɵelement(5, "input", 3);
            i0.ɵɵtemplate(6, FileUploadComponent_div_6_Template, 3, 1, "div", 4)(7, FileUploadComponent_div_7_Template, 6, 11, "div", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(8, FileUploadComponent_div_8_Template, 2, 8, "div", 6);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵclassMapInterpolate1("field ", ctx.fieldClass, "");
            i0.ɵɵadvance();
            i0.ɵɵpropertyInterpolate("for", ctx.fileUploadId);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.fileUploadLabel);
            i0.ɵɵadvance(3);
            i0.ɵɵpropertyInterpolate("id", ctx.fileUploadId);
            i0.ɵɵpropertyInterpolate("accept", ctx.fileUploadExtentions);
            i0.ɵɵpropertyInterpolate("value", ctx.fileUploadValue);
            i0.ɵɵpropertyInterpolate("title", ctx.fileUploadName);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.customButton);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.customButton);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.fileUploadName);
        } }, dependencies: [i1.NgClass, i1.NgIf, i1.NgStyle], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FileUploadComponent, [{
        type: Component,
        args: [{ selector: 'aa-file-upload', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"field {{fieldClass}}\">\r\n  <label for=\"{{fileUploadId}}\">{{fileUploadLabel}}</label>\r\n  <div class=\"flex-group flex-start flex-align-center\">\r\n    <div class=\"file-upload\">\r\n      <input \r\n        name=\"file-upload\" \r\n        type=\"file\" \r\n        id=\"{{fileUploadId}}\" \r\n        accept=\"{{fileUploadExtentions}}\" \r\n        value=\"{{fileUploadValue}}\"\r\n        title=\"{{fileUploadName}}\"\r\n      >\r\n      <div \r\n        *ngIf=\"!customButton\" \r\n        class=\"file-upload-graphic\"\r\n      >\r\n        <div>{{fileUploadText}}</div>\r\n      </div>\r\n      <div \r\n        *ngIf=\"customButton\" \r\n        class=\"custom-file-upload-graphic {{bgColor}}\"\r\n      >\r\n        <div class=\"flex-group flex-start flex-align-center\">\r\n          <div class=\"material-icons margin-right-0-25 {{textColor}}\">{{iconName}}</div>\r\n          <div class=\"{{textColor}}\">{{fileUploadText}}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div \r\n      *ngIf=\"fileUploadName\" \r\n      title=\"{{ fileUploadName }}\"\r\n      class=\"file-upload-name italic\"\r\n      [ngClass]=\"{'ellipsis' : truncateFileName}\"\r\n      [ngStyle]=\"{'max-width' : truncateWidth}\"\r\n      >\r\n      {{ fileUploadName }}\r\n    </div>\r\n  </div>\r\n</div>\r\n" }]
    }], () => [], { fileUploadLabel: [{
            type: Input
        }], fileUploadId: [{
            type: Input
        }], fileUploadValue: [{
            type: Input
        }], fileUploadName: [{
            type: Input
        }], fileUploadExtentions: [{
            type: Input
        }], fileUploadText: [{
            type: Input
        }], fieldClass: [{
            type: Input
        }], truncateFileName: [{
            type: Input
        }], truncateWidth: [{
            type: Input
        }], customButton: [{
            type: Input
        }], iconName: [{
            type: Input
        }], textColor: [{
            type: Input
        }], bgColor: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FileUploadComponent, { className: "FileUploadComponent", filePath: "lib\\elements\\file-upload\\file-upload.component.ts", lineNumber: 9 }); })();

const _c0$J = (a0, a1) => ({ "slider-inline flex-group flex-start flex-align-center nowrap": a0, "list-display": a1 });
const _c1$z = a0 => ({ "min-width": a0 });
class SliderComponent {
    set sliderChecked(value) {
        this.sliderCheckedValue = value;
    }
    constructor() {
        this.fieldClass = '';
        this.sliderInline = false;
        this.sliderCheckedChanged = new EventEmitter();
    }
    onChange(event) {
        if (event.target.checked) {
            this.sliderCheckedChanged.emit(true);
            this.sliderCheckedValue = true;
        }
        else {
            this.sliderCheckedChanged.emit(false);
            this.sliderCheckedValue = false;
        }
    }
    static { this.ɵfac = function SliderComponent_Factory(t) { return new (t || SliderComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SliderComponent, selectors: [["aa-slider"]], inputs: { fieldClass: "fieldClass", labelText: "labelText", sliderInline: "sliderInline", sliderId: "sliderId", sliderName: "sliderName", disabled: "disabled", labelMinWidth: "labelMinWidth", sliderChecked: "sliderChecked" }, outputs: { sliderCheckedChanged: "sliderCheckedChanged" }, decls: 6, vars: 15, consts: [[3, "ngClass"], [3, "ngStyle"], ["type", "checkbox", 3, "name", "id", "checked", "disabled", "change"], [1, "slider-btn"]], template: function SliderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "label", 1);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "label")(4, "input", 2);
            i0.ɵɵlistener("change", function SliderComponent_Template_input_change_4_listener($event) { return ctx.onChange($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelement(5, "span", 3);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵclassMapInterpolate1("", ctx.fieldClass, " field slider");
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(10, _c0$J, ctx.sliderInline, ctx.labelMinWidth));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(13, _c1$z, ctx.labelMinWidth));
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.labelText);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("name", ctx.sliderName)("id", ctx.sliderId)("checked", ctx.sliderCheckedValue)("disabled", ctx.disabled);
        } }, dependencies: [i1.NgClass, i1.NgStyle], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SliderComponent, [{
        type: Component,
        args: [{ selector: 'aa-slider', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div \r\n    class=\"{{fieldClass}} field slider\"\r\n    [ngClass]=\"{\r\n        'slider-inline flex-group flex-start flex-align-center nowrap' : sliderInline,\r\n        'list-display' : labelMinWidth\r\n    }\"\r\n>\r\n    <label [ngStyle]=\"{ 'min-width': labelMinWidth }\">{{labelText}}</label>\r\n    <label>\r\n        <input \r\n            type=\"checkbox\"\r\n            [name]=\"sliderName\"\r\n            [id]=\"sliderId\"\r\n            [checked]=\"sliderCheckedValue\"\r\n            [disabled]=\"disabled\"\r\n            (change)=\"onChange($event)\"\r\n         />\r\n        <span class=\"slider-btn\"></span>\r\n    </label>\r\n</div>" }]
    }], () => [], { fieldClass: [{
            type: Input
        }], labelText: [{
            type: Input
        }], sliderInline: [{
            type: Input
        }], sliderId: [{
            type: Input
        }], sliderName: [{
            type: Input
        }], disabled: [{
            type: Input
        }], labelMinWidth: [{
            type: Input
        }], sliderChecked: [{
            type: Input
        }], sliderCheckedChanged: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SliderComponent, { className: "SliderComponent", filePath: "lib\\elements\\slider\\slider.component.ts", lineNumber: 9 }); })();

class ElementsModule {
    static { this.ɵfac = function ElementsModule_Factory(t) { return new (t || ElementsModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ElementsModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            FormsModule,
            ReactiveFormsModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ElementsModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    ButtonComponent,
                    CheckboxComponent,
                    CommentsComponent,
                    CustomSelectComponent,
                    DateFormatPipe,
                    FieldComponent,
                    InputTextComponent,
                    FileUploadComponent,
                    SliderComponent
                ],
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule
                ],
                exports: [
                    ButtonComponent,
                    CheckboxComponent,
                    CommentsComponent,
                    CustomSelectComponent,
                    FieldComponent,
                    InputTextComponent,
                    FileUploadComponent,
                    SliderComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ElementsModule, { declarations: [ButtonComponent,
        CheckboxComponent,
        CommentsComponent,
        CustomSelectComponent,
        DateFormatPipe,
        FieldComponent,
        InputTextComponent,
        FileUploadComponent,
        SliderComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule], exports: [ButtonComponent,
        CheckboxComponent,
        CommentsComponent,
        CustomSelectComponent,
        FieldComponent,
        InputTextComponent,
        FileUploadComponent,
        SliderComponent] }); })();

const _c0$I = a0 => ({ "z-index": a0 });
function BladeComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 2);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(1, _c0$I, ctx_r0.zIndex));
} }
const _c1$y = a0 => ({ "pinned": a0 });
function BladeComponent_aside_1_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵlistener("click", function BladeComponent_aside_1_div_3_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r7.toggleThePin($event)); });
    i0.ɵɵtext(1, " push_pin ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(1, _c1$y, ctx_r3.isPinned));
} }
function BladeComponent_aside_1_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r4.iconName);
} }
function BladeComponent_aside_1_ng_content_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 1, ["*ngIf", "bladeTabs"]);
} }
function BladeComponent_aside_1_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵelement(1, "div", 15);
    i0.ɵɵelementStart(2, "div", 16);
    i0.ɵɵprojection(3, 2);
    i0.ɵɵelementEnd()();
} }
const _c2$q = (a0, a1) => ({ "show-blade box-shadow": a0, "show-tabs": a1 });
const _c3$j = (a0, a1) => ({ "top": a0, "z-index": a1 });
const _c4$e = a0 => ({ "max-width": a0 });
function BladeComponent_aside_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "aside", 3)(1, "article", 4)(2, "div", 5);
    i0.ɵɵtemplate(3, BladeComponent_aside_1_div_3_Template, 2, 3, "div", 6)(4, BladeComponent_aside_1_div_4_Template, 2, 1, "div", 7);
    i0.ɵɵelementStart(5, "h2", 8);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "a", 9);
    i0.ɵɵlistener("click", function BladeComponent_aside_1_Template_a_click_7_listener() { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r9.onClose()); });
    i0.ɵɵtext(8, "Close");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(9, BladeComponent_aside_1_ng_content_9_Template, 1, 0, "ng-content", 10)(10, BladeComponent_aside_1_div_10_Template, 4, 0, "div", 11);
    i0.ɵɵprojection(11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("blade animate-all ", ctx_r1.bladeSize, "");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(11, _c2$q, ctx_r1.toggleBlade, ctx_r1.bladeTabs))("ngStyle", i0.ɵɵpureFunction2(14, _c3$j, ctx_r1.topPosition, ctx_r1.zIndex + 10));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.enablePinning);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.enableIcon);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(17, _c4$e, ctx_r1.headingMaxWidth));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.bladeHeading, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.bladeTabs);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showBladeModal);
} }
function BladeComponent_aside_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵelement(1, "div", 15);
    i0.ɵɵelementStart(2, "div", 16);
    i0.ɵɵprojection(3, 6);
    i0.ɵɵelementEnd()();
} }
function BladeComponent_aside_2_ng_content_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 7, ["*ngIf", "customBladeTabs"]);
} }
const _c5$c = (a0, a1) => ({ "show-blade box-shadow": a0, "show-tabs custom-header-tabs": a1 });
function BladeComponent_aside_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "aside", 3);
    i0.ɵɵtemplate(1, BladeComponent_aside_2_div_1_Template, 4, 0, "div", 11);
    i0.ɵɵelementStart(2, "article", 17);
    i0.ɵɵprojection(3, 3);
    i0.ɵɵtemplate(4, BladeComponent_aside_2_ng_content_4_Template, 1, 0, "ng-content", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "article", 18);
    i0.ɵɵprojection(6, 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "article", 19);
    i0.ɵɵprojection(8, 5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("blade animate-all ", ctx_r2.bladeSize, "");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(7, _c5$c, ctx_r2.toggleBlade, ctx_r2.customBladeTabs))("ngStyle", i0.ɵɵpureFunction2(10, _c3$j, ctx_r2.topPosition, ctx_r2.zIndex));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.showBladeModal);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r2.customBladeTabs);
} }
const _c6$9 = ["*", [["", "blade-tabs", ""]], [["", "blade-modal", ""]], [["", "custom-header", ""]], [["", "custom-content", ""]], [["", "custom-footer", ""]], [["", "blade-custom-modal", ""]], [["", "custom-blade-tabs", ""]]];
const _c7$5 = ["*", "[blade-tabs]", "[blade-modal]", "[custom-header]", "[custom-content]", "[custom-footer]", "[blade-custom-modal]", "[custom-blade-tabs]"];
class BladeComponent {
    onClose() {
        this.bladeOpen.emit(this.toggleBlade = false);
        if (!this.suppressAutoClose) {
            this.bladeOpen.emit(this.toggleBlade);
        }
    }
    toggleThePin(e) {
        this.isPinned = !this.isPinned;
        e.stopPropagation();
        this.bladePinned.emit(this.isPinned);
    }
    constructor() {
        this.pinBlade = false;
        this.zIndex = 0;
        this.suppressAutoClose = false;
        this.customBlade = false;
        this.enableIcon = false;
        this.iconName = '';
        this.bladeTabs = false;
        this.customBladeTabs = false;
        this.blockPageUI = false;
        this.showBladeModal = false;
        this.bladeSize = '';
        this.bladeHeading = '';
        this.enablePinning = false;
        this.toggleBlade = false;
        this.isPinned = false;
        this.bladeOpen = new EventEmitter();
        this.bladePinned = new EventEmitter();
    }
    ngOnInit() {
        this.bladePinned.emit(this.isPinned); // isPinned callback
        this.bladeOpen.emit(this.toggleBlade); // isOpen callback
    }
    static { this.ɵfac = function BladeComponent_Factory(t) { return new (t || BladeComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BladeComponent, selectors: [["aa-blade"]], inputs: { pinBlade: "pinBlade", topPosition: "topPosition", zIndex: "zIndex", suppressAutoClose: "suppressAutoClose", customBlade: "customBlade", enableIcon: "enableIcon", iconName: "iconName", bladeTabs: "bladeTabs", customBladeTabs: "customBladeTabs", headingMaxWidth: "headingMaxWidth", blockPageUI: "blockPageUI", showBladeModal: "showBladeModal", bladeSize: "bladeSize", bladeHeading: "bladeHeading", enablePinning: "enablePinning", toggleBlade: "toggleBlade", isPinned: "isPinned" }, outputs: { bladeOpen: "bladeOpen", bladePinned: "bladePinned" }, ngContentSelectors: _c7$5, decls: 3, vars: 3, consts: [["class", "aa-blade-modal", 3, "ngStyle", 4, "ngIf"], [3, "class", "ngClass", "ngStyle", 4, "ngIf"], [1, "aa-blade-modal", 3, "ngStyle"], [3, "ngClass", "ngStyle"], [1, "blade-header", "flex-group", "space-between", "flex-nowrap"], [1, "flex-group", "flex-start", "flex-align-center"], ["class", "material-icons pin flex-end", 3, "ngClass", "click", 4, "ngIf"], ["class", "material-icons header-icon margin-right-0-5", 4, "ngIf"], [1, "margin-0", "ellipsis", 3, "ngStyle"], [1, "anchor-close", "flex-align-center", 3, "click"], [4, "ngIf"], ["class", "blade-modal flex-center", 4, "ngIf"], [1, "material-icons", "pin", "flex-end", 3, "ngClass", "click"], [1, "material-icons", "header-icon", "margin-right-0-5"], [1, "blade-modal", "flex-center"], [1, "modal-background-tint"], [1, "modal-content"], [1, "blade-header", "custom-header"], [1, "blade-content"], [1, "blade-footer"]], template: function BladeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c6$9);
            i0.ɵɵtemplate(0, BladeComponent_div_0_Template, 1, 3, "div", 0)(1, BladeComponent_aside_1_Template, 12, 19, "aside", 1)(2, BladeComponent_aside_2_Template, 9, 13, "aside", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.toggleBlade && ctx.blockPageUI);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.customBlade);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.customBlade);
        } }, dependencies: [i1.NgClass, i1.NgIf, i1.NgStyle] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BladeComponent, [{
        type: Component,
        args: [{ selector: 'aa-blade', template: "<!-- MODAL UI BLOCK -->\r\n<div class=\"aa-blade-modal\" *ngIf=\"toggleBlade && blockPageUI\" [ngStyle]=\"{'z-index' : zIndex}\"></div>\r\n\r\n<!-- HEADER BAKED IN -->\r\n<aside \r\n  *ngIf=\"!customBlade\" \r\n  class=\"blade animate-all {{bladeSize}}\" \r\n  [ngClass]=\"{\r\n    'show-blade box-shadow' : toggleBlade,\r\n    'show-tabs' : bladeTabs\r\n  }\"\r\n  [ngStyle]=\"{\r\n    'top' : topPosition, \r\n    'z-index' : zIndex+10\r\n  }\"\r\n>\r\n  <article class=\"blade-header flex-group space-between flex-nowrap\">\r\n    <div class=\"flex-group flex-start flex-align-center\">\r\n      <div \r\n          *ngIf=\"enablePinning\" \r\n          (click)=\"toggleThePin($event)\"\r\n          [ngClass]=\"{'pinned' : isPinned}\" \r\n          class=\"material-icons pin flex-end\"\r\n      >\r\n        push_pin\r\n      </div>\r\n      <div *ngIf=\"enableIcon\" class=\"material-icons header-icon margin-right-0-5\">{{iconName}}</div>\r\n      <h2 class=\"margin-0 ellipsis\" [ngStyle]=\"{'max-width' : headingMaxWidth }\">\r\n        {{bladeHeading}}\r\n      </h2>\r\n    </div>\r\n    <a class=\"anchor-close flex-align-center\" (click)=\"onClose()\">Close</a>\r\n  </article>\r\n  <ng-content *ngIf=\"bladeTabs\" select=\"[blade-tabs]\"></ng-content>\r\n  <!-- BLADE MODAL -->\r\n  <div *ngIf=\"showBladeModal\" class=\"blade-modal flex-center\">\r\n    <div class=\"modal-background-tint\"></div>\r\n    <div class=\"modal-content\">\r\n      <ng-content select=\"[blade-modal]\"></ng-content>\r\n    </div>\r\n  </div>\r\n  <ng-content></ng-content>\r\n</aside>\r\n\r\n<!-- CUSTOMISABLE HEADER, CONTENT AND FOOTER -->\r\n<aside \r\n  *ngIf=\"customBlade\" \r\n  class=\"blade animate-all {{bladeSize}}\" \r\n  [ngClass]=\"{\r\n    'show-blade box-shadow' : toggleBlade,\r\n    'show-tabs custom-header-tabs' : customBladeTabs\r\n  }\" \r\n  [ngStyle]=\"{\r\n    'top' : topPosition, \r\n    'z-index' : zIndex\r\n  }\"\r\n>\r\n  <!-- BLADE CUSTOM MODAL -->\r\n  <div *ngIf=\"showBladeModal\" class=\"blade-modal flex-center\">\r\n    <div class=\"modal-background-tint\"></div>\r\n    <div class=\"modal-content\">\r\n      <ng-content select=\"[blade-custom-modal]\"></ng-content>\r\n    </div>\r\n  </div>\r\n\r\n  <article class=\"blade-header custom-header\">\r\n    <ng-content select=\"[custom-header]\"></ng-content>\r\n    <ng-content *ngIf=\"customBladeTabs\" select=\"[custom-blade-tabs]\"></ng-content>\r\n  </article>\r\n  <article class=\"blade-content\">\r\n    <ng-content select=\"[custom-content]\"></ng-content>\r\n  </article>\r\n  <article class=\"blade-footer\">\r\n    <ng-content select=\"[custom-footer]\"></ng-content>\r\n  </article>\r\n</aside>\r\n\r\n" }]
    }], () => [], { pinBlade: [{
            type: Input
        }], topPosition: [{
            type: Input
        }], zIndex: [{
            type: Input
        }], suppressAutoClose: [{
            type: Input
        }], customBlade: [{
            type: Input
        }], enableIcon: [{
            type: Input
        }], iconName: [{
            type: Input
        }], bladeTabs: [{
            type: Input
        }], customBladeTabs: [{
            type: Input
        }], headingMaxWidth: [{
            type: Input
        }], blockPageUI: [{
            type: Input
        }], showBladeModal: [{
            type: Input
        }], bladeSize: [{
            type: Input
        }], bladeHeading: [{
            type: Input
        }], enablePinning: [{
            type: Input
        }], toggleBlade: [{
            type: Input
        }], isPinned: [{
            type: Input
        }], bladeOpen: [{
            type: Output
        }], bladePinned: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BladeComponent, { className: "BladeComponent", filePath: "lib\\layout\\blade\\blade.component.ts", lineNumber: 8 }); })();

const _c0$H = ["*"];
class BladeFooterComponent {
    constructor() { }
    static { this.ɵfac = function BladeFooterComponent_Factory(t) { return new (t || BladeFooterComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BladeFooterComponent, selectors: [["aa-blade-footer"]], ngContentSelectors: _c0$H, decls: 2, vars: 0, consts: [[1, "blade-footer", "flex-group", "flex-start"]], template: function BladeFooterComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "article", 0);
            i0.ɵɵprojection(1);
            i0.ɵɵelementEnd();
        } }, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BladeFooterComponent, [{
        type: Component,
        args: [{ selector: 'aa-blade-footer', changeDetection: ChangeDetectionStrategy.OnPush, template: "<article class=\"blade-footer flex-group flex-start\">\r\n  <ng-content></ng-content>\r\n</article>" }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BladeFooterComponent, { className: "BladeFooterComponent", filePath: "lib\\layout\\blade-footer\\blade-footer.component.ts", lineNumber: 9 }); })();

function BladeBottomComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵlistener("click", function BladeBottomComponent_div_5_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.toggleThePin($event)); });
    i0.ɵɵtext(1, "push_pin");
    i0.ɵɵelementEnd();
} }
const _c0$G = [[["", "custom-header", ""]], [["", "custom-content", ""]]];
const _c1$x = (a0, a1, a2) => ({ "show": a0, "pinned": a1, "fullscreen": a2 });
const _c2$p = (a0, a1) => ({ "top": a0, "z-index": a1 });
const _c3$i = ["[custom-header]", "[custom-content]"];
class BladeBottomComponent {
    toggle() {
        this.isOpen = !this.isOpen;
        this.bladeOpen.emit(this.isOpen);
        if (this.isPinned && this.isOpen) {
            this.isPinned = true;
            this.bladePinned.emit(true);
        }
        else {
            this.bladePinned.emit(false);
        }
    }
    toggleThePin(e) {
        this.isPinned = !this.isPinned;
        if (!this.isPinned) {
            this.isFullScreen = true;
            this.bladeFullScreen.emit(this.isFullScreen);
        }
        else if (this.isPinned) {
            this.isFullScreen = false;
            this.isOpen = true;
        }
        e.stopPropagation();
        this.bladePinned.emit(this.isPinned);
    }
    expandedPosition() {
        if (!this.isOpen) {
            return this.closedPos;
        }
        else if (this.isFullScreen) {
            return this.fullScreenPos;
        }
        else if (this.isPinned || this.isOpen) {
            return this.splitScreenPos;
        }
    }
    constructor() {
        this.isOpen = false;
        this.isPinned = false;
        this.disablePinning = false;
        this.isFullScreen = false;
        this.innitiallyPinned = false;
        this.controlsColor = '';
        this.headerBgColor = '';
        this.zIndex = 0;
        this.bladePinned = new EventEmitter();
        this.bladeOpen = new EventEmitter();
        this.bladeFullScreen = new EventEmitter();
    }
    ngOnInit() {
        if (this.innitiallyPinned) {
            this.isPinned = true;
            this.isOpen = true;
            this.isFullScreen = false;
        }
        this.bladePinned.emit(this.isPinned); // isPinned callback
        this.bladeOpen.emit(this.isOpen); // isOpen callback
        this.bladeFullScreen.emit(this.isFullScreen); // isFullScreen callback
    }
    static { this.ɵfac = function BladeBottomComponent_Factory(t) { return new (t || BladeBottomComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BladeBottomComponent, selectors: [["aa-blade-bottom"]], inputs: { fullScreenPos: "fullScreenPos", splitScreenPos: "splitScreenPos", closedPos: "closedPos", isOpen: "isOpen", isPinned: "isPinned", disablePinning: "disablePinning", isFullScreen: "isFullScreen", innitiallyPinned: "innitiallyPinned", controlsColor: "controlsColor", headerBgColor: "headerBgColor", zIndex: "zIndex" }, outputs: { bladePinned: "bladePinned", bladeOpen: "bladeOpen", bladeFullScreen: "bladeFullScreen" }, ngContentSelectors: _c3$i, decls: 8, vars: 16, consts: [[1, "blade-bottom", 3, "ngClass", "ngStyle"], [3, "click"], [1, "flex-group", "flex-start", "flex-align-center"], ["class", "material-icons pin flex-end", 3, "click", 4, "ngIf"], [1, "blade-bottom-content"], [1, "material-icons", "pin", "flex-end", 3, "click"]], template: function BladeBottomComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0$G);
            i0.ɵɵelementStart(0, "div", 0)(1, "section", 1);
            i0.ɵɵlistener("click", function BladeBottomComponent_Template_section_click_1_listener() { return ctx.toggle(); });
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵprojection(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div");
            i0.ɵɵtemplate(5, BladeBottomComponent_div_5_Template, 2, 0, "div", 3);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "section", 4);
            i0.ɵɵprojection(7, 1);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(9, _c1$x, ctx.isOpen, ctx.isPinned, ctx.isFullScreen))("ngStyle", i0.ɵɵpureFunction2(13, _c2$p, ctx.expandedPosition(), ctx.zIndex));
            i0.ɵɵadvance();
            i0.ɵɵclassMapInterpolate1("blade-bottom-header flex-group cursor-pointer ", ctx.headerBgColor, "");
            i0.ɵɵadvance(3);
            i0.ɵɵclassMapInterpolate1("flex-group flex-end controls ", ctx.controlsColor, "");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.disablePinning);
        } }, dependencies: [i1.NgClass, i1.NgIf, i1.NgStyle], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BladeBottomComponent, [{
        type: Component,
        args: [{ selector: 'aa-blade-bottom', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div \r\n  class=\"blade-bottom\" \r\n  [ngClass]=\"{\r\n    'show' : isOpen, \r\n    'pinned' : isPinned, \r\n    'fullscreen' : isFullScreen\r\n  }\" \r\n  [ngStyle]=\"{\r\n    'top': expandedPosition(), \r\n    'z-index': zIndex\r\n  }\">\r\n  <section class=\"blade-bottom-header flex-group cursor-pointer {{headerBgColor}}\" (click)=\"toggle()\">\r\n      <div class=\"flex-group flex-start flex-align-center\">\r\n        <ng-content select=\"[custom-header]\"></ng-content>\r\n      </div>\r\n      <div class=\"flex-group flex-end controls {{controlsColor}}\">\r\n        <div *ngIf=\"!disablePinning\" (click)=\"toggleThePin($event)\" class=\"material-icons pin flex-end\">push_pin</div>\r\n      </div>\r\n  </section>\r\n  <section class=\"blade-bottom-content\">\r\n    <ng-content select=\"[custom-content]\"></ng-content>\r\n  </section>\r\n</div>\r\n" }]
    }], () => [], { fullScreenPos: [{
            type: Input
        }], splitScreenPos: [{
            type: Input
        }], closedPos: [{
            type: Input
        }], isOpen: [{
            type: Input
        }], isPinned: [{
            type: Input
        }], disablePinning: [{
            type: Input
        }], isFullScreen: [{
            type: Input
        }], innitiallyPinned: [{
            type: Input
        }], controlsColor: [{
            type: Input
        }], headerBgColor: [{
            type: Input
        }], zIndex: [{
            type: Input
        }], bladePinned: [{
            type: Output
        }], bladeOpen: [{
            type: Output
        }], bladeFullScreen: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BladeBottomComponent, { className: "BladeBottomComponent", filePath: "lib\\layout\\blade-bottom\\blade-bottom.component.ts", lineNumber: 9 }); })();

const _c0$F = (a0, a2, a3) => ({ "border": a0, "border-style": "solid", "width": a2, "height": a3 });
function BladeTopComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelement(1, "div");
    i0.ɵɵelementStart(2, "div", 7);
    i0.ɵɵprojection(3, 1);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("flag ", ctx_r0.countryFlag, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction3(4, _c0$F, ctx_r0.borderThickness + " solid " + ctx_r0.borderColour, ctx_r0.profileSize, ctx_r0.profileSize));
} }
const _c1$w = [[["", "custom-content", ""]], [["", "user-profile", ""]]];
const _c2$o = a0 => ({ "show-top-blade box-shadow-light": a0 });
const _c3$h = (a0, a1, a2, a3, a4) => ({ "left": a0, "right": a1, "margin-top": a2, "z-index": a3, "max-height": a4 });
const _c4$d = a0 => ({ "transform": a0 });
const _c5$b = ["[custom-content]", "[user-profile]"];
class BladeTopComponent {
    onClose() {
        this.isOpen = false;
        this.bladeOpen.emit(this.isOpen);
    }
    toggleThePin(e) {
        this.isPinned = !this.isPinned;
        e.stopPropagation();
        this.bladePinned.emit(this.isPinned);
    }
    constructor() {
        this.zIndex = 0;
        this.countryFlag = '';
        this.paddingTop = false;
        this.paddingRight = false;
        this.paddingBottom = false;
        this.paddingLeft = false;
        this.userProfile = false;
        this.borderColour = '';
        this.isOpen = false;
        this.isPinned = false;
        this.bladeOpen = new EventEmitter();
        this.bladePinned = new EventEmitter();
    }
    ngOnInit() {
        this.bladePinned.emit(this.isPinned); // isPinned callback
        this.bladeOpen.emit(this.isOpen); // isOpen callback
    }
    static { this.ɵfac = function BladeTopComponent_Factory(t) { return new (t || BladeTopComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BladeTopComponent, selectors: [["aa-blade-top"]], inputs: { rightPos: "rightPos", leftPos: "leftPos", topPos: "topPos", zIndex: "zIndex", maxHeight: "maxHeight", countryFlag: "countryFlag", paddingTop: "paddingTop", paddingRight: "paddingRight", paddingBottom: "paddingBottom", paddingLeft: "paddingLeft", userProfile: "userProfile", borderColour: "borderColour", profileSize: "profileSize", borderThickness: "borderThickness", isOpen: "isOpen", isPinned: "isPinned" }, outputs: { bladeOpen: "bladeOpen", bladePinned: "bladePinned" }, ngContentSelectors: _c5$b, decls: 9, vars: 14, consts: [[1, "blade-top", "gradient-h-blue", "width-control", "flex-group", 3, "ngClass", "ngStyle"], [1, "flex-group", "flex-start"], ["class", "position-relative margin-top-1-5", 4, "ngIf"], [1, "blade-top-controls", "flex-group"], [1, "material-icons", "pin", "flex-end", "margin-right-0-5", 3, "ngStyle", "click"], [1, "material-icons", 3, "click"], [1, "position-relative", "margin-top-1-5"], [1, "user-profile", "fingerprint", 3, "ngStyle"]], template: function BladeTopComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c1$w);
            i0.ɵɵelementStart(0, "section", 0)(1, "div", 1);
            i0.ɵɵtemplate(2, BladeTopComponent_div_2_Template, 4, 8, "div", 2);
            i0.ɵɵprojection(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 3)(5, "button", 4);
            i0.ɵɵlistener("click", function BladeTopComponent_Template_button_click_5_listener($event) { return ctx.toggleThePin($event); });
            i0.ɵɵtext(6, "push_pin");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "button", 5);
            i0.ɵɵlistener("click", function BladeTopComponent_Template_button_click_7_listener() { return ctx.onClose(); });
            i0.ɵɵtext(8, "close");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c2$o, ctx.isOpen))("ngStyle", i0.ɵɵpureFunction5(6, _c3$h, ctx.leftPos, ctx.rightPos, ctx.topPos, ctx.zIndex, ctx.maxHeight));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.userProfile);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(12, _c4$d, ctx.isPinned ? "rotate(0deg)" : "rotate(90deg)"));
        } }, dependencies: [i1.NgClass, i1.NgIf, i1.NgStyle], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BladeTopComponent, [{
        type: Component,
        args: [{ selector: 'aa-blade-top', changeDetection: ChangeDetectionStrategy.OnPush, template: "<section \r\n    class=\"blade-top gradient-h-blue width-control flex-group\"\r\n    [ngClass]=\"{'show-top-blade box-shadow-light' : isOpen}\"\r\n    [ngStyle]=\"{\r\n        'left' : leftPos, \r\n        'right' : rightPos,\r\n        'margin-top' : topPos,\r\n        'z-index' : zIndex,\r\n        'max-height' : maxHeight\r\n    }\">\r\n    <div class=\"flex-group flex-start\">\r\n        <div *ngIf=\"userProfile\" class=\"position-relative margin-top-1-5\">\r\n            <div class=\"flag {{countryFlag}}\"></div>\r\n            <div class=\"user-profile fingerprint\" \r\n                [ngStyle]=\"{\r\n                    'border' : borderThickness+' solid '+borderColour, \r\n                    'border-style' : 'solid', \r\n                    'width' : profileSize, \r\n                    'height' : profileSize\r\n                }\">\r\n                <ng-content select=\"[user-profile]\"></ng-content>\r\n            </div>\r\n        </div>\r\n        <ng-content select=\"[custom-content]\"></ng-content>\r\n    </div>\r\n    <div class=\"blade-top-controls flex-group\">\r\n        <button (click)=\"toggleThePin($event)\" class=\"material-icons pin flex-end margin-right-0-5\" [ngStyle]=\"{'transform': isPinned ? 'rotate(0deg)' : 'rotate(90deg)'}\">push_pin</button>\r\n        <button (click)=\"onClose()\" class=\"material-icons\">close</button>\r\n    </div>\r\n</section>" }]
    }], () => [], { rightPos: [{
            type: Input
        }], leftPos: [{
            type: Input
        }], topPos: [{
            type: Input
        }], zIndex: [{
            type: Input
        }], maxHeight: [{
            type: Input
        }], countryFlag: [{
            type: Input
        }], paddingTop: [{
            type: Input
        }], paddingRight: [{
            type: Input
        }], paddingBottom: [{
            type: Input
        }], paddingLeft: [{
            type: Input
        }], userProfile: [{
            type: Input
        }], borderColour: [{
            type: Input
        }], profileSize: [{
            type: Input
        }], borderThickness: [{
            type: Input
        }], isOpen: [{
            type: Input
        }], isPinned: [{
            type: Input
        }], bladeOpen: [{
            type: Output
        }], bladePinned: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BladeTopComponent, { className: "BladeTopComponent", filePath: "lib\\layout\\blade-top\\blade-top.component.ts", lineNumber: 9 }); })();

const _c0$E = (a0, a1) => ({ "left": a0, "z-index": a1 });
const _c1$v = ["*"];
class FooterComponent {
    constructor() {
        this.zIndex = 0;
        this.colorClass = '';
    }
    static { this.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FooterComponent, selectors: [["aa-footer"]], inputs: { leftPos: "leftPos", zIndex: "zIndex", colorClass: "colorClass" }, ngContentSelectors: _c1$v, decls: 2, vars: 7, consts: [[3, "ngStyle"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "footer", 0);
            i0.ɵɵprojection(1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassMap(ctx.colorClass);
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(4, _c0$E, ctx.leftPos, ctx.zIndex));
        } }, dependencies: [i1.NgStyle], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FooterComponent, [{
        type: Component,
        args: [{ selector: 'aa-footer', changeDetection: ChangeDetectionStrategy.OnPush, template: "<footer class=\"{{colorClass}}\" [ngStyle]=\"{'left':leftPos, 'z-index':zIndex}\">\r\n  <ng-content></ng-content>\r\n</footer>" }]
    }], () => [], { leftPos: [{
            type: Input
        }], zIndex: [{
            type: Input
        }], colorClass: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "lib\\layout\\footer\\footer.component.ts", lineNumber: 9 }); })();

const _c0$D = a0 => ({ "left": a0 });
function ProjectTourComponent_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 8);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("arrow-top ", ctx_r1.arrowClass, "");
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(4, _c0$D, ctx_r1.arrowPos));
} }
const _c1$u = a0 => ({ "top": a0 });
function ProjectTourComponent_div_3_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 8);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("arrow-right ", ctx_r2.arrowClass, "");
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(4, _c1$u, ctx_r2.arrowPos));
} }
function ProjectTourComponent_div_3_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 8);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("arrow-bottom ", ctx_r3.arrowClass, "");
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(4, _c0$D, ctx_r3.arrowPos));
} }
function ProjectTourComponent_div_3_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 8);
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("arrow-left ", ctx_r4.arrowClass, "");
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(4, _c1$u, ctx_r4.arrowPos));
} }
function ProjectTourComponent_div_3_h3_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h3");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r5.tourModeHeading);
} }
const _c2$n = (a0, a1, a2, a3, a4, a5) => ({ "width": a0, "top": a1, "right": a2, "bottom": a3, "left": a4, "z-index": a5 });
const _c3$g = a0 => ({ "z-index": a0 });
function ProjectTourComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div", 3);
    i0.ɵɵtemplate(2, ProjectTourComponent_div_3_div_2_Template, 1, 6, "div", 4)(3, ProjectTourComponent_div_3_div_3_Template, 1, 6, "div", 4)(4, ProjectTourComponent_div_3_div_4_Template, 1, 6, "div", 4)(5, ProjectTourComponent_div_3_div_5_Template, 1, 6, "div", 4);
    i0.ɵɵelementStart(6, "div", 5);
    i0.ɵɵtemplate(7, ProjectTourComponent_div_3_h3_7_Template, 2, 1, "h3", 2);
    i0.ɵɵelementStart(8, "p");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 6);
    i0.ɵɵprojection(11, 1);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(12, "div", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction6(8, _c2$n, ctx_r0.panelWidth, ctx_r0.topPos, ctx_r0.rightPos, ctx_r0.bottomPos, ctx_r0.leftPos, ctx_r0.zIndex + 1));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.arrowTop);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.arrowRight);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.arrowBottom);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.arrowLeft);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.enableHeading);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.tourModeBody, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(15, _c3$g, ctx_r0.zIndex));
} }
const _c4$c = [[["", "nested-component", ""]], [["", "tour-navigation", ""]]];
const _c5$a = a0 => ({ "tour-active": a0 });
const _c6$8 = a1 => ({ "position": "relative", "z-index": a1 });
const _c7$4 = () => ({});
const _c8$1 = ["[nested-component]", "[tour-navigation]"];
class ProjectTourComponent {
    constructor() {
        this.tourMode = false;
        this.enableHeading = false;
        this.tourModeHeading = '';
        this.tourModeBody = '';
        this.arrowTop = false;
        this.arrowRight = false;
        this.arrowBottom = false;
        this.arrowLeft = false;
        this.arrowClass = '';
        this.zIndex = 0;
    }
    static { this.ɵfac = function ProjectTourComponent_Factory(t) { return new (t || ProjectTourComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProjectTourComponent, selectors: [["aa-project-tour"]], inputs: { tourMode: "tourMode", enableHeading: "enableHeading", tourModeHeading: "tourModeHeading", tourModeBody: "tourModeBody", topPos: "topPos", rightPos: "rightPos", bottomPos: "bottomPos", leftPos: "leftPos", panelWidth: "panelWidth", arrowPos: "arrowPos", arrowTop: "arrowTop", arrowRight: "arrowRight", arrowBottom: "arrowBottom", arrowLeft: "arrowLeft", arrowClass: "arrowClass", zIndex: "zIndex" }, ngContentSelectors: _c8$1, decls: 4, vars: 8, consts: [[1, "position-relative"], [3, "ngClass", "ngStyle"], [4, "ngIf"], [1, "tour-mode-info", 3, "ngStyle"], [3, "class", "ngStyle", 4, "ngIf"], [1, "tour-content"], [1, "tour-navigation", "flex-group", "flex-column"], [1, "tour-mode-overlay", 3, "ngStyle"], [3, "ngStyle"]], template: function ProjectTourComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c4$c);
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵprojection(2);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, ProjectTourComponent_div_3_Template, 13, 17, "div", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c5$a, ctx.tourMode))("ngStyle", ctx.tourMode ? i0.ɵɵpureFunction1(5, _c6$8, ctx.zIndex + 1) : i0.ɵɵpureFunction0(7, _c7$4));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.tourMode);
        } }, dependencies: [i1.NgClass, i1.NgIf, i1.NgStyle], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProjectTourComponent, [{
        type: Component,
        args: [{ selector: 'aa-project-tour', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"position-relative\">\r\n    <div [ngClass]=\"{'tour-active' : tourMode}\" [ngStyle]=\"tourMode ? {'position' : 'relative', 'z-index' : zIndex+1} : {}\">\r\n        <ng-content select=\"[nested-component]\"></ng-content>\r\n    </div>\r\n    <div *ngIf=\"tourMode\">\r\n      <div class=\"tour-mode-info\"\r\n          [ngStyle]=\"{\r\n              'width' : panelWidth,\r\n              'top' : topPos,\r\n              'right' : rightPos,\r\n              'bottom' : bottomPos,\r\n              'left' : leftPos,\r\n              'z-index' : zIndex+1\r\n          }\">\r\n\r\n          <div *ngIf=\"arrowTop\" class=\"arrow-top {{arrowClass}}\" [ngStyle]=\"{'left' : arrowPos}\"></div>\r\n          <div *ngIf=\"arrowRight\" class=\"arrow-right {{arrowClass}}\" [ngStyle]=\"{'top' : arrowPos}\"></div>\r\n          <div *ngIf=\"arrowBottom\" class=\"arrow-bottom {{arrowClass}}\" [ngStyle]=\"{'left' : arrowPos}\"></div>\r\n          <div *ngIf=\"arrowLeft\" class=\"arrow-left {{arrowClass}}\" [ngStyle]=\"{'top' : arrowPos}\"></div>\r\n\r\n          <div class=\"tour-content\">\r\n            <h3 *ngIf=\"enableHeading\">{{tourModeHeading}}</h3>\r\n            <p>\r\n              {{tourModeBody}}\r\n            </p>\r\n          </div>\r\n          <div class=\"tour-navigation flex-group flex-column\">\r\n            <ng-content select=\"[tour-navigation]\"></ng-content>\r\n          </div>\r\n        </div>\r\n      <div class=\"tour-mode-overlay\" [ngStyle]=\"{'z-index':zIndex}\"></div>\r\n    </div>\r\n</div>\r\n" }]
    }], () => [], { tourMode: [{
            type: Input
        }], enableHeading: [{
            type: Input
        }], tourModeHeading: [{
            type: Input
        }], tourModeBody: [{
            type: Input
        }], topPos: [{
            type: Input
        }], rightPos: [{
            type: Input
        }], bottomPos: [{
            type: Input
        }], leftPos: [{
            type: Input
        }], panelWidth: [{
            type: Input
        }], arrowPos: [{
            type: Input
        }], arrowTop: [{
            type: Input
        }], arrowRight: [{
            type: Input
        }], arrowBottom: [{
            type: Input
        }], arrowLeft: [{
            type: Input
        }], arrowClass: [{
            type: Input
        }], zIndex: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ProjectTourComponent, { className: "ProjectTourComponent", filePath: "lib\\layout\\project-tour\\project-tour.component.ts", lineNumber: 9 }); })();

const _c0$C = (a0, a1) => ({ "top": a0, "bottom": a1 });
const _c1$t = (a0, a1) => ({ "font-size": a0, "text-transform": a1 });
function UiBlockComponent_article_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 1)(1, "h1", 2);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "div", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(3, _c0$C, ctx_r0.topPos, ctx_r0.bottomPos));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(6, _c1$t, ctx_r0.fontSize, ctx_r0.allCaps && "uppercase"));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.message, " ");
} }
class UiBlockComponent {
    constructor() {
        this.showUiBlock = false;
        this.allCaps = false;
        this.message = '';
        this.zIndex = 0;
    }
    static { this.ɵfac = function UiBlockComponent_Factory(t) { return new (t || UiBlockComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: UiBlockComponent, selectors: [["aa-ui-block"]], inputs: { showUiBlock: "showUiBlock", topPos: "topPos", bottomPos: "bottomPos", fontSize: "fontSize", allCaps: "allCaps", message: "message", zIndex: "zIndex" }, decls: 1, vars: 1, consts: [["class", "aa-ui-block flex-group flex-center", 3, "ngStyle", 4, "ngIf"], [1, "aa-ui-block", "flex-group", "flex-center", 3, "ngStyle"], [3, "ngStyle"], [1, "background"]], template: function UiBlockComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, UiBlockComponent_article_0_Template, 4, 9, "article", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.showUiBlock);
        } }, dependencies: [i1.NgIf, i1.NgStyle], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UiBlockComponent, [{
        type: Component,
        args: [{ selector: 'aa-ui-block', changeDetection: ChangeDetectionStrategy.OnPush, template: "<article \r\n    *ngIf=\"showUiBlock\" \r\n    class=\"aa-ui-block flex-group flex-center\"\r\n    [ngStyle]=\"{\r\n        'top' : topPos,\r\n        'bottom' : bottomPos\r\n    }\"\r\n>\r\n    <h1\r\n        [ngStyle]=\"{\r\n            'font-size' : fontSize,\r\n            'text-transform' : allCaps&&'uppercase'\r\n        }\"\r\n    >\r\n        {{message}}\r\n    </h1>\r\n    <div class=\"background\"></div>\r\n</article>" }]
    }], null, { showUiBlock: [{
            type: Input
        }], topPos: [{
            type: Input
        }], bottomPos: [{
            type: Input
        }], fontSize: [{
            type: Input
        }], allCaps: [{
            type: Input
        }], message: [{
            type: Input
        }], zIndex: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(UiBlockComponent, { className: "UiBlockComponent", filePath: "lib\\layout\\ui-block\\ui-block.component.ts", lineNumber: 9 }); })();

class GraphicComponent {
    constructor() { }
    static { this.ɵfac = function GraphicComponent_Factory(t) { return new (t || GraphicComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GraphicComponent, selectors: [["aa-graphic"]], decls: 235, vars: 0, consts: [["id", "Component_14_1", "data-name", "Component 14 \u2013 1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "3000.5", "height", "1070", "viewBox", "0 0 3000.5 1070"], ["id", "clip-path"], ["id", "Path_2942", "data-name", "Path 2942", "d", "M0,115.244,427.5,5.964S459.888-2.767,479.346.9s30.237,13.848,39.35,23.53,17.2,34.224,17.2,34.224L111.67,168.121s-36.289,8.134-53.182,5.005-31.283-8.134-42.232-24.714A151.348,151.348,0,0,1,0,115.244Z", "transform", "translate(-595.631 -4434.948) rotate(90)", "fill", "#f1533e"], ["id", "clip-path-2"], ["id", "Path_2941", "data-name", "Path 2941", "d", "M0,115.244,427.5,5.964S459.888-2.767,479.346.9s30.237,13.848,39.35,23.53,17.2,34.224,17.2,34.224L111.67,168.121s-36.289,8.134-53.182,5.005-31.283-8.134-42.232-24.714A151.348,151.348,0,0,1,0,115.244Z", "transform", "translate(-595.631 -4434.948) rotate(90)", "fill", "#ce3423"], ["id", "Path_2912", "data-name", "Path 2912", "d", "M0,0H147.64V147.64H0Z", "transform", "translate(886.68 282.885)", "fill", "none"], ["id", "Path_2911", "data-name", "Path 2911", "d", "M0,1623.508s260.514-112.259,500.813,32.555,236.13,334.158,236.13,334.158,51.686-8.794,108.582,0,102.747,31.246,102.747,31.246,101.5-275.6,454.337-286.822,505.814,286.822,505.814,286.822,30.428-22.639,105.456-31.246,105.665,0,105.665,0,38.973-286.635,339.085-412.739,541.87-31.245,541.87-31.245V2379.99H0Z", "transform", "translate(0 -1475)", "fill", "#e79f1c"], ["id", "Rectangle_39", "data-name", "Rectangle 39", "width", "3000", "height", "467", "transform", "translate(0.5 603)", "fill", "#d78e0a"], ["id", "Group_79", "data-name", "Group 79", "transform", "translate(89.487 -132.268)"], ["id", "Rectangle_25", "data-name", "Rectangle 25", "width", "27.212", "height", "11.792", "transform", "translate(215.548 471.065)", "fill", "#b38011"], ["id", "Rectangle_26", "data-name", "Rectangle 26", "width", "12.699", "height", "31.748", "transform", "translate(222.805 442.945)", "fill", "#b38011"], ["id", "Rectangle_24", "data-name", "Rectangle 24", "width", "141.505", "height", "141.505", "transform", "translate(157.495 479.229)", "fill", "#b38011"], ["id", "Path_12", "data-name", "Path 12", "d", "M236.3,632.331H228v2.117l-23.29-2.117s-4.56-.532-4.56,5.473,4.56,5.749,4.56,5.749L228,640.8v2.752h8.3", "transform", "translate(-7.143 -199.062)", "fill", "#b38011"], ["id", "Path_13", "data-name", "Path 13", "d", "M36.149.012h-8.3V2.129L4.56.012S0-.52,0,5.485s4.56,5.749,4.56,5.749L27.85,8.481v2.752h8.3", "transform", "translate(265.303 444.492) rotate(180)", "fill", "#b38011"], ["id", "TNT", "transform", "translate(180.172 566.884)", "fill", "#b38011", "font-size", "51", "font-family", "SegoeUI-Bold, Segoe UI", "font-weight", "700", "letter-spacing", "-0.05em"], ["x", "0", "y", "0"], ["id", "Group_94", "data-name", "Group 94", "transform", "translate(23.5 -127.268)"], ["id", "Rectangle_27", "data-name", "Rectangle 27", "width", "41.726", "height", "175.974", "transform", "translate(68.601 444.76)", "fill", "#b38011"], ["id", "Path_14", "data-name", "Path 14", "d", "M154.242,606.709s.651,16.287-13.03,23.453-34.691-9.772-46.092-4.235-8.958,18.567-8.958,18.567", "transform", "translate(3.469 -197.59)", "fill", "none", "stroke", "#1c1c1c", "stroke-width", "5"], ["id", "Path_15", "data-name", "Path 15", "d", "M140.714,574.389l2.606,16.776h-11.4l6.515,6.678-22.8,8.632s29.805-3.095,29.805-2.443-2.117,9.935-2.117,9.935L157,605.334l9.121,14.658-2.28-14.658h35.017l-33.877-10.424L179.8,583.347,159.77,586.6v-9.935L152.44,586.6Z", "transform", "translate(0.71 -194.586)", "fill", "#b38011"], ["id", "Group_80", "data-name", "Group 80", "transform", "translate(16.5 -133.268)"], ["id", "Rectangle_27-2", "data-name", "Rectangle 27", "width", "41.726", "height", "175.974", "transform", "translate(68.601 444.76)", "fill", "#1c1c1c"], ["id", "Rectangle_28", "data-name", "Rectangle 28", "width", "41.726", "height", "19.049", "transform", "translate(68.601 476.508)", "fill", "#fff"], ["id", "Rectangle_29", "data-name", "Rectangle 29", "width", "41.726", "height", "19.049", "transform", "translate(68.601 570.844)", "fill", "#fff"], ["id", "Path_14-2", "data-name", "Path 14", "d", "M154.242,606.709s.651,16.287-13.03,23.453-34.691-9.772-46.092-4.235-8.958,18.567-8.958,18.567", "transform", "translate(3.469 -197.59)", "fill", "none", "stroke", "#1c1c1c", "stroke-width", "5"], ["id", "Path_15-2", "data-name", "Path 15", "d", "M140.714,574.389l2.606,16.776h-11.4l6.515,6.678-22.8,8.632s29.805-3.095,29.805-2.443-2.117,9.935-2.117,9.935L157,605.334l9.121,14.658-2.28-14.658h35.017l-33.877-10.424L179.8,583.347,159.77,586.6v-9.935L152.44,586.6Z", "transform", "translate(0.71 -194.586)", "fill", "#f1533e"], ["id", "Group_95", "data-name", "Group 95", "transform", "translate(188.5 -164.531)", "opacity", "0.24"], ["id", "Path_11", "data-name", "Path 11", "d", "M501.381,1064.276s-10.921-7.066,11.834-7.066,16.12-9.207,28.12-15.207S580,1026,584,1020s6-7.333,7.333-15.333,22-36.667,50-38.667S720,950.669,736,938s22-26,22-35.333-12-14.667,0-20,11.333-4,24.667,6.667,22,14,26.667,37.333S822.669,972,827.336,978,870,1022,882,1028s84,12,107.334,14,75.334-2.667,75.334-2.667,30.667,14,35.333,14,8.464,9.293,8.464,9.293H1100l-593.1,1.646Z", "transform", "translate(179.186 -216.09)"], ["id", "Ellipse_7", "data-name", "Ellipse 7", "cx", "4.5", "cy", "5.5", "rx", "4.5", "ry", "5.5", "transform", "translate(861.186 599.532)"], ["id", "Ellipse_15", "data-name", "Ellipse 15", "cx", "4.5", "cy", "5.5", "rx", "4.5", "ry", "5.5", "transform", "translate(876.186 622.532)"], ["id", "Ellipse_16", "data-name", "Ellipse 16", "cx", "4.5", "cy", "5.5", "rx", "4.5", "ry", "5.5", "transform", "translate(893.186 624.532)"], ["id", "Ellipse_17", "data-name", "Ellipse 17", "cx", "4.5", "cy", "5.5", "rx", "4.5", "ry", "5.5", "transform", "translate(887.186 652.532)"], ["id", "Ellipse_18", "data-name", "Ellipse 18", "cx", "4.5", "cy", "5.5", "rx", "4.5", "ry", "5.5", "transform", "translate(859.186 638.532)"], ["id", "Ellipse_19", "data-name", "Ellipse 19", "cx", "4.5", "cy", "5.5", "rx", "4.5", "ry", "5.5", "transform", "translate(845.186 658.532)"], ["id", "Ellipse_20", "data-name", "Ellipse 20", "cx", "4.5", "cy", "5.5", "rx", "4.5", "ry", "5.5", "transform", "translate(834.186 686.532)"], ["id", "Ellipse_21", "data-name", "Ellipse 21", "cx", "4.5", "cy", "5.5", "rx", "4.5", "ry", "5.5", "transform", "translate(864.186 673.532)"], ["id", "Ellipse_8", "data-name", "Ellipse 8", "cx", "4.5", "cy", "5.5", "rx", "4.5", "ry", "5.5", "transform", "translate(881.186 586.532)"], ["id", "Ellipse_9", "data-name", "Ellipse 9", "cx", "4.5", "cy", "5.5", "rx", "4.5", "ry", "5.5", "transform", "translate(891.186 599.532)"], ["id", "Ellipse_10", "data-name", "Ellipse 10", "cx", "4.5", "cy", "5.5", "rx", "4.5", "ry", "5.5", "transform", "translate(899.186 574.532)"], ["id", "Ellipse_11", "data-name", "Ellipse 11", "cx", "4.5", "cy", "5.5", "rx", "4.5", "ry", "5.5", "transform", "translate(888.186 557.532)"], ["id", "Ellipse_12", "data-name", "Ellipse 12", "cx", "4.5", "cy", "5.5", "rx", "4.5", "ry", "5.5", "transform", "translate(907.186 547.532)"], ["id", "Ellipse_22", "data-name", "Ellipse 22", "cx", "4.5", "cy", "5.5", "rx", "4.5", "ry", "5.5", "transform", "translate(911.186 526.532)"], ["id", "Ellipse_13", "data-name", "Ellipse 13", "cx", "4.5", "cy", "5.5", "rx", "4.5", "ry", "5.5", "transform", "translate(917.186 565.532)"], ["id", "Ellipse_14", "data-name", "Ellipse 14", "cx", "4.5", "cy", "5.5", "rx", "4.5", "ry", "5.5", "transform", "translate(912.186 585.532)"], ["id", "Group_77", "data-name", "Group 77", "transform", "translate(188.5 -172)"], ["id", "Path_11-2", "data-name", "Path 11", "d", "M501.381,1064.276s-10.921-7.066,11.834-7.066,16.12-9.207,28.12-15.207S580,1026,584,1020s6-7.333,7.333-15.333,22-36.667,50-38.667S720,950.669,736,938s22-26,22-35.333-12-14.667,0-20,11.333-4,24.667,6.667,22,14,26.667,37.333S822.669,972,827.336,978,870,1022,882,1028s84,12,107.334,14,75.334-2.667,75.334-2.667,30.667,14,35.333,14,8.464,9.293,8.464,9.293H1100l-593.1,1.646Z", "transform", "translate(179.186 -216.09)"], ["id", "Ellipse_7-2", "data-name", "Ellipse 7", "cx", "4.5", "cy", "5.5", "rx", "4.5", "ry", "5.5", "transform", "translate(861.186 599.532)"], ["id", "Ellipse_15-2", "data-name", "Ellipse 15", "cx", "4.5", "cy", "5.5", "rx", "4.5", "ry", "5.5", "transform", "translate(876.186 622.532)"], ["id", "Ellipse_16-2", "data-name", "Ellipse 16", "cx", "4.5", "cy", "5.5", "rx", "4.5", "ry", "5.5", "transform", "translate(893.186 624.532)"], ["id", "Ellipse_17-2", "data-name", "Ellipse 17", "cx", "4.5", "cy", "5.5", "rx", "4.5", "ry", "5.5", "transform", "translate(887.186 652.532)"], ["id", "Ellipse_18-2", "data-name", "Ellipse 18", "cx", "4.5", "cy", "5.5", "rx", "4.5", "ry", "5.5", "transform", "translate(859.186 638.532)"], ["id", "Ellipse_19-2", "data-name", "Ellipse 19", "cx", "4.5", "cy", "5.5", "rx", "4.5", "ry", "5.5", "transform", "translate(845.186 658.532)"], ["id", "Ellipse_20-2", "data-name", "Ellipse 20", "cx", "4.5", "cy", "5.5", "rx", "4.5", "ry", "5.5", "transform", "translate(834.186 686.532)"], ["id", "Ellipse_21-2", "data-name", "Ellipse 21", "cx", "4.5", "cy", "5.5", "rx", "4.5", "ry", "5.5", "transform", "translate(864.186 673.532)"], ["id", "Ellipse_8-2", "data-name", "Ellipse 8", "cx", "4.5", "cy", "5.5", "rx", "4.5", "ry", "5.5", "transform", "translate(881.186 586.532)"], ["id", "Ellipse_9-2", "data-name", "Ellipse 9", "cx", "4.5", "cy", "5.5", "rx", "4.5", "ry", "5.5", "transform", "translate(891.186 599.532)"], ["id", "Ellipse_10-2", "data-name", "Ellipse 10", "cx", "4.5", "cy", "5.5", "rx", "4.5", "ry", "5.5", "transform", "translate(899.186 574.532)"], ["id", "Ellipse_11-2", "data-name", "Ellipse 11", "cx", "4.5", "cy", "5.5", "rx", "4.5", "ry", "5.5", "transform", "translate(888.186 557.532)"], ["id", "Ellipse_12-2", "data-name", "Ellipse 12", "cx", "4.5", "cy", "5.5", "rx", "4.5", "ry", "5.5", "transform", "translate(907.186 547.532)"], ["id", "Ellipse_22-2", "data-name", "Ellipse 22", "cx", "4.5", "cy", "5.5", "rx", "4.5", "ry", "5.5", "transform", "translate(911.186 526.532)"], ["id", "Ellipse_13-2", "data-name", "Ellipse 13", "cx", "4.5", "cy", "5.5", "rx", "4.5", "ry", "5.5", "transform", "translate(917.186 565.532)"], ["id", "Ellipse_14-2", "data-name", "Ellipse 14", "cx", "4.5", "cy", "5.5", "rx", "4.5", "ry", "5.5", "transform", "translate(912.186 585.532)"], ["id", "Group_102", "data-name", "Group 102", "transform", "translate(581.463 -119.92)", "opacity", "0.25"], ["id", "Path_56", "data-name", "Path 56", "d", "M1819.809,692.472c-.808-1.616,2.02-16.966,2.02-16.966l-14.946-9.291,3.635-6.867-7.271-10.907-7.675-2.02-7.675-13.734-6.059,4.039v-10.1l-11.714-7.675-8.887,2.828-10.907-9.291h-11.311l-5.251,9.291-21.409,4.847,2.828,44.839,3.232,23.429Z", "transform", "translate(488.078 -170.489)", "fill", "#1c1c1c"], ["id", "Path_54", "data-name", "Path 54", "d", "M1672.395,799.61l-40.8-90.485h191.876l-39.183,90.485Z", "transform", "translate(498.958 -183.506)", "fill", "#1c1c1c"], ["id", "Ellipse_27", "data-name", "Ellipse 27", "cx", "18.171", "cy", "18.171", "r", "18.171", "transform", "translate(2158.593 601.656)", "fill", "#1c1c1c"], ["id", "Ellipse_27_-_Outline", "data-name", "Ellipse 27 - Outline", "d", "M18.171,6A12.171,12.171,0,1,0,30.342,18.171,12.185,12.185,0,0,0,18.171,6m0-6A18.171,18.171,0,1,1,0,18.171,18.171,18.171,0,0,1,18.171,0Z", "transform", "translate(2158.593 601.656)", "fill", "#1c1c1c"], ["id", "Ellipse_28", "data-name", "Ellipse 28", "cx", "18.171", "cy", "18.171", "r", "18.171", "transform", "translate(2262.427 601.656)", "fill", "#1c1c1c"], ["id", "Ellipse_28_-_Outline", "data-name", "Ellipse 28 - Outline", "d", "M18.171,6A12.171,12.171,0,1,0,30.342,18.171,12.185,12.185,0,0,0,18.171,6m0-6A18.171,18.171,0,1,1,0,18.171,18.171,18.171,0,0,1,18.171,0Z", "transform", "translate(2262.427 601.656)", "fill", "#1c1c1c"], ["id", "Path_55", "data-name", "Path 55", "d", "M1703.724,626.5l10.1,11.311h11.715l2.02,9.291,15.754,15.35-3.636,5.655,14.138,8.079v18.178H1643.131l-6.867-12.522,10.1-2.424,8.079-8.887,7.271,3.232-3.636-11.311,11.311-10.5h7.271v-10.5l12.522-3.635,3.232-11.311Z", "transform", "translate(498.329 -172.375)", "fill", "#1c1c1c"], ["id", "Rectangle_37", "data-name", "Rectangle 37", "width", "222.38", "height", "21.632", "rx", "10.816", "transform", "translate(2117.924 515.127)", "fill", "#1c1c1c"], ["id", "Group_74", "data-name", "Group 74", "transform", "translate(630.19 -124.92)"], ["id", "Group_99", "data-name", "Group 99", "transform", "translate(0 8)", "opacity", "0.25"], ["id", "Path_47", "data-name", "Path 47", "d", "M1372.5,812.456,1527.1,650.7l12.928,9.7L1383.862,824.38s-6.388,4.255-11.366-1.159S1372.5,812.456,1372.5,812.456Z", "transform", "translate(373.869 -199)", "fill", "#1c1c1c"], ["id", "Path_46", "data-name", "Path 46", "d", "M1462.5,602.161l2.452-5.149s45.849,18.879,77.477,51.242,49.771,75.515,49.771,75.515l-4.974,2.883s-20.014-36.084-28.207-45.491-8.952-10.621-12.667-12.067-12.995,5.884-12.995,5.884L1515.209,656.1l5.394-10.052s.735-2.942-1.962-6.13-13.975-11.033-27.95-20.84A251.271,251.271,0,0,0,1462.5,602.161Z", "transform", "translate(373.869 -199)", "fill", "#1c1c1c"], ["id", "Group_98", "data-name", "Group 98"], ["id", "Path_47-2", "data-name", "Path 47", "d", "M1372.5,812.456,1527.1,650.7l12.928,9.7L1383.862,824.38s-6.388,4.255-11.366-1.159S1372.5,812.456,1372.5,812.456Z", "transform", "translate(373.869 -199)", "fill", "#fffbff"], ["id", "Path_46-2", "data-name", "Path 46", "d", "M1462.5,602.161l2.452-5.149s45.849,18.879,77.477,51.242,49.771,75.515,49.771,75.515l-4.974,2.883s-20.014-36.084-28.207-45.491-8.952-10.621-12.667-12.067-12.995,5.884-12.995,5.884L1515.209,656.1l5.394-10.052s.735-2.942-1.962-6.13-13.975-11.033-27.95-20.84A251.271,251.271,0,0,0,1462.5,602.161Z", "transform", "translate(373.869 -199)", "fill", "#1e1d26"], ["id", "Group_101", "data-name", "Group 101", "transform", "translate(-1 4)", "opacity", "0.25"], ["id", "Path_51", "data-name", "Path 51", "d", "M1417.949,700.2l90.927,90.927,10.059-10.059-91.913-91.716Z", "transform", "translate(373.869 -199)", "fill", "#1e1d26"], ["id", "Path_50", "data-name", "Path 50", "d", "M1394.63,662.107s-1.972-1.07-3.338,0a3.214,3.214,0,0,0-.91,3.043l3.186,10.772L1418.45,700.2l10.469-10.165L1404.8,666.06Z", "transform", "translate(373.869 -199)", "fill", "#1e1d26"], ["id", "Path_48", "data-name", "Path 48", "d", "M1515.634,778.63l-9.1,8.7,9.1,8.7s-1.882,9.41,3.685,21.329,12.939,17.957,12.939,17.957,8.469-3.372,18.114-12.7a56.905,56.905,0,0,0,13.174-18.82,47.407,47.407,0,0,0-18.271-13.252,58.24,58.24,0,0,0-21.407-3.686Z", "transform", "translate(375.999 -196.893)", "fill", "none", "stroke", "#26201e", "stroke-width", "4"], ["id", "Path_49", "data-name", "Path 49", "d", "M1537.19,842.828a67.161,67.161,0,0,0,20.52-14.731c9.7-10.234,13.287-18.584,13.287-18.584l-3.462-4.616s-8.658,13.952-14.044,18.711-20.379,15.172-20.379,15.172Z", "transform", "translate(373.869 -199)", "fill", "#1e1d26"], ["id", "Path_52", "data-name", "Path 52", "d", "M1382.565,707.693s-34.615-32.564-36.667-35.9a45.593,45.593,0,0,1-5.641-32.564c3.333-16.923,5.641-20.769,5.641-20.769s12.821-7.18,25.385-7.692,24.1,2.82,28.718,6.667,35.9,36.667,35.9,36.667Z", "transform", "translate(373.869 -199)", "fill", "#1e1d26"], ["id", "Path_53", "data-name", "Path 53", "d", "M1449.763,1894.309l8.286,8.4,8.987-9.22-8.987-8.87Z", "transform", "translate(434.869 -1303)", "fill", "#1e1d26"], ["id", "Group_100", "data-name", "Group 100"], ["id", "Path_51-2", "data-name", "Path 51", "d", "M1417.949,700.2l90.927,90.927,10.059-10.059-91.913-91.716Z", "transform", "translate(373.869 -199)", "fill", "#f3523f"], ["id", "Path_50-2", "data-name", "Path 50", "d", "M1394.63,662.107s-1.972-1.07-3.338,0a3.214,3.214,0,0,0-.91,3.043l3.186,10.772L1418.45,700.2l10.469-10.165L1404.8,666.06Z", "transform", "translate(372.869 -199)", "fill", "#1e1e23"], ["id", "Path_48-2", "data-name", "Path 48", "d", "M1515.634,778.63l-9.1,8.7,9.1,8.7s-1.882,9.41,3.685,21.329,12.939,17.957,12.939,17.957,8.469-3.372,18.114-12.7a56.905,56.905,0,0,0,13.174-18.82,47.407,47.407,0,0,0-18.271-13.252,58.24,58.24,0,0,0-21.407-3.686Z", "transform", "translate(375.999 -196.893)", "fill", "none", "stroke", "#26201e", "stroke-width", "4"], ["id", "Path_49-2", "data-name", "Path 49", "d", "M1537.19,842.828a67.161,67.161,0,0,0,20.52-14.731c9.7-10.234,13.287-18.584,13.287-18.584l-3.462-4.616s-8.658,13.952-14.044,18.711-20.379,15.172-20.379,15.172Z", "transform", "translate(373.869 -199)", "fill", "#26201e"], ["id", "Path_52-2", "data-name", "Path 52", "d", "M1382.565,707.693s-34.615-32.564-36.667-35.9a45.593,45.593,0,0,1-5.641-32.564c3.333-16.923,5.641-20.769,5.641-20.769s12.821-7.18,25.385-7.692,24.1,2.82,28.718,6.667,35.9,36.667,35.9,36.667Z", "transform", "translate(373.869 -199)", "fill", "#3696da"], ["id", "Path_53-2", "data-name", "Path 53", "d", "M1449.763,1894.309l8.286,8.4,8.987-9.22-8.987-8.87Z", "transform", "translate(434.869 -1303)", "fill", "#26201e"], ["id", "Group_75", "data-name", "Group 75", "transform", "translate(577.463 -124.92)"], ["id", "Path_56-2", "data-name", "Path 56", "d", "M1819.809,692.472c-.808-1.616,2.02-16.966,2.02-16.966l-14.946-9.291,3.635-6.867-7.271-10.907-7.675-2.02-7.675-13.734-6.059,4.039v-10.1l-11.714-7.675-8.887,2.828-10.907-9.291h-11.311l-5.251,9.291-21.409,4.847,2.828,44.839,3.232,23.429Z", "transform", "translate(488.078 -170.489)", "fill", "#1c1c1c"], ["id", "Path_54-2", "data-name", "Path 54", "d", "M1672.395,799.61l-40.8-90.485h191.876l-39.183,90.485Z", "transform", "translate(498.958 -183.506)", "fill", "#1c1c1c"], ["id", "Ellipse_27-2", "data-name", "Ellipse 27", "cx", "18.171", "cy", "18.171", "r", "18.171", "transform", "translate(2158.593 601.656)", "fill", "#fff"], ["id", "Ellipse_27_-_Outline-2", "data-name", "Ellipse 27 - Outline", "d", "M18.171,6A12.171,12.171,0,1,0,30.342,18.171,12.185,12.185,0,0,0,18.171,6m0-6A18.171,18.171,0,1,1,0,18.171,18.171,18.171,0,0,1,18.171,0Z", "transform", "translate(2158.593 601.656)", "fill", "#414546"], ["id", "Ellipse_28-2", "data-name", "Ellipse 28", "cx", "18.171", "cy", "18.171", "r", "18.171", "transform", "translate(2262.427 601.656)", "fill", "#fff"], ["id", "Ellipse_28_-_Outline-2", "data-name", "Ellipse 28 - Outline", "d", "M18.171,6A12.171,12.171,0,1,0,30.342,18.171,12.185,12.185,0,0,0,18.171,6m0-6A18.171,18.171,0,1,1,0,18.171,18.171,18.171,0,0,1,18.171,0Z", "transform", "translate(2262.427 601.656)", "fill", "#414546"], ["id", "Path_55-2", "data-name", "Path 55", "d", "M1703.724,626.5l10.1,11.311h11.715l2.02,9.291,15.754,15.35-3.636,5.655,14.138,8.079v18.178H1643.131l-6.867-12.522,10.1-2.424,8.079-8.887,7.271,3.232-3.636-11.311,11.311-10.5h7.271v-10.5l12.522-3.635,3.232-11.311Z", "transform", "translate(498.329 -172.375)", "fill", "#464646"], ["id", "Rectangle_37-2", "data-name", "Rectangle 37", "width", "222.38", "height", "21.632", "rx", "10.816", "transform", "translate(2117.924 515.127)", "fill", "#2f99db"], ["id", "Group_76", "data-name", "Group 76", "transform", "translate(228.935 -165.513)"], ["id", "Group_92", "data-name", "Group 92", 1, "wheel"], ["id", "Group_91", "data-name", "Group 91"], ["id", "Path_16", "data-name", "Path 16", "d", "M792,808.792l427.5-109.28s32.391-8.732,51.849-5.065,30.237,13.848,39.35,23.53,17.2,34.224,17.2,34.224L903.671,861.669s-36.289,8.134-53.182,5.005-31.283-8.134-42.232-24.714A151.347,151.347,0,0,1,792,808.792Z", "transform", "translate(212.065 -216.035)", "fill", "#f1533e"], ["id", "Path_17", "data-name", "Path 17", "d", "M0,115.244,427.5,5.964S459.888-2.767,479.346.9s30.237,13.848,39.35,23.53,17.2,34.224,17.2,34.224L111.67,168.121s-36.289,8.134-53.182,5.005-31.283-8.134-42.232-24.714A151.348,151.348,0,0,1,0,115.244Z", "transform", "translate(1143.99 313.513) rotate(45)", "fill", "#f1533e"], ["id", "Path_18", "data-name", "Path 18", "d", "M0,115.244,427.5,5.964S459.888-2.767,479.346.9s30.237,13.848,39.35,23.53,17.2,34.224,17.2,34.224L111.67,168.121s-36.289,8.134-53.182,5.005-31.283-8.134-42.232-24.714A151.348,151.348,0,0,1,0,115.244Z", "transform", "translate(1358.907 296.513) rotate(90)", "fill", "#f1533e"], ["id", "Path_19", "data-name", "Path 19", "d", "M0,115.244,427.5,5.964S459.888-2.767,479.346.9s30.237,13.848,39.35,23.53,17.2,34.224,17.2,34.224L111.67,168.121s-36.289,8.134-53.182,5.005-31.283-8.134-42.232-24.714A151.348,151.348,0,0,1,0,115.244Z", "transform", "matrix(-0.719, 0.695, -0.695, -0.719, 1525.317, 440.564)", "fill", "#f1533e"], ["id", "Group_89", "data-name", "Group 89", "transform", "translate(-8 3)"], ["id", "Group_90", "data-name", "Group 90"], ["id", "Mask_Group_1", "data-name", "Mask Group 1", "transform", "translate(1962.538 4728.461)", "clip-path", "url(#clip-path-2)"], ["id", "Ellipse_35", "data-name", "Ellipse 35", "cx", "191.322", "cy", "191.322", "r", "191.322", "transform", "translate(-873.777 -4358.178)", "fill", "#ce3423"], ["id", "Mask_Group_3", "data-name", "Mask Group 3", "transform", "translate(-2886.987 1243.986) rotate(90)", "clip-path", "url(#clip-path-2)"], ["id", "Ellipse_37", "data-name", "Ellipse 37", "cx", "191.322", "cy", "191.322", "r", "191.322", "transform", "translate(-873.777 -4358.178)", "fill", "#ce3423"], ["id", "Mask_Group_5", "data-name", "Mask Group 5", "transform", "matrix(0.695, 0.719, -0.719, 0.695, -1243.157, 3946.799)", "clip-path", "url(#clip-path-2)"], ["id", "Ellipse_39", "data-name", "Ellipse 39", "cx", "191.322", "cy", "191.322", "r", "191.322", "transform", "translate(-873.777 -4358.178)", "fill", "#ce3423"], ["id", "Mask_Group_4", "data-name", "Mask Group 4", "transform", "translate(-2149.155 -1902.434) rotate(135)", "clip-path", "url(#clip-path-2)"], ["id", "Ellipse_38", "data-name", "Ellipse 38", "cx", "191.322", "cy", "191.322", "r", "191.322", "transform", "translate(-873.777 -4358.178)", "fill", "#ce3423"], ["id", "Ellipse_23", "data-name", "Ellipse 23", "cx", "177.322", "cy", "177.322", "r", "177.322", "transform", "translate(1095.065 387.513)", "fill", "#3696da"], ["id", "Group_92", "data-name", "Group 92"], ["id", "Path_2913", "data-name", "Path 2913", "d", "M54.226,2a52.226,52.226,0,1,0,52.226,52.226A52.245,52.245,0,0,0,54.226,2ZM12.445,54.226A41.77,41.77,0,0,1,54.226,12.445a41.271,41.271,0,0,1,25.591,8.826L21.272,79.817A41.271,41.271,0,0,1,12.445,54.226ZM54.226,96.008a41.271,41.271,0,0,1-25.591-8.826L87.181,28.635a41.271,41.271,0,0,1,8.826,25.591A41.77,41.77,0,0,1,54.226,96.008Z", "transform", "translate(1217.565 510.013)", "fill", "#fff", "stroke", "#fff", "stroke-width", "2"], ["id", "Ellipse_32", "data-name", "Ellipse 32", "d", "M550,0h4.229l.253,0h.2l.236,0,.217,0c.074,0,.135,0,.2,0l.249,0,.2,0,.242,0,.211,0,.226,0,.227,0,.195,0,.259,0,.195,0,.235,0,.219,0,.212,0,.235,0,.206,0,.248,0,.208,0,.19,0,.193,0,.237,0h.025l.192,0,.214,0H560l.19,0,.2,0,.222,0,.221,0,.208,0h.069l.182,0,.194,0,.257,0,.193,0,.2,0,.248,0,.2,0h.074l.175,0,.194,0,.213,0,.241,0,.2,0,.078,0,.171,0,.19,0,.251.005.2,0,.2,0,.256.006.195,0,.086,0,.171,0,.193,0,.2,0,.137,0,.2,0,.2,0,.166,0,.193,0,.093,0,.169,0,.194.005.215.006.233.006.194.005.094,0,.169,0,.195.005.218.006.112,0,.125,0,.081,0,.121,0,.075,0,.172,0,.085,0,.11,0,.086,0,.173.005.069,0,.128,0,.075,0h.035l-.181,6Q559.956,6,550,6V0Zm30,.678c6.677.3,13.353.708,19.965,1.21l-.454,5.983q-9.842-.748-19.783-1.2L580,.678Zm29.931,2.044q6.871.628,13.691,1.4h0l.152.017h.011l.285.032.019,0,.115.013.078.009.1.012.165.019.055.006.149.017.047.005.191.022h0l.214.025h0q2.305.266,4.6.548l-.73,5.955q-9.793-1.2-19.7-2.107Zm29.8,3.422.1.014.067.009.1.014.1.014.084.012.179.025.031,0,.159.022.058.008.183.026h0q3.718.521,7.415,1.083h.007l.407.062.029,0,.178.027.024,0,.192.029.047.007.144.022.061.009.153.024.038.006.183.028.065.01.116.018.085.013.109.017.148.023.086.013.111.017.061.009.4.063.042.007.133.021.023,0,.444.07h.006q2.62.412,5.232.846h0l.441.073.034.006.128.021.045.007.225.038.059.01.1.017.089.015.087.015.178.03.013,0,.181.03.042.007,1.142.194-1.008,5.915q-9.727-1.658-19.576-3.022Zm29.605,4.808q8.557,1.6,17.012,3.417h.006l.142.031.024.005.421.091.033.007.126.027.049.01.383.083.073.016.093.02.113.025.091.02.149.033.062.014.13.028.056.012.38.083.029.006.232.051-1.287,5.86q-9.641-2.117-19.418-3.943Zm29.352,6.2c1.242.294,2.478.59,3.717.89h0l.2.048.009,0,.389.095.038.009.158.038.035.008.186.045.034.008.152.037.06.015.115.028.076.019.165.041.074.018.1.025.1.024.073.018.107.026.022.005.247.061.053.013.118.029.044.011.422.1.011,0,.147.036.007,0,.446.111.008,0q1.813.452,3.621.913l.022.006.141.036h0l.433.111.029.007.135.035.022.006.256.066.033.008.1.026.085.022.092.024.087.023.133.034.116.03.079.021.107.028.075.019.138.036.038.01.18.047.045.012.158.041.026.007c1.987.516,3.946,1.036,5.923,1.571l-1.566,5.792q-9.526-2.576-19.2-4.864l1.38-5.839Zm29.022,7.6q6.775,1.95,13.47,4.044l.017.005.56.175.049.015.115.036.06.019.36.113.067.021.1.031.077.024.092.029.155.049.083.026.095.03.08.025.123.039.045.014.172.055.058.018.125.04.058.019.135.043.043.014.18.057.025.008.157.05.043.014.168.054.009,0,.191.061.012,0,.176.056.023.008.178.057.008,0,.377.121.03.01,1.4.452L744.982,36.3q-9.385-3.035-18.935-5.785Zm28.612,9q6.382,2.18,12.683,4.49h0l.568.209.029.011.274.1.022.008.248.091.047.017.255.094.066.025.195.072.079.029.23.085.1.039.143.053.116.043.2.075.139.052.1.038.292.109.036.013.172.064.043.016c.924.345,1.851.694,2.772,1.043l-2.126,5.611q-9.227-3.5-18.633-6.711Zm28.139,10.4c6.227,2.479,12.358,5.04,18.454,7.708l-2.406,5.5q-9.036-3.955-18.267-7.631l2.219-5.574Zm27.582,11.8.481.221.008,0,.168.077.056.026.255.117.1.045.129.059.205.095.082.038.177.082.077.036.237.11.053.025.23.107.027.013.267.124.022.01q6.665,3.092,13.217,6.333l.022.011.259.128.035.017.226.112.043.021.232.115.08.04L828.9,64l.126.063.154.077.118.059.116.058.218.109.072.036.371.185-2.684,5.366q-8.82-4.411-17.851-8.548Zm26.938,13.185q4.1,2.139,8.153,4.34l.019.01.506.275.02.011.334.182h0l.167.091.03.016.287.157.059.032.463.253.078.043.2.112.111.061.13.071.1.058.191.105.114.063.124.068.132.072.161.088.126.07.109.06.2.108.1.057.138.076.1.053.2.113.093.052.171.095.1.053.183.1.081.045.22.122.063.035.185.1.067.037.228.127.056.031.212.118.034.019.238.133.053.03.244.136,0,0,.247.138.039.022.252.141.013.007.246.138.025.014.257.144.017.01.526.3.014.008,1.349.763-2.961,5.219q-8.578-4.867-17.385-9.464l2.776-5.319ZM865.2,83.708c1.566.926,3.144,1.868,4.7,2.808l.005,0,.5.3.018.011.3.185.028.017.47.286.048.029.461.281.058.035.249.152.065.04.141.086.069.042.231.141.078.048.211.129.094.058.126.077.1.063.179.11.118.073.113.069.166.1.117.072.134.082.1.059.2.121.092.057.155.1.093.057.185.114.087.054.211.13.05.031.186.116.066.041.219.136.058.036.2.122.043.027.228.142.051.032.238.148,0,0,.239.149.037.023.238.149.033.021.235.147.012.008.247.155.029.018.5.314.021.013.254.16,0,0,.525.33,0,0q1.714,1.08,3.418,2.171L879,99.24q-8.3-5.316-16.847-10.367l3.053-5.165Zm25.4,15.947q3.262,2.173,6.484,4.387l0,0,.253.174.012.008.247.17,0,0,.231.159.051.035.22.152.045.031.178.123.071.049.2.137.084.058.141.1.134.093.13.09.106.073.144.1.144.1.1.067.184.128.1.068.129.09.068.048.238.166.046.032.455.318.017.012q3.137,2.194,6.23,4.423l-3.508,4.868q-8-5.764-16.26-11.269Zm24.5,17.316q1.254.94,2.5,1.885l0,0,.5.378h0l.236.18.027.02.235.179h0l.23.176.029.022.221.168.042.032.45.344.039.03.223.171.024.018.217.167.021.016.221.17.042.032.221.17.023.018.208.16.035.027.216.167.046.035.444.343.041.032.219.17.031.024.215.166.017.013.228.177.029.023.231.179,0,0,.234.182.014.011.23.179.027.021.472.368.01.007q3.691,2.883,7.319,5.821l-3.777,4.662q-7.656-6.2-15.595-12.15Zm23.482,18.657.76.641.006.005.127.108.026.022.119.1.021.018.139.118,0,0,.127.108.064.054.063.053.08.068.046.039.084.072.037.031.443.377.012.01q2.022,1.722,4.023,3.462l.012.011.111.1h0l.349.3,0,0,.1.088.026.023.091.08.04.035.089.078.033.029.284.248.056.049.067.059.066.057.061.053.085.075.045.039.117.1.015.013.134.118.027.023.108.095.037.032.1.091.028.024.123.108.012.01.281.247,0,0,.136.12.007.006q3.136,2.765,6.212,5.567l-4.041,4.436q-7.284-6.636-14.872-13.026Zm22.373,19.987c.926.877,1.833,1.744,2.751,2.627l.012.012.118.114.018.017.114.11.019.018.263.253.015.014.113.109.029.028.1.095.034.033.1.094.034.033.094.091.055.054.1.1.057.056.065.063.068.066.053.051.073.071.045.044.079.077.027.026.3.291.018.018.1.095.018.018.1.1.007.007.438.427.007.007.109.106h0q4.417,4.316,8.709,8.724l-4.3,4.186q-6.871-7.056-14.065-13.874ZM982.1,176.893c2.376,2.541,4.708,5.09,7.022,7.674l.007.008.117.131.005.006.49.548.012.013q2.888,3.237,5.7,6.508l-4.549,3.913q-6.422-7.467-13.189-14.7l4.383-4.1Zm19.8,22.539q1.144,1.388,2.276,2.783l.006.007.08.1.034.042.067.082.044.055.059.073.077.095.027.033.114.14h0l.114.141.008.01.11.137,0,0q3.494,4.328,6.865,8.713l.014.019.1.125.014.018.217.283.022.029.08.1.046.06.054.071.054.071.044.058.065.085.024.032q.891,1.165,1.773,2.334l-4.789,3.614q-5.932-7.86-12.228-15.5Zm18.324,23.747c.772,1.071,1.534,2.137,2.3,3.213l.01.015.09.127.022.031.078.11.027.038.079.112.022.032.092.13.009.013.1.141.026.037.073.1.037.053.058.083.046.065.05.071.051.073.045.064.052.073.041.059.114.163.031.044.066.094.027.039.065.092.034.049.062.089.029.042.068.1.019.027.237.339.02.028.066.094.032.045.062.089.036.051.058.084.036.051.064.092.006.009.239.343.031.045.062.09.031.045.063.091.034.049.062.089.034.049.06.087.037.054.113.163.034.049.057.082.041.06.049.071.053.076.044.063.056.081.041.059.069.1.028.041.1.144.009.013.088.128.028.041.07.1.032.047.067.1.031.045.078.113.019.028.2.3h0l.1.145.013.019.089.13.012.018.094.137.006.009q2.344,3.433,4.626,6.911l-5.017,3.291q-5.4-8.232-11.186-16.254l4.867-3.51Zm16.727,24.9q.7,1.127,1.4,2.257l.006.01.075.122.013.021.214.348.024.039.046.075.048.079.034.056.059.1.029.047.068.111.021.035.078.128.012.02q2.482,4.057,4.867,8.153l0,0,.274.471,0,.005.08.138.025.043.064.11.025.044.061.1.028.048.061.105.027.046.077.133.021.037.069.12.043.074.04.069.05.087.031.054.054.094.025.043.063.11,0,.006q1.05,1.824,2.081,3.657l-5.229,2.942q-4.829-8.582-10.064-16.966Zm15.006,25.973.058.109.01.019.083.156.009.016.071.134.024.046.057.107.028.052.052.1.03.056.052.1.03.056.063.12.014.027.081.153.017.033.062.118.032.06.045.086.036.069.047.089.032.06.049.093.031.059.054.1.025.048.079.15.013.025.066.126.027.051.051.1.034.064.047.089.032.06.047.09.035.067.046.088.032.061.077.147.016.031.065.124.025.048.052.1.032.062.049.095.03.057.052.1.027.051.061.117.019.036.079.152.007.014.075.144.012.024.067.13.02.038.06.117.021.04.06.115.022.042.073.142,0,.006.165.32.006.011.073.141.016.032.067.13.012.023.071.138.01.019.327.639,0,.007.08.157v0l.08.157,0,.007c1.881,3.688,3.7,7.381,5.467,11.119l-5.422,2.568q-4.216-8.9-8.857-17.614ZM1065.105,301q4.013,9.023,7.592,18.22l.011.028.054.139.01.025.019.05-5.593,2.171q-3.565-9.184-7.575-18.2l5.482-2.439Zm11.191,27.828q1.668,4.628,3.224,9.295v0l.044.132.009.027.043.13.006.017.044.134.006.017.185.558.01.031.038.114.015.045.036.108.017.051.035.107.013.04.175.533.014.042.034.1.02.06.032.1.021.063.03.091.024.072.029.09.023.072.1.322.025.078.026.08.026.079.026.08.029.089.023.071.031.1.021.064.038.117.015.046.051.158.019.06.033.1.021.064.033.1.019.059.035.111.016.05.039.123.013.04.161.5,0,.011.049.154.008.026.046.144.008.026.047.147.007.021c.416,1.313.817,2.6,1.22,3.919l-5.738,1.754q-2.881-9.427-6.222-18.694Zm9.12,28.572c1.785,6.407,3.418,12.886,4.885,19.392l-5.853,1.319q-2.169-9.623-4.812-19.1Zm6.961,29.174c.96,4.822,1.829,9.649,2.611,14.52v.007l.027.171,0,.011c.029.181.056.349.084.53l.007.043.019.121.012.074.014.09.013.084.012.079.015.1.009.058.089.566,0,.01.023.145,0,.012q.24,1.544.467,3.092l-5.936.873q-1.437-9.77-3.358-19.409l5.885-1.172Zm4.739,29.617q.806,6.644,1.39,13.344v0l.012.138,0,.029.011.124,0,.05c0,.038.006.076.01.114l0,.052.01.112.007.089.012.136.009.106.006.069.009.108.005.061.01.118,0,.055.012.145,0,.022.045.547s0,0,0,0q.183,2.237.34,4.477l-5.985.421q-.693-9.859-1.877-19.6Zm2.481,29.887.011.253c0,.015,0,.029,0,.044,0,.035,0,.071,0,.106l0,.066c0,.035,0,.071,0,.106l.006.131c0,.025,0,.049,0,.074l0,.1,0,.066.006.138v.024c0,.062,0,.109.007.172v.033l.006.142c0,.012,0,.025,0,.037.169,4.094.275,8.186.317,12.306h0l0,.374h0c0,.187,0,.371,0,.558v.01c0,.062,0,.1,0,.166,0,.008,0,.017,0,.025,0,.125,0,.232,0,.357,0,.007,0,.014,0,.021,0,.062,0,.1,0,.161,0,.007,0,.014,0,.021,0,.125,0,.233,0,.358,0,.008,0,.015,0,.023,0,.063,0,.092,0,.154,0,.01,0,.02,0,.03,0,.125,0,.223,0,.348,0,.014,0,.028,0,.041,0,.031,0,.106,0,.137,0,.013,0,.027,0,.04,0,.125,0,.219,0,.344v.042c0,.031,0,.1,0,.131v.05c0,.125,0,.211,0,.336,0,.018,0,.035,0,.053v.123c0,.017,0,.033,0,.05V464h0v.166c0,.017,0,.034,0,.051v.116c0,.019,0,.039,0,.058,0,.047,0,.091,0,.138s0,.07,0,.105v.032q0,.571,0,1.142v.022c0,.029,0,.057,0,.086,0,.047,0,.121,0,.168l-6-.031L1094,464q0-8.866-.4-17.652Zm-5.777,29.82,6,.182c-.039,1.275-.083,2.536-.134,3.808,0,0,0,0,0,.007l-.006.163c0,.013,0,.025,0,.038,0,.047,0,.092-.006.139l0,.043c0,.047,0,.1-.006.144v.033l-.007.173c0,.017,0,.034,0,.051l-.005.121,0,.075,0,.094,0,.083,0,.087q0,.046,0,.092c0,.016,0,.053,0,.068l0,.1v.023q-.01.218-.019.436v.017q0,.07-.006.141v.022q0,.072-.006.143c0,.016,0-.007,0,.009q-.018.388-.036.775h0q-.119,2.5-.27,4.993v0q-.023.377-.046.754l0,.034-.008.121,0,.048c0,.039,0,.077-.007.116l0,.052-.007.111,0,.057c0,.065-.008.131-.013.2l0,.072-.005.08-.006.094,0,.073-.007.106c0,.022,0,.044,0,.065l-.007.113,0,.059-.01.152c0,.006,0,.012,0,.018-.008.123-.016.234-.024.358l0,.03-.01.149,0,.034-.011.164s0,0,0,0c-.114,1.681-.239,3.348-.374,5.024l-5.98-.484Q1093.519,485.787,1093.82,475.9Zm-2.01,29.475,5.966.635c-.213,2-.439,3.98-.682,5.975l0,.016-.019.16,0,.023-.02.163,0,.014-.043.352-.006.047-.015.12-.009.073-.012.1-.01.076-.012.093-.01.082-.01.084-.011.086-.008.062-.029.231,0,.025c-.005.042-.011.084-.016.126l0,.036-.016.126,0,.036-.017.131,0,.02q-.058.458-.118.916v0q-.262,2.013-.544,4.02v0l-.021.153h0c-.035.251-.071.5-.107.754l0,.026-.018.126-.006.042-.017.117-.007.051-.016.111-.009.061-.023.158-.015.1-.01.072-.015.1-.01.069-.015.1-.01.065-.017.116-.007.05-.021.14,0,.03C1095.592,523.044,1091.113,511.923,1091.81,505.374ZM351.572,31.116l1.862,5.7q-9.447,3.084-18.721,6.454c-2.017-5.651-.976-6.028-.886-6.061l.025-.009.272-.1.006,0Q342.776,33.988,351.572,31.116ZM380.308,22.5l1.582,5.788q-9.589,2.621-19.021,5.532L361.1,28.091q4.088-1.261,8.205-2.469l.018-.005.139-.041.008,0,.29-.085h.005l.13-.038.038-.011.123-.036.049-.014.206-.06.062-.018.1-.029.085-.025.082-.024.121-.035.069-.02.157-.046.061-.018.121-.035.064-.018.149-.043.029-.008.182-.053.037-.011.156-.045.032-.009.185-.053h0l.2-.057h0l.191-.055.01,0Q376.345,23.588,380.308,22.5Zm29.114-7.21,1.3,5.857q-9.7,2.157-19.259,4.606l-1.489-5.812c2.125-.544,4.263-1.08,6.4-1.6h0l.193-.047.016,0,.388-.095.032-.008.174-.042.016,0,.38-.092.056-.014.127-.031.063-.015.174-.042.051-.012.129-.031.077-.019.11-.027.07-.017.157-.038.09-.022.1-.024.087-.021.093-.022.089-.021.14-.034.116-.028.076-.018.106-.025.077-.018.094-.023.144-.034.111-.026.081-.019.1-.024.073-.017.174-.042.083-.02.1-.024.076-.018.1-.025.081-.019.093-.022.153-.036.108-.026.074-.017.1-.024.077-.018.156-.037.1-.023.1-.023.079-.019.1-.024.091-.021.1-.025.14-.033.09-.021.09-.021.095-.022.081-.019.162-.038.093-.022.085-.02.1-.024.078-.018.142-.033.05-.012.158-.037.074-.017.118-.027.066-.015.18-.042h0l.18-.042.06-.014.131-.03.057-.013.372-.086.042-.01.159-.037.031-.007.392-.09.017,0,.195-.045h0l.4-.092.013,0C407.123,15.809,408.275,15.55,409.422,15.294Zm29.43-5.815,1.024,5.912q-9.8,1.7-19.463,3.686L419.2,13.2q4.264-.878,8.554-1.7l.021,0,.414-.079.046-.009.108-.021.087-.016.09-.017.168-.032.052-.01.144-.027.05-.009.163-.031.027-.005.2-.038h0l.207-.039h0c3.092-.583,6.2-1.145,9.314-1.684Zm29.676-4.424.746,5.954q-9.872,1.237-19.626,2.769l-.931-5.927Q456.1,6.692,463.541,5.7l.034,0,.271-.036.018,0,.1-.013.1-.013.082-.011L464.3,5.6l.026,0,.195-.026.037,0,.189-.025h0c1.261-.166,2.516-.326,3.78-.485Zm29.838-3.038L498.836,8q-9.917.779-19.729,1.855l-.654-5.964c3.223-.353,6.446-.682,9.686-.988h0l.642-.06h.008l.425-.04h.009l.207-.019h0l.418-.038.024,0,.409-.037.032,0,.182-.017.021,0,.209-.019h0l.2-.018.029,0,.19-.017h.014l.2-.018.029,0,.175-.016.036,0,.394-.035.053,0,.164-.014.034,0,.2-.017.04,0,.158-.014.052,0,.189-.016h.008l.193-.017.052,0,.154-.013.044,0,.193-.017.043,0,.148-.013.069-.006.164-.014.024,0,.191-.016.056,0,.152-.013.045,0,.195-.016.031,0,.167-.014.052,0,.154-.013.047,0,.19-.016.048,0,.148-.012.057,0,.2-.016h0l.2-.016.045,0,.173-.014.024,0,.2-.016.036,0,.171-.014.038,0,.4-.032.038,0,.169-.014.037,0,.2-.016h.014l.188-.015.034,0,.41-.032.024,0,.2-.015h.009ZM528.314.354l.2,6q-9.94.325-19.787.948l-.378-5.988c2.765-.175,5.527-.332,8.3-.472h0l.639-.032.032,0,.408-.02.039,0,.172-.008.036,0,.19-.009.058,0,.144-.007.063,0,.175-.008.052,0,.151-.007.076,0,.121-.006.078,0,.174-.008.08,0L519.45.7l.083,0,.141-.007.115-.005.1,0,.1,0,.093,0,.123-.006.134-.006.1,0,.1,0,.093,0,.151-.007.1,0,.113,0,.089,0,.108,0,.121-.005.132-.006.1,0,.094,0,.095,0L521.9.595l.054,0L522.1.586l.061,0,.183-.008h.009l.2-.008.04,0,.184-.008h.018c1.832-.075,3.676-.143,5.513-.2ZM550,0V6q-5.8,0-11.579.1l-.105-6c3.007-.053,5.994-.085,9.012-.1h.223c.214,0,.435,0,.659,0H550Z", "transform", "translate(-331 77)", "fill", "#fff"], ["id", "Group_96", "data-name", "Group 96", "transform", "translate(-1703 2156.2)"], ["id", "Path_2930", "data-name", "Path 2930", "d", "M3805.85-1925.85,3781.5-1545.2h175.65l-25-380.65Z", "transform", "translate(-244)", "fill", "#b38011"], ["id", "Path_2931", "data-name", "Path 2931", "d", "M3802.5-1870.85l-3.35,53.65h140l-3.3-53.65Z", "transform", "translate(-243.825)", "fill", "#b38011"], ["id", "Path_2932", "data-name", "Path 2932", "d", "M3795.5-1762.15l-3.65,53.3h154.3l-3-53.3Z", "transform", "translate(-243.675)", "fill", "#b38011"], ["id", "Path_2933", "data-name", "Path 2933", "d", "M3788.15-1654.85l-3.65,55h169l-4-55Z", "transform", "translate(-243.675)", "fill", "#b38011"], ["id", "Group_86", "data-name", "Group 86", "transform", "translate(-1711 2148.2)"], ["id", "Path_2930-2", "data-name", "Path 2930", "d", "M3805.85-1925.85,3781.5-1545.2h175.65l-25-380.65Z", "transform", "translate(-244)", "fill", "#f9e44d"], ["id", "Path_2931-2", "data-name", "Path 2931", "d", "M3802.5-1870.85l-3.35,53.65h140l-3.3-53.65Z", "transform", "translate(-243.825)", "fill", "#e79f1c"], ["id", "Path_2932-2", "data-name", "Path 2932", "d", "M3795.5-1762.15l-3.65,53.3h154.3l-3-53.3Z", "transform", "translate(-243.675)", "fill", "#e79f1c"], ["id", "Path_2933-2", "data-name", "Path 2933", "d", "M3788.15-1654.85l-3.65,55h169l-4-55Z", "transform", "translate(-243.675)", "fill", "#e79f1c"], ["id", "Ellipse_33", "data-name", "Ellipse 33", "d", "M688,0h4.126l.3,0,.3,0,.455,0,.284,0,.3,0,.293,0,.3,0,.289,0,.3,0h.067l.737.006.254,0,.283,0,.291,0,.289,0,.3,0h.05l1.9.022h.01c2.98.039,5.918.092,8.889.162l-.141,6Q697.967,6,688,6V0Zm30,.527c5.393.19,10.722.428,16.083.719h.029l.232.013.073,0,.2.011.1.006.174.01.2.011.079,0q1.4.078,2.792.16l-.353,5.99q-9.877-.582-19.831-.933Zm29.959,1.587q3.906.277,7.8.589h.013l.29.023.023,0,.286.023.022,0,.61.05.052,0,.237.019.118.01.166.014.141.012.147.012.154.013.133.011.158.013.122.01.178.015.031,0L759.4,3l.036,0,.234.02.045,0,.229.02.053,0,.23.02.037,0,1.31.113.027,0,.237.021.045,0,.226.02.06.005.222.02.058.005.218.019.065.006.653.058.122.011.139.012.169.015.11.01.193.017.095.009.238.022.043,0q1.7.154,3.4.316l-.567,5.973Q757.474,8.8,747.539,8.1Zm29.879,2.655q9.976,1.068,19.861,2.368l-.782,5.949q-9.813-1.29-19.717-2.35ZM807.6,8.5q2.79.4,5.573.821h.008l.6.09.1.015.189.029.133.02.139.021.164.025.106.016.189.029.052.008c4.026.616,8.063,1.264,12.064,1.937l.01,0,.248.042.028,0,.169.028-1,5.916q-9.76-1.648-19.621-3.066Zm29.611,4.813.018,0,.261.047.059.011.226.041.081.015.219.04.076.014.276.051.145.026.135.025.168.031.108.02.18.033.093.017.2.036.053.01c5.8,1.069,11.6,2.2,17.339,3.393L855.63,23q-9.69-2.006-19.488-3.784Zm29.417,5.9q4.9,1.077,9.763,2.211l.01,0,.27.063.07.016.206.048.1.024.172.04.118.028.76.179.039.009.22.052.046.011q3.853.909,7.694,1.855l-1.435,5.826q-9.6-2.365-19.325-4.5ZM895.8,26.206q9.7,2.518,19.289,5.269l-1.654,5.768q-9.508-2.727-19.143-5.229ZM0,563.154l6,.017L6,564.5c0,6.165-5.93,9.365-5.977,4.7v-.037c0-.087,0-.175,0-.263v-.015q0-.284,0-.567c0-.019,0-.016,0-.035q0-.12,0-.241c0-.019,0-.031,0-.05l0-.268v0c0-.093,0-.187,0-.28v-.044c0-.077,0-.152,0-.229,0-.019,0-.049,0-.068v-.211c0-.019,0-.046,0-.065q0-.27,0-.539c0-.019,0-.056,0-.075q0-.1,0-.2c0-.019,0-.065,0-.084,0-.068,0-.137,0-.206,0-.019,0-.046,0-.065,0-.088,0-.175,0-.263,0-.038,0-.029,0-.067v-.291q0-.094,0-.187v-.082c0-.088,0-.177,0-.266v-.188q0-.073,0-.147v0Q0,563.658,0,563.154Zm1.04-29.98,5.987.4q-.655,9.817-.894,19.723l-6-.144c.128-5.322.345-10.611.651-15.9h0l.013-.224v-.005l.012-.2,0-.03.012-.208c0-.009,0-.018,0-.027,0-.056.007-.111.01-.168,0-.023,0-.047,0-.07l.009-.151.006-.1.007-.122q0-.052.006-.1l0-.08c.008-.136.017-.273.025-.409v-.011Q.969,534.259,1.042,533.174Zm2.952-29.85,5.949.781q-1.283,9.765-2.153,19.629l-5.977-.527c.586-6.652,1.316-13.3,2.181-19.884Zm4.855-29.6,5.887,1.16q-1.905,9.671-3.4,19.45L5.4,493.427l.018-.116.018-.116.015-.1.018-.116.008-.054.066-.424v-.008q.8-5.175,1.72-10.321l0-.021.074-.414.012-.066.021-.116.016-.087.029-.159.018-.1.016-.088.025-.136.01-.055.032-.179.012-.066.028-.155.006-.035.036-.2.007-.039.032-.174.005-.03.077-.422,0-.009C8.088,477.651,8.461,475.69,8.848,473.725Zm6.73-29.229,5.8,1.531q-2.516,9.537-4.634,19.194l-5.861-1.285q1.892-8.631,4.1-17.171l0-.008.109-.42.013-.051.03-.117.018-.068.045-.171.027-.1.02-.078.034-.131.015-.058.049-.186.01-.037.046-.176.006-.022.169-.642Zm8.559-28.748,5.694,1.891Q26.72,427.008,24,436.507l-5.768-1.652q2.754-9.614,5.906-19.106Zm10.327-28.162,5.567,2.237q-3.684,9.169-6.991,18.475l-5.654-2.008q.623-1.754,1.26-3.5l.019-.053.133-.364.028-.077.033-.091.046-.125.028-.078.054-.148.023-.062.05-.138.018-.048.066-.181.016-.044.055-.151.016-.044.142-.385.009-.026c1.1-2.979,2.218-5.927,3.375-8.884l.007-.018.073-.187,0-.012.075-.191.015-.038.057-.145.023-.058.068-.173.021-.054.046-.117.036-.091.033-.084.073-.185.021-.052.052-.131.007-.017Q33.912,388.96,34.464,387.586Zm12.02-27.481,5.423,2.568q-4.233,8.938-8.1,18.022l-5.521-2.349q.547-1.286,1.1-2.569l.01-.022.054-.126.02-.046.077-.177.039-.089.036-.084.053-.122.021-.048.082-.188,0-.009.085-.2v0q3.186-7.322,6.615-14.563Zm13.632-26.718,5.263,2.882q-4.753,8.68-9.153,17.515l-5.371-2.675.413-.827.017-.034.107-.215.034-.067.121-.242.029-.057.092-.182.055-.109.065-.128.107-.213.053-.105.075-.149.042-.082.08-.159v0l.186-.368.02-.039.089-.176.017-.033.288-.568,0-.009c.706-1.388,1.411-2.761,2.13-4.144l.011-.02.292-.56.017-.033.093-.178.015-.029.184-.352.014-.026.085-.162.04-.076.079-.15.045-.086.129-.245.056-.107.068-.129.072-.137.077-.146.089-.17.053-.1.086-.164.041-.077.126-.238.03-.057.106-.2.031-.059.273-.514.016-.03Q58.543,336.26,60.117,333.387ZM75.272,307.5l5.09,3.177q-5.245,8.4-10.151,16.965L65,324.661q3.488-6.089,7.146-12.1l0,0,.484-.794,0-.008.322-.526.007-.011Q74.114,309.358,75.272,307.5ZM91.86,282.508l4.906,3.454q-5.706,8.1-11.089,16.378l-5.029-3.272c.429-.659.844-1.294,1.275-1.951l0-.006.343-.522.038-.057.1-.145.057-.086.12-.182.094-.142.073-.11.088-.133.06-.091.146-.221.021-.031.135-.2.045-.067.124-.186.034-.051.158-.237.02-.03.144-.217.025-.038.331-.5.013-.019.511-.765,0-.005q1.128-1.685,2.27-3.363v0q.435-.64.873-1.279l.015-.022.34-.5.02-.03.144-.21.031-.045.162-.236.017-.025.141-.206.047-.068.127-.184.034-.049.152-.22.055-.08.105-.152.06-.087.12-.174.079-.114.1-.142.077-.111.075-.109.31-.446.051-.073.1-.143.042-.06.349-.5.014-.02c.452-.647.892-1.276,1.347-1.921Zm17.928-24.052,4.713,3.713q-6.138,7.792-11.968,15.759l-4.843-3.543Q103.582,266.333,109.788,258.456Zm19.177-23.071,4.513,3.954q-6.541,7.466-12.788,15.115l-4.647-3.8.007-.008.172-.21.053-.065.128-.156.059-.072.169-.207.03-.037.144-.176.064-.079.125-.153.053-.064.172-.209.043-.052.135-.164.058-.071.133-.162.048-.059.171-.207.053-.064.125-.151.063-.076.145-.175.045-.054.158-.191.063-.076.123-.149.056-.068.171-.206.047-.056.132-.159.066-.079.121-.146.057-.069.171-.2.051-.062.131-.158.059-.071.153-.184.023-.028.176-.21.057-.069.129-.154.057-.068.175-.209.021-.025.157-.187.061-.072.125-.149.059-.071.174-.208.037-.044.141-.168.06-.071.14-.167.041-.049.175-.208.054-.064.131-.156.055-.065.163-.194.021-.025.177-.209.054-.064.129-.152.06-.071.172-.2.046-.054.135-.159.067-.079.124-.146.057-.067.17-.2.063-.074.122-.143.068-.08.125-.147.059-.07.161-.19.08-.093.1-.113.09-.105.11-.129.121-.141.1-.118.09-.106.089-.1.094-.109.055-.064.213-.248.049-.057.119-.139.042-.049.415-.482.008-.009q1.678-1.95,3.375-3.887ZM149.3,213.333l4.308,4.177q-6.912,7.129-13.545,14.445l-4.445-4.03Q142.313,220.535,149.3,213.333Zm21.4-21.014,4.1,4.383q-7.255,6.783-14.245,13.758l-4.238-4.247.014-.014.2-.2.015-.015Q163.492,199.06,170.7,192.319Zm22.4-19.956,3.884,4.573q-7.571,6.432-14.892,13.06l-4.027-4.448.214-.194.036-.033.187-.169.035-.032.213-.192.042-.038.156-.141.088-.079.12-.109.09-.081.154-.139.151-.136.07-.063.137-.123.043-.039q6.153-5.529,12.485-10.926l.021-.018.153-.13.055-.046.435-.37.1-.082.053-.045ZM216.4,153.479l3.669,4.748q-7.863,6.076-15.488,12.351l-3.813-4.633,1.072-.88.055-.045.139-.114.08-.065.123-.1.19-.155.1-.08.123-.1.093-.076.152-.124.058-.047.218-.178.041-.033.187-.153.05-.04.2-.159.028-.023.461-.375.034-.028.214-.174.013-.011.466-.378.035-.028.206-.167.023-.019.462-.373.041-.033.194-.156.037-.03.454-.366.055-.044.165-.133.07-.056.19-.153.03-.024.215-.172.072-.058.151-.121.077-.062.145-.116.131-.1.145-.116.116-.093.094-.075.126-.1.077-.061.478-.381.036-.029.162-.129.029-.023c2.5-1.99,4.99-3.944,7.525-5.9Zm24.146-17.8L244,140.588q-8.13,5.716-16.036,11.637l-3.6-4.8c2.128-1.593,4.237-3.153,6.39-4.725l.032-.023.173-.126.024-.018.515-.375.072-.053.141-.1.073-.053.465-.338.092-.067.127-.092.1-.073.119-.086.148-.107.14-.1.145-.1.1-.071.13-.094.1-.072.163-.118.08-.058.2-.145.079-.057.153-.111.083-.06.172-.124.058-.042.229-.165.05-.036.181-.13.07-.05.185-.133.047-.034.235-.169.034-.025.2-.142.064-.046.181-.13.056-.04.465-.333.066-.047.178-.127.057-.041.473-.337.046-.033.2-.139.05-.035.483-.344.022-.016.216-.153.046-.032.219-.156.018-.013.25-.177,0,0,.235-.167.038-.027.224-.158.016-.012.495-.349.03-.021.221-.156.026-.019.494-.347Zm24.914-16.709,3.232,5.055q-8.375,5.355-16.539,10.917l-3.378-4.959q8.242-5.615,16.685-11.013Zm25.616-15.612,3.012,5.189q-8.6,4.991-17,10.194l-3.159-5.1q4.367-2.7,8.787-5.353l.005,0,.527-.315.029-.017.211-.126.078-.047.169-.1.082-.049.2-.117.135-.08.136-.081.136-.081.089-.053.155-.092.062-.037.79-.469,0,0c1.851-1.1,3.69-2.176,5.555-3.259Zm26.255-14.511,2.792,5.311q-8.8,4.627-17.419,9.468L299.769,98.4Q308.457,93.515,317.335,88.848ZM344.17,75.439l2.571,5.421q-8.987,4.263-17.8,8.742l-2.718-5.349q.972-.494,1.946-.985h0l.242-.122.1-.05.144-.073.128-.064.1-.05.585-.294.009,0q7.078-3.553,14.263-6.966l.008,0Zm27.36-12.306,2.351,5.52q-9.155,3.9-18.146,8.015l-2.5-5.455q5.238-2.4,10.531-4.723l.016-.007.24-.105.073-.032.194-.085.083-.036.193-.084.128-.056.186-.081.139-.061.114-.05.156-.068.086-.038.174-.076.033-.014C367.574,64.828,369.528,63.986,371.53,63.134Zm27.831-11.2,2.13,5.609q-9.305,3.533-18.457,7.288l-2.277-5.551.068-.028.033-.013.606-.248.094-.038.151-.062.115-.047.143-.058.137-.056.116-.047.25-.1.1-.039.173-.07.105-.043.164-.067.1-.041.208-.085.05-.02.556-.225.031-.013.251-.1.035-.014Q391.748,54.822,399.361,51.931Zm28.25-10.1,1.91,5.688q-9.439,3.169-18.736,6.561l-2.057-5.636Q418.1,45.023,427.611,41.831Zm28.613-9,1.69,5.757q-9.554,2.8-18.975,5.833L437.1,38.712l.765-.245.072-.023.16-.051.119-.038.139-.044.159-.051.1-.032.235-.075.036-.012.29-.093.006,0,.278-.089.036-.011.262-.083.025-.008q4.006-1.272,8.036-2.5l.008,0,.283-.087.02-.006.887-.27.007,0,.275-.083.045-.014.246-.075.047-.014.269-.081.014,0,.582-.176.046-.014.234-.071.068-.021.225-.068.061-.018.27-.081.01,0,.3-.089.013,0,.266-.08.066-.02.223-.067.063-.019.236-.071.051-.015.577-.172.032-.01.255-.076.052-.015.235-.07.058-.017.271-.08.008,0,.6-.177h0l.285-.084.028-.008Zm28.936-7.9,1.471,5.817q-9.653,2.44-19.183,5.107l-1.617-5.778q3.29-.92,6.595-1.814l.053-.014.225-.061.078-.021.206-.055.084-.023.273-.074.112-.03.15-.04.179-.048.088-.024.192-.052.063-.017.215-.058.014,0c3.6-.963,7.179-1.9,10.8-2.811Zm29.215-6.8L515.627,24q-9.737,2.077-19.36,4.382l-1.4-5.835,1.674-.4.072-.017.179-.042.107-.025.157-.037.139-.033.135-.032.567-.134.017,0,.281-.066.023-.005.277-.065.021-.005Q506.409,19.829,514.375,18.129Zm29.449-5.714,1.034,5.91q-9.807,1.716-19.508,3.661L524.172,16.1l.055-.011.192-.038.1-.02L524.7,16l.12-.024.166-.033.27-.054.108-.022.187-.037.088-.017.188-.037.085-.017.2-.039.07-.014.205-.041.049-.01.978-.192.033-.006.23-.045.035-.007.239-.047.01,0,1.289-.251h0l.255-.049.009,0,1.546-.3.015,0,1.541-.293.018,0,.25-.047h.007l1.555-.292h0l.253-.047.014,0,1.274-.237.03-.005.232-.043.036-.007.238-.044.013,0,1.282-.235.023,0,.245-.045.014,0c1.913-.349,3.8-.687,5.723-1.022Zm29.642-4.628.817,5.944q-9.862,1.356-19.628,2.942L553.7,10.75Q560.76,9.6,567.877,8.575l.03,0,.261-.038.059-.008.228-.033.086-.012.211-.03.083-.012.222-.032.176-.025.171-.024.18-.026.092-.013.205-.029.068-.01.225-.032.029,0c1.083-.153,2.179-.306,3.264-.455Zm29.8-3.547.6,5.97q-9.912,1-19.735,2.229l-.745-5.954c2.625-.329,5.226-.642,7.86-.946h.008l.262-.03h0l.756-.087.053-.006.179-.021.113-.013.159-.018.141-.016.141-.016.159-.018.126-.014.21-.024.072-.008.913-.1h.013Q598.9,4.679,603.262,4.239Zm29.89-2.472.387,5.988q-9.942.643-19.8,1.519l-.53-5.977Q623.139,2.416,633.153,1.768ZM663.114.362l.175,6q-9.957.29-19.841.813l-.317-5.992q4.349-.23,8.713-.415h.032l.269-.011.049,0,.25-.01.061,0,.246-.01.059,0,.248-.01.057,0,.6-.024.1,0L654,.677l.131-.005.16-.006.144-.006.152-.006.143-.006.148-.006.153-.006.122,0,.178-.007.064,0,.761-.029h.011l.237-.009.051,0,.231-.009.051,0,.235-.009.044,0c2.042-.074,4.048-.14,6.094-.2ZM688,0V6q-7.408,0-14.778.129l-.1-6,.187,0,.807-.013h.02l.255,0h.018l.263,0h.008c2.77-.043,5.527-.073,8.3-.089l.284,0h.014l.817,0h.829c.191,0,.366,0,.559,0H688Z", "transform", "translate(2083)", "fill", "#fff"], ["id", "Group_103", "data-name", "Group 103", "transform", "translate(231.5 -166)", "opacity", "0.25"], ["id", "Path_43", "data-name", "Path 43", "d", "M1643,919.486l25.717,12.82v11.282l12.308-11.282,14.872,5.128,2.564,9.744,12.82-9.744,10.256,12.308,14.359-2.564,7.179,15.9,14.359,17.949H1768.2l5.641,9.744-5.641,16.41,8.718,10.256-3.077,12.821-8.205,6.667,8.205,9.231-8.205,4.615H1660Z", "transform", "translate(341.002 -203.852)", "fill", "#1c1c1c"], ["id", "Path_45", "data-name", "Path 45", "d", "M1632.306,916.409l36.4,15.4v11.438l12.371-11.437,14.939,4.435,2.442,10.971,12.263-9.57,10.5,11.2,15.182-1.634-5.128,18.941,5.128,15.385h-24.615l7.179,14.872-10.256,9.231,6.667,22.051-13.846,10.256-3.077,11.795s-39.487-7.179-41.026-11.795S1632.306,916.409,1632.306,916.409Z", "transform", "translate(341.002 -203.852)", "fill", "#1c1c1c"], ["id", "Rectangle_36", "data-name", "Rectangle 36", "width", "82", "height", "34", "transform", "translate(1902.002 752.148)", "fill", "#1c1c1c"], ["id", "Rectangle_35", "data-name", "Rectangle 35", "width", "20", "height", "55", "transform", "translate(1818.002 669.148)", "fill", "#1c1c1c"], ["id", "Path_41", "data-name", "Path 41", "d", "M1541.026,873l-28.718,14.18v33.333h18.974V895.9l9.744-4.615Z", "transform", "translate(341.002 -203.852)", "fill", "#1c1c1c"], ["id", "Path_40", "data-name", "Path 40", "d", "M1345.128,809.231h-22.051s-6.667-2.03-6.667-8.205,6.667-9.744,6.667-9.744h89.231s30.256,1.539,35.9,4.1,4.113,4.678,5.128,10.769,0,109.744,0,109.744H1345.128Z", "transform", "translate(341.002 -203.852)", "fill", "#1c1c1c"], ["id", "Rectangle_34", "data-name", "Rectangle 34", "width", "78", "height", "78", "transform", "translate(1702.002 608.148)", "fill", "#1c1c1c"], ["id", "Rectangle_33", "data-name", "Rectangle 33", "width", "254", "height", "75", "rx", "15", "transform", "translate(1655.002 708.148)", "fill", "#1c1c1c"], ["id", "Ellipse_25", "data-name", "Ellipse 25", "cx", "28", "cy", "28", "r", "28", "transform", "translate(1651.002 783.148)", "fill", "#1c1c1c"], ["id", "Ellipse_26", "data-name", "Ellipse 26", "cx", "28", "cy", "28", "r", "28", "transform", "translate(1858.002 783.148)", "fill", "#1c1c1c"], ["id", "Rectangle_32", "data-name", "Rectangle 32", "d", "M38,10a28,28,0,0,0,0,56H245a28,28,0,0,0,0-56H38M38,0H245a38,38,0,0,1,0,76H38A38,38,0,0,1,38,0Z", "transform", "translate(1641.002 773.148)", "fill", "#1c1c1c"], ["id", "Path_42", "data-name", "Path 42", "d", "M1631.281,860.512h-26.154l35.385,191.795h72.308l-32.308-25.641Z", "transform", "translate(341.002 -203.852)", "fill", "#1c1c1c"], ["id", "Group_73", "data-name", "Group 73", "transform", "translate(225.5 -172)"], ["id", "Path_43-2", "data-name", "Path 43", "d", "M1643,919.486l25.717,12.82v11.282l12.308-11.282,14.872,5.128,2.564,9.744,12.82-9.744,10.256,12.308,14.359-2.564,7.179,15.9,14.359,17.949H1768.2l5.641,9.744-5.641,16.41,8.718,10.256-3.077,12.821-8.205,6.667,8.205,9.231-8.205,4.615H1660Z", "transform", "translate(341.002 -203.852)", "fill", "#464646"], ["id", "Path_45-2", "data-name", "Path 45", "d", "M1632.306,916.409l36.4,15.4v11.438l12.371-11.437,14.939,4.435,2.442,10.971,12.263-9.57,10.5,11.2,15.182-1.634-5.128,18.941,5.128,15.385h-24.615l7.179,14.872-10.256,9.231,6.667,22.051-13.846,10.256-3.077,11.795s-39.487-7.179-41.026-11.795S1632.306,916.409,1632.306,916.409Z", "transform", "translate(341.002 -203.852)", "fill", "#1c1c1c"], ["id", "Rectangle_36-2", "data-name", "Rectangle 36", "width", "82", "height", "34", "transform", "translate(1902.002 752.148)", "fill", "#464646"], ["id", "Rectangle_35-2", "data-name", "Rectangle 35", "width", "20", "height", "55", "transform", "translate(1818.002 669.148)", "fill", "#1c1c1c"], ["id", "Path_41-2", "data-name", "Path 41", "d", "M1541.026,873l-28.718,14.18v33.333h18.974V895.9l9.744-4.615Z", "transform", "translate(341.002 -203.852)", "fill", "#1c1c1c"], ["id", "Path_40-2", "data-name", "Path 40", "d", "M1345.128,809.231h-22.051s-6.667-2.03-6.667-8.205,6.667-9.744,6.667-9.744h89.231s30.256,1.539,35.9,4.1,4.113,4.678,5.128,10.769,0,109.744,0,109.744H1345.128Z", "transform", "translate(341.002 -203.852)", "fill", "#1c1c1c"], ["id", "Rectangle_34-2", "data-name", "Rectangle 34", "width", "78", "height", "78", "transform", "translate(1702.002 608.148)", "fill", "#3696da"], ["id", "Rectangle_33-2", "data-name", "Rectangle 33", "width", "254", "height", "75", "rx", "15", "transform", "translate(1655.002 708.148)", "fill", "#f1533e"], ["id", "Ellipse_25-2", "data-name", "Ellipse 25", "cx", "28", "cy", "28", "r", "28", "transform", "translate(1651.002 783.148)", "fill", "#1c1c1c"], ["id", "Ellipse_26-2", "data-name", "Ellipse 26", "cx", "28", "cy", "28", "r", "28", "transform", "translate(1858.002 783.148)", "fill", "#1c1c1c"], ["id", "Rectangle_32-2", "data-name", "Rectangle 32", "d", "M38,10a28,28,0,0,0,0,56H245a28,28,0,0,0,0-56H38M38,0H245a38,38,0,0,1,0,76H38A38,38,0,0,1,38,0Z", "transform", "translate(1641.002 773.148)", "fill", "#707070"], ["id", "Path_42-2", "data-name", "Path 42", "d", "M1631.281,860.512h-26.154l35.385,191.795h72.308l-32.308-25.641Z", "transform", "translate(341.002 -203.852)", "fill", "#f1533e"], ["id", "Group_78", "data-name", "Group 78", "transform", "translate(118.5 -172)"], ["id", "Rectangle_3", "data-name", "Rectangle 3", "width", "111", "height", "31", "rx", "6", "transform", "translate(354 675.872)", "fill", "#fff"], ["id", "Rectangle_4", "data-name", "Rectangle 4", "width", "4", "height", "11", "transform", "translate(366 675.872)", "fill", "#1c1c1c"], ["id", "Rectangle_5", "data-name", "Rectangle 5", "width", "4", "height", "11", "transform", "translate(378 675.872)", "fill", "#1c1c1c"], ["id", "Rectangle_6", "data-name", "Rectangle 6", "width", "4", "height", "11", "transform", "translate(390 675.872)", "fill", "#1c1c1c"], ["id", "Rectangle_7", "data-name", "Rectangle 7", "width", "4", "height", "11", "transform", "translate(402 675.872)", "fill", "#1c1c1c"], ["id", "Rectangle_8", "data-name", "Rectangle 8", "width", "4", "height", "11", "transform", "translate(414 675.872)", "fill", "#1c1c1c"], ["id", "Rectangle_9", "data-name", "Rectangle 9", "width", "4", "height", "11", "transform", "translate(426 675.872)", "fill", "#1c1c1c"], ["id", "Rectangle_10", "data-name", "Rectangle 10", "width", "4", "height", "11", "transform", "translate(438 675.872)", "fill", "#1c1c1c"], ["id", "Rectangle_11", "data-name", "Rectangle 11", "width", "4", "height", "11", "transform", "translate(450 675.872)", "fill", "#1c1c1c"], ["id", "Path_1", "data-name", "Path 1", "d", "M294.08,903.017s.038,7.284-7.671,7.284H152.992s-22.311-.637-25.817,15.937-7.012,36.017-7.012,36.017-2.55,13.068,11.793,15.937c.319-.319,248.612,0,248.612,0s9.243.638,12.112-12.749.956-57.053-3.187-72.671-15.915-32.415-15.915-32.415a9.41,9.41,0,0,0-6.4-3.284c-4.144-.319-62.153,0-62.153,0s-6.375.319-6.693,8.606S294.08,903.017,294.08,903.017Z", "transform", "translate(187 -216.128)", "fill", "#d5341f"], ["id", "Path_2", "data-name", "Path 2", "d", "M305.851,864.728h61.918s14.9,16.307,16.6,51.535.92,46.648.92,46.648.215,6.3-5.447,6.3H354.378s-9.241,1.32-13.2-11.127-7.544-24.518-7.544-24.518-3.263-10.939-16.277-16.408-16.785-8.11-14.9-23.764S305.851,864.728,305.851,864.728Z", "transform", "translate(188 -215.555)", "fill", "#3696da"], ["id", "Rectangle_2", "data-name", "Rectangle 2", "width", "91", "height", "24", "transform", "translate(453 760.872)"], ["id", "Rectangle_12", "data-name", "Rectangle 12", "width", "35", "height", "5", "rx", "1", "transform", "translate(336 701.872)", "fill", "#fff"], ["id", "Rectangle_17", "data-name", "Rectangle 17", "width", "35", "height", "5", "rx", "1", "transform", "translate(376 701.872)", "fill", "#fff"], ["id", "Rectangle_20", "data-name", "Rectangle 20", "width", "35", "height", "5", "rx", "1", "transform", "translate(416 701.872)", "fill", "#fff"], ["id", "Rectangle_13", "data-name", "Rectangle 13", "width", "35", "height", "5", "rx", "1", "transform", "translate(336 711.872)", "fill", "#fff"], ["id", "Rectangle_16", "data-name", "Rectangle 16", "width", "35", "height", "5", "rx", "1", "transform", "translate(376 711.872)", "fill", "#fff"], ["id", "Rectangle_19", "data-name", "Rectangle 19", "width", "35", "height", "5", "rx", "1", "transform", "translate(416 711.872)", "fill", "#fff"], ["id", "Rectangle_14", "data-name", "Rectangle 14", "width", "35", "height", "5", "rx", "1", "transform", "translate(336 721.872)", "fill", "#fff"], ["id", "Rectangle_15", "data-name", "Rectangle 15", "width", "35", "height", "5", "rx", "1", "transform", "translate(376 721.872)", "fill", "#fff"], ["id", "Path_2946", "data-name", "Path 2946", "d", "M519.133,657.2s-3.945-6.312-10.651-5.128-7.1,9.467-7.1,9.467,3.55,35.9,4.339,41.815,6.706,18.54,6.706,18.54L592.9,906.117l15.385-4.734s-50.1-184.221-52.466-190.533-4.734-16.568-11.44-24.458S519.133,657.2,519.133,657.2Z", "transform", "translate(184 -208.128)", "opacity", "0.25"], ["id", "Rectangle_18", "data-name", "Rectangle 18", "width", "35", "height", "5", "rx", "1", "transform", "translate(416 721.872)", "fill", "#fff"], ["id", "Path_6", "data-name", "Path 6", "d", "M504.537,660.75l-56.8,33.531,5.917,8.284,56.8-33.925Z", "transform", "translate(189 -216.128)", "fill", "#fff"], ["id", "Path_5", "data-name", "Path 5", "d", "M451.677,689.547l7.89,13.018L379.882,757l-13.807-14.6Z", "transform", "translate(189 -216.128)", "fill", "#da5241"], ["id", "Path_4", "data-name", "Path 4", "d", "M509.179,690.639,359.885,742.528s-23.578,8.466-37.6,28.9-14.9,24.51-18.237,40.9-1.821,49.461-1.821,49.461h37.627s-1.821-28.524,5.462-43.393,15.779-30.344,31.862-39.144,111.667-52.5,115.005-54.317,21.848-13.655,21.848-13.655Z", "transform", "translate(189 -214.128)"], ["id", "Path_9", "data-name", "Path 9", "d", "M616.693,872.287,592.651,826.07l6.536-2.568L624.4,872.287Z", "transform", "translate(189 -218.128)", "fill", "#fffdf8"], ["id", "Path_8", "data-name", "Path 8", "d", "M563.078,744.617l43.077,81.539-14.872,7.692-42.564-83.59Z", "transform", "translate(189 -218.128)", "fill", "#da5243"], ["id", "Rectangle_22", "data-name", "Rectangle 22", "width", "15", "height", "25", "transform", "translate(802 650.872)"], ["id", "Path_7", "data-name", "Path 7", "d", "M519.133,657.2s-3.945-6.312-10.651-5.128-7.1,9.467-7.1,9.467,3.55,35.9,4.339,41.815,6.706,18.54,6.706,18.54L592.9,906.117l15.385-4.734s-50.1-184.221-52.466-190.533-4.734-16.568-11.44-24.458S519.133,657.2,519.133,657.2Z", "transform", "translate(189 -214.128)", "fill", "#3696da"], ["id", "Rectangle_41", "data-name", "Rectangle 41", "width", "48", "height", "100.296", "transform", "translate(771 672.576)", "fill", "#b08c22"], ["id", "Path_10", "data-name", "Path 10", "d", "M613.809,1055.624l-9.467-13.412V977.123h18.146v65.089Z", "transform", "translate(186.659 -217.424)", "fill", "#fff"], ["id", "Rectangle_23", "data-name", "Rectangle 23", "width", "48", "height", "99", "transform", "translate(776 672.576)", "fill", "#f1533e"], ["id", "Path_2914", "data-name", "Path 2914", "transform", "translate(368.5 775)"], ["d", "M 227 63.99999618530273 L 33 63.99999618530273 C 28.81413269042969 63.99999618530273 24.75456619262695 63.18062973022461 20.93400001525879 61.564697265625 C 17.24279975891113 60.0034294128418 13.92733287811279 57.76792907714844 11.0797004699707 54.92029571533203 C 8.232067108154297 52.07266235351562 5.996566772460938 48.75719451904297 4.435299873352051 45.06599807739258 C 2.819366693496704 41.24542999267578 2 37.18586349487305 2 32.99999618530273 C 2 28.81412887573242 2.819366693496704 24.75456237792969 4.435299873352051 20.93399620056152 C 5.996566772460938 17.24279594421387 8.232067108154297 13.92733001708984 11.0797004699707 11.07969665527344 C 13.92733287811279 8.232063293457031 17.24279975891113 5.996562957763672 20.93400001525879 4.435296535491943 C 24.75456619262695 2.819363117218018 28.81413269042969 1.999996423721313 33 1.999996423721313 L 33.08706665039062 1.999996423721313 L 33.17380142211914 1.992429733276367 L 130.0680847167969 -6.459805488586426 L 226.8259735107422 1.992396354675293 L 226.9127960205078 1.999996423721313 L 227 1.999996423721313 C 231.1858673095703 1.999996423721313 235.2454376220703 2.819363117218018 239.0659942626953 4.435296535491943 C 242.7572021484375 5.996562957763672 246.0726623535156 8.232063293457031 248.9203033447266 11.07969665527344 C 251.7679290771484 13.92733001708984 254.0034332275391 17.24279594421387 255.564697265625 20.93399620056152 C 257.1806335449219 24.75456237792969 258 28.81412887573242 258 32.99999618530273 C 258 37.18586349487305 257.1806335449219 41.24542999267578 255.564697265625 45.06599807739258 C 254.0034332275391 48.75719451904297 251.7679290771484 52.07266235351562 248.9203033447266 54.92029571533203 C 246.0726623535156 57.76792907714844 242.7572021484375 60.0034294128418 239.0659942626953 61.564697265625 C 235.2454376220703 63.18062973022461 231.1858673095703 63.99999618530273 227 63.99999618530273 Z", "stroke", "none"], ["d", "M 130.0678558349609 -4.452213287353516 L 33.17414855957031 4.000011444091797 L 33 4.000011444091797 C 29.083251953125 4.000011444091797 25.28582763671875 4.766223907470703 21.71310424804688 6.277332305908203 C 18.26028442382812 7.737762451171875 15.15849304199219 9.829296112060547 12.493896484375 12.49390411376953 C 9.82928466796875 15.15851211547852 7.737747192382812 18.26029586791992 6.277328491210938 21.71311950683594 C 4.766220092773438 25.28583145141602 4 29.08326148986816 4 33.0000114440918 C 4 36.91676330566406 4.766220092773438 40.71418762207031 6.277328491210938 44.28690338134766 C 7.737747192382812 47.73972320556641 9.82928466796875 50.84151077270508 12.493896484375 53.50611877441406 C 15.15849304199219 56.17072677612305 18.26028442382812 58.26226043701172 21.71310424804688 59.72269058227539 C 25.28582763671875 61.23379516601562 29.083251953125 62.0000114440918 33 62.0000114440918 L 227 62.0000114440918 C 230.916748046875 62.0000114440918 234.7141723632812 61.23379516601562 238.2868957519531 59.72269058227539 C 241.7397155761719 58.26226043701172 244.8415069580078 56.17072677612305 247.506103515625 53.50611877441406 C 250.1707153320312 50.84151077270508 252.2622528076172 47.73972320556641 253.7226715087891 44.28690338134766 C 255.2337799072266 40.71418762207031 256 36.91676330566406 256 33.0000114440918 C 256 29.08326148986816 255.2337799072266 25.28583145141602 253.7226715087891 21.71311950683594 C 252.2622528076172 18.26029586791992 250.1707153320312 15.15851211547852 247.506103515625 12.49390411376953 C 244.8415069580078 9.829296112060547 241.7397155761719 7.737762451171875 238.2868957519531 6.277332305908203 C 234.7141723632812 4.766223907470703 230.916748046875 4.000011444091797 227 4.000011444091797 L 226.8256072998047 4.000011444091797 L 130.0678558349609 -4.452213287353516 M 130.0681457519531 -8.467414855957031 L 227 1.1444091796875e-05 C 245.2253875732422 1.1444091796875e-05 260 14.77461624145508 260 33.0000114440918 C 260 51.22540283203125 245.2253875732422 66.00000762939453 227 66.00000762939453 L 33 66.00000762939453 C 14.77461242675781 66.00000762939453 0 51.22540283203125 0 33.0000114440918 C 0 14.77461624145508 14.77461242675781 1.1444091796875e-05 33 1.1444091796875e-05 L 130.0681457519531 -8.467414855957031 Z", "stroke", "none", "fill", "#707070"], ["id", "Ellipse_1", "data-name", "Ellipse 1", "cx", "29", "cy", "29", "r", "29", "transform", "translate(372.5 778.872)"], ["id", "Ellipse_1_-_Outline", "data-name", "Ellipse 1 - Outline", "d", "M29,12A17,17,0,1,0,46,29,17.019,17.019,0,0,0,29,12M29,0A29,29,0,1,1,0,29,29,29,0,0,1,29,0Z", "transform", "translate(372.5 778.872)", "fill", "#fff"], ["id", "Ellipse_31", "data-name", "Ellipse 31", "cx", "29", "cy", "29", "r", "29", "transform", "translate(566.5 778.872)"], ["id", "Ellipse_31_-_Outline", "data-name", "Ellipse 31 - Outline", "d", "M29,12A17,17,0,1,0,46,29,17.019,17.019,0,0,0,29,12M29,0A29,29,0,1,1,0,29,29,29,0,0,1,29,0Z", "transform", "translate(566.5 778.872)", "fill", "#fff"], ["id", "Ellipse_3", "data-name", "Ellipse 3", "cx", "8", "cy", "8", "r", "8", "transform", "translate(445.5 777.872)", "fill", "#fff"], ["id", "Ellipse_6", "data-name", "Ellipse 6", "cx", "8", "cy", "8", "r", "8", "transform", "translate(533.5 777.872)", "fill", "#fff"], ["id", "Ellipse_4", "data-name", "Ellipse 4", "cx", "8", "cy", "8", "r", "8", "transform", "translate(445.5 819.872)", "fill", "#fff"], ["id", "Ellipse_5", "data-name", "Ellipse 5", "cx", "8", "cy", "8", "r", "8", "transform", "translate(533.5 819.872)", "fill", "#fff"], ["id", "Rectangle_1", "data-name", "Rectangle 1", "width", "203", "height", "23", "transform", "translate(396.5 795.872)", "fill", "#d95141"], ["id", "Group_81", "data-name", "Group 81", "transform", "translate(-2816.027 1193.05)"], ["id", "Path_2917", "data-name", "Path 2917", "d", "M3702.706-913.606s3.08,12.724,3.464,21.786,0,17.159,0,17.159h51.7l31.571,32.549s3.164,1.012,4.574,0,4.575-3.437,4.575-3.437,1.144-2.024,0-3.3-3.679-3.437-3.679-3.437l3.679-1.413s6.633,4.106,8.272,3.7,6.6-3.7,6.6-3.7.762-1.776,0-2.922a14.424,14.424,0,0,0-3.049-2.673v-2.807l8.272,2.807s2.687.764,4.193,0,4.823-2.807,4.823-2.807,2.306-3.17,1.277-4.315-4.708-4.335-4.708-4.335.629-2.673,2.287-1.909,5.852,3.189,5.852,3.189a6.8,6.8,0,0,0,4.956,0,24.912,24.912,0,0,1,4.441-1.279s1.526-2.291.763-3.055-3.927-9.548-10.159-16.04-18.946-18.083-18.946-18.083-2.42-1.642,0-4.449,10.808-10.827,10.808-10.827,2.936-3.418,1.144-4.067-10.807-1.279-10.807-1.279-3.927-1.031-5.585,0-34.309,16.174-34.309,16.174Z", "transform", "translate(0 14.199)", "fill", "#f9e44d"], ["id", "Path_2918", "data-name", "Path 2918", "d", "M3760.478-868.45l-20.471,19.745s-4.327,3.8-1.144,8.516a51.306,51.306,0,0,0,7.51,8.536,7.743,7.743,0,0,0,8.634-1.661c4.194-3.934,20.072-19.993,20.072-19.993Z", "transform", "translate(5.026 23.025)", "fill", "#f9e44d"], ["id", "Path_2919", "data-name", "Path 2919", "d", "M3858.951-964.783l-56.667,59.33,15.248,14.379,57.3-57.917Z", "transform", "translate(14.303 8.987)", "fill", "#f5e64d"], ["id", "Path_2920", "data-name", "Path 2920", "d", "M3818.6-1020.339s14.734,18.064,23.387,26.352,23.636,22.533,23.636,22.533a2.681,2.681,0,0,1,0,3.953c-2.021,2.043-6.614,6.874-6.614,6.874l20.223,19.229,5.318-6.244s2.821-1.91,3.831,0,37.093,63.015,37.093,63.015L3943.01-902.2s2.669-4.335,0-8.02-7.625-19.229-43.84-54.613-76.873-61.621-76.873-61.621Z", "transform", "translate(16.647)", "fill", "#f8e44d"], ["id", "Path_2921", "data-name", "Path 2921", "d", "M3877.384-987.82l3.812-3.819s3.3-2.559,6.48,0a96.941,96.941,0,0,1,8.52,8.669,4.287,4.287,0,0,1,0,5.213,16.023,16.023,0,0,1-3.945,3.819Z", "transform", "translate(25.091 4.907)", "fill", "#f8e44d"], ["id", "Path_2922", "data-name", "Path 2922", "d", "M3912.833-998.842l20.719,67.732.877-69.889Z", "transform", "translate(30.184 3.709)", "fill", "#f8e44d"], ["id", "Path_2923", "data-name", "Path 2923", "d", "M3873.51-880.357l4.3,15.658,45.384-21.635Z", "transform", "translate(24.535 20.419)", "fill", "#f8e44d"], ["id", "Path_2924", "data-name", "Path 2924", "d", "M3867.95-829.137l8.883,10.312,50.205-46.841Z", "transform", "translate(23.736 23.431)", "fill", "#f8e44d"], ["id", "Path_2925", "data-name", "Path 2925", "d", "M3830.5-851.248,3843.842-858l12.828,8.536,7.872,12.584L3848.8-820.955l-15.115-1.528Z", "transform", "translate(18.357 24.548)", "fill", "#f8e44d"], ["id", "Path_2926", "data-name", "Path 2926", "d", "M3827.143-816.45s-7.418,3.456-9.82,7.39-6.976,11.19-5.451,12.851,12.695,8.268,12.695,8.268l17.155-5.213s-2.917-11.343-5.833-14.513S3827.143-816.45,3827.143-816.45Z", "transform", "translate(15.637 30.603)", "fill", "#f8e44d"], ["id", "Path_2927", "data-name", "Path 2927", "d", "M3881.282-807.217c-1.01.115-11.417,4.067-11.417,4.067s-6.347,8.631-7.243,9.662S3874.935-781,3874.935-781s1.677-2.54,7.128-3.819,6.6-2.559,6.6-2.559l-1.01-3.934Z", "transform", "translate(22.965 31.949)", "fill", "#f8e44d"], ["transform", "translate(-1947 2142)"], ["id", "Group_87", "data-name", "Group 87", "transform", "translate(-1947 2142)", 1, "smoke-one"], ["id", "Path_2936-2", "data-name", "Path 2936", "d", "M3942.425-2037.962s-22.077-18.461-51.039-8.462-30.5,32.577-30.5,32.577-7.923,3.077-11.269,10.769-5.885,13.077-5.885,13.077-37.462,17.154-17.731,43.577,51.308,4.115,51.308,4.115,7.692,6.192,21.269,4.885,20.769-6.962,20.769-6.962,7.692,9.231,23.077,9.5,29.77-7.423,29.77-7.423,16.654,23.307,45.115,18.961,41.269-24.885,41.269-24.885,38.192,23.077,66.923,0,15.154-47.692,15.154-47.692,7.153-4.038,9.73-9.192a36.047,36.047,0,0,0,3.077-11.538s26.654.731,33.308-16.693.269-32.038-18.462-39.231-33.077,7.692-33.077,7.692-14.808-13.346-33.039-10-32.077,13.846-32.077,13.846-30-29.192-68.961-18.961S3942.425-2037.962,3942.425-2037.962Z", "fill", "#e6e6e6"], ["id", "Path_2935-2", "data-name", "Path 2935", "d", "M3843.152-1990a89.856,89.856,0,0,0,10.7,0,18.223,18.223,0,0,0,10.3-4.35,37.4,37.4,0,0,0,23.35,9.35c14.65.65,29.3-5,29.3-5s16.35,20.35,44.7,16,42.65-25,42.65-25,44.377,23.4,69.236,0,14.114-48,14.114-48a22.383,22.383,0,0,0,9-8.65,24.852,24.852,0,0,0,3.35-11s7.25.7,10.95,0,10.05-5,10.05-5-13.8-6.2-26.281-2.8-24.631,10.5-24.631,10.5-23.581-24.754-68.275-18.907-58.822,41.665-58.822,41.665-27.257-18.74-56.2-5.808-28.466,32.54-28.466,32.54a28.919,28.919,0,0,0-10.154,10.276A48,48,0,0,0,3843.152-1990Z", "transform", "translate(0.109 -1)", "fill", "#fff"], ["id", "Group_87", "data-name", "Group 87", "transform", "translate(-1947 2142)", 1, "smoke-two"], ["id", "Group_93", "data-name", "Group 93", "transform", "translate(82.487 -138.545)"], ["id", "Rectangle_25-2", "data-name", "Rectangle 25", "width", "27.212", "height", "11.792", "transform", "translate(215.548 471.065)", "fill", "#1d1d1e"], ["id", "Rectangle_26-2", "data-name", "Rectangle 26", "width", "12.699", "height", "31.748", "transform", "translate(222.805 442.945)", "fill", "#1d1d1e"], ["id", "Rectangle_24-2", "data-name", "Rectangle 24", "width", "141.505", "height", "141.505", "transform", "translate(157.495 479.229)", "fill", "#3497d9"], ["id", "Path_12-2", "data-name", "Path 12", "d", "M236.3,632.331H228v2.117l-23.29-2.117s-4.56-.532-4.56,5.473,4.56,5.749,4.56,5.749L228,640.8v2.752h8.3", "transform", "translate(-7.143 -199.062)", "fill", "#3698d7"], ["id", "Path_13-2", "data-name", "Path 13", "d", "M36.149.012h-8.3V2.129L4.56.012S0-.52,0,5.485s4.56,5.749,4.56,5.749L27.85,8.481v2.752h8.3", "transform", "translate(265.303 444.492) rotate(180)", "fill", "#3698d7"], ["id", "TNT-2", "data-name", "TNT", "transform", "translate(180.172 566.884)", "fill", "#fff", "font-size", "51", "font-family", "SegoeUI-Bold, Segoe UI", "font-weight", "700", "letter-spacing", "-0.05em"]], template: function GraphicComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(0, "svg", 0)(1, "defs")(2, "clipPath", 1);
            i0.ɵɵelement(3, "path", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "clipPath", 3);
            i0.ɵɵelement(5, "path", 4);
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(6, "path", 5)(7, "path", 6)(8, "rect", 7);
            i0.ɵɵelementStart(9, "g", 8);
            i0.ɵɵelement(10, "rect", 9)(11, "rect", 10)(12, "rect", 11)(13, "path", 12)(14, "path", 13);
            i0.ɵɵelementStart(15, "text", 14)(16, "tspan", 15);
            i0.ɵɵtext(17, "TNT");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(18, "g", 16);
            i0.ɵɵelement(19, "rect", 17)(20, "path", 18)(21, "path", 19);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "g", 20);
            i0.ɵɵelement(23, "rect", 21)(24, "rect", 22)(25, "rect", 23)(26, "path", 24)(27, "path", 25);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "g", 26);
            i0.ɵɵelement(29, "path", 27)(30, "ellipse", 28)(31, "ellipse", 29)(32, "ellipse", 30)(33, "ellipse", 31)(34, "ellipse", 32)(35, "ellipse", 33)(36, "ellipse", 34)(37, "ellipse", 35)(38, "ellipse", 36)(39, "ellipse", 37)(40, "ellipse", 38)(41, "ellipse", 39)(42, "ellipse", 40)(43, "ellipse", 41)(44, "ellipse", 42)(45, "ellipse", 43);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(46, "g", 44);
            i0.ɵɵelement(47, "path", 45)(48, "ellipse", 46)(49, "ellipse", 47)(50, "ellipse", 48)(51, "ellipse", 49)(52, "ellipse", 50)(53, "ellipse", 51)(54, "ellipse", 52)(55, "ellipse", 53)(56, "ellipse", 54)(57, "ellipse", 55)(58, "ellipse", 56)(59, "ellipse", 57)(60, "ellipse", 58)(61, "ellipse", 59)(62, "ellipse", 60)(63, "ellipse", 61);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(64, "g", 62);
            i0.ɵɵelement(65, "path", 63)(66, "path", 64)(67, "circle", 65)(68, "path", 66)(69, "circle", 67)(70, "path", 68)(71, "path", 69)(72, "rect", 70);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(73, "g", 71)(74, "g", 72);
            i0.ɵɵelement(75, "path", 73)(76, "path", 74);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(77, "g", 75);
            i0.ɵɵelement(78, "path", 76)(79, "path", 77);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(80, "g", 78);
            i0.ɵɵelement(81, "path", 79)(82, "path", 80)(83, "path", 81)(84, "path", 82)(85, "path", 83)(86, "path", 84);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(87, "g", 85);
            i0.ɵɵelement(88, "path", 86)(89, "path", 87)(90, "path", 88)(91, "path", 89)(92, "path", 90)(93, "path", 91);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(94, "g", 92);
            i0.ɵɵelement(95, "path", 93)(96, "path", 94)(97, "circle", 95)(98, "path", 96)(99, "circle", 97)(100, "path", 98)(101, "path", 99)(102, "rect", 100);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(103, "g", 101)(104, "g", 102)(105, "g", 103);
            i0.ɵɵelement(106, "path", 104)(107, "path", 105)(108, "path", 106)(109, "path", 107);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(110, "g", 108)(111, "g", 109)(112, "g", 110);
            i0.ɵɵelement(113, "circle", 111);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(114, "g", 112);
            i0.ɵɵelement(115, "circle", 113);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(116, "g", 114);
            i0.ɵɵelement(117, "circle", 115);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(118, "g", 116);
            i0.ɵɵelement(119, "circle", 117);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelement(120, "circle", 118);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(121, "g", 101)(122, "g", 119);
            i0.ɵɵelement(123, "path", 120);
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(124, "path", 121);
            i0.ɵɵelementStart(125, "g", 122);
            i0.ɵɵelement(126, "path", 123)(127, "path", 124)(128, "path", 125)(129, "path", 126);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(130, "g", 127);
            i0.ɵɵelement(131, "path", 128)(132, "path", 129)(133, "path", 130)(134, "path", 131);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(135, "path", 132);
            i0.ɵɵelementStart(136, "g", 133);
            i0.ɵɵelement(137, "path", 134)(138, "path", 135)(139, "rect", 136)(140, "rect", 137)(141, "path", 138)(142, "path", 139)(143, "rect", 140)(144, "rect", 141)(145, "circle", 142)(146, "circle", 143)(147, "path", 144)(148, "path", 145);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(149, "g", 146);
            i0.ɵɵelement(150, "path", 147)(151, "path", 148)(152, "rect", 149)(153, "rect", 150)(154, "path", 151)(155, "path", 152)(156, "rect", 153)(157, "rect", 154)(158, "circle", 155)(159, "circle", 156)(160, "path", 157)(161, "path", 158);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(162, "g", 159);
            i0.ɵɵelement(163, "rect", 160)(164, "rect", 161)(165, "rect", 162)(166, "rect", 163)(167, "rect", 164)(168, "rect", 165)(169, "rect", 166)(170, "rect", 167)(171, "rect", 168)(172, "path", 169)(173, "path", 170)(174, "rect", 171)(175, "rect", 172)(176, "rect", 173)(177, "rect", 174)(178, "rect", 175)(179, "rect", 176)(180, "rect", 177)(181, "rect", 178)(182, "rect", 179)(183, "path", 180)(184, "rect", 181)(185, "path", 182)(186, "path", 183)(187, "path", 184)(188, "path", 185)(189, "path", 186)(190, "rect", 187)(191, "path", 188)(192, "rect", 189)(193, "path", 190)(194, "rect", 191);
            i0.ɵɵelementStart(195, "g", 192);
            i0.ɵɵelement(196, "path", 193)(197, "path", 194);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(198, "circle", 195)(199, "path", 196)(200, "circle", 197)(201, "path", 198)(202, "circle", 199)(203, "circle", 200)(204, "circle", 201)(205, "circle", 202)(206, "rect", 203);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(207, "g", 204);
            i0.ɵɵelement(208, "path", 205)(209, "path", 206)(210, "path", 207)(211, "path", 208)(212, "path", 209)(213, "path", 210)(214, "path", 211)(215, "path", 212)(216, "path", 213)(217, "path", 214)(218, "path", 215);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(219, "g", 216)(220, "g", 217);
            i0.ɵɵelement(221, "path", 218)(222, "path", 219);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(223, "g", 220);
            i0.ɵɵelement(224, "path", 218)(225, "path", 219);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(226, "g", 221);
            i0.ɵɵelement(227, "rect", 222)(228, "rect", 223)(229, "rect", 224)(230, "path", 225)(231, "path", 226);
            i0.ɵɵelementStart(232, "text", 227)(233, "tspan", 15);
            i0.ɵɵtext(234, "TNT");
            i0.ɵɵelementEnd()()()();
        } }, encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GraphicComponent, [{
        type: Component,
        args: [{ selector: 'aa-graphic', changeDetection: ChangeDetectionStrategy.OnPush, template: "<svg id=\"Component_14_1\" data-name=\"Component 14 \u2013 1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"3000.5\" height=\"1070\" viewBox=\"0 0 3000.5 1070\">\r\n  <defs>\r\n    <clipPath id=\"clip-path\">\r\n      <path id=\"Path_2942\" data-name=\"Path 2942\" d=\"M0,115.244,427.5,5.964S459.888-2.767,479.346.9s30.237,13.848,39.35,23.53,17.2,34.224,17.2,34.224L111.67,168.121s-36.289,8.134-53.182,5.005-31.283-8.134-42.232-24.714A151.348,151.348,0,0,1,0,115.244Z\" transform=\"translate(-595.631 -4434.948) rotate(90)\" fill=\"#f1533e\"/>\r\n    </clipPath>\r\n    <clipPath id=\"clip-path-2\">\r\n      <path id=\"Path_2941\" data-name=\"Path 2941\" d=\"M0,115.244,427.5,5.964S459.888-2.767,479.346.9s30.237,13.848,39.35,23.53,17.2,34.224,17.2,34.224L111.67,168.121s-36.289,8.134-53.182,5.005-31.283-8.134-42.232-24.714A151.348,151.348,0,0,1,0,115.244Z\" transform=\"translate(-595.631 -4434.948) rotate(90)\" fill=\"#ce3423\"/>\r\n    </clipPath>\r\n  </defs>\r\n  <path id=\"Path_2912\" data-name=\"Path 2912\" d=\"M0,0H147.64V147.64H0Z\" transform=\"translate(886.68 282.885)\" fill=\"none\"/>\r\n  <path id=\"Path_2911\" data-name=\"Path 2911\" d=\"M0,1623.508s260.514-112.259,500.813,32.555,236.13,334.158,236.13,334.158,51.686-8.794,108.582,0,102.747,31.246,102.747,31.246,101.5-275.6,454.337-286.822,505.814,286.822,505.814,286.822,30.428-22.639,105.456-31.246,105.665,0,105.665,0,38.973-286.635,339.085-412.739,541.87-31.245,541.87-31.245V2379.99H0Z\" transform=\"translate(0 -1475)\" fill=\"#e79f1c\"/>\r\n  <rect id=\"Rectangle_39\" data-name=\"Rectangle 39\" width=\"3000\" height=\"467\" transform=\"translate(0.5 603)\" fill=\"#d78e0a\"/>\r\n  <g id=\"Group_79\" data-name=\"Group 79\" transform=\"translate(89.487 -132.268)\">\r\n    <rect id=\"Rectangle_25\" data-name=\"Rectangle 25\" width=\"27.212\" height=\"11.792\" transform=\"translate(215.548 471.065)\" fill=\"#b38011\"/>\r\n    <rect id=\"Rectangle_26\" data-name=\"Rectangle 26\" width=\"12.699\" height=\"31.748\" transform=\"translate(222.805 442.945)\" fill=\"#b38011\"/>\r\n    <rect id=\"Rectangle_24\" data-name=\"Rectangle 24\" width=\"141.505\" height=\"141.505\" transform=\"translate(157.495 479.229)\" fill=\"#b38011\"/>\r\n    <path id=\"Path_12\" data-name=\"Path 12\" d=\"M236.3,632.331H228v2.117l-23.29-2.117s-4.56-.532-4.56,5.473,4.56,5.749,4.56,5.749L228,640.8v2.752h8.3\" transform=\"translate(-7.143 -199.062)\" fill=\"#b38011\"/>\r\n    <path id=\"Path_13\" data-name=\"Path 13\" d=\"M36.149.012h-8.3V2.129L4.56.012S0-.52,0,5.485s4.56,5.749,4.56,5.749L27.85,8.481v2.752h8.3\" transform=\"translate(265.303 444.492) rotate(180)\" fill=\"#b38011\"/>\r\n    <text id=\"TNT\" transform=\"translate(180.172 566.884)\" fill=\"#b38011\" font-size=\"51\" font-family=\"SegoeUI-Bold, Segoe UI\" font-weight=\"700\" letter-spacing=\"-0.05em\"><tspan x=\"0\" y=\"0\">TNT</tspan></text>\r\n  </g>\r\n  <g id=\"Group_94\" data-name=\"Group 94\" transform=\"translate(23.5 -127.268)\">\r\n    <rect id=\"Rectangle_27\" data-name=\"Rectangle 27\" width=\"41.726\" height=\"175.974\" transform=\"translate(68.601 444.76)\" fill=\"#b38011\"/>\r\n    <path id=\"Path_14\" data-name=\"Path 14\" d=\"M154.242,606.709s.651,16.287-13.03,23.453-34.691-9.772-46.092-4.235-8.958,18.567-8.958,18.567\" transform=\"translate(3.469 -197.59)\" fill=\"none\" stroke=\"#1c1c1c\" stroke-width=\"5\"/>\r\n    <path id=\"Path_15\" data-name=\"Path 15\" d=\"M140.714,574.389l2.606,16.776h-11.4l6.515,6.678-22.8,8.632s29.805-3.095,29.805-2.443-2.117,9.935-2.117,9.935L157,605.334l9.121,14.658-2.28-14.658h35.017l-33.877-10.424L179.8,583.347,159.77,586.6v-9.935L152.44,586.6Z\" transform=\"translate(0.71 -194.586)\" fill=\"#b38011\"/>\r\n  </g>\r\n  <g id=\"Group_80\" data-name=\"Group 80\" transform=\"translate(16.5 -133.268)\">\r\n    <rect id=\"Rectangle_27-2\" data-name=\"Rectangle 27\" width=\"41.726\" height=\"175.974\" transform=\"translate(68.601 444.76)\" fill=\"#1c1c1c\"/>\r\n    <rect id=\"Rectangle_28\" data-name=\"Rectangle 28\" width=\"41.726\" height=\"19.049\" transform=\"translate(68.601 476.508)\" fill=\"#fff\"/>\r\n    <rect id=\"Rectangle_29\" data-name=\"Rectangle 29\" width=\"41.726\" height=\"19.049\" transform=\"translate(68.601 570.844)\" fill=\"#fff\"/>\r\n    <path id=\"Path_14-2\" data-name=\"Path 14\" d=\"M154.242,606.709s.651,16.287-13.03,23.453-34.691-9.772-46.092-4.235-8.958,18.567-8.958,18.567\" transform=\"translate(3.469 -197.59)\" fill=\"none\" stroke=\"#1c1c1c\" stroke-width=\"5\"/>\r\n    <path id=\"Path_15-2\" data-name=\"Path 15\" d=\"M140.714,574.389l2.606,16.776h-11.4l6.515,6.678-22.8,8.632s29.805-3.095,29.805-2.443-2.117,9.935-2.117,9.935L157,605.334l9.121,14.658-2.28-14.658h35.017l-33.877-10.424L179.8,583.347,159.77,586.6v-9.935L152.44,586.6Z\" transform=\"translate(0.71 -194.586)\" fill=\"#f1533e\"/>\r\n  </g>\r\n  <g id=\"Group_95\" data-name=\"Group 95\" transform=\"translate(188.5 -164.531)\" opacity=\"0.24\">\r\n    <path id=\"Path_11\" data-name=\"Path 11\" d=\"M501.381,1064.276s-10.921-7.066,11.834-7.066,16.12-9.207,28.12-15.207S580,1026,584,1020s6-7.333,7.333-15.333,22-36.667,50-38.667S720,950.669,736,938s22-26,22-35.333-12-14.667,0-20,11.333-4,24.667,6.667,22,14,26.667,37.333S822.669,972,827.336,978,870,1022,882,1028s84,12,107.334,14,75.334-2.667,75.334-2.667,30.667,14,35.333,14,8.464,9.293,8.464,9.293H1100l-593.1,1.646Z\" transform=\"translate(179.186 -216.09)\"/>\r\n    <ellipse id=\"Ellipse_7\" data-name=\"Ellipse 7\" cx=\"4.5\" cy=\"5.5\" rx=\"4.5\" ry=\"5.5\" transform=\"translate(861.186 599.532)\"/>\r\n    <ellipse id=\"Ellipse_15\" data-name=\"Ellipse 15\" cx=\"4.5\" cy=\"5.5\" rx=\"4.5\" ry=\"5.5\" transform=\"translate(876.186 622.532)\"/>\r\n    <ellipse id=\"Ellipse_16\" data-name=\"Ellipse 16\" cx=\"4.5\" cy=\"5.5\" rx=\"4.5\" ry=\"5.5\" transform=\"translate(893.186 624.532)\"/>\r\n    <ellipse id=\"Ellipse_17\" data-name=\"Ellipse 17\" cx=\"4.5\" cy=\"5.5\" rx=\"4.5\" ry=\"5.5\" transform=\"translate(887.186 652.532)\"/>\r\n    <ellipse id=\"Ellipse_18\" data-name=\"Ellipse 18\" cx=\"4.5\" cy=\"5.5\" rx=\"4.5\" ry=\"5.5\" transform=\"translate(859.186 638.532)\"/>\r\n    <ellipse id=\"Ellipse_19\" data-name=\"Ellipse 19\" cx=\"4.5\" cy=\"5.5\" rx=\"4.5\" ry=\"5.5\" transform=\"translate(845.186 658.532)\"/>\r\n    <ellipse id=\"Ellipse_20\" data-name=\"Ellipse 20\" cx=\"4.5\" cy=\"5.5\" rx=\"4.5\" ry=\"5.5\" transform=\"translate(834.186 686.532)\"/>\r\n    <ellipse id=\"Ellipse_21\" data-name=\"Ellipse 21\" cx=\"4.5\" cy=\"5.5\" rx=\"4.5\" ry=\"5.5\" transform=\"translate(864.186 673.532)\"/>\r\n    <ellipse id=\"Ellipse_8\" data-name=\"Ellipse 8\" cx=\"4.5\" cy=\"5.5\" rx=\"4.5\" ry=\"5.5\" transform=\"translate(881.186 586.532)\"/>\r\n    <ellipse id=\"Ellipse_9\" data-name=\"Ellipse 9\" cx=\"4.5\" cy=\"5.5\" rx=\"4.5\" ry=\"5.5\" transform=\"translate(891.186 599.532)\"/>\r\n    <ellipse id=\"Ellipse_10\" data-name=\"Ellipse 10\" cx=\"4.5\" cy=\"5.5\" rx=\"4.5\" ry=\"5.5\" transform=\"translate(899.186 574.532)\"/>\r\n    <ellipse id=\"Ellipse_11\" data-name=\"Ellipse 11\" cx=\"4.5\" cy=\"5.5\" rx=\"4.5\" ry=\"5.5\" transform=\"translate(888.186 557.532)\"/>\r\n    <ellipse id=\"Ellipse_12\" data-name=\"Ellipse 12\" cx=\"4.5\" cy=\"5.5\" rx=\"4.5\" ry=\"5.5\" transform=\"translate(907.186 547.532)\"/>\r\n    <ellipse id=\"Ellipse_22\" data-name=\"Ellipse 22\" cx=\"4.5\" cy=\"5.5\" rx=\"4.5\" ry=\"5.5\" transform=\"translate(911.186 526.532)\"/>\r\n    <ellipse id=\"Ellipse_13\" data-name=\"Ellipse 13\" cx=\"4.5\" cy=\"5.5\" rx=\"4.5\" ry=\"5.5\" transform=\"translate(917.186 565.532)\"/>\r\n    <ellipse id=\"Ellipse_14\" data-name=\"Ellipse 14\" cx=\"4.5\" cy=\"5.5\" rx=\"4.5\" ry=\"5.5\" transform=\"translate(912.186 585.532)\"/>\r\n  </g>\r\n  <g id=\"Group_77\" data-name=\"Group 77\" transform=\"translate(188.5 -172)\">\r\n    <path id=\"Path_11-2\" data-name=\"Path 11\" d=\"M501.381,1064.276s-10.921-7.066,11.834-7.066,16.12-9.207,28.12-15.207S580,1026,584,1020s6-7.333,7.333-15.333,22-36.667,50-38.667S720,950.669,736,938s22-26,22-35.333-12-14.667,0-20,11.333-4,24.667,6.667,22,14,26.667,37.333S822.669,972,827.336,978,870,1022,882,1028s84,12,107.334,14,75.334-2.667,75.334-2.667,30.667,14,35.333,14,8.464,9.293,8.464,9.293H1100l-593.1,1.646Z\" transform=\"translate(179.186 -216.09)\"/>\r\n    <ellipse id=\"Ellipse_7-2\" data-name=\"Ellipse 7\" cx=\"4.5\" cy=\"5.5\" rx=\"4.5\" ry=\"5.5\" transform=\"translate(861.186 599.532)\"/>\r\n    <ellipse id=\"Ellipse_15-2\" data-name=\"Ellipse 15\" cx=\"4.5\" cy=\"5.5\" rx=\"4.5\" ry=\"5.5\" transform=\"translate(876.186 622.532)\"/>\r\n    <ellipse id=\"Ellipse_16-2\" data-name=\"Ellipse 16\" cx=\"4.5\" cy=\"5.5\" rx=\"4.5\" ry=\"5.5\" transform=\"translate(893.186 624.532)\"/>\r\n    <ellipse id=\"Ellipse_17-2\" data-name=\"Ellipse 17\" cx=\"4.5\" cy=\"5.5\" rx=\"4.5\" ry=\"5.5\" transform=\"translate(887.186 652.532)\"/>\r\n    <ellipse id=\"Ellipse_18-2\" data-name=\"Ellipse 18\" cx=\"4.5\" cy=\"5.5\" rx=\"4.5\" ry=\"5.5\" transform=\"translate(859.186 638.532)\"/>\r\n    <ellipse id=\"Ellipse_19-2\" data-name=\"Ellipse 19\" cx=\"4.5\" cy=\"5.5\" rx=\"4.5\" ry=\"5.5\" transform=\"translate(845.186 658.532)\"/>\r\n    <ellipse id=\"Ellipse_20-2\" data-name=\"Ellipse 20\" cx=\"4.5\" cy=\"5.5\" rx=\"4.5\" ry=\"5.5\" transform=\"translate(834.186 686.532)\"/>\r\n    <ellipse id=\"Ellipse_21-2\" data-name=\"Ellipse 21\" cx=\"4.5\" cy=\"5.5\" rx=\"4.5\" ry=\"5.5\" transform=\"translate(864.186 673.532)\"/>\r\n    <ellipse id=\"Ellipse_8-2\" data-name=\"Ellipse 8\" cx=\"4.5\" cy=\"5.5\" rx=\"4.5\" ry=\"5.5\" transform=\"translate(881.186 586.532)\"/>\r\n    <ellipse id=\"Ellipse_9-2\" data-name=\"Ellipse 9\" cx=\"4.5\" cy=\"5.5\" rx=\"4.5\" ry=\"5.5\" transform=\"translate(891.186 599.532)\"/>\r\n    <ellipse id=\"Ellipse_10-2\" data-name=\"Ellipse 10\" cx=\"4.5\" cy=\"5.5\" rx=\"4.5\" ry=\"5.5\" transform=\"translate(899.186 574.532)\"/>\r\n    <ellipse id=\"Ellipse_11-2\" data-name=\"Ellipse 11\" cx=\"4.5\" cy=\"5.5\" rx=\"4.5\" ry=\"5.5\" transform=\"translate(888.186 557.532)\"/>\r\n    <ellipse id=\"Ellipse_12-2\" data-name=\"Ellipse 12\" cx=\"4.5\" cy=\"5.5\" rx=\"4.5\" ry=\"5.5\" transform=\"translate(907.186 547.532)\"/>\r\n    <ellipse id=\"Ellipse_22-2\" data-name=\"Ellipse 22\" cx=\"4.5\" cy=\"5.5\" rx=\"4.5\" ry=\"5.5\" transform=\"translate(911.186 526.532)\"/>\r\n    <ellipse id=\"Ellipse_13-2\" data-name=\"Ellipse 13\" cx=\"4.5\" cy=\"5.5\" rx=\"4.5\" ry=\"5.5\" transform=\"translate(917.186 565.532)\"/>\r\n    <ellipse id=\"Ellipse_14-2\" data-name=\"Ellipse 14\" cx=\"4.5\" cy=\"5.5\" rx=\"4.5\" ry=\"5.5\" transform=\"translate(912.186 585.532)\"/>\r\n  </g>\r\n  <g id=\"Group_102\" data-name=\"Group 102\" transform=\"translate(581.463 -119.92)\" opacity=\"0.25\">\r\n    <path id=\"Path_56\" data-name=\"Path 56\" d=\"M1819.809,692.472c-.808-1.616,2.02-16.966,2.02-16.966l-14.946-9.291,3.635-6.867-7.271-10.907-7.675-2.02-7.675-13.734-6.059,4.039v-10.1l-11.714-7.675-8.887,2.828-10.907-9.291h-11.311l-5.251,9.291-21.409,4.847,2.828,44.839,3.232,23.429Z\" transform=\"translate(488.078 -170.489)\" fill=\"#1c1c1c\"/>\r\n    <path id=\"Path_54\" data-name=\"Path 54\" d=\"M1672.395,799.61l-40.8-90.485h191.876l-39.183,90.485Z\" transform=\"translate(498.958 -183.506)\" fill=\"#1c1c1c\"/>\r\n    <circle id=\"Ellipse_27\" data-name=\"Ellipse 27\" cx=\"18.171\" cy=\"18.171\" r=\"18.171\" transform=\"translate(2158.593 601.656)\" fill=\"#1c1c1c\"/>\r\n    <path id=\"Ellipse_27_-_Outline\" data-name=\"Ellipse 27 - Outline\" d=\"M18.171,6A12.171,12.171,0,1,0,30.342,18.171,12.185,12.185,0,0,0,18.171,6m0-6A18.171,18.171,0,1,1,0,18.171,18.171,18.171,0,0,1,18.171,0Z\" transform=\"translate(2158.593 601.656)\" fill=\"#1c1c1c\"/>\r\n    <circle id=\"Ellipse_28\" data-name=\"Ellipse 28\" cx=\"18.171\" cy=\"18.171\" r=\"18.171\" transform=\"translate(2262.427 601.656)\" fill=\"#1c1c1c\"/>\r\n    <path id=\"Ellipse_28_-_Outline\" data-name=\"Ellipse 28 - Outline\" d=\"M18.171,6A12.171,12.171,0,1,0,30.342,18.171,12.185,12.185,0,0,0,18.171,6m0-6A18.171,18.171,0,1,1,0,18.171,18.171,18.171,0,0,1,18.171,0Z\" transform=\"translate(2262.427 601.656)\" fill=\"#1c1c1c\"/>\r\n    <path id=\"Path_55\" data-name=\"Path 55\" d=\"M1703.724,626.5l10.1,11.311h11.715l2.02,9.291,15.754,15.35-3.636,5.655,14.138,8.079v18.178H1643.131l-6.867-12.522,10.1-2.424,8.079-8.887,7.271,3.232-3.636-11.311,11.311-10.5h7.271v-10.5l12.522-3.635,3.232-11.311Z\" transform=\"translate(498.329 -172.375)\" fill=\"#1c1c1c\"/>\r\n    <rect id=\"Rectangle_37\" data-name=\"Rectangle 37\" width=\"222.38\" height=\"21.632\" rx=\"10.816\" transform=\"translate(2117.924 515.127)\" fill=\"#1c1c1c\"/>\r\n  </g>\r\n  <g id=\"Group_74\" data-name=\"Group 74\" transform=\"translate(630.19 -124.92)\">\r\n    <g id=\"Group_99\" data-name=\"Group 99\" transform=\"translate(0 8)\" opacity=\"0.25\">\r\n      <path id=\"Path_47\" data-name=\"Path 47\" d=\"M1372.5,812.456,1527.1,650.7l12.928,9.7L1383.862,824.38s-6.388,4.255-11.366-1.159S1372.5,812.456,1372.5,812.456Z\" transform=\"translate(373.869 -199)\" fill=\"#1c1c1c\"/>\r\n      <path id=\"Path_46\" data-name=\"Path 46\" d=\"M1462.5,602.161l2.452-5.149s45.849,18.879,77.477,51.242,49.771,75.515,49.771,75.515l-4.974,2.883s-20.014-36.084-28.207-45.491-8.952-10.621-12.667-12.067-12.995,5.884-12.995,5.884L1515.209,656.1l5.394-10.052s.735-2.942-1.962-6.13-13.975-11.033-27.95-20.84A251.271,251.271,0,0,0,1462.5,602.161Z\" transform=\"translate(373.869 -199)\" fill=\"#1c1c1c\"/>\r\n    </g>\r\n    <g id=\"Group_98\" data-name=\"Group 98\">\r\n      <path id=\"Path_47-2\" data-name=\"Path 47\" d=\"M1372.5,812.456,1527.1,650.7l12.928,9.7L1383.862,824.38s-6.388,4.255-11.366-1.159S1372.5,812.456,1372.5,812.456Z\" transform=\"translate(373.869 -199)\" fill=\"#fffbff\"/>\r\n      <path id=\"Path_46-2\" data-name=\"Path 46\" d=\"M1462.5,602.161l2.452-5.149s45.849,18.879,77.477,51.242,49.771,75.515,49.771,75.515l-4.974,2.883s-20.014-36.084-28.207-45.491-8.952-10.621-12.667-12.067-12.995,5.884-12.995,5.884L1515.209,656.1l5.394-10.052s.735-2.942-1.962-6.13-13.975-11.033-27.95-20.84A251.271,251.271,0,0,0,1462.5,602.161Z\" transform=\"translate(373.869 -199)\" fill=\"#1e1d26\"/>\r\n    </g>\r\n    <g id=\"Group_101\" data-name=\"Group 101\" transform=\"translate(-1 4)\" opacity=\"0.25\">\r\n      <path id=\"Path_51\" data-name=\"Path 51\" d=\"M1417.949,700.2l90.927,90.927,10.059-10.059-91.913-91.716Z\" transform=\"translate(373.869 -199)\" fill=\"#1e1d26\"/>\r\n      <path id=\"Path_50\" data-name=\"Path 50\" d=\"M1394.63,662.107s-1.972-1.07-3.338,0a3.214,3.214,0,0,0-.91,3.043l3.186,10.772L1418.45,700.2l10.469-10.165L1404.8,666.06Z\" transform=\"translate(373.869 -199)\" fill=\"#1e1d26\"/>\r\n      <path id=\"Path_48\" data-name=\"Path 48\" d=\"M1515.634,778.63l-9.1,8.7,9.1,8.7s-1.882,9.41,3.685,21.329,12.939,17.957,12.939,17.957,8.469-3.372,18.114-12.7a56.905,56.905,0,0,0,13.174-18.82,47.407,47.407,0,0,0-18.271-13.252,58.24,58.24,0,0,0-21.407-3.686Z\" transform=\"translate(375.999 -196.893)\" fill=\"none\" stroke=\"#26201e\" stroke-width=\"4\"/>\r\n      <path id=\"Path_49\" data-name=\"Path 49\" d=\"M1537.19,842.828a67.161,67.161,0,0,0,20.52-14.731c9.7-10.234,13.287-18.584,13.287-18.584l-3.462-4.616s-8.658,13.952-14.044,18.711-20.379,15.172-20.379,15.172Z\" transform=\"translate(373.869 -199)\" fill=\"#1e1d26\"/>\r\n      <path id=\"Path_52\" data-name=\"Path 52\" d=\"M1382.565,707.693s-34.615-32.564-36.667-35.9a45.593,45.593,0,0,1-5.641-32.564c3.333-16.923,5.641-20.769,5.641-20.769s12.821-7.18,25.385-7.692,24.1,2.82,28.718,6.667,35.9,36.667,35.9,36.667Z\" transform=\"translate(373.869 -199)\" fill=\"#1e1d26\"/>\r\n      <path id=\"Path_53\" data-name=\"Path 53\" d=\"M1449.763,1894.309l8.286,8.4,8.987-9.22-8.987-8.87Z\" transform=\"translate(434.869 -1303)\" fill=\"#1e1d26\"/>\r\n    </g>\r\n    <g id=\"Group_100\" data-name=\"Group 100\">\r\n      <path id=\"Path_51-2\" data-name=\"Path 51\" d=\"M1417.949,700.2l90.927,90.927,10.059-10.059-91.913-91.716Z\" transform=\"translate(373.869 -199)\" fill=\"#f3523f\"/>\r\n      <path id=\"Path_50-2\" data-name=\"Path 50\" d=\"M1394.63,662.107s-1.972-1.07-3.338,0a3.214,3.214,0,0,0-.91,3.043l3.186,10.772L1418.45,700.2l10.469-10.165L1404.8,666.06Z\" transform=\"translate(372.869 -199)\" fill=\"#1e1e23\"/>\r\n      <path id=\"Path_48-2\" data-name=\"Path 48\" d=\"M1515.634,778.63l-9.1,8.7,9.1,8.7s-1.882,9.41,3.685,21.329,12.939,17.957,12.939,17.957,8.469-3.372,18.114-12.7a56.905,56.905,0,0,0,13.174-18.82,47.407,47.407,0,0,0-18.271-13.252,58.24,58.24,0,0,0-21.407-3.686Z\" transform=\"translate(375.999 -196.893)\" fill=\"none\" stroke=\"#26201e\" stroke-width=\"4\"/>\r\n      <path id=\"Path_49-2\" data-name=\"Path 49\" d=\"M1537.19,842.828a67.161,67.161,0,0,0,20.52-14.731c9.7-10.234,13.287-18.584,13.287-18.584l-3.462-4.616s-8.658,13.952-14.044,18.711-20.379,15.172-20.379,15.172Z\" transform=\"translate(373.869 -199)\" fill=\"#26201e\"/>\r\n      <path id=\"Path_52-2\" data-name=\"Path 52\" d=\"M1382.565,707.693s-34.615-32.564-36.667-35.9a45.593,45.593,0,0,1-5.641-32.564c3.333-16.923,5.641-20.769,5.641-20.769s12.821-7.18,25.385-7.692,24.1,2.82,28.718,6.667,35.9,36.667,35.9,36.667Z\" transform=\"translate(373.869 -199)\" fill=\"#3696da\"/>\r\n      <path id=\"Path_53-2\" data-name=\"Path 53\" d=\"M1449.763,1894.309l8.286,8.4,8.987-9.22-8.987-8.87Z\" transform=\"translate(434.869 -1303)\" fill=\"#26201e\"/>\r\n    </g>\r\n  </g>\r\n  <g id=\"Group_75\" data-name=\"Group 75\" transform=\"translate(577.463 -124.92)\">\r\n    <path id=\"Path_56-2\" data-name=\"Path 56\" d=\"M1819.809,692.472c-.808-1.616,2.02-16.966,2.02-16.966l-14.946-9.291,3.635-6.867-7.271-10.907-7.675-2.02-7.675-13.734-6.059,4.039v-10.1l-11.714-7.675-8.887,2.828-10.907-9.291h-11.311l-5.251,9.291-21.409,4.847,2.828,44.839,3.232,23.429Z\" transform=\"translate(488.078 -170.489)\" fill=\"#1c1c1c\"/>\r\n    <path id=\"Path_54-2\" data-name=\"Path 54\" d=\"M1672.395,799.61l-40.8-90.485h191.876l-39.183,90.485Z\" transform=\"translate(498.958 -183.506)\" fill=\"#1c1c1c\"/>\r\n    <circle id=\"Ellipse_27-2\" data-name=\"Ellipse 27\" cx=\"18.171\" cy=\"18.171\" r=\"18.171\" transform=\"translate(2158.593 601.656)\" fill=\"#fff\"/>\r\n    <path id=\"Ellipse_27_-_Outline-2\" data-name=\"Ellipse 27 - Outline\" d=\"M18.171,6A12.171,12.171,0,1,0,30.342,18.171,12.185,12.185,0,0,0,18.171,6m0-6A18.171,18.171,0,1,1,0,18.171,18.171,18.171,0,0,1,18.171,0Z\" transform=\"translate(2158.593 601.656)\" fill=\"#414546\"/>\r\n    <circle id=\"Ellipse_28-2\" data-name=\"Ellipse 28\" cx=\"18.171\" cy=\"18.171\" r=\"18.171\" transform=\"translate(2262.427 601.656)\" fill=\"#fff\"/>\r\n    <path id=\"Ellipse_28_-_Outline-2\" data-name=\"Ellipse 28 - Outline\" d=\"M18.171,6A12.171,12.171,0,1,0,30.342,18.171,12.185,12.185,0,0,0,18.171,6m0-6A18.171,18.171,0,1,1,0,18.171,18.171,18.171,0,0,1,18.171,0Z\" transform=\"translate(2262.427 601.656)\" fill=\"#414546\"/>\r\n    <path id=\"Path_55-2\" data-name=\"Path 55\" d=\"M1703.724,626.5l10.1,11.311h11.715l2.02,9.291,15.754,15.35-3.636,5.655,14.138,8.079v18.178H1643.131l-6.867-12.522,10.1-2.424,8.079-8.887,7.271,3.232-3.636-11.311,11.311-10.5h7.271v-10.5l12.522-3.635,3.232-11.311Z\" transform=\"translate(498.329 -172.375)\" fill=\"#464646\"/>\r\n    <rect id=\"Rectangle_37-2\" data-name=\"Rectangle 37\" width=\"222.38\" height=\"21.632\" rx=\"10.816\" transform=\"translate(2117.924 515.127)\" fill=\"#2f99db\"/>\r\n  </g>\r\n  <g id=\"Group_76\" data-name=\"Group 76\" transform=\"translate(228.935 -165.513)\">\r\n    <g class=\"wheel\" id=\"Group_92\" data-name=\"Group 92\">\r\n      <g id=\"Group_91\" data-name=\"Group 91\">\r\n        <path id=\"Path_16\" data-name=\"Path 16\" d=\"M792,808.792l427.5-109.28s32.391-8.732,51.849-5.065,30.237,13.848,39.35,23.53,17.2,34.224,17.2,34.224L903.671,861.669s-36.289,8.134-53.182,5.005-31.283-8.134-42.232-24.714A151.347,151.347,0,0,1,792,808.792Z\" transform=\"translate(212.065 -216.035)\" fill=\"#f1533e\"/>\r\n        <path id=\"Path_17\" data-name=\"Path 17\" d=\"M0,115.244,427.5,5.964S459.888-2.767,479.346.9s30.237,13.848,39.35,23.53,17.2,34.224,17.2,34.224L111.67,168.121s-36.289,8.134-53.182,5.005-31.283-8.134-42.232-24.714A151.348,151.348,0,0,1,0,115.244Z\" transform=\"translate(1143.99 313.513) rotate(45)\" fill=\"#f1533e\"/>\r\n        <path id=\"Path_18\" data-name=\"Path 18\" d=\"M0,115.244,427.5,5.964S459.888-2.767,479.346.9s30.237,13.848,39.35,23.53,17.2,34.224,17.2,34.224L111.67,168.121s-36.289,8.134-53.182,5.005-31.283-8.134-42.232-24.714A151.348,151.348,0,0,1,0,115.244Z\" transform=\"translate(1358.907 296.513) rotate(90)\" fill=\"#f1533e\"/>\r\n        <path id=\"Path_19\" data-name=\"Path 19\" d=\"M0,115.244,427.5,5.964S459.888-2.767,479.346.9s30.237,13.848,39.35,23.53,17.2,34.224,17.2,34.224L111.67,168.121s-36.289,8.134-53.182,5.005-31.283-8.134-42.232-24.714A151.348,151.348,0,0,1,0,115.244Z\" transform=\"matrix(-0.719, 0.695, -0.695, -0.719, 1525.317, 440.564)\" fill=\"#f1533e\"/>\r\n      </g>\r\n      <g id=\"Group_89\" data-name=\"Group 89\" transform=\"translate(-8 3)\">\r\n        <g id=\"Group_90\" data-name=\"Group 90\">\r\n          <g id=\"Mask_Group_1\" data-name=\"Mask Group 1\" transform=\"translate(1962.538 4728.461)\" clip-path=\"url(#clip-path-2)\">\r\n            <circle id=\"Ellipse_35\" data-name=\"Ellipse 35\" cx=\"191.322\" cy=\"191.322\" r=\"191.322\" transform=\"translate(-873.777 -4358.178)\" fill=\"#ce3423\"/>\r\n          </g>\r\n          <g id=\"Mask_Group_3\" data-name=\"Mask Group 3\" transform=\"translate(-2886.987 1243.986) rotate(90)\" clip-path=\"url(#clip-path-2)\">\r\n            <circle id=\"Ellipse_37\" data-name=\"Ellipse 37\" cx=\"191.322\" cy=\"191.322\" r=\"191.322\" transform=\"translate(-873.777 -4358.178)\" fill=\"#ce3423\"/>\r\n          </g>\r\n          <g id=\"Mask_Group_5\" data-name=\"Mask Group 5\" transform=\"matrix(0.695, 0.719, -0.719, 0.695, -1243.157, 3946.799)\" clip-path=\"url(#clip-path-2)\">\r\n            <circle id=\"Ellipse_39\" data-name=\"Ellipse 39\" cx=\"191.322\" cy=\"191.322\" r=\"191.322\" transform=\"translate(-873.777 -4358.178)\" fill=\"#ce3423\"/>\r\n          </g>\r\n          <g id=\"Mask_Group_4\" data-name=\"Mask Group 4\" transform=\"translate(-2149.155 -1902.434) rotate(135)\" clip-path=\"url(#clip-path-2)\">\r\n            <circle id=\"Ellipse_38\" data-name=\"Ellipse 38\" cx=\"191.322\" cy=\"191.322\" r=\"191.322\" transform=\"translate(-873.777 -4358.178)\" fill=\"#ce3423\"/>\r\n          </g>\r\n        </g>\r\n      </g>\r\n      <circle id=\"Ellipse_23\" data-name=\"Ellipse 23\" cx=\"177.322\" cy=\"177.322\" r=\"177.322\" transform=\"translate(1095.065 387.513)\" fill=\"#3696da\"/>\r\n    </g>\r\n  </g>\r\n\r\n  <g id=\"Group_76\" data-name=\"Group 76\" transform=\"translate(228.935 -165.513)\">\r\n    <g id=\"Group_92\" data-name=\"Group 92\">\r\n      <path id=\"Path_2913\" data-name=\"Path 2913\" d=\"M54.226,2a52.226,52.226,0,1,0,52.226,52.226A52.245,52.245,0,0,0,54.226,2ZM12.445,54.226A41.77,41.77,0,0,1,54.226,12.445a41.271,41.271,0,0,1,25.591,8.826L21.272,79.817A41.271,41.271,0,0,1,12.445,54.226ZM54.226,96.008a41.271,41.271,0,0,1-25.591-8.826L87.181,28.635a41.271,41.271,0,0,1,8.826,25.591A41.77,41.77,0,0,1,54.226,96.008Z\" transform=\"translate(1217.565 510.013)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"2\"/>\r\n    </g>\r\n  </g>\r\n\r\n  <path id=\"Ellipse_32\" data-name=\"Ellipse 32\" d=\"M550,0h4.229l.253,0h.2l.236,0,.217,0c.074,0,.135,0,.2,0l.249,0,.2,0,.242,0,.211,0,.226,0,.227,0,.195,0,.259,0,.195,0,.235,0,.219,0,.212,0,.235,0,.206,0,.248,0,.208,0,.19,0,.193,0,.237,0h.025l.192,0,.214,0H560l.19,0,.2,0,.222,0,.221,0,.208,0h.069l.182,0,.194,0,.257,0,.193,0,.2,0,.248,0,.2,0h.074l.175,0,.194,0,.213,0,.241,0,.2,0,.078,0,.171,0,.19,0,.251.005.2,0,.2,0,.256.006.195,0,.086,0,.171,0,.193,0,.2,0,.137,0,.2,0,.2,0,.166,0,.193,0,.093,0,.169,0,.194.005.215.006.233.006.194.005.094,0,.169,0,.195.005.218.006.112,0,.125,0,.081,0,.121,0,.075,0,.172,0,.085,0,.11,0,.086,0,.173.005.069,0,.128,0,.075,0h.035l-.181,6Q559.956,6,550,6V0Zm30,.678c6.677.3,13.353.708,19.965,1.21l-.454,5.983q-9.842-.748-19.783-1.2L580,.678Zm29.931,2.044q6.871.628,13.691,1.4h0l.152.017h.011l.285.032.019,0,.115.013.078.009.1.012.165.019.055.006.149.017.047.005.191.022h0l.214.025h0q2.305.266,4.6.548l-.73,5.955q-9.793-1.2-19.7-2.107Zm29.8,3.422.1.014.067.009.1.014.1.014.084.012.179.025.031,0,.159.022.058.008.183.026h0q3.718.521,7.415,1.083h.007l.407.062.029,0,.178.027.024,0,.192.029.047.007.144.022.061.009.153.024.038.006.183.028.065.01.116.018.085.013.109.017.148.023.086.013.111.017.061.009.4.063.042.007.133.021.023,0,.444.07h.006q2.62.412,5.232.846h0l.441.073.034.006.128.021.045.007.225.038.059.01.1.017.089.015.087.015.178.03.013,0,.181.03.042.007,1.142.194-1.008,5.915q-9.727-1.658-19.576-3.022Zm29.605,4.808q8.557,1.6,17.012,3.417h.006l.142.031.024.005.421.091.033.007.126.027.049.01.383.083.073.016.093.02.113.025.091.02.149.033.062.014.13.028.056.012.38.083.029.006.232.051-1.287,5.86q-9.641-2.117-19.418-3.943Zm29.352,6.2c1.242.294,2.478.59,3.717.89h0l.2.048.009,0,.389.095.038.009.158.038.035.008.186.045.034.008.152.037.06.015.115.028.076.019.165.041.074.018.1.025.1.024.073.018.107.026.022.005.247.061.053.013.118.029.044.011.422.1.011,0,.147.036.007,0,.446.111.008,0q1.813.452,3.621.913l.022.006.141.036h0l.433.111.029.007.135.035.022.006.256.066.033.008.1.026.085.022.092.024.087.023.133.034.116.03.079.021.107.028.075.019.138.036.038.01.18.047.045.012.158.041.026.007c1.987.516,3.946,1.036,5.923,1.571l-1.566,5.792q-9.526-2.576-19.2-4.864l1.38-5.839Zm29.022,7.6q6.775,1.95,13.47,4.044l.017.005.56.175.049.015.115.036.06.019.36.113.067.021.1.031.077.024.092.029.155.049.083.026.095.03.08.025.123.039.045.014.172.055.058.018.125.04.058.019.135.043.043.014.18.057.025.008.157.05.043.014.168.054.009,0,.191.061.012,0,.176.056.023.008.178.057.008,0,.377.121.03.01,1.4.452L744.982,36.3q-9.385-3.035-18.935-5.785Zm28.612,9q6.382,2.18,12.683,4.49h0l.568.209.029.011.274.1.022.008.248.091.047.017.255.094.066.025.195.072.079.029.23.085.1.039.143.053.116.043.2.075.139.052.1.038.292.109.036.013.172.064.043.016c.924.345,1.851.694,2.772,1.043l-2.126,5.611q-9.227-3.5-18.633-6.711Zm28.139,10.4c6.227,2.479,12.358,5.04,18.454,7.708l-2.406,5.5q-9.036-3.955-18.267-7.631l2.219-5.574Zm27.582,11.8.481.221.008,0,.168.077.056.026.255.117.1.045.129.059.205.095.082.038.177.082.077.036.237.11.053.025.23.107.027.013.267.124.022.01q6.665,3.092,13.217,6.333l.022.011.259.128.035.017.226.112.043.021.232.115.08.04L828.9,64l.126.063.154.077.118.059.116.058.218.109.072.036.371.185-2.684,5.366q-8.82-4.411-17.851-8.548Zm26.938,13.185q4.1,2.139,8.153,4.34l.019.01.506.275.02.011.334.182h0l.167.091.03.016.287.157.059.032.463.253.078.043.2.112.111.061.13.071.1.058.191.105.114.063.124.068.132.072.161.088.126.07.109.06.2.108.1.057.138.076.1.053.2.113.093.052.171.095.1.053.183.1.081.045.22.122.063.035.185.1.067.037.228.127.056.031.212.118.034.019.238.133.053.03.244.136,0,0,.247.138.039.022.252.141.013.007.246.138.025.014.257.144.017.01.526.3.014.008,1.349.763-2.961,5.219q-8.578-4.867-17.385-9.464l2.776-5.319ZM865.2,83.708c1.566.926,3.144,1.868,4.7,2.808l.005,0,.5.3.018.011.3.185.028.017.47.286.048.029.461.281.058.035.249.152.065.04.141.086.069.042.231.141.078.048.211.129.094.058.126.077.1.063.179.11.118.073.113.069.166.1.117.072.134.082.1.059.2.121.092.057.155.1.093.057.185.114.087.054.211.13.05.031.186.116.066.041.219.136.058.036.2.122.043.027.228.142.051.032.238.148,0,0,.239.149.037.023.238.149.033.021.235.147.012.008.247.155.029.018.5.314.021.013.254.16,0,0,.525.33,0,0q1.714,1.08,3.418,2.171L879,99.24q-8.3-5.316-16.847-10.367l3.053-5.165Zm25.4,15.947q3.262,2.173,6.484,4.387l0,0,.253.174.012.008.247.17,0,0,.231.159.051.035.22.152.045.031.178.123.071.049.2.137.084.058.141.1.134.093.13.09.106.073.144.1.144.1.1.067.184.128.1.068.129.09.068.048.238.166.046.032.455.318.017.012q3.137,2.194,6.23,4.423l-3.508,4.868q-8-5.764-16.26-11.269Zm24.5,17.316q1.254.94,2.5,1.885l0,0,.5.378h0l.236.18.027.02.235.179h0l.23.176.029.022.221.168.042.032.45.344.039.03.223.171.024.018.217.167.021.016.221.17.042.032.221.17.023.018.208.16.035.027.216.167.046.035.444.343.041.032.219.17.031.024.215.166.017.013.228.177.029.023.231.179,0,0,.234.182.014.011.23.179.027.021.472.368.01.007q3.691,2.883,7.319,5.821l-3.777,4.662q-7.656-6.2-15.595-12.15Zm23.482,18.657.76.641.006.005.127.108.026.022.119.1.021.018.139.118,0,0,.127.108.064.054.063.053.08.068.046.039.084.072.037.031.443.377.012.01q2.022,1.722,4.023,3.462l.012.011.111.1h0l.349.3,0,0,.1.088.026.023.091.08.04.035.089.078.033.029.284.248.056.049.067.059.066.057.061.053.085.075.045.039.117.1.015.013.134.118.027.023.108.095.037.032.1.091.028.024.123.108.012.01.281.247,0,0,.136.12.007.006q3.136,2.765,6.212,5.567l-4.041,4.436q-7.284-6.636-14.872-13.026Zm22.373,19.987c.926.877,1.833,1.744,2.751,2.627l.012.012.118.114.018.017.114.11.019.018.263.253.015.014.113.109.029.028.1.095.034.033.1.094.034.033.094.091.055.054.1.1.057.056.065.063.068.066.053.051.073.071.045.044.079.077.027.026.3.291.018.018.1.095.018.018.1.1.007.007.438.427.007.007.109.106h0q4.417,4.316,8.709,8.724l-4.3,4.186q-6.871-7.056-14.065-13.874ZM982.1,176.893c2.376,2.541,4.708,5.09,7.022,7.674l.007.008.117.131.005.006.49.548.012.013q2.888,3.237,5.7,6.508l-4.549,3.913q-6.422-7.467-13.189-14.7l4.383-4.1Zm19.8,22.539q1.144,1.388,2.276,2.783l.006.007.08.1.034.042.067.082.044.055.059.073.077.095.027.033.114.14h0l.114.141.008.01.11.137,0,0q3.494,4.328,6.865,8.713l.014.019.1.125.014.018.217.283.022.029.08.1.046.06.054.071.054.071.044.058.065.085.024.032q.891,1.165,1.773,2.334l-4.789,3.614q-5.932-7.86-12.228-15.5Zm18.324,23.747c.772,1.071,1.534,2.137,2.3,3.213l.01.015.09.127.022.031.078.11.027.038.079.112.022.032.092.13.009.013.1.141.026.037.073.1.037.053.058.083.046.065.05.071.051.073.045.064.052.073.041.059.114.163.031.044.066.094.027.039.065.092.034.049.062.089.029.042.068.1.019.027.237.339.02.028.066.094.032.045.062.089.036.051.058.084.036.051.064.092.006.009.239.343.031.045.062.09.031.045.063.091.034.049.062.089.034.049.06.087.037.054.113.163.034.049.057.082.041.06.049.071.053.076.044.063.056.081.041.059.069.1.028.041.1.144.009.013.088.128.028.041.07.1.032.047.067.1.031.045.078.113.019.028.2.3h0l.1.145.013.019.089.13.012.018.094.137.006.009q2.344,3.433,4.626,6.911l-5.017,3.291q-5.4-8.232-11.186-16.254l4.867-3.51Zm16.727,24.9q.7,1.127,1.4,2.257l.006.01.075.122.013.021.214.348.024.039.046.075.048.079.034.056.059.1.029.047.068.111.021.035.078.128.012.02q2.482,4.057,4.867,8.153l0,0,.274.471,0,.005.08.138.025.043.064.11.025.044.061.1.028.048.061.105.027.046.077.133.021.037.069.12.043.074.04.069.05.087.031.054.054.094.025.043.063.11,0,.006q1.05,1.824,2.081,3.657l-5.229,2.942q-4.829-8.582-10.064-16.966Zm15.006,25.973.058.109.01.019.083.156.009.016.071.134.024.046.057.107.028.052.052.1.03.056.052.1.03.056.063.12.014.027.081.153.017.033.062.118.032.06.045.086.036.069.047.089.032.06.049.093.031.059.054.1.025.048.079.15.013.025.066.126.027.051.051.1.034.064.047.089.032.06.047.09.035.067.046.088.032.061.077.147.016.031.065.124.025.048.052.1.032.062.049.095.03.057.052.1.027.051.061.117.019.036.079.152.007.014.075.144.012.024.067.13.02.038.06.117.021.04.06.115.022.042.073.142,0,.006.165.32.006.011.073.141.016.032.067.13.012.023.071.138.01.019.327.639,0,.007.08.157v0l.08.157,0,.007c1.881,3.688,3.7,7.381,5.467,11.119l-5.422,2.568q-4.216-8.9-8.857-17.614ZM1065.105,301q4.013,9.023,7.592,18.22l.011.028.054.139.01.025.019.05-5.593,2.171q-3.565-9.184-7.575-18.2l5.482-2.439Zm11.191,27.828q1.668,4.628,3.224,9.295v0l.044.132.009.027.043.13.006.017.044.134.006.017.185.558.01.031.038.114.015.045.036.108.017.051.035.107.013.04.175.533.014.042.034.1.02.06.032.1.021.063.03.091.024.072.029.09.023.072.1.322.025.078.026.08.026.079.026.08.029.089.023.071.031.1.021.064.038.117.015.046.051.158.019.06.033.1.021.064.033.1.019.059.035.111.016.05.039.123.013.04.161.5,0,.011.049.154.008.026.046.144.008.026.047.147.007.021c.416,1.313.817,2.6,1.22,3.919l-5.738,1.754q-2.881-9.427-6.222-18.694Zm9.12,28.572c1.785,6.407,3.418,12.886,4.885,19.392l-5.853,1.319q-2.169-9.623-4.812-19.1Zm6.961,29.174c.96,4.822,1.829,9.649,2.611,14.52v.007l.027.171,0,.011c.029.181.056.349.084.53l.007.043.019.121.012.074.014.09.013.084.012.079.015.1.009.058.089.566,0,.01.023.145,0,.012q.24,1.544.467,3.092l-5.936.873q-1.437-9.77-3.358-19.409l5.885-1.172Zm4.739,29.617q.806,6.644,1.39,13.344v0l.012.138,0,.029.011.124,0,.05c0,.038.006.076.01.114l0,.052.01.112.007.089.012.136.009.106.006.069.009.108.005.061.01.118,0,.055.012.145,0,.022.045.547s0,0,0,0q.183,2.237.34,4.477l-5.985.421q-.693-9.859-1.877-19.6Zm2.481,29.887.011.253c0,.015,0,.029,0,.044,0,.035,0,.071,0,.106l0,.066c0,.035,0,.071,0,.106l.006.131c0,.025,0,.049,0,.074l0,.1,0,.066.006.138v.024c0,.062,0,.109.007.172v.033l.006.142c0,.012,0,.025,0,.037.169,4.094.275,8.186.317,12.306h0l0,.374h0c0,.187,0,.371,0,.558v.01c0,.062,0,.1,0,.166,0,.008,0,.017,0,.025,0,.125,0,.232,0,.357,0,.007,0,.014,0,.021,0,.062,0,.1,0,.161,0,.007,0,.014,0,.021,0,.125,0,.233,0,.358,0,.008,0,.015,0,.023,0,.063,0,.092,0,.154,0,.01,0,.02,0,.03,0,.125,0,.223,0,.348,0,.014,0,.028,0,.041,0,.031,0,.106,0,.137,0,.013,0,.027,0,.04,0,.125,0,.219,0,.344v.042c0,.031,0,.1,0,.131v.05c0,.125,0,.211,0,.336,0,.018,0,.035,0,.053v.123c0,.017,0,.033,0,.05V464h0v.166c0,.017,0,.034,0,.051v.116c0,.019,0,.039,0,.058,0,.047,0,.091,0,.138s0,.07,0,.105v.032q0,.571,0,1.142v.022c0,.029,0,.057,0,.086,0,.047,0,.121,0,.168l-6-.031L1094,464q0-8.866-.4-17.652Zm-5.777,29.82,6,.182c-.039,1.275-.083,2.536-.134,3.808,0,0,0,0,0,.007l-.006.163c0,.013,0,.025,0,.038,0,.047,0,.092-.006.139l0,.043c0,.047,0,.1-.006.144v.033l-.007.173c0,.017,0,.034,0,.051l-.005.121,0,.075,0,.094,0,.083,0,.087q0,.046,0,.092c0,.016,0,.053,0,.068l0,.1v.023q-.01.218-.019.436v.017q0,.07-.006.141v.022q0,.072-.006.143c0,.016,0-.007,0,.009q-.018.388-.036.775h0q-.119,2.5-.27,4.993v0q-.023.377-.046.754l0,.034-.008.121,0,.048c0,.039,0,.077-.007.116l0,.052-.007.111,0,.057c0,.065-.008.131-.013.2l0,.072-.005.08-.006.094,0,.073-.007.106c0,.022,0,.044,0,.065l-.007.113,0,.059-.01.152c0,.006,0,.012,0,.018-.008.123-.016.234-.024.358l0,.03-.01.149,0,.034-.011.164s0,0,0,0c-.114,1.681-.239,3.348-.374,5.024l-5.98-.484Q1093.519,485.787,1093.82,475.9Zm-2.01,29.475,5.966.635c-.213,2-.439,3.98-.682,5.975l0,.016-.019.16,0,.023-.02.163,0,.014-.043.352-.006.047-.015.12-.009.073-.012.1-.01.076-.012.093-.01.082-.01.084-.011.086-.008.062-.029.231,0,.025c-.005.042-.011.084-.016.126l0,.036-.016.126,0,.036-.017.131,0,.02q-.058.458-.118.916v0q-.262,2.013-.544,4.02v0l-.021.153h0c-.035.251-.071.5-.107.754l0,.026-.018.126-.006.042-.017.117-.007.051-.016.111-.009.061-.023.158-.015.1-.01.072-.015.1-.01.069-.015.1-.01.065-.017.116-.007.05-.021.14,0,.03C1095.592,523.044,1091.113,511.923,1091.81,505.374ZM351.572,31.116l1.862,5.7q-9.447,3.084-18.721,6.454c-2.017-5.651-.976-6.028-.886-6.061l.025-.009.272-.1.006,0Q342.776,33.988,351.572,31.116ZM380.308,22.5l1.582,5.788q-9.589,2.621-19.021,5.532L361.1,28.091q4.088-1.261,8.205-2.469l.018-.005.139-.041.008,0,.29-.085h.005l.13-.038.038-.011.123-.036.049-.014.206-.06.062-.018.1-.029.085-.025.082-.024.121-.035.069-.02.157-.046.061-.018.121-.035.064-.018.149-.043.029-.008.182-.053.037-.011.156-.045.032-.009.185-.053h0l.2-.057h0l.191-.055.01,0Q376.345,23.588,380.308,22.5Zm29.114-7.21,1.3,5.857q-9.7,2.157-19.259,4.606l-1.489-5.812c2.125-.544,4.263-1.08,6.4-1.6h0l.193-.047.016,0,.388-.095.032-.008.174-.042.016,0,.38-.092.056-.014.127-.031.063-.015.174-.042.051-.012.129-.031.077-.019.11-.027.07-.017.157-.038.09-.022.1-.024.087-.021.093-.022.089-.021.14-.034.116-.028.076-.018.106-.025.077-.018.094-.023.144-.034.111-.026.081-.019.1-.024.073-.017.174-.042.083-.02.1-.024.076-.018.1-.025.081-.019.093-.022.153-.036.108-.026.074-.017.1-.024.077-.018.156-.037.1-.023.1-.023.079-.019.1-.024.091-.021.1-.025.14-.033.09-.021.09-.021.095-.022.081-.019.162-.038.093-.022.085-.02.1-.024.078-.018.142-.033.05-.012.158-.037.074-.017.118-.027.066-.015.18-.042h0l.18-.042.06-.014.131-.03.057-.013.372-.086.042-.01.159-.037.031-.007.392-.09.017,0,.195-.045h0l.4-.092.013,0C407.123,15.809,408.275,15.55,409.422,15.294Zm29.43-5.815,1.024,5.912q-9.8,1.7-19.463,3.686L419.2,13.2q4.264-.878,8.554-1.7l.021,0,.414-.079.046-.009.108-.021.087-.016.09-.017.168-.032.052-.01.144-.027.05-.009.163-.031.027-.005.2-.038h0l.207-.039h0c3.092-.583,6.2-1.145,9.314-1.684Zm29.676-4.424.746,5.954q-9.872,1.237-19.626,2.769l-.931-5.927Q456.1,6.692,463.541,5.7l.034,0,.271-.036.018,0,.1-.013.1-.013.082-.011L464.3,5.6l.026,0,.195-.026.037,0,.189-.025h0c1.261-.166,2.516-.326,3.78-.485Zm29.838-3.038L498.836,8q-9.917.779-19.729,1.855l-.654-5.964c3.223-.353,6.446-.682,9.686-.988h0l.642-.06h.008l.425-.04h.009l.207-.019h0l.418-.038.024,0,.409-.037.032,0,.182-.017.021,0,.209-.019h0l.2-.018.029,0,.19-.017h.014l.2-.018.029,0,.175-.016.036,0,.394-.035.053,0,.164-.014.034,0,.2-.017.04,0,.158-.014.052,0,.189-.016h.008l.193-.017.052,0,.154-.013.044,0,.193-.017.043,0,.148-.013.069-.006.164-.014.024,0,.191-.016.056,0,.152-.013.045,0,.195-.016.031,0,.167-.014.052,0,.154-.013.047,0,.19-.016.048,0,.148-.012.057,0,.2-.016h0l.2-.016.045,0,.173-.014.024,0,.2-.016.036,0,.171-.014.038,0,.4-.032.038,0,.169-.014.037,0,.2-.016h.014l.188-.015.034,0,.41-.032.024,0,.2-.015h.009ZM528.314.354l.2,6q-9.94.325-19.787.948l-.378-5.988c2.765-.175,5.527-.332,8.3-.472h0l.639-.032.032,0,.408-.02.039,0,.172-.008.036,0,.19-.009.058,0,.144-.007.063,0,.175-.008.052,0,.151-.007.076,0,.121-.006.078,0,.174-.008.08,0L519.45.7l.083,0,.141-.007.115-.005.1,0,.1,0,.093,0,.123-.006.134-.006.1,0,.1,0,.093,0,.151-.007.1,0,.113,0,.089,0,.108,0,.121-.005.132-.006.1,0,.094,0,.095,0L521.9.595l.054,0L522.1.586l.061,0,.183-.008h.009l.2-.008.04,0,.184-.008h.018c1.832-.075,3.676-.143,5.513-.2ZM550,0V6q-5.8,0-11.579.1l-.105-6c3.007-.053,5.994-.085,9.012-.1h.223c.214,0,.435,0,.659,0H550Z\" transform=\"translate(-331 77)\" fill=\"#fff\"/>\r\n  <g id=\"Group_96\" data-name=\"Group 96\" transform=\"translate(-1703 2156.2)\">\r\n    <path id=\"Path_2930\" data-name=\"Path 2930\" d=\"M3805.85-1925.85,3781.5-1545.2h175.65l-25-380.65Z\" transform=\"translate(-244)\" fill=\"#b38011\"/>\r\n    <path id=\"Path_2931\" data-name=\"Path 2931\" d=\"M3802.5-1870.85l-3.35,53.65h140l-3.3-53.65Z\" transform=\"translate(-243.825)\" fill=\"#b38011\"/>\r\n    <path id=\"Path_2932\" data-name=\"Path 2932\" d=\"M3795.5-1762.15l-3.65,53.3h154.3l-3-53.3Z\" transform=\"translate(-243.675)\" fill=\"#b38011\"/>\r\n    <path id=\"Path_2933\" data-name=\"Path 2933\" d=\"M3788.15-1654.85l-3.65,55h169l-4-55Z\" transform=\"translate(-243.675)\" fill=\"#b38011\"/>\r\n  </g>\r\n  <!-- <g id=\"Group_97\" data-name=\"Group 97\" transform=\"translate(-1947 2149)\" opacity=\"0.62\">\r\n    <path id=\"Path_2936\" data-name=\"Path 2936\" d=\"M3944.371-2037.962s-22.429-18.461-51.852-8.462-30.986,32.577-30.986,32.577-8.049,3.077-11.449,10.769-5.978,13.077-5.978,13.077-38.058,17.154-18.013,43.577,52.125,4.115,52.125,4.115,7.815,6.192,21.608,4.885,21.1-6.962,21.1-6.962,7.815,9.231,23.445,9.5,30.244-7.423,30.244-7.423,16.919,23.307,45.834,18.961,41.927-24.885,41.927-24.885,38.8,23.077,67.989,0,15.4-47.692,15.4-47.692,7.268-4.038,9.886-9.192a35.592,35.592,0,0,0,3.125-11.538s27.079.731,33.838-16.693.274-32.038-18.756-39.231-33.6,7.692-33.6,7.692-15.043-13.346-33.565-10a86.262,86.262,0,0,0-32.588,13.846s-30.478-29.192-70.06-18.961S3944.371-2037.962,3944.371-2037.962Z\" transform=\"translate(0)\" fill=\"#925e00\"/>\r\n    <path id=\"Path_2935\" data-name=\"Path 2935\" d=\"M3843.152-1990a89.856,89.856,0,0,0,10.7,0,18.223,18.223,0,0,0,10.3-4.35,37.4,37.4,0,0,0,23.35,9.35c14.65.65,29.3-5,29.3-5s16.35,20.35,44.7,16,42.65-25,42.65-25,44.377,23.4,69.236,0,14.114-48,14.114-48a22.383,22.383,0,0,0,9-8.65,24.852,24.852,0,0,0,3.35-11s7.25.7,10.95,0,10.05-5,10.05-5-13.8-6.2-26.281-2.8-24.631,10.5-24.631,10.5-23.581-24.754-68.275-18.907-58.822,41.665-58.822,41.665-27.257-18.74-56.2-5.808-28.466,32.54-28.466,32.54a28.919,28.919,0,0,0-10.154,10.276A48,48,0,0,0,3843.152-1990Z\" transform=\"translate(0.109 -1)\" fill=\"#925e00\"/>\r\n  </g> -->\r\n  <g id=\"Group_86\" data-name=\"Group 86\" transform=\"translate(-1711 2148.2)\">\r\n    <path id=\"Path_2930-2\" data-name=\"Path 2930\" d=\"M3805.85-1925.85,3781.5-1545.2h175.65l-25-380.65Z\" transform=\"translate(-244)\" fill=\"#f9e44d\"/>\r\n    <path id=\"Path_2931-2\" data-name=\"Path 2931\" d=\"M3802.5-1870.85l-3.35,53.65h140l-3.3-53.65Z\" transform=\"translate(-243.825)\" fill=\"#e79f1c\"/>\r\n    <path id=\"Path_2932-2\" data-name=\"Path 2932\" d=\"M3795.5-1762.15l-3.65,53.3h154.3l-3-53.3Z\" transform=\"translate(-243.675)\" fill=\"#e79f1c\"/>\r\n    <path id=\"Path_2933-2\" data-name=\"Path 2933\" d=\"M3788.15-1654.85l-3.65,55h169l-4-55Z\" transform=\"translate(-243.675)\" fill=\"#e79f1c\"/>\r\n  </g>\r\n  <path id=\"Ellipse_33\" data-name=\"Ellipse 33\" d=\"M688,0h4.126l.3,0,.3,0,.455,0,.284,0,.3,0,.293,0,.3,0,.289,0,.3,0h.067l.737.006.254,0,.283,0,.291,0,.289,0,.3,0h.05l1.9.022h.01c2.98.039,5.918.092,8.889.162l-.141,6Q697.967,6,688,6V0Zm30,.527c5.393.19,10.722.428,16.083.719h.029l.232.013.073,0,.2.011.1.006.174.01.2.011.079,0q1.4.078,2.792.16l-.353,5.99q-9.877-.582-19.831-.933Zm29.959,1.587q3.906.277,7.8.589h.013l.29.023.023,0,.286.023.022,0,.61.05.052,0,.237.019.118.01.166.014.141.012.147.012.154.013.133.011.158.013.122.01.178.015.031,0L759.4,3l.036,0,.234.02.045,0,.229.02.053,0,.23.02.037,0,1.31.113.027,0,.237.021.045,0,.226.02.06.005.222.02.058.005.218.019.065.006.653.058.122.011.139.012.169.015.11.01.193.017.095.009.238.022.043,0q1.7.154,3.4.316l-.567,5.973Q757.474,8.8,747.539,8.1Zm29.879,2.655q9.976,1.068,19.861,2.368l-.782,5.949q-9.813-1.29-19.717-2.35ZM807.6,8.5q2.79.4,5.573.821h.008l.6.09.1.015.189.029.133.02.139.021.164.025.106.016.189.029.052.008c4.026.616,8.063,1.264,12.064,1.937l.01,0,.248.042.028,0,.169.028-1,5.916q-9.76-1.648-19.621-3.066Zm29.611,4.813.018,0,.261.047.059.011.226.041.081.015.219.04.076.014.276.051.145.026.135.025.168.031.108.02.18.033.093.017.2.036.053.01c5.8,1.069,11.6,2.2,17.339,3.393L855.63,23q-9.69-2.006-19.488-3.784Zm29.417,5.9q4.9,1.077,9.763,2.211l.01,0,.27.063.07.016.206.048.1.024.172.04.118.028.76.179.039.009.22.052.046.011q3.853.909,7.694,1.855l-1.435,5.826q-9.6-2.365-19.325-4.5ZM895.8,26.206q9.7,2.518,19.289,5.269l-1.654,5.768q-9.508-2.727-19.143-5.229ZM0,563.154l6,.017L6,564.5c0,6.165-5.93,9.365-5.977,4.7v-.037c0-.087,0-.175,0-.263v-.015q0-.284,0-.567c0-.019,0-.016,0-.035q0-.12,0-.241c0-.019,0-.031,0-.05l0-.268v0c0-.093,0-.187,0-.28v-.044c0-.077,0-.152,0-.229,0-.019,0-.049,0-.068v-.211c0-.019,0-.046,0-.065q0-.27,0-.539c0-.019,0-.056,0-.075q0-.1,0-.2c0-.019,0-.065,0-.084,0-.068,0-.137,0-.206,0-.019,0-.046,0-.065,0-.088,0-.175,0-.263,0-.038,0-.029,0-.067v-.291q0-.094,0-.187v-.082c0-.088,0-.177,0-.266v-.188q0-.073,0-.147v0Q0,563.658,0,563.154Zm1.04-29.98,5.987.4q-.655,9.817-.894,19.723l-6-.144c.128-5.322.345-10.611.651-15.9h0l.013-.224v-.005l.012-.2,0-.03.012-.208c0-.009,0-.018,0-.027,0-.056.007-.111.01-.168,0-.023,0-.047,0-.07l.009-.151.006-.1.007-.122q0-.052.006-.1l0-.08c.008-.136.017-.273.025-.409v-.011Q.969,534.259,1.042,533.174Zm2.952-29.85,5.949.781q-1.283,9.765-2.153,19.629l-5.977-.527c.586-6.652,1.316-13.3,2.181-19.884Zm4.855-29.6,5.887,1.16q-1.905,9.671-3.4,19.45L5.4,493.427l.018-.116.018-.116.015-.1.018-.116.008-.054.066-.424v-.008q.8-5.175,1.72-10.321l0-.021.074-.414.012-.066.021-.116.016-.087.029-.159.018-.1.016-.088.025-.136.01-.055.032-.179.012-.066.028-.155.006-.035.036-.2.007-.039.032-.174.005-.03.077-.422,0-.009C8.088,477.651,8.461,475.69,8.848,473.725Zm6.73-29.229,5.8,1.531q-2.516,9.537-4.634,19.194l-5.861-1.285q1.892-8.631,4.1-17.171l0-.008.109-.42.013-.051.03-.117.018-.068.045-.171.027-.1.02-.078.034-.131.015-.058.049-.186.01-.037.046-.176.006-.022.169-.642Zm8.559-28.748,5.694,1.891Q26.72,427.008,24,436.507l-5.768-1.652q2.754-9.614,5.906-19.106Zm10.327-28.162,5.567,2.237q-3.684,9.169-6.991,18.475l-5.654-2.008q.623-1.754,1.26-3.5l.019-.053.133-.364.028-.077.033-.091.046-.125.028-.078.054-.148.023-.062.05-.138.018-.048.066-.181.016-.044.055-.151.016-.044.142-.385.009-.026c1.1-2.979,2.218-5.927,3.375-8.884l.007-.018.073-.187,0-.012.075-.191.015-.038.057-.145.023-.058.068-.173.021-.054.046-.117.036-.091.033-.084.073-.185.021-.052.052-.131.007-.017Q33.912,388.96,34.464,387.586Zm12.02-27.481,5.423,2.568q-4.233,8.938-8.1,18.022l-5.521-2.349q.547-1.286,1.1-2.569l.01-.022.054-.126.02-.046.077-.177.039-.089.036-.084.053-.122.021-.048.082-.188,0-.009.085-.2v0q3.186-7.322,6.615-14.563Zm13.632-26.718,5.263,2.882q-4.753,8.68-9.153,17.515l-5.371-2.675.413-.827.017-.034.107-.215.034-.067.121-.242.029-.057.092-.182.055-.109.065-.128.107-.213.053-.105.075-.149.042-.082.08-.159v0l.186-.368.02-.039.089-.176.017-.033.288-.568,0-.009c.706-1.388,1.411-2.761,2.13-4.144l.011-.02.292-.56.017-.033.093-.178.015-.029.184-.352.014-.026.085-.162.04-.076.079-.15.045-.086.129-.245.056-.107.068-.129.072-.137.077-.146.089-.17.053-.1.086-.164.041-.077.126-.238.03-.057.106-.2.031-.059.273-.514.016-.03Q58.543,336.26,60.117,333.387ZM75.272,307.5l5.09,3.177q-5.245,8.4-10.151,16.965L65,324.661q3.488-6.089,7.146-12.1l0,0,.484-.794,0-.008.322-.526.007-.011Q74.114,309.358,75.272,307.5ZM91.86,282.508l4.906,3.454q-5.706,8.1-11.089,16.378l-5.029-3.272c.429-.659.844-1.294,1.275-1.951l0-.006.343-.522.038-.057.1-.145.057-.086.12-.182.094-.142.073-.11.088-.133.06-.091.146-.221.021-.031.135-.2.045-.067.124-.186.034-.051.158-.237.02-.03.144-.217.025-.038.331-.5.013-.019.511-.765,0-.005q1.128-1.685,2.27-3.363v0q.435-.64.873-1.279l.015-.022.34-.5.02-.03.144-.21.031-.045.162-.236.017-.025.141-.206.047-.068.127-.184.034-.049.152-.22.055-.08.105-.152.06-.087.12-.174.079-.114.1-.142.077-.111.075-.109.31-.446.051-.073.1-.143.042-.06.349-.5.014-.02c.452-.647.892-1.276,1.347-1.921Zm17.928-24.052,4.713,3.713q-6.138,7.792-11.968,15.759l-4.843-3.543Q103.582,266.333,109.788,258.456Zm19.177-23.071,4.513,3.954q-6.541,7.466-12.788,15.115l-4.647-3.8.007-.008.172-.21.053-.065.128-.156.059-.072.169-.207.03-.037.144-.176.064-.079.125-.153.053-.064.172-.209.043-.052.135-.164.058-.071.133-.162.048-.059.171-.207.053-.064.125-.151.063-.076.145-.175.045-.054.158-.191.063-.076.123-.149.056-.068.171-.206.047-.056.132-.159.066-.079.121-.146.057-.069.171-.2.051-.062.131-.158.059-.071.153-.184.023-.028.176-.21.057-.069.129-.154.057-.068.175-.209.021-.025.157-.187.061-.072.125-.149.059-.071.174-.208.037-.044.141-.168.06-.071.14-.167.041-.049.175-.208.054-.064.131-.156.055-.065.163-.194.021-.025.177-.209.054-.064.129-.152.06-.071.172-.2.046-.054.135-.159.067-.079.124-.146.057-.067.17-.2.063-.074.122-.143.068-.08.125-.147.059-.07.161-.19.08-.093.1-.113.09-.105.11-.129.121-.141.1-.118.09-.106.089-.1.094-.109.055-.064.213-.248.049-.057.119-.139.042-.049.415-.482.008-.009q1.678-1.95,3.375-3.887ZM149.3,213.333l4.308,4.177q-6.912,7.129-13.545,14.445l-4.445-4.03Q142.313,220.535,149.3,213.333Zm21.4-21.014,4.1,4.383q-7.255,6.783-14.245,13.758l-4.238-4.247.014-.014.2-.2.015-.015Q163.492,199.06,170.7,192.319Zm22.4-19.956,3.884,4.573q-7.571,6.432-14.892,13.06l-4.027-4.448.214-.194.036-.033.187-.169.035-.032.213-.192.042-.038.156-.141.088-.079.12-.109.09-.081.154-.139.151-.136.07-.063.137-.123.043-.039q6.153-5.529,12.485-10.926l.021-.018.153-.13.055-.046.435-.37.1-.082.053-.045ZM216.4,153.479l3.669,4.748q-7.863,6.076-15.488,12.351l-3.813-4.633,1.072-.88.055-.045.139-.114.08-.065.123-.1.19-.155.1-.08.123-.1.093-.076.152-.124.058-.047.218-.178.041-.033.187-.153.05-.04.2-.159.028-.023.461-.375.034-.028.214-.174.013-.011.466-.378.035-.028.206-.167.023-.019.462-.373.041-.033.194-.156.037-.03.454-.366.055-.044.165-.133.07-.056.19-.153.03-.024.215-.172.072-.058.151-.121.077-.062.145-.116.131-.1.145-.116.116-.093.094-.075.126-.1.077-.061.478-.381.036-.029.162-.129.029-.023c2.5-1.99,4.99-3.944,7.525-5.9Zm24.146-17.8L244,140.588q-8.13,5.716-16.036,11.637l-3.6-4.8c2.128-1.593,4.237-3.153,6.39-4.725l.032-.023.173-.126.024-.018.515-.375.072-.053.141-.1.073-.053.465-.338.092-.067.127-.092.1-.073.119-.086.148-.107.14-.1.145-.1.1-.071.13-.094.1-.072.163-.118.08-.058.2-.145.079-.057.153-.111.083-.06.172-.124.058-.042.229-.165.05-.036.181-.13.07-.05.185-.133.047-.034.235-.169.034-.025.2-.142.064-.046.181-.13.056-.04.465-.333.066-.047.178-.127.057-.041.473-.337.046-.033.2-.139.05-.035.483-.344.022-.016.216-.153.046-.032.219-.156.018-.013.25-.177,0,0,.235-.167.038-.027.224-.158.016-.012.495-.349.03-.021.221-.156.026-.019.494-.347Zm24.914-16.709,3.232,5.055q-8.375,5.355-16.539,10.917l-3.378-4.959q8.242-5.615,16.685-11.013Zm25.616-15.612,3.012,5.189q-8.6,4.991-17,10.194l-3.159-5.1q4.367-2.7,8.787-5.353l.005,0,.527-.315.029-.017.211-.126.078-.047.169-.1.082-.049.2-.117.135-.08.136-.081.136-.081.089-.053.155-.092.062-.037.79-.469,0,0c1.851-1.1,3.69-2.176,5.555-3.259Zm26.255-14.511,2.792,5.311q-8.8,4.627-17.419,9.468L299.769,98.4Q308.457,93.515,317.335,88.848ZM344.17,75.439l2.571,5.421q-8.987,4.263-17.8,8.742l-2.718-5.349q.972-.494,1.946-.985h0l.242-.122.1-.05.144-.073.128-.064.1-.05.585-.294.009,0q7.078-3.553,14.263-6.966l.008,0Zm27.36-12.306,2.351,5.52q-9.155,3.9-18.146,8.015l-2.5-5.455q5.238-2.4,10.531-4.723l.016-.007.24-.105.073-.032.194-.085.083-.036.193-.084.128-.056.186-.081.139-.061.114-.05.156-.068.086-.038.174-.076.033-.014C367.574,64.828,369.528,63.986,371.53,63.134Zm27.831-11.2,2.13,5.609q-9.305,3.533-18.457,7.288l-2.277-5.551.068-.028.033-.013.606-.248.094-.038.151-.062.115-.047.143-.058.137-.056.116-.047.25-.1.1-.039.173-.07.105-.043.164-.067.1-.041.208-.085.05-.02.556-.225.031-.013.251-.1.035-.014Q391.748,54.822,399.361,51.931Zm28.25-10.1,1.91,5.688q-9.439,3.169-18.736,6.561l-2.057-5.636Q418.1,45.023,427.611,41.831Zm28.613-9,1.69,5.757q-9.554,2.8-18.975,5.833L437.1,38.712l.765-.245.072-.023.16-.051.119-.038.139-.044.159-.051.1-.032.235-.075.036-.012.29-.093.006,0,.278-.089.036-.011.262-.083.025-.008q4.006-1.272,8.036-2.5l.008,0,.283-.087.02-.006.887-.27.007,0,.275-.083.045-.014.246-.075.047-.014.269-.081.014,0,.582-.176.046-.014.234-.071.068-.021.225-.068.061-.018.27-.081.01,0,.3-.089.013,0,.266-.08.066-.02.223-.067.063-.019.236-.071.051-.015.577-.172.032-.01.255-.076.052-.015.235-.07.058-.017.271-.08.008,0,.6-.177h0l.285-.084.028-.008Zm28.936-7.9,1.471,5.817q-9.653,2.44-19.183,5.107l-1.617-5.778q3.29-.92,6.595-1.814l.053-.014.225-.061.078-.021.206-.055.084-.023.273-.074.112-.03.15-.04.179-.048.088-.024.192-.052.063-.017.215-.058.014,0c3.6-.963,7.179-1.9,10.8-2.811Zm29.215-6.8L515.627,24q-9.737,2.077-19.36,4.382l-1.4-5.835,1.674-.4.072-.017.179-.042.107-.025.157-.037.139-.033.135-.032.567-.134.017,0,.281-.066.023-.005.277-.065.021-.005Q506.409,19.829,514.375,18.129Zm29.449-5.714,1.034,5.91q-9.807,1.716-19.508,3.661L524.172,16.1l.055-.011.192-.038.1-.02L524.7,16l.12-.024.166-.033.27-.054.108-.022.187-.037.088-.017.188-.037.085-.017.2-.039.07-.014.205-.041.049-.01.978-.192.033-.006.23-.045.035-.007.239-.047.01,0,1.289-.251h0l.255-.049.009,0,1.546-.3.015,0,1.541-.293.018,0,.25-.047h.007l1.555-.292h0l.253-.047.014,0,1.274-.237.03-.005.232-.043.036-.007.238-.044.013,0,1.282-.235.023,0,.245-.045.014,0c1.913-.349,3.8-.687,5.723-1.022Zm29.642-4.628.817,5.944q-9.862,1.356-19.628,2.942L553.7,10.75Q560.76,9.6,567.877,8.575l.03,0,.261-.038.059-.008.228-.033.086-.012.211-.03.083-.012.222-.032.176-.025.171-.024.18-.026.092-.013.205-.029.068-.01.225-.032.029,0c1.083-.153,2.179-.306,3.264-.455Zm29.8-3.547.6,5.97q-9.912,1-19.735,2.229l-.745-5.954c2.625-.329,5.226-.642,7.86-.946h.008l.262-.03h0l.756-.087.053-.006.179-.021.113-.013.159-.018.141-.016.141-.016.159-.018.126-.014.21-.024.072-.008.913-.1h.013Q598.9,4.679,603.262,4.239Zm29.89-2.472.387,5.988q-9.942.643-19.8,1.519l-.53-5.977Q623.139,2.416,633.153,1.768ZM663.114.362l.175,6q-9.957.29-19.841.813l-.317-5.992q4.349-.23,8.713-.415h.032l.269-.011.049,0,.25-.01.061,0,.246-.01.059,0,.248-.01.057,0,.6-.024.1,0L654,.677l.131-.005.16-.006.144-.006.152-.006.143-.006.148-.006.153-.006.122,0,.178-.007.064,0,.761-.029h.011l.237-.009.051,0,.231-.009.051,0,.235-.009.044,0c2.042-.074,4.048-.14,6.094-.2ZM688,0V6q-7.408,0-14.778.129l-.1-6,.187,0,.807-.013h.02l.255,0h.018l.263,0h.008c2.77-.043,5.527-.073,8.3-.089l.284,0h.014l.817,0h.829c.191,0,.366,0,.559,0H688Z\" transform=\"translate(2083)\" fill=\"#fff\"/>\r\n  <g id=\"Group_103\" data-name=\"Group 103\" transform=\"translate(231.5 -166)\" opacity=\"0.25\">\r\n    <path id=\"Path_43\" data-name=\"Path 43\" d=\"M1643,919.486l25.717,12.82v11.282l12.308-11.282,14.872,5.128,2.564,9.744,12.82-9.744,10.256,12.308,14.359-2.564,7.179,15.9,14.359,17.949H1768.2l5.641,9.744-5.641,16.41,8.718,10.256-3.077,12.821-8.205,6.667,8.205,9.231-8.205,4.615H1660Z\" transform=\"translate(341.002 -203.852)\" fill=\"#1c1c1c\"/>\r\n    <path id=\"Path_45\" data-name=\"Path 45\" d=\"M1632.306,916.409l36.4,15.4v11.438l12.371-11.437,14.939,4.435,2.442,10.971,12.263-9.57,10.5,11.2,15.182-1.634-5.128,18.941,5.128,15.385h-24.615l7.179,14.872-10.256,9.231,6.667,22.051-13.846,10.256-3.077,11.795s-39.487-7.179-41.026-11.795S1632.306,916.409,1632.306,916.409Z\" transform=\"translate(341.002 -203.852)\" fill=\"#1c1c1c\"/>\r\n    <rect id=\"Rectangle_36\" data-name=\"Rectangle 36\" width=\"82\" height=\"34\" transform=\"translate(1902.002 752.148)\" fill=\"#1c1c1c\"/>\r\n    <rect id=\"Rectangle_35\" data-name=\"Rectangle 35\" width=\"20\" height=\"55\" transform=\"translate(1818.002 669.148)\" fill=\"#1c1c1c\"/>\r\n    <path id=\"Path_41\" data-name=\"Path 41\" d=\"M1541.026,873l-28.718,14.18v33.333h18.974V895.9l9.744-4.615Z\" transform=\"translate(341.002 -203.852)\" fill=\"#1c1c1c\"/>\r\n    <path id=\"Path_40\" data-name=\"Path 40\" d=\"M1345.128,809.231h-22.051s-6.667-2.03-6.667-8.205,6.667-9.744,6.667-9.744h89.231s30.256,1.539,35.9,4.1,4.113,4.678,5.128,10.769,0,109.744,0,109.744H1345.128Z\" transform=\"translate(341.002 -203.852)\" fill=\"#1c1c1c\"/>\r\n    <rect id=\"Rectangle_34\" data-name=\"Rectangle 34\" width=\"78\" height=\"78\" transform=\"translate(1702.002 608.148)\" fill=\"#1c1c1c\"/>\r\n    <rect id=\"Rectangle_33\" data-name=\"Rectangle 33\" width=\"254\" height=\"75\" rx=\"15\" transform=\"translate(1655.002 708.148)\" fill=\"#1c1c1c\"/>\r\n    <circle id=\"Ellipse_25\" data-name=\"Ellipse 25\" cx=\"28\" cy=\"28\" r=\"28\" transform=\"translate(1651.002 783.148)\" fill=\"#1c1c1c\"/>\r\n    <circle id=\"Ellipse_26\" data-name=\"Ellipse 26\" cx=\"28\" cy=\"28\" r=\"28\" transform=\"translate(1858.002 783.148)\" fill=\"#1c1c1c\"/>\r\n    <path id=\"Rectangle_32\" data-name=\"Rectangle 32\" d=\"M38,10a28,28,0,0,0,0,56H245a28,28,0,0,0,0-56H38M38,0H245a38,38,0,0,1,0,76H38A38,38,0,0,1,38,0Z\" transform=\"translate(1641.002 773.148)\" fill=\"#1c1c1c\"/>\r\n    <path id=\"Path_42\" data-name=\"Path 42\" d=\"M1631.281,860.512h-26.154l35.385,191.795h72.308l-32.308-25.641Z\" transform=\"translate(341.002 -203.852)\" fill=\"#1c1c1c\"/>\r\n  </g>\r\n  <g id=\"Group_73\" data-name=\"Group 73\" transform=\"translate(225.5 -172)\">\r\n    <path id=\"Path_43-2\" data-name=\"Path 43\" d=\"M1643,919.486l25.717,12.82v11.282l12.308-11.282,14.872,5.128,2.564,9.744,12.82-9.744,10.256,12.308,14.359-2.564,7.179,15.9,14.359,17.949H1768.2l5.641,9.744-5.641,16.41,8.718,10.256-3.077,12.821-8.205,6.667,8.205,9.231-8.205,4.615H1660Z\" transform=\"translate(341.002 -203.852)\" fill=\"#464646\"/>\r\n    <path id=\"Path_45-2\" data-name=\"Path 45\" d=\"M1632.306,916.409l36.4,15.4v11.438l12.371-11.437,14.939,4.435,2.442,10.971,12.263-9.57,10.5,11.2,15.182-1.634-5.128,18.941,5.128,15.385h-24.615l7.179,14.872-10.256,9.231,6.667,22.051-13.846,10.256-3.077,11.795s-39.487-7.179-41.026-11.795S1632.306,916.409,1632.306,916.409Z\" transform=\"translate(341.002 -203.852)\" fill=\"#1c1c1c\"/>\r\n    <rect id=\"Rectangle_36-2\" data-name=\"Rectangle 36\" width=\"82\" height=\"34\" transform=\"translate(1902.002 752.148)\" fill=\"#464646\"/>\r\n    <rect id=\"Rectangle_35-2\" data-name=\"Rectangle 35\" width=\"20\" height=\"55\" transform=\"translate(1818.002 669.148)\" fill=\"#1c1c1c\"/>\r\n    <path id=\"Path_41-2\" data-name=\"Path 41\" d=\"M1541.026,873l-28.718,14.18v33.333h18.974V895.9l9.744-4.615Z\" transform=\"translate(341.002 -203.852)\" fill=\"#1c1c1c\"/>\r\n    <path id=\"Path_40-2\" data-name=\"Path 40\" d=\"M1345.128,809.231h-22.051s-6.667-2.03-6.667-8.205,6.667-9.744,6.667-9.744h89.231s30.256,1.539,35.9,4.1,4.113,4.678,5.128,10.769,0,109.744,0,109.744H1345.128Z\" transform=\"translate(341.002 -203.852)\" fill=\"#1c1c1c\"/>\r\n    <rect id=\"Rectangle_34-2\" data-name=\"Rectangle 34\" width=\"78\" height=\"78\" transform=\"translate(1702.002 608.148)\" fill=\"#3696da\"/>\r\n    <rect id=\"Rectangle_33-2\" data-name=\"Rectangle 33\" width=\"254\" height=\"75\" rx=\"15\" transform=\"translate(1655.002 708.148)\" fill=\"#f1533e\"/>\r\n    <circle id=\"Ellipse_25-2\" data-name=\"Ellipse 25\" cx=\"28\" cy=\"28\" r=\"28\" transform=\"translate(1651.002 783.148)\" fill=\"#1c1c1c\"/>\r\n    <circle id=\"Ellipse_26-2\" data-name=\"Ellipse 26\" cx=\"28\" cy=\"28\" r=\"28\" transform=\"translate(1858.002 783.148)\" fill=\"#1c1c1c\"/>\r\n    <path id=\"Rectangle_32-2\" data-name=\"Rectangle 32\" d=\"M38,10a28,28,0,0,0,0,56H245a28,28,0,0,0,0-56H38M38,0H245a38,38,0,0,1,0,76H38A38,38,0,0,1,38,0Z\" transform=\"translate(1641.002 773.148)\" fill=\"#707070\"/>\r\n    <path id=\"Path_42-2\" data-name=\"Path 42\" d=\"M1631.281,860.512h-26.154l35.385,191.795h72.308l-32.308-25.641Z\" transform=\"translate(341.002 -203.852)\" fill=\"#f1533e\"/>\r\n  </g>\r\n  <g id=\"Group_78\" data-name=\"Group 78\" transform=\"translate(118.5 -172)\">\r\n    <rect id=\"Rectangle_3\" data-name=\"Rectangle 3\" width=\"111\" height=\"31\" rx=\"6\" transform=\"translate(354 675.872)\" fill=\"#fff\"/>\r\n    <rect id=\"Rectangle_4\" data-name=\"Rectangle 4\" width=\"4\" height=\"11\" transform=\"translate(366 675.872)\" fill=\"#1c1c1c\"/>\r\n    <rect id=\"Rectangle_5\" data-name=\"Rectangle 5\" width=\"4\" height=\"11\" transform=\"translate(378 675.872)\" fill=\"#1c1c1c\"/>\r\n    <rect id=\"Rectangle_6\" data-name=\"Rectangle 6\" width=\"4\" height=\"11\" transform=\"translate(390 675.872)\" fill=\"#1c1c1c\"/>\r\n    <rect id=\"Rectangle_7\" data-name=\"Rectangle 7\" width=\"4\" height=\"11\" transform=\"translate(402 675.872)\" fill=\"#1c1c1c\"/>\r\n    <rect id=\"Rectangle_8\" data-name=\"Rectangle 8\" width=\"4\" height=\"11\" transform=\"translate(414 675.872)\" fill=\"#1c1c1c\"/>\r\n    <rect id=\"Rectangle_9\" data-name=\"Rectangle 9\" width=\"4\" height=\"11\" transform=\"translate(426 675.872)\" fill=\"#1c1c1c\"/>\r\n    <rect id=\"Rectangle_10\" data-name=\"Rectangle 10\" width=\"4\" height=\"11\" transform=\"translate(438 675.872)\" fill=\"#1c1c1c\"/>\r\n    <rect id=\"Rectangle_11\" data-name=\"Rectangle 11\" width=\"4\" height=\"11\" transform=\"translate(450 675.872)\" fill=\"#1c1c1c\"/>\r\n    <path id=\"Path_1\" data-name=\"Path 1\" d=\"M294.08,903.017s.038,7.284-7.671,7.284H152.992s-22.311-.637-25.817,15.937-7.012,36.017-7.012,36.017-2.55,13.068,11.793,15.937c.319-.319,248.612,0,248.612,0s9.243.638,12.112-12.749.956-57.053-3.187-72.671-15.915-32.415-15.915-32.415a9.41,9.41,0,0,0-6.4-3.284c-4.144-.319-62.153,0-62.153,0s-6.375.319-6.693,8.606S294.08,903.017,294.08,903.017Z\" transform=\"translate(187 -216.128)\" fill=\"#d5341f\"/>\r\n    <path id=\"Path_2\" data-name=\"Path 2\" d=\"M305.851,864.728h61.918s14.9,16.307,16.6,51.535.92,46.648.92,46.648.215,6.3-5.447,6.3H354.378s-9.241,1.32-13.2-11.127-7.544-24.518-7.544-24.518-3.263-10.939-16.277-16.408-16.785-8.11-14.9-23.764S305.851,864.728,305.851,864.728Z\" transform=\"translate(188 -215.555)\" fill=\"#3696da\"/>\r\n    <rect id=\"Rectangle_2\" data-name=\"Rectangle 2\" width=\"91\" height=\"24\" transform=\"translate(453 760.872)\"/>\r\n    <rect id=\"Rectangle_12\" data-name=\"Rectangle 12\" width=\"35\" height=\"5\" rx=\"1\" transform=\"translate(336 701.872)\" fill=\"#fff\"/>\r\n    <rect id=\"Rectangle_17\" data-name=\"Rectangle 17\" width=\"35\" height=\"5\" rx=\"1\" transform=\"translate(376 701.872)\" fill=\"#fff\"/>\r\n    <rect id=\"Rectangle_20\" data-name=\"Rectangle 20\" width=\"35\" height=\"5\" rx=\"1\" transform=\"translate(416 701.872)\" fill=\"#fff\"/>\r\n    <rect id=\"Rectangle_13\" data-name=\"Rectangle 13\" width=\"35\" height=\"5\" rx=\"1\" transform=\"translate(336 711.872)\" fill=\"#fff\"/>\r\n    <rect id=\"Rectangle_16\" data-name=\"Rectangle 16\" width=\"35\" height=\"5\" rx=\"1\" transform=\"translate(376 711.872)\" fill=\"#fff\"/>\r\n    <rect id=\"Rectangle_19\" data-name=\"Rectangle 19\" width=\"35\" height=\"5\" rx=\"1\" transform=\"translate(416 711.872)\" fill=\"#fff\"/>\r\n    <rect id=\"Rectangle_14\" data-name=\"Rectangle 14\" width=\"35\" height=\"5\" rx=\"1\" transform=\"translate(336 721.872)\" fill=\"#fff\"/>\r\n    <rect id=\"Rectangle_15\" data-name=\"Rectangle 15\" width=\"35\" height=\"5\" rx=\"1\" transform=\"translate(376 721.872)\" fill=\"#fff\"/>\r\n    <path id=\"Path_2946\" data-name=\"Path 2946\" d=\"M519.133,657.2s-3.945-6.312-10.651-5.128-7.1,9.467-7.1,9.467,3.55,35.9,4.339,41.815,6.706,18.54,6.706,18.54L592.9,906.117l15.385-4.734s-50.1-184.221-52.466-190.533-4.734-16.568-11.44-24.458S519.133,657.2,519.133,657.2Z\" transform=\"translate(184 -208.128)\" opacity=\"0.25\"/>\r\n    <rect id=\"Rectangle_18\" data-name=\"Rectangle 18\" width=\"35\" height=\"5\" rx=\"1\" transform=\"translate(416 721.872)\" fill=\"#fff\"/>\r\n    <path id=\"Path_6\" data-name=\"Path 6\" d=\"M504.537,660.75l-56.8,33.531,5.917,8.284,56.8-33.925Z\" transform=\"translate(189 -216.128)\" fill=\"#fff\"/>\r\n    <path id=\"Path_5\" data-name=\"Path 5\" d=\"M451.677,689.547l7.89,13.018L379.882,757l-13.807-14.6Z\" transform=\"translate(189 -216.128)\" fill=\"#da5241\"/>\r\n    <path id=\"Path_4\" data-name=\"Path 4\" d=\"M509.179,690.639,359.885,742.528s-23.578,8.466-37.6,28.9-14.9,24.51-18.237,40.9-1.821,49.461-1.821,49.461h37.627s-1.821-28.524,5.462-43.393,15.779-30.344,31.862-39.144,111.667-52.5,115.005-54.317,21.848-13.655,21.848-13.655Z\" transform=\"translate(189 -214.128)\"/>\r\n    <path id=\"Path_9\" data-name=\"Path 9\" d=\"M616.693,872.287,592.651,826.07l6.536-2.568L624.4,872.287Z\" transform=\"translate(189 -218.128)\" fill=\"#fffdf8\"/>\r\n    <path id=\"Path_8\" data-name=\"Path 8\" d=\"M563.078,744.617l43.077,81.539-14.872,7.692-42.564-83.59Z\" transform=\"translate(189 -218.128)\" fill=\"#da5243\"/>\r\n    <rect id=\"Rectangle_22\" data-name=\"Rectangle 22\" width=\"15\" height=\"25\" transform=\"translate(802 650.872)\"/>\r\n    <path id=\"Path_7\" data-name=\"Path 7\" d=\"M519.133,657.2s-3.945-6.312-10.651-5.128-7.1,9.467-7.1,9.467,3.55,35.9,4.339,41.815,6.706,18.54,6.706,18.54L592.9,906.117l15.385-4.734s-50.1-184.221-52.466-190.533-4.734-16.568-11.44-24.458S519.133,657.2,519.133,657.2Z\" transform=\"translate(189 -214.128)\" fill=\"#3696da\"/>\r\n    <rect id=\"Rectangle_41\" data-name=\"Rectangle 41\" width=\"48\" height=\"100.296\" transform=\"translate(771 672.576)\" fill=\"#b08c22\"/>\r\n    <path id=\"Path_10\" data-name=\"Path 10\" d=\"M613.809,1055.624l-9.467-13.412V977.123h18.146v65.089Z\" transform=\"translate(186.659 -217.424)\" fill=\"#fff\"/>\r\n    <rect id=\"Rectangle_23\" data-name=\"Rectangle 23\" width=\"48\" height=\"99\" transform=\"translate(776 672.576)\" fill=\"#f1533e\"/>\r\n    <g id=\"Path_2914\" data-name=\"Path 2914\" transform=\"translate(368.5 775)\">\r\n      <path d=\"M 227 63.99999618530273 L 33 63.99999618530273 C 28.81413269042969 63.99999618530273 24.75456619262695 63.18062973022461 20.93400001525879 61.564697265625 C 17.24279975891113 60.0034294128418 13.92733287811279 57.76792907714844 11.0797004699707 54.92029571533203 C 8.232067108154297 52.07266235351562 5.996566772460938 48.75719451904297 4.435299873352051 45.06599807739258 C 2.819366693496704 41.24542999267578 2 37.18586349487305 2 32.99999618530273 C 2 28.81412887573242 2.819366693496704 24.75456237792969 4.435299873352051 20.93399620056152 C 5.996566772460938 17.24279594421387 8.232067108154297 13.92733001708984 11.0797004699707 11.07969665527344 C 13.92733287811279 8.232063293457031 17.24279975891113 5.996562957763672 20.93400001525879 4.435296535491943 C 24.75456619262695 2.819363117218018 28.81413269042969 1.999996423721313 33 1.999996423721313 L 33.08706665039062 1.999996423721313 L 33.17380142211914 1.992429733276367 L 130.0680847167969 -6.459805488586426 L 226.8259735107422 1.992396354675293 L 226.9127960205078 1.999996423721313 L 227 1.999996423721313 C 231.1858673095703 1.999996423721313 235.2454376220703 2.819363117218018 239.0659942626953 4.435296535491943 C 242.7572021484375 5.996562957763672 246.0726623535156 8.232063293457031 248.9203033447266 11.07969665527344 C 251.7679290771484 13.92733001708984 254.0034332275391 17.24279594421387 255.564697265625 20.93399620056152 C 257.1806335449219 24.75456237792969 258 28.81412887573242 258 32.99999618530273 C 258 37.18586349487305 257.1806335449219 41.24542999267578 255.564697265625 45.06599807739258 C 254.0034332275391 48.75719451904297 251.7679290771484 52.07266235351562 248.9203033447266 54.92029571533203 C 246.0726623535156 57.76792907714844 242.7572021484375 60.0034294128418 239.0659942626953 61.564697265625 C 235.2454376220703 63.18062973022461 231.1858673095703 63.99999618530273 227 63.99999618530273 Z\" stroke=\"none\"/>\r\n      <path d=\"M 130.0678558349609 -4.452213287353516 L 33.17414855957031 4.000011444091797 L 33 4.000011444091797 C 29.083251953125 4.000011444091797 25.28582763671875 4.766223907470703 21.71310424804688 6.277332305908203 C 18.26028442382812 7.737762451171875 15.15849304199219 9.829296112060547 12.493896484375 12.49390411376953 C 9.82928466796875 15.15851211547852 7.737747192382812 18.26029586791992 6.277328491210938 21.71311950683594 C 4.766220092773438 25.28583145141602 4 29.08326148986816 4 33.0000114440918 C 4 36.91676330566406 4.766220092773438 40.71418762207031 6.277328491210938 44.28690338134766 C 7.737747192382812 47.73972320556641 9.82928466796875 50.84151077270508 12.493896484375 53.50611877441406 C 15.15849304199219 56.17072677612305 18.26028442382812 58.26226043701172 21.71310424804688 59.72269058227539 C 25.28582763671875 61.23379516601562 29.083251953125 62.0000114440918 33 62.0000114440918 L 227 62.0000114440918 C 230.916748046875 62.0000114440918 234.7141723632812 61.23379516601562 238.2868957519531 59.72269058227539 C 241.7397155761719 58.26226043701172 244.8415069580078 56.17072677612305 247.506103515625 53.50611877441406 C 250.1707153320312 50.84151077270508 252.2622528076172 47.73972320556641 253.7226715087891 44.28690338134766 C 255.2337799072266 40.71418762207031 256 36.91676330566406 256 33.0000114440918 C 256 29.08326148986816 255.2337799072266 25.28583145141602 253.7226715087891 21.71311950683594 C 252.2622528076172 18.26029586791992 250.1707153320312 15.15851211547852 247.506103515625 12.49390411376953 C 244.8415069580078 9.829296112060547 241.7397155761719 7.737762451171875 238.2868957519531 6.277332305908203 C 234.7141723632812 4.766223907470703 230.916748046875 4.000011444091797 227 4.000011444091797 L 226.8256072998047 4.000011444091797 L 130.0678558349609 -4.452213287353516 M 130.0681457519531 -8.467414855957031 L 227 1.1444091796875e-05 C 245.2253875732422 1.1444091796875e-05 260 14.77461624145508 260 33.0000114440918 C 260 51.22540283203125 245.2253875732422 66.00000762939453 227 66.00000762939453 L 33 66.00000762939453 C 14.77461242675781 66.00000762939453 0 51.22540283203125 0 33.0000114440918 C 0 14.77461624145508 14.77461242675781 1.1444091796875e-05 33 1.1444091796875e-05 L 130.0681457519531 -8.467414855957031 Z\" stroke=\"none\" fill=\"#707070\"/>\r\n    </g>\r\n    <circle id=\"Ellipse_1\" data-name=\"Ellipse 1\" cx=\"29\" cy=\"29\" r=\"29\" transform=\"translate(372.5 778.872)\"/>\r\n    <path id=\"Ellipse_1_-_Outline\" data-name=\"Ellipse 1 - Outline\" d=\"M29,12A17,17,0,1,0,46,29,17.019,17.019,0,0,0,29,12M29,0A29,29,0,1,1,0,29,29,29,0,0,1,29,0Z\" transform=\"translate(372.5 778.872)\" fill=\"#fff\"/>\r\n    <circle id=\"Ellipse_31\" data-name=\"Ellipse 31\" cx=\"29\" cy=\"29\" r=\"29\" transform=\"translate(566.5 778.872)\"/>\r\n    <path id=\"Ellipse_31_-_Outline\" data-name=\"Ellipse 31 - Outline\" d=\"M29,12A17,17,0,1,0,46,29,17.019,17.019,0,0,0,29,12M29,0A29,29,0,1,1,0,29,29,29,0,0,1,29,0Z\" transform=\"translate(566.5 778.872)\" fill=\"#fff\"/>\r\n    <circle id=\"Ellipse_3\" data-name=\"Ellipse 3\" cx=\"8\" cy=\"8\" r=\"8\" transform=\"translate(445.5 777.872)\" fill=\"#fff\"/>\r\n    <circle id=\"Ellipse_6\" data-name=\"Ellipse 6\" cx=\"8\" cy=\"8\" r=\"8\" transform=\"translate(533.5 777.872)\" fill=\"#fff\"/>\r\n    <circle id=\"Ellipse_4\" data-name=\"Ellipse 4\" cx=\"8\" cy=\"8\" r=\"8\" transform=\"translate(445.5 819.872)\" fill=\"#fff\"/>\r\n    <circle id=\"Ellipse_5\" data-name=\"Ellipse 5\" cx=\"8\" cy=\"8\" r=\"8\" transform=\"translate(533.5 819.872)\" fill=\"#fff\"/>\r\n    <rect id=\"Rectangle_1\" data-name=\"Rectangle 1\" width=\"203\" height=\"23\" transform=\"translate(396.5 795.872)\" fill=\"#d95141\"/>\r\n  </g>\r\n  <g id=\"Group_81\" data-name=\"Group 81\" transform=\"translate(-2816.027 1193.05)\">\r\n    <path id=\"Path_2917\" data-name=\"Path 2917\" d=\"M3702.706-913.606s3.08,12.724,3.464,21.786,0,17.159,0,17.159h51.7l31.571,32.549s3.164,1.012,4.574,0,4.575-3.437,4.575-3.437,1.144-2.024,0-3.3-3.679-3.437-3.679-3.437l3.679-1.413s6.633,4.106,8.272,3.7,6.6-3.7,6.6-3.7.762-1.776,0-2.922a14.424,14.424,0,0,0-3.049-2.673v-2.807l8.272,2.807s2.687.764,4.193,0,4.823-2.807,4.823-2.807,2.306-3.17,1.277-4.315-4.708-4.335-4.708-4.335.629-2.673,2.287-1.909,5.852,3.189,5.852,3.189a6.8,6.8,0,0,0,4.956,0,24.912,24.912,0,0,1,4.441-1.279s1.526-2.291.763-3.055-3.927-9.548-10.159-16.04-18.946-18.083-18.946-18.083-2.42-1.642,0-4.449,10.808-10.827,10.808-10.827,2.936-3.418,1.144-4.067-10.807-1.279-10.807-1.279-3.927-1.031-5.585,0-34.309,16.174-34.309,16.174Z\" transform=\"translate(0 14.199)\" fill=\"#f9e44d\"/>\r\n    <path id=\"Path_2918\" data-name=\"Path 2918\" d=\"M3760.478-868.45l-20.471,19.745s-4.327,3.8-1.144,8.516a51.306,51.306,0,0,0,7.51,8.536,7.743,7.743,0,0,0,8.634-1.661c4.194-3.934,20.072-19.993,20.072-19.993Z\" transform=\"translate(5.026 23.025)\" fill=\"#f9e44d\"/>\r\n    <path id=\"Path_2919\" data-name=\"Path 2919\" d=\"M3858.951-964.783l-56.667,59.33,15.248,14.379,57.3-57.917Z\" transform=\"translate(14.303 8.987)\" fill=\"#f5e64d\"/>\r\n    <path id=\"Path_2920\" data-name=\"Path 2920\" d=\"M3818.6-1020.339s14.734,18.064,23.387,26.352,23.636,22.533,23.636,22.533a2.681,2.681,0,0,1,0,3.953c-2.021,2.043-6.614,6.874-6.614,6.874l20.223,19.229,5.318-6.244s2.821-1.91,3.831,0,37.093,63.015,37.093,63.015L3943.01-902.2s2.669-4.335,0-8.02-7.625-19.229-43.84-54.613-76.873-61.621-76.873-61.621Z\" transform=\"translate(16.647)\" fill=\"#f8e44d\"/>\r\n    <path id=\"Path_2921\" data-name=\"Path 2921\" d=\"M3877.384-987.82l3.812-3.819s3.3-2.559,6.48,0a96.941,96.941,0,0,1,8.52,8.669,4.287,4.287,0,0,1,0,5.213,16.023,16.023,0,0,1-3.945,3.819Z\" transform=\"translate(25.091 4.907)\" fill=\"#f8e44d\"/>\r\n    <path id=\"Path_2922\" data-name=\"Path 2922\" d=\"M3912.833-998.842l20.719,67.732.877-69.889Z\" transform=\"translate(30.184 3.709)\" fill=\"#f8e44d\"/>\r\n    <path id=\"Path_2923\" data-name=\"Path 2923\" d=\"M3873.51-880.357l4.3,15.658,45.384-21.635Z\" transform=\"translate(24.535 20.419)\" fill=\"#f8e44d\"/>\r\n    <path id=\"Path_2924\" data-name=\"Path 2924\" d=\"M3867.95-829.137l8.883,10.312,50.205-46.841Z\" transform=\"translate(23.736 23.431)\" fill=\"#f8e44d\"/>\r\n    <path id=\"Path_2925\" data-name=\"Path 2925\" d=\"M3830.5-851.248,3843.842-858l12.828,8.536,7.872,12.584L3848.8-820.955l-15.115-1.528Z\" transform=\"translate(18.357 24.548)\" fill=\"#f8e44d\"/>\r\n    <path id=\"Path_2926\" data-name=\"Path 2926\" d=\"M3827.143-816.45s-7.418,3.456-9.82,7.39-6.976,11.19-5.451,12.851,12.695,8.268,12.695,8.268l17.155-5.213s-2.917-11.343-5.833-14.513S3827.143-816.45,3827.143-816.45Z\" transform=\"translate(15.637 30.603)\" fill=\"#f8e44d\"/>\r\n    <path id=\"Path_2927\" data-name=\"Path 2927\" d=\"M3881.282-807.217c-1.01.115-11.417,4.067-11.417,4.067s-6.347,8.631-7.243,9.662S3874.935-781,3874.935-781s1.677-2.54,7.128-3.819,6.6-2.559,6.6-2.559l-1.01-3.934Z\" transform=\"translate(22.965 31.949)\" fill=\"#f8e44d\"/>\r\n  </g>\r\n  <g transform=\"translate(-1947 2142)\">\r\n    <g class=\"smoke-one\" id=\"Group_87\" data-name=\"Group 87\" transform=\"translate(-1947 2142)\">\r\n      <path id=\"Path_2936-2\" data-name=\"Path 2936\" d=\"M3942.425-2037.962s-22.077-18.461-51.039-8.462-30.5,32.577-30.5,32.577-7.923,3.077-11.269,10.769-5.885,13.077-5.885,13.077-37.462,17.154-17.731,43.577,51.308,4.115,51.308,4.115,7.692,6.192,21.269,4.885,20.769-6.962,20.769-6.962,7.692,9.231,23.077,9.5,29.77-7.423,29.77-7.423,16.654,23.307,45.115,18.961,41.269-24.885,41.269-24.885,38.192,23.077,66.923,0,15.154-47.692,15.154-47.692,7.153-4.038,9.73-9.192a36.047,36.047,0,0,0,3.077-11.538s26.654.731,33.308-16.693.269-32.038-18.462-39.231-33.077,7.692-33.077,7.692-14.808-13.346-33.039-10-32.077,13.846-32.077,13.846-30-29.192-68.961-18.961S3942.425-2037.962,3942.425-2037.962Z\" fill=\"#e6e6e6\"/>\r\n      <path id=\"Path_2935-2\" data-name=\"Path 2935\" d=\"M3843.152-1990a89.856,89.856,0,0,0,10.7,0,18.223,18.223,0,0,0,10.3-4.35,37.4,37.4,0,0,0,23.35,9.35c14.65.65,29.3-5,29.3-5s16.35,20.35,44.7,16,42.65-25,42.65-25,44.377,23.4,69.236,0,14.114-48,14.114-48a22.383,22.383,0,0,0,9-8.65,24.852,24.852,0,0,0,3.35-11s7.25.7,10.95,0,10.05-5,10.05-5-13.8-6.2-26.281-2.8-24.631,10.5-24.631,10.5-23.581-24.754-68.275-18.907-58.822,41.665-58.822,41.665-27.257-18.74-56.2-5.808-28.466,32.54-28.466,32.54a28.919,28.919,0,0,0-10.154,10.276A48,48,0,0,0,3843.152-1990Z\" transform=\"translate(0.109 -1)\" fill=\"#fff\"/>\r\n    </g>\r\n    <g class=\"smoke-two\" id=\"Group_87\" data-name=\"Group 87\" transform=\"translate(-1947 2142)\">\r\n      <path id=\"Path_2936-2\" data-name=\"Path 2936\" d=\"M3942.425-2037.962s-22.077-18.461-51.039-8.462-30.5,32.577-30.5,32.577-7.923,3.077-11.269,10.769-5.885,13.077-5.885,13.077-37.462,17.154-17.731,43.577,51.308,4.115,51.308,4.115,7.692,6.192,21.269,4.885,20.769-6.962,20.769-6.962,7.692,9.231,23.077,9.5,29.77-7.423,29.77-7.423,16.654,23.307,45.115,18.961,41.269-24.885,41.269-24.885,38.192,23.077,66.923,0,15.154-47.692,15.154-47.692,7.153-4.038,9.73-9.192a36.047,36.047,0,0,0,3.077-11.538s26.654.731,33.308-16.693.269-32.038-18.462-39.231-33.077,7.692-33.077,7.692-14.808-13.346-33.039-10-32.077,13.846-32.077,13.846-30-29.192-68.961-18.961S3942.425-2037.962,3942.425-2037.962Z\" fill=\"#e6e6e6\"/>\r\n      <path id=\"Path_2935-2\" data-name=\"Path 2935\" d=\"M3843.152-1990a89.856,89.856,0,0,0,10.7,0,18.223,18.223,0,0,0,10.3-4.35,37.4,37.4,0,0,0,23.35,9.35c14.65.65,29.3-5,29.3-5s16.35,20.35,44.7,16,42.65-25,42.65-25,44.377,23.4,69.236,0,14.114-48,14.114-48a22.383,22.383,0,0,0,9-8.65,24.852,24.852,0,0,0,3.35-11s7.25.7,10.95,0,10.05-5,10.05-5-13.8-6.2-26.281-2.8-24.631,10.5-24.631,10.5-23.581-24.754-68.275-18.907-58.822,41.665-58.822,41.665-27.257-18.74-56.2-5.808-28.466,32.54-28.466,32.54a28.919,28.919,0,0,0-10.154,10.276A48,48,0,0,0,3843.152-1990Z\" transform=\"translate(0.109 -1)\" fill=\"#fff\"/>\r\n    </g>\r\n  </g>\r\n  <g id=\"Group_93\" data-name=\"Group 93\" transform=\"translate(82.487 -138.545)\">\r\n    <rect id=\"Rectangle_25-2\" data-name=\"Rectangle 25\" width=\"27.212\" height=\"11.792\" transform=\"translate(215.548 471.065)\" fill=\"#1d1d1e\"/>\r\n    <rect id=\"Rectangle_26-2\" data-name=\"Rectangle 26\" width=\"12.699\" height=\"31.748\" transform=\"translate(222.805 442.945)\" fill=\"#1d1d1e\"/>\r\n    <rect id=\"Rectangle_24-2\" data-name=\"Rectangle 24\" width=\"141.505\" height=\"141.505\" transform=\"translate(157.495 479.229)\" fill=\"#3497d9\"/>\r\n    <path id=\"Path_12-2\" data-name=\"Path 12\" d=\"M236.3,632.331H228v2.117l-23.29-2.117s-4.56-.532-4.56,5.473,4.56,5.749,4.56,5.749L228,640.8v2.752h8.3\" transform=\"translate(-7.143 -199.062)\" fill=\"#3698d7\"/>\r\n    <path id=\"Path_13-2\" data-name=\"Path 13\" d=\"M36.149.012h-8.3V2.129L4.56.012S0-.52,0,5.485s4.56,5.749,4.56,5.749L27.85,8.481v2.752h8.3\" transform=\"translate(265.303 444.492) rotate(180)\" fill=\"#3698d7\"/>\r\n    <text id=\"TNT-2\" data-name=\"TNT\" transform=\"translate(180.172 566.884)\" fill=\"#fff\" font-size=\"51\" font-family=\"SegoeUI-Bold, Segoe UI\" font-weight=\"700\" letter-spacing=\"-0.05em\"><tspan x=\"0\" y=\"0\">TNT</tspan></text>\r\n  </g>\r\n</svg>\r\n" }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(GraphicComponent, { className: "GraphicComponent", filePath: "lib\\layout\\unauthorised\\graphic.component.ts", lineNumber: 8 }); })();

const _c0$B = a0 => ({ "max-width": a0 });
class UnauthorisedComponent {
    constructor() {
        this.title = '';
        this.strapline = '';
        this.straplineWidth = '';
    }
    static { this.ɵfac = function UnauthorisedComponent_Factory(t) { return new (t || UnauthorisedComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: UnauthorisedComponent, selectors: [["aa-unauthorised"]], inputs: { title: "title", strapline: "strapline", straplineWidth: "straplineWidth" }, decls: 12, vars: 5, consts: [[1, "unauthorised", "flex-group", "flex-column", "space-between", "flex-nowrap"], [1, "unauthorised-content", "flex-group", "flex-center", "flex-column"], [1, "align-center", "margin-bottom-0-25", 3, "ngStyle"], ["href", "https://core.angloamerican.com/security-amp/amp", 1, "flex-center"], [1, "material-icons", "padding-right-0-25", "aa-blue-100"], [1, "unauthorised-image"], [1, "app-graphic"]], template: function UnauthorisedComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "div", 1)(2, "h1");
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "p", 2);
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "a", 3)(7, "span", 4);
            i0.ɵɵtext(8, "rocket_launch");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(9, " Discover other applications ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(10, "div", 5);
            i0.ɵɵelement(11, "aa-graphic", 6);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.title);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(3, _c0$B, ctx.straplineWidth));
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.strapline, " ");
        } }, dependencies: [i1.NgStyle, GraphicComponent], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UnauthorisedComponent, [{
        type: Component,
        args: [{ selector: 'aa-unauthorised', changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"unauthorised flex-group flex-column space-between flex-nowrap\">\r\n    <div class=\"unauthorised-content flex-group flex-center flex-column\">\r\n        <h1>{{title}}</h1>\r\n        <p \r\n            class=\"align-center margin-bottom-0-25\"\r\n            [ngStyle]=\"{'max-width' : straplineWidth}\"\r\n        >\r\n            {{strapline}}\r\n        </p>      \r\n        <a class=\"flex-center\" href=\"https://core.angloamerican.com/security-amp/amp\">\r\n            <span class=\"material-icons padding-right-0-25 aa-blue-100\">rocket_launch</span>\r\n            Discover other applications\r\n        </a>\r\n    </div>\r\n    <div class=\"unauthorised-image\">\r\n        <aa-graphic class=\"app-graphic\"></aa-graphic>\r\n    </div>\r\n</section>" }]
    }], () => [], { title: [{
            type: Input
        }], strapline: [{
            type: Input
        }], straplineWidth: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(UnauthorisedComponent, { className: "UnauthorisedComponent", filePath: "lib\\layout\\unauthorised\\unauthorised.component.ts", lineNumber: 9 }); })();

const _c0$A = a0 => ({ "box-shadow": a0 });
const _c1$s = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) => ({ "border-radius": a0, "padding": a1, "min-width": a2, "max-width": a3, "min-height": a4, "max-height": a5, "z-index": a6, "border-width": a7, "border-style": a8, "margin-bottom": a9, "overflow": a10 });
const _c2$m = ["*"];
class CustomWrapperComponent {
    constructor() {
        this.boxShadow = false;
        this.zIndex = 0;
        this.borderStyle = '';
        this.enableScrolling = false;
    }
    static { this.ɵfac = function CustomWrapperComponent_Factory(t) { return new (t || CustomWrapperComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CustomWrapperComponent, selectors: [["aa-custom-wrapper"]], inputs: { boxShadow: "boxShadow", paddingSize: "paddingSize", borderRadius: "borderRadius", minWidth: "minWidth", maxWidth: "maxWidth", minHeight: "minHeight", maxHeight: "maxHeight", zIndex: "zIndex", borderWidth: "borderWidth", borderStyle: "borderStyle", borderColour: "borderColour", backgroundColour: "backgroundColour", marginBottom: "marginBottom", enableScrolling: "enableScrolling" }, ngContentSelectors: _c2$m, decls: 2, vars: 20, consts: [[3, "ngClass", "ngStyle"]], template: function CustomWrapperComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "section", 0);
            i0.ɵɵprojection(1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassMapInterpolate2("", ctx.borderColour, " ", ctx.backgroundColour, " position-relative");
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(6, _c0$A, ctx.boxShadow))("ngStyle", i0.ɵɵpureFunctionV(8, _c1$s, [ctx.borderRadius, ctx.paddingSize, ctx.minWidth, ctx.maxWidth, ctx.minHeight, ctx.maxHeight, ctx.zIndex, ctx.borderWidth, ctx.borderStyle, ctx.marginBottom, ctx.enableScrolling ? "auto" : "initial"]));
        } }, dependencies: [i1.NgClass, i1.NgStyle], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CustomWrapperComponent, [{
        type: Component,
        args: [{ selector: 'aa-custom-wrapper', changeDetection: ChangeDetectionStrategy.OnPush, template: "<section\r\n    class=\"{{borderColour}} {{backgroundColour}} position-relative\"\r\n    [ngClass]=\"{\r\n        'box-shadow' : boxShadow\r\n    }\"\r\n    [ngStyle]=\"{\r\n        'border-radius' : borderRadius,\r\n        'padding' : paddingSize,\r\n        'min-width' : minWidth,\r\n        'max-width' : maxWidth,\r\n        'min-height' : minHeight,\r\n        'max-height' : maxHeight,\r\n        'z-index' : zIndex,\r\n        'border-width' : borderWidth,\r\n        'border-style' : borderStyle,\r\n        'margin-bottom' : marginBottom,\r\n        'overflow': enableScrolling ? 'auto' : 'initial'\r\n    }\"\r\n>\r\n    <ng-content></ng-content>\r\n</section>" }]
    }], null, { boxShadow: [{
            type: Input
        }], paddingSize: [{
            type: Input
        }], borderRadius: [{
            type: Input
        }], minWidth: [{
            type: Input
        }], maxWidth: [{
            type: Input
        }], minHeight: [{
            type: Input
        }], maxHeight: [{
            type: Input
        }], zIndex: [{
            type: Input
        }], borderWidth: [{
            type: Input
        }], borderStyle: [{
            type: Input
        }], borderColour: [{
            type: Input
        }], backgroundColour: [{
            type: Input
        }], marginBottom: [{
            type: Input
        }], enableScrolling: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CustomWrapperComponent, { className: "CustomWrapperComponent", filePath: "lib\\layout\\custom-wrapper\\custom-wrapper.component.ts", lineNumber: 9 }); })();

class LayoutModule {
    static { this.ɵfac = function LayoutModule_Factory(t) { return new (t || LayoutModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: LayoutModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule, RouterModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LayoutModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    BladeComponent,
                    FooterComponent,
                    BladeFooterComponent,
                    BladeBottomComponent,
                    BladeTopComponent,
                    ProjectTourComponent,
                    UiBlockComponent,
                    UnauthorisedComponent,
                    GraphicComponent,
                    CustomWrapperComponent
                ],
                imports: [CommonModule, RouterModule],
                exports: [
                    BladeComponent,
                    FooterComponent,
                    BladeFooterComponent,
                    BladeBottomComponent,
                    BladeTopComponent,
                    ProjectTourComponent,
                    UiBlockComponent,
                    UnauthorisedComponent,
                    GraphicComponent,
                    CustomWrapperComponent
                ],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(LayoutModule, { declarations: [BladeComponent,
        FooterComponent,
        BladeFooterComponent,
        BladeBottomComponent,
        BladeTopComponent,
        ProjectTourComponent,
        UiBlockComponent,
        UnauthorisedComponent,
        GraphicComponent,
        CustomWrapperComponent], imports: [CommonModule, RouterModule], exports: [BladeComponent,
        FooterComponent,
        BladeFooterComponent,
        BladeBottomComponent,
        BladeTopComponent,
        ProjectTourComponent,
        UiBlockComponent,
        UnauthorisedComponent,
        GraphicComponent,
        CustomWrapperComponent] }); })();

const _c0$z = a0 => ({ "show-on-left": a0 });
const _c1$r = a0 => ({ "min-width": a0 });
function ContextMenuComponent_ul_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 4);
    i0.ɵɵprojection(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c0$z, ctx_r0.showOnLeft))("ngStyle", i0.ɵɵpureFunction1(4, _c1$r, ctx_r0.minWidth));
} }
const _c2$l = (a0, a1, a2) => ({ "top": a0, "left": a1, "right": a2 });
const _c3$f = a0 => ({ "position-absolute": a0 });
const _c4$b = ["*"];
class ContextMenuComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.absolutePosition = false;
        this.zIndex = 0;
        this.showOnLeft = false;
        this.showContextMenu = false; // now exposed as api and not property - more flexible
    }
    onClick(targetElement) {
        const clickedInside = this.elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.showContextMenu = false;
        }
    }
    open() {
        this.showContextMenu = true;
    }
    close() {
        this.showContextMenu = false;
    }
    static { this.ɵfac = function ContextMenuComponent_Factory(t) { return new (t || ContextMenuComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ContextMenuComponent, selectors: [["aa-context-menu"]], hostBindings: function ContextMenuComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function ContextMenuComponent_click_HostBindingHandler($event) { return ctx.onClick($event.target); }, false, i0.ɵɵresolveDocument);
        } }, inputs: { absolutePosition: "absolutePosition", leftPos: "leftPos", topPos: "topPos", rightPos: "rightPos", zIndex: "zIndex", minWidth: "minWidth", showOnLeft: "showOnLeft" }, ngContentSelectors: _c4$b, decls: 5, vars: 9, consts: [[1, "context-menu", "flex-group", "width-control", 3, "ngStyle", "ngClass"], [1, "margin-right-0"], [1, "material-icons", 3, "click"], ["class", "strip-bullets", 3, "ngClass", "ngStyle", 4, "ngIf"], [1, "strip-bullets", 3, "ngClass", "ngStyle"]], template: function ContextMenuComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "nav", 0)(1, "div", 1)(2, "button", 2);
            i0.ɵɵlistener("click", function ContextMenuComponent_Template_button_click_2_listener() { return ctx.showContextMenu = !ctx.showContextMenu; });
            i0.ɵɵtext(3, " more_vert ");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(4, ContextMenuComponent_ul_4_Template, 2, 6, "ul", 3);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction3(3, _c2$l, ctx.topPos, ctx.leftPos, ctx.rightPos))("ngClass", i0.ɵɵpureFunction1(7, _c3$f, ctx.absolutePosition));
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", ctx.showContextMenu);
        } }, dependencies: [i1.NgClass, i1.NgIf, i1.NgStyle], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContextMenuComponent, [{
        type: Component,
        args: [{ selector: 'aa-context-menu', changeDetection: ChangeDetectionStrategy.OnPush, template: "<nav \r\n  class=\"context-menu flex-group width-control\" \r\n  [ngStyle]=\"{\r\n    'top' : topPos, \r\n    'left' : leftPos, \r\n    'right' : rightPos\r\n  }\" \r\n  [ngClass]=\"{\r\n    'position-absolute' : absolutePosition\r\n  }\"\r\n  >\r\n  <div class=\"margin-right-0\">\r\n    <button \r\n      (click)=\"showContextMenu=!showContextMenu\" \r\n      class=\"material-icons\">\r\n      more_vert\r\n    </button>\r\n  </div>\r\n  <ul \r\n    *ngIf=\"showContextMenu\" \r\n    class=\"strip-bullets\" \r\n    [ngClass]=\"{'show-on-left' : showOnLeft}\"\r\n    [ngStyle]=\"{'min-width' : minWidth}\"\r\n  >\r\n    <ng-content></ng-content>\r\n  </ul>\r\n</nav>" }]
    }], () => [{ type: i0.ElementRef }], { absolutePosition: [{
            type: Input
        }], leftPos: [{
            type: Input
        }], topPos: [{
            type: Input
        }], rightPos: [{
            type: Input
        }], zIndex: [{
            type: Input
        }], minWidth: [{
            type: Input
        }], showOnLeft: [{
            type: Input
        }], onClick: [{
            type: HostListener,
            args: ['document:click', ['$event.target']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ContextMenuComponent, { className: "ContextMenuComponent", filePath: "lib\\navigation\\context-menu\\context-menu.component.ts", lineNumber: 9 }); })();

const _c0$y = () => ["active"];
const _c1$q = () => ({ exact: true });
const _c2$k = a0 => ({ "nowrap": a0 });
class ContextMenuItemComponent {
    constructor(router) {
        this.router = router;
        this.menuItemText = '';
        this.routerLink = '';
        this.routerLinkActive = false;
        this.minWidth = 0;
        this.noWrap = false;
    }
    onClick() {
        this.router.navigate([this.routerLink, 500]);
    }
    static { this.ɵfac = function ContextMenuItemComponent_Factory(t) { return new (t || ContextMenuItemComponent)(i0.ɵɵdirectiveInject(i1$1.Router)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ContextMenuItemComponent, selectors: [["aa-context-menu-item"]], inputs: { menuItemText: "menuItemText", routerLink: "routerLink", routerLinkActive: "routerLinkActive", minWidth: "minWidth", noWrap: "noWrap" }, decls: 3, vars: 9, consts: [[3, "routerLink", "routerLinkActive", "routerLinkActiveOptions", "ngClass"]], template: function ContextMenuItemComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "li")(1, "a", 0);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("routerLink", ctx.routerLink)("routerLinkActive", i0.ɵɵpureFunction0(5, _c0$y))("routerLinkActiveOptions", i0.ɵɵpureFunction0(6, _c1$q))("ngClass", i0.ɵɵpureFunction1(7, _c2$k, ctx.noWrap));
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.menuItemText, " ");
        } }, dependencies: [i1.NgClass, i1$1.RouterLink, i1$1.RouterLinkActive], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContextMenuItemComponent, [{
        type: Component,
        args: [{ selector: 'aa-context-menu-item', changeDetection: ChangeDetectionStrategy.OnPush, template: "<li>\r\n    <a \r\n        [routerLink]=\"routerLink\" \r\n        [routerLinkActive]=\"['active']\" \r\n        [routerLinkActiveOptions]=\"{exact: true}\"\r\n        [ngClass]=\"{'nowrap' : noWrap}\"\r\n        >\r\n        {{menuItemText}}\r\n    </a>\r\n</li>" }]
    }], () => [{ type: i1$1.Router }], { menuItemText: [{
            type: Input
        }], routerLink: [{
            type: Input
        }], routerLinkActive: [{
            type: Input
        }], minWidth: [{
            type: Input
        }], noWrap: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ContextMenuItemComponent, { className: "ContextMenuItemComponent", filePath: "lib\\navigation\\context-menu-item\\context-menu-item.component.ts", lineNumber: 10 }); })();

const _c0$x = (a0, a1, a2, a3, a4) => ({ "width": a0, "left": a1, "top": a2, "bottom": a3, "z-index": a4 });
const _c1$p = a0 => ({ "show-menu": a0 });
const _c2$j = ["*"];
class NavContextComponent {
    constructor() {
        this.zIndex = 0;
        this.showMenu = false;
    }
    toggle() {
        this.showMenu = !this.showMenu;
    }
    static { this.ɵfac = function NavContextComponent_Factory(t) { return new (t || NavContextComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NavContextComponent, selectors: [["aa-nav-context"]], inputs: { navWidth: "navWidth", topPos: "topPos", leftPos: "leftPos", rightPos: "rightPos", bottomPos: "bottomPos", zIndex: "zIndex", showMenu: "showMenu" }, ngContentSelectors: _c2$j, decls: 6, vars: 10, consts: [[1, "nav-context", 3, "ngStyle"], [1, "nav-context-content"], [1, "material-icons", "menu", 3, "click"], [3, "ngClass"]], template: function NavContextComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "nav", 0)(1, "div", 1)(2, "button", 2);
            i0.ɵɵlistener("click", function NavContextComponent_Template_button_click_2_listener() { return ctx.toggle(); });
            i0.ɵɵtext(3, "menu");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "ul", 3);
            i0.ɵɵprojection(5);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction5(2, _c0$x, ctx.navWidth, ctx.leftPos, ctx.topPos, ctx.bottomPos, ctx.zIndex));
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(8, _c1$p, ctx.showMenu));
        } }, dependencies: [i1.NgClass, i1.NgStyle], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NavContextComponent, [{
        type: Component,
        args: [{ selector: 'aa-nav-context', changeDetection: ChangeDetectionStrategy.OnPush, template: "<nav class=\"nav-context\" \r\n    [ngStyle]=\"{\r\n        'width' : navWidth, \r\n        'left' : leftPos, \r\n        'top' : topPos, \r\n        'bottom' : bottomPos, \r\n        'z-index' : zIndex\r\n    }\">\r\n    <div class=\"nav-context-content\">\r\n        <button (click)=\"toggle()\" class=\"material-icons menu\">menu</button>\r\n        <ul [ngClass]=\"{'show-menu' : showMenu}\">\r\n            <ng-content></ng-content>\r\n        </ul>\r\n    </div>\r\n</nav>" }]
    }], () => [], { navWidth: [{
            type: Input
        }], topPos: [{
            type: Input
        }], leftPos: [{
            type: Input
        }], rightPos: [{
            type: Input
        }], bottomPos: [{
            type: Input
        }], zIndex: [{
            type: Input
        }], showMenu: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(NavContextComponent, { className: "NavContextComponent", filePath: "lib\\navigation\\nav-context\\nav-context.component.ts", lineNumber: 9 }); })();

function ProgressIndicatorComponent_li_0_a_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("href", ctx_r2.progressLink, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.progressLabel);
} }
function ProgressIndicatorComponent_li_0_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r3.progressLabel);
} }
function ProgressIndicatorComponent_li_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li")(1, "div");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, ProgressIndicatorComponent_li_0_a_3_Template, 2, 2, "a", 1)(4, ProgressIndicatorComponent_li_0_span_4_Template, 2, 1, "span", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r0.progressClass);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.progressCount);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.asLink);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.asLink);
} }
function ProgressIndicatorComponent_li_1_a_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("href", ctx_r4.progressLink, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r4.progressLabel);
} }
function ProgressIndicatorComponent_li_1_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r5.progressLabel);
} }
function ProgressIndicatorComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li")(1, "i", 4);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, ProgressIndicatorComponent_li_1_a_3_Template, 2, 2, "a", 1)(4, ProgressIndicatorComponent_li_1_span_4_Template, 2, 1, "span", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("align-center ", ctx_r1.progressClass, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.iconName);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.asLink);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.asLink);
} }
class ProgressIndicatorComponent {
    constructor() {
        this.asLink = false;
        this.progressCount = '';
        this.progressClass = '';
        this.progressLink = '';
        this.progressLabel = '';
        this.iconsEnabled = false;
        this.iconName = '';
    }
    static { this.ɵfac = function ProgressIndicatorComponent_Factory(t) { return new (t || ProgressIndicatorComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProgressIndicatorComponent, selectors: [["aa-progress-indicator"]], inputs: { asLink: "asLink", progressCount: "progressCount", progressClass: "progressClass", progressLink: "progressLink", progressLabel: "progressLabel", iconsEnabled: "iconsEnabled", iconName: "iconName" }, decls: 2, vars: 2, consts: [[3, "class", 4, "ngIf"], [3, "href", 4, "ngIf"], [4, "ngIf"], [3, "href"], [1, "material-icons", "padding-x-0-25"]], template: function ProgressIndicatorComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ProgressIndicatorComponent_li_0_Template, 5, 6, "li", 0)(1, ProgressIndicatorComponent_li_1_Template, 5, 6, "li", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.iconsEnabled);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.iconsEnabled);
        } }, dependencies: [i1.NgIf], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProgressIndicatorComponent, [{
        type: Component,
        args: [{ selector: 'aa-progress-indicator', changeDetection: ChangeDetectionStrategy.OnPush, template: "<li *ngIf=\"!iconsEnabled\" class=\"{{ progressClass }}\">\r\n  <div>{{ progressCount }}</div>\r\n  <a *ngIf=\"asLink\" href=\"{{ progressLink }}\">{{ progressLabel }}</a>\r\n  <span *ngIf=\"!asLink\">{{ progressLabel }}</span>\r\n</li>\r\n\r\n<li *ngIf=\"iconsEnabled\" class=\"align-center {{ progressClass }}\">\r\n  <i class=\"material-icons padding-x-0-25\">{{ iconName }}</i>\r\n  <a *ngIf=\"asLink\" href=\"{{ progressLink }}\">{{ progressLabel }}</a>\r\n  <span *ngIf=\"!asLink\">{{ progressLabel }}</span>\r\n</li>\r\n" }]
    }], () => [], { asLink: [{
            type: Input
        }], progressCount: [{
            type: Input
        }], progressClass: [{
            type: Input
        }], progressLink: [{
            type: Input
        }], progressLabel: [{
            type: Input
        }], iconsEnabled: [{
            type: Input
        }], iconName: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ProgressIndicatorComponent, { className: "ProgressIndicatorComponent", filePath: "lib\\navigation\\progress-indicator\\progress-indicator.component.ts", lineNumber: 13 }); })();

function ProgressIndicatorAdvancedComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2)(1, "p", 3);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div");
    i0.ɵɵtext(4, "pan_tool_alt");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.description);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("material-icons ", ctx_r0.iconClass, "");
} }
const _c0$w = ["*"];
class ProgressIndicatorAdvancedComponent {
    constructor() {
        this.progressClass = '';
        this.progressLabel = '';
        this.iconClass = '';
        this.showDescription = false;
        this.description = '';
        this.asLink = false;
        this.progressLink = '';
        this.progressClick = new EventEmitter();
    }
    onProgressClick(e) {
        e.stopPropagation();
        this.progressClick.emit(e);
    }
    static { this.ɵfac = function ProgressIndicatorAdvancedComponent_Factory(t) { return new (t || ProgressIndicatorAdvancedComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProgressIndicatorAdvancedComponent, selectors: [["aa-progress-indicator-advanced"]], inputs: { progressClass: "progressClass", progressLabel: "progressLabel", iconClass: "iconClass", showDescription: "showDescription", description: "description", asLink: "asLink", progressLink: "progressLink" }, outputs: { progressClick: "progressClick" }, ngContentSelectors: _c0$w, decls: 4, vars: 4, consts: [["class", "description", 4, "ngIf"], [1, "bus-stop", "flex-group", "flex-column", "flex-center"], [1, "description"], [1, "box-shadow-light"]], template: function ProgressIndicatorAdvancedComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "section");
            i0.ɵɵtemplate(1, ProgressIndicatorAdvancedComponent_div_1_Template, 5, 4, "div", 0);
            i0.ɵɵelementStart(2, "div", 1);
            i0.ɵɵprojection(3);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵclassMapInterpolate1("indicator-item flex-group ", ctx.progressClass, "");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showDescription);
        } }, dependencies: [i1.NgIf], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProgressIndicatorAdvancedComponent, [{
        type: Component,
        args: [{ selector: 'aa-progress-indicator-advanced', changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"indicator-item flex-group {{ progressClass }}\">\r\n    <div *ngIf=\"showDescription\" class=\"description\">\r\n        <p class=\"box-shadow-light\">{{description}}</p>\r\n        <div class=\"material-icons {{iconClass}}\">pan_tool_alt</div>\r\n    </div>\r\n    <div class=\"bus-stop flex-group flex-column flex-center\">\r\n        <ng-content></ng-content>\r\n    </div>\r\n</section>" }]
    }], null, { progressClass: [{
            type: Input
        }], progressLabel: [{
            type: Input
        }], iconClass: [{
            type: Input
        }], showDescription: [{
            type: Input
        }], description: [{
            type: Input
        }], asLink: [{
            type: Input
        }], progressLink: [{
            type: Input
        }], progressClick: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ProgressIndicatorAdvancedComponent, { className: "ProgressIndicatorAdvancedComponent", filePath: "lib\\navigation\\progress-indicator-advanced\\progress-indicator-advanced.component.ts", lineNumber: 9 }); })();

const _c0$v = [[["", "steps-header", ""]], [["", "steps-content", ""]], [["", "steps-footer", ""]]];
const _c1$o = ["[steps-header]", "[steps-content]", "[steps-footer]"];
class StepperComponent {
    constructor() {
        this.formName = '';
    }
    static { this.ɵfac = function StepperComponent_Factory(t) { return new (t || StepperComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StepperComponent, selectors: [["aa-stepper"]], inputs: { formName: "formName" }, ngContentSelectors: _c1$o, decls: 8, vars: 0, consts: [[1, "aa-stepper"], ["formGroup", "formName"], [1, "aa-stepper-header", "flex-group"], [1, "aa-stepper-content"], [1, "aa-stepper-footer"]], template: function StepperComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0$v);
            i0.ɵɵelementStart(0, "div", 0)(1, "form", 1)(2, "ul", 2);
            i0.ɵɵprojection(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "section", 3);
            i0.ɵɵprojection(5, 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "nav", 4);
            i0.ɵɵprojection(7, 2);
            i0.ɵɵelementEnd()()();
        } }, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StepperComponent, [{
        type: Component,
        args: [{ selector: 'aa-stepper', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"aa-stepper\">\r\n    <form formGroup=\"formName\">\r\n        <ul class=\"aa-stepper-header flex-group\">\r\n        <ng-content select=\"[steps-header]\"></ng-content>\r\n        </ul>\r\n        <section class=\"aa-stepper-content\">\r\n            <ng-content select=\"[steps-content]\"></ng-content>\r\n        </section>\r\n        <nav class=\"aa-stepper-footer\">\r\n            <ng-content select=\"[steps-footer]\"></ng-content>\r\n        </nav>\r\n    </form>\r\n</div>" }]
    }], () => [], { formName: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StepperComponent, { className: "StepperComponent", filePath: "lib\\navigation\\stepper\\stepper.component.ts", lineNumber: 9 }); })();

class TabNavigationContentDirective {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
    static { this.ɵfac = function TabNavigationContentDirective_Factory(t) { return new (t || TabNavigationContentDirective)(i0.ɵɵdirectiveInject(i0.TemplateRef)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: TabNavigationContentDirective, selectors: [["ng-template", "aaTabNavigationContent", ""]] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TabNavigationContentDirective, [{
        type: Directive,
        args: [{
                selector: 'ng-template[aaTabNavigationContent]'
            }]
    }], () => [{ type: i0.TemplateRef }], null); })();

class TabNavigationHeaderContentDirective {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
    static { this.ɵfac = function TabNavigationHeaderContentDirective_Factory(t) { return new (t || TabNavigationHeaderContentDirective)(i0.ɵɵdirectiveInject(i0.TemplateRef)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: TabNavigationHeaderContentDirective, selectors: [["ng-template", "aaTabNavigationHeaderContent", ""]] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TabNavigationHeaderContentDirective, [{
        type: Directive,
        args: [{
                selector: 'ng-template[aaTabNavigationHeaderContent]'
            }]
    }], () => [{ type: i0.TemplateRef }], null); })();

class TabNavigationItemComponent {
    constructor() {
        this.tabName = '';
        this.activeColor = '';
        this.enableIcons = false;
        this.iconName = '';
        this.iconColour = '';
        this.textColour = '';
        this.closeColour = '';
        this.enableCount = false;
        this.enableClose = false;
        this.tabCount = 0;
        this.tabRoute = '';
        this.tabDisabled = false;
        this.countColour = '';
        this.showRightDivider = false;
        this.routerLink = '';
        this.routerLinkActive = false;
        this.enableTooltip = false;
        this.tabTooltipTitle = '';
        this.tabTooltipBody = '';
    }
    ngAfterContentChecked() {
        this.templateRef = this.templateRefDirective && this.templateRefDirective.templateRef;
        this.templateRefHeader = this.templateRefHeaderDirective && this.templateRefHeaderDirective.templateRef;
    }
    get route() {
        return this.routerLink || this.tabRoute;
    }
    static { this.ɵfac = function TabNavigationItemComponent_Factory(t) { return new (t || TabNavigationItemComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TabNavigationItemComponent, selectors: [["aa-tab-navigation-item"]], contentQueries: function TabNavigationItemComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, TabNavigationContentDirective, 5);
            i0.ɵɵcontentQuery(dirIndex, TabNavigationHeaderContentDirective, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.templateRefDirective = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.templateRefHeaderDirective = _t.first);
        } }, inputs: { tabId: "tabId", tabName: "tabName", activeColor: "activeColor", enableIcons: "enableIcons", iconName: "iconName", iconColour: "iconColour", textColour: "textColour", closeColour: "closeColour", enableCount: "enableCount", enableClose: "enableClose", tabCount: "tabCount", tabRoute: "tabRoute", tabDisabled: "tabDisabled", countColour: "countColour", showRightDivider: "showRightDivider", routerLink: "routerLink", routerLinkActive: "routerLinkActive", enableTooltip: "enableTooltip", tabTooltipTitle: "tabTooltipTitle", tabTooltipBody: "tabTooltipBody", tooltipXPos: "tooltipXPos", tooltipYPos: "tooltipYPos", tooltipWidth: "tooltipWidth" }, decls: 0, vars: 0, template: function TabNavigationItemComponent_Template(rf, ctx) { } }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TabNavigationItemComponent, [{
        type: Component,
        args: [{ selector: 'aa-tab-navigation-item', template: "<!-- BELOW ONLY USED FOR ROUTER-OUTLET VERSION - NOT USED -->\r\n<!-- <ng-container *ngIf=\"!templateRef\">\r\n  <li [ngClass]=\"{'tab-disabled' : tabDisabled}\">\r\n    <a *ngIf=\"!tabDisabled\" [id]=\"tabId\" [routerLink]=\"route\">\r\n      {{ tabName }}\r\n      <span *ngIf=\"enableIcons\" class=\"material-icons {{iconColour}}\">{{iconName}}</span>\r\n      <a *ngIf=\"enableClose\" (click)=\"onCloseTab($event)\" class=\"anchor-close\"></a>\r\n    </a>\r\n    <span *ngIf=\"tabDisabled\">\r\n      {{ tabName }}\r\n      <span *ngIf=\"enableIcons\" class=\"material-icons {{iconColour}}\">{{iconName}}</span>\r\n    </span>\r\n  </li>\r\n</ng-container> -->\r\n" }]
    }], null, { templateRefDirective: [{
            type: ContentChild,
            args: [TabNavigationContentDirective]
        }], templateRefHeaderDirective: [{
            type: ContentChild,
            args: [TabNavigationHeaderContentDirective]
        }], tabId: [{
            type: Input
        }], tabName: [{
            type: Input
        }], activeColor: [{
            type: Input
        }], enableIcons: [{
            type: Input
        }], iconName: [{
            type: Input
        }], iconColour: [{
            type: Input
        }], textColour: [{
            type: Input
        }], closeColour: [{
            type: Input
        }], enableCount: [{
            type: Input
        }], enableClose: [{
            type: Input
        }], tabCount: [{
            type: Input
        }], tabRoute: [{
            type: Input
        }], tabDisabled: [{
            type: Input
        }], countColour: [{
            type: Input
        }], showRightDivider: [{
            type: Input
        }], routerLink: [{
            type: Input
        }], routerLinkActive: [{
            type: Input
        }], enableTooltip: [{
            type: Input
        }], tabTooltipTitle: [{
            type: Input
        }], tabTooltipBody: [{
            type: Input
        }], tooltipXPos: [{
            type: Input
        }], tooltipYPos: [{
            type: Input
        }], tooltipWidth: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TabNavigationItemComponent, { className: "TabNavigationItemComponent", filePath: "lib\\navigation\\tab-navigation-item\\tab-navigation-item.component.ts", lineNumber: 10 }); })();

function TabNavigationComponent_nav_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nav", 3)(1, "ul");
    i0.ɵɵprojection(2);
    i0.ɵɵelementEnd()();
} }
const _c0$u = (a0, a1) => ({ "margin-left": a0, "margin-top": a1 });
const _c1$n = a0 => ({ "min-width": a0 });
function TabNavigationComponent_nav_1_ng_container_2_a_2_span_2_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 14)(1, "span", 15)(2, "h3");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const tab_r5 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(10, _c0$u, tab_r5.tooltipXPos, tab_r5.tooltipYPos));
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("feature-box ", tab_r5.iconColour, "");
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(13, _c1$n, tab_r5.tooltipWidth));
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("nowrap ", tab_r5.iconColour, "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(tab_r5.tabTooltipTitle);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(tab_r5.tabTooltipBody);
} }
function TabNavigationComponent_nav_1_ng_container_2_a_2_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 12)(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, TabNavigationComponent_nav_1_ng_container_2_a_2_span_2_span_3_Template, 6, 15, "span", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r5 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("material-icons ", tab_r5.iconColour, "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(tab_r5.iconName);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", tab_r5.enableTooltip);
} }
function TabNavigationComponent_nav_1_ng_container_2_a_2_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r5 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵclassMapInterpolate1("tab-count ", tab_r5.countColour, "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(tab_r5.tabCount);
} }
function TabNavigationComponent_nav_1_ng_container_2_a_2_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 16);
    i0.ɵɵlistener("click", function TabNavigationComponent_nav_1_ng_container_2_a_2_a_4_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r18); const tab_r5 = i0.ɵɵnextContext(2).$implicit; const ctx_r16 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r16.onCloseTab($event, tab_r5.tabId)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r5 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵclassMapInterpolate1("anchor-close ", tab_r5.closeColour, "");
} }
function TabNavigationComponent_nav_1_ng_container_2_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 8);
    i0.ɵɵlistener("click", function TabNavigationComponent_nav_1_ng_container_2_a_2_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r22); const tab_r5 = i0.ɵɵnextContext().$implicit; const ctx_r20 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r20.onTabClicked(tab_r5)); });
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, TabNavigationComponent_nav_1_ng_container_2_a_2_span_2_Template, 4, 5, "span", 9)(3, TabNavigationComponent_nav_1_ng_container_2_a_2_span_3_Template, 2, 4, "span", 10)(4, TabNavigationComponent_nav_1_ng_container_2_a_2_a_4_Template, 1, 3, "a", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r5 = i0.ɵɵnextContext().$implicit;
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("flex-group flex-align-center flex-start ", tab_r5.textColour, "");
    i0.ɵɵclassProp("active", ctx_r6.isActive(tab_r5));
    i0.ɵɵproperty("id", tab_r5.tabId);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", tab_r5.tabName, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", tab_r5.enableIcons);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", tab_r5.enableCount);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", tab_r5.enableClose);
} }
function TabNavigationComponent_nav_1_ng_container_2_span_3_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r5 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵclassMapInterpolate1("material-icons ", tab_r5.iconColour, "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(tab_r5.iconName);
} }
function TabNavigationComponent_nav_1_ng_container_2_span_3_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r5 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵclassMapInterpolate1("tab-count ", tab_r5.countColour, "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(tab_r5.tabCount);
} }
function TabNavigationComponent_nav_1_ng_container_2_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, TabNavigationComponent_nav_1_ng_container_2_span_3_span_2_Template, 2, 4, "span", 10)(3, TabNavigationComponent_nav_1_ng_container_2_span_3_span_3_Template, 2, 4, "span", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", tab_r5.tabName, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", tab_r5.enableIcons);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", tab_r5.enableCount);
} }
function TabNavigationComponent_nav_1_ng_container_2_li_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "li", 17);
} }
const _c2$i = a0 => ({ "tab-disabled": a0 });
function TabNavigationComponent_nav_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "li", 5);
    i0.ɵɵtemplate(2, TabNavigationComponent_nav_1_ng_container_2_a_2_Template, 5, 10, "a", 6)(3, TabNavigationComponent_nav_1_ng_container_2_span_3_Template, 4, 3, "span", 1);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, TabNavigationComponent_nav_1_ng_container_2_li_4_Template, 1, 0, "li", 7);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const tab_r5 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c2$i, tab_r5.tabDisabled));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !tab_r5.tabDisabled);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", tab_r5.tabDisabled);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", tab_r5.showRightDivider);
} }
function TabNavigationComponent_nav_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nav", 3)(1, "ul");
    i0.ɵɵtemplate(2, TabNavigationComponent_nav_1_ng_container_2_Template, 5, 6, "ng-container", 4);
    i0.ɵɵprojection(3, 1);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.contentTabs);
} }
function TabNavigationComponent_div_2_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 23);
    i0.ɵɵlistener("click", function TabNavigationComponent_div_2_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r34); const ctx_r33 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r33.toggleFullscreen = !ctx_r33.toggleFullscreen); });
    i0.ɵɵtext(1, "close_fullscreen");
    i0.ɵɵelementEnd();
} }
function TabNavigationComponent_div_2_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r36 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 23);
    i0.ɵɵlistener("click", function TabNavigationComponent_div_2_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r36); const ctx_r35 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r35.toggleFullscreen = !ctx_r35.toggleFullscreen); });
    i0.ɵɵtext(1, "open_in_full");
    i0.ɵɵelementEnd();
} }
function TabNavigationComponent_div_2_ng_container_7_a_2_1_ng_template_0_Template(rf, ctx) { }
function TabNavigationComponent_div_2_ng_container_7_a_2_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, TabNavigationComponent_div_2_ng_container_7_a_2_1_ng_template_0_Template, 0, 0, "ng-template");
} }
const _c3$e = a0 => ({ "active": a0 });
function TabNavigationComponent_div_2_ng_container_7_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r44 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 26);
    i0.ɵɵlistener("click", function TabNavigationComponent_div_2_ng_container_7_a_2_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r44); const tab_r37 = i0.ɵɵnextContext().$implicit; const ctx_r42 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r42.onTabClicked(tab_r37)); });
    i0.ɵɵtemplate(1, TabNavigationComponent_div_2_ng_container_7_a_2_1_Template, 1, 0, null, 27);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r37 = i0.ɵɵnextContext().$implicit;
    const ctx_r38 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(tab_r37.activeColor);
    i0.ɵɵpropertyInterpolate("title", tab_r37.tabName);
    i0.ɵɵproperty("id", tab_r37.tabId)("ngClass", i0.ɵɵpureFunction1(7, _c3$e, ctx_r38.isActive(tab_r37)));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", tab_r37.templateRefHeader);
} }
function TabNavigationComponent_div_2_ng_container_7_span_3_1_ng_template_0_Template(rf, ctx) { }
function TabNavigationComponent_div_2_ng_container_7_span_3_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, TabNavigationComponent_div_2_ng_container_7_span_3_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function TabNavigationComponent_div_2_ng_container_7_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 28);
    i0.ɵɵtemplate(1, TabNavigationComponent_div_2_ng_container_7_span_3_1_Template, 1, 0, null, 27);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r37 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵpropertyInterpolate("title", tab_r37.tabName);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", tab_r37.templateRefHeader);
} }
function TabNavigationComponent_div_2_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "li", 5);
    i0.ɵɵtemplate(2, TabNavigationComponent_div_2_ng_container_7_a_2_Template, 2, 9, "a", 24)(3, TabNavigationComponent_div_2_ng_container_7_span_3_Template, 2, 2, "span", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const tab_r37 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c2$i, tab_r37.tabDisabled));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !tab_r37.tabDisabled);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", tab_r37.tabDisabled);
} }
function TabNavigationComponent_div_2_ng_container_8_1_ng_template_0_Template(rf, ctx) { }
function TabNavigationComponent_div_2_ng_container_8_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, TabNavigationComponent_div_2_ng_container_8_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function TabNavigationComponent_div_2_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TabNavigationComponent_div_2_ng_container_8_1_Template, 1, 0, null, 27);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r32 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r32.currentTab.templateRef);
} }
const _c4$a = a0 => ({ "minimize": a0 });
function TabNavigationComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "nav", 18)(2, "div", 19)(3, "div", 20);
    i0.ɵɵtemplate(4, TabNavigationComponent_div_2_button_4_Template, 2, 0, "button", 21)(5, TabNavigationComponent_div_2_button_5_Template, 2, 0, "button", 21);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "ul", 22);
    i0.ɵɵtemplate(7, TabNavigationComponent_div_2_ng_container_7_Template, 4, 5, "ng-container", 4);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(8, TabNavigationComponent_div_2_ng_container_8_Template, 2, 1, "ng-container", 1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(5, _c4$a, ctx_r2.toggleFullscreen));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !ctx_r2.toggleFullscreen);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.toggleFullscreen);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r2.contentTabs);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.displayTabContent && ctx_r2.currentTab);
} }
function TabNavigationComponent_nav_3_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r54 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 30);
    i0.ɵɵlistener("click", function TabNavigationComponent_nav_3_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r54); const ctx_r53 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r53.toggleFullscreen = !ctx_r53.toggleFullscreen); });
    i0.ɵɵtext(1, "close_fullscreen");
    i0.ɵɵelementEnd();
} }
function TabNavigationComponent_nav_3_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r56 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 30);
    i0.ɵɵlistener("click", function TabNavigationComponent_nav_3_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r56); const ctx_r55 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r55.toggleFullscreen = !ctx_r55.toggleFullscreen); });
    i0.ɵɵtext(1, "open_in_full");
    i0.ɵɵelementEnd();
} }
function TabNavigationComponent_nav_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nav", 18)(1, "div", 19)(2, "div", 20);
    i0.ɵɵtemplate(3, TabNavigationComponent_nav_3_button_3_Template, 2, 0, "button", 29)(4, TabNavigationComponent_nav_3_button_4_Template, 2, 0, "button", 29);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "ul", 22);
    i0.ɵɵprojection(6, 2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c4$a, ctx_r3.toggleFullscreen));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !ctx_r3.toggleFullscreen);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.toggleFullscreen);
} }
const _c5$9 = [[["", "list-items", ""]], "*", [["", "tabs", ""]]];
const _c6$7 = ["[list-items]", "*", "[tabs]"];
class TabNavigationComponent {
    get contentTabs() {
        return this.tabNavigationItems?.filter((tabNavigationItem) => !!tabNavigationItem.templateRef);
    }
    constructor() {
        this.autoChangeTabs = true;
        this.displayTabContent = true;
        this.tabInfo = false;
        this.routerOutlet = false;
        this.ngTemplate = false;
        this.tabInfoRouterOutlet = false;
        this.toggleFullscreen = false;
        this.standardTabs = false;
        this.tabClicked = new EventEmitter();
        this.tabChanged = new EventEmitter();
        this.closeTab = new EventEmitter();
    }
    ngOnInit() {
        if (this.defaultTabId) {
            setTimeout((_) => {
                this.changeTabById(this.defaultTabId);
            }, 100);
        }
    }
    ngAfterContentInit() {
        if (this.contentTabs && this.contentTabs[0]) {
            this.changeTab(this.contentTabs[0]);
        }
    }
    isActive(tab) {
        return this.currentTab?.tabName === tab.tabName;
    }
    isDividerTab() {
        return true;
    }
    onTabClicked(tab) {
        this.tabClicked.emit(tab);
        if (this.autoChangeTabs) {
            this.changeTab(tab);
        }
    }
    changeTab(tab) {
        this.currentTab = tab;
        this.tabChanged.emit(tab);
    }
    changeTabById(tabId) {
        const tab = this.contentTabs?.find((x) => x.tabId === tabId);
        if (tab) {
            this.changeTab(tab);
        }
    }
    onCloseTab(e, tabId) {
        e.stopPropagation();
        this.closeTab.emit(tabId);
    }
    static { this.ɵfac = function TabNavigationComponent_Factory(t) { return new (t || TabNavigationComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TabNavigationComponent, selectors: [["aa-tab-navigation"]], contentQueries: function TabNavigationComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, TabNavigationItemComponent, 4);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tabNavigationItems = _t);
        } }, inputs: { autoChangeTabs: "autoChangeTabs", displayTabContent: "displayTabContent", tabInfo: "tabInfo", routerOutlet: "routerOutlet", ngTemplate: "ngTemplate", defaultTabId: "defaultTabId", tabInfoRouterOutlet: "tabInfoRouterOutlet", toggleFullscreen: "toggleFullscreen", standardTabs: "standardTabs" }, outputs: { tabClicked: "tabClicked", tabChanged: "tabChanged", closeTab: "closeTab" }, ngContentSelectors: _c6$7, decls: 4, vars: 4, consts: [["class", "tab-navigation", 4, "ngIf"], [4, "ngIf"], ["class", "tab-navigation-info", 3, "ngClass", 4, "ngIf"], [1, "tab-navigation"], [4, "ngFor", "ngForOf"], [3, "ngClass"], [3, "class", "id", "active", "click", 4, "ngIf"], ["class", "divider-tab", 4, "ngIf"], [3, "id", "click"], ["class", "tab-tooltip flex-align-center", 4, "ngIf"], [3, "class", 4, "ngIf"], [3, "class", "click", 4, "ngIf"], [1, "tab-tooltip", "flex-align-center"], ["class", "aa-tooltip position-fixed z-index-10", 3, "ngStyle", 4, "ngIf"], [1, "aa-tooltip", "position-fixed", "z-index-10", 3, "ngStyle"], [3, "ngStyle"], [3, "click"], [1, "divider-tab"], [1, "tab-navigation-info", 3, "ngClass"], [1, "float-right", "flex-group"], [1, "flex-align-center"], ["class", "transparent small material-icons aa-blue-100 padding-left-0-5 padding-right-0", 3, "click", 4, "ngIf"], [1, "flex-group", "flex-center"], [1, "transparent", "small", "material-icons", "aa-blue-100", "padding-left-0-5", "padding-right-0", 3, "click"], [3, "class", "title", "id", "ngClass", "click", 4, "ngIf"], [3, "title", 4, "ngIf"], [3, "title", "id", "ngClass", "click"], [4, "ngTemplateOutlet"], [3, "title"], ["class", "material-icons", 3, "click", 4, "ngIf"], [1, "material-icons", 3, "click"]], template: function TabNavigationComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c5$9);
            i0.ɵɵtemplate(0, TabNavigationComponent_nav_0_Template, 3, 0, "nav", 0)(1, TabNavigationComponent_nav_1_Template, 4, 1, "nav", 0)(2, TabNavigationComponent_div_2_Template, 9, 7, "div", 1)(3, TabNavigationComponent_nav_3_Template, 7, 5, "nav", 2);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.routerOutlet);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.ngTemplate);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.tabInfo);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.tabInfoRouterOutlet);
        } }, dependencies: [i1.NgClass, i1.NgForOf, i1.NgIf, i1.NgTemplateOutlet, i1.NgStyle] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TabNavigationComponent, [{
        type: Component,
        args: [{ selector: 'aa-tab-navigation', template: "<!-- ROUTER-OUTLET ONLY -->\r\n<nav *ngIf=\"routerOutlet\" class=\"tab-navigation\">\r\n  <ul>\r\n    <ng-content select=\"[list-items]\"></ng-content>\r\n  </ul>\r\n</nav>\r\n\r\n<!-- NG-TEMPLATE ONLY -->\r\n<nav *ngIf=\"ngTemplate\" class=\"tab-navigation\">\r\n  <ul>\r\n    <ng-container *ngFor=\"let tab of contentTabs\">\r\n      <li [ngClass]=\"{ 'tab-disabled' : tab.tabDisabled }\">\r\n        <a\r\n          *ngIf=\"!tab.tabDisabled\"\r\n          class=\"flex-group flex-align-center flex-start {{tab.textColour}}\"\r\n          [id]=\"tab.tabId\"\r\n          [class.active]=\"isActive(tab)\"\r\n          (click)=\"onTabClicked(tab)\"\r\n        >\r\n          {{ tab.tabName }}\r\n          <span class=\"tab-tooltip flex-align-center\" *ngIf=\"tab.enableIcons\">\r\n            <span class=\"material-icons {{tab.iconColour}}\">{{tab.iconName}}</span>\r\n            <span \r\n              *ngIf=\"tab.enableTooltip\" \r\n              class=\"aa-tooltip position-fixed z-index-10\"\r\n              [ngStyle]=\"{\r\n                'margin-left' : tab.tooltipXPos,\r\n                'margin-top' : tab.tooltipYPos\r\n              }\"\r\n            >\r\n              <span \r\n                class=\"feature-box {{tab.iconColour}}\"\r\n                [ngStyle]=\"{\r\n                  'min-width' : tab.tooltipWidth\r\n                }\"\r\n              >\r\n                <h3 class=\"nowrap {{tab.iconColour}}\">{{tab.tabTooltipTitle}}</h3>\r\n                <p>{{tab.tabTooltipBody}}</p>\r\n              </span>\r\n            </span>\r\n          </span>\r\n          <span *ngIf=\"tab.enableCount\" class=\"tab-count {{tab.countColour}}\">{{tab.tabCount}}</span>\r\n          <a *ngIf=\"tab.enableClose\" (click)=\"onCloseTab($event, tab.tabId)\"  class=\"anchor-close {{tab.closeColour}}\"></a>\r\n        </a>\r\n        <span *ngIf=\"tab.tabDisabled\">\r\n          {{ tab.tabName }}\r\n          <span *ngIf=\"tab.enableIcons\" class=\"material-icons {{tab.iconColour}}\">{{tab.iconName}}</span>\r\n          <span *ngIf=\"tab.enableCount\" class=\"tab-count {{tab.countColour}}\">{{tab.tabCount}}</span>\r\n        </span>\r\n      </li>\r\n      <li *ngIf=\"tab.showRightDivider\" class=\"divider-tab\"></li>\r\n    </ng-container>\r\n    <ng-content></ng-content>\r\n  </ul>\r\n</nav>\r\n\r\n<!-- INFO-PANEL NG-TEMPLATE -->\r\n<div *ngIf=\"tabInfo\">\r\n  <nav class=\"tab-navigation-info\" [ngClass]=\"{'minimize': toggleFullscreen}\">\r\n    <div class=\"float-right flex-group\">\r\n      <div class=\"flex-align-center\">\r\n        <button (click)=\"toggleFullscreen=!toggleFullscreen\" *ngIf=\"!toggleFullscreen\" class=\"transparent small material-icons aa-blue-100 padding-left-0-5 padding-right-0\">close_fullscreen</button>\r\n        <button (click)=\"toggleFullscreen=!toggleFullscreen\" *ngIf=\"toggleFullscreen\" class=\"transparent small material-icons aa-blue-100 padding-left-0-5 padding-right-0\">open_in_full</button>\r\n      </div>\r\n    </div>\r\n    <ul class=\"flex-group flex-center\">\r\n      <ng-container *ngFor=\"let tab of contentTabs\">\r\n        <li [ngClass]=\"{ 'tab-disabled' : tab.tabDisabled }\">\r\n          <a class=\"{{tab.activeColor}}\" title=\"{{ tab.tabName }}\" *ngIf=\"!tab.tabDisabled\" [id]=\"tab.tabId\" (click)=\"onTabClicked(tab)\" [ngClass]=\"{'active': isActive(tab)}\">\r\n            <ng-template *ngTemplateOutlet=\"tab.templateRefHeader\"></ng-template>\r\n          </a>\r\n          <span title=\"{{ tab.tabName }}\" *ngIf=\"tab.tabDisabled\">\r\n            <ng-template *ngTemplateOutlet=\"tab.templateRefHeader\"></ng-template>\r\n          </span>\r\n        </li>\r\n      </ng-container>\r\n    </ul>\r\n  </nav>\r\n\r\n  <ng-container *ngIf=\"displayTabContent && currentTab\">\r\n    <ng-template *ngTemplateOutlet=\"currentTab.templateRef\"></ng-template>\r\n  </ng-container>\r\n</div>\r\n\r\n<!-- INFO PANEL ROUTER-OUTLET -->\r\n<nav *ngIf=\"tabInfoRouterOutlet\" class=\"tab-navigation-info\" [ngClass]=\"{'minimize': toggleFullscreen}\">\r\n  <div class=\"float-right flex-group\">\r\n    <div class=\"flex-align-center\">\r\n      <button (click)=\"toggleFullscreen=!toggleFullscreen\" *ngIf=\"!toggleFullscreen\" class=\"material-icons\">close_fullscreen</button>\r\n      <button (click)=\"toggleFullscreen=!toggleFullscreen\" *ngIf=\"toggleFullscreen\" class=\"material-icons\">open_in_full</button>\r\n    </div>\r\n  </div>\r\n  <ul class=\"flex-group flex-center\">\r\n    <ng-content select=\"[tabs]\"></ng-content>\r\n  </ul>\r\n</nav>\r\n" }]
    }], () => [], { tabNavigationItems: [{
            type: ContentChildren,
            args: [TabNavigationItemComponent]
        }], autoChangeTabs: [{
            type: Input
        }], displayTabContent: [{
            type: Input
        }], tabInfo: [{
            type: Input
        }], routerOutlet: [{
            type: Input
        }], ngTemplate: [{
            type: Input
        }], defaultTabId: [{
            type: Input
        }], tabInfoRouterOutlet: [{
            type: Input
        }], toggleFullscreen: [{
            type: Input
        }], standardTabs: [{
            type: Input
        }], tabClicked: [{
            type: Output
        }], tabChanged: [{
            type: Output
        }], closeTab: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TabNavigationComponent, { className: "TabNavigationComponent", filePath: "lib\\navigation\\tab-navigation\\tab-navigation.component.ts", lineNumber: 9 }); })();

class TabNavigationSecondaryContentDirective {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
    static { this.ɵfac = function TabNavigationSecondaryContentDirective_Factory(t) { return new (t || TabNavigationSecondaryContentDirective)(i0.ɵɵdirectiveInject(i0.TemplateRef)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: TabNavigationSecondaryContentDirective, selectors: [["ng-template", "aaTabNavigationSecondaryContent", ""]] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TabNavigationSecondaryContentDirective, [{
        type: Directive,
        args: [{
                selector: 'ng-template[aaTabNavigationSecondaryContent]'
            }]
    }], () => [{ type: i0.TemplateRef }], null); })();

class TabNavigationSecondaryItemComponent {
    constructor() {
        this.tabName = '';
        this.tabRoute = '';
        this.tabDisabled = false;
        this.enableCloseSecondary = false;
        this.routerLink = '';
        this.routerLinkActive = false;
    }
    ngAfterContentChecked() {
        this.templateRef = this.templateRefDirective && this.templateRefDirective.templateRef;
    }
    get route() {
        return this.routerLink || this.tabRoute;
    }
    static { this.ɵfac = function TabNavigationSecondaryItemComponent_Factory(t) { return new (t || TabNavigationSecondaryItemComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TabNavigationSecondaryItemComponent, selectors: [["aa-tab-navigation-secondary-item"]], contentQueries: function TabNavigationSecondaryItemComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, TabNavigationSecondaryContentDirective, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.templateRefDirective = _t.first);
        } }, inputs: { tabId: "tabId", tabName: "tabName", tabRoute: "tabRoute", tabDisabled: "tabDisabled", enableCloseSecondary: "enableCloseSecondary", routerLink: "routerLink", routerLinkActive: "routerLinkActive" }, decls: 0, vars: 0, template: function TabNavigationSecondaryItemComponent_Template(rf, ctx) { } }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TabNavigationSecondaryItemComponent, [{
        type: Component,
        args: [{ selector: 'aa-tab-navigation-secondary-item', template: "<!-- BELOW ONLY USED FOR ROUTER-OUTLET VERSION -->\r\n<!-- <ng-container *ngIf=\"!templateRef\">\r\n  <li [ngClass]=\"{'tab-disabled' : tabDisabled}\">\r\n    <a *ngIf=\"!tabDisabled\" [id]=\"tabId\" [routerLink]=\"route\">{{ tabName }}</a>\r\n    <span *ngIf=\"tabDisabled\">{{ tabName }}</span>\r\n  </li>\r\n</ng-container> -->\r\n" }]
    }], null, { templateRefDirective: [{
            type: ContentChild,
            args: [TabNavigationSecondaryContentDirective]
        }], tabId: [{
            type: Input
        }], tabName: [{
            type: Input
        }], tabRoute: [{
            type: Input
        }], tabDisabled: [{
            type: Input
        }], enableCloseSecondary: [{
            type: Input
        }], routerLink: [{
            type: Input
        }], routerLinkActive: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TabNavigationSecondaryItemComponent, { className: "TabNavigationSecondaryItemComponent", filePath: "lib\\navigation\\tab-navigation-secondary-item\\tab-navigation-secondary-item.component.ts", lineNumber: 9 }); })();

function TabNavigationSecondaryComponent_nav_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nav", 1)(1, "ul");
    i0.ɵɵprojection(2);
    i0.ɵɵelementEnd()();
} }
function TabNavigationSecondaryComponent_nav_1_ng_container_2_a_2_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 7);
    i0.ɵɵlistener("click", function TabNavigationSecondaryComponent_nav_1_ng_container_2_a_2_a_2_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r10); const tab_r3 = i0.ɵɵnextContext(2).$implicit; const ctx_r8 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r8.onCloseTabSecondary($event, tab_r3.tabId)); });
    i0.ɵɵelementEnd();
} }
function TabNavigationSecondaryComponent_nav_1_ng_container_2_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 5);
    i0.ɵɵlistener("click", function TabNavigationSecondaryComponent_nav_1_ng_container_2_a_2_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r13); const tab_r3 = i0.ɵɵnextContext().$implicit; const ctx_r11 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r11.onTabClicked(tab_r3)); });
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, TabNavigationSecondaryComponent_nav_1_ng_container_2_a_2_a_2_Template, 1, 0, "a", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r3 = i0.ɵɵnextContext().$implicit;
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("", ctx_r4.tabColour, " flex-group flex-align-center flex-start");
    i0.ɵɵclassProp("active", ctx_r4.isActive(tab_r3));
    i0.ɵɵproperty("id", tab_r3.tabId);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", tab_r3.tabName, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", tab_r3.enableCloseSecondary);
} }
function TabNavigationSecondaryComponent_nav_1_ng_container_2_a_3_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 7);
    i0.ɵɵlistener("click", function TabNavigationSecondaryComponent_nav_1_ng_container_2_a_3_a_2_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r18); const tab_r3 = i0.ɵɵnextContext(2).$implicit; const ctx_r16 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r16.onCloseTabSecondary($event, tab_r3.tabId)); });
    i0.ɵɵelementEnd();
} }
function TabNavigationSecondaryComponent_nav_1_ng_container_2_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 5);
    i0.ɵɵlistener("click", function TabNavigationSecondaryComponent_nav_1_ng_container_2_a_3_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r21); const tab_r3 = i0.ɵɵnextContext().$implicit; const ctx_r19 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r19.onTabClicked(tab_r3)); });
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, TabNavigationSecondaryComponent_nav_1_ng_container_2_a_3_a_2_Template, 1, 0, "a", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r3 = i0.ɵɵnextContext().$implicit;
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("", ctx_r5.tabActiveColour, " flex-group flex-align-center flex-start");
    i0.ɵɵclassProp("active", ctx_r5.isActive(tab_r3));
    i0.ɵɵproperty("id", tab_r3.tabId);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", tab_r3.tabName, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", tab_r3.enableCloseSecondary);
} }
function TabNavigationSecondaryComponent_nav_1_ng_container_2_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(tab_r3.tabName);
} }
function TabNavigationSecondaryComponent_nav_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "li");
    i0.ɵɵtemplate(2, TabNavigationSecondaryComponent_nav_1_ng_container_2_a_2_Template, 3, 8, "a", 3)(3, TabNavigationSecondaryComponent_nav_1_ng_container_2_a_3_Template, 3, 8, "a", 3)(4, TabNavigationSecondaryComponent_nav_1_ng_container_2_span_4_Template, 2, 1, "span", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const tab_r3 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r2.isActive(tab_r3) && !tab_r3.tabDisabled);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.isActive(tab_r3) && !tab_r3.tabDisabled);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", tab_r3.tabDisabled);
} }
function TabNavigationSecondaryComponent_nav_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nav", 1)(1, "ul");
    i0.ɵɵtemplate(2, TabNavigationSecondaryComponent_nav_1_ng_container_2_Template, 5, 3, "ng-container", 2);
    i0.ɵɵprojection(3, 1);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.contentTabs);
} }
const _c0$t = [[["", "list-items", ""]], "*"];
const _c1$m = ["[list-items]", "*"];
class TabNavigationSecondaryComponent {
    get contentTabs() {
        return this.tabNavigationItems?.filter((tabNavigationItem) => !!tabNavigationItem.templateRef);
    }
    constructor() {
        this.autoChangeTabs = true;
        this.displayTabContent = true;
        this.routerOutletSecondary = false;
        this.ngTemplate = false;
        this.tabClicked = new EventEmitter();
        this.tabChanged = new EventEmitter();
        this.closeTabSecondary = new EventEmitter();
    }
    ngAfterContentInit() {
        if (this.contentTabs && this.contentTabs[0]) {
            this.changeTab(this.contentTabs[0]);
        }
    }
    isActive(tab) {
        return this.currentTab?.tabName === tab.tabName;
    }
    onTabClicked(tab) {
        this.tabClicked.emit(tab);
        if (this.autoChangeTabs) {
            this.changeTab(tab);
        }
    }
    changeTab(tab) {
        this.currentTab = tab;
        this.tabChanged.emit(tab);
    }
    changeTabById(tabId) {
        const tab = this.contentTabs?.find((x) => x.tabId === tabId);
        if (tab) {
            this.changeTab(tab);
        }
    }
    onCloseTabSecondary(e, tabId) {
        e.stopPropagation();
        this.closeTabSecondary.emit(tabId);
    }
    static { this.ɵfac = function TabNavigationSecondaryComponent_Factory(t) { return new (t || TabNavigationSecondaryComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TabNavigationSecondaryComponent, selectors: [["aa-tab-navigation-secondary"]], contentQueries: function TabNavigationSecondaryComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, TabNavigationSecondaryItemComponent, 4);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tabNavigationItems = _t);
        } }, inputs: { autoChangeTabs: "autoChangeTabs", displayTabContent: "displayTabContent", routerOutletSecondary: "routerOutletSecondary", ngTemplate: "ngTemplate", tabColour: "tabColour", tabActiveColour: "tabActiveColour" }, outputs: { tabClicked: "tabClicked", tabChanged: "tabChanged", closeTabSecondary: "closeTabSecondary" }, ngContentSelectors: _c1$m, decls: 2, vars: 2, consts: [["class", "tab-navigation-secondary", 4, "ngIf"], [1, "tab-navigation-secondary"], [4, "ngFor", "ngForOf"], [3, "class", "id", "active", "click", 4, "ngIf"], ["class", "tab-disabled", 4, "ngIf"], [3, "id", "click"], ["class", "anchor-close", 3, "click", 4, "ngIf"], [1, "anchor-close", 3, "click"], [1, "tab-disabled"]], template: function TabNavigationSecondaryComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0$t);
            i0.ɵɵtemplate(0, TabNavigationSecondaryComponent_nav_0_Template, 3, 0, "nav", 0)(1, TabNavigationSecondaryComponent_nav_1_Template, 4, 1, "nav", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.routerOutletSecondary);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.ngTemplate);
        } }, dependencies: [i1.NgForOf, i1.NgIf] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TabNavigationSecondaryComponent, [{
        type: Component,
        args: [{ selector: 'aa-tab-navigation-secondary', template: "\r\n<!-- ROUTER-OUTLET -->\r\n<nav *ngIf=\"routerOutletSecondary\" class=\"tab-navigation-secondary\">\r\n  <ul>\r\n    <ng-content select=\"[list-items]\"></ng-content>\r\n  </ul>\r\n</nav>\r\n\r\n<!-- NG-TEMPLATE ONLY -->\r\n<nav *ngIf=\"ngTemplate\" class=\"tab-navigation-secondary\">\r\n  <ul>\r\n    <ng-container *ngFor=\"let tab of contentTabs\">\r\n      <li>\r\n        <a\r\n          class=\"{{tabColour}} flex-group flex-align-center flex-start\"\r\n          *ngIf=\"!isActive(tab) && !tab.tabDisabled\"\r\n          [id]=\"tab.tabId\"\r\n          [class.active]=\"isActive(tab)\"\r\n          (click)=\"onTabClicked(tab)\">\r\n          {{ tab.tabName }}\r\n          <a *ngIf=\"tab.enableCloseSecondary\" (click)=\"onCloseTabSecondary($event, tab.tabId)\" class=\"anchor-close\"></a>\r\n        </a>\r\n        <a\r\n          class=\"{{tabActiveColour}} flex-group flex-align-center flex-start\"\r\n          *ngIf=\"isActive(tab) && !tab.tabDisabled\"\r\n          [id]=\"tab.tabId\"\r\n          [class.active]=\"isActive(tab)\"\r\n          (click)=\"onTabClicked(tab)\">\r\n          {{ tab.tabName }}\r\n          <a *ngIf=\"tab.enableCloseSecondary\" (click)=\"onCloseTabSecondary($event, tab.tabId)\" class=\"anchor-close\"></a>\r\n        </a>\r\n        <span *ngIf=\"tab.tabDisabled\" class=\"tab-disabled\">{{ tab.tabName }}</span>\r\n      </li>\r\n    </ng-container>\r\n    <ng-content></ng-content>\r\n  </ul>\r\n</nav>\r\n" }]
    }], () => [], { tabNavigationItems: [{
            type: ContentChildren,
            args: [TabNavigationSecondaryItemComponent]
        }], autoChangeTabs: [{
            type: Input
        }], displayTabContent: [{
            type: Input
        }], routerOutletSecondary: [{
            type: Input
        }], ngTemplate: [{
            type: Input
        }], tabColour: [{
            type: Input
        }], tabActiveColour: [{
            type: Input
        }], tabClicked: [{
            type: Output
        }], tabChanged: [{
            type: Output
        }], closeTabSecondary: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TabNavigationSecondaryComponent, { className: "TabNavigationSecondaryComponent", filePath: "lib\\navigation\\tab-navigation-secondary\\tab-navigation-secondary.component.ts", lineNumber: 9 }); })();

class NavigationModule {
    static { this.ɵfac = function NavigationModule_Factory(t) { return new (t || NavigationModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: NavigationModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule, RouterModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NavigationModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    ContextMenuComponent,
                    ContextMenuItemComponent,
                    NavContextComponent,
                    ProgressIndicatorComponent,
                    ProgressIndicatorAdvancedComponent,
                    StepperComponent,
                    TabNavigationComponent,
                    TabNavigationItemComponent,
                    TabNavigationSecondaryComponent,
                    TabNavigationSecondaryItemComponent,
                    TabNavigationContentDirective,
                    TabNavigationSecondaryContentDirective,
                    TabNavigationHeaderContentDirective
                ],
                imports: [CommonModule, RouterModule],
                exports: [
                    ContextMenuComponent,
                    ContextMenuItemComponent,
                    NavContextComponent,
                    StepperComponent,
                    ProgressIndicatorComponent,
                    ProgressIndicatorAdvancedComponent,
                    TabNavigationComponent,
                    TabNavigationItemComponent,
                    TabNavigationSecondaryComponent,
                    TabNavigationSecondaryItemComponent,
                    TabNavigationContentDirective,
                    TabNavigationSecondaryContentDirective,
                    TabNavigationHeaderContentDirective
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NavigationModule, { declarations: [ContextMenuComponent,
        ContextMenuItemComponent,
        NavContextComponent,
        ProgressIndicatorComponent,
        ProgressIndicatorAdvancedComponent,
        StepperComponent,
        TabNavigationComponent,
        TabNavigationItemComponent,
        TabNavigationSecondaryComponent,
        TabNavigationSecondaryItemComponent,
        TabNavigationContentDirective,
        TabNavigationSecondaryContentDirective,
        TabNavigationHeaderContentDirective], imports: [CommonModule, RouterModule], exports: [ContextMenuComponent,
        ContextMenuItemComponent,
        NavContextComponent,
        StepperComponent,
        ProgressIndicatorComponent,
        ProgressIndicatorAdvancedComponent,
        TabNavigationComponent,
        TabNavigationItemComponent,
        TabNavigationSecondaryComponent,
        TabNavigationSecondaryItemComponent,
        TabNavigationContentDirective,
        TabNavigationSecondaryContentDirective,
        TabNavigationHeaderContentDirective] }); })();

function AlertComponent_div_0_div_1_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 9);
    i0.ɵɵtext(1, "open_in_full");
    i0.ɵɵelementEnd();
} }
function AlertComponent_div_0_div_1_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 9);
    i0.ɵɵtext(1, "close_fullscreen");
    i0.ɵɵelementEnd();
} }
function AlertComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5)(1, "h3", 6);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 7);
    i0.ɵɵlistener("click", function AlertComponent_div_0_div_1_Template_div_click_3_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r7.expandPanel = !ctx_r7.expandPanel); });
    i0.ɵɵtemplate(4, AlertComponent_div_0_div_1_span_4_Template, 2, 0, "span", 8)(5, AlertComponent_div_0_div_1_span_5_Template, 2, 0, "span", 8);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.alertTitle);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r2.expandPanel);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.expandPanel);
} }
function AlertComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r3.alertText, " ");
} }
const _c0$s = a0 => ({ "margin-top-1": a0 });
function AlertComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c0$s, ctx_r4.collapsible));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r4.alertText, " ");
} }
const _c1$l = (a0, a1) => ({ "align-icon-top": a0, "max-height-initial": a1 });
const _c2$h = a0 => [a0];
const _c3$d = (a0, a1, a2) => ({ "min-width": a0, "max-width": a1, "max-height": a2 });
function AlertComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, AlertComponent_div_0_div_1_Template, 6, 3, "div", 2)(2, AlertComponent_div_0_div_2_Template, 2, 1, "div", 3)(3, AlertComponent_div_0_div_3_Template, 2, 4, "div", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("overflow-hidden ", ctx_r0.alertClass, "");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(8, _c1$l, ctx_r0.alignIconTop, ctx_r0.expandPanel))("ngStyle", i0.ɵɵpureFunction3(13, _c3$d, ctx_r0.minWidth, ctx_r0.maxWidth, i0.ɵɵpureFunction1(11, _c2$h, ctx_r0.collapsedHeight)));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.collapsible);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.collapsible);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.collapsible);
} }
function AlertComponent_div_1_div_1_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 9);
    i0.ɵɵtext(1, "open_in_full");
    i0.ɵɵelementEnd();
} }
function AlertComponent_div_1_div_1_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 9);
    i0.ɵɵtext(1, "close_fullscreen");
    i0.ɵɵelementEnd();
} }
function AlertComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5)(1, "h3", 6);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 7);
    i0.ɵɵlistener("click", function AlertComponent_div_1_div_1_Template_div_click_3_listener() { i0.ɵɵrestoreView(_r15); const ctx_r14 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r14.expandPanel = !ctx_r14.expandPanel); });
    i0.ɵɵtemplate(4, AlertComponent_div_1_div_1_span_4_Template, 2, 0, "span", 8)(5, AlertComponent_div_1_div_1_span_5_Template, 2, 0, "span", 8);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r9.alertTitle);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r9.expandPanel);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r9.expandPanel);
} }
function AlertComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r10.alertText, " ");
} }
function AlertComponent_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c0$s, ctx_r11.collapsible));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r11.alertText, " ");
} }
function AlertComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, AlertComponent_div_1_div_1_Template, 6, 3, "div", 2)(2, AlertComponent_div_1_div_2_Template, 2, 1, "div", 3)(3, AlertComponent_div_1_div_3_Template, 2, 4, "div", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("overflow-hidden ", ctx_r1.alertClass, "");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(8, _c1$l, ctx_r1.alignIconTop, !ctx_r1.expandPanel))("ngStyle", i0.ɵɵpureFunction3(13, _c3$d, ctx_r1.minWidth, ctx_r1.maxWidth, i0.ɵɵpureFunction1(11, _c2$h, ctx_r1.collapsedHeight)));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.collapsible);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.collapsible);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.collapsible);
} }
class AlertComponent {
    constructor() {
        this.alertClass = '';
        this.alertTitle = '';
        this.alertText = '';
        this.collapsible = false;
        this.alignIconTop = false;
        this.expandPanel = false;
        this.defaultExpanded = false;
    }
    static { this.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AlertComponent, selectors: [["aa-alert"]], inputs: { alertClass: "alertClass", alertTitle: "alertTitle", alertText: "alertText", collapsible: "collapsible", alignIconTop: "alignIconTop", expandPanel: "expandPanel", minWidth: "minWidth", maxWidth: "maxWidth", collapsedHeight: "collapsedHeight", removePanel: "removePanel", defaultExpanded: "defaultExpanded" }, decls: 2, vars: 2, consts: [["role", "alert", 3, "class", "ngClass", "ngStyle", 4, "ngIf"], ["role", "alert", 3, "ngClass", "ngStyle"], ["class", "\n        flex-group \n        space-between \n        flex-align-center \n        margin-top-0-5", 4, "ngIf"], [4, "ngIf"], [3, "ngClass", 4, "ngIf"], [1, "flex-group", "space-between", "flex-align-center", "margin-top-0-5"], [1, "margin-0"], [1, "flex-align-center", "cursor-pointer", 3, "click"], ["class", "material-icons padding-left-1", 4, "ngIf"], [1, "material-icons", "padding-left-1"], [3, "ngClass"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, AlertComponent_div_0_Template, 4, 17, "div", 0)(1, AlertComponent_div_1_Template, 4, 17, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.defaultExpanded);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.defaultExpanded);
        } }, dependencies: [i1.NgClass, i1.NgIf, i1.NgStyle], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AlertComponent, [{
        type: Component,
        args: [{ selector: 'aa-alert', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div \r\n    *ngIf=\"!defaultExpanded\"\r\n    role=\"alert\" \r\n    class=\"overflow-hidden {{alertClass}}\"\r\n    [ngClass]=\"{\r\n        'align-icon-top' : alignIconTop,\r\n        'max-height-initial' : expandPanel\r\n    }\"\r\n    [ngStyle]=\"{\r\n        'min-width' : minWidth,\r\n        'max-width' : maxWidth,\r\n        'max-height': [collapsedHeight]\r\n    }\"\r\n>\r\n    <div \r\n        *ngIf=\"collapsible\" \r\n        class=\"\r\n        flex-group \r\n        space-between \r\n        flex-align-center \r\n        margin-top-0-5\"\r\n    >\r\n        <h3 class=\"margin-0\">{{ alertTitle }}</h3>\r\n        <div \r\n            class=\"flex-align-center cursor-pointer\"\r\n            (click)=\"expandPanel=!expandPanel\"\r\n        >\r\n            <span class=\"material-icons padding-left-1\" *ngIf=\"!expandPanel\">open_in_full</span>\r\n            <span class=\"material-icons padding-left-1\" *ngIf=\"expandPanel\">close_fullscreen</span>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"!collapsible\">\r\n        {{ alertText }}\r\n    </div> \r\n    <div \r\n        *ngIf=\"collapsible\"\r\n        [ngClass]=\"{\r\n            'margin-top-1' : collapsible\r\n        }\"\r\n    >\r\n        {{ alertText }}\r\n    </div>\r\n</div>\r\n\r\n<div \r\n    *ngIf=\"defaultExpanded\"\r\n    role=\"alert\" \r\n    class=\"overflow-hidden {{alertClass}}\"\r\n    [ngClass]=\"{\r\n        'align-icon-top' : alignIconTop,\r\n        'max-height-initial' : !expandPanel\r\n    }\"\r\n    [ngStyle]=\"{\r\n        'min-width' : minWidth,\r\n        'max-width' : maxWidth,\r\n        'max-height': [collapsedHeight]\r\n    }\"\r\n>\r\n    <div \r\n        *ngIf=\"collapsible\" \r\n        class=\"\r\n        flex-group \r\n        space-between \r\n        flex-align-center \r\n        margin-top-0-5\"\r\n    >\r\n        <h3 class=\"margin-0\">{{ alertTitle }}</h3>\r\n        <div \r\n            class=\"flex-align-center cursor-pointer\"\r\n            (click)=\"expandPanel=!expandPanel\"\r\n        >\r\n            <span class=\"material-icons padding-left-1\" *ngIf=\"!expandPanel\">open_in_full</span>\r\n            <span class=\"material-icons padding-left-1\" *ngIf=\"expandPanel\">close_fullscreen</span>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"!collapsible\">\r\n        {{ alertText }}\r\n    </div> \r\n    <div \r\n        *ngIf=\"collapsible\"\r\n        [ngClass]=\"{\r\n            'margin-top-1' : collapsible\r\n        }\"\r\n    >\r\n        {{ alertText }}\r\n    </div>\r\n</div>" }]
    }], () => [], { alertClass: [{
            type: Input
        }], alertTitle: [{
            type: Input
        }], alertText: [{
            type: Input
        }], collapsible: [{
            type: Input
        }], alignIconTop: [{
            type: Input
        }], expandPanel: [{
            type: Input
        }], minWidth: [{
            type: Input
        }], maxWidth: [{
            type: Input
        }], collapsedHeight: [{
            type: Input
        }], removePanel: [{
            type: Input
        }], defaultExpanded: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AlertComponent, { className: "AlertComponent", filePath: "lib\\patterns\\alert\\alert.component.ts", lineNumber: 8 }); })();

const _c0$r = (a0, a1) => ({ "small": a0, "nowrap": a1 });
const _c1$k = a0 => ({ "display": a0 });
function AlertShieldComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3)(1, "span", 4);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("alert-shield ", ctx_r0.alertShieldStatus, "");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(6, _c0$r, ctx_r0.alertShieldSmall, ctx_r0.noWrap));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(9, _c1$k, ctx_r0.hideLabel ? "none" : "inline"));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.alertShieldText, " ");
} }
function AlertShieldComponent_div_1_h4_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r3.tooltipHeading);
} }
const _c2$g = (a0, a1, a2, a3) => ({ "tooltip-top-left": a0, "tooltip-top-right": a1, "tooltip-bottom-left": a2, "tooltip-bottom-right": a3 });
const _c3$c = a0 => ({ "min-width": a0 });
function AlertShieldComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5)(1, "div", 4);
    i0.ɵɵtemplate(2, AlertShieldComponent_div_1_h4_2_Template, 2, 1, "h4", 6);
    i0.ɵɵprojection(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 3)(5, "span", 4);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction4(12, _c2$g, ctx_r1.tooltipTopLeft, ctx_r1.tooltipTopRight, ctx_r1.tooltipBottomLeft, ctx_r1.tooltipBottomRight));
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("alert-shield-tooltip ", ctx_r1.alertShieldStatus, "");
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(17, _c3$c, ctx_r1.minWidth));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showTooltipHeading);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("alert-shield ", ctx_r1.alertShieldStatus, "");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(19, _c0$r, ctx_r1.alertShieldSmall, ctx_r1.noWrap));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(22, _c1$k, ctx_r1.hideLabel ? "none" : "inline"));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.alertShieldText, " ");
} }
function AlertShieldComponent_div_2_div_2_h4_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r5.tooltipHeading);
} }
function AlertShieldComponent_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtemplate(1, AlertShieldComponent_div_2_div_2_h4_1_Template, 2, 1, "h4", 6);
    i0.ɵɵprojection(2, 1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c3$c, ctx_r4.minWidth));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r4.showTooltipHeading);
} }
const _c4$9 = (a0, a1, a2, a3) => ({ "small": a0, "nowrap": a1, "icon-only": a2, "rotate": a3 });
const _c5$8 = (a0, a1) => ({ "material-icons": a0, "material-icons-outlined": a1 });
function AlertShieldComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7)(1, "div", 3);
    i0.ɵɵtemplate(2, AlertShieldComponent_div_2_div_2_Template, 3, 4, "div", 8);
    i0.ɵɵelementStart(3, "div", 3);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 4);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction4(10, _c2$g, ctx_r2.tooltipTopLeft, ctx_r2.tooltipTopRight, ctx_r2.tooltipBottomLeft, ctx_r2.tooltipBottomRight));
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("\n            flex-group \n            flex-align-center \n            flex-start \n            custom-alert-shield-container\n            ", ctx_r2.shieldColour, "\n        ");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction4(15, _c4$9, ctx_r2.alertShieldSmall, ctx_r2.noWrap, ctx_r2.iconOnly, ctx_r2.enableRotation));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.showTooltip);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(20, _c5$8, !ctx_r2.iconOutlined, ctx_r2.iconOutlined));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.iconName, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(23, _c1$k, ctx_r2.hideLabel ? "none" : "inline"));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.alertShieldText, " ");
} }
const _c6$6 = [[["", "tooltip-content", ""]], [["", "custom-tooltip-content", ""]]];
const _c7$3 = ["[tooltip-content]", "[custom-tooltip-content]"];
class AlertShieldComponent {
    constructor() {
        this.alertShieldStatus = '';
        this.alertShieldText = '';
        this.showTooltip = false;
        this.showTooltipHeading = false;
        this.tooltipHeading = '';
        this.alertShieldSmall = false;
        this.noWrap = false;
        this.hideLabel = false;
        this.tooltipTopLeft = false;
        this.tooltipTopRight = false;
        this.tooltipBottomLeft = false;
        this.tooltipBottomRight = false;
        this.customShield = false;
        this.iconName = '';
        this.iconOutlined = false;
        this.bgRedLight = false;
        this.bgRedDark = false;
        this.bgGreenLight = false;
        this.bgGreenDark = false;
        this.bgOrangeLight = false;
        this.bgOrangeDark = false;
        this.bgBlueLight = false;
        this.bgBlueDark = false;
        this.bgGreyLight = false;
        this.bgGreyDark = false;
        this.iconOnly = false;
        this.enableRotation = false;
    }
    static { this.ɵfac = function AlertShieldComponent_Factory(t) { return new (t || AlertShieldComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AlertShieldComponent, selectors: [["aa-alert-shield"]], inputs: { alertShieldStatus: "alertShieldStatus", alertShieldText: "alertShieldText", showTooltip: "showTooltip", showTooltipHeading: "showTooltipHeading", tooltipHeading: "tooltipHeading", minWidth: "minWidth", alertShieldSmall: "alertShieldSmall", noWrap: "noWrap", hideLabel: "hideLabel", tooltipTopLeft: "tooltipTopLeft", tooltipTopRight: "tooltipTopRight", tooltipBottomLeft: "tooltipBottomLeft", tooltipBottomRight: "tooltipBottomRight", customShield: "customShield", iconName: "iconName", iconOutlined: "iconOutlined", bgRedLight: "bgRedLight", bgRedDark: "bgRedDark", bgGreenLight: "bgGreenLight", bgGreenDark: "bgGreenDark", bgOrangeLight: "bgOrangeLight", bgOrangeDark: "bgOrangeDark", bgBlueLight: "bgBlueLight", bgBlueDark: "bgBlueDark", bgGreyLight: "bgGreyLight", bgGreyDark: "bgGreyDark", shieldColour: "shieldColour", iconOnly: "iconOnly", enableRotation: "enableRotation" }, ngContentSelectors: _c7$3, decls: 3, vars: 3, consts: [[3, "class", "ngClass", 4, "ngIf"], ["class", "alert-shield-tooltip-wrapper", 3, "ngClass", 4, "ngIf"], ["class", "custom-alert-shield", 3, "ngClass", 4, "ngIf"], [3, "ngClass"], [3, "ngStyle"], [1, "alert-shield-tooltip-wrapper", 3, "ngClass"], [4, "ngIf"], [1, "custom-alert-shield", 3, "ngClass"], ["class", "alert-shield-tooltip", 3, "ngStyle", 4, "ngIf"], [1, "alert-shield-tooltip", 3, "ngStyle"]], template: function AlertShieldComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c6$6);
            i0.ɵɵtemplate(0, AlertShieldComponent_div_0_Template, 3, 11, "div", 0)(1, AlertShieldComponent_div_1_Template, 7, 24, "div", 1)(2, AlertShieldComponent_div_2_Template, 7, 25, "div", 2);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.showTooltip && !ctx.customShield);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showTooltip && !ctx.customShield);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.customShield);
        } }, dependencies: [i1.NgClass, i1.NgIf, i1.NgStyle], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AlertShieldComponent, [{
        type: Component,
        args: [{ selector: 'aa-alert-shield', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div \r\n    *ngIf=\"!showTooltip && !customShield\" \r\n    class=\"alert-shield {{alertShieldStatus}}\" \r\n    [ngClass]=\"{\r\n        'small' : alertShieldSmall, \r\n        'nowrap' : noWrap \r\n        }\"\r\n    >\r\n    <span [ngStyle]=\"{ 'display': hideLabel ? 'none' : 'inline' }\">\r\n        {{alertShieldText}}\r\n    </span>\r\n</div>\r\n\r\n<div \r\n    *ngIf=\"showTooltip && !customShield\" \r\n    class=\"alert-shield-tooltip-wrapper\"\r\n    [ngClass]=\"{\r\n        'tooltip-top-left' : tooltipTopLeft,\r\n        'tooltip-top-right' : tooltipTopRight,\r\n        'tooltip-bottom-left' : tooltipBottomLeft,\r\n        'tooltip-bottom-right' : tooltipBottomRight\r\n    }\"\r\n>\r\n    <div \r\n        class=\"alert-shield-tooltip {{alertShieldStatus}}\"\r\n        [ngStyle]=\"{'min-width' : minWidth}\"\r\n    >\r\n        <h4 *ngIf=\"showTooltipHeading\">{{tooltipHeading}}</h4>\r\n        <ng-content select=\"[tooltip-content]\"></ng-content>\r\n    </div>\r\n    <div \r\n        class=\"alert-shield {{alertShieldStatus}}\" \r\n        [ngClass]=\"{\r\n            'small' : alertShieldSmall, \r\n            'nowrap' : noWrap \r\n            }\"\r\n        >\r\n            <span [ngStyle]=\"{ 'display': hideLabel ? 'none' : 'inline' }\">\r\n                {{alertShieldText}}\r\n            </span>\r\n    </div>\r\n</div>\r\n\r\n<div \r\n    *ngIf=\"customShield\" \r\n    class=\"custom-alert-shield\"\r\n    [ngClass]=\"{\r\n        'tooltip-top-left' : tooltipTopLeft,\r\n        'tooltip-top-right' : tooltipTopRight,\r\n        'tooltip-bottom-left' : tooltipBottomLeft,\r\n        'tooltip-bottom-right' : tooltipBottomRight\r\n    }\"\r\n>\r\n    <div \r\n        class=\"\r\n            flex-group \r\n            flex-align-center \r\n            flex-start \r\n            custom-alert-shield-container\r\n            {{shieldColour}}\r\n        \"\r\n        [ngClass]=\"{\r\n            'small' : alertShieldSmall,\r\n            'nowrap' : noWrap,\r\n            'icon-only' : iconOnly,\r\n            'rotate' : enableRotation\r\n        }\"\r\n      >\r\n        <div \r\n            *ngIf=\"showTooltip\"\r\n            class=\"alert-shield-tooltip\"\r\n            [ngStyle]=\"{'min-width' : minWidth}\"\r\n        >\r\n            <h4 *ngIf=\"showTooltipHeading\">{{tooltipHeading}}</h4>\r\n            <ng-content select=\"[custom-tooltip-content]\"></ng-content>\r\n        </div>\r\n        <div \r\n            [ngClass]=\"{\r\n                'material-icons' : !iconOutlined,\r\n                'material-icons-outlined' : iconOutlined\r\n            }\">\r\n            {{iconName}}\r\n        </div>\r\n        <span [ngStyle]=\"{ 'display': hideLabel ? 'none' : 'inline' }\">\r\n            {{alertShieldText}}\r\n        </span>\r\n    </div>\r\n</div>" }]
    }], () => [], { alertShieldStatus: [{
            type: Input
        }], alertShieldText: [{
            type: Input
        }], showTooltip: [{
            type: Input
        }], showTooltipHeading: [{
            type: Input
        }], tooltipHeading: [{
            type: Input
        }], minWidth: [{
            type: Input
        }], alertShieldSmall: [{
            type: Input
        }], noWrap: [{
            type: Input
        }], hideLabel: [{
            type: Input
        }], tooltipTopLeft: [{
            type: Input
        }], tooltipTopRight: [{
            type: Input
        }], tooltipBottomLeft: [{
            type: Input
        }], tooltipBottomRight: [{
            type: Input
        }], customShield: [{
            type: Input
        }], iconName: [{
            type: Input
        }], iconOutlined: [{
            type: Input
        }], bgRedLight: [{
            type: Input
        }], bgRedDark: [{
            type: Input
        }], bgGreenLight: [{
            type: Input
        }], bgGreenDark: [{
            type: Input
        }], bgOrangeLight: [{
            type: Input
        }], bgOrangeDark: [{
            type: Input
        }], bgBlueLight: [{
            type: Input
        }], bgBlueDark: [{
            type: Input
        }], bgGreyLight: [{
            type: Input
        }], bgGreyDark: [{
            type: Input
        }], shieldColour: [{
            type: Input
        }], iconOnly: [{
            type: Input
        }], enableRotation: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AlertShieldComponent, { className: "AlertShieldComponent", filePath: "lib\\patterns\\alert-shield\\alert-shield.component.ts", lineNumber: 9 }); })();

class AnchorBackComponent {
    constructor() {
        this.anchorBackText = '';
        this.anchorURL = '';
    }
    static { this.ɵfac = function AnchorBackComponent_Factory(t) { return new (t || AnchorBackComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AnchorBackComponent, selectors: [["aa-anchor-back"]], inputs: { anchorBackText: "anchorBackText", anchorURL: "anchorURL" }, decls: 2, vars: 2, consts: [[1, "anchor-back"]], template: function AnchorBackComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "a", 0);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵattribute("href", ctx.anchorURL, i0.ɵɵsanitizeUrl);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.anchorBackText);
        } }, encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AnchorBackComponent, [{
        type: Component,
        args: [{ selector: 'aa-anchor-back', changeDetection: ChangeDetectionStrategy.OnPush, template: "<a class=\"anchor-back\" [attr.href]=\"anchorURL\">{{anchorBackText}}</a>" }]
    }], null, { anchorBackText: [{
            type: Input
        }], anchorURL: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AnchorBackComponent, { className: "AnchorBackComponent", filePath: "lib\\patterns\\anchor-back\\anchor-back.component.ts", lineNumber: 8 }); })();

const _c0$q = a0 => ({ "width": a0 });
const _c1$j = a0 => ({ "display-over-header": a0 });
class ProgressBarComponent {
    constructor() {
        this.titleBold = '';
        this.titleRegular = '';
        this.complete = 0;
        this.maxWidth = '';
        this.displayOverHeader = false;
    }
    static { this.ɵfac = function ProgressBarComponent_Factory(t) { return new (t || ProgressBarComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProgressBarComponent, selectors: [["aa-progress-bar"]], inputs: { titleBold: "titleBold", titleRegular: "titleRegular", leftSideText: "leftSideText", rightSideText: "rightSideText", complete: "complete", maxWidth: "maxWidth", displayOverHeader: "displayOverHeader", progressBgColour: "progressBgColour", progressColour: "progressColour", progressId: "progressId" }, decls: 13, vars: 20, consts: [[1, "progress-bar", 3, "ngStyle", "ngClass"], [3, "id", "ngStyle"], [1, "flex-group", "space-between"]], template: function ProgressBarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "span")(2, "strong");
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "span");
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "div");
            i0.ɵɵelement(7, "div", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div", 2)(9, "div");
            i0.ɵɵtext(10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "div");
            i0.ɵɵtext(12);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(14, _c0$q, ctx.maxWidth))("ngClass", i0.ɵɵpureFunction1(16, _c1$j, ctx.displayOverHeader));
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1("", ctx.titleBold, " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.titleRegular);
            i0.ɵɵadvance();
            i0.ɵɵclassMapInterpolate1("progress ", ctx.progressBgColour, "");
            i0.ɵɵadvance();
            i0.ɵɵclassMap(ctx.progressColour);
            i0.ɵɵproperty("id", ctx.progressId)("ngStyle", i0.ɵɵpureFunction1(18, _c0$q, ctx.complete + "%"));
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.leftSideText);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.rightSideText);
        } }, dependencies: [i1.NgClass, i1.NgStyle], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProgressBarComponent, [{
        type: Component,
        args: [{ selector: 'aa-progress-bar', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div \r\n    class=\"progress-bar\" \r\n    [ngStyle]=\"{'width' : maxWidth}\"\r\n    [ngClass]=\"{'display-over-header' : displayOverHeader}\"\r\n>\r\n    <span>\r\n        <strong>{{titleBold}} </strong>\r\n        <span>{{titleRegular}}</span>\r\n    </span>\r\n    <div class=\"progress {{progressBgColour}}\">\r\n        <div [id]=\"progressId\" class=\"{{progressColour}}\" [ngStyle]=\"{'width' : complete+'%'}\"></div>\r\n    </div>\r\n    <div class=\"flex-group space-between\">\r\n        <div>{{leftSideText}}</div>\r\n        <div>{{rightSideText}}</div>\r\n    </div>\r\n</div>" }]
    }], () => [], { titleBold: [{
            type: Input
        }], titleRegular: [{
            type: Input
        }], leftSideText: [{
            type: Input
        }], rightSideText: [{
            type: Input
        }], complete: [{
            type: Input
        }], maxWidth: [{
            type: Input
        }], displayOverHeader: [{
            type: Input
        }], progressBgColour: [{
            type: Input
        }], progressColour: [{
            type: Input
        }], progressId: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ProgressBarComponent, { className: "ProgressBarComponent", filePath: "lib\\patterns\\progress-bar\\progress-bar.component.ts", lineNumber: 9 }); })();

function ProgressCircleComponent_div_0_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 18);
    i0.ɵɵtext(1, "error_outline");
    i0.ɵɵelementEnd();
} }
function ProgressCircleComponent_div_0_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 19);
    i0.ɵɵtext(1, "warning_amber");
    i0.ɵɵelementEnd();
} }
function ProgressCircleComponent_div_0_span_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 20);
    i0.ɵɵtext(1, "info");
    i0.ɵɵelementEnd();
} }
const _c0$p = () => ({ "position": "absolute", "right": ".75rem" });
const _c1$i = a0 => ({ "min-width": a0 });
function ProgressCircleComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21)(1, "div", 22)(2, "p");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction0(7, _c0$p));
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("feature-box ", ctx_r6.xpos, " ", ctx_r6.ypos, "");
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(8, _c1$i, ctx_r6.tooltipMinWidth));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r6.tooltipBody);
} }
function ProgressCircleComponent_div_0_span_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 23);
    i0.ɵɵtext(1, "chevron_right");
    i0.ɵɵelementEnd();
} }
function ProgressCircleComponent_div_0_span_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 24);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r8.value, " ");
} }
function ProgressCircleComponent_div_0_div_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("alert-shield small ", ctx_r9.alertShieldStatus, "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r9.alertShieldText, " ");
} }
function ProgressCircleComponent_div_0_div_20_h4_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r11.tooltipHeading);
} }
const _c2$f = (a0, a1, a2, a3) => ({ "tooltip-top-left": a0, "tooltip-top-right": a1, "tooltip-bottom-left": a2, "tooltip-bottom-right": a3 });
function ProgressCircleComponent_div_0_div_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 25)(1, "div", 22);
    i0.ɵɵtemplate(2, ProgressCircleComponent_div_0_div_20_h4_2_Template, 2, 1, "h4", 26);
    i0.ɵɵprojection(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction4(10, _c2$f, ctx_r10.tooltipTopLeft, ctx_r10.tooltipTopRight, ctx_r10.tooltipBottomLeft, ctx_r10.tooltipBottomRight));
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("alert-shield-tooltip ", ctx_r10.alertShieldStatus, "");
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(15, _c1$i, ctx_r10.tooltipMinWidth));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r10.showTooltipHeading);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("alert-shield small ", ctx_r10.alertShieldStatus, "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r10.alertShieldText, " ");
} }
const _c3$b = a0 => ({ "panel-view": a0 });
const _c4$8 = a0 => ({ "padding-right-1": a0 });
const _c5$7 = a2 => ({ "stroke-dashoffset": 0, "opacity": ".3", "stroke": a2 });
const _c6$5 = (a0, a1) => ({ "stroke-dashoffset": a0, "stroke": a1 });
function ProgressCircleComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3)(1, "h3", 4)(2, "span", 5);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "slice");
    i0.ɵɵtemplate(5, ProgressCircleComponent_div_0_span_5_Template, 2, 0, "span", 6)(6, ProgressCircleComponent_div_0_span_6_Template, 2, 0, "span", 7)(7, ProgressCircleComponent_div_0_span_7_Template, 2, 0, "span", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, ProgressCircleComponent_div_0_div_8_Template, 4, 10, "div", 9)(9, ProgressCircleComponent_div_0_span_9_Template, 2, 0, "span", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 11);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(11, "svg", 12);
    i0.ɵɵelement(12, "circle", 13)(13, "circle", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(14, "span", 14);
    i0.ɵɵtext(15);
    i0.ɵɵelementStart(16, "span");
    i0.ɵɵtext(17, "%");
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(18, ProgressCircleComponent_div_0_span_18_Template, 2, 1, "span", 15)(19, ProgressCircleComponent_div_0_div_19_Template, 2, 4, "div", 16)(20, ProgressCircleComponent_div_0_div_20_Template, 6, 17, "div", 17);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(22, _c3$b, ctx_r0.panelView));
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("flex-center title ", ctx_r0.headerColor, "");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(24, _c4$8, ctx_r0.enableTooltip));
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("title", ctx_r0.name);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.name.length > 19 ? i0.ɵɵpipeBind3(4, 18, ctx_r0.name, 0, 19) + "..." : ctx_r0.name, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.isError);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isWarning);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isInfo);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.enableTooltip);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.panelView && !ctx_r0.hideChevron);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(26, _c5$7, ctx_r0.colour));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(28, _c6$5, "calc(250 - (250 * " + ctx_r0.percent + ") / 100)", ctx_r0.colour));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r0.percent, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.panelView && !ctx_r0.enableAlertShield && !ctx_r0.enableAlertShieldTooltip);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.enableAlertShield);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.enableAlertShieldTooltip);
} }
const _c7$2 = a2 => ({ "stroke-dashoffset": 0, "opacity": ".2", "stroke": a2 });
function ProgressCircleComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 27)(1, "div", 28)(2, "div", 11);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(3, "svg");
    i0.ɵɵelement(4, "circle", 29)(5, "circle", 29);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(6, "span", 14);
    i0.ɵɵtext(7);
    i0.ɵɵelementStart(8, "span");
    i0.ɵɵtext(9, "%");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(10, "div", 30);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(4, _c7$2, ctx_r1.colour));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(6, _c6$5, "calc(250 - (92 * " + ctx_r1.percent + ") / 100)", ctx_r1.colour));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r1.percent, " ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.name);
} }
const _c8 = a0 => ({ "height": a0 });
function ProgressCircleComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22)(1, "header");
    i0.ɵɵprojection(2, 1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 11);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(4, "svg", 12);
    i0.ɵɵelement(5, "circle", 13)(6, "circle", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(7, "span", 14);
    i0.ɵɵtext(8);
    i0.ɵɵelementStart(9, "span");
    i0.ɵɵtext(10, "%");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(11, "footer");
    i0.ɵɵprojection(12, 2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("progress-circle panel-view progress-circle-custom ", ctx_r2.customClass, "");
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(13, _c8, ctx_r2.panelHeight));
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("flex-center ", ctx_r2.customHeaderClass, "");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(15, _c5$7, ctx_r2.colour));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(17, _c6$5, "calc(250 - (250 * " + ctx_r2.percent + ") / 100)", ctx_r2.colour));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r2.percent, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵclassMapInterpolate1("flex-center ", ctx_r2.customFooterClass, "");
} }
const _c9 = [[["", "tooltip-content", ""]], [["", "custom-header", ""]], [["", "custom-footer", ""]]];
const _c10 = ["[tooltip-content]", "[custom-header]", "[custom-footer]"];
class ProgressCircleComponent {
    constructor() {
        this.name = '';
        this.percent = '';
        this.value = '';
        this.colour = '';
        this.isSmall = false;
        this.panelView = false;
        this.enableTooltip = false;
        this.xpos = '';
        this.ypos = '';
        this.hideChevron = false;
        this.isError = false;
        this.isWarning = false;
        this.isInfo = false;
        this.enableAlertShield = false;
        this.enableAlertShieldTooltip = false;
        this.alertShieldStatus = '';
        this.alertShieldSmall = false;
        this.tooltipTopLeft = false;
        this.tooltipTopRight = false;
        this.tooltipBottomLeft = false;
        this.tooltipBottomRight = false;
        this.showTooltipHeading = false;
        this.tooltipHeading = '';
        this.alertShieldText = '';
        this.customClass = '';
        this.customProgressCircle = false;
        this.customHeaderClass = '';
        this.customFooterClass = '';
    }
    static { this.ɵfac = function ProgressCircleComponent_Factory(t) { return new (t || ProgressCircleComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProgressCircleComponent, selectors: [["aa-progress-circle"]], inputs: { name: "name", percent: "percent", value: "value", colour: "colour", isSmall: "isSmall", panelView: "panelView", enableTooltip: "enableTooltip", tooltipTitle: "tooltipTitle", tooltipBody: "tooltipBody", xpos: "xpos", ypos: "ypos", tooltipMinWidth: "tooltipMinWidth", hideChevron: "hideChevron", headerColor: "headerColor", isError: "isError", isWarning: "isWarning", isInfo: "isInfo", enableAlertShield: "enableAlertShield", enableAlertShieldTooltip: "enableAlertShieldTooltip", alertShieldStatus: "alertShieldStatus", alertShieldSmall: "alertShieldSmall", tooltipTopLeft: "tooltipTopLeft", tooltipTopRight: "tooltipTopRight", tooltipBottomLeft: "tooltipBottomLeft", tooltipBottomRight: "tooltipBottomRight", showTooltipHeading: "showTooltipHeading", tooltipHeading: "tooltipHeading", alertShieldText: "alertShieldText", customClass: "customClass", customProgressCircle: "customProgressCircle", customHeaderClass: "customHeaderClass", customFooterClass: "customFooterClass", panelHeight: "panelHeight" }, ngContentSelectors: _c10, decls: 3, vars: 3, consts: [["class", "progress-circle", 3, "ngClass", 4, "ngIf"], ["class", "flex-group flex-start", 4, "ngIf"], [3, "class", "ngStyle", 4, "ngIf"], [1, "progress-circle", 3, "ngClass"], [3, "ngClass"], [1, "flex-group", "flex-align-center", 3, "title"], ["title", "Error", "class", "material-icons status padding-left-0-25 small aa-red-100", 4, "ngIf"], ["title", "Warning", "class", "material-icons status padding-left-0-25 small aa-orange-100", 4, "ngIf"], ["title", "Info", "class", "material-icons-outlined status small padding-left-0-25 aa-light-blue-100", 4, "ngIf"], ["class", "aa-tooltip icon-info margin-left-0-25", 3, "ngStyle", 4, "ngIf"], ["class", "material-icons", 4, "ngIf"], [1, "percent"], ["viewBox", "20 0 60 100"], ["cx", "40", "cy", "40", "r", "40", 3, "ngStyle"], [1, "value", "margin-0"], ["class", "align-center number", 4, "ngIf"], [3, "class", 4, "ngIf"], ["class", "alert-shield-tooltip-wrapper", 3, "ngClass", 4, "ngIf"], ["title", "Error", 1, "material-icons", "status", "padding-left-0-25", "small", "aa-red-100"], ["title", "Warning", 1, "material-icons", "status", "padding-left-0-25", "small", "aa-orange-100"], ["title", "Info", 1, "material-icons-outlined", "status", "small", "padding-left-0-25", "aa-light-blue-100"], [1, "aa-tooltip", "icon-info", "margin-left-0-25", 3, "ngStyle"], [3, "ngStyle"], [1, "material-icons"], [1, "align-center", "number"], [1, "alert-shield-tooltip-wrapper", 3, "ngClass"], [4, "ngIf"], [1, "flex-group", "flex-start"], [1, "progress-circle", "small", "margin-right-0-5"], ["cx", "15", "cy", "15", "r", "15", 3, "ngStyle"], [1, "margin-top-0-75"]], template: function ProgressCircleComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c9);
            i0.ɵɵtemplate(0, ProgressCircleComponent_div_0_Template, 21, 31, "div", 0)(1, ProgressCircleComponent_li_1_Template, 12, 9, "li", 1)(2, ProgressCircleComponent_div_2_Template, 13, 20, "div", 2);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.isSmall && !ctx.customProgressCircle);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.isSmall && !ctx.customProgressCircle);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.customProgressCircle);
        } }, dependencies: [i1.NgClass, i1.NgIf, i1.NgStyle, i1.SlicePipe], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProgressCircleComponent, [{
        type: Component,
        args: [{ selector: 'aa-progress-circle', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div *ngIf=\"!isSmall && !customProgressCircle\" class=\"progress-circle\" [ngClass]=\"{'panel-view' : panelView}\">\r\n  <h3 class=\"flex-center title {{headerColor}}\" [ngClass]=\"{'padding-right-1' : enableTooltip}\">\r\n    <span \r\n      title=\"{{name}}\"\r\n      class=\"flex-group flex-align-center\"\r\n      >\r\n      {{ (name.length>19)? (name | slice:0:19)+'...':(name) }}\r\n      <span title=\"Error\" *ngIf=\"isError\" class=\"material-icons status padding-left-0-25 small aa-red-100\">error_outline</span>\r\n      <span title=\"Warning\" *ngIf=\"isWarning\" class=\"material-icons status padding-left-0-25 small aa-orange-100\">warning_amber</span>\r\n      <span title=\"Info\" *ngIf=\"isInfo\" class=\"material-icons-outlined status small padding-left-0-25 aa-light-blue-100\">info</span>\r\n    </span>\r\n    <div *ngIf=\"enableTooltip\" class=\"aa-tooltip icon-info margin-left-0-25\" [ngStyle]=\"{'position' : 'absolute', 'right' : '.75rem'}\">\r\n      <div class=\"feature-box {{xpos}} {{ypos}}\" [ngStyle]=\"{'min-width' : tooltipMinWidth}\">\r\n        <p>{{tooltipBody}}</p>\r\n      </div>\r\n    </div>\r\n    <span *ngIf=\"panelView && !hideChevron\" class=\"material-icons\">chevron_right</span>\r\n  </h3>\r\n  <div class=\"percent\">\r\n    <svg viewBox=\"20 0 60 100\">\r\n      <circle [ngStyle]=\"{'stroke-dashoffset': 0, 'opacity': '.3', 'stroke': colour }\" cx=\"40\" cy=\"40\" r=\"40\"></circle>\r\n      <circle [ngStyle]=\"{'stroke-dashoffset': 'calc(250 - (250 * '+ percent +') / 100)', 'stroke': colour }\" cx=\"40\" cy=\"40\" r=\"40\"></circle>\r\n    </svg>\r\n    <span class=\"value margin-0\">{{percent}} <span>%</span></span>\r\n  </div>\r\n\r\n  <span \r\n    class=\"align-center number\" \r\n    *ngIf=\"panelView && !enableAlertShield && !enableAlertShieldTooltip\">\r\n    {{value}}\r\n  </span>\r\n\r\n  <div \r\n    *ngIf=\"enableAlertShield\" \r\n    class=\"alert-shield small {{alertShieldStatus}}\" \r\n    >\r\n      {{alertShieldText}}\r\n  </div>\r\n\r\n  <div \r\n    *ngIf=\"enableAlertShieldTooltip\" \r\n    class=\"alert-shield-tooltip-wrapper\"\r\n    [ngClass]=\"{\r\n        'tooltip-top-left' : tooltipTopLeft,\r\n        'tooltip-top-right' : tooltipTopRight,\r\n        'tooltip-bottom-left' : tooltipBottomLeft,\r\n        'tooltip-bottom-right' : tooltipBottomRight\r\n    }\"\r\n  >\r\n    <div \r\n        class=\"alert-shield-tooltip {{alertShieldStatus}}\"\r\n        [ngStyle]=\"{'min-width' : tooltipMinWidth}\"\r\n    >\r\n        <h4 *ngIf=\"showTooltipHeading\">{{tooltipHeading}}</h4>\r\n        <ng-content select=\"[tooltip-content]\"></ng-content>\r\n    </div>\r\n    <div \r\n        class=\"alert-shield small {{alertShieldStatus}}\" \r\n        >\r\n          {{alertShieldText}}\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<li *ngIf=\"isSmall && !customProgressCircle\" class=\"flex-group flex-start\">\r\n  <div class=\"progress-circle small margin-right-0-5\">\r\n    <div class=\"percent\">\r\n      <svg>\r\n        <circle [ngStyle]=\"{'stroke-dashoffset': 0, 'opacity': '.2', 'stroke': colour }\" cx=\"15\" cy=\"15\" r=\"15\"></circle>\r\n        <circle [ngStyle]=\"{'stroke-dashoffset': 'calc(250 - (92 * '+ percent +') / 100)', 'stroke': colour }\" cx=\"15\" cy=\"15\" r=\"15\"></circle>\r\n      </svg>\r\n      <span class=\"value margin-0\">{{percent}} <span>%</span></span>\r\n    </div>\r\n  </div>\r\n  <div class=\"margin-top-0-75\">{{name}}</div>\r\n</li>\r\n\r\n<div \r\n  *ngIf=\"customProgressCircle\" \r\n  class=\"progress-circle panel-view progress-circle-custom {{customClass}}\"\r\n  [ngStyle]=\"{'height' : panelHeight}\"\r\n>\r\n  <header class=\"flex-center {{customHeaderClass}}\">\r\n    <ng-content select=\"[custom-header]\"></ng-content>\r\n  </header>\r\n  <div class=\"percent\">\r\n    <svg viewBox=\"20 0 60 100\">\r\n      <circle [ngStyle]=\"{'stroke-dashoffset': 0, 'opacity': '.3', 'stroke': colour }\" cx=\"40\" cy=\"40\" r=\"40\"></circle>\r\n      <circle [ngStyle]=\"{'stroke-dashoffset': 'calc(250 - (250 * '+ percent +') / 100)', 'stroke': colour }\" cx=\"40\" cy=\"40\" r=\"40\"></circle>\r\n    </svg>\r\n    <span class=\"value margin-0\">{{percent}} <span>%</span></span>\r\n  </div>\r\n  <footer class=\"flex-center {{customFooterClass}}\">\r\n    <ng-content select=\"[custom-footer]\"></ng-content>\r\n  </footer>\r\n</div>" }]
    }], () => [], { name: [{
            type: Input
        }], percent: [{
            type: Input
        }], value: [{
            type: Input
        }], colour: [{
            type: Input
        }], isSmall: [{
            type: Input
        }], panelView: [{
            type: Input
        }], enableTooltip: [{
            type: Input
        }], tooltipTitle: [{
            type: Input
        }], tooltipBody: [{
            type: Input
        }], xpos: [{
            type: Input
        }], ypos: [{
            type: Input
        }], tooltipMinWidth: [{
            type: Input
        }], hideChevron: [{
            type: Input
        }], headerColor: [{
            type: Input
        }], isError: [{
            type: Input
        }], isWarning: [{
            type: Input
        }], isInfo: [{
            type: Input
        }], enableAlertShield: [{
            type: Input
        }], enableAlertShieldTooltip: [{
            type: Input
        }], alertShieldStatus: [{
            type: Input
        }], alertShieldSmall: [{
            type: Input
        }], tooltipTopLeft: [{
            type: Input
        }], tooltipTopRight: [{
            type: Input
        }], tooltipBottomLeft: [{
            type: Input
        }], tooltipBottomRight: [{
            type: Input
        }], showTooltipHeading: [{
            type: Input
        }], tooltipHeading: [{
            type: Input
        }], alertShieldText: [{
            type: Input
        }], customClass: [{
            type: Input
        }], customProgressCircle: [{
            type: Input
        }], customHeaderClass: [{
            type: Input
        }], customFooterClass: [{
            type: Input
        }], panelHeight: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ProgressCircleComponent, { className: "ProgressCircleComponent", filePath: "lib\\patterns\\progress-circle\\progress-circle.component.ts", lineNumber: 9 }); })();

function ActionsSummaryComponent_section_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 2)(1, "strong", 3);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h4");
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "slice");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("title", item_r1.value);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r1.heading);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("\n            ", item_r1.status, " \n            flex-center \n            bd-2 \n            bd-solid \n            margin-top-0-75\n            margin-right-0");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r1.value.length > 7 ? i0.ɵɵpipeBind3(5, 6, item_r1.value, 0, 7) + "..." : item_r1.value, " ");
} }
const _c0$o = (a0, a1) => ({ "flex-column": a0, "flex-nowrap": a1 });
class ActionsSummaryComponent {
    constructor() {
        this.heading = '';
        this.title = '';
        this.value = 0;
        this.status = '';
        this.verticalDisplay = false;
        this.noWrap = false;
        this.actionsSummaryItems = [];
    }
    static { this.ɵfac = function ActionsSummaryComponent_Factory(t) { return new (t || ActionsSummaryComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ActionsSummaryComponent, selectors: [["aa-actions-summary"]], inputs: { heading: "heading", title: "title", value: "value", status: "status", verticalDisplay: "verticalDisplay", noWrap: "noWrap", actionsSummaryItems: "actionsSummaryItems" }, decls: 2, vars: 5, consts: [[1, "actions-summary", "flex-group", "flex-start", 3, "ngClass"], ["class", "\n            flex-center \n            flex-group \n            flex-column\n        ", 3, "title", 4, "ngFor", "ngForOf"], [1, "flex-center", "flex-group", "flex-column", 3, "title"], [1, "nowrap", "margin-0"]], template: function ActionsSummaryComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "article", 0);
            i0.ɵɵtemplate(1, ActionsSummaryComponent_section_1_Template, 6, 10, "section", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(2, _c0$o, ctx.verticalDisplay, ctx.noWrap));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.actionsSummaryItems);
        } }, dependencies: [i1.NgClass, i1.NgForOf, i1.SlicePipe], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ActionsSummaryComponent, [{
        type: Component,
        args: [{ selector: 'aa-actions-summary', changeDetection: ChangeDetectionStrategy.OnPush, template: "<article \r\n    class=\"actions-summary flex-group flex-start\"\r\n    [ngClass]=\"{ \r\n        'flex-column' : verticalDisplay,\r\n        'flex-nowrap' : noWrap\r\n    }\"\r\n>\r\n    <section \r\n        *ngFor=\"let item of actionsSummaryItems; let i = index\" \r\n        title=\"{{item.value}}\"\r\n        class=\"\r\n            flex-center \r\n            flex-group \r\n            flex-column\r\n        \"\r\n    >\r\n        <strong class=\"nowrap margin-0\">{{item.heading}}</strong>\r\n        <h4 class=\"\r\n            {{item.status}} \r\n            flex-center \r\n            bd-2 \r\n            bd-solid \r\n            margin-top-0-75\r\n            margin-right-0\"\r\n            >\r\n            {{(item.value.length>7)? (item.value | slice:0:7)+'...':(item.value)}}\r\n        </h4>\r\n    </section>\r\n</article>" }]
    }], () => [], { heading: [{
            type: Input
        }], title: [{
            type: Input
        }], value: [{
            type: Input
        }], status: [{
            type: Input
        }], verticalDisplay: [{
            type: Input
        }], noWrap: [{
            type: Input
        }], actionsSummaryItems: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ActionsSummaryComponent, { className: "ActionsSummaryComponent", filePath: "lib\\patterns\\actions-summary\\actions-summary.component.ts", lineNumber: 9 }); })();

const _c0$n = a0 => ({ "remove-line": a0 });
function StatusIndicatorComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 3);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(7, _c0$n, ctx_r0.removeLine));
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("", item_r1.iconClass, " ", item_r1.iconStatus, "");
    i0.ɵɵpropertyInterpolate("title", item_r1.iconTitle);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r1.iconName, " ");
} }
class StatusIndicatorComponent {
    constructor() {
        this.iconClass = '';
        this.iconTitle = '';
        this.iconName = '';
        this.iconStatus = '';
        this.removeLine = false;
        this.currentStatus = [];
    }
    static { this.ɵfac = function StatusIndicatorComponent_Factory(t) { return new (t || StatusIndicatorComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StatusIndicatorComponent, selectors: [["aa-status-indicator"]], inputs: { iconClass: "iconClass", iconTitle: "iconTitle", iconName: "iconName", iconStatus: "iconStatus", removeLine: "removeLine", currentStatus: "currentStatus" }, decls: 2, vars: 1, consts: [[1, "status-indicator", "flex-group", "flex-start"], ["class", "status-container", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "status-container", 3, "ngClass"], [3, "title"]], template: function StatusIndicatorComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0);
            i0.ɵɵtemplate(1, StatusIndicatorComponent_div_1_Template, 3, 9, "div", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.currentStatus);
        } }, dependencies: [i1.NgClass, i1.NgForOf], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StatusIndicatorComponent, [{
        type: Component,
        args: [{ selector: 'aa-status-indicator', changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"status-indicator flex-group flex-start\">\r\n    <div\r\n      *ngFor=\"let item of currentStatus; let i = index\"\r\n      class=\"status-container\"\r\n      [ngClass]=\"{'remove-line' : removeLine}\"\r\n    >\r\n      <div\r\n        class=\"{{item.iconClass}} {{item.iconStatus}}\"\r\n        title=\"{{item.iconTitle}}\">\r\n        {{item.iconName}}\r\n        </div>\r\n    </div>\r\n  </section>\r\n" }]
    }], null, { iconClass: [{
            type: Input
        }], iconTitle: [{
            type: Input
        }], iconName: [{
            type: Input
        }], iconStatus: [{
            type: Input
        }], removeLine: [{
            type: Input
        }], currentStatus: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StatusIndicatorComponent, { className: "StatusIndicatorComponent", filePath: "lib\\patterns\\status-indicator\\status-indicator.component.ts", lineNumber: 9 }); })();

const _c0$m = (a0, a1, a2, a3, a4, a5, a6, a7) => ({ "bg-aa-light-blue-100": a0, "bg-aa-red-100": a1, "bg-aa-orange-100": a2, "bg-aa-green-100": a3, "bg-aa-light-blue-15": a4, "bg-aa-red-10": a5, "bg-aa-orange-10": a6, "bg-aa-green-15": a7 });
const _c1$h = a0 => ({ "aa-white-100": a0 });
class CounterComponent {
    constructor() {
        this.count = 0;
        this.countError = false;
        this.countWarning = false;
        this.countInfo = false;
        this.countSuccess = false;
        this.countErrorLight = false;
        this.countWarningLight = false;
        this.countInfoLight = false;
        this.countSuccessLight = false;
    }
    static { this.ɵfac = function CounterComponent_Factory(t) { return new (t || CounterComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CounterComponent, selectors: [["aa-counter"]], inputs: { count: "count", countError: "countError", countWarning: "countWarning", countInfo: "countInfo", countSuccess: "countSuccess", countErrorLight: "countErrorLight", countWarningLight: "countWarningLight", countInfoLight: "countInfoLight", countSuccessLight: "countSuccessLight" }, decls: 3, vars: 14, consts: [[1, "flex-group", "flex-center", "border-radius-50", "width-1-25", "height-1-25", "font-size-xsmall", 3, "ngClass"], [1, "flex-group", "flex-center", 3, "ngClass"]], template: function CounterComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 0)(1, "strong", 1);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction8(3, _c0$m, ctx.countInfo, ctx.countError, ctx.countWarning, ctx.countSuccess, ctx.countInfoLight, ctx.countErrorLight, ctx.countWarningLight, ctx.countSuccessLight));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(12, _c1$h, ctx.countInfo || ctx.countError || ctx.countWarning || ctx.countSuccess));
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.count, " ");
        } }, dependencies: [i1.NgClass], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CounterComponent, [{
        type: Component,
        args: [{ selector: 'aa-counter', changeDetection: ChangeDetectionStrategy.OnPush, template: "<span \r\n    class=\"\r\n    flex-group \r\n    flex-center \r\n    border-radius-50\r\n    width-1-25\r\n    height-1-25\r\n    font-size-xsmall\"\r\n    \r\n    [ngClass]=\"{\r\n        'bg-aa-light-blue-100' : countInfo,\r\n        'bg-aa-red-100' : countError, \r\n        'bg-aa-orange-100' : countWarning,\r\n        'bg-aa-green-100' : countSuccess,\r\n        'bg-aa-light-blue-15' : countInfoLight,\r\n        'bg-aa-red-10' : countErrorLight, \r\n        'bg-aa-orange-10' : countWarningLight,\r\n        'bg-aa-green-15' : countSuccessLight\r\n    }\"\r\n    >\r\n    <strong \r\n        class=\"flex-group flex-center\"\r\n        [ngClass]=\"{\r\n            'aa-white-100' : \r\n            countInfo || \r\n            countError || \r\n            countWarning || \r\n            countSuccess\r\n        }\"\r\n        >\r\n        {{ count }}\r\n    </strong>\r\n</span>" }]
    }], () => [], { count: [{
            type: Input
        }], countError: [{
            type: Input
        }], countWarning: [{
            type: Input
        }], countInfo: [{
            type: Input
        }], countSuccess: [{
            type: Input
        }], countErrorLight: [{
            type: Input
        }], countWarningLight: [{
            type: Input
        }], countInfoLight: [{
            type: Input
        }], countSuccessLight: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CounterComponent, { className: "CounterComponent", filePath: "lib\\patterns\\counter\\counter.component.ts", lineNumber: 9 }); })();

function TagComponent_section_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtext(1, "loyalty");
    i0.ɵɵelementEnd();
} }
function TagComponent_section_0_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtext(1, "loyalty");
    i0.ɵɵelementEnd();
} }
function TagComponent_section_0_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 11);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r4.tagText);
} }
function TagComponent_section_0_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r5.tagText);
} }
function TagComponent_section_0_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 13);
    i0.ɵɵlistener("click", function TagComponent_section_0_a_5_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r8.onRemove($event)); });
    i0.ɵɵelementEnd();
} }
function TagComponent_section_0_a_6_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 14);
    i0.ɵɵlistener("click", function TagComponent_section_0_a_6_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r10.onRemove($event)); });
    i0.ɵɵelementEnd();
} }
const _c0$l = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) => ({ "bg-aa-red-100": a0, "bg-aa-orange-100": a1, "bg-aa-green-100": a2, "bg-aa-blue-100": a3, "bg-aa-light-blue-100": a4, "bg-aa-plum-100": a5, "bg-aa-ochre-100": a6, "bg-aa-white-100": a7, "bg-aa-grey-100": a8, "bg-aa-pink-100": a9 });
function TagComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 2);
    i0.ɵɵtemplate(1, TagComponent_section_0_div_1_Template, 2, 0, "div", 3)(2, TagComponent_section_0_div_2_Template, 2, 0, "div", 4)(3, TagComponent_section_0_span_3_Template, 2, 1, "span", 5)(4, TagComponent_section_0_span_4_Template, 2, 1, "span", 6)(5, TagComponent_section_0_a_5_Template, 1, 0, "a", 7)(6, TagComponent_section_0_a_6_Template, 1, 0, "a", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunctionV(7, _c0$l, [ctx_r0.isRed, ctx_r0.isOrange, ctx_r0.isGreen, ctx_r0.isBlue, ctx_r0.isLightBlue, ctx_r0.isPlum, ctx_r0.isOchre, ctx_r0.isWhite, ctx_r0.isBlack, ctx_r0.isPink]));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.isWhite);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isWhite);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.isWhite);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isWhite);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.isWhite);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isWhite);
} }
function TagComponent_section_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 15)(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunctionV(2, _c0$l, [ctx_r1.isRed, ctx_r1.isOrange, ctx_r1.isGreen, ctx_r1.isBlue, ctx_r1.isLightBlue, ctx_r1.isPlum, ctx_r1.isOchre, ctx_r1.isWhite, ctx_r1.isBlack, ctx_r1.isPink]));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.tagText);
} }
class TagComponent {
    constructor() {
        this.isShaped = false;
        this.tagText = '';
        this.isRed = false;
        this.isOrange = false;
        this.isGreen = false;
        this.isPlum = false;
        this.isBlue = false;
        this.isLightBlue = false;
        this.isWhite = false;
        this.isOchre = false;
        this.isBlack = false;
        this.isPink = false;
        this.removeTag = new EventEmitter();
    }
    onRemove(e) {
        e.stopPropagation();
        this.removeTag.emit(e);
    }
    static { this.ɵfac = function TagComponent_Factory(t) { return new (t || TagComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TagComponent, selectors: [["aa-tag"]], inputs: { isShaped: "isShaped", tagText: "tagText", isRed: "isRed", isOrange: "isOrange", isGreen: "isGreen", isPlum: "isPlum", isBlue: "isBlue", isLightBlue: "isLightBlue", isWhite: "isWhite", isOchre: "isOchre", isBlack: "isBlack", isPink: "isPink" }, outputs: { removeTag: "removeTag" }, decls: 2, vars: 2, consts: [["class", "aa-tag", 3, "ngClass", 4, "ngIf"], ["class", "aa-tag-shaped", 3, "ngClass", 4, "ngIf"], [1, "aa-tag", 3, "ngClass"], ["class", "material-icons aa-white-100", 4, "ngIf"], ["class", "material-icons aa-blue-100", 4, "ngIf"], ["class", "aa-white-100", 4, "ngIf"], ["class", "aa-blue-100", 4, "ngIf"], ["class", "anchor-close aa-white-100", 3, "click", 4, "ngIf"], ["class", "anchor-close aa-blue-100", 3, "click", 4, "ngIf"], [1, "material-icons", "aa-white-100"], [1, "material-icons", "aa-blue-100"], [1, "aa-white-100"], [1, "aa-blue-100"], [1, "anchor-close", "aa-white-100", 3, "click"], [1, "anchor-close", "aa-blue-100", 3, "click"], [1, "aa-tag-shaped", 3, "ngClass"]], template: function TagComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, TagComponent_section_0_Template, 7, 18, "section", 0)(1, TagComponent_section_1_Template, 3, 13, "section", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.isShaped);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.isShaped);
        } }, dependencies: [i1.NgClass, i1.NgIf], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TagComponent, [{
        type: Component,
        args: [{ selector: 'aa-tag', changeDetection: ChangeDetectionStrategy.OnPush, template: "<section \r\n    *ngIf=\"!isShaped\" \r\n    class=\"aa-tag\"\r\n    [ngClass]=\"{\r\n        'bg-aa-red-100' : isRed,\r\n        'bg-aa-orange-100' : isOrange,\r\n        'bg-aa-green-100' : isGreen,\r\n        'bg-aa-blue-100' : isBlue,\r\n        'bg-aa-light-blue-100' : isLightBlue,\r\n        'bg-aa-plum-100' : isPlum,\r\n        'bg-aa-ochre-100' : isOchre,\r\n        'bg-aa-white-100' : isWhite,\r\n        'bg-aa-grey-100' : isBlack,\r\n        'bg-aa-pink-100' : isPink\r\n    }\"\r\n>\r\n    <div *ngIf=\"!isWhite\" class=\"material-icons aa-white-100\">loyalty</div>\r\n    <div *ngIf=\"isWhite\" class=\"material-icons aa-blue-100\">loyalty</div>\r\n    <span *ngIf=\"!isWhite\" class=\"aa-white-100\">{{tagText}}</span>\r\n    <span *ngIf=\"isWhite\" class=\"aa-blue-100\">{{tagText}}</span>\r\n    <a *ngIf=\"!isWhite\" class=\"anchor-close aa-white-100\" (click)=\"onRemove($event)\"></a>\r\n    <a *ngIf=\"isWhite\" class=\"anchor-close aa-blue-100\" (click)=\"onRemove($event)\"></a>\r\n</section>\r\n\r\n<section \r\n    *ngIf=\"isShaped\"\r\n    class=\"aa-tag-shaped\"\r\n    [ngClass]=\"{\r\n        'bg-aa-red-100' : isRed,\r\n        'bg-aa-orange-100' : isOrange,\r\n        'bg-aa-green-100' : isGreen,\r\n        'bg-aa-blue-100' : isBlue,\r\n        'bg-aa-light-blue-100' : isLightBlue,\r\n        'bg-aa-plum-100' : isPlum,\r\n        'bg-aa-ochre-100' : isOchre,\r\n        'bg-aa-white-100' : isWhite,\r\n        'bg-aa-grey-100' : isBlack,\r\n        'bg-aa-pink-100' : isPink\r\n    }\"\r\n>\r\n    <span>{{tagText}}</span>\r\n</section>" }]
    }], () => [], { isShaped: [{
            type: Input
        }], tagText: [{
            type: Input
        }], isRed: [{
            type: Input
        }], isOrange: [{
            type: Input
        }], isGreen: [{
            type: Input
        }], isPlum: [{
            type: Input
        }], isBlue: [{
            type: Input
        }], isLightBlue: [{
            type: Input
        }], isWhite: [{
            type: Input
        }], isOchre: [{
            type: Input
        }], isBlack: [{
            type: Input
        }], isPink: [{
            type: Input
        }], removeTag: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TagComponent, { className: "TagComponent", filePath: "lib\\patterns\\tag\\tag.component.ts", lineNumber: 9 }); })();

const _c0$k = a0 => ({ "padding-right-0-75": a0 });
const _c1$g = (a0, a1) => ({ "height": a0, "overflow": a1 });
function FeatureBoxComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div", 2);
    i0.ɵɵprojection(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 3);
    i0.ɵɵprojection(4, 1);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c0$k, ctx_r0.enableScrolling));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(4, _c1$g, ctx_r0.fbHeight, ctx_r0.enableScrolling ? "auto" : ""));
} }
function FeatureBoxComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵprojection(1, 2);
    i0.ɵɵelementEnd();
} }
const _c2$e = [[["", "custom-header", ""]], [["", "custom-content", ""]], "*"];
const _c3$a = (a0, a1, a2) => ({ "width": a0, "margin-top": a1, "margin-bottom": a2 });
const _c4$7 = (a0, a1) => ({ "solid": a0, "padding-right-0": a1 });
const _c5$6 = ["[custom-header]", "[custom-content]", "*"];
class FeatureBoxComponent {
    constructor() {
        this.marginTop = '';
        this.marginBottom = '';
        this.fbWidth = '';
        this.fbHeight = '';
        this.isSolid = false;
        this.fbStatus = '';
        this.includeHeader = false;
        this.enableScrolling = false;
    }
    static { this.ɵfac = function FeatureBoxComponent_Factory(t) { return new (t || FeatureBoxComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FeatureBoxComponent, selectors: [["aa-feature-box"]], inputs: { marginTop: "marginTop", marginBottom: "marginBottom", fbWidth: "fbWidth", fbHeight: "fbHeight", isSolid: "isSolid", fbStatus: "fbStatus", includeHeader: "includeHeader", enableScrolling: "enableScrolling" }, ngContentSelectors: _c5$6, decls: 3, vars: 14, consts: [[3, "ngStyle", "ngClass"], [4, "ngIf"], [3, "ngClass"], [1, "fb-contnet", 3, "ngStyle"]], template: function FeatureBoxComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c2$e);
            i0.ɵɵelementStart(0, "section", 0);
            i0.ɵɵtemplate(1, FeatureBoxComponent_div_1_Template, 5, 7, "div", 1)(2, FeatureBoxComponent_div_2_Template, 2, 0, "div", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassMapInterpolate1("feature-box ", ctx.fbStatus, "");
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction3(7, _c3$a, ctx.fbWidth, ctx.marginTop, ctx.marginBottom))("ngClass", i0.ɵɵpureFunction2(11, _c4$7, ctx.isSolid, ctx.enableScrolling));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.includeHeader);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.includeHeader);
        } }, dependencies: [i1.NgClass, i1.NgIf, i1.NgStyle], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FeatureBoxComponent, [{
        type: Component,
        args: [{ selector: 'aa-feature-box', changeDetection: ChangeDetectionStrategy.OnPush, template: "<section \r\n  class=\"feature-box {{fbStatus}}\"\r\n  [ngStyle]=\"{\r\n      'width' : fbWidth,\r\n      'margin-top' : marginTop,\r\n      'margin-bottom' : marginBottom\r\n  }\"\r\n  [ngClass]=\"{\r\n      'solid' : isSolid,\r\n      'padding-right-0' : enableScrolling\r\n  }\"\r\n>\r\n  <div *ngIf=\"includeHeader\">\r\n    <div [ngClass]=\"{'padding-right-0-75' : enableScrolling}\">\r\n      <ng-content select=\"[custom-header]\"></ng-content>\r\n    </div>\r\n    <div \r\n      [ngStyle]=\"{\r\n        'height' : fbHeight,\r\n        'overflow': enableScrolling ? 'auto' : ''\r\n      }\" \r\n      class=\"fb-contnet\"\r\n    >\r\n      <ng-content select=\"[custom-content]\"></ng-content>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"!includeHeader\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</section>\r\n" }]
    }], () => [], { marginTop: [{
            type: Input
        }], marginBottom: [{
            type: Input
        }], fbWidth: [{
            type: Input
        }], fbHeight: [{
            type: Input
        }], isSolid: [{
            type: Input
        }], fbStatus: [{
            type: Input
        }], includeHeader: [{
            type: Input
        }], enableScrolling: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FeatureBoxComponent, { className: "FeatureBoxComponent", filePath: "lib\\patterns\\feature-box\\feature-box.component.ts", lineNumber: 9 }); })();

class PatternsModule {
    static { this.ɵfac = function PatternsModule_Factory(t) { return new (t || PatternsModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PatternsModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PatternsModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    AlertComponent,
                    AlertShieldComponent,
                    AnchorBackComponent,
                    ProgressBarComponent,
                    ProgressCircleComponent,
                    ActionsSummaryComponent,
                    StatusIndicatorComponent,
                    CounterComponent,
                    TagComponent,
                    FeatureBoxComponent
                ],
                imports: [
                    CommonModule
                ],
                exports: [
                    AlertComponent,
                    AlertShieldComponent,
                    AnchorBackComponent,
                    ProgressBarComponent,
                    ProgressCircleComponent,
                    ActionsSummaryComponent,
                    StatusIndicatorComponent,
                    CounterComponent,
                    TagComponent,
                    FeatureBoxComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PatternsModule, { declarations: [AlertComponent,
        AlertShieldComponent,
        AnchorBackComponent,
        ProgressBarComponent,
        ProgressCircleComponent,
        ActionsSummaryComponent,
        StatusIndicatorComponent,
        CounterComponent,
        TagComponent,
        FeatureBoxComponent], imports: [CommonModule], exports: [AlertComponent,
        AlertShieldComponent,
        AnchorBackComponent,
        ProgressBarComponent,
        ProgressCircleComponent,
        ActionsSummaryComponent,
        StatusIndicatorComponent,
        CounterComponent,
        TagComponent,
        FeatureBoxComponent] }); })();

class IconFilterPipe {
    transform(items, searchIcon) {
        if (!items) {
            return [];
        }
        if (!searchIcon) {
            return items;
        }
        return items.filter(it => {
            return it.toLocaleLowerCase().includes(searchIcon);
        });
    }
    static { this.ɵfac = function IconFilterPipe_Factory(t) { return new (t || IconFilterPipe)(); }; }
    static { this.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "iconFilter", type: IconFilterPipe, pure: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IconFilterPipe, [{
        type: Pipe,
        args: [{ name: 'iconFilter' }]
    }], null, null); })();

function AccordionComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵtext(1, "drag_indicator");
    i0.ɵɵelementEnd();
} }
function AccordionComponent_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("accordion-icon material-icons ", ctx_r5.iconBgColor, "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r5.iconName);
} }
function AccordionComponent_div_3_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div");
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("accordion-icon ", ctx_r6.fontClassName, "");
} }
function AccordionComponent_div_3_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵtext(1, "add_circle_outline");
    i0.ɵɵelementEnd();
} }
function AccordionComponent_div_3_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵtext(1, "remove_circle_outline");
    i0.ɵɵelementEnd();
} }
function AccordionComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtemplate(1, AccordionComponent_div_3_div_1_Template, 2, 0, "div", 8)(2, AccordionComponent_div_3_div_2_Template, 2, 4, "div", 9)(3, AccordionComponent_div_3_div_3_Template, 1, 3, "div", 9);
    i0.ɵɵelementStart(4, "div", 10);
    i0.ɵɵtemplate(5, AccordionComponent_div_3_div_5_Template, 2, 0, "div", 11)(6, AccordionComponent_div_3_div_6_Template, 2, 0, "div", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 12);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.dragable);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.iconsEnabled && !ctx_r0.fontAwesome);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.iconsEnabled && ctx_r0.fontAwesome);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r0.showBody);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.showBody);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.accordionHeading);
} }
function AccordionComponent_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵtext(1, "add");
    i0.ɵɵelementEnd();
} }
function AccordionComponent_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵtext(1, "remove");
    i0.ɵɵelementEnd();
} }
function AccordionComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵprojection(1);
    i0.ɵɵelementStart(2, "div", 16);
    i0.ɵɵtemplate(3, AccordionComponent_div_4_div_3_Template, 2, 0, "div", 11)(4, AccordionComponent_div_4_div_4_Template, 2, 0, "div", 11);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !ctx_r1.showBody);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showBody);
} }
function AccordionComponent_div_5_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵtext(1, "add");
    i0.ɵɵelementEnd();
} }
function AccordionComponent_div_5_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵtext(1, "remove");
    i0.ɵɵelementEnd();
} }
function AccordionComponent_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, AccordionComponent_div_5_div_2_div_1_Template, 2, 0, "div", 11)(2, AccordionComponent_div_5_div_2_div_2_Template, 2, 0, "div", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("toggle-icons flex-align-center ", ctx_r11.toggleIconColor, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r11.showBody);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r11.showBody);
} }
const _c0$j = a0 => ({ "width": a0 });
function AccordionComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵprojection(1, 1);
    i0.ɵɵtemplate(2, AccordionComponent_div_5_div_2_Template, 3, 5, "div", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c0$j, ctx_r2.hideToggleIcon ? "100%" : "calc(100% - 2rem)"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r2.hideToggleIcon);
} }
const _c1$f = a0 => ({ "padding": a0 });
function AccordionComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵprojection(1, 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("id", ctx_r3.sectionId)("ngStyle", i0.ɵɵpureFunction1(2, _c1$f, ctx_r3.clearPadding ? "0" : "1rem 1.25rem"));
} }
const _c2$d = [[["", "header-custom", ""]], [["", "bespoke-header", ""]], "*"];
const _c3$9 = (a0, a1) => ({ "min-width": a0, "min-height": a1 });
const _c4$6 = (a0, a1) => ({ "box-shadow": a0, "vertical flex-group flex-start": a1 });
const _c5$5 = (a0, a1, a2, a3, a4) => ({ "expanded": a0, "clean": a1, "disabled": a2, "flex-column": a3, "flex-align-center": a4 });
const _c6$4 = ["[header-custom]", "[bespoke-header]", "*"];
class AccordionComponent {
    onOpen(e) {
        e.stopPropagation();
        if (this.disabled !== true) {
            this.open.emit();
            this.showBody = !this.showBody;
            e.stopPropagation();
        }
    }
    constructor() {
        this.showBody = false;
        this.disabled = false;
        this.iconsEnabled = false;
        this.dragable = false;
        this.sectionId = '';
        this.accordionHeading = '';
        this.accordionId = '';
        this.iconName = '';
        this.accordionClean = false;
        this.fontAwesome = false;
        this.fontClassName = '';
        this.iconBgColor = '';
        this.customBgColor = '';
        this.clearPadding = false;
        this.verticalDisplay = false;
        this.bespokeHeader = false;
        this.hideToggleIcon = false;
        this.toggleIconColor = '';
        // eslint-disable-next-line @angular-eslint/no-output-native
        this.open = new EventEmitter();
    }
    static { this.ɵfac = function AccordionComponent_Factory(t) { return new (t || AccordionComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AccordionComponent, selectors: [["aa-accordion"]], inputs: { showBody: "showBody", disabled: "disabled", iconsEnabled: "iconsEnabled", minWidth: "minWidth", dragable: "dragable", sectionId: "sectionId", accordionHeading: "accordionHeading", accordionId: "accordionId", iconName: "iconName", accordionClean: "accordionClean", fontAwesome: "fontAwesome", fontClassName: "fontClassName", iconBgColor: "iconBgColor", customBgColor: "customBgColor", clearPadding: "clearPadding", verticalDisplay: "verticalDisplay", verticalMinHeight: "verticalMinHeight", bespokeHeader: "bespokeHeader", hideToggleIcon: "hideToggleIcon", toggleIconColor: "toggleIconColor" }, outputs: { open: "open" }, ngContentSelectors: _c6$4, decls: 7, vars: 24, consts: [[1, "accordion-container", 3, "ngStyle", "ngClass"], [1, "margin-0"], ["aria-controls", "sectionId", "type", "button", 3, "ngClass", "id", "click"], ["class", "flex-align-center flex-group flex-start", 4, "ngIf"], ["class", "flex-group flex-end flex-align-center", 4, "ngIf"], ["class", "bespoke-header", 3, "ngStyle", 4, "ngIf"], ["class", "accordion-panel", 3, "id", "ngStyle", 4, "ngIf"], [1, "flex-align-center", "flex-group", "flex-start"], ["class", "accordion-icon material-icons drag-icon", 4, "ngIf"], [3, "class", 4, "ngIf"], [1, "nested-icons"], ["class", "material-icons", 4, "ngIf"], [1, "accordion-heading"], [1, "accordion-icon", "material-icons", "drag-icon"], [1, "material-icons"], [1, "flex-group", "flex-end", "flex-align-center"], [1, "toggle-icons", "flex-align-center"], [1, "bespoke-header", 3, "ngStyle"], [1, "accordion-panel", 3, "id", "ngStyle"]], template: function AccordionComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c2$d);
            i0.ɵɵelementStart(0, "article", 0)(1, "h3", 1)(2, "button", 2);
            i0.ɵɵlistener("click", function AccordionComponent_Template_button_click_2_listener($event) { return ctx.onOpen($event); });
            i0.ɵɵtemplate(3, AccordionComponent_div_3_Template, 9, 6, "div", 3)(4, AccordionComponent_div_4_Template, 5, 2, "div", 4)(5, AccordionComponent_div_5_Template, 3, 4, "div", 5);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(6, AccordionComponent_div_6_Template, 2, 4, "div", 6);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(12, _c3$9, ctx.minWidth, ctx.verticalDisplay ? ctx.verticalMinHeight : "auto"))("ngClass", i0.ɵɵpureFunction2(15, _c4$6, ctx.showBody, ctx.verticalDisplay));
            i0.ɵɵadvance(2);
            i0.ɵɵclassMapInterpolate1("accordion-trigger flex-group space-between flex-nowrap ", ctx.customBgColor, "");
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction5(18, _c5$5, ctx.showBody, ctx.accordionClean, ctx.disabled, ctx.verticalDisplay, !ctx.verticalDisplay))("id", ctx.accordionId);
            i0.ɵɵattribute("aria-expanded.true", ctx.showBody);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.bespokeHeader);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.bespokeHeader);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.bespokeHeader);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showBody);
        } }, dependencies: [i1.NgClass, i1.NgIf, i1.NgStyle], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccordionComponent, [{
        type: Component,
        args: [{ selector: 'aa-accordion', changeDetection: ChangeDetectionStrategy.OnPush, template: "<article \r\n  class=\"accordion-container\"\r\n  [ngStyle]=\"{'min-width' : minWidth, 'min-height': verticalDisplay ? verticalMinHeight : 'auto' }\"\r\n  [ngClass]=\"{'box-shadow' : showBody, 'vertical flex-group flex-start' : verticalDisplay }\"\r\n>\r\n  <h3 class=\"margin-0\">\r\n    <button \r\n      class=\"accordion-trigger flex-group space-between flex-nowrap {{customBgColor}}\" \r\n      [ngClass]=\"{\r\n        'expanded' : showBody, \r\n        'clean' : accordionClean, \r\n        'disabled' : disabled, \r\n        'flex-column' : verticalDisplay,\r\n        'flex-align-center' : !verticalDisplay\r\n      }\"\r\n      (click)=\"onOpen($event)\" \r\n      [attr.aria-expanded.true]=\"showBody\"\r\n      aria-controls=\"sectionId\" \r\n      [id]=\"accordionId\" \r\n      type=\"button\">\r\n        <div *ngIf=\"!bespokeHeader\" class=\"flex-align-center flex-group flex-start\">\r\n            <div *ngIf=\"dragable\" class=\"accordion-icon material-icons drag-icon\">drag_indicator</div>\r\n            <div *ngIf=\"iconsEnabled && !fontAwesome\" class=\"accordion-icon material-icons {{iconBgColor}}\">{{iconName}}</div>\r\n            <div *ngIf=\"iconsEnabled && fontAwesome\" class=\"accordion-icon {{fontClassName}}\"></div>\r\n            <div class=\"nested-icons\">\r\n              <div class=\"material-icons\" *ngIf=\"!showBody\">add_circle_outline</div>\r\n              <div class=\"material-icons\" *ngIf=\"showBody\">remove_circle_outline</div>\r\n            </div>\r\n            <div class=\"accordion-heading\">{{accordionHeading}}</div>\r\n          </div>\r\n        <div *ngIf=\"!bespokeHeader\" class=\"flex-group flex-end flex-align-center\">\r\n          <ng-content select=\"[header-custom]\"></ng-content>\r\n            <div class=\"toggle-icons flex-align-center\">\r\n              <div *ngIf=\"!showBody\" class=\"material-icons\">add</div>\r\n              <div *ngIf=\"showBody\" class=\"material-icons\">remove</div>\r\n            </div>\r\n        </div>\r\n        <div \r\n          *ngIf=\"bespokeHeader\" \r\n          class=\"bespoke-header\"\r\n          [ngStyle]=\"{ 'width': hideToggleIcon ? '100%' : 'calc(100% - 2rem)' }\"\r\n        >\r\n          <ng-content select=\"[bespoke-header]\"></ng-content>\r\n          <div *ngIf=\"!hideToggleIcon\" class=\"toggle-icons flex-align-center {{toggleIconColor}}\">\r\n            <div *ngIf=\"!showBody\" class=\"material-icons\">add</div>\r\n            <div *ngIf=\"showBody\" class=\"material-icons\">remove</div>\r\n          </div>\r\n        </div>\r\n    </button>\r\n  </h3>\r\n  <div \r\n    *ngIf=\"showBody\" \r\n    [id]=\"sectionId\" \r\n    class=\"accordion-panel\"\r\n    [ngStyle]=\"{ 'padding': clearPadding ? '0' : '1rem 1.25rem' }\"\r\n    >\r\n      <ng-content></ng-content>\r\n  </div>\r\n</article>\r\n" }]
    }], () => [], { showBody: [{
            type: Input
        }], disabled: [{
            type: Input
        }], iconsEnabled: [{
            type: Input
        }], minWidth: [{
            type: Input
        }], dragable: [{
            type: Input
        }], sectionId: [{
            type: Input
        }], accordionHeading: [{
            type: Input
        }], accordionId: [{
            type: Input
        }], iconName: [{
            type: Input
        }], accordionClean: [{
            type: Input
        }], fontAwesome: [{
            type: Input
        }], fontClassName: [{
            type: Input
        }], iconBgColor: [{
            type: Input
        }], customBgColor: [{
            type: Input
        }], clearPadding: [{
            type: Input
        }], verticalDisplay: [{
            type: Input
        }], verticalMinHeight: [{
            type: Input
        }], bespokeHeader: [{
            type: Input
        }], hideToggleIcon: [{
            type: Input
        }], toggleIconColor: [{
            type: Input
        }], open: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AccordionComponent, { className: "AccordionComponent", filePath: "lib\\widgets\\accordion\\accordion.component.ts", lineNumber: 9 }); })();

function AccordionFancyComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("material-icons ", ctx_r0.iconColour, "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.iconName);
} }
function AccordionFancyComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div");
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate2("font-awesome-icons ", ctx_r1.iconName, " ", ctx_r1.iconColour, "");
} }
function AccordionFancyComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtext(1, "add");
    i0.ɵɵelementEnd();
} }
function AccordionFancyComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtext(1, "remove");
    i0.ɵɵelementEnd();
} }
function AccordionFancyComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵprojection(1);
    i0.ɵɵelementEnd();
} }
const _c0$i = ["*"];
class AccordionFancyComponent {
    constructor() {
        this.showBody = false;
        this.materialIcons = false;
        this.itemTitle = '';
        this.accordionId = '';
        this.iconName = '';
        this.iconColour = '';
    }
    static { this.ɵfac = function AccordionFancyComponent_Factory(t) { return new (t || AccordionFancyComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AccordionFancyComponent, selectors: [["aa-accordion-fancy"]], inputs: { showBody: "showBody", materialIcons: "materialIcons", itemTitle: "itemTitle", accordionId: "accordionId", iconName: "iconName", iconColour: "iconColour" }, ngContentSelectors: _c0$i, decls: 12, vars: 8, consts: [[3, "id"], [1, "margin-0"], ["aria-controls", "accordionId", "type", "button", 1, "accordion-fancy-trigger", "box", "flex-group", "flex-align-center", "space-between", 3, "click"], [1, "flex-align-center"], [3, "class", 4, "ngIf"], [1, "aa-toggle", "flex-align-center"], ["class", "material-icons", 4, "ngIf"], ["class", "accordion-fancy-panel", 4, "ngIf"], [1, "material-icons"], [1, "accordion-fancy-panel"]], template: function AccordionFancyComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "section", 0)(1, "h3", 1)(2, "button", 2);
            i0.ɵɵlistener("click", function AccordionFancyComponent_Template_button_click_2_listener() { return ctx.showBody = !ctx.showBody; });
            i0.ɵɵelementStart(3, "div", 3);
            i0.ɵɵtemplate(4, AccordionFancyComponent_div_4_Template, 2, 4, "div", 4)(5, AccordionFancyComponent_div_5_Template, 1, 4, "div", 4);
            i0.ɵɵelementStart(6, "span");
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(8, "div", 5);
            i0.ɵɵtemplate(9, AccordionFancyComponent_div_9_Template, 2, 0, "div", 6)(10, AccordionFancyComponent_div_10_Template, 2, 0, "div", 6);
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(11, AccordionFancyComponent_div_11_Template, 2, 0, "div", 7);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("id", ctx.accordionId);
            i0.ɵɵadvance(2);
            i0.ɵɵattribute("aria-expanded.true", ctx.showBody);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.materialIcons);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.materialIcons);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.itemTitle);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx.showBody);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showBody);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showBody);
        } }, dependencies: [i1.NgIf], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccordionFancyComponent, [{
        type: Component,
        args: [{ selector: 'aa-accordion-fancy', changeDetection: ChangeDetectionStrategy.OnPush, template: "<section [id]=\"accordionId\">\r\n  <h3 class=\"margin-0\">\r\n    <button class=\"accordion-fancy-trigger box flex-group flex-align-center space-between\" (click)=\"showBody=!showBody\"\r\n        [attr.aria-expanded.true]=\"showBody\" aria-controls=\"accordionId\" type=\"button\">\r\n        <div class=\"flex-align-center\">\r\n          <div *ngIf=\"materialIcons\" class=\"material-icons {{iconColour}}\">{{iconName}}</div>\r\n          <div *ngIf=\"!materialIcons\" class=\"font-awesome-icons {{iconName}} {{iconColour}}\"></div>\r\n          <span>{{itemTitle}}</span>\r\n        </div>\r\n        <div class=\"aa-toggle flex-align-center\">\r\n          <div *ngIf=\"!showBody\" class=\"material-icons\">add</div>\r\n          <div *ngIf=\"showBody\" class=\"material-icons\">remove</div>\r\n        </div>\r\n    </button>\r\n  </h3>\r\n  <div *ngIf=\"showBody\" class=\"accordion-fancy-panel\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</section>\r\n" }]
    }], () => [], { showBody: [{
            type: Input
        }], materialIcons: [{
            type: Input
        }], itemTitle: [{
            type: Input
        }], accordionId: [{
            type: Input
        }], iconName: [{
            type: Input
        }], iconColour: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AccordionFancyComponent, { className: "AccordionFancyComponent", filePath: "lib\\widgets\\accordion-fancy\\accordion-fancy.component.ts", lineNumber: 9 }); })();

const _c0$h = (a0, a1, a2, a3) => ({ "z-index": a0, "top": a1, "left": a2, "right": a3 });
function CardComponent_article_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 4)(1, "div", 5);
    i0.ɵɵelement(2, "img", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div")(4, "h3", 7);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 7);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 8);
    i0.ɵɵprojection(9);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction4(7, _c0$h, ctx_r0.zIndex, ctx_r0.topPos, ctx_r0.leftPos, ctx_r0.rightPos));
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("alt", ctx_r0.cardName);
    i0.ɵɵproperty("src", ctx_r0.imgPath, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("title", ctx_r0.cardName);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.cardName);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("title", ctx_r0.cardRole);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.cardRole);
} }
const _c1$e = a0 => ({ "z-index": a0 });
const _c2$c = (a0, a1) => ({ "border": a0, "background-color": a1 });
const _c3$8 = a0 => ({ "color": a0 });
function CardComponent_article_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 9)(1, "div", 10);
    i0.ɵɵprojection(2, 1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 11);
    i0.ɵɵlistener("click", function CardComponent_article_1_Template_div_click_3_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.onCardClick($event)); });
    i0.ɵɵelementStart(4, "div", 12);
    i0.ɵɵelement(5, "img", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "h3", 13);
    i0.ɵɵtext(7);
    i0.ɵɵpipe(8, "slice");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p", 7);
    i0.ɵɵtext(10);
    i0.ɵɵpipe(11, "slice");
    i0.ɵɵelementEnd()();
    i0.ɵɵprojection(12, 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(17, _c1$e, ctx_r1.zIndex));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(19, _c2$c, ".35rem solid " + ctx_r1.themeColour, ctx_r1.themeColour));
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("alt", ctx_r1.cardName);
    i0.ɵɵproperty("src", ctx_r1.imgPath, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("title", ctx_r1.cardName);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(22, _c3$8, ctx_r1.themeColour));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.cardName.length > 14 ? i0.ɵɵpipeBind3(8, 9, ctx_r1.cardName, 0, 14) + "..." : ctx_r1.cardName);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("title", ctx_r1.cardRole);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.cardRole.length > 37 ? i0.ɵɵpipeBind3(11, 13, ctx_r1.cardRole, 0, 37) + "..." : ctx_r1.cardRole);
} }
function CardComponent_button_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r6.iconName);
} }
function CardComponent_button_2_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵprojection(1, 4);
    i0.ɵɵelementEnd();
} }
function CardComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 14);
    i0.ɵɵlistener("click", function CardComponent_button_2_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.onCardClick($event)); });
    i0.ɵɵtemplate(1, CardComponent_button_2_div_1_Template, 2, 1, "div", 15)(2, CardComponent_button_2_div_2_Template, 2, 0, "div", 16);
    i0.ɵɵelementStart(3, "div")(4, "h5");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵprojection(6, 3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("card-mini flex-align-center flex-start ", ctx_r2.borderClass, " box-shadow");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.showAsIcon);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.showAsProfile);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r2.title);
} }
const _c4$5 = (a0, a1, a2, a3) => ({ "z-index": a0, "top": a1, "left": a2, "width": a3 });
function CardComponent_article_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 19)(1, "div", 5);
    i0.ɵɵelement(2, "img", 20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div");
    i0.ɵɵprojection(4, 5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction4(3, _c4$5, ctx_r3.zIndex, ctx_r3.topPos, ctx_r3.leftPos, ctx_r3.cardWidth));
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("alt", ctx_r3.cardName);
    i0.ɵɵproperty("src", ctx_r3.imgPath, i0.ɵɵsanitizeUrl);
} }
const _c5$4 = [[["", "card-menu", ""]], [["", "card-menu-opt", ""]], [["", "card-hover-content", ""]], [["", "content", ""]], [["", "profile-image", ""]], [["", "card-detailed-content", ""]]];
const _c6$3 = ["[card-menu]", "[card-menu-opt]", "[card-hover-content]", "[content]", "[profile-image]", "[card-detailed-content]"];
class CardComponent {
    onCardClick(e) {
        this.cardClick.emit(e);
        e.stopPropagation();
    }
    constructor() {
        this.cardName = '';
        this.cardRole = '';
        this.cardOptional = false;
        this.cardMini = false;
        this.cardDetailed = false;
        this.themeColour = '';
        this.zIndex = 0;
        this.showAsIcon = false;
        this.showAsProfile = false;
        this.iconName = '';
        this.borderClass = '';
        this.cardClick = new EventEmitter();
    }
    static { this.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CardComponent, selectors: [["aa-card"]], inputs: { cardName: "cardName", cardRole: "cardRole", cardOptional: "cardOptional", cardMini: "cardMini", cardDetailed: "cardDetailed", cardWidth: "cardWidth", themeColour: "themeColour", zIndex: "zIndex", imgPath: "imgPath", title: "title", showAsIcon: "showAsIcon", showAsProfile: "showAsProfile", iconName: "iconName", borderClass: "borderClass", topPos: "topPos", rightPos: "rightPos", leftPos: "leftPos" }, outputs: { cardClick: "cardClick" }, ngContentSelectors: _c6$3, decls: 4, vars: 4, consts: [["class", "aa-card flex-group width-control box-shadow", 3, "ngStyle", 4, "ngIf"], ["class", "aa-card-opt box-shadow", 3, "ngStyle", 4, "ngIf"], [3, "class", "click", 4, "ngIf"], ["class", "aa-card card-detailed flex-group flex-nowrap box-shadow", 3, "ngStyle", 4, "ngIf"], [1, "aa-card", "flex-group", "width-control", "box-shadow", 3, "ngStyle"], [1, "card-image", "fingerprint", "border-light"], ["onerror", "this.style.display='none'", 3, "alt", "src"], [3, "title"], [1, "aa-toolbar"], [1, "aa-card-opt", "box-shadow", 3, "ngStyle"], [1, "flex-group", "flex-end", "flex-align-center"], [1, "cursor-pointer", 3, "click"], [1, "card-image", "fingerprint", 3, "ngStyle"], [3, "title", "ngStyle"], [3, "click"], ["class", "material-icons", 4, "ngIf"], ["class", "card-image fingerprint", 4, "ngIf"], [1, "material-icons"], [1, "card-image", "fingerprint"], [1, "aa-card", "card-detailed", "flex-group", "flex-nowrap", "box-shadow", 3, "ngStyle"], [3, "alt", "src"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c5$4);
            i0.ɵɵtemplate(0, CardComponent_article_0_Template, 10, 12, "article", 0)(1, CardComponent_article_1_Template, 13, 24, "article", 1)(2, CardComponent_button_2_Template, 7, 6, "button", 2)(3, CardComponent_article_3_Template, 5, 8, "article", 3);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.cardOptional && !ctx.cardMini && !ctx.cardDetailed);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.cardOptional);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.cardMini);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.cardDetailed);
        } }, dependencies: [i1.NgIf, i1.NgStyle, i1.SlicePipe], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CardComponent, [{
        type: Component,
        args: [{ selector: 'aa-card', changeDetection: ChangeDetectionStrategy.OnPush, template: "<article \r\n  *ngIf=\"!cardOptional && !cardMini && !cardDetailed\" \r\n  class=\"aa-card flex-group width-control box-shadow\" \r\n  [ngStyle]=\"{\r\n    'z-index' : zIndex,\r\n    'top' : topPos,\r\n    'left' : leftPos,\r\n    'right' : rightPos\r\n  }\"\r\n>\r\n  <div class=\"card-image fingerprint border-light\">\r\n    <img onerror=\"this.style.display='none'\" alt=\"{{cardName}}\" [src]=\"imgPath\">\r\n  </div>\r\n  <div>\r\n    <h3 title=\"{{cardName}}\">{{cardName}}</h3>\r\n    <p title=\"{{cardRole}}\">{{cardRole}}</p>\r\n    <div class=\"aa-toolbar\">\r\n      <ng-content select=\"[card-menu]\"></ng-content>\r\n    </div>\r\n  </div>\r\n</article>\r\n\r\n<article \r\n  *ngIf=\"cardOptional\" \r\n  class=\"aa-card-opt box-shadow\" \r\n  [ngStyle]=\"{'z-index' : zIndex}\"\r\n>\r\n    <div class=\"flex-group flex-end flex-align-center\">\r\n      <ng-content select=\"[card-menu-opt]\"></ng-content>\r\n    </div>\r\n    <div class=\"cursor-pointer\" (click)=\"onCardClick($event)\">\r\n      <div class=\"card-image fingerprint\" [ngStyle]=\"{'border' : '.35rem solid ' +themeColour, 'background-color' : themeColour}\">\r\n        <img onerror=\"this.style.display='none'\" alt=\"{{cardName}}\" [src]=\"imgPath\">\r\n      </div>\r\n      <h3 title=\"{{cardName}}\" [ngStyle]=\"{'color' : themeColour }\">{{ (cardName.length>14)? (cardName | slice:0:14)+'...':(cardName) }}</h3>\r\n      <p title=\"{{cardRole}}\">{{ (cardRole.length>37)? (cardRole | slice:0:37)+'...':(cardRole) }}</p>\r\n    </div>\r\n    <ng-content select=\"[card-hover-content]\"></ng-content>\r\n</article>\r\n\r\n<button \r\n  *ngIf=\"cardMini\" \r\n  class=\"card-mini flex-align-center flex-start {{borderClass}} box-shadow\"\r\n  (click)=\"onCardClick($event)\"\r\n>\r\n  <div *ngIf=\"showAsIcon\" class=\"material-icons\">{{iconName}}</div>\r\n  <div *ngIf=\"showAsProfile\" class=\"card-image fingerprint\">\r\n    <ng-content select=\"[profile-image]\"></ng-content>\r\n  </div>\r\n  <div>\r\n    <h5>{{title}}</h5>\r\n    <ng-content select=\"[content]\"></ng-content>\r\n  </div>\r\n</button>\r\n\r\n<article \r\n  *ngIf=\"cardDetailed\" \r\n  class=\"aa-card card-detailed flex-group flex-nowrap box-shadow\" \r\n  [ngStyle]=\"{\r\n    'z-index' : zIndex,\r\n    'top' : topPos,\r\n    'left' : leftPos,\r\n    'width' : cardWidth\r\n  }\"\r\n>\r\n  <div class=\"card-image fingerprint border-light\">\r\n    <img alt=\"{{cardName}}\" [src]=\"imgPath\">\r\n  </div>\r\n  <div>\r\n    <ng-content select=\"[card-detailed-content]\"></ng-content>\r\n  </div>\r\n</article>\r\n" }]
    }], () => [], { cardName: [{
            type: Input
        }], cardRole: [{
            type: Input
        }], cardOptional: [{
            type: Input
        }], cardMini: [{
            type: Input
        }], cardDetailed: [{
            type: Input
        }], cardWidth: [{
            type: Input
        }], themeColour: [{
            type: Input
        }], zIndex: [{
            type: Input
        }], imgPath: [{
            type: Input
        }], title: [{
            type: Input
        }], showAsIcon: [{
            type: Input
        }], showAsProfile: [{
            type: Input
        }], iconName: [{
            type: Input
        }], borderClass: [{
            type: Input
        }], topPos: [{
            type: Input
        }], rightPos: [{
            type: Input
        }], leftPos: [{
            type: Input
        }], cardClick: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CardComponent, { className: "CardComponent", filePath: "lib\\widgets\\card\\card.component.ts", lineNumber: 9 }); })();

class CarouselItemDirective {
    constructor(tpl) {
        this.tpl = tpl;
    }
    static { this.ɵfac = function CarouselItemDirective_Factory(t) { return new (t || CarouselItemDirective)(i0.ɵɵdirectiveInject(i0.TemplateRef)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: CarouselItemDirective, selectors: [["", "aaCarouselItem", ""]] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CarouselItemDirective, [{
        type: Directive,
        args: [{
                selector: '[aaCarouselItem]'
            }]
    }], () => [{ type: i0.TemplateRef }], null); })();

const _c0$g = ["carousel"];
const _c1$d = (a0, a1) => ({ "min-width": a0, "padding": a1 });
function CarouselComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵelementContainer(1, 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("aa-carousel-item ", ctx_r1.carouselItemBgColour, "");
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(5, _c1$d, ctx_r1.carouselItemWidth, ctx_r1.carouselItemPadding));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", item_r2.tpl);
} }
const _c2$b = a0 => ({ "width": a0 });
const _c3$7 = (a0, a1) => ({ "width": a0, "height": a1 });
const _c4$4 = a0 => ({ "disable-first": a0 });
const _c5$3 = a0 => ({ "disable-last": a0 });
class CarouselItemElementDirective {
    static { this.ɵfac = function CarouselItemElementDirective_Factory(t) { return new (t || CarouselItemElementDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: CarouselItemElementDirective, selectors: [["", "aaCarouselSlide", ""]] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CarouselItemElementDirective, [{
        type: Directive,
        args: [{
                selector: '[aaCarouselSlide]'
            }]
    }], null, null); })();
class CarouselComponent {
    next() {
        if (this.currentSlide > -1) {
            this.firstSlide = false;
        }
        if (this.items && this.currentSlide === this.items.length - 2) {
            this.lastSlide = true;
        }
        if (this.items && this.currentSlide + 1 === this.items.length) {
            return;
        }
        if (!this.items) {
            return;
        }
        this.currentSlide = (this.currentSlide + 1) % this.items.length;
        const offset = this.currentSlide * this.itemWidth;
        const myAnimation = this.buildAnimation(offset);
        this.player = myAnimation.create(this.carousel?.nativeElement);
        this.player.play();
    }
    buildAnimation(offset) {
        return this.builder.build([
            animate(this.timing, style({ transform: `translateX(-${offset}px)` }))
        ]);
    }
    prev() {
        if (this.items && this.currentSlide !== this.items.length - 2) {
            this.lastSlide = false;
        }
        if (this.currentSlide === 1) {
            this.firstSlide = true;
        }
        if (this.currentSlide === 0) {
            return;
        }
        if (!this.items) {
            return;
        }
        this.currentSlide = ((this.currentSlide - 1) + this.items.length) % this.items.length;
        const offset = this.currentSlide * this.itemWidth;
        const myAnimation = this.buildAnimation(offset);
        this.player = myAnimation.create(this.carousel?.nativeElement);
        this.player.play();
    }
    constructor(builder) {
        this.builder = builder;
        this.timing = '250ms ease-in';
        this.showControls = true;
        this.firstSlide = false;
        this.lastSlide = false;
        this.itemWidth = 0;
        this.currentSlide = 0;
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.itemWidth = this.itemsElements?.first.nativeElement.getBoundingClientRect().width;
        });
    }
    ngOnInit() {
        if (this.currentSlide === 0) {
            this.firstSlide = true;
        }
    }
    static { this.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(i0.ɵɵdirectiveInject(i1$2.AnimationBuilder)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CarouselComponent, selectors: [["aa-carousel"]], contentQueries: function CarouselComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, CarouselItemDirective, 4);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.items = _t);
        } }, viewQuery: function CarouselComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0$g, 5);
            i0.ɵɵviewQuery(CarouselItemElementDirective, 5, ElementRef);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.carousel = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.itemsElements = _t);
        } }, inputs: { timing: "timing", showControls: "showControls", carouselOuterWidth: "carouselOuterWidth", carouselOuterHeight: "carouselOuterHeight", carouselInnerWidth: "carouselInnerWidth", carouselInnerHeight: "carouselInnerHeight", carouselItemWidth: "carouselItemWidth", customClass: "customClass", carouselItemBgColour: "carouselItemBgColour", carouselItemPadding: "carouselItemPadding", nextBtnColour: "nextBtnColour", nextBtnIcon: "nextBtnIcon", prevBtnColour: "prevBtnColour", prevBtnIcon: "prevBtnIcon", firstSlide: "firstSlide", lastSlide: "lastSlide" }, decls: 14, vars: 27, consts: [[3, "ngStyle"], [1, "carousel-count"], [1, "aa-carousel", 3, "ngStyle"], [1, "aa-carousel-content", "flex-group", "flex-nowrap"], ["carousel", ""], ["aaCarouselSlide", "", 3, "class", "ngStyle", 4, "ngFor", "ngForOf"], [1, "aa-carousel-footer", "flex-group", "flex-center"], ["type", "button", 3, "ngClass", "click"], ["aaCarouselSlide", "", 3, "ngStyle"], [3, "ngTemplateOutlet"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "span", 1);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 2)(4, "div", 3, 4);
            i0.ɵɵtemplate(6, CarouselComponent_div_6_Template, 2, 8, "div", 5);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(7, "footer", 6)(8, "button", 7);
            i0.ɵɵlistener("click", function CarouselComponent_Template_button_click_8_listener() { return ctx.prev(); });
            i0.ɵɵelementStart(9, "span");
            i0.ɵɵtext(10);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(11, "button", 7);
            i0.ɵɵlistener("click", function CarouselComponent_Template_button_click_11_listener() { return ctx.next(); });
            i0.ɵɵelementStart(12, "span");
            i0.ɵɵtext(13);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵclassMapInterpolate1("flex-group flex-center ", ctx.customClass, " position-relative");
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(18, _c2$b, ctx.carouselOuterWidth));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate2("", ctx.currentSlide + 1, " of ", ctx.items == null ? null : ctx.items.length, "");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(20, _c3$7, ctx.carouselInnerWidth, ctx.carouselInnerHeight));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.items);
            i0.ɵɵadvance(2);
            i0.ɵɵclassMapInterpolate1("", ctx.prevBtnColour, " material-icons");
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(23, _c4$4, ctx.firstSlide));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.prevBtnIcon);
            i0.ɵɵadvance();
            i0.ɵɵclassMapInterpolate1("", ctx.nextBtnColour, " material-icons");
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(25, _c5$3, ctx.lastSlide));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.nextBtnIcon);
        } }, dependencies: [i1.NgClass, i1.NgForOf, i1.NgTemplateOutlet, i1.NgStyle, CarouselItemElementDirective], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CarouselComponent, [{
        type: Component,
        args: [{ selector: 'aa-carousel', changeDetection: ChangeDetectionStrategy.OnPush, template: "<section\r\n    class=\"flex-group flex-center {{customClass}} position-relative\"\r\n    [ngStyle]=\"{'width' : carouselOuterWidth}\"\r\n>\r\n    <span class=\"carousel-count\">{{currentSlide + 1}} of {{items?.length}}</span>\r\n    <div\r\n        class=\"aa-carousel\"\r\n        [ngStyle]=\"{\r\n            'width' : carouselInnerWidth,\r\n            'height' : carouselInnerHeight\r\n        }\"\r\n    >\r\n        <div class=\"aa-carousel-content flex-group flex-nowrap\" #carousel>\r\n            <div\r\n                aaCarouselSlide\r\n                *ngFor=\"let item of items;\"\r\n                class=\"aa-carousel-item {{carouselItemBgColour}}\"\r\n                [ngStyle]=\"{\r\n                    'min-width' : carouselItemWidth,\r\n                    'padding' : carouselItemPadding\r\n                }\"\r\n            >\r\n                <ng-container [ngTemplateOutlet]=\"item.tpl\"></ng-container>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<footer class=\"aa-carousel-footer flex-group flex-center\">\r\n    <button\r\n        (click)=\"prev()\"\r\n        class=\"{{prevBtnColour}} material-icons\"\r\n        [ngClass]=\"{'disable-first' : firstSlide}\"\r\n        type=\"button\"\r\n        >\r\n        <span>{{prevBtnIcon}}</span>\r\n    </button>\r\n    <button\r\n        (click)=\"next()\"\r\n        class=\"{{nextBtnColour}} material-icons\"\r\n        [ngClass]=\"{'disable-last' : lastSlide}\"\r\n        type=\"button\"\r\n        >\r\n        <span>{{nextBtnIcon}}</span>\r\n    </button>\r\n</footer>\r\n\r\n" }]
    }], () => [{ type: i1$2.AnimationBuilder }], { items: [{
            type: ContentChildren,
            args: [CarouselItemDirective]
        }], itemsElements: [{
            type: ViewChildren,
            args: [CarouselItemElementDirective, { read: ElementRef }]
        }], carousel: [{
            type: ViewChild,
            args: ['carousel']
        }], timing: [{
            type: Input
        }], showControls: [{
            type: Input
        }], carouselOuterWidth: [{
            type: Input
        }], carouselOuterHeight: [{
            type: Input
        }], carouselInnerWidth: [{
            type: Input
        }], carouselInnerHeight: [{
            type: Input
        }], carouselItemWidth: [{
            type: Input
        }], customClass: [{
            type: Input
        }], carouselItemBgColour: [{
            type: Input
        }], carouselItemPadding: [{
            type: Input
        }], nextBtnColour: [{
            type: Input
        }], nextBtnIcon: [{
            type: Input
        }], prevBtnColour: [{
            type: Input
        }], prevBtnIcon: [{
            type: Input
        }], firstSlide: [{
            type: Input
        }], lastSlide: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CarouselComponent, { className: "CarouselComponent", filePath: "lib\\widgets\\carousel\\carousel.component.ts", lineNumber: 18 }); })();

const _c0$f = ["*"];
class DashboardContainerComponent {
    constructor() {
        this.dashboardId = '';
        this.dashboardHeading = '';
        this.headerColor = '';
    }
    static { this.ɵfac = function DashboardContainerComponent_Factory(t) { return new (t || DashboardContainerComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DashboardContainerComponent, selectors: [["aa-dashboard-container"]], inputs: { dashboardId: "dashboardId", dashboardHeading: "dashboardHeading", headerColor: "headerColor" }, ngContentSelectors: _c0$f, decls: 5, vars: 4, consts: [[1, "dashboard-container", 3, "id"]], template: function DashboardContainerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "article", 0)(1, "h3")(2, "span");
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd()();
            i0.ɵɵprojection(4);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("id", ctx.dashboardId);
            i0.ɵɵadvance();
            i0.ɵɵclassMap("dashboard-heading flex-group space-between " + ctx.headerColor);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.dashboardHeading);
        } }, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DashboardContainerComponent, [{
        type: Component,
        args: [{ selector: 'aa-dashboard-container', changeDetection: ChangeDetectionStrategy.OnPush, template: "<article class=\"dashboard-container\" [id]=\"dashboardId\">\r\n  <h3 [class]=\"'dashboard-heading flex-group space-between ' + headerColor\">\r\n    <span>{{dashboardHeading}}</span>\r\n    <!-- <span class=\"icon-drag\"></span> -->\r\n  </h3>\r\n  <ng-content></ng-content>\r\n</article>" }]
    }], () => [], { dashboardId: [{
            type: Input
        }], dashboardHeading: [{
            type: Input
        }], headerColor: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DashboardContainerComponent, { className: "DashboardContainerComponent", filePath: "lib\\widgets\\dashboard-container\\dashboard-container.component.ts", lineNumber: 9 }); })();

function DashboardFavouritesComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div");
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("font-awesome ", ctx_r0.favIconClass, "");
} }
function DashboardFavouritesComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("material-icons ", ctx_r1.iconColour, "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.favIconClass);
} }
function DashboardFavouritesComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 8);
    i0.ɵɵlistener("click", function DashboardFavouritesComponent_button_7_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.onFavClick($event)); });
    i0.ɵɵtext(1, " star_outline ");
    i0.ɵɵelementEnd();
} }
function DashboardFavouritesComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 8);
    i0.ɵɵlistener("click", function DashboardFavouritesComponent_button_8_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.onFavClick($event)); });
    i0.ɵɵtext(1, " star ");
    i0.ɵɵelementEnd();
} }
class DashboardFavouritesComponent {
    onAnchorClick(e) {
        e.stopPropagation();
        this.anchorClick.emit(e);
    }
    onFavClick(e) {
        this.isFavourite = !this.isFavourite;
        e.stopPropagation();
        this.favClick.emit(this.isFavourite);
    }
    constructor() {
        this.isFavourite = false;
        this.favouritesTitle = '';
        this.favouritesText = '';
        this.favouritesURL = '';
        this.favIconClass = '';
        this.iconColour = '';
        this.materialIcons = false;
        this.tagName = '';
        this.favDescription = '';
        this.lastViewed = '';
        this.anchorClick = new EventEmitter();
        this.favClick = new EventEmitter();
        this.favClick.emit(this.isFavourite);
    }
    static { this.ɵfac = function DashboardFavouritesComponent_Factory(t) { return new (t || DashboardFavouritesComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DashboardFavouritesComponent, selectors: [["aa-dashboard-favourites"]], inputs: { isFavourite: "isFavourite", favouritesTitle: "favouritesTitle", favouritesText: "favouritesText", favouritesURL: "favouritesURL", favIconClass: "favIconClass", iconColour: "iconColour", materialIcons: "materialIcons", tagName: "tagName", favDescription: "favDescription", lastViewed: "lastViewed" }, outputs: { anchorClick: "anchorClick", favClick: "favClick" }, decls: 30, vars: 14, consts: [[1, "dashboard-favourite", "flex-group", "flex-align-center"], [3, "class", 4, "ngIf"], [3, "click"], [1, "flex-group", "flex-align-center", "position-absolute", "top-0-5", "right-0-5", "margin-right-0"], ["class", "btn-fav material-icons-outlined margin-0 margin-left-0-25", 3, "click", 4, "ngIf"], [1, "hover-card", "animate-all"], [1, "field", "boxed"], [1, "field"], [1, "btn-fav", "material-icons-outlined", "margin-0", "margin-left-0-25", 3, "click"]], template: function DashboardFavouritesComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "article", 0);
            i0.ɵɵtemplate(1, DashboardFavouritesComponent_div_1_Template, 1, 3, "div", 1)(2, DashboardFavouritesComponent_div_2_Template, 2, 4, "div", 1);
            i0.ɵɵelementStart(3, "a", 2);
            i0.ɵɵlistener("click", function DashboardFavouritesComponent_Template_a_click_3_listener($event) { return ctx.onAnchorClick($event); });
            i0.ɵɵtext(4);
            i0.ɵɵpipe(5, "slice");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 3);
            i0.ɵɵtemplate(7, DashboardFavouritesComponent_button_7_Template, 2, 0, "button", 4)(8, DashboardFavouritesComponent_button_8_Template, 2, 0, "button", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "div", 5)(10, "div", 6)(11, "label");
            i0.ɵɵtext(12, "Tags");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "p");
            i0.ɵɵtext(14);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(15, "div", 7)(16, "label");
            i0.ɵɵtext(17, "Last viewed");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "p");
            i0.ɵɵtext(19);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(20, "div", 7)(21, "label");
            i0.ɵɵtext(22, "Title");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "p");
            i0.ɵɵtext(24);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(25, "div", 7)(26, "label");
            i0.ɵɵtext(27, "Description");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "p");
            i0.ɵɵtext(29);
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.materialIcons);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.materialIcons);
            i0.ɵɵadvance();
            i0.ɵɵattribute("href", ctx.favouritesURL, i0.ɵɵsanitizeUrl);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.favouritesTitle.length > 35 ? i0.ɵɵpipeBind3(5, 10, ctx.favouritesTitle, 0, 35) + "..." : ctx.favouritesTitle);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", !ctx.isFavourite);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.isFavourite);
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.tagName);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.lastViewed);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.favouritesTitle);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.favDescription);
        } }, dependencies: [i1.NgIf, i1.SlicePipe], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DashboardFavouritesComponent, [{
        type: Component,
        args: [{ selector: 'aa-dashboard-favourites', changeDetection: ChangeDetectionStrategy.OnPush, template: "<article class=\"dashboard-favourite flex-group flex-align-center\">\r\n  <div *ngIf=\"!materialIcons\" class=\"font-awesome {{favIconClass}}\"></div>\r\n  <div *ngIf=\"materialIcons\" class=\"material-icons {{iconColour}}\">{{favIconClass}}</div>\r\n  <a (click)=\"onAnchorClick($event)\" [attr.href]=\"favouritesURL\">{{(favouritesTitle.length>35)? (favouritesTitle | slice:0:35)+'...':(favouritesTitle)}}</a>\r\n  <div class=\"flex-group flex-align-center position-absolute top-0-5 right-0-5 margin-right-0\">\r\n    <button \r\n      *ngIf=\"!isFavourite\" \r\n      (click)=\"onFavClick($event)\" \r\n      class=\"btn-fav material-icons-outlined margin-0 margin-left-0-25\"\r\n      >\r\n      star_outline\r\n    </button>\r\n    <button \r\n      *ngIf=\"isFavourite\" \r\n      (click)=\"onFavClick($event)\" \r\n      class=\"btn-fav material-icons-outlined margin-0 margin-left-0-25\"\r\n      >\r\n      star\r\n    </button>\r\n  </div>\r\n  <div class=\"hover-card animate-all\">\r\n    <div class=\"field boxed\">\r\n      <label>Tags</label>\r\n      <p>{{tagName}}</p>\r\n    </div>\r\n    <div class=\"field\">\r\n      <label>Last viewed</label>\r\n      <p>{{lastViewed}}</p>\r\n    </div>\r\n    <div class=\"field\">\r\n      <label>Title</label>\r\n      <p>{{favouritesTitle}}</p>\r\n    </div>\r\n    <div class=\"field\">\r\n      <label>Description</label>\r\n      <p>{{favDescription}}</p>\r\n    </div>\r\n  </div>\r\n</article>\r\n" }]
    }], () => [], { isFavourite: [{
            type: Input
        }], favouritesTitle: [{
            type: Input
        }], favouritesText: [{
            type: Input
        }], favouritesURL: [{
            type: Input
        }], favIconClass: [{
            type: Input
        }], iconColour: [{
            type: Input
        }], materialIcons: [{
            type: Input
        }], tagName: [{
            type: Input
        }], favDescription: [{
            type: Input
        }], lastViewed: [{
            type: Input
        }], anchorClick: [{
            type: Output
        }], favClick: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DashboardFavouritesComponent, { className: "DashboardFavouritesComponent", filePath: "lib\\widgets\\dashboard-favourites\\dashboard-favourites.component.ts", lineNumber: 8 }); })();

function DashboardFavouritesListComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 8);
    i0.ɵɵlistener("click", function DashboardFavouritesListComponent_button_2_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.onFavClick($event)); });
    i0.ɵɵtext(1, " star_outline ");
    i0.ɵɵelementEnd();
} }
function DashboardFavouritesListComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 8);
    i0.ɵɵlistener("click", function DashboardFavouritesListComponent_button_3_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r5.onFavClick($event)); });
    i0.ɵɵtext(1, " star ");
    i0.ɵɵelementEnd();
} }
function DashboardFavouritesListComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div", 9)(2, "div", 10)(3, "label");
    i0.ɵɵtext(4, "Tags");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 11)(8, "label");
    i0.ɵɵtext(9, "Last viewed");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "p");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div", 11)(13, "label");
    i0.ɵɵtext(14, "Title");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "p");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "div", 11)(18, "label");
    i0.ɵɵtext(19, "Description");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "p");
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r2.tagName);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r2.lastViewed);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r2.favouritesTitle);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r2.favDescription);
} }
class DashboardFavouritesListComponent {
    onAnchorClick(e) {
        e.stopPropagation();
        this.anchorClick.emit(e);
    }
    onFavClick(e) {
        this.isFavourite = !this.isFavourite;
        e.stopPropagation();
        this.favClick.emit(this.isFavourite);
    }
    constructor() {
        this.isFavourite = false;
        this.showTags = false;
        this.itemAnchorTitle = '';
        this.itemAnchorURL = '';
        this.itemAnchor = '';
        this.itemTitle = '';
        this.itemDescription = '';
        this.showBody = false;
        this.favouriteId = '';
        this.iconName = '';
        this.tagName = '';
        this.lastViewed = '';
        this.favouritesTitle = '';
        this.favDescription = '';
        this.anchorClick = new EventEmitter();
        this.favClick = new EventEmitter();
        this.favClick.emit(this.isFavourite);
    }
    static { this.ɵfac = function DashboardFavouritesListComponent_Factory(t) { return new (t || DashboardFavouritesListComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DashboardFavouritesListComponent, selectors: [["aa-dashboard-favourites-list"]], inputs: { isFavourite: "isFavourite", showTags: "showTags", itemAnchorTitle: "itemAnchorTitle", itemAnchorURL: "itemAnchorURL", itemAnchor: "itemAnchor", itemTitle: "itemTitle", itemDescription: "itemDescription", showBody: "showBody", favouriteId: "favouriteId", iconName: "iconName", tagName: "tagName", lastViewed: "lastViewed", favouritesTitle: "favouritesTitle", favDescription: "favDescription" }, outputs: { anchorClick: "anchorClick", favClick: "favClick" }, decls: 12, vars: 7, consts: [[1, "accordion-favourites-list"], [1, "flex-group", "flex-start", "flex-align-center"], ["class", "btn-fav material-icons-outlined margin-left-0-75 margin-right-1-25", 3, "click", 4, "ngIf"], [1, "margin-top-1", "margin-bottom-0-75", "description"], ["type", "button", 1, "anchor-underline", 3, "title", "click"], [1, "margin-top-0-25"], [1, "icon-info", 3, "click"], [4, "ngIf"], [1, "btn-fav", "material-icons-outlined", "margin-left-0-75", "margin-right-1-25", 3, "click"], [1, "more-info"], [1, "field", "boxed"], [1, "field"]], template: function DashboardFavouritesListComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵtemplate(2, DashboardFavouritesListComponent_button_2_Template, 2, 0, "button", 2)(3, DashboardFavouritesListComponent_button_3_Template, 2, 0, "button", 2);
            i0.ɵɵelementStart(4, "div", 3)(5, "a", 4);
            i0.ɵɵlistener("click", function DashboardFavouritesListComponent_Template_a_click_5_listener($event) { return ctx.onAnchorClick($event); });
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(7, "br");
            i0.ɵɵelementStart(8, "div", 5);
            i0.ɵɵtext(9);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(10, "div", 6);
            i0.ɵɵlistener("click", function DashboardFavouritesListComponent_Template_div_click_10_listener() { return ctx.showTags = !ctx.showTags; });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(11, DashboardFavouritesListComponent_div_11_Template, 22, 4, "div", 7);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx.isFavourite);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.isFavourite);
            i0.ɵɵadvance(2);
            i0.ɵɵpropertyInterpolate("title", ctx.itemAnchorTitle);
            i0.ɵɵattribute("href", ctx.itemAnchorURL, i0.ɵɵsanitizeUrl);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.itemAnchor);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.itemDescription);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.showTags);
        } }, dependencies: [i1.NgIf], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DashboardFavouritesListComponent, [{
        type: Component,
        args: [{ selector: 'aa-dashboard-favourites-list', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"accordion-favourites-list\">\r\n  <div class=\"flex-group flex-start flex-align-center\">\r\n    <button \r\n      *ngIf=\"!isFavourite\" \r\n      (click)=\"onFavClick($event)\" \r\n      class=\"btn-fav material-icons-outlined margin-left-0-75 margin-right-1-25\"\r\n      >\r\n      star_outline\r\n    </button>\r\n    <button \r\n      *ngIf=\"isFavourite\" \r\n      (click)=\"onFavClick($event)\" \r\n      class=\"btn-fav material-icons-outlined margin-left-0-75 margin-right-1-25\"\r\n      >\r\n      star\r\n    </button>\r\n\r\n    <div class=\"margin-top-1 margin-bottom-0-75 description\">\r\n      <a (click)=\"onAnchorClick($event)\" class=\"anchor-underline\" title=\"{{itemAnchorTitle}}\"\r\n         type=\"button\" [attr.href]=\"itemAnchorURL\">{{itemAnchor}}</a><br/>\r\n      <div class=\"margin-top-0-25\">{{itemDescription}}</div>\r\n    </div>\r\n  </div>\r\n  <div (click)=\"showTags=!showTags\" class=\"icon-info\"></div>\r\n  <div *ngIf=\"showTags\">\r\n    <div class=\"more-info\">\r\n      <div class=\"field boxed\">\r\n        <label>Tags</label>\r\n        <p>{{tagName}}</p>\r\n      </div>\r\n      <div class=\"field\">\r\n        <label>Last viewed</label>\r\n        <p>{{lastViewed}}</p>\r\n      </div>\r\n      <div class=\"field\">\r\n        <label>Title</label>\r\n        <p>{{favouritesTitle}}</p>\r\n      </div>\r\n      <div class=\"field\">\r\n        <label>Description</label>\r\n        <p>{{favDescription}}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n" }]
    }], () => [], { isFavourite: [{
            type: Input
        }], showTags: [{
            type: Input
        }], itemAnchorTitle: [{
            type: Input
        }], itemAnchorURL: [{
            type: Input
        }], itemAnchor: [{
            type: Input
        }], itemTitle: [{
            type: Input
        }], itemDescription: [{
            type: Input
        }], showBody: [{
            type: Input
        }], favouriteId: [{
            type: Input
        }], iconName: [{
            type: Input
        }], tagName: [{
            type: Input
        }], lastViewed: [{
            type: Input
        }], favouritesTitle: [{
            type: Input
        }], favDescription: [{
            type: Input
        }], anchorClick: [{
            type: Output
        }], favClick: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DashboardFavouritesListComponent, { className: "DashboardFavouritesListComponent", filePath: "lib\\widgets\\dashboard-favourites-list\\dashboard-favourites-list.component.ts", lineNumber: 9 }); })();

const _c0$e = a0 => ({ "rotate-180": a0 });
const _c1$c = a0 => ({ "slider-open": a0 });
const _c2$a = ["*"];
class ElementSliderComponent {
    constructor() {
        this.openSlider = false;
    }
    toggleSlider() {
        this.openSlider = !this.openSlider;
    }
    static { this.ɵfac = function ElementSliderComponent_Factory(t) { return new (t || ElementSliderComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ElementSliderComponent, selectors: [["aa-element-slider"]], inputs: { openSlider: "openSlider" }, ngContentSelectors: _c2$a, decls: 5, vars: 6, consts: [[1, "element-slider", "flex-group", "flex-end", "position-relative"], [1, "secondary", "material-icons", "slider-button", "animate-normal", 3, "ngClass", "click"], [1, "position-absolute", "animate-normal", "slider-content", 3, "ngClass"]], template: function ElementSliderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "section", 0)(1, "button", 1);
            i0.ɵɵlistener("click", function ElementSliderComponent_Template_button_click_1_listener() { return ctx.toggleSlider(); });
            i0.ɵɵtext(2, " chevron_left ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 2);
            i0.ɵɵprojection(4);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c0$e, ctx.openSlider));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c1$c, ctx.openSlider));
        } }, dependencies: [i1.NgClass] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ElementSliderComponent, [{
        type: Component,
        args: [{ selector: 'aa-element-slider', template: "<section class=\"\r\n    element-slider\r\n    flex-group \r\n    flex-end \r\n    position-relative\"\r\n>\r\n    <button \r\n        class=\"\r\n            secondary \r\n            material-icons \r\n            slider-button \r\n            animate-normal\r\n        \"\r\n        (click)=\"toggleSlider()\"\r\n        [ngClass]=\"{ 'rotate-180' : openSlider }\"\r\n    >\r\n        chevron_left\r\n    </button>\r\n    <div \r\n        class=\"position-absolute animate-normal slider-content\"\r\n        [ngClass]=\"{ 'slider-open' : openSlider }\"\r\n    >\r\n        <ng-content></ng-content>\r\n    </div>\r\n</section>" }]
    }], null, { openSlider: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ElementSliderComponent, { className: "ElementSliderComponent", filePath: "lib\\widgets\\element-slider\\element-slider.component.ts", lineNumber: 8 }); })();

class OrderByPipe {
    transform(array, field) {
        array.sort((a, b) => {
            if (a[field] < b[field]) {
                return -1;
            }
            else if (a[field] > b[field]) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return array;
    }
    static { this.ɵfac = function OrderByPipe_Factory(t) { return new (t || OrderByPipe)(); }; }
    static { this.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "orderBy", type: OrderByPipe, pure: true }); }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: OrderByPipe, factory: OrderByPipe.ɵfac }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OrderByPipe, [{
        type: Injectable
    }, {
        type: Pipe,
        args: [{
                name: 'orderBy'
            }]
    }], null, null); })();

function FavouritesComponent_section_0_h2_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h2", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "span", 8)(3, "strong", 9);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.favsHeading, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r2.favsTarget.length);
} }
function FavouritesComponent_section_0_div_3_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 19);
    i0.ɵɵlistener("click", function FavouritesComponent_section_0_div_3_button_19_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r11); const item_r6 = i0.ɵɵnextContext().$implicit; const ctx_r9 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r9.onFavClick(item_r6)); });
    i0.ɵɵelementEnd();
} }
function FavouritesComponent_section_0_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10)(1, "section", 11)(2, "div")(3, "h4", 12);
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "slice");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div")(7, "a", 13);
    i0.ɵɵlistener("click", function FavouritesComponent_section_0_div_3_Template_a_click_7_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r12.onAnchorClick($event)); });
    i0.ɵɵelementStart(8, "h3", 12);
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "slice");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "p", 14);
    i0.ɵɵtext(12);
    i0.ɵɵpipe(13, "slice");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "p", 15);
    i0.ɵɵtext(15);
    i0.ɵɵpipe(16, "slice");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(17, "section", 16);
    i0.ɵɵelement(18, "div", 17);
    i0.ɵɵtemplate(19, FavouritesComponent_section_0_div_3_button_19_Template, 1, 0, "button", 18);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("fav-saved", item_r6.isFavourite);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("\n          width-3 \n          height-3 \n          flex-center \n          border-radius-50 \n          ", item_r6.favColour, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r6.favLabel.length > 3 ? i0.ɵɵpipeBind3(5, 10, item_r6.favLabel, 0, 3) + "..." : item_r6.favLabel);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", item_r6.favTitle.length > 27 ? i0.ɵɵpipeBind3(10, 14, item_r6.favTitle, 0, 27) + "..." : item_r6.favTitle, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r6.favTextLineOne.length > 45 ? i0.ɵɵpipeBind3(13, 18, item_r6.favTextLineOne, 0, 45) + "..." : item_r6.favTextLineOne, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r6.favTextLineTwo.length > 45 ? i0.ɵɵpipeBind3(16, 22, item_r6.favTextLineTwo, 0, 45) + "..." : item_r6.favTextLineTwo, " ");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", !ctx_r3.disableFavsStar);
} }
function FavouritesComponent_section_0_hr_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "hr", 20);
} }
function FavouritesComponent_section_0_div_7_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 19);
    i0.ɵɵlistener("click", function FavouritesComponent_section_0_div_7_button_19_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r19); const item_r14 = i0.ɵɵnextContext().$implicit; const ctx_r17 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r17.onFavClick(item_r14)); });
    i0.ɵɵelementEnd();
} }
function FavouritesComponent_section_0_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10)(1, "section", 11)(2, "div")(3, "h4", 12);
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "slice");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div")(7, "a", 13);
    i0.ɵɵlistener("click", function FavouritesComponent_section_0_div_7_Template_a_click_7_listener($event) { i0.ɵɵrestoreView(_r21); const ctx_r20 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r20.onAnchorClick($event)); });
    i0.ɵɵelementStart(8, "h3", 12);
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "slice");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "p", 14);
    i0.ɵɵtext(12);
    i0.ɵɵpipe(13, "slice");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "p", 15);
    i0.ɵɵtext(15);
    i0.ɵɵpipe(16, "slice");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(17, "section", 16);
    i0.ɵɵelement(18, "div", 17);
    i0.ɵɵtemplate(19, FavouritesComponent_section_0_div_7_button_19_Template, 1, 0, "button", 18);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("fav-saved", item_r14.isFavourite);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("\n          width-3 \n          height-3 \n          flex-center \n          border-radius-50 \n          ", item_r14.favColour, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r14.favLabel.length > 3 ? i0.ɵɵpipeBind3(5, 10, item_r14.favLabel, 0, 3) + "..." : item_r14.favLabel);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", item_r14.favTitle.length > 27 ? i0.ɵɵpipeBind3(10, 14, item_r14.favTitle, 0, 27) + "..." : item_r14.favTitle, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r14.favTextLineOne.length > 45 ? i0.ɵɵpipeBind3(13, 18, item_r14.favTextLineOne, 0, 45) + "..." : item_r14.favTextLineOne, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r14.favTextLineTwo.length > 45 ? i0.ɵɵpipeBind3(16, 22, item_r14.favTextLineTwo, 0, 45) + "..." : item_r14.favTextLineTwo, " ");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", !ctx_r5.disableFavsStar);
} }
function FavouritesComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 2);
    i0.ɵɵtemplate(1, FavouritesComponent_section_0_h2_1_Template, 5, 2, "h2", 3);
    i0.ɵɵelementStart(2, "section", 4);
    i0.ɵɵtemplate(3, FavouritesComponent_section_0_div_3_Template, 20, 26, "div", 5);
    i0.ɵɵpipe(4, "orderBy");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, FavouritesComponent_section_0_hr_5_Template, 1, 0, "hr", 6);
    i0.ɵɵelementStart(6, "section", 4);
    i0.ɵɵtemplate(7, FavouritesComponent_section_0_div_7_Template, 20, 26, "div", 5);
    i0.ɵɵpipe(8, "orderBy");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.favsTarget.length);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(4, 4, ctx_r0.favsTarget, "favTitle"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.favsTarget.length);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(8, 7, ctx_r0.favsOrigin, "favTitle"));
} }
function FavouritesComponent_section_1_h2_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h2", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "span", 8)(3, "strong", 9);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r22 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r22.favsHeading, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r22.favsTarget.length);
} }
function FavouritesComponent_section_1_div_3_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 19);
    i0.ɵɵlistener("click", function FavouritesComponent_section_1_div_3_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r31); const item_r26 = i0.ɵɵnextContext().$implicit; const ctx_r29 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r29.onFavClick(item_r26)); });
    i0.ɵɵelementEnd();
} }
function FavouritesComponent_section_1_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 23)(1, "section", 24);
    i0.ɵɵelement(2, "div", 17);
    i0.ɵɵtemplate(3, FavouritesComponent_section_1_div_3_button_3_Template, 1, 0, "button", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div")(5, "h4", 12);
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "slice");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 25)(9, "a", 13);
    i0.ɵɵlistener("click", function FavouritesComponent_section_1_div_3_Template_a_click_9_listener($event) { i0.ɵɵrestoreView(_r33); const ctx_r32 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r32.onAnchorClick($event)); });
    i0.ɵɵelementStart(10, "h2", 26);
    i0.ɵɵtext(11);
    i0.ɵɵpipe(12, "slice");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "p", 27);
    i0.ɵɵtext(14);
    i0.ɵɵpipe(15, "slice");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "p", 27);
    i0.ɵɵtext(17);
    i0.ɵɵpipe(18, "slice");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "p", 27);
    i0.ɵɵtext(20);
    i0.ɵɵpipe(21, "slice");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r26 = ctx.$implicit;
    const ctx_r23 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("fav-saved", item_r26.isFavourite);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !ctx_r23.disableFavsStar);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("\n        flex-none \n        width-3 \n        height-3 \n        flex-center \n        border-radius-50 \n        margin-right-0\n        ", item_r26.favColour, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r26.favLabel.length > 3 ? i0.ɵɵpipeBind3(7, 11, item_r26.favLabel, 0, 3) + "..." : item_r26.favLabel);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", item_r26.favTitle.length > 25 ? i0.ɵɵpipeBind3(12, 15, item_r26.favTitle, 0, 25) + "..." : item_r26.favTitle, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r26.favTextLineOne.length > 23 ? i0.ɵɵpipeBind3(15, 19, item_r26.favTextLineOne, 0, 23) + "..." : item_r26.favTextLineOne, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r26.favTextLineTwo.length > 23 ? i0.ɵɵpipeBind3(18, 23, item_r26.favTextLineTwo, 0, 23) + "..." : item_r26.favTextLineTwo, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r26.favTextLineThree.length > 23 ? i0.ɵɵpipeBind3(21, 27, item_r26.favTextLineThree, 0, 23) + "..." : item_r26.favTextLineThree, " ");
} }
function FavouritesComponent_section_1_hr_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "hr", 20);
} }
function FavouritesComponent_section_1_div_7_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r39 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 19);
    i0.ɵɵlistener("click", function FavouritesComponent_section_1_div_7_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r39); const item_r34 = i0.ɵɵnextContext().$implicit; const ctx_r37 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r37.onFavClick(item_r34)); });
    i0.ɵɵelementEnd();
} }
function FavouritesComponent_section_1_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r41 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 23)(1, "section", 24);
    i0.ɵɵelement(2, "div", 17);
    i0.ɵɵtemplate(3, FavouritesComponent_section_1_div_7_button_3_Template, 1, 0, "button", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div")(5, "h4", 12);
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "slice");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 25)(9, "a", 13);
    i0.ɵɵlistener("click", function FavouritesComponent_section_1_div_7_Template_a_click_9_listener($event) { i0.ɵɵrestoreView(_r41); const ctx_r40 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r40.onAnchorClick($event)); });
    i0.ɵɵelementStart(10, "h2", 26);
    i0.ɵɵtext(11);
    i0.ɵɵpipe(12, "slice");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "p", 27);
    i0.ɵɵtext(14);
    i0.ɵɵpipe(15, "slice");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "p", 27);
    i0.ɵɵtext(17);
    i0.ɵɵpipe(18, "slice");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "p", 27);
    i0.ɵɵtext(20);
    i0.ɵɵpipe(21, "slice");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r34 = ctx.$implicit;
    const ctx_r25 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("fav-saved", item_r34.isFavourite);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !ctx_r25.disableFavsStar);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("\n        flex-none \n        width-3 \n        height-3 \n        flex-center \n        border-radius-50 \n        margin-right-0\n        ", item_r34.favColour, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r34.favLabel.length > 3 ? i0.ɵɵpipeBind3(7, 11, item_r34.favLabel, 0, 3) + "..." : item_r34.favLabel);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", item_r34.favTitle.length > 25 ? i0.ɵɵpipeBind3(12, 15, item_r34.favTitle, 0, 25) + "..." : item_r34.favTitle, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r34.favTextLineOne.length > 23 ? i0.ɵɵpipeBind3(15, 19, item_r34.favTextLineOne, 0, 23) + "..." : item_r34.favTextLineOne, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r34.favTextLineTwo.length > 23 ? i0.ɵɵpipeBind3(18, 23, item_r34.favTextLineTwo, 0, 23) + "..." : item_r34.favTextLineTwo, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r34.favTextLineThree.length > 23 ? i0.ɵɵpipeBind3(21, 27, item_r34.favTextLineThree, 0, 23) + "..." : item_r34.favTextLineThree, " ");
} }
function FavouritesComponent_section_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 21);
    i0.ɵɵtemplate(1, FavouritesComponent_section_1_h2_1_Template, 5, 2, "h2", 3);
    i0.ɵɵelementStart(2, "section", 4);
    i0.ɵɵtemplate(3, FavouritesComponent_section_1_div_3_Template, 22, 31, "div", 22);
    i0.ɵɵpipe(4, "orderBy");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, FavouritesComponent_section_1_hr_5_Template, 1, 0, "hr", 6);
    i0.ɵɵelementStart(6, "section", 4);
    i0.ɵɵtemplate(7, FavouritesComponent_section_1_div_7_Template, 22, 31, "div", 22);
    i0.ɵɵpipe(8, "orderBy");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.favsTarget.length);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(4, 4, ctx_r1.favsTarget, "favTitle"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.favsTarget.length);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(8, 7, ctx_r1.favsOrigin, "favTitle"));
} }
class FavouritesComponent {
    onAnchorClick(e) {
        e.stopPropagation();
        this.anchorClick.emit(e);
    }
    onFavClick(fav) {
        fav.isFavourite = !fav.isFavourite;
        this.favClick.emit(fav);
        if (this.favsOrigin.indexOf(fav) !== -1) {
            this.favsOrigin.splice(this.favsOrigin.indexOf(fav), 1);
            this.favsTarget.push(fav);
        }
        else {
            this.favsTarget.splice(this.favsTarget.indexOf(fav), 1);
            this.favsOrigin.push(fav);
        }
    }
    constructor() {
        this.showLandscapeFavs = false;
        this.showPortraitFavs = false;
        this.anchorIsClicked = false;
        this.disableFavsStar = false;
        this.toggleFavourite = '';
        this.favsHeading = '';
        this.clickAnchor = '';
        this.favLabel = '';
        this.favTitle = '';
        this.favTextLineOne = '';
        this.favTextLineTwo = '';
        this.favTextLineThree = '';
        this.favColour = '';
        this.favsOrigin = [];
        this.favsTarget = [];
        this.favsPortrait = [];
        this.isFavourite = null;
        this.anchorClick = new EventEmitter();
        this.favClick = new EventEmitter();
        if (!this.favsTarget) {
            this.favsTarget = [];
        }
        if (!this.favsOrigin) {
            this.favsOrigin = [];
        }
    }
    static { this.ɵfac = function FavouritesComponent_Factory(t) { return new (t || FavouritesComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FavouritesComponent, selectors: [["aa-favourites"]], inputs: { showLandscapeFavs: "showLandscapeFavs", showPortraitFavs: "showPortraitFavs", anchorIsClicked: "anchorIsClicked", disableFavsStar: "disableFavsStar", toggleFavourite: "toggleFavourite", favsHeading: "favsHeading", clickAnchor: "clickAnchor", favLabel: "favLabel", favTitle: "favTitle", favTextLineOne: "favTextLineOne", favTextLineTwo: "favTextLineTwo", favTextLineThree: "favTextLineThree", favColour: "favColour", favsOrigin: "favsOrigin", favsTarget: "favsTarget", favsPortrait: "favsPortrait", isFavourite: "isFavourite" }, outputs: { anchorClick: "anchorClick", favClick: "favClick" }, decls: 2, vars: 2, consts: [["class", "aa-favs aa-favs-landscape", 4, "ngIf"], ["class", "aa-favs aa-favs-portrait", 4, "ngIf"], [1, "aa-favs", "aa-favs-landscape"], ["class", "width-100 flex-group flex-start flex-align-center", 4, "ngIf"], [1, "flex-group", "flex-start"], ["class", "\n        flex-group\n        flex-align-center\n        space-between\n        bg-aa-white-100\n        margin-bottom-0-75\n        min-width-24\n        max-width-24\n        padding-0-75\n        box-shadow \n        bd-solid \n        bd-grey-10 \n        bd-1", 3, "fav-saved", 4, "ngFor", "ngForOf"], ["class", "min-width-100 margin-bottom-0-75", 4, "ngIf"], [1, "width-100", "flex-group", "flex-start", "flex-align-center"], [1, "flex-group", "flex-center", "bg-aa-light-blue-15", "border-radius-50", "width-1-25", "height-1-25", "margin-left-0-5", "font-size-xsmall"], [1, "flex-group", "flex-center"], [1, "flex-group", "flex-align-center", "space-between", "bg-aa-white-100", "margin-bottom-0-75", "min-width-24", "max-width-24", "padding-0-75", "box-shadow", "bd-solid", "bd-grey-10", "bd-1"], [1, "flex-group", "flex-start", "flex-align-center"], [1, "margin-0"], [1, "text-decoration-none", "cursor-pointer", 3, "click"], [1, "small", "padding-top-0-25", "margin-0"], [1, "small", "margin-0"], [1, "flex-group", "flex-align-center", "fav-controls"], [1, "flag", "au", "width-1", "height-1", "margin-0"], ["class", "btn-fav material-icons-outlined margin-0 margin-left-0-25", 3, "click", 4, "ngIf"], [1, "btn-fav", "material-icons-outlined", "margin-0", "margin-left-0-25", 3, "click"], [1, "min-width-100", "margin-bottom-0-75"], [1, "aa-favs", "aa-favs-portrait"], ["class", "\n        position-relative\n        flex-group\n        flex-center\n        flex-column\n        margin-bottom-0-75\n        bg-aa-white-100\n        min-width-12\n        max-width-12\n        min-height-14\n        max-height-14\n        padding-1\n        box-shadow \n        bd-solid \n        bd-grey-10 \n        bd-1", 3, "fav-saved", 4, "ngFor", "ngForOf"], [1, "position-relative", "flex-group", "flex-center", "flex-column", "margin-bottom-0-75", "bg-aa-white-100", "min-width-12", "max-width-12", "min-height-14", "max-height-14", "padding-1", "box-shadow", "bd-solid", "bd-grey-10", "bd-1"], [1, "flex-group", "flex-align-center", "position-absolute", "top-0-5", "right-0-5", "margin-right-0", "fav-controls"], [1, "margin-right-0", "margin-top-0-75"], [1, "margin-0", "margin-bottom-0-5", "text-align-center"], [1, "small", "margin-0", "text-align-center"]], template: function FavouritesComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, FavouritesComponent_section_0_Template, 9, 10, "section", 0)(1, FavouritesComponent_section_1_Template, 9, 10, "section", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.showLandscapeFavs);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showPortraitFavs);
        } }, dependencies: [i1.NgForOf, i1.NgIf, i1.SlicePipe, OrderByPipe], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FavouritesComponent, [{
        type: Component,
        args: [{ selector: 'aa-favourites', changeDetection: ChangeDetectionStrategy.OnPush, template: "<!-- LANDSCAPE -->\r\n<section class=\"aa-favs aa-favs-landscape\" *ngIf=\"showLandscapeFavs\">\r\n  <h2 *ngIf=\"favsTarget.length\" class=\"width-100 flex-group flex-start flex-align-center\">\r\n    {{favsHeading}}\r\n    <span \r\n      class=\"\r\n      flex-group \r\n      flex-center \r\n      bg-aa-light-blue-15 \r\n      border-radius-50\r\n      width-1-25\r\n      height-1-25\r\n      margin-left-0-5\r\n      font-size-xsmall\"\r\n      >\r\n      <strong class=\"flex-group flex-center\">{{favsTarget.length}}</strong>\r\n    </span>\r\n  </h2>\r\n  <section class=\"flex-group flex-start\">\r\n    <div \r\n      *ngFor=\"let item of favsTarget | orderBy:'favTitle'; let i = index\" \r\n      [class.fav-saved]=\"item.isFavourite\"\r\n      class=\"\r\n        flex-group\r\n        flex-align-center\r\n        space-between\r\n        bg-aa-white-100\r\n        margin-bottom-0-75\r\n        min-width-24\r\n        max-width-24\r\n        padding-0-75\r\n        box-shadow \r\n        bd-solid \r\n        bd-grey-10 \r\n        bd-1\"\r\n      >\r\n      <section class=\"flex-group flex-start flex-align-center\">\r\n        <div \r\n          class=\"\r\n          width-3 \r\n          height-3 \r\n          flex-center \r\n          border-radius-50 \r\n          {{item.favColour}}\"\r\n        >\r\n          <h4 class=\"margin-0\">{{(item.favLabel.length>3)? (item.favLabel | slice:0:3)+'...':(item.favLabel)}}</h4>\r\n        </div>\r\n        <div>\r\n          <a (click)=\"onAnchorClick($event)\" class=\"text-decoration-none cursor-pointer\">\r\n            <h3 class=\"margin-0\">\r\n              {{(item.favTitle.length>27)? (item.favTitle | slice:0:27)+'...':(item.favTitle)}}\r\n            </h3>\r\n          </a>\r\n          <p class=\"small padding-top-0-25 margin-0\">\r\n            {{(item.favTextLineOne.length>45)? (item.favTextLineOne | slice:0:45)+'...':(item.favTextLineOne)}}\r\n          </p>\r\n          <p class=\"small margin-0\">\r\n            {{(item.favTextLineTwo.length>45)? (item.favTextLineTwo | slice:0:45)+'...':(item.favTextLineTwo)}}\r\n          </p>\r\n        </div>\r\n      </section>\r\n      <section class=\"flex-group flex-align-center fav-controls\">\r\n        <div class=\"flag au width-1 height-1 margin-0\"></div>\r\n        <button \r\n          *ngIf=\"!disableFavsStar\"\r\n          (click)=\"onFavClick(item)\" \r\n          class=\"btn-fav material-icons-outlined margin-0 margin-left-0-25\"\r\n          >\r\n        </button>\r\n      </section>\r\n    </div>\r\n  </section>\r\n\r\n  <hr *ngIf=\"favsTarget.length\" class=\"min-width-100 margin-bottom-0-75\" />\r\n\r\n  <section class=\"flex-group flex-start\">\r\n    <div \r\n      *ngFor=\"let item of favsOrigin | orderBy:'favTitle'; let i = index\" \r\n      [class.fav-saved]=\"item.isFavourite\"\r\n      class=\"\r\n        flex-group\r\n        flex-align-center\r\n        space-between\r\n        bg-aa-white-100\r\n        margin-bottom-0-75\r\n        min-width-24\r\n        max-width-24\r\n        padding-0-75\r\n        box-shadow \r\n        bd-solid \r\n        bd-grey-10 \r\n        bd-1\"\r\n      >\r\n      <section class=\"flex-group flex-start flex-align-center\">\r\n        <div \r\n          class=\"\r\n          width-3 \r\n          height-3 \r\n          flex-center \r\n          border-radius-50 \r\n          {{item.favColour}}\"\r\n        >\r\n          <h4 class=\"margin-0\">{{(item.favLabel.length>3)? (item.favLabel | slice:0:3)+'...':(item.favLabel)}}</h4>\r\n        </div>\r\n        <div>\r\n          <a (click)=\"onAnchorClick($event)\" class=\"text-decoration-none cursor-pointer\">\r\n            <h3 class=\"margin-0\">\r\n              {{(item.favTitle.length>27)? (item.favTitle | slice:0:27)+'...':(item.favTitle)}}\r\n            </h3>\r\n          </a>\r\n          <p class=\"small padding-top-0-25 margin-0\">\r\n            {{(item.favTextLineOne.length>45)? (item.favTextLineOne | slice:0:45)+'...':(item.favTextLineOne)}}\r\n          </p>\r\n          <p class=\"small margin-0\">\r\n            {{(item.favTextLineTwo.length>45)? (item.favTextLineTwo | slice:0:45)+'...':(item.favTextLineTwo)}}\r\n          </p>\r\n        </div>\r\n      </section>\r\n      <section class=\"flex-group flex-align-center fav-controls\">\r\n        <div class=\"flag au width-1 height-1 margin-0\"></div>\r\n        <button \r\n          *ngIf=\"!disableFavsStar\"\r\n          (click)=\"onFavClick(item)\" \r\n          class=\"btn-fav material-icons-outlined margin-0 margin-left-0-25\"\r\n          >\r\n        </button>\r\n      </section>\r\n    </div>\r\n  </section>\r\n</section>\r\n\r\n<!-- PORTRAIT -->\r\n<section class=\"aa-favs aa-favs-portrait\" *ngIf=\"showPortraitFavs\">\r\n  <h2 *ngIf=\"favsTarget.length\" class=\"width-100 flex-group flex-start flex-align-center\">\r\n    {{favsHeading}}\r\n    <span \r\n      class=\"\r\n      flex-group \r\n      flex-center \r\n      bg-aa-light-blue-15 \r\n      border-radius-50\r\n      width-1-25\r\n      height-1-25\r\n      margin-left-0-5\r\n      font-size-xsmall\"\r\n      >\r\n      <strong class=\"flex-group flex-center\">{{favsTarget.length}}</strong>\r\n    </span>\r\n  </h2>\r\n  <section class=\"flex-group flex-start\">\r\n    <div  \r\n      *ngFor=\"let item of favsTarget | orderBy:'favTitle'; let i = index\" \r\n      [class.fav-saved]=\"item.isFavourite\"\r\n      class=\"\r\n        position-relative\r\n        flex-group\r\n        flex-center\r\n        flex-column\r\n        margin-bottom-0-75\r\n        bg-aa-white-100\r\n        min-width-12\r\n        max-width-12\r\n        min-height-14\r\n        max-height-14\r\n        padding-1\r\n        box-shadow \r\n        bd-solid \r\n        bd-grey-10 \r\n        bd-1\"\r\n      >\r\n      <section \r\n        class=\"\r\n        flex-group \r\n        flex-align-center \r\n        position-absolute \r\n        top-0-5 \r\n        right-0-5 \r\n        margin-right-0\r\n        fav-controls\"\r\n      >\r\n        <div class=\"flag au width-1 height-1 margin-0\"></div>\r\n        <button \r\n          *ngIf=\"!disableFavsStar\"\r\n          (click)=\"onFavClick(item)\" \r\n          class=\"btn-fav material-icons-outlined margin-0 margin-left-0-25\"\r\n          >\r\n        </button>\r\n      </section>\r\n      <div \r\n        class=\"\r\n        flex-none \r\n        width-3 \r\n        height-3 \r\n        flex-center \r\n        border-radius-50 \r\n        margin-right-0\r\n        {{item.favColour}}\"\r\n        >\r\n        <h4 class=\"margin-0\">{{(item.favLabel.length>3)? (item.favLabel | slice:0:3)+'...':(item.favLabel)}}</h4>\r\n      </div>\r\n      <div class=\"margin-right-0 margin-top-0-75\">\r\n        <a (click)=\"onAnchorClick($event)\" class=\"text-decoration-none cursor-pointer\">\r\n          <h2 class=\"margin-0 margin-bottom-0-5 text-align-center\">\r\n            {{(item.favTitle.length>25)? (item.favTitle | slice:0:25)+'...':(item.favTitle)}}\r\n          </h2>\r\n        </a>\r\n        <p class=\"small margin-0 text-align-center\">\r\n          {{(item.favTextLineOne.length>23)? (item.favTextLineOne | slice:0:23)+'...':(item.favTextLineOne)}}\r\n        </p>\r\n        <p class=\"small margin-0 text-align-center\">\r\n          {{(item.favTextLineTwo.length>23)? (item.favTextLineTwo | slice:0:23)+'...':(item.favTextLineTwo)}}\r\n        </p>\r\n        <p class=\"small margin-0 text-align-center\">\r\n          {{(item.favTextLineThree.length>23)? (item.favTextLineThree | slice:0:23)+'...':(item.favTextLineThree)}}\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </section>\r\n \r\n  <hr *ngIf=\"favsTarget.length\" class=\"min-width-100 margin-bottom-0-75\" />\r\n\r\n  <section class=\"flex-group flex-start\">\r\n    <div  \r\n      *ngFor=\"let item of favsOrigin | orderBy:'favTitle'; let i = index\" \r\n      [class.fav-saved]=\"item.isFavourite\"\r\n      class=\"\r\n        position-relative\r\n        flex-group\r\n        flex-center\r\n        flex-column\r\n        margin-bottom-0-75\r\n        bg-aa-white-100\r\n        min-width-12\r\n        max-width-12\r\n        min-height-14\r\n        max-height-14\r\n        padding-1\r\n        box-shadow \r\n        bd-solid \r\n        bd-grey-10 \r\n        bd-1\"\r\n      >\r\n      <section \r\n        class=\"\r\n        flex-group \r\n        flex-align-center \r\n        position-absolute \r\n        top-0-5 \r\n        right-0-5 \r\n        margin-right-0\r\n        fav-controls\"\r\n      >\r\n        <div class=\"flag au width-1 height-1 margin-0\"></div>\r\n        <button \r\n        *ngIf=\"!disableFavsStar\"\r\n          (click)=\"onFavClick(item)\" \r\n          class=\"btn-fav material-icons-outlined margin-0 margin-left-0-25\"\r\n          >\r\n        </button>\r\n      </section>\r\n      <div \r\n        class=\"\r\n        flex-none \r\n        width-3 \r\n        height-3 \r\n        flex-center \r\n        border-radius-50 \r\n        margin-right-0\r\n        {{item.favColour}}\"\r\n        >\r\n        <h4 class=\"margin-0\">{{(item.favLabel.length>3)? (item.favLabel | slice:0:3)+'...':(item.favLabel)}}</h4>\r\n      </div>\r\n      <div class=\"margin-right-0 margin-top-0-75\">\r\n        <a (click)=\"onAnchorClick($event)\" class=\"text-decoration-none cursor-pointer\">\r\n          <h2 class=\"margin-0 margin-bottom-0-5 text-align-center\">\r\n            {{(item.favTitle.length>25)? (item.favTitle | slice:0:25)+'...':(item.favTitle)}}\r\n          </h2>\r\n        </a>\r\n        <p class=\"small margin-0 text-align-center\">\r\n          {{(item.favTextLineOne.length>23)? (item.favTextLineOne | slice:0:23)+'...':(item.favTextLineOne)}}\r\n        </p>\r\n        <p class=\"small margin-0 text-align-center\">\r\n          {{(item.favTextLineTwo.length>23)? (item.favTextLineTwo | slice:0:23)+'...':(item.favTextLineTwo)}}\r\n        </p>\r\n        <p class=\"small margin-0 text-align-center\">\r\n          {{(item.favTextLineThree.length>23)? (item.favTextLineThree | slice:0:23)+'...':(item.favTextLineThree)}}\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</section>" }]
    }], () => [], { showLandscapeFavs: [{
            type: Input
        }], showPortraitFavs: [{
            type: Input
        }], anchorIsClicked: [{
            type: Input
        }], disableFavsStar: [{
            type: Input
        }], toggleFavourite: [{
            type: Input
        }], favsHeading: [{
            type: Input
        }], clickAnchor: [{
            type: Input
        }], favLabel: [{
            type: Input
        }], favTitle: [{
            type: Input
        }], favTextLineOne: [{
            type: Input
        }], favTextLineTwo: [{
            type: Input
        }], favTextLineThree: [{
            type: Input
        }], favColour: [{
            type: Input
        }], favsOrigin: [{
            type: Input
        }], favsTarget: [{
            type: Input
        }], favsPortrait: [{
            type: Input
        }], isFavourite: [{
            type: Input
        }], anchorClick: [{
            type: Output
        }], favClick: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FavouritesComponent, { className: "FavouritesComponent", filePath: "lib\\widgets\\favourites\\favourites.component.ts", lineNumber: 19 }); })();

class FavouritesListComponent {
    onFavClick(event) {
        this.favClick.emit(event);
    }
    onAnchorClick(event) {
        this.anchorClick.emit(event);
    }
    constructor() {
        this.isFavourite = false;
        this.itemAnchorTitle = '';
        this.itemAnchor = '';
        this.itemDescription = '';
        this.text = 'Click me';
        this.favClick = new EventEmitter();
        this.anchorClick = new EventEmitter();
    }
    static { this.ɵfac = function FavouritesListComponent_Factory(t) { return new (t || FavouritesListComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FavouritesListComponent, selectors: [["aa-favourites-list"]], inputs: { isFavourite: "isFavourite", itemAnchorTitle: "itemAnchorTitle", itemAnchor: "itemAnchor", itemDescription: "itemDescription", text: "text" }, outputs: { favClick: "favClick", anchorClick: "anchorClick" }, decls: 7, vars: 5, consts: [[1, "flex-group", "width-control", "repeatable"], [1, "button-star", "icon-orange", "one-rem", 3, "click"], ["type", "button", 3, "title", "click"]], template: function FavouritesListComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "button", 1);
            i0.ɵɵlistener("click", function FavouritesListComponent_Template_button_click_1_listener($event) { return ctx.onFavClick($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "div")(3, "a", 2);
            i0.ɵɵlistener("click", function FavouritesListComponent_Template_a_click_3_listener($event) { return ctx.onAnchorClick($event); });
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(5, "div");
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵclassProp("selected", ctx.isFavourite);
            i0.ɵɵadvance(2);
            i0.ɵɵpropertyInterpolate("title", ctx.itemAnchorTitle);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.itemAnchor);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.itemDescription);
        } }, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FavouritesListComponent, [{
        type: Component,
        args: [{ selector: 'aa-favourites-list', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"flex-group width-control repeatable\">\r\n  <button (click)=\"onFavClick($event)\" class=\"button-star icon-orange one-rem\" [class.selected]=\"isFavourite\"></button>\r\n  <div><a (click)=\"onAnchorClick($event)\" title=\"{{itemAnchorTitle}}\" type=\"button\">{{itemAnchor}}</a></div>\r\n  <div>{{itemDescription}}</div>\r\n</div>" }]
    }], () => [], { isFavourite: [{
            type: Input
        }], itemAnchorTitle: [{
            type: Input
        }], itemAnchor: [{
            type: Input
        }], itemDescription: [{
            type: Input
        }], text: [{
            type: Input
        }], favClick: [{
            type: Output
        }], anchorClick: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FavouritesListComponent, { className: "FavouritesListComponent", filePath: "lib\\widgets\\favourites-list\\favourites-list.component.ts", lineNumber: 9 }); })();

function IconPickerComponent_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("for", ctx_r0.selectedIcon);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.labelName);
} }
function IconPickerComponent_article_41_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 26);
    i0.ɵɵlistener("click", function IconPickerComponent_article_41_div_1_Template_div_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r5); const icon_r3 = restoredCtx.$implicit; const ctx_r4 = i0.ɵɵnextContext(2); ctx_r4.selectIcon(icon_r3); return i0.ɵɵresetView(ctx_r4.showIcons = false); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const icon_r3 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", icon_r3, " ");
} }
function IconPickerComponent_article_41_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 24);
    i0.ɵɵtemplate(1, IconPickerComponent_article_41_div_1_Template, 2, 1, "div", 25);
    i0.ɵɵpipe(2, "iconFilter");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(2, 1, ctx_r1.icons, ctx_r1.searchIcon));
} }
class IconPickerComponent {
    constructor() {
        this.searchIcon = '';
        this.selectedIcon = '';
        this.selectedColor = 'aa-light-blue-100';
        this.showIcons = false;
        this.showLabel = false;
        this.labelName = '';
        this.icons = ['3d_rotation', 'ac_unit', 'access_alarm', 'access_alarms', 'access_time', 'accessibility', 'accessible', 'account_balance', 'account_balance_wallet', 'account_box', 'account_circle', 'adb', 'add', 'add_a_photo', 'add_alarm', 'add_alert', 'add_box', 'add_circle', 'add_circle_outline', 'add_location', 'add_shopping_cart', 'add_to_photos', 'add_to_queue', 'adjust', 'airline_seat_flat', 'airline_seat_flat_angled', 'airline_seat_individual_suite', 'airline_seat_legroom_extra', 'airline_seat_legroom_normal', 'airline_seat_legroom_reduced', 'airline_seat_recline_extra', 'airline_seat_recline_normal', 'airplanemode_active', 'airplanemode_inactive', 'airplay', 'airport_shuttle', 'alarm', 'alarm_add', 'alarm_off', 'alarm_on', 'album', 'all_inclusive', 'all_out', 'android', 'announcement', 'apps', 'archive', 'arrow_back', 'arrow_downward', 'arrow_drop_down', 'arrow_drop_down_circle', 'arrow_drop_up', 'arrow_forward', 'arrow_upward', 'art_track', 'aspect_ratio', 'assessment', 'assignment', 'assignment_ind', 'assignment_late', 'assignment_return', 'assignment_returned', 'assignment_turned_in', 'assistant', 'assistant_photo', 'attach_file', 'attach_money', 'attachment', 'audiotrack', 'autorenew', 'av_timer', 'backspace', 'backup', 'battery_alert', 'battery_charging_full', 'battery_full', 'battery_std', 'battery_unknown', 'beach_access', 'beenhere', 'block', 'bluetooth', 'bluetooth_audio', 'bluetooth_connected', 'bluetooth_disabled', 'bluetooth_searching', 'blur_circular', 'blur_linear', 'blur_off', 'blur_on', 'book', 'bookmark', 'bookmark_border', 'border_all', 'border_bottom', 'border_clear', 'border_color', 'border_horizontal', 'border_inner', 'border_left', 'border_outer', 'border_right', 'border_style', 'border_top', 'border_vertical', 'branding_watermark', 'brightness_1', 'brightness_2', 'brightness_3', 'brightness_4', 'brightness_5', 'brightness_6', 'brightness_7', 'brightness_auto', 'brightness_high', 'brightness_low', 'brightness_medium', 'broken_image', 'brush', 'bubble_chart', 'bug_report', 'build', 'burst_mode', 'business', 'business_center', 'cached', 'cake', 'call', 'call_end', 'call_made', 'call_merge', 'call_missed', 'call_missed_outgoing', 'call_received', 'call_split', 'call_to_action', 'camera', 'camera_alt', 'camera_enhance', 'camera_front', 'camera_rear', 'camera_roll', 'cancel', 'card_giftcard', 'card_membership', 'card_travel', 'casino', 'cast', 'cast_connected', 'center_focus_strong', 'center_focus_weak', 'change_history', 'chat', 'chat_bubble', 'chat_bubble_outline', 'check', 'check_box', 'check_box_outline_blank', 'check_circle', 'chevron_left', 'chevron_right', 'child_care', 'child_friendly', 'chrome_reader_mode', 'class', 'clear', 'clear_all', 'close', 'closed_caption', 'cloud', 'cloud_circle', 'cloud_done', 'cloud_download', 'cloud_off', 'cloud_queue', 'cloud_upload', 'code', 'collections', 'collections_bookmark', 'color_lens', 'colorize', 'comment', 'compare', 'compare_arrows', 'computer', 'confirmation_number', 'contact_mail', 'contact_phone', 'contacts', 'content_copy', 'content_cut', 'content_paste', 'control_point', 'control_point_duplicate', 'copyright', 'create', 'create_new_folder', 'credit_card', 'crop', 'crop_16_9', 'crop_3_2', 'crop_5_4', 'crop_7_5', 'crop_din', 'crop_free', 'crop_landscape', 'crop_original', 'crop_portrait', 'crop_rotate', 'crop_square', 'dashboard', 'data_usage', 'date_range', 'dehaze', 'delete', 'delete_forever', 'delete_sweep', 'description', 'desktop_mac', 'desktop_windows', 'details', 'developer_board', 'developer_mode', 'device_hub', 'devices', 'devices_other', 'dialer_sip', 'dialpad', 'directions', 'directions_bike', 'directions_boat', 'directions_bus', 'directions_car', 'directions_railway', 'directions_run', 'directions_subway', 'directions_transit', 'directions_walk', 'disc_full', 'dns', 'do_not_disturb', 'do_not_disturb_alt', 'do_not_disturb_off', 'do_not_disturb_on', 'dock', 'domain', 'done', 'done_all', 'donut_large', 'donut_small', 'drafts', 'drag_handle', 'drive_eta', 'dvr', 'edit', 'edit_location', 'eject', 'email', 'enhanced_encryption', 'equalizer', 'error', 'error_outline', 'euro_symbol', 'ev_station', 'event', 'event_available', 'event_busy', 'event_note', 'event_seat', 'exit_to_app', 'expand_less', 'expand_more', 'explicit', 'explore', 'exposure', 'exposure_neg_1', 'exposure_neg_2', 'exposure_plus_1', 'exposure_plus_2', 'exposure_zero', 'extension', 'face', 'fast_forward', 'fast_rewind', 'favorite', 'favorite_border', 'featured_play_list', 'featured_video', 'feedback', 'fiber_dvr', 'fiber_manual_record', 'fiber_new', 'fiber_pin', 'fiber_smart_record', 'file_download', 'file_upload', 'filter', 'filter_1', 'filter_2', 'filter_3', 'filter_4', 'filter_5', 'filter_6', 'filter_7', 'filter_8', 'filter_9', 'filter_9_plus', 'filter_b_and_w', 'filter_center_focus', 'filter_drama', 'filter_frames', 'filter_hdr', 'filter_list', 'filter_none', 'filter_tilt_shift', 'filter_vintage', 'find_in_page', 'find_replace', 'fingerprint', 'first_page', 'fitness_center', 'flag', 'flare', 'flash_auto', 'flash_off', 'flash_on', 'flight', 'flight_land', 'flight_takeoff', 'flip', 'flip_to_back', 'flip_to_front', 'folder', 'folder_open', 'folder_shared', 'folder_special', 'font_download', 'format_align_center', 'format_align_justify', 'format_align_left', 'format_align_right', 'format_bold', 'format_clear', 'format_color_fill', 'format_color_reset', 'format_color_text', 'format_indent_decrease', 'format_indent_increase', 'format_italic', 'format_line_spacing', 'format_list_bulleted', 'format_list_numbered', 'format_paint', 'format_quote', 'format_shapes', 'format_size', 'format_strikethrough', 'format_textdirection_l_to_r', 'format_textdirection_r_to_l', 'format_underlined', 'forum', 'forward', 'forward_10', 'forward_30', 'forward_5', 'free_breakfast', 'fullscreen', 'fullscreen_exit', 'functions', 'g_translate', 'gamepad', 'games', 'gavel', 'gesture', 'get_app', 'gif', 'golf_course', 'gps_fixed', 'gps_not_fixed', 'gps_off', 'grade', 'gradient', 'grain', 'graphic_eq', 'grid_off', 'grid_on', 'group', 'group_add', 'group_work', 'hd', 'hdr_off', 'hdr_on', 'hdr_strong', 'hdr_weak', 'headset', 'headset_mic', 'healing', 'hearing', 'help', 'help_outline', 'high_quality', 'highlight', 'highlight_off', 'history', 'home', 'hot_tub', 'hotel', 'hourglass_empty', 'hourglass_full', 'http', 'https', 'image', 'image_aspect_ratio', 'import_contacts', 'import_export', 'important_devices', 'inbox', 'indeterminate_check_box', 'info', 'info_outline', 'input', 'insert_chart', 'insert_comment', 'insert_drive_file', 'insert_emoticon', 'insert_invitation', 'insert_link', 'insert_photo', 'invert_colors', 'invert_colors_off', 'iso', 'keyboard', 'keyboard_arrow_down', 'keyboard_arrow_left', 'keyboard_arrow_right', 'keyboard_arrow_up', 'keyboard_backspace', 'keyboard_capslock', 'keyboard_hide', 'keyboard_return', 'keyboard_tab', 'keyboard_voice', 'kitchen', 'label', 'label_outline', 'landscape', 'language', 'laptop', 'laptop_chromebook', 'laptop_mac', 'laptop_windows', 'last_page', 'launch', 'layers', 'layers_clear', 'leak_add', 'leak_remove', 'lens', 'library_add', 'library_books', 'library_music', 'lightbulb_outline', 'line_style', 'line_weight', 'linear_scale', 'link', 'linked_camera', 'list', 'live_help', 'live_tv', 'local_activity', 'local_airport', 'local_atm', 'local_bar', 'local_cafe', 'local_car_wash', 'local_convenience_store', 'local_dining', 'local_drink', 'local_florist', 'local_gas_station', 'local_grocery_store', 'local_hospital', 'local_hotel', 'local_laundry_service', 'local_library', 'local_mall', 'local_movies', 'local_offer', 'local_parking', 'local_pharmacy', 'local_phone', 'local_pizza', 'local_play', 'local_post_office', 'local_printshop', 'local_see', 'local_shipping', 'local_taxi', 'location_city', 'location_disabled', 'location_off', 'location_on', 'location_searching', 'lock', 'lock_open', 'lock_outline', 'looks', 'looks_3', 'looks_4', 'looks_5', 'looks_6', 'looks_one', 'looks_two', 'loop', 'loupe', 'low_priority', 'loyalty', 'mail', 'mail_outline', 'map', 'markunread', 'markunread_mailbox', 'memory', 'menu', 'merge_type', 'message', 'mic', 'mic_none', 'mic_off', 'mms', 'mode_comment', 'mode_edit', 'monetization_on', 'money_off', 'monochrome_photos', 'mood', 'mood_bad', 'more', 'more_horiz', 'more_vert', 'motorcycle', 'mouse', 'move_to_inbox', 'movie', 'movie_creation', 'movie_filter', 'multiline_chart', 'music_note', 'music_video', 'my_location', 'nature', 'nature_people', 'navigate_before', 'navigate_next', 'navigation', 'near_me', 'network_cell', 'network_check', 'network_locked', 'network_wifi', 'new_releases', 'next_week', 'nfc', 'no_encryption', 'no_sim', 'not_interested', 'note', 'note_add', 'notifications', 'notifications_active', 'notifications_none', 'notifications_off', 'notifications_paused', 'offline_pin', 'ondemand_video', 'opacity', 'open_in_browser', 'open_in_new', 'open_with', 'pages', 'pageview', 'palette', 'pan_tool', 'panorama', 'panorama_fish_eye', 'panorama_horizontal', 'panorama_vertical', 'panorama_wide_angle', 'party_mode', 'pause', 'pause_circle_filled', 'pause_circle_outline', 'payment', 'people', 'people_outline', 'perm_camera_mic', 'perm_contact_calendar', 'perm_data_setting', 'perm_device_information', 'perm_identity', 'perm_media', 'perm_phone_msg', 'perm_scan_wifi', 'person', 'person_add', 'person_outline', 'person_pin', 'person_pin_circle', 'personal_video', 'pets', 'phone', 'phone_android', 'phone_bluetooth_speaker', 'phone_forwarded', 'phone_in_talk', 'phone_iphone', 'phone_locked', 'phone_missed', 'phone_paused', 'phonelink', 'phonelink_erase', 'phonelink_lock', 'phonelink_off', 'phonelink_ring', 'phonelink_setup', 'photo', 'photo_album', 'photo_camera', 'photo_filter', 'photo_library', 'photo_size_select_actual', 'photo_size_select_large', 'photo_size_select_small', 'picture_as_pdf', 'picture_in_picture', 'picture_in_picture_alt', 'pie_chart', 'pie_chart_outlined', 'pin_drop', 'place', 'play_arrow', 'play_circle_filled', 'play_circle_outline', 'play_for_work', 'playlist_add', 'playlist_add_check', 'playlist_play', 'plus_one', 'poll', 'polymer', 'pool', 'portable_wifi_off', 'portrait', 'power', 'power_input', 'power_settings_new', 'pregnant_woman', 'present_to_all', 'print', 'priority_high', 'public', 'publish', 'query_builder', 'question_answer', 'queue', 'queue_music', 'queue_play_next', 'radio', 'radio_button_checked', 'radio_button_unchecked', 'rate_review', 'receipt', 'recent_actors', 'record_voice_over', 'redeem', 'redo', 'refresh', 'remove', 'remove_circle', 'remove_circle_outline', 'remove_from_queue', 'remove_red_eye', 'remove_shopping_cart', 'reorder', 'repeat', 'repeat_one', 'replay', 'replay_10', 'replay_30', 'replay_5', 'reply', 'reply_all', 'report', 'report_problem', 'restaurant', 'restaurant_menu', 'restore', 'restore_page', 'ring_volume', 'room', 'room_service', 'rotate_90_degrees_ccw', 'rotate_left', 'rotate_right', 'rounded_corner', 'router', 'rowing', 'rss_feed', 'rv_hookup', 'satellite', 'save', 'scanner', 'schedule', 'school', 'screen_lock_landscape', 'screen_lock_portrait', 'screen_lock_rotation', 'screen_rotation', 'screen_share', 'sd_card', 'sd_storage', 'search', 'security', 'select_all', 'send', 'sentiment_dissatisfied', 'sentiment_neutral', 'sentiment_satisfied', 'sentiment_very_dissatisfied', 'sentiment_very_satisfied', 'settings', 'settings_applications', 'settings_backup_restore', 'settings_bluetooth', 'settings_brightness', 'settings_cell', 'settings_ethernet', 'settings_input_antenna', 'settings_input_component', 'settings_input_composite', 'settings_input_hdmi', 'settings_input_svideo', 'settings_overscan', 'settings_phone', 'settings_power', 'settings_remote', 'settings_system_daydream', 'settings_voice', 'share', 'shop', 'shop_two', 'shopping_basket', 'shopping_cart', 'short_text', 'show_chart', 'shuffle', 'signal_cellular_4_bar', 'signal_cellular_connected_no_internet_4_bar', 'signal_cellular_no_sim', 'signal_cellular_null', 'signal_cellular_off', 'signal_wifi_4_bar', 'signal_wifi_4_bar_lock', 'signal_wifi_off', 'sim_card', 'sim_card_alert', 'skip_next', 'skip_previous', 'slideshow', 'slow_motion_video', 'smartphone', 'smoke_free', 'smoking_rooms', 'sms', 'sms_failed', 'snooze', 'sort', 'sort_by_alpha', 'spa', 'space_bar', 'speaker', 'speaker_group', 'speaker_notes', 'speaker_notes_off', 'speaker_phone', 'spellcheck', 'star', 'star_border', 'star_half', 'stars', 'stay_current_landscape', 'stay_current_portrait', 'stay_primary_landscape', 'stay_primary_portrait', 'stop', 'stop_screen_share', 'storage', 'store', 'store_mall_directory', 'straighten', 'streetview', 'strikethrough_s', 'style', 'subdirectory_arrow_left', 'subdirectory_arrow_right', 'subject', 'subscriptions', 'subtitles', 'subway', 'supervisor_account', 'surround_sound', 'swap_calls', 'swap_horiz', 'swap_vert', 'swap_vertical_circle', 'switch_camera', 'switch_video', 'sync', 'sync_disabled', 'sync_problem', 'system_update', 'system_update_alt', 'tab', 'tab_unselected', 'tablet', 'tablet_android', 'tablet_mac', 'tag_faces', 'tap_and_play', 'terrain', 'text_fields', 'text_format', 'textsms', 'texture', 'theaters', 'thumb_down', 'thumb_up', 'thumbs_up_down', 'time_to_leave', 'timelapse', 'timeline', 'timer', 'timer_10', 'timer_3', 'timer_off', 'title', 'toc', 'today', 'toll', 'tonality', 'touch_app', 'toys', 'track_changes', 'traffic', 'train', 'tram', 'transfer_within_a_station', 'transform', 'translate', 'trending_down', 'trending_flat', 'trending_up', 'tune', 'turned_in', 'turned_in_not', 'tv', 'unarchive', 'undo', 'unfold_less', 'unfold_more', 'update', 'usb', 'verified_user', 'vertical_align_bottom', 'vertical_align_center', 'vertical_align_top', 'vibration', 'video_call', 'video_label', 'video_library', 'videocam', 'videocam_off', 'videogame_asset', 'view_agenda', 'view_array', 'view_carousel', 'view_column', 'view_comfy', 'view_compact', 'view_day', 'view_headline', 'view_list', 'view_module', 'view_quilt', 'view_stream', 'view_week', 'vignette', 'visibility', 'visibility_off', 'voice_chat', 'voicemail', 'volume_down', 'volume_mute', 'volume_off', 'volume_up', 'vpn_key', 'vpn_lock', 'wallpaper', 'warning', 'watch', 'watch_later', 'wb_auto', 'wb_cloudy', 'wb_incandescent', 'wb_iridescent', 'wb_sunny', 'wc', 'web', 'web_asset', 'weekend', 'whatshot', 'widgets', 'wifi', 'wifi_lock', 'wifi_tethering', 'work', 'wrap_text', 'youtube_searched_for', 'zoom_in', 'zoom_out', 'zoom_out_map'];
    }
    selectIcon(event) {
        this.selectedIcon = event;
    }
    selectColor(event) {
        this.selectedColor = event.target.value;
    }
    static { this.ɵfac = function IconPickerComponent_Factory(t) { return new (t || IconPickerComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: IconPickerComponent, selectors: [["aa-icon-picker"]], inputs: { searchIcon: "searchIcon", selectedIcon: "selectedIcon", selectedColor: "selectedColor", showIcons: "showIcons", showLabel: "showLabel", labelName: "labelName" }, decls: 42, vars: 9, consts: [[1, "aa-icon-picker", "margin-bottom-1"], [3, "for", 4, "ngIf"], [1, "aa-ip-filter", "flex-group", "flex-start", "flex-align-center"], [1, "field", "boxed"], ["placeholder", "Search for an icon", "type", "text", 1, "use-material-icon-picker", 3, "ngModel", "value", "name", "click", "ngModelChange"], [3, "change"], ["value", "aa-light-blue-100"], ["value", "aa-blue-100"], ["value", "aa-brown-100"], ["value", "aa-burgundy-100"], ["value", "aa-green-100"], ["value", "aa-grey-50"], ["value", "aa-grey-25"], ["value", "aa-grey-10"], ["value", "aa-grey-5"], ["value", "aa-lime-100"], ["value", "aa-ochre-100"], ["value", "aa-orange-100"], ["value", "aa-pink-100"], ["value", "aa-plum-100"], ["value", "aa-red-100"], ["value", "aa-blue-sky-100"], ["class", "aa-ip-results", 4, "ngIf"], [3, "for"], [1, "aa-ip-results"], ["class", "material-icons cursor-pointer", 3, "click", 4, "ngFor", "ngForOf"], [1, "material-icons", "cursor-pointer", 3, "click"]], template: function IconPickerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0);
            i0.ɵɵtemplate(1, IconPickerComponent_label_1_Template, 2, 2, "label", 1);
            i0.ɵɵelementStart(2, "article", 2)(3, "div");
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "div", 3)(6, "input", 4);
            i0.ɵɵlistener("click", function IconPickerComponent_Template_input_click_6_listener() { return ctx.showIcons = true; })("ngModelChange", function IconPickerComponent_Template_input_ngModelChange_6_listener($event) { return ctx.searchIcon = $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "div", 3)(8, "select", 5);
            i0.ɵɵlistener("change", function IconPickerComponent_Template_select_change_8_listener($event) { return ctx.selectColor($event); });
            i0.ɵɵelementStart(9, "option", 6);
            i0.ɵɵtext(10, "Blue light");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "option", 7);
            i0.ɵɵtext(12, "Blue");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "option", 8);
            i0.ɵɵtext(14, "Brown");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "option", 9);
            i0.ɵɵtext(16, "Burgundy");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "option", 10);
            i0.ɵɵtext(18, "Green");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "option", 11);
            i0.ɵɵtext(20, "Grey 50");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "option", 12);
            i0.ɵɵtext(22, "Grey 25");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "option", 13);
            i0.ɵɵtext(24, "Grey 10");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "option", 14);
            i0.ɵɵtext(26, "Grey 5");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "option", 15);
            i0.ɵɵtext(28, "Lime");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "option", 16);
            i0.ɵɵtext(30, "Ochre");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "option", 17);
            i0.ɵɵtext(32, "Orange");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "option", 18);
            i0.ɵɵtext(34, "Pink");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(35, "option", 19);
            i0.ɵɵtext(36, "Plum");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(37, "option", 20);
            i0.ɵɵtext(38, "Red");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(39, "option", 21);
            i0.ɵɵtext(40, "Sky blue");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵtemplate(41, IconPickerComponent_article_41_Template, 3, 4, "article", 22);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showLabel);
            i0.ɵɵadvance(2);
            i0.ɵɵclassMapInterpolate1("material-icons margin-right-0-5 ", ctx.selectedColor, "");
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.selectedIcon);
            i0.ɵɵadvance(2);
            i0.ɵɵpropertyInterpolate("value", ctx.selectedIcon);
            i0.ɵɵpropertyInterpolate("name", ctx.selectedIcon);
            i0.ɵɵproperty("ngModel", ctx.searchIcon);
            i0.ɵɵadvance(35);
            i0.ɵɵproperty("ngIf", ctx.showIcons);
        } }, dependencies: [i1.NgForOf, i1.NgIf, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel, IconFilterPipe], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IconPickerComponent, [{
        type: Component,
        args: [{ selector: 'aa-icon-picker', changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"aa-icon-picker margin-bottom-1\">\r\n    <label for=\"{{selectedIcon}}\" *ngIf=\"showLabel\">{{labelName}}</label>\r\n    <article class=\"aa-ip-filter flex-group flex-start flex-align-center\">\r\n      <div class=\"material-icons margin-right-0-5 {{selectedColor}}\">{{selectedIcon}}</div>\r\n      <div class=\"field boxed\">\r\n        <input \r\n          (click)=\"showIcons=true\" \r\n          [(ngModel)]=\"searchIcon\"\r\n          placeholder=\"Search for an icon\"\r\n          type=\"text\" \r\n          class=\"use-material-icon-picker\" \r\n          value=\"{{selectedIcon}}\" \r\n          name=\"{{selectedIcon}}\"\r\n        >\r\n      </div>\r\n      <div class=\"field boxed\">\r\n        <select (change)=\"selectColor($event)\">\r\n          <option value=\"aa-light-blue-100\">Blue light</option>\r\n          <option value=\"aa-blue-100\">Blue</option>\r\n          <option value=\"aa-brown-100\">Brown</option>\r\n          <option value=\"aa-burgundy-100\">Burgundy</option>\r\n          <option value=\"aa-green-100\">Green</option>\r\n          <option value=\"aa-grey-50\">Grey 50</option>\r\n          <option value=\"aa-grey-25\">Grey 25</option>\r\n          <option value=\"aa-grey-10\">Grey 10</option>\r\n          <option value=\"aa-grey-5\">Grey 5</option>\r\n          <option value=\"aa-lime-100\">Lime</option>\r\n          <option value=\"aa-ochre-100\">Ochre</option>\r\n          <option value=\"aa-orange-100\">Orange</option>\r\n          <option value=\"aa-pink-100\">Pink</option>\r\n          <option value=\"aa-plum-100\">Plum</option>\r\n          <option value=\"aa-red-100\">Red</option>\r\n          <option value=\"aa-blue-sky-100\">Sky blue</option>\r\n        </select>\r\n      </div>\r\n    </article>\r\n    <article *ngIf=\"showIcons\" class=\"aa-ip-results\">\r\n      <div \r\n        *ngFor=\"let icon of icons | iconFilter: searchIcon\" \r\n        (click)=\"selectIcon(icon); showIcons=false\" \r\n        class=\"material-icons cursor-pointer\">\r\n        {{icon}}\r\n      </div>\r\n    </article>\r\n  </section>" }]
    }], () => [], { searchIcon: [{
            type: Input
        }], selectedIcon: [{
            type: Input
        }], selectedColor: [{
            type: Input
        }], showIcons: [{
            type: Input
        }], showLabel: [{
            type: Input
        }], labelName: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(IconPickerComponent, { className: "IconPickerComponent", filePath: "lib\\widgets\\icon-picker\\icon-picker.component.ts", lineNumber: 9 }); })();

const _c0$d = [[["", "custom-header", ""]], [["", "custom-content", ""]], [["", "custom-footer", ""]]];
const _c1$b = (a0, a1) => ({ "width": a0, "height": a1 });
const _c2$9 = () => ({ "opacity": "1" });
const _c3$6 = () => ({});
const _c4$3 = a0 => ({ "border-radius-0-5": a0 });
const _c5$2 = a0 => ({ "border-bottom": a0 });
const _c6$2 = ["[custom-header]", "[custom-content]", "[custom-footer]"];
class InfoPanelComponent {
    constructor() {
        this.panelStatus = '';
        this.preventOpacity = false;
        this.removeHeaderBorder = false;
        this.roundedCorners = false;
    }
    static { this.ɵfac = function InfoPanelComponent_Factory(t) { return new (t || InfoPanelComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InfoPanelComponent, selectors: [["aa-info-panel"]], inputs: { panelWidth: "panelWidth", panelHeight: "panelHeight", panelStatus: "panelStatus", preventOpacity: "preventOpacity", removeHeaderBorder: "removeHeaderBorder", roundedCorners: "roundedCorners" }, ngContentSelectors: _c6$2, decls: 9, vars: 16, consts: [[3, "ngStyle"], [1, "foreground", 3, "ngStyle", "ngClass"], [1, "info-panel-header", "padding-1", 3, "ngStyle"], [1, "info-panel-content", "padding-1"], [1, "info-panel-footer"], [1, "background"]], template: function InfoPanelComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0$d);
            i0.ɵɵelementStart(0, "section", 0)(1, "div", 1)(2, "div", 2);
            i0.ɵɵprojection(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 3);
            i0.ɵɵprojection(5, 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 4);
            i0.ɵɵprojection(7, 2);
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(8, "div", 5);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassMapInterpolate1("info-panel ", ctx.panelStatus, "");
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(7, _c1$b, ctx.panelWidth, ctx.panelHeight));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngStyle", ctx.preventOpacity ? i0.ɵɵpureFunction0(10, _c2$9) : i0.ɵɵpureFunction0(11, _c3$6))("ngClass", i0.ɵɵpureFunction1(12, _c4$3, ctx.roundedCorners));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(14, _c5$2, ctx.removeHeaderBorder ? "none" : "inherit"));
        } }, dependencies: [i1.NgClass, i1.NgStyle], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InfoPanelComponent, [{
        type: Component,
        args: [{ selector: 'aa-info-panel', changeDetection: ChangeDetectionStrategy.OnPush, template: "<section\r\n  class=\"info-panel {{panelStatus}}\"\r\n  [ngStyle]=\"{\r\n    'width' : panelWidth,\r\n    'height' : panelHeight\r\n  }\"\r\n>\r\n  <div\r\n    class=\"foreground\"\r\n    [ngStyle]=\"preventOpacity ? {'opacity':'1'} : {}\"\r\n    [ngClass]=\"{'border-radius-0-5' : roundedCorners}\"\r\n  >\r\n    <div\r\n      class=\"info-panel-header padding-1\"\r\n      [ngStyle]=\"{ 'border-bottom': removeHeaderBorder ? 'none' : 'inherit' }\"\r\n    >\r\n      <ng-content select=\"[custom-header]\"></ng-content>\r\n    </div>\r\n    <div class=\"info-panel-content padding-1\">\r\n      <ng-content select=\"[custom-content]\"></ng-content>\r\n    </div>\r\n    <div class=\"info-panel-footer\">\r\n      <ng-content select=\"[custom-footer]\"></ng-content>\r\n    </div>\r\n  </div>\r\n  <div class=\"background\"></div>\r\n</section>\r\n" }]
    }], () => [], { panelWidth: [{
            type: Input
        }], panelHeight: [{
            type: Input
        }], panelStatus: [{
            type: Input
        }], preventOpacity: [{
            type: Input
        }], removeHeaderBorder: [{
            type: Input
        }], roundedCorners: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InfoPanelComponent, { className: "InfoPanelComponent", filePath: "lib\\widgets\\info-panel\\info-panel.component.ts", lineNumber: 9 }); })();

const _c0$c = (a0, a1) => ({ "width": a0, "height": a1 });
const _c1$a = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) => ({ "approved-forward": a0, "pending-forward": a1, "rejected-forward": a2, "withdrawn-forward": a3, "returned-forward": a4, "abandoned-forward": a5, "draft-forward": a6, "withdrawn-pending-forward": a7, "reset-all": a8, "full-width": a9 });
const _c2$8 = ["*"];
class InfoPanelStackedComponent {
    constructor() {
        this.approvedForward = false;
        this.pendingForward = false;
        this.rejectedForward = false;
        this.withdrawnForward = false;
        this.returnedForward = false;
        this.abandonedForward = false;
        this.draftForward = false;
        this.withdrawalPendingForward = false;
        this.resetAll = false;
        this.fullWidth = false;
    }
    static { this.ɵfac = function InfoPanelStackedComponent_Factory(t) { return new (t || InfoPanelStackedComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InfoPanelStackedComponent, selectors: [["aa-info-panel-stacked"]], inputs: { approvedForward: "approvedForward", pendingForward: "pendingForward", rejectedForward: "rejectedForward", withdrawnForward: "withdrawnForward", returnedForward: "returnedForward", abandonedForward: "abandonedForward", draftForward: "draftForward", withdrawalPendingForward: "withdrawalPendingForward", resetAll: "resetAll", wrapperWidth: "wrapperWidth", wrapperHeight: "wrapperHeight", fullWidth: "fullWidth" }, ngContentSelectors: _c2$8, decls: 2, vars: 16, consts: [[1, "info-panel-stacked", 3, "ngStyle", "ngClass"]], template: function InfoPanelStackedComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "section", 0);
            i0.ɵɵprojection(1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(2, _c0$c, ctx.wrapperWidth, ctx.wrapperHeight))("ngClass", i0.ɵɵpureFunctionV(5, _c1$a, [ctx.approvedForward, ctx.pendingForward, ctx.rejectedForward, ctx.withdrawnForward, ctx.returnedForward, ctx.abandonedForward, ctx.draftForward, ctx.withdrawalPendingForward, ctx.resetAll, ctx.fullWidth]));
        } }, dependencies: [i1.NgClass, i1.NgStyle], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InfoPanelStackedComponent, [{
        type: Component,
        args: [{ selector: 'aa-info-panel-stacked', changeDetection: ChangeDetectionStrategy.OnPush, template: "<section \r\n  class=\"info-panel-stacked\"\r\n  [ngStyle]=\"{\r\n    'width' : wrapperWidth, \r\n    'height' : wrapperHeight\r\n  }\"\r\n  [ngClass]=\"{\r\n    'approved-forward' : approvedForward,\r\n    'pending-forward' : pendingForward,\r\n    'rejected-forward' : rejectedForward,\r\n    'withdrawn-forward' : withdrawnForward,\r\n    'returned-forward' : returnedForward,\r\n    'abandoned-forward' : abandonedForward,\r\n    'draft-forward' : draftForward,\r\n    'withdrawn-pending-forward' : withdrawalPendingForward,\r\n    'reset-all' : resetAll,\r\n    'full-width' : fullWidth\r\n  }\"\r\n>\r\n  <ng-content></ng-content>\r\n</section>\r\n" }]
    }], () => [], { approvedForward: [{
            type: Input
        }], pendingForward: [{
            type: Input
        }], rejectedForward: [{
            type: Input
        }], withdrawnForward: [{
            type: Input
        }], returnedForward: [{
            type: Input
        }], abandonedForward: [{
            type: Input
        }], draftForward: [{
            type: Input
        }], withdrawalPendingForward: [{
            type: Input
        }], resetAll: [{
            type: Input
        }], wrapperWidth: [{
            type: Input
        }], wrapperHeight: [{
            type: Input
        }], fullWidth: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InfoPanelStackedComponent, { className: "InfoPanelStackedComponent", filePath: "lib\\widgets\\info-panel-stacked\\info-panel-stacked.component.ts", lineNumber: 9 }); })();

function ModalComponent_section_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 5)(1, "h2", 6);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.heading);
} }
const _c0$b = [[["", "content-custom", ""]], "*"];
const _c1$9 = (a0, a1, a2, a3) => ({ "aa-green": a0, "aa-orange": a1, "aa-red": a2, "aa-blue": a3 });
const _c2$7 = (a0, a1, a2, a3, a4, a5) => ({ "top": a0, "right": a1, "left": a2, "min-width": a3, "max-width": a4, "z-index": a5 });
const _c3$5 = ["[content-custom]", "*"];
class ModalComponent {
    constructor() {
        this.heading = '';
        this.message = '';
        this.green = false;
        this.orange = false;
        this.red = false;
        this.blue = false;
        this.zIndex = 0;
        this.hideHeader = 0;
    }
    static { this.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ModalComponent, selectors: [["aa-modal"]], inputs: { heading: "heading", message: "message", topPos: "topPos", rightPos: "rightPos", leftPos: "leftPos", minWidth: "minWidth", maxWidth: "maxWidth", green: "green", orange: "orange", red: "red", blue: "blue", zIndex: "zIndex", hideHeader: "hideHeader" }, ngContentSelectors: _c3$5, decls: 8, vars: 16, consts: [[1, "aa-modal"], [1, "aa-modal-container", 3, "ngClass", "ngStyle"], ["class", "aa-modal-header", 4, "ngIf"], [1, "aa-modal-content"], [1, "aa-modal-footer", "flex-group", "flex-center"], [1, "aa-modal-header"], [1, "boxed", "align-center"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0$b);
            i0.ɵɵelementStart(0, "article", 0)(1, "div", 1);
            i0.ɵɵtemplate(2, ModalComponent_section_2_Template, 3, 1, "section", 2);
            i0.ɵɵelementStart(3, "section", 3);
            i0.ɵɵtext(4);
            i0.ɵɵprojection(5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "section", 4);
            i0.ɵɵprojection(7, 1);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction4(4, _c1$9, ctx.green, ctx.orange, ctx.red, ctx.blue))("ngStyle", i0.ɵɵpureFunction6(9, _c2$7, ctx.topPos, ctx.rightPos, ctx.leftPos, ctx.minWidth, ctx.maxWidth, ctx.zIndex));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.hideHeader);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.message, " ");
        } }, dependencies: [i1.NgClass, i1.NgIf, i1.NgStyle], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModalComponent, [{
        type: Component,
        args: [{ selector: 'aa-modal', changeDetection: ChangeDetectionStrategy.OnPush, template: "<article class=\"aa-modal\">\r\n  <div \r\n    class=\"aa-modal-container\" \r\n    [ngClass]=\"{'aa-green' : green, 'aa-orange' : orange, 'aa-red' : red, 'aa-blue' : blue}\"\r\n    [ngStyle]=\"{\r\n      'top' : topPos,\r\n      'right' : rightPos,\r\n      'left' : leftPos,\r\n      'min-width' : minWidth,\r\n      'max-width' : maxWidth,\r\n      'z-index' : zIndex\r\n    }\"\r\n  >\r\n    <section *ngIf=\"!hideHeader\" class=\"aa-modal-header\">\r\n      <h2 class=\"boxed align-center\">{{heading}}</h2>\r\n    </section>\r\n    <section class=\"aa-modal-content\">\r\n      {{message}}\r\n      <ng-content select=\"[content-custom]\"></ng-content>\r\n    </section>\r\n    <section class=\"aa-modal-footer flex-group flex-center\">\r\n        <ng-content></ng-content>\r\n    </section>\r\n  </div>\r\n</article>\r\n" }]
    }], () => [], { heading: [{
            type: Input
        }], message: [{
            type: Input
        }], topPos: [{
            type: Input
        }], rightPos: [{
            type: Input
        }], leftPos: [{
            type: Input
        }], minWidth: [{
            type: Input
        }], maxWidth: [{
            type: Input
        }], green: [{
            type: Input
        }], orange: [{
            type: Input
        }], red: [{
            type: Input
        }], blue: [{
            type: Input
        }], zIndex: [{
            type: Input
        }], hideHeader: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ModalComponent, { className: "ModalComponent", filePath: "lib\\widgets\\modal\\modal.component.ts", lineNumber: 9 }); })();

const _c0$a = (a0, a1, a2, a3) => ({ "green": a0, "orange": a1, "red": a2, "blue": a3 });
const _c1$8 = (a0, a1, a2, a3, a4, a5) => ({ "top": a0, "right": a1, "left": a2, "min-width": a3, "max-width": a4, "z-index": a5 });
const _c2$6 = ["*"];
class ModalDialogComponent {
    constructor() {
        this.heading = '';
        this.message = '';
        this.green = false;
        this.orange = false;
        this.red = false;
        this.blue = false;
        this.zIndex = 0;
        this.closeMeEvent = new EventEmitter();
        this.confirmEvent = new EventEmitter();
    }
    ngOnInit() {
        console.log('Modal init');
    }
    closeMe() {
        this.closeMeEvent.emit();
    }
    confirm() {
        this.confirmEvent.emit();
    }
    ngOnDestroy() {
        console.log(' Modal destroyed');
    }
    static { this.ɵfac = function ModalDialogComponent_Factory(t) { return new (t || ModalDialogComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ModalDialogComponent, selectors: [["aa-modal-dialog"]], inputs: { heading: "heading", message: "message", topPos: "topPos", rightPos: "rightPos", leftPos: "leftPos", minWidth: "minWidth", maxWidth: "maxWidth", green: "green", orange: "orange", red: "red", blue: "blue", zIndex: "zIndex" }, outputs: { closeMeEvent: "closeMeEvent", confirmEvent: "confirmEvent" }, ngContentSelectors: _c2$6, decls: 13, vars: 16, consts: [[1, "aa-modal"], [1, "aa-modal-container", 3, "ngClass", "ngStyle"], [1, "aa-modal-header"], [1, "boxed", "align-center"], [1, "aa-modal-content"], [1, "aa-modal-footer", "flex-group", "flex-center"], [1, "cancel", 3, "click"], [1, "primary", 3, "click"]], template: function ModalDialogComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "article", 0)(1, "div", 1)(2, "section", 2)(3, "h2", 3);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(5, "section", 4);
            i0.ɵɵtext(6);
            i0.ɵɵprojection(7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "section", 5)(9, "button", 6);
            i0.ɵɵlistener("click", function ModalDialogComponent_Template_button_click_9_listener() { return ctx.closeMe(); });
            i0.ɵɵtext(10, "Close");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "button", 7);
            i0.ɵɵlistener("click", function ModalDialogComponent_Template_button_click_11_listener() { return ctx.confirm(); });
            i0.ɵɵtext(12, "Confirm");
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction4(4, _c0$a, ctx.green, ctx.orange, ctx.red, ctx.blue))("ngStyle", i0.ɵɵpureFunction6(9, _c1$8, ctx.topPos, ctx.rightPos, ctx.leftPos, ctx.minWidth, ctx.maxWidth, ctx.zIndex));
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.heading);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.message, " ");
        } }, dependencies: [i1.NgClass, i1.NgStyle], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModalDialogComponent, [{
        type: Component,
        args: [{ selector: 'aa-modal-dialog', changeDetection: ChangeDetectionStrategy.OnPush, template: "<article class=\"aa-modal\">\r\n    <div \r\n      class=\"aa-modal-container\" \r\n      [ngClass]=\"{'green':green, 'orange':orange, 'red':red, 'blue':blue}\"\r\n      [ngStyle]=\"{\r\n        'top' : topPos,\r\n        'right' : rightPos,\r\n        'left' : leftPos,\r\n        'min-width' : minWidth,\r\n        'max-width' : maxWidth,\r\n        'z-index' : zIndex\r\n      }\"\r\n    >\r\n      <section class=\"aa-modal-header\">\r\n        <h2 class=\"boxed align-center\">{{heading}}</h2>\r\n      </section>\r\n      <section class=\"aa-modal-content\">\r\n        {{message}}\r\n        <ng-content></ng-content>\r\n      </section>\r\n      <section class=\"aa-modal-footer flex-group flex-center\">\r\n        <button (click)=\"closeMe()\" class=\"cancel\">Close</button>\r\n        <button (click)=\"confirm()\" class=\"primary\">Confirm</button>\r\n      </section>\r\n    </div>\r\n  </article>" }]
    }], () => [], { heading: [{
            type: Input
        }], message: [{
            type: Input
        }], topPos: [{
            type: Input
        }], rightPos: [{
            type: Input
        }], leftPos: [{
            type: Input
        }], minWidth: [{
            type: Input
        }], maxWidth: [{
            type: Input
        }], green: [{
            type: Input
        }], orange: [{
            type: Input
        }], red: [{
            type: Input
        }], blue: [{
            type: Input
        }], zIndex: [{
            type: Input
        }], closeMeEvent: [{
            type: Output
        }], confirmEvent: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ModalDialogComponent, { className: "ModalDialogComponent", filePath: "lib\\widgets\\modal-dialog\\modal-dialog.component.ts", lineNumber: 9 }); })();

const _c0$9 = a0 => ({ "z-index": a0 });
const _c1$7 = (a0, a1, a2, a3, a4, a5) => ({ "min-width": a0, "max-width": a1, "top": a2, "right": a3, "bottom": a4, "left": a5 });
function OverlayComponent_article_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 1)(1, "div", 2);
    i0.ɵɵprojection(2);
    i0.ɵɵprojection(3, 1);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c0$9, ctx_r0.zIndex));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction6(4, _c1$7, ctx_r0.minWidth, ctx_r0.maxWidth, ctx_r0.topPos, ctx_r0.rightPos, ctx_r0.bottomPos, ctx_r0.leftPos));
} }
const _c2$5 = [[["", "overlay-header", ""]], [["", "overlay-content", ""]]];
const _c3$4 = ["[overlay-header]", "[overlay-content]"];
class OverlayComponent {
    constructor() {
        this.zIndex = 0;
        this.showOverlay = false;
    }
    static { this.ɵfac = function OverlayComponent_Factory(t) { return new (t || OverlayComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OverlayComponent, selectors: [["aa-overlay"]], inputs: { zIndex: "zIndex", showOverlay: "showOverlay", topPos: "topPos", rightPos: "rightPos", bottomPos: "bottomPos", leftPos: "leftPos", minWidth: "minWidth", maxWidth: "maxWidth" }, ngContentSelectors: _c3$4, decls: 1, vars: 1, consts: [["class", "aa-overlay flex-center", 3, "ngStyle", 4, "ngIf"], [1, "aa-overlay", "flex-center", 3, "ngStyle"], [1, "aa-overlay-container", 3, "ngStyle"]], template: function OverlayComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c2$5);
            i0.ɵɵtemplate(0, OverlayComponent_article_0_Template, 4, 11, "article", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.showOverlay);
        } }, dependencies: [i1.NgIf, i1.NgStyle], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OverlayComponent, [{
        type: Component,
        args: [{ selector: 'aa-overlay', changeDetection: ChangeDetectionStrategy.OnPush, template: "<article \r\n  class=\"aa-overlay flex-center\" \r\n  *ngIf=\"showOverlay\" \r\n  [ngStyle]=\"{\r\n    'z-index' : zIndex\r\n  }\">\r\n  <div \r\n    class=\"aa-overlay-container\" \r\n    [ngStyle]=\"{\r\n      'min-width' : minWidth,\r\n      'max-width' : maxWidth,\r\n      'top' : topPos,\r\n      'right' : rightPos,\r\n      'bottom' : bottomPos,\r\n      'left' : leftPos\r\n    }\"\r\n    >\r\n    <ng-content select=\"[overlay-header]\"></ng-content>\r\n    <ng-content select=\"[overlay-content]\"></ng-content>\r\n  </div>\r\n</article>" }]
    }], () => [], { zIndex: [{
            type: Input
        }], showOverlay: [{
            type: Input
        }], topPos: [{
            type: Input
        }], rightPos: [{
            type: Input
        }], bottomPos: [{
            type: Input
        }], leftPos: [{
            type: Input
        }], minWidth: [{
            type: Input
        }], maxWidth: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(OverlayComponent, { className: "OverlayComponent", filePath: "lib\\widgets\\overlay\\overlay.component.ts", lineNumber: 9 }); })();

const _c0$8 = [[["", "call-to-action", ""]], [["", "custom-content", ""]]];
const _c1$6 = (a0, a1) => ({ "show-popover": a0, "btn-small": a1 });
const _c2$4 = a0 => ({ "z-index": a0 });
const _c3$3 = a0 => ({ "label-hidden": a0 });
const _c4$2 = a0 => ({ "top": a0, "bottom": "unset", "transform": "rotate(180deg)" });
const _c5$1 = () => ({});
const _c6$1 = (a0, a1, a2, a3, a4) => ({ "top": a0, "right": a1, "bottom": a2, "left": a3, "width": a4 });
const _c7$1 = ["[call-to-action]", "[custom-content]"];
class PopoverComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.showPopover = false; // now exposed as api and not property - more flexible
        this.buttonClass = '';
        this.hideLabel = false;
        this.btnSmall = false;
        this.popoverTop = false;
        this.zIndex = 0;
        this.popoverVisibilityChanged = new EventEmitter();
    }
    onClick(targetElement) {
        const clickedInside = this.elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.showPopover = false;
            this.popoverVisibilityChanged.emit(this.showPopover);
        }
    }
    open() {
        this.showPopover = true;
        this.popoverVisibilityChanged.emit(this.showPopover);
    }
    close() {
        this.showPopover = false;
        this.popoverVisibilityChanged.emit(this.showPopover);
    }
    changeVisibility() {
        this.showPopover = !this.showPopover;
        this.popoverVisibilityChanged.emit(this.showPopover);
    }
    ngOnInit() {
        this.popoverVisibilityChanged.emit(this.showPopover);
    }
    static { this.ɵfac = function PopoverComponent_Factory(t) { return new (t || PopoverComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PopoverComponent, selectors: [["aa-popover"]], hostBindings: function PopoverComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function PopoverComponent_click_HostBindingHandler($event) { return ctx.onClick($event.target); }, false, i0.ɵɵresolveDocument);
        } }, inputs: { buttonClass: "buttonClass", leftPos: "leftPos", topPos: "topPos", bottomPos: "bottomPos", rightPos: "rightPos", width: "width", hideLabel: "hideLabel", btnSmall: "btnSmall", popoverTop: "popoverTop", arrowPos: "arrowPos", zIndex: "zIndex" }, outputs: { popoverVisibilityChanged: "popoverVisibilityChanged" }, ngContentSelectors: _c7$1, decls: 6, vars: 21, consts: [[1, "aa-popover", 3, "ngClass", "ngStyle"], [1, "aa-popover-header", 3, "ngClass", "click"], [1, "arrow", 3, "ngStyle"], [1, "aa-popover-content", "feature-box", 3, "ngStyle"]], template: function PopoverComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0$8);
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵlistener("click", function PopoverComponent_Template_div_click_1_listener() { return ctx.changeVisibility(); });
            i0.ɵɵprojection(2);
            i0.ɵɵelement(3, "div", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 3);
            i0.ɵɵprojection(5, 1);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(5, _c1$6, ctx.showPopover, ctx.btnSmall))("ngStyle", i0.ɵɵpureFunction1(8, _c2$4, ctx.showPopover ? ctx.zIndex : ""));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(10, _c3$3, ctx.hideLabel));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngStyle", ctx.popoverTop ? i0.ɵɵpureFunction1(12, _c4$2, ctx.arrowPos) : i0.ɵɵpureFunction0(14, _c5$1));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction5(15, _c6$1, ctx.topPos, ctx.rightPos, ctx.bottomPos, ctx.leftPos, ctx.width));
        } }, dependencies: [i1.NgClass, i1.NgStyle] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PopoverComponent, [{
        type: Component,
        args: [{ selector: 'aa-popover', template: "<div\r\n  class=\"aa-popover\"\r\n  [ngClass]=\"{\r\n  'show-popover' : showPopover,\r\n  'btn-small' : btnSmall\r\n  }\"\r\n  [ngStyle]=\"{\r\n    'z-index' : showPopover ? zIndex : ''\r\n  }\"\r\n  >\r\n  <div class=\"aa-popover-header\" (click)=\"changeVisibility()\" [ngClass]=\"{'label-hidden' : hideLabel}\">\r\n    <ng-content select=\"[call-to-action]\"></ng-content>\r\n    <div\r\n      class=\"arrow\"\r\n      [ngStyle]=\"popoverTop ? {\r\n        'top' : arrowPos,\r\n        'bottom' : 'unset',\r\n        'transform' : 'rotate(180deg)'\r\n      } : {}\"\r\n    ></div>\r\n  </div>\r\n  <div\r\n    class=\"aa-popover-content feature-box\"\r\n    [ngStyle]=\"{\r\n    'top': topPos,\r\n    'right': rightPos, \r\n    'bottom': bottomPos,\r\n    'left': leftPos, \r\n    'width': width\r\n  }\">\r\n    <ng-content select=\"[custom-content]\"></ng-content>\r\n  </div>\r\n</div>\r\n" }]
    }], () => [{ type: i0.ElementRef }], { buttonClass: [{
            type: Input
        }], leftPos: [{
            type: Input
        }], topPos: [{
            type: Input
        }], bottomPos: [{
            type: Input
        }], rightPos: [{
            type: Input
        }], width: [{
            type: Input
        }], hideLabel: [{
            type: Input
        }], btnSmall: [{
            type: Input
        }], popoverTop: [{
            type: Input
        }], arrowPos: [{
            type: Input
        }], zIndex: [{
            type: Input
        }], popoverVisibilityChanged: [{
            type: Output
        }], onClick: [{
            type: HostListener,
            args: ['document:click', ['$event.target']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PopoverComponent, { className: "PopoverComponent", filePath: "lib\\widgets\\popover\\popover.component.ts", lineNumber: 8 }); })();

const _c0$7 = a0 => ({ "display-block": a0 });
const _c1$5 = a0 => ({ "vertical-display": a0 });
const _c2$3 = ["*"];
class SummaryTopComponent {
    constructor() {
        this.displayBlock = false;
        this.verticalDisplay = false;
    }
    static { this.ɵfac = function SummaryTopComponent_Factory(t) { return new (t || SummaryTopComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SummaryTopComponent, selectors: [["aa-summary-top"]], inputs: { displayBlock: "displayBlock", verticalDisplay: "verticalDisplay" }, ngContentSelectors: _c2$3, decls: 3, vars: 6, consts: [[1, "dl-container", 3, "ngClass"], [1, "flex-align-center", 3, "ngClass"]], template: function SummaryTopComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "article", 0)(1, "dl", 1);
            i0.ɵɵprojection(2);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c0$7, ctx.displayBlock));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c1$5, ctx.verticalDisplay));
        } }, dependencies: [i1.NgClass], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SummaryTopComponent, [{
        type: Component,
        args: [{ selector: 'aa-summary-top', changeDetection: ChangeDetectionStrategy.OnPush, template: "<article class=\"dl-container\" [ngClass]=\"{'display-block' : displayBlock}\">\r\n  <dl class=\"flex-align-center\" [ngClass]=\"{ 'vertical-display': verticalDisplay }\">\r\n   <ng-content></ng-content>\r\n  </dl>\r\n</article>\r\n" }]
    }], () => [], { displayBlock: [{
            type: Input
        }], verticalDisplay: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SummaryTopComponent, { className: "SummaryTopComponent", filePath: "lib\\widgets\\summary-top\\summary-top.component.ts", lineNumber: 9 }); })();

const _c0$6 = (a0, a1, a2) => ({ "highlight": a0, "truncate-text": a1, "divider": a2 });
const _c1$4 = a0 => ({ "max-width": a0 });
class SummaryTopListComponent {
    constructor() {
        this.itemTitle = '';
        this.itemDescription = '';
        this.highlight = false;
        this.truncate = false;
        this.divider = false;
    }
    static { this.ɵfac = function SummaryTopListComponent_Factory(t) { return new (t || SummaryTopListComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SummaryTopListComponent, selectors: [["aa-summary-top-list"]], inputs: { itemTitle: "itemTitle", itemDescription: "itemDescription", highlight: "highlight", truncate: "truncate", divider: "divider", maxWidth: "maxWidth" }, decls: 5, vars: 15, consts: [[1, "dl-repeater", 3, "ngClass"], [3, "title", "ngStyle"]], template: function SummaryTopListComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "dt", 1);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "dd", 1);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(7, _c0$6, ctx.highlight, ctx.truncate, ctx.divider));
            i0.ɵɵadvance();
            i0.ɵɵpropertyInterpolate("title", ctx.itemTitle);
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(11, _c1$4, ctx.maxWidth));
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.itemTitle);
            i0.ɵɵadvance();
            i0.ɵɵpropertyInterpolate("title", ctx.itemDescription);
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(13, _c1$4, ctx.maxWidth));
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.itemDescription);
        } }, dependencies: [i1.NgClass, i1.NgStyle], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SummaryTopListComponent, [{
        type: Component,
        args: [{ selector: 'aa-summary-top-list', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div \r\n  class=\"dl-repeater\" \r\n  [ngClass]=\"{\r\n    'highlight' : highlight, \r\n    'truncate-text' : truncate,\r\n    'divider' : divider\r\n  }\"\r\n>\r\n  <dt title=\"{{itemTitle}}\" [ngStyle]=\"{'max-width' : maxWidth}\">{{itemTitle}}</dt>\r\n  <dd title=\"{{itemDescription}}\" [ngStyle]=\"{'max-width' : maxWidth}\">{{itemDescription}}</dd>\r\n</div>\r\n" }]
    }], () => [], { itemTitle: [{
            type: Input
        }], itemDescription: [{
            type: Input
        }], highlight: [{
            type: Input
        }], truncate: [{
            type: Input
        }], divider: [{
            type: Input
        }], maxWidth: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SummaryTopListComponent, { className: "SummaryTopListComponent", filePath: "lib\\widgets\\summary-top-list\\summary-top-list.component.ts", lineNumber: 9 }); })();

const _c0$5 = a0 => ({ "z-index": a0 });
const _c1$3 = ["*"];
class ToastrComponent {
    constructor() {
        this.zIndex = 0;
    }
    static { this.ɵfac = function ToastrComponent_Factory(t) { return new (t || ToastrComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ToastrComponent, selectors: [["aa-toastr"]], inputs: { zIndex: "zIndex" }, ngContentSelectors: _c1$3, decls: 2, vars: 3, consts: [[1, "aa-toastr", 3, "ngStyle"]], template: function ToastrComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵprojection(1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(1, _c0$5, ctx.zIndex));
        } }, dependencies: [i1.NgStyle], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToastrComponent, [{
        type: Component,
        args: [{ selector: 'aa-toastr', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"aa-toastr\" [ngStyle]=\"{'z-index' : zIndex}\">\r\n    <ng-content></ng-content>\r\n</div>\r\n" }]
    }], () => [], { zIndex: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ToastrComponent, { className: "ToastrComponent", filePath: "lib\\widgets\\toastr\\toastr.component.ts", lineNumber: 9 }); })();

function ToastrItemComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtext(1, "local_police");
    i0.ɵɵelementEnd();
} }
function ToastrItemComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtext(1, "privacy_tip");
    i0.ɵɵelementEnd();
} }
function ToastrItemComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtext(1, "verified_user");
    i0.ɵɵelementEnd();
} }
function ToastrItemComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtext(1, "security");
    i0.ɵɵelementEnd();
} }
const _c0$4 = (a0, a1, a2, a3, a4) => ({ "show-toastr": a0, "bg-aa-red-100": a1, "bg-aa-orange-100": a2, "bg-aa-green-100": a3, "bg-aa-light-blue-100": a4 });
class ToastrItemComponent {
    onCloseClick(e) {
        e.stopPropagation();
        this.closeToastr.emit(e);
    }
    constructor() {
        this.showToastr = false;
        this.isError = false;
        this.isWarning = false;
        this.isSuccess = false;
        this.isInfo = false;
        this.closeToastr = new EventEmitter();
    }
    static { this.ɵfac = function ToastrItemComponent_Factory(t) { return new (t || ToastrItemComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ToastrItemComponent, selectors: [["aa-toastr-item"]], inputs: { showToastr: "showToastr", isError: "isError", isWarning: "isWarning", isSuccess: "isSuccess", isInfo: "isInfo", heading: "heading", message: "message" }, outputs: { closeToastr: "closeToastr" }, decls: 14, vars: 13, consts: [[1, "animate-normal", "bg-aa-red-100", "box-shadow", 3, "ngClass"], [1, "material-icons", "aa-white-100", 3, "click"], [1, "flex-group", "flex-start"], [1, "flex-align-center"], ["class", "material-icons toastr-icon aa-white-100", 4, "ngIf"], [1, "margin-0", "aa-white-100", "margin-bottom-0-25"], [1, "aa-white-100", "small"], [1, "material-icons", "toastr-icon", "aa-white-100"]], template: function ToastrItemComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "article", 0)(1, "button", 1);
            i0.ɵɵlistener("click", function ToastrItemComponent_Template_button_click_1_listener($event) { return ctx.onCloseClick($event); });
            i0.ɵɵtext(2, "clear");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 2)(4, "section", 3);
            i0.ɵɵtemplate(5, ToastrItemComponent_div_5_Template, 2, 0, "div", 4)(6, ToastrItemComponent_div_6_Template, 2, 0, "div", 4)(7, ToastrItemComponent_div_7_Template, 2, 0, "div", 4)(8, ToastrItemComponent_div_8_Template, 2, 0, "div", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "section")(10, "h3", 5);
            i0.ɵɵtext(11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "p", 6);
            i0.ɵɵtext(13);
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction5(7, _c0$4, ctx.showToastr, ctx.isError, ctx.isWarning, ctx.isSuccess, ctx.isInfo));
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ctx.isError);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.isWarning);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.isSuccess);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.isInfo);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.heading);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.message);
        } }, dependencies: [i1.NgClass, i1.NgIf], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToastrItemComponent, [{
        type: Component,
        args: [{ selector: 'aa-toastr-item', changeDetection: ChangeDetectionStrategy.OnPush, template: "<article \r\n    class=\"animate-normal bg-aa-red-100 box-shadow\" \r\n    [ngClass]=\"{\r\n        'show-toastr': showToastr,\r\n        'bg-aa-red-100': isError,\r\n        'bg-aa-orange-100': isWarning,\r\n        'bg-aa-green-100': isSuccess,\r\n        'bg-aa-light-blue-100': isInfo\r\n    }\"\r\n>\r\n    <button (click)=\"onCloseClick($event)\" class=\"material-icons aa-white-100\">clear</button>\r\n    <div class=\"flex-group flex-start\">\r\n        <section class=\"flex-align-center\">\r\n            <div *ngIf=\"isError\" class=\"material-icons toastr-icon aa-white-100\">local_police</div>\r\n            <div *ngIf=\"isWarning\" class=\"material-icons toastr-icon aa-white-100\">privacy_tip</div>\r\n            <div *ngIf=\"isSuccess\" class=\"material-icons toastr-icon aa-white-100\">verified_user</div>\r\n            <div *ngIf=\"isInfo\" class=\"material-icons toastr-icon aa-white-100\">security</div>\r\n        </section>\r\n        <section>\r\n            <h3 class=\"margin-0 aa-white-100 margin-bottom-0-25\">{{heading}}</h3>\r\n            <p class=\"aa-white-100 small\">{{message}}</p>\r\n        </section>\r\n    </div>\r\n</article>" }]
    }], () => [], { showToastr: [{
            type: Input
        }], isError: [{
            type: Input
        }], isWarning: [{
            type: Input
        }], isSuccess: [{
            type: Input
        }], isInfo: [{
            type: Input
        }], heading: [{
            type: Input
        }], message: [{
            type: Input
        }], closeToastr: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ToastrItemComponent, { className: "ToastrItemComponent", filePath: "lib\\widgets\\toastr-item\\toastr-item.component.ts", lineNumber: 9 }); })();

function TooltipComponent_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("for", ctx_r0.labelFor);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.labelName);
} }
function TooltipComponent_legend_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "legend", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.labelName);
} }
const _c0$3 = (a0, a1, a2, a3) => ({ "is-success": a0, "is-info": a1, "is-warning": a2, "is-error": a3 });
function TooltipComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction4(2, _c0$3, ctx_r2.isSuccess, ctx_r2.isInfo, ctx_r2.isWarning, ctx_r2.isError));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.iconName, " ");
} }
function TooltipComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 11);
    i0.ɵɵlistener("click", function TooltipComponent_button_5_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.onButtonClick($event)); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r3.buttonClass);
    i0.ɵɵproperty("name", ctx_r3.buttonId)("id", ctx_r3.buttonId)("disabled", ctx_r3.disabled);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r3.buttonText);
} }
function TooltipComponent_button_6_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r8.buttonText);
} }
function TooltipComponent_button_6_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r9.tooltipBtnText);
} }
function TooltipComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 11);
    i0.ɵɵlistener("click", function TooltipComponent_button_6_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(); ctx_r10.onButtonClick($event); return i0.ɵɵresetView(ctx_r10.tooltipClicked = !ctx_r10.tooltipClicked); });
    i0.ɵɵtemplate(1, TooltipComponent_button_6_span_1_Template, 2, 1, "span", 12)(2, TooltipComponent_button_6_span_2_Template, 2, 1, "span", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r4.buttonClass);
    i0.ɵɵproperty("name", ctx_r4.buttonId)("id", ctx_r4.buttonId)("disabled", ctx_r4.disabled);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r4.tooltipClicked);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r4.tooltipClicked);
} }
const _c1$2 = a0 => ({ "nowrap": a0 });
function TooltipComponent_a_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c1$2, ctx_r5.preventAnchorWrapping));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r5.tooltipAnchor, " ");
} }
const _c2$2 = a0 => ({ "display": a0 });
const _c3$2 = (a0, a1, a2, a3, a4, a5) => ({ "space-between": a0, "flex-start": a1, "show-as-button": a2, "show-tooltip-on-hover": a3, "show-tooltip-on-click": a4, "tooltip-clicked": a5 });
const _c4$1 = (a0, a1, a2, a3, a4, a5) => ({ "is-success": a0, "is-info": a1, "is-warning": a2, "is-error": a3, "custom-icon": a4, "as-link": a5 });
const _c5 = a0 => ({ "z-index": a0 });
const _c6 = (a0, a1) => ({ "min-width": a0, "max-width": a1 });
const _c7 = ["*"];
class TooltipComponent {
    onButtonClick(e) {
        e.stopPropagation();
        this.buttonClick.emit(e);
    }
    constructor() {
        this.isSuccess = false;
        this.isInfo = false;
        this.isWarning = false;
        this.includeLabel = false;
        this.includeLegend = false;
        this.labelName = '';
        this.isError = false;
        this.xpos = '';
        this.ypos = '';
        this.customIcon = false;
        this.iconName = '';
        this.zIndex = 0;
        this.labelFor = '';
        this.showAsAnchor = false;
        this.preventAnchorWrapping = false;
        this.showAsButton = false;
        this.buttonText = '';
        this.buttonId = '';
        this.buttonClass = '';
        this.disabled = false;
        this.showTooltipOnClick = false;
        this.showTooltipOnHover = false;
        this.tooltipClicked = false;
        this.tooltipBtnText = '';
        this.buttonClick = new EventEmitter();
    }
    static { this.ɵfac = function TooltipComponent_Factory(t) { return new (t || TooltipComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TooltipComponent, selectors: [["aa-tooltip"]], inputs: { setMinWidth: "setMinWidth", setMaxWidth: "setMaxWidth", isSuccess: "isSuccess", isInfo: "isInfo", isWarning: "isWarning", includeLabel: "includeLabel", includeLegend: "includeLegend", labelName: "labelName", isError: "isError", xpos: "xpos", ypos: "ypos", customIcon: "customIcon", iconName: "iconName", zIndex: "zIndex", labelFor: "labelFor", showAsAnchor: "showAsAnchor", tooltipAnchor: "tooltipAnchor", preventAnchorWrapping: "preventAnchorWrapping", showAsButton: "showAsButton", buttonText: "buttonText", buttonId: "buttonId", buttonClass: "buttonClass", disabled: "disabled", showTooltipOnClick: "showTooltipOnClick", showTooltipOnHover: "showTooltipOnHover", tooltipClicked: "tooltipClicked", tooltipBtnText: "tooltipBtnText" }, outputs: { buttonClick: "buttonClick" }, ngContentSelectors: _c7, decls: 10, vars: 36, consts: [[1, "flex-group", 3, "ngStyle", "ngClass"], [3, "for", 4, "ngIf"], ["class", "margin-right-0-5", 4, "ngIf"], [1, "aa-tooltip", "icon-info", 3, "ngClass", "ngStyle"], ["class", "material-icons", 3, "ngClass", 4, "ngIf"], ["class", "show-tooltip-on-hover", 3, "name", "id", "class", "disabled", "click", 4, "ngIf"], ["class", "cursor-pointer", 3, "ngClass", 4, "ngIf"], [3, "ngStyle"], [3, "for"], [1, "margin-right-0-5"], [1, "material-icons", 3, "ngClass"], [1, "show-tooltip-on-hover", 3, "name", "id", "disabled", "click"], [4, "ngIf"], [1, "cursor-pointer", 3, "ngClass"]], template: function TooltipComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, TooltipComponent_label_1_Template, 2, 2, "label", 1)(2, TooltipComponent_legend_2_Template, 2, 1, "legend", 2);
            i0.ɵɵelementStart(3, "div", 3);
            i0.ɵɵtemplate(4, TooltipComponent_div_4_Template, 2, 7, "div", 4)(5, TooltipComponent_button_5_Template, 3, 6, "button", 5)(6, TooltipComponent_button_6_Template, 3, 7, "button", 5)(7, TooltipComponent_a_7_Template, 2, 4, "a", 6);
            i0.ɵɵelementStart(8, "div", 7);
            i0.ɵɵprojection(9);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(15, _c2$2, ctx.showAsButton ? "block" : "flex"))("ngClass", i0.ɵɵpureFunction6(17, _c3$2, ctx.includeLabel, ctx.includeLegend, ctx.showAsButton, ctx.showTooltipOnHover, ctx.showTooltipOnClick, ctx.tooltipClicked));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.includeLabel && !ctx.showAsButton);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.includeLegend && !ctx.showAsButton);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction6(24, _c4$1, ctx.isSuccess, ctx.isInfo, ctx.isWarning, ctx.isError, ctx.customIcon, ctx.showAsAnchor))("ngStyle", i0.ɵɵpureFunction1(31, _c5, ctx.zIndex));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.customIcon && !ctx.showAsAnchor && !ctx.showAsButton);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showAsButton && !ctx.showTooltipOnClick);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showAsButton && ctx.showTooltipOnClick);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showAsAnchor);
            i0.ɵɵadvance();
            i0.ɵɵclassMapInterpolate2("feature-box ", ctx.xpos, " ", ctx.ypos, "");
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(33, _c6, ctx.setMinWidth, ctx.setMaxWidth));
        } }, dependencies: [i1.NgClass, i1.NgIf, i1.NgStyle], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TooltipComponent, [{
        type: Component,
        args: [{ selector: 'aa-tooltip', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"flex-group\" [ngStyle]=\"{ 'display': showAsButton ? 'block' : 'flex' }\" [ngClass]=\"{\r\n    'space-between' : includeLabel,\r\n    'flex-start' : includeLegend,\r\n    'show-as-button' : showAsButton,\r\n    'show-tooltip-on-hover' : showTooltipOnHover,\r\n    'show-tooltip-on-click' : showTooltipOnClick,\r\n    'tooltip-clicked' : tooltipClicked\r\n  }\">\r\n  <label for=\"{{labelFor}}\" *ngIf=\"includeLabel && !showAsButton\">{{labelName}}</label>\r\n  <legend class=\"margin-right-0-5\" *ngIf=\"includeLegend && !showAsButton\">{{labelName}}</legend>\r\n  <div class=\"aa-tooltip icon-info\" [ngClass]=\"{\r\n      'is-success' : isSuccess,\r\n      'is-info' : isInfo,\r\n      'is-warning' : isWarning,\r\n      'is-error' : isError,\r\n      'custom-icon' : customIcon,\r\n      'as-link': showAsAnchor\r\n    }\" [ngStyle]=\"{'z-index' : zIndex}\">\r\n\r\n    <div *ngIf=\"customIcon && !showAsAnchor && !showAsButton\" class=\"material-icons\" [ngClass]=\"{\r\n        'is-success' : isSuccess,\r\n        'is-info' : isInfo,\r\n        'is-warning' : isWarning,\r\n        'is-error' : isError\r\n      }\">\r\n      {{iconName}}\r\n    </div>\r\n\r\n    <button *ngIf=\"showAsButton && !showTooltipOnClick\" class=\"show-tooltip-on-hover\" [name]=\"buttonId\" [id]=\"buttonId\"\r\n      [class]=\"buttonClass\" [disabled]=\"disabled\" (click)=\"onButtonClick($event)\">\r\n      <span>{{buttonText}}</span>\r\n    </button>\r\n\r\n    <button *ngIf=\"showAsButton && showTooltipOnClick\" class=\"show-tooltip-on-hover\" [name]=\"buttonId\" [id]=\"buttonId\"\r\n      [class]=\"buttonClass\" [disabled]=\"disabled\" (click)=\"onButtonClick($event); tooltipClicked=!tooltipClicked\">\r\n      <span *ngIf=\"!tooltipClicked\">{{buttonText}}</span>\r\n      <span *ngIf=\"tooltipClicked\">{{tooltipBtnText}}</span>\r\n    </button>\r\n\r\n    <a *ngIf=\"showAsAnchor\" class=\"cursor-pointer\" [ngClass]=\"{'nowrap' : preventAnchorWrapping}\">\r\n      {{tooltipAnchor}}\r\n    </a>\r\n\r\n    <div class=\"feature-box {{xpos}} {{ypos}}\" [ngStyle]=\"{\r\n        'min-width': setMinWidth,\r\n        'max-width': setMaxWidth\r\n      }\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n</div>\r\n" }]
    }], () => [], { setMinWidth: [{
            type: Input
        }], setMaxWidth: [{
            type: Input
        }], isSuccess: [{
            type: Input
        }], isInfo: [{
            type: Input
        }], isWarning: [{
            type: Input
        }], includeLabel: [{
            type: Input
        }], includeLegend: [{
            type: Input
        }], labelName: [{
            type: Input
        }], isError: [{
            type: Input
        }], xpos: [{
            type: Input
        }], ypos: [{
            type: Input
        }], customIcon: [{
            type: Input
        }], iconName: [{
            type: Input
        }], zIndex: [{
            type: Input
        }], labelFor: [{
            type: Input
        }], showAsAnchor: [{
            type: Input
        }], tooltipAnchor: [{
            type: Input
        }], preventAnchorWrapping: [{
            type: Input
        }], showAsButton: [{
            type: Input
        }], buttonText: [{
            type: Input
        }], buttonId: [{
            type: Input
        }], buttonClass: [{
            type: Input
        }], disabled: [{
            type: Input
        }], showTooltipOnClick: [{
            type: Input
        }], showTooltipOnHover: [{
            type: Input
        }], tooltipClicked: [{
            type: Input
        }], tooltipBtnText: [{
            type: Input
        }], buttonClick: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TooltipComponent, { className: "TooltipComponent", filePath: "lib\\widgets\\tooltip\\tooltip.component.ts", lineNumber: 8 }); })();

var TooltipDynamicPosition;
(function (TooltipDynamicPosition) {
    TooltipDynamicPosition["ABOVE"] = "above";
    TooltipDynamicPosition["BELOW"] = "below";
    TooltipDynamicPosition["LEFT"] = "left";
    TooltipDynamicPosition["RIGHT"] = "right";
    TooltipDynamicPosition["DYNAMIC"] = "dynamic";
    TooltipDynamicPosition["DEFAULT"] = "above";
})(TooltipDynamicPosition || (TooltipDynamicPosition = {}));

const _c0$2 = a0 => [a0];
class TooltipDynamicComponent {
    isArrayPassed() {
        return (this.tooltip instanceof Array);
    }
    constructor() {
        this.position = TooltipDynamicPosition.DEFAULT;
        this.tooltip = '';
        this.left = 0;
        this.top = 0;
        this.visible = false;
    }
    static { this.ɵfac = function TooltipDynamicComponent_Factory(t) { return new (t || TooltipDynamicComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TooltipDynamicComponent, selectors: [["aa-tooltip-dynamic"]], decls: 2, vars: 10, consts: [[1, "tooltip-dynamic", "box-shadow", 3, "ngClass"], [3, "innerHtml"]], template: function TooltipDynamicComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelement(1, "div", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵstyleProp("left", ctx.left + "px")("top", ctx.top + "px");
            i0.ɵɵclassProp("tooltip--visible", ctx.visible);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(8, _c0$2, "tooltip-dynamic--" + ctx.position));
            i0.ɵɵadvance();
            i0.ɵɵproperty("innerHtml", ctx.tooltip, i0.ɵɵsanitizeHtml);
        } }, dependencies: [i1.NgClass], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TooltipDynamicComponent, [{
        type: Component,
        args: [{ selector: 'aa-tooltip-dynamic', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"tooltip-dynamic box-shadow\"\r\n  [ngClass]=\"['tooltip-dynamic--'+position]\"\r\n  [class.tooltip--visible]=\"visible\"\r\n  [style.left]=\"left + 'px'\"\r\n  [style.top]=\"top + 'px'\">\r\n    <div [innerHtml]=\"tooltip\"></div>\r\n</div>\r\n" }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TooltipDynamicComponent, { className: "TooltipDynamicComponent", filePath: "lib\\widgets\\tooltip-dynamic\\tooltip-dynamic.component.ts", lineNumber: 9 }); })();

class TooltipDynamicDirective {
    constructor(elementRef, appRef, componentFactoryResolver, injector) {
        this.elementRef = elementRef;
        this.appRef = appRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.injector = injector;
        this.aaTooltip = '';
        this.position = TooltipDynamicPosition.DEFAULT;
        this.showDelay = 0;
        this.hideDelay = 0;
        this.componentRef = null;
    }
    onMouseEnter() {
        this.initializeTooltip();
    }
    onMouseLeave() {
        this.setHideTooltipTimeout();
    }
    onMouseMove($event) {
        if (this.componentRef !== null && this.position === TooltipDynamicPosition.DYNAMIC) {
            this.componentRef.instance.left = $event.clientX;
            this.componentRef.instance.top = $event.clientY;
            this.componentRef.instance.tooltip = this.aaTooltip;
        }
    }
    onTouchStart($event) {
        $event.preventDefault();
        window.clearTimeout(this.touchTimeout);
        this.touchTimeout = window.setTimeout(this.initializeTooltip.bind(this), 500);
    }
    onTouchEnd() {
        window.clearTimeout(this.touchTimeout);
        this.setHideTooltipTimeout();
    }
    initializeTooltip() {
        if (this.componentRef === null) {
            window.clearInterval(this.hideDelay);
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(TooltipDynamicComponent);
            this.componentRef = componentFactory.create(this.injector);
            this.appRef.attachView(this.componentRef.hostView);
            const [tooltipDOMElement] = this.componentRef.hostView.rootNodes;
            this.setTooltipComponentProperties();
            document.body.appendChild(tooltipDOMElement);
            this.showTimeout = window.setTimeout(this.showTooltip.bind(this), this.showDelay);
        }
    }
    setTooltipComponentProperties() {
        if (this.componentRef !== null) {
            this.componentRef.instance.tooltip = this.aaTooltip;
            this.componentRef.instance.position = this.position;
            const { left, right, top, bottom } = this.elementRef.nativeElement.getBoundingClientRect();
            switch (this.position) {
                case TooltipDynamicPosition.BELOW: {
                    this.componentRef.instance.left = Math.round((right - left) / 2 + left);
                    this.componentRef.instance.top = Math.round(bottom);
                    break;
                }
                case TooltipDynamicPosition.ABOVE: {
                    this.componentRef.instance.left = Math.round((right - left) / 2 + left);
                    this.componentRef.instance.top = Math.round(top);
                    break;
                }
                case TooltipDynamicPosition.RIGHT: {
                    this.componentRef.instance.left = Math.round(right);
                    this.componentRef.instance.top = Math.round(top + (bottom - top) / 2);
                    break;
                }
                case TooltipDynamicPosition.LEFT: {
                    this.componentRef.instance.left = Math.round(left);
                    this.componentRef.instance.top = Math.round(top + (bottom - top) / 2);
                    break;
                }
                default: {
                    break;
                }
            }
        }
    }
    showTooltip() {
        if (this.componentRef !== null) {
            this.componentRef.instance.visible = true;
        }
    }
    setHideTooltipTimeout() {
        this.hideTimeout = window.setTimeout(this.destroy.bind(this), this.hideDelay);
    }
    ngOnDestroy() {
        this.destroy();
    }
    destroy() {
        if (this.componentRef !== null) {
            window.clearInterval(this.showTimeout);
            window.clearInterval(this.hideDelay);
            this.appRef.detachView(this.componentRef.hostView);
            this.componentRef.destroy();
            this.componentRef = null;
        }
    }
    static { this.ɵfac = function TooltipDynamicDirective_Factory(t) { return new (t || TooltipDynamicDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ApplicationRef), i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i0.Injector)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: TooltipDynamicDirective, selectors: [["", "aaTooltip", ""]], hostBindings: function TooltipDynamicDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("mouseenter", function TooltipDynamicDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function TooltipDynamicDirective_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); })("mousemove", function TooltipDynamicDirective_mousemove_HostBindingHandler($event) { return ctx.onMouseMove($event); })("touchstart", function TooltipDynamicDirective_touchstart_HostBindingHandler($event) { return ctx.onTouchStart($event); })("touchend", function TooltipDynamicDirective_touchend_HostBindingHandler() { return ctx.onTouchEnd(); });
        } }, inputs: { aaTooltip: "aaTooltip", position: "position", showDelay: "showDelay", hideDelay: "hideDelay" } }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TooltipDynamicDirective, [{
        type: Directive,
        args: [{
                selector: '[aaTooltip]'
            }]
    }], () => [{ type: i0.ElementRef }, { type: i0.ApplicationRef }, { type: i0.ComponentFactoryResolver }, { type: i0.Injector }], { aaTooltip: [{
            type: Input
        }], position: [{
            type: Input
        }], showDelay: [{
            type: Input
        }], hideDelay: [{
            type: Input
        }], onMouseEnter: [{
            type: HostListener,
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: HostListener,
            args: ['mouseleave']
        }], onMouseMove: [{
            type: HostListener,
            args: ['mousemove', ['$event']]
        }], onTouchStart: [{
            type: HostListener,
            args: ['touchstart', ['$event']]
        }], onTouchEnd: [{
            type: HostListener,
            args: ['touchend']
        }] }); })();

const _c0$1 = a0 => ({ "face-very-satisfied": a0 });
const _c1$1 = a0 => ({ "face-satisfied": a0 });
const _c2$1 = a0 => ({ "face-neutral": a0 });
const _c3$1 = a0 => ({ "face-dissatisfied": a0 });
const _c4 = a0 => ({ "face-very-dissatisfied": a0 });
function UserFeedbackComponent_section_0_article_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 5)(1, "h3", 6)(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "strong", 7);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 8)(7, "div");
    i0.ɵɵtext(8, "Great");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 9);
    i0.ɵɵlistener("click", function UserFeedbackComponent_section_0_article_2_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.onFaceClick(5)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "button", 10);
    i0.ɵɵlistener("click", function UserFeedbackComponent_section_0_article_2_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r5); const ctx_r6 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r6.onFaceClick(4)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 11);
    i0.ɵɵlistener("click", function UserFeedbackComponent_section_0_article_2_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r5); const ctx_r7 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r7.onFaceClick(3)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 12);
    i0.ɵɵlistener("click", function UserFeedbackComponent_section_0_article_2_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r5); const ctx_r8 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r8.onFaceClick(2)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "button", 13);
    i0.ɵɵlistener("click", function UserFeedbackComponent_section_0_article_2_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r5); const ctx_r9 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r9.onFaceClick(1)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div");
    i0.ɵɵtext(15, "Poor");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", ctx_r1.question, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.appName);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(7, _c0$1, ctx_r1.rating === 5));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(9, _c1$1, ctx_r1.rating === 4));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(11, _c2$1, ctx_r1.rating === 3));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(13, _c3$1, ctx_r1.rating === 2));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(15, _c4, ctx_r1.rating === 1));
} }
function UserFeedbackComponent_section_0_article_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 14)(1, "form", 15)(2, "div")(3, "label", 16);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 17);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(7, "textarea", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 19)(9, "em");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 20)(12, "button", 21);
    i0.ɵɵlistener("click", function UserFeedbackComponent_section_0_article_3_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r10.sendFB()); });
    i0.ɵɵtext(13, "Send feedback");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("formGroup", ctx_r2.feedbackForm);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r2.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.description);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r2.footNote);
} }
function UserFeedbackComponent_section_0_article_4_div_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 36);
} }
function UserFeedbackComponent_section_0_article_4_div_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 37);
} }
function UserFeedbackComponent_section_0_article_4_div_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 38);
} }
function UserFeedbackComponent_section_0_article_4_div_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 39);
} }
function UserFeedbackComponent_section_0_article_4_div_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 40);
} }
function UserFeedbackComponent_section_0_article_4_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article")(1, "div", 22)(2, "h3", 6)(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "strong", 7);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(7, "? ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 8)(9, "div");
    i0.ɵɵtext(10, "Great");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(11, "div", 23)(12, "div", 24)(13, "div", 25)(14, "div", 26)(15, "div", 27);
    i0.ɵɵelementStart(16, "div");
    i0.ɵɵtext(17, "Poor");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(18, "article", 14)(19, "p");
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "div", 28);
    i0.ɵɵtemplate(22, UserFeedbackComponent_section_0_article_4_div_22_Template, 1, 0, "div", 29)(23, UserFeedbackComponent_section_0_article_4_div_23_Template, 1, 0, "div", 30)(24, UserFeedbackComponent_section_0_article_4_div_24_Template, 1, 0, "div", 31)(25, UserFeedbackComponent_section_0_article_4_div_25_Template, 1, 0, "div", 32)(26, UserFeedbackComponent_section_0_article_4_div_26_Template, 1, 0, "div", 33);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "div", 34)(28, "button", 35);
    i0.ɵɵlistener("click", function UserFeedbackComponent_section_0_article_4_Template_button_click_28_listener() { i0.ɵɵrestoreView(_r18); const ctx_r17 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r17.onClose()); });
    i0.ɵɵtext(29, "Close");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", ctx_r3.question, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r3.appName);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(13, _c0$1, ctx_r3.rating === 5));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(15, _c1$1, ctx_r3.rating === 4));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(17, _c2$1, ctx_r3.rating === 3));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(19, _c3$1, ctx_r3.rating === 2));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(21, _c4, ctx_r3.rating === 1));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r3.closingMessage);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r3.rating === 5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.rating === 4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.rating === 3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.rating === 2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.rating === 1);
} }
function UserFeedbackComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section")(1, "div", 1);
    i0.ɵɵtemplate(2, UserFeedbackComponent_section_0_article_2_Template, 16, 17, "article", 2)(3, UserFeedbackComponent_section_0_article_3_Template, 14, 4, "article", 3)(4, UserFeedbackComponent_section_0_article_4_Template, 30, 23, "article", 4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("user-feedback box-shadow margin-bottom-1 rating-", ctx_r0.rating, "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.startRating);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.faceClicked && !ctx_r0.userClosedPanel);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.userClosedPanel);
} }
class UserFeedbackComponent {
    onClose() {
        this.close.emit();
        this.toggleUserFeedback = !this.toggleUserFeedback;
        this.userClosedPanel = false;
        this.faceClicked = false;
        this.rating = null;
        this.startRating = true;
    }
    onFaceClick(rating) {
        this.faceClicked = true;
        this.rating = rating;
    }
    sendFB() {
        this.sendFeedback.emit({ rating: this.rating, comments: this.feedbackForm.value.comment });
        this.userClosedPanel = true;
        this.startRating = false;
    }
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.panelWidth = 0;
        this.question = '';
        this.appName = '';
        this.label = '';
        this.description = '';
        this.footNote = '';
        this.closingMessage = '';
        this.toggleUserFeedback = false;
        this.sendFeedback = new EventEmitter();
        // eslint-disable-next-line @angular-eslint/no-output-native
        this.close = new EventEmitter();
        this.startRating = true;
        this.faceClicked = false;
        this.rating = 0;
        this.userClosedPanel = false;
        this.feedbackForm = this.formBuilder.group({
            comment: [null]
        });
    }
    static { this.ɵfac = function UserFeedbackComponent_Factory(t) { return new (t || UserFeedbackComponent)(i0.ɵɵdirectiveInject(i2.FormBuilder)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: UserFeedbackComponent, selectors: [["aa-user-feedback"]], inputs: { panelWidth: "panelWidth", question: "question", appName: "appName", label: "label", description: "description", footNote: "footNote", closingMessage: "closingMessage", toggleUserFeedback: "toggleUserFeedback" }, outputs: { sendFeedback: "sendFeedback", close: "close" }, decls: 1, vars: 1, consts: [[3, "class", 4, "ngIf"], [1, "position-relative"], ["class", "flex-group padding-1", 4, "ngIf"], ["class", "user-feedback-content padding-1", 4, "ngIf"], [4, "ngIf"], [1, "flex-group", "padding-1"], [1, "text-align-center", "margin-top-0-5"], [1, "italic"], [1, "feature-box", "faces", "tertiary", "flex-group", "flex-align-center"], [1, "face-very-satisfied-blk", 3, "ngClass", "click"], [1, "face-satisfied-blk", 3, "ngClass", "click"], [1, "face-neutral-blk", 3, "ngClass", "click"], [1, "face-dissatisfied-blk", 3, "ngClass", "click"], [1, "face-very-dissatisfied-blk", 3, "ngClass", "click"], [1, "user-feedback-content", "padding-1"], ["name", "sendFeedback", 3, "formGroup"], ["for", "feedback"], [1, "describe", "width-100"], ["formControlName", "comment", "id", "feedback"], [1, "padding-top-1", "max-readable-width"], [1, "align-center", "margin-top-1"], ["type", "button", 1, "primary", 3, "click"], [1, "flex-group", "voting-panel", "padding-1"], [1, "face-very-satisfied-blk", 3, "ngClass"], [1, "face-satisfied-blk", 3, "ngClass"], [1, "face-neutral-blk", 3, "ngClass"], [1, "face-dissatisfied-blk", 3, "ngClass"], [1, "face-very-dissatisfied-blk", 3, "ngClass"], [1, "thanks", "align-center"], ["class", "face-very-satisfied", 4, "ngIf"], ["class", "face-satisfied", 4, "ngIf"], ["class", "face-neutral", 4, "ngIf"], ["class", "face-dissatisfied", 4, "ngIf"], ["class", "face-very-dissatisfied", 4, "ngIf"], [1, "align-center"], ["type", "button", 1, "tertiary", 3, "click"], [1, "face-very-satisfied"], [1, "face-satisfied"], [1, "face-neutral"], [1, "face-dissatisfied"], [1, "face-very-dissatisfied"]], template: function UserFeedbackComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, UserFeedbackComponent_section_0_Template, 5, 6, "section", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.toggleUserFeedback);
        } }, dependencies: [i1.NgClass, i1.NgIf, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.FormGroupDirective, i2.FormControlName], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UserFeedbackComponent, [{
        type: Component,
        args: [{ selector: 'aa-user-feedback', changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"user-feedback box-shadow margin-bottom-1 rating-{{ rating }}\" *ngIf=\"toggleUserFeedback\">\r\n  <div class=\"position-relative\">\r\n    <article class=\"flex-group padding-1\" *ngIf=\"startRating\">\r\n      <h3 class=\"text-align-center margin-top-0-5\">\r\n        <span>{{ question }} </span>\r\n        <strong class=\"italic\">{{ appName }}</strong>\r\n      </h3>\r\n      <div class=\"feature-box faces tertiary flex-group flex-align-center\">\r\n        <div>Great</div>\r\n        <button (click)=\"onFaceClick(5)\" [ngClass]=\"{ 'face-very-satisfied': rating === 5 }\" class=\"face-very-satisfied-blk\"></button>\r\n        <button (click)=\"onFaceClick(4)\" [ngClass]=\"{ 'face-satisfied': rating === 4 }\" class=\"face-satisfied-blk\"></button>\r\n        <button (click)=\"onFaceClick(3)\" [ngClass]=\"{ 'face-neutral': rating === 3 }\" class=\"face-neutral-blk\"></button>\r\n        <button (click)=\"onFaceClick(2)\" [ngClass]=\"{ 'face-dissatisfied': rating === 2 }\" class=\"face-dissatisfied-blk\"></button>\r\n        <button (click)=\"onFaceClick(1)\" [ngClass]=\"{ 'face-very-dissatisfied': rating === 1 }\" class=\"face-very-dissatisfied-blk\"></button>\r\n        <div>Poor</div>\r\n      </div>\r\n    </article>\r\n\r\n    <article *ngIf=\"faceClicked && !userClosedPanel\" class=\"user-feedback-content padding-1\">\r\n      <form name=\"sendFeedback\" [formGroup]=\"feedbackForm\">\r\n        <div>\r\n          <label for=\"feedback\">{{ label }}</label>\r\n          <div class=\"describe width-100\">{{ description }}</div>\r\n          <textarea formControlName=\"comment\" id=\"feedback\"></textarea>\r\n        </div>\r\n        <div class=\"padding-top-1 max-readable-width\">\r\n          <em>{{ footNote }}</em>\r\n        </div>\r\n        <div class=\"align-center margin-top-1\">\r\n          <button type=\"button\" class=\"primary\" (click)=\"sendFB()\">Send feedback</button>\r\n        </div>\r\n      </form>\r\n    </article>\r\n\r\n    <article *ngIf=\"userClosedPanel\">\r\n      <div class=\"flex-group voting-panel padding-1\">\r\n        <h3 class=\"text-align-center margin-top-0-5\">\r\n          <span>{{ question }} </span>\r\n          <strong class=\"italic\">{{ appName }}</strong>?\r\n        </h3>\r\n        <div class=\"feature-box faces tertiary flex-group flex-align-center\">\r\n          <div>Great</div>\r\n          <div [ngClass]=\"{ 'face-very-satisfied': rating === 5 }\" class=\"face-very-satisfied-blk\"></div>\r\n          <div [ngClass]=\"{ 'face-satisfied': rating === 4 }\" class=\"face-satisfied-blk\"></div>\r\n          <div [ngClass]=\"{ 'face-neutral': rating === 3 }\" class=\"face-neutral-blk\"></div>\r\n          <div [ngClass]=\"{ 'face-dissatisfied': rating === 2 }\" class=\"face-dissatisfied-blk\"></div>\r\n          <div [ngClass]=\"{ 'face-very-dissatisfied': rating === 1 }\" class=\"face-very-dissatisfied-blk\"></div>\r\n          <div>Poor</div>\r\n        </div>\r\n      </div>\r\n      <article class=\"user-feedback-content padding-1\">\r\n        <p>{{ closingMessage }}</p>\r\n        <div class=\"thanks align-center\">\r\n          <div *ngIf=\"rating === 5\" class=\"face-very-satisfied\"></div>\r\n          <div *ngIf=\"rating === 4\" class=\"face-satisfied\"></div>\r\n          <div *ngIf=\"rating === 3\" class=\"face-neutral\"></div>\r\n          <div *ngIf=\"rating === 2\" class=\"face-dissatisfied\"></div>\r\n          <div *ngIf=\"rating === 1\" class=\"face-very-dissatisfied\"></div>\r\n        </div>\r\n        <div class=\"align-center\">\r\n          <button type=\"button\" class=\"tertiary\" (click)=\"onClose()\">Close</button>\r\n        </div>\r\n      </article>\r\n    </article>\r\n  </div>\r\n</section>\r\n" }]
    }], () => [{ type: i2.FormBuilder }], { panelWidth: [{
            type: Input
        }], question: [{
            type: Input
        }], appName: [{
            type: Input
        }], label: [{
            type: Input
        }], description: [{
            type: Input
        }], footNote: [{
            type: Input
        }], closingMessage: [{
            type: Input
        }], toggleUserFeedback: [{
            type: Input
        }], sendFeedback: [{
            type: Output
        }], close: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(UserFeedbackComponent, { className: "UserFeedbackComponent", filePath: "lib\\widgets\\user-feedback\\user-feedback.component.ts", lineNumber: 11 }); })();

const _c0 = (a1, a2, a3, a4) => ({ "position": "fixed", "left": a1, "top": a2, "bottom": a3, "z-index": a4 });
const _c1 = () => ({});
const _c2 = a0 => ({ "flex-start": a0 });
const _c3 = ["*"];
class ListSelectableComponent {
    constructor() {
        this.zIndex = 0;
        this.flexStart = false;
        this.fixedPosition = false;
    }
    static { this.ɵfac = function ListSelectableComponent_Factory(t) { return new (t || ListSelectableComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ListSelectableComponent, selectors: [["aa-list-selectable"]], inputs: { minWidth: "minWidth", topPos: "topPos", leftPos: "leftPos", rightPos: "rightPos", bottomPos: "bottomPos", zIndex: "zIndex", flexStart: "flexStart", fixedPosition: "fixedPosition" }, ngContentSelectors: _c3, decls: 3, vars: 10, consts: [[1, "aa-list-selectable", "flex-group", 3, "ngStyle", "ngClass"]], template: function ListSelectableComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "nav", 0)(1, "ul");
            i0.ɵɵprojection(2);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵproperty("ngStyle", ctx.fixedPosition ? i0.ɵɵpureFunction4(2, _c0, ctx.leftPos, ctx.topPos, ctx.bottomPos, ctx.zIndex) : i0.ɵɵpureFunction0(7, _c1))("ngClass", i0.ɵɵpureFunction1(8, _c2, ctx.flexStart));
        } }, dependencies: [i1.NgClass, i1.NgStyle], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListSelectableComponent, [{
        type: Component,
        args: [{ selector: 'aa-list-selectable', changeDetection: ChangeDetectionStrategy.OnPush, template: "<nav\r\n    class=\"\r\n        aa-list-selectable\r\n        flex-group\r\n    \"\r\n    [ngStyle]=\"fixedPosition ? {\r\n        'position' : 'fixed',\r\n        'left' : leftPos,\r\n        'top' : topPos,\r\n        'bottom' : bottomPos,\r\n        'z-index' : zIndex\r\n    } : {}\"\r\n    [ngClass]=\"{\r\n        'flex-start' : flexStart\r\n    }\"\r\n    >\r\n    <ul>\r\n        <ng-content></ng-content>\r\n    </ul>\r\n</nav>\r\n" }]
    }], null, { minWidth: [{
            type: Input
        }], topPos: [{
            type: Input
        }], leftPos: [{
            type: Input
        }], rightPos: [{
            type: Input
        }], bottomPos: [{
            type: Input
        }], zIndex: [{
            type: Input
        }], flexStart: [{
            type: Input
        }], fixedPosition: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ListSelectableComponent, { className: "ListSelectableComponent", filePath: "lib\\widgets\\list-selectable\\list-selectable.component.ts", lineNumber: 9 }); })();

class WidgetsModule {
    static { this.ɵfac = function WidgetsModule_Factory(t) { return new (t || WidgetsModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: WidgetsModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule, FormsModule, ReactiveFormsModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WidgetsModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    PopoverComponent,
                    AccordionComponent,
                    AccordionFancyComponent,
                    CardComponent,
                    CarouselComponent,
                    CarouselItemDirective,
                    CarouselItemElementDirective,
                    DashboardContainerComponent,
                    DashboardFavouritesComponent,
                    DashboardFavouritesListComponent,
                    ElementSliderComponent,
                    FavouritesComponent,
                    FavouritesListComponent,
                    IconPickerComponent,
                    IconFilterPipe,
                    InfoPanelComponent,
                    InfoPanelStackedComponent,
                    ModalComponent,
                    ModalDialogComponent,
                    OverlayComponent,
                    SummaryTopComponent,
                    SummaryTopListComponent,
                    ToastrComponent,
                    ToastrItemComponent,
                    TooltipComponent,
                    TooltipDynamicComponent,
                    TooltipDynamicDirective,
                    UserFeedbackComponent,
                    ListSelectableComponent,
                    OrderByPipe
                ],
                imports: [CommonModule, FormsModule, ReactiveFormsModule],
                providers: [],
                exports: [
                    PopoverComponent,
                    AccordionComponent,
                    AccordionFancyComponent,
                    CardComponent,
                    CarouselComponent,
                    CarouselItemDirective,
                    CarouselItemElementDirective,
                    DashboardContainerComponent,
                    DashboardFavouritesComponent,
                    DashboardFavouritesListComponent,
                    ElementSliderComponent,
                    FavouritesComponent,
                    FavouritesListComponent,
                    IconPickerComponent,
                    IconFilterPipe,
                    InfoPanelComponent,
                    InfoPanelStackedComponent,
                    ModalComponent,
                    ModalDialogComponent,
                    OverlayComponent,
                    SummaryTopComponent,
                    SummaryTopListComponent,
                    ToastrComponent,
                    ToastrItemComponent,
                    TooltipComponent,
                    TooltipDynamicComponent,
                    TooltipDynamicDirective,
                    UserFeedbackComponent,
                    ListSelectableComponent,
                    OrderByPipe
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(WidgetsModule, { declarations: [PopoverComponent,
        AccordionComponent,
        AccordionFancyComponent,
        CardComponent,
        CarouselComponent,
        CarouselItemDirective,
        CarouselItemElementDirective,
        DashboardContainerComponent,
        DashboardFavouritesComponent,
        DashboardFavouritesListComponent,
        ElementSliderComponent,
        FavouritesComponent,
        FavouritesListComponent,
        IconPickerComponent,
        IconFilterPipe,
        InfoPanelComponent,
        InfoPanelStackedComponent,
        ModalComponent,
        ModalDialogComponent,
        OverlayComponent,
        SummaryTopComponent,
        SummaryTopListComponent,
        ToastrComponent,
        ToastrItemComponent,
        TooltipComponent,
        TooltipDynamicComponent,
        TooltipDynamicDirective,
        UserFeedbackComponent,
        ListSelectableComponent,
        OrderByPipe], imports: [CommonModule, FormsModule, ReactiveFormsModule], exports: [PopoverComponent,
        AccordionComponent,
        AccordionFancyComponent,
        CardComponent,
        CarouselComponent,
        CarouselItemDirective,
        CarouselItemElementDirective,
        DashboardContainerComponent,
        DashboardFavouritesComponent,
        DashboardFavouritesListComponent,
        ElementSliderComponent,
        FavouritesComponent,
        FavouritesListComponent,
        IconPickerComponent,
        IconFilterPipe,
        InfoPanelComponent,
        InfoPanelStackedComponent,
        ModalComponent,
        ModalDialogComponent,
        OverlayComponent,
        SummaryTopComponent,
        SummaryTopListComponent,
        ToastrComponent,
        ToastrItemComponent,
        TooltipComponent,
        TooltipDynamicComponent,
        TooltipDynamicDirective,
        UserFeedbackComponent,
        ListSelectableComponent,
        OrderByPipe] }); })();

class ModalService {
    openModal(entry, modalHeading, modalMessage) {
        this.componentRef = entry.createComponent(ModalDialogComponent);
        this.componentRef.instance.heading = modalHeading;
        this.componentRef.instance.message = modalMessage;
        this.componentRef.instance.closeMeEvent.subscribe(() => this.closeModal());
        this.componentRef.instance.confirmEvent.subscribe(() => this.confirm());
        this.componentSubscriber = new Subject();
        return this.componentSubscriber.asObservable();
    }
    closeModal() {
        this.componentSubscriber.complete();
        this.componentRef.destroy();
    }
    confirm() {
        this.componentSubscriber.next('confirm');
        this.closeModal();
    }
    static { this.ɵfac = function ModalService_Factory(t) { return new (t || ModalService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ModalService, factory: ModalService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModalService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();

/*
 * Public API Surface of components
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AccordionComponent, AccordionFancyComponent, ActionsSummaryComponent, AlertComponent, AlertShieldComponent, AnchorBackComponent, AnimationsModule, BladeBottomComponent, BladeComponent, BladeFooterComponent, BladeTopComponent, ButtonComponent, CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, CardComponent, CarouselComponent, CarouselItemDirective, CarouselItemElementDirective, CheckboxComponent, ClickOutsideDirective, CommentsComponent, ContextMenuComponent, ContextMenuItemComponent, CounterComponent, CustomSelectComponent, CustomWrapperComponent, DashboardContainerComponent, DashboardFavouritesComponent, DashboardFavouritesListComponent, DirectivesModule, ElementSliderComponent, ElementsModule, FavouritesComponent, FavouritesListComponent, FeatureBoxComponent, FieldComponent, FileUploadComponent, FooterComponent, GraphicComponent, IconFilterPipe, IconPickerComponent, InfoPanelComponent, InfoPanelStackedComponent, InputTextComponent, LayoutModule, ListSelectableComponent, LoadingSpinnerComponent, LoadingSpinnerPageComponent, ModalComponent, ModalDialogComponent, ModalService, NavContextComponent, NavigationModule, OrderByPipe, OverlayComponent, PatternsModule, PopoverComponent, ProgressBarComponent, ProgressCircleComponent, ProgressIndicatorAdvancedComponent, ProgressIndicatorComponent, ProjectTourComponent, SliderComponent, StatusIndicatorComponent, StepperComponent, SummaryTopComponent, SummaryTopListComponent, TabNavigationComponent, TabNavigationContentDirective, TabNavigationHeaderContentDirective, TabNavigationItemComponent, TabNavigationSecondaryComponent, TabNavigationSecondaryContentDirective, TabNavigationSecondaryItemComponent, TagComponent, TextareaAutoresizeDirective, ToastrComponent, ToastrItemComponent, TooltipComponent, TooltipDynamicComponent, TooltipDynamicDirective, TooltipDynamicPosition, UiBlockComponent, UnauthorisedComponent, UserFeedbackComponent, WidgetsModule };
//# sourceMappingURL=angloamerican-components.mjs.map
