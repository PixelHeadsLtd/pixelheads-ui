import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, HostListener } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
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
const _c0 = a0 => ({ "show-label": a0 });
const _c1 = (a0, a1) => ({ "material-icons": a0, "material-icons-outlined": a1 });
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
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(17, _c0, ctx_r0.showLabel))("for", ctx_r0.buttonId);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.buttonLabel, " ");
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r0.buttonClass);
    i0.ɵɵproperty("type", ctx_r0.buttonType)("name", ctx_r0.buttonId)("id", ctx_r0.buttonId)("disabled", ctx_r0.disabled)("ngClass", i0.ɵɵpureFunction2(19, _c1, ctx_r0.customIconsRound, ctx_r0.customIconsRoundOutlined));
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
const _c2 = a0 => ({ "max-height": a0 });
function ButtonComponent_div_2_nav_9_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nav", 22);
    i0.ɵɵlistener("click", function ButtonComponent_div_2_nav_9_Template_nav_click_0_listener() { i0.ɵɵrestoreView(_r21); const ctx_r20 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r20.showBtnMenu = false); });
    i0.ɵɵprojection(1, 1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(1, _c2, ctx_r15.maxHeight));
} }
const _c3 = (a0, a1) => ({ "nav-left-side": a0, "nav-bottom": a1 });
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
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(15, _c3, ctx_r2.navLeftside, ctx_r2.navBottom));
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
const _c4 = [[["", "toolbar", ""]], [["", "bs-buttons", ""]]];
const _c5 = ["[toolbar]", "[bs-buttons]"];
export class ButtonComponent {
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
        } }, inputs: { buttonLabel: "buttonLabel", buttonText: "buttonText", buttonId: "buttonId", buttonClass: "buttonClass", buttonType: "buttonType", disabled: "disabled", fieldClass: "fieldClass", buttonIcon: "buttonIcon", customIcons: "customIcons", buttonEnriched: "buttonEnriched", showBtnMenu: "showBtnMenu", buttonSplit: "buttonSplit", navBottom: "navBottom", iconName: "iconName", title: "title", iconColour: "iconColour", buttonLarge: "buttonLarge", buttonSummary: "buttonSummary", showDescription: "showDescription", status: "status", level: "level", desc: "desc", showCount: "showCount", count: "count", countColor: "countColor", maxHeight: "maxHeight", showLabel: "showLabel", customIconsRound: "customIconsRound", customIconsRoundOutlined: "customIconsRoundOutlined", navLeftside: "navLeftside", buttonDayPicker: "buttonDayPicker" }, outputs: { buttonClick: "buttonClick" }, ngContentSelectors: _c5, decls: 5, vars: 5, consts: [[3, "class", "button-large", 4, "ngIf"], [3, "class", 4, "ngIf"], ["class", "button-day-picker box-shadow-light", 3, "type", "name", "id", "disabled", "click", 4, "ngIf"], [3, "ngClass", "for"], [3, "type", "name", "id", "disabled", "ngClass", "click"], ["class", "flex-center", 4, "ngIf"], [4, "ngIf"], [1, "flex-center"], ["class", "material-icons", 4, "ngIf"], [1, "text-align-left"], [1, "material-icons"], [1, "btn-enriched", "box-shadow-light", "gradient-v-grey", 3, "type", "name", "id", "disabled", "click"], [1, "flex-group", "flex-end", "btn-enriched-toolbar"], [1, "btn-enriched-content", "flex-group", "flex-start", "flex-align-center"], [1, "margin-0"], [3, "for"], [1, "button-split", 3, "ngClass"], [1, "flex-group", "flex-start", "flex-align-center", "flex-nowrap"], ["class", "chevron-up", 3, "class", "type", "name", "id", "click", 4, "ngIf"], [3, "type", "name", "id", "click"], ["class", "box-shadow", 3, "ngStyle", "click", 4, "ngIf"], [1, "chevron-up", 3, "type", "name", "id", "click"], [1, "box-shadow", 3, "ngStyle", "click"], [1, "flex-group", "flex-start", "flex-align-center"], [1, "priority", "bg-aa-white-100", "border-radius-50", "width-3", "height-3", "flex-center", "bd-solid"], ["class", "margin-top-1", 4, "ngIf"], [1, "margin-top-1"], [1, "button-day-picker", "box-shadow-light", 3, "type", "name", "id", "disabled", "click"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c4);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9lbGVtZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9lbGVtZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsWUFBWSxFQUFjLE1BQU0sZUFBZSxDQUFDOzs7O0lDdUI1SCxnQ0FBaUQ7SUFBQSxZQUFjO0lBQUEsaUJBQU87OztJQUFyQixjQUFjO0lBQWQsdUNBQWM7OztJQUUvRCwyQkFBb0Q7SUFBQSxZQUFTO0lBQUEsaUJBQU07OztJQUE1QywwREFBNEI7SUFBQyxjQUFTO0lBQVQsa0NBQVM7OztJQUgvRCw4QkFBZ0Y7SUFDOUUsOEVBQXNFO0lBQ3RFLCtCQUE4QjtJQUFBLFlBQWM7SUFBQSxpQkFBTztJQUNuRCw0RUFBbUU7SUFDckUsaUJBQU07OztJQUhHLGNBQWlCO0lBQWpCLHlDQUFpQjtJQUNNLGVBQWM7SUFBZCx1Q0FBYztJQUN0QyxjQUFlO0lBQWYsdUNBQWU7OztJQUV2Qiw0QkFBMkQ7SUFBQSxZQUFjO0lBQUEsaUJBQU87OztJQUFyQixjQUFjO0lBQWQsdUNBQWM7Ozs7OztJQTNCN0UsMkJBSUMsZUFBQTtJQUlHLFlBQ0Y7SUFBQSxpQkFBUTtJQUNSLGlDQVdDO0lBTEMsbUtBQVMsZUFBQSw0QkFBcUIsQ0FBQSxJQUFDO0lBTS9CLHNFQUlNLDJEQUFBO0lBRVIsaUJBQVMsRUFBQTs7O0lBMUJULDBEQUE0QjtJQUM1QixrREFBa0M7SUFHaEMsY0FBdUM7SUFBdkMsdUVBQXVDLHdCQUFBO0lBRXZDLGNBQ0Y7SUFE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LFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLGdCQUFnQjtrQkFBeEIsS0FBSztZQUNHLHdCQUF3QjtrQkFBaEMsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxlQUFlO2tCQUF2QixLQUFLO1lBRUksV0FBVztrQkFBcEIsTUFBTTtZQVdBLE9BQU87a0JBRmIsWUFBWTttQkFBQyxnQkFBZ0IsRUFBRSxDQUFDLGVBQWUsQ0FBQzs7a0ZBMUN0QyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIEhvc3RMaXN0ZW5lciwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYS1idXR0b24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9idXR0b24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCdXR0b25Db21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGJ1dHRvbkxhYmVsOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBidXR0b25UZXh0OiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBidXR0b25JZDogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgYnV0dG9uQ2xhc3M6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGJ1dHRvblR5cGU6IHN0cmluZyA9ICdidXR0b24nO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZmllbGRDbGFzczogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgYnV0dG9uSWNvbjogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgY3VzdG9tSWNvbnM6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBidXR0b25FbnJpY2hlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHNob3dCdG5NZW51OiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgYnV0dG9uU3BsaXQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBuYXZCb3R0b206IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBpY29uTmFtZTogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGljb25Db2xvdXI6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGJ1dHRvbkxhcmdlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgYnV0dG9uU3VtbWFyeTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHNob3dEZXNjcmlwdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHN0YXR1czogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgbGV2ZWw6IG51bWJlciA9IDA7XHJcbiAgQElucHV0KCkgZGVzYzogYW55O1xyXG4gIEBJbnB1dCgpIHNob3dDb3VudDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGNvdW50OiBudW1iZXIgPSAwO1xyXG4gIEBJbnB1dCgpIGNvdW50Q29sb3I6IGFueTtcclxuICBASW5wdXQoKSBtYXhIZWlnaHQ6IGFueTtcclxuICBASW5wdXQoKSBzaG93TGFiZWw6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBjdXN0b21JY29uc1JvdW5kOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgY3VzdG9tSWNvbnNSb3VuZE91dGxpbmVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbmF2TGVmdHNpZGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBidXR0b25EYXlQaWNrZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQE91dHB1dCgpIGJ1dHRvbkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcclxuXHJcbiAgcHVibGljIG9uQnV0dG9uQ2xpY2soZTogRXZlbnQpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLmJ1dHRvbkNsaWNrLmVtaXQoZSk7XHJcbiAgICB0aGlzLnNob3dCdG5NZW51ID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHsgfVxyXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJywgWyckZXZlbnQudGFyZ2V0J10pXHJcblxyXG4gIHB1YmxpYyBvbkNsaWNrKHRhcmdldEVsZW1lbnQ6YW55KSB7XHJcbiAgICBjb25zdCBjbGlja2VkSW5zaWRlID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnModGFyZ2V0RWxlbWVudCk7XHJcbiAgICBpZiAoIWNsaWNrZWRJbnNpZGUpIHtcclxuICAgICAgICB0aGlzLnNob3dCdG5NZW51ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb3BlbigpIHtcclxuICAgIHRoaXMuc2hvd0J0bk1lbnUgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsb3NlKCkge1xyXG4gICAgdGhpcy5zaG93QnRuTWVudSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiPGRpdiBcclxuICAqbmdJZj1cIiFidXR0b25FbnJpY2hlZCAmJiAhYnV0dG9uU3BsaXQgJiYhYnV0dG9uU3VtbWFyeSAmJiFidXR0b25EYXlQaWNrZXJcIiBcclxuICBjbGFzcz1cImZpZWxkIHt7ZmllbGRDbGFzc319XCJcclxuICBbY2xhc3MuYnV0dG9uLWxhcmdlXT1cImJ1dHRvbkxhcmdlXCJcclxuPlxyXG4gIDxsYWJlbCBcclxuICAgIFtuZ0NsYXNzXT1cInsgJ3Nob3ctbGFiZWwnOiBzaG93TGFiZWwgfVwiXHJcbiAgICBbZm9yXT1cImJ1dHRvbklkXCI+XHJcbiAgICB7e2J1dHRvbkxhYmVsfX1cclxuICA8L2xhYmVsPlxyXG4gIDxidXR0b24gXHJcbiAgICBbdHlwZV09XCJidXR0b25UeXBlXCIgXHJcbiAgICBbbmFtZV09XCJidXR0b25JZFwiIFxyXG4gICAgW2lkXT1cImJ1dHRvbklkXCIgXHJcbiAgICBbY2xhc3NdPVwiYnV0dG9uQ2xhc3NcIiBcclxuICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiIFxyXG4gICAgKGNsaWNrKT1cIm9uQnV0dG9uQ2xpY2soJGV2ZW50KVwiXHJcbiAgICBbbmdDbGFzc109XCJ7XHJcbiAgICAgICdtYXRlcmlhbC1pY29ucycgOiBjdXN0b21JY29uc1JvdW5kLFxyXG4gICAgICAnbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQnIDogY3VzdG9tSWNvbnNSb3VuZE91dGxpbmVkXHJcbiAgICB9XCJcclxuICA+XHJcbiAgICA8ZGl2ICpuZ0lmPVwiIWN1c3RvbUljb25zUm91bmQgJiYgIWN1c3RvbUljb25zUm91bmRPdXRsaW5lZFwiIGNsYXNzPVwiZmxleC1jZW50ZXJcIj5cclxuICAgICAgPHNwYW4gKm5nSWY9XCJjdXN0b21JY29uc1wiIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj57e2J1dHRvbkljb259fTwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWFsaWduLWxlZnRcIj57e2J1dHRvblRleHR9fTwvc3Bhbj5cclxuICAgICAgPGRpdiAqbmdJZj1cInNob3dDb3VudFwiIGNsYXNzPVwiY291bnQge3tjb3VudENvbG9yfX1cIj57e2NvdW50fX08L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPHNwYW4gKm5nSWY9XCJjdXN0b21JY29uc1JvdW5kIHx8IGN1c3RvbUljb25zUm91bmRPdXRsaW5lZFwiPnt7YnV0dG9uSWNvbn19PC9zcGFuPlxyXG4gIDwvYnV0dG9uPlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgKm5nSWY9XCJidXR0b25FbnJpY2hlZFwiIGNsYXNzPVwiZmllbGQge3tmaWVsZENsYXNzfX1cIj5cclxuICA8YnV0dG9uIFxyXG4gICAgW3R5cGVdPVwiYnV0dG9uVHlwZVwiIFxyXG4gICAgW25hbWVdPVwiYnV0dG9uSWRcIiBcclxuICAgIFtpZF09XCJidXR0b25JZFwiIFxyXG4gICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgXHJcbiAgICAoY2xpY2spPVwib25CdXR0b25DbGljaygkZXZlbnQpXCJcclxuICAgIGNsYXNzPVwiYnRuLWVucmljaGVkIGJveC1zaGFkb3ctbGlnaHQgZ3JhZGllbnQtdi1ncmV5XCJcclxuICA+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZmxleC1ncm91cCBmbGV4LWVuZCBidG4tZW5yaWNoZWQtdG9vbGJhclwiPlxyXG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbdG9vbGJhcl1cIj48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJidG4tZW5yaWNoZWQtY29udGVudCBmbGV4LWdyb3VwIGZsZXgtc3RhcnQgZmxleC1hbGlnbi1jZW50ZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIHt7aWNvbkNvbG91cn19XCI+e3tpY29uTmFtZX19PC9kaXY+XHJcbiAgICAgIDxoMiBjbGFzcz1cIm1hcmdpbi0wXCI+e3t0aXRsZX19PC9oMj5cclxuICAgIDwvZGl2PlxyXG4gIDwvYnV0dG9uPlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgKm5nSWY9XCJidXR0b25TcGxpdFwiIGNsYXNzPVwiZmllbGQge3tmaWVsZENsYXNzfX1cIj5cclxuICA8bGFiZWwgW2Zvcl09XCJidXR0b25JZFwiPnt7YnV0dG9uTGFiZWx9fTwvbGFiZWw+XHJcbiAgPGRpdiBcclxuICAgIGNsYXNzPVwiYnV0dG9uLXNwbGl0XCIgXHJcbiAgICBbbmdDbGFzc109XCJ7J25hdi1sZWZ0LXNpZGUnIDogbmF2TGVmdHNpZGUsICduYXYtYm90dG9tJyA6IG5hdkJvdHRvbX1cIlxyXG4gID5cclxuICAgIDxkaXYgY2xhc3M9XCJmbGV4LWdyb3VwIGZsZXgtc3RhcnQgZmxleC1hbGlnbi1jZW50ZXIgZmxleC1ub3dyYXBcIj5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgICpuZ0lmPVwibmF2TGVmdHNpZGVcIlxyXG4gICAgICAgIGNsYXNzPVwiY2hldnJvbi11cFwiXHJcbiAgICAgICAgW2NsYXNzXT1cImJ1dHRvbkNsYXNzXCJcclxuICAgICAgICAoY2xpY2spPVwic2hvd0J0bk1lbnU9IXNob3dCdG5NZW51XCIgXHJcbiAgICAgICAgW3R5cGVdPVwiYnV0dG9uVHlwZVwiIFxyXG4gICAgICAgIFtuYW1lXT1cImJ1dHRvbklkXCIgXHJcbiAgICAgICAgW2lkXT1cImJ1dHRvbklkXCJcclxuICAgICAgPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIChjbGljayk9XCJvbkJ1dHRvbkNsaWNrKCRldmVudClcIlxyXG4gICAgICAgIFtjbGFzc109XCJidXR0b25DbGFzc1wiXHJcbiAgICAgICAgW3R5cGVdPVwiYnV0dG9uVHlwZVwiIFxyXG4gICAgICAgIFtuYW1lXT1cImJ1dHRvbklkXCIgXHJcbiAgICAgICAgW2lkXT1cImJ1dHRvbklkXCJcclxuICAgICAgPlxyXG4gICAgICAgIHt7YnV0dG9uVGV4dH19XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgKm5nSWY9XCIhbmF2TGVmdHNpZGVcIlxyXG4gICAgICAgIGNsYXNzPVwiY2hldnJvbi11cFwiXHJcbiAgICAgICAgW2NsYXNzXT1cImJ1dHRvbkNsYXNzXCJcclxuICAgICAgICAoY2xpY2spPVwic2hvd0J0bk1lbnU9IXNob3dCdG5NZW51XCIgXHJcbiAgICAgICAgW3R5cGVdPVwiYnV0dG9uVHlwZVwiIFxyXG4gICAgICAgIFtuYW1lXT1cImJ1dHRvbklkXCIgXHJcbiAgICAgICAgW2lkXT1cImJ1dHRvbklkXCJcclxuICAgICAgPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPG5hdiBcclxuICAgICAgKGNsaWNrKT1cInNob3dCdG5NZW51PWZhbHNlXCIgXHJcbiAgICAgICpuZ0lmPVwic2hvd0J0bk1lbnVcIiBcclxuICAgICAgY2xhc3M9XCJib3gtc2hhZG93XCJcclxuICAgICAgW25nU3R5bGVdPVwieydtYXgtaGVpZ2h0JyA6IG1heEhlaWdodH1cIlxyXG4gICAgPlxyXG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbYnMtYnV0dG9uc11cIj48L25nLWNvbnRlbnQ+XHJcbiAgICA8L25hdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG48ZGl2ICpuZ0lmPVwiYnV0dG9uU3VtbWFyeVwiIGNsYXNzPVwiZmllbGQge3tmaWVsZENsYXNzfX0gZmxleC1zdHJldGNoXCI+XHJcbiAgPGJ1dHRvblxyXG4gICAgY2xhc3M9XCJ7e3N0YXR1c319IGJ1dHRvbi1zdW1tYXJ5IGJvcmRlci1yYWRpdXMtMC01IGJveC1zaGFkb3ctbGlnaHQgYmctYWEtd2hpdGUtMTAwIHBhZGRpbmctMS01IGZsZXgtY29sdW1uIGJkLWFhLWdyZXktNVwiXHJcbiAgPlxyXG4gICAgPGRpdiBjbGFzcz1cImZsZXgtZ3JvdXAgZmxleC1zdGFydCBmbGV4LWFsaWduLWNlbnRlclwiPlxyXG4gICAgICA8aDEgY2xhc3M9XCJwcmlvcml0eSBiZy1hYS13aGl0ZS0xMDAgYm9yZGVyLXJhZGl1cy01MCB3aWR0aC0zIGhlaWdodC0zIGZsZXgtY2VudGVyIGJkLXNvbGlkXCI+e3tsZXZlbH19PC9oMT5cclxuICAgICAgPGgyIGNsYXNzPVwibWFyZ2luLTBcIj57e3RpdGxlfX08L2gyPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8cCAqbmdJZj1cInNob3dEZXNjcmlwdGlvblwiIGNsYXNzPVwibWFyZ2luLXRvcC0xXCI+XHJcbiAgICAgIHt7ZGVzY319XHJcbiAgICA8L3A+XHJcbiAgPC9idXR0b24+XHJcbjwvZGl2PlxyXG5cclxuPGJ1dHRvblxyXG4gICpuZ0lmPVwiYnV0dG9uRGF5UGlja2VyXCJcclxuICBjbGFzcz1cImJ1dHRvbi1kYXktcGlja2VyIGJveC1zaGFkb3ctbGlnaHRcIlxyXG4gIChjbGljayk9XCJvbkJ1dHRvbkNsaWNrKCRldmVudClcIlxyXG4gIFt0eXBlXT1cImJ1dHRvblR5cGVcIiBcclxuICBbbmFtZV09XCJidXR0b25JZFwiIFxyXG4gIFtpZF09XCJidXR0b25JZFwiIFxyXG4gIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiIFxyXG4+XHJcbiAgPHN0cm9uZz57e2J1dHRvblRleHR9fTwvc3Ryb25nPlxyXG4gIDxkaXY+PC9kaXY+XHJcbjwvYnV0dG9uPlxyXG5cclxuIl19