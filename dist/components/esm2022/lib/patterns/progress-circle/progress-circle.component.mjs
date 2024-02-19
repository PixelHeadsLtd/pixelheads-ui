import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
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
const _c0 = () => ({ "position": "absolute", "right": ".75rem" });
const _c1 = a0 => ({ "min-width": a0 });
function ProgressCircleComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21)(1, "div", 22)(2, "p");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction0(7, _c0));
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("feature-box ", ctx_r6.xpos, " ", ctx_r6.ypos, "");
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(8, _c1, ctx_r6.tooltipMinWidth));
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
const _c2 = (a0, a1, a2, a3) => ({ "tooltip-top-left": a0, "tooltip-top-right": a1, "tooltip-bottom-left": a2, "tooltip-bottom-right": a3 });
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
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction4(10, _c2, ctx_r10.tooltipTopLeft, ctx_r10.tooltipTopRight, ctx_r10.tooltipBottomLeft, ctx_r10.tooltipBottomRight));
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("alert-shield-tooltip ", ctx_r10.alertShieldStatus, "");
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(15, _c1, ctx_r10.tooltipMinWidth));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r10.showTooltipHeading);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("alert-shield small ", ctx_r10.alertShieldStatus, "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r10.alertShieldText, " ");
} }
const _c3 = a0 => ({ "panel-view": a0 });
const _c4 = a0 => ({ "padding-right-1": a0 });
const _c5 = a2 => ({ "stroke-dashoffset": 0, "opacity": ".3", "stroke": a2 });
const _c6 = (a0, a1) => ({ "stroke-dashoffset": a0, "stroke": a1 });
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
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(22, _c3, ctx_r0.panelView));
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("flex-center title ", ctx_r0.headerColor, "");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(24, _c4, ctx_r0.enableTooltip));
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
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(26, _c5, ctx_r0.colour));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(28, _c6, "calc(250 - (250 * " + ctx_r0.percent + ") / 100)", ctx_r0.colour));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r0.percent, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.panelView && !ctx_r0.enableAlertShield && !ctx_r0.enableAlertShieldTooltip);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.enableAlertShield);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.enableAlertShieldTooltip);
} }
const _c7 = a2 => ({ "stroke-dashoffset": 0, "opacity": ".2", "stroke": a2 });
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
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(4, _c7, ctx_r1.colour));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(6, _c6, "calc(250 - (92 * " + ctx_r1.percent + ") / 100)", ctx_r1.colour));
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
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(15, _c5, ctx_r2.colour));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(17, _c6, "calc(250 - (250 * " + ctx_r2.percent + ") / 100)", ctx_r2.colour));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r2.percent, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵclassMapInterpolate1("flex-center ", ctx_r2.customFooterClass, "");
} }
const _c9 = [[["", "tooltip-content", ""]], [["", "custom-header", ""]], [["", "custom-footer", ""]]];
const _c10 = ["[tooltip-content]", "[custom-header]", "[custom-footer]"];
export class ProgressCircleComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtY2lyY2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9wYXR0ZXJucy9wcm9ncmVzcy1jaXJjbGUvcHJvZ3Jlc3MtY2lyY2xlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9wYXR0ZXJucy9wcm9ncmVzcy1jaXJjbGUvcHJvZ3Jlc3MtY2lyY2xlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0lDT3BFLGdDQUFxRztJQUFBLDZCQUFhO0lBQUEsaUJBQU87OztJQUN6SCxnQ0FBNEc7SUFBQSw2QkFBYTtJQUFBLGlCQUFPOzs7SUFDaEksZ0NBQW1IO0lBQUEsb0JBQUk7SUFBQSxpQkFBTzs7Ozs7SUFFaEksK0JBQW1JLGNBQUEsUUFBQTtJQUU1SCxZQUFlO0lBQUEsaUJBQUksRUFBQSxFQUFBOzs7SUFGK0Msb0RBQXlEO0lBQzNILGNBQXFDO0lBQXJDLDRFQUFxQztJQUFDLDRFQUEyQztJQUNqRixlQUFlO0lBQWYsd0NBQWU7OztJQUd0QixnQ0FBK0Q7SUFBQSw2QkFBYTtJQUFBLGlCQUFPOzs7SUFVckYsZ0NBRXVFO0lBQ3JFLFlBQ0Y7SUFBQSxpQkFBTzs7O0lBREwsY0FDRjtJQURFLDZDQUNGOzs7SUFFQSwyQkFHRztJQUNDLFlBQ0o7SUFBQSxpQkFBTTs7O0lBSEosOEVBQWdEO0lBRTlDLGNBQ0o7SUFESSx1REFDSjs7O0lBZ0JNLDBCQUErQjtJQUFBLFlBQWtCO0lBQUEsaUJBQUs7OztJQUF2QixjQUFrQjtJQUFsQiw0Q0FBa0I7Ozs7SUFkdkQsK0JBU0MsY0FBQTtJQUtLLG9GQUFzRDtJQUN0RCxrQkFBb0Q7SUFDeEQsaUJB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QUk7a0JBQVosS0FBSztZQUNHLGVBQWU7a0JBQXZCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxpQkFBaUI7a0JBQXpCLEtBQUs7WUFDRyx3QkFBd0I7a0JBQWhDLEtBQUs7WUFDRyxpQkFBaUI7a0JBQXpCLEtBQUs7WUFDRyxnQkFBZ0I7a0JBQXhCLEtBQUs7WUFDRyxjQUFjO2tCQUF0QixLQUFLO1lBQ0csZUFBZTtrQkFBdkIsS0FBSztZQUNHLGlCQUFpQjtrQkFBekIsS0FBSztZQUNHLGtCQUFrQjtrQkFBMUIsS0FBSztZQUNHLGtCQUFrQjtrQkFBMUIsS0FBSztZQUNHLGNBQWM7a0JBQXRCLEtBQUs7WUFDRyxlQUFlO2tCQUF2QixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLG9CQUFvQjtrQkFBNUIsS0FBSztZQUNHLGlCQUFpQjtrQkFBekIsS0FBSztZQUNHLGlCQUFpQjtrQkFBekIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7O2tGQWxDSyx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYS1wcm9ncmVzcy1jaXJjbGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9ncmVzcy1jaXJjbGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3Byb2dyZXNzLWNpcmNsZS5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc0NpcmNsZUNvbXBvbmVudCB7XHJcblxyXG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIHBlcmNlbnQ6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIHZhbHVlOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBjb2xvdXI6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGlzU21hbGw6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBwYW5lbFZpZXc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBlbmFibGVUb29sdGlwOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgdG9vbHRpcFRpdGxlOiBhbnk7XHJcbiAgQElucHV0KCkgdG9vbHRpcEJvZHk6IGFueTtcclxuICBASW5wdXQoKSB4cG9zOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSB5cG9zOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSB0b29sdGlwTWluV2lkdGg6IGFueTtcclxuICBASW5wdXQoKSBoaWRlQ2hldnJvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGhlYWRlckNvbG9yOiBhbnk7XHJcbiAgQElucHV0KCkgaXNFcnJvcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGlzV2FybmluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGlzSW5mbzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGVuYWJsZUFsZXJ0U2hpZWxkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZW5hYmxlQWxlcnRTaGllbGRUb29sdGlwOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgYWxlcnRTaGllbGRTdGF0dXM6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGFsZXJ0U2hpZWxkU21hbGw6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSB0b29sdGlwVG9wTGVmdDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHRvb2x0aXBUb3BSaWdodDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHRvb2x0aXBCb3R0b21MZWZ0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgdG9vbHRpcEJvdHRvbVJpZ2h0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgc2hvd1Rvb2x0aXBIZWFkaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgdG9vbHRpcEhlYWRpbmc6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGFsZXJ0U2hpZWxkVGV4dDogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgY3VzdG9tQ2xhc3M6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGN1c3RvbVByb2dyZXNzQ2lyY2xlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgY3VzdG9tSGVhZGVyQ2xhc3M6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGN1c3RvbUZvb3RlckNsYXNzOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBwYW5lbEhlaWdodDogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuXHJcbn1cclxuIiwiPGRpdiAqbmdJZj1cIiFpc1NtYWxsICYmICFjdXN0b21Qcm9ncmVzc0NpcmNsZVwiIGNsYXNzPVwicHJvZ3Jlc3MtY2lyY2xlXCIgW25nQ2xhc3NdPVwieydwYW5lbC12aWV3JyA6IHBhbmVsVmlld31cIj5cclxuICA8aDMgY2xhc3M9XCJmbGV4LWNlbnRlciB0aXRsZSB7e2hlYWRlckNvbG9yfX1cIiBbbmdDbGFzc109XCJ7J3BhZGRpbmctcmlnaHQtMScgOiBlbmFibGVUb29sdGlwfVwiPlxyXG4gICAgPHNwYW4gXHJcbiAgICAgIHRpdGxlPVwie3tuYW1lfX1cIlxyXG4gICAgICBjbGFzcz1cImZsZXgtZ3JvdXAgZmxleC1hbGlnbi1jZW50ZXJcIlxyXG4gICAgICA+XHJcbiAgICAgIHt7IChuYW1lLmxlbmd0aD4xOSk/IChuYW1lIHwgc2xpY2U6MDoxOSkrJy4uLic6KG5hbWUpIH19XHJcbiAgICAgIDxzcGFuIHRpdGxlPVwiRXJyb3JcIiAqbmdJZj1cImlzRXJyb3JcIiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIHN0YXR1cyBwYWRkaW5nLWxlZnQtMC0yNSBzbWFsbCBhYS1yZWQtMTAwXCI+ZXJyb3Jfb3V0bGluZTwvc3Bhbj5cclxuICAgICAgPHNwYW4gdGl0bGU9XCJXYXJuaW5nXCIgKm5nSWY9XCJpc1dhcm5pbmdcIiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIHN0YXR1cyBwYWRkaW5nLWxlZnQtMC0yNSBzbWFsbCBhYS1vcmFuZ2UtMTAwXCI+d2FybmluZ19hbWJlcjwvc3Bhbj5cclxuICAgICAgPHNwYW4gdGl0bGU9XCJJbmZvXCIgKm5nSWY9XCJpc0luZm9cIiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIHN0YXR1cyBzbWFsbCBwYWRkaW5nLWxlZnQtMC0yNSBhYS1saWdodC1ibHVlLTEwMFwiPmluZm88L3NwYW4+XHJcbiAgICA8L3NwYW4+XHJcbiAgICA8ZGl2ICpuZ0lmPVwiZW5hYmxlVG9vbHRpcFwiIGNsYXNzPVwiYWEtdG9vbHRpcCBpY29uLWluZm8gbWFyZ2luLWxlZnQtMC0yNVwiIFtuZ1N0eWxlXT1cInsncG9zaXRpb24nIDogJ2Fic29sdXRlJywgJ3JpZ2h0JyA6ICcuNzVyZW0nfVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZmVhdHVyZS1ib3gge3t4cG9zfX0ge3t5cG9zfX1cIiBbbmdTdHlsZV09XCJ7J21pbi13aWR0aCcgOiB0b29sdGlwTWluV2lkdGh9XCI+XHJcbiAgICAgICAgPHA+e3t0b29sdGlwQm9keX19PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPHNwYW4gKm5nSWY9XCJwYW5lbFZpZXcgJiYgIWhpZGVDaGV2cm9uXCIgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmNoZXZyb25fcmlnaHQ8L3NwYW4+XHJcbiAgPC9oMz5cclxuICA8ZGl2IGNsYXNzPVwicGVyY2VudFwiPlxyXG4gICAgPHN2ZyB2aWV3Qm94PVwiMjAgMCA2MCAxMDBcIj5cclxuICAgICAgPGNpcmNsZSBbbmdTdHlsZV09XCJ7J3N0cm9rZS1kYXNob2Zmc2V0JzogMCwgJ29wYWNpdHknOiAnLjMnLCAnc3Ryb2tlJzogY29sb3VyIH1cIiBjeD1cIjQwXCIgY3k9XCI0MFwiIHI9XCI0MFwiPjwvY2lyY2xlPlxyXG4gICAgICA8Y2lyY2xlIFtuZ1N0eWxlXT1cInsnc3Ryb2tlLWRhc2hvZmZzZXQnOiAnY2FsYygyNTAgLSAoMjUwICogJysgcGVyY2VudCArJykgLyAxMDApJywgJ3N0cm9rZSc6IGNvbG91ciB9XCIgY3g9XCI0MFwiIGN5PVwiNDBcIiByPVwiNDBcIj48L2NpcmNsZT5cclxuICAgIDwvc3ZnPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJ2YWx1ZSBtYXJnaW4tMFwiPnt7cGVyY2VudH19IDxzcGFuPiU8L3NwYW4+PC9zcGFuPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8c3BhbiBcclxuICAgIGNsYXNzPVwiYWxpZ24tY2VudGVyIG51bWJlclwiIFxyXG4gICAgKm5nSWY9XCJwYW5lbFZpZXcgJiYgIWVuYWJsZUFsZXJ0U2hpZWxkICYmICFlbmFibGVBbGVydFNoaWVsZFRvb2x0aXBcIj5cclxuICAgIHt7dmFsdWV9fVxyXG4gIDwvc3Bhbj5cclxuXHJcbiAgPGRpdiBcclxuICAgICpuZ0lmPVwiZW5hYmxlQWxlcnRTaGllbGRcIiBcclxuICAgIGNsYXNzPVwiYWxlcnQtc2hpZWxkIHNtYWxsIHt7YWxlcnRTaGllbGRTdGF0dXN9fVwiIFxyXG4gICAgPlxyXG4gICAgICB7e2FsZXJ0U2hpZWxkVGV4dH19XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxkaXYgXHJcbiAgICAqbmdJZj1cImVuYWJsZUFsZXJ0U2hpZWxkVG9vbHRpcFwiIFxyXG4gICAgY2xhc3M9XCJhbGVydC1zaGllbGQtdG9vbHRpcC13cmFwcGVyXCJcclxuICAgIFtuZ0NsYXNzXT1cIntcclxuICAgICAgICAndG9vbHRpcC10b3AtbGVmdCcgOiB0b29sdGlwVG9wTGVmdCxcclxuICAgICAgICAndG9vbHRpcC10b3AtcmlnaHQnIDogdG9vbHRpcFRvcFJpZ2h0LFxyXG4gICAgICAgICd0b29sdGlwLWJvdHRvbS1sZWZ0JyA6IHRvb2x0aXBCb3R0b21MZWZ0LFxyXG4gICAgICAgICd0b29sdGlwLWJvdHRvbS1yaWdodCcgOiB0b29sdGlwQm90dG9tUmlnaHRcclxuICAgIH1cIlxyXG4gID5cclxuICAgIDxkaXYgXHJcbiAgICAgICAgY2xhc3M9XCJhbGVydC1zaGllbGQtdG9vbHRpcCB7e2FsZXJ0U2hpZWxkU3RhdHVzfX1cIlxyXG4gICAgICAgIFtuZ1N0eWxlXT1cInsnbWluLXdpZHRoJyA6IHRvb2x0aXBNaW5XaWR0aH1cIlxyXG4gICAgPlxyXG4gICAgICAgIDxoNCAqbmdJZj1cInNob3dUb29sdGlwSGVhZGluZ1wiPnt7dG9vbHRpcEhlYWRpbmd9fTwvaDQ+XHJcbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3Rvb2x0aXAtY29udGVudF1cIj48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgXHJcbiAgICAgICAgY2xhc3M9XCJhbGVydC1zaGllbGQgc21hbGwge3thbGVydFNoaWVsZFN0YXR1c319XCIgXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3thbGVydFNoaWVsZFRleHR9fVxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuPGxpICpuZ0lmPVwiaXNTbWFsbCAmJiAhY3VzdG9tUHJvZ3Jlc3NDaXJjbGVcIiBjbGFzcz1cImZsZXgtZ3JvdXAgZmxleC1zdGFydFwiPlxyXG4gIDxkaXYgY2xhc3M9XCJwcm9ncmVzcy1jaXJjbGUgc21hbGwgbWFyZ2luLXJpZ2h0LTAtNVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInBlcmNlbnRcIj5cclxuICAgICAgPHN2Zz5cclxuICAgICAgICA8Y2lyY2xlIFtuZ1N0eWxlXT1cInsnc3Ryb2tlLWRhc2hvZmZzZXQnOiAwLCAnb3BhY2l0eSc6ICcuMicsICdzdHJva2UnOiBjb2xvdXIgfVwiIGN4PVwiMTVcIiBjeT1cIjE1XCIgcj1cIjE1XCI+PC9jaXJjbGU+XHJcbiAgICAgICAgPGNpcmNsZSBbbmdTdHlsZV09XCJ7J3N0cm9rZS1kYXNob2Zmc2V0JzogJ2NhbGMoMjUwIC0gKDkyICogJysgcGVyY2VudCArJykgLyAxMDApJywgJ3N0cm9rZSc6IGNvbG91ciB9XCIgY3g9XCIxNVwiIGN5PVwiMTVcIiByPVwiMTVcIj48L2NpcmNsZT5cclxuICAgICAgPC9zdmc+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwidmFsdWUgbWFyZ2luLTBcIj57e3BlcmNlbnR9fSA8c3Bhbj4lPC9zcGFuPjwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJtYXJnaW4tdG9wLTAtNzVcIj57e25hbWV9fTwvZGl2PlxyXG48L2xpPlxyXG5cclxuPGRpdiBcclxuICAqbmdJZj1cImN1c3RvbVByb2dyZXNzQ2lyY2xlXCIgXHJcbiAgY2xhc3M9XCJwcm9ncmVzcy1jaXJjbGUgcGFuZWwtdmlldyBwcm9ncmVzcy1jaXJjbGUtY3VzdG9tIHt7Y3VzdG9tQ2xhc3N9fVwiXHJcbiAgW25nU3R5bGVdPVwieydoZWlnaHQnIDogcGFuZWxIZWlnaHR9XCJcclxuPlxyXG4gIDxoZWFkZXIgY2xhc3M9XCJmbGV4LWNlbnRlciB7e2N1c3RvbUhlYWRlckNsYXNzfX1cIj5cclxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltjdXN0b20taGVhZGVyXVwiPjwvbmctY29udGVudD5cclxuICA8L2hlYWRlcj5cclxuICA8ZGl2IGNsYXNzPVwicGVyY2VudFwiPlxyXG4gICAgPHN2ZyB2aWV3Qm94PVwiMjAgMCA2MCAxMDBcIj5cclxuICAgICAgPGNpcmNsZSBbbmdTdHlsZV09XCJ7J3N0cm9rZS1kYXNob2Zmc2V0JzogMCwgJ29wYWNpdHknOiAnLjMnLCAnc3Ryb2tlJzogY29sb3VyIH1cIiBjeD1cIjQwXCIgY3k9XCI0MFwiIHI9XCI0MFwiPjwvY2lyY2xlPlxyXG4gICAgICA8Y2lyY2xlIFtuZ1N0eWxlXT1cInsnc3Ryb2tlLWRhc2hvZmZzZXQnOiAnY2FsYygyNTAgLSAoMjUwICogJysgcGVyY2VudCArJykgLyAxMDApJywgJ3N0cm9rZSc6IGNvbG91ciB9XCIgY3g9XCI0MFwiIGN5PVwiNDBcIiByPVwiNDBcIj48L2NpcmNsZT5cclxuICAgIDwvc3ZnPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJ2YWx1ZSBtYXJnaW4tMFwiPnt7cGVyY2VudH19IDxzcGFuPiU8L3NwYW4+PC9zcGFuPlxyXG4gIDwvZGl2PlxyXG4gIDxmb290ZXIgY2xhc3M9XCJmbGV4LWNlbnRlciB7e2N1c3RvbUZvb3RlckNsYXNzfX1cIj5cclxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltjdXN0b20tZm9vdGVyXVwiPjwvbmctY29udGVudD5cclxuICA8L2Zvb3Rlcj5cclxuPC9kaXY+Il19