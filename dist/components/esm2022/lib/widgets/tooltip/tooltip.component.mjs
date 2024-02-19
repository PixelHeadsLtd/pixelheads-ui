import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
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
const _c0 = (a0, a1, a2, a3) => ({ "is-success": a0, "is-info": a1, "is-warning": a2, "is-error": a3 });
function TooltipComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction4(2, _c0, ctx_r2.isSuccess, ctx_r2.isInfo, ctx_r2.isWarning, ctx_r2.isError));
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
const _c1 = a0 => ({ "nowrap": a0 });
function TooltipComponent_a_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c1, ctx_r5.preventAnchorWrapping));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r5.tooltipAnchor, " ");
} }
const _c2 = a0 => ({ "display": a0 });
const _c3 = (a0, a1, a2, a3, a4, a5) => ({ "space-between": a0, "flex-start": a1, "show-as-button": a2, "show-tooltip-on-hover": a3, "show-tooltip-on-click": a4, "tooltip-clicked": a5 });
const _c4 = (a0, a1, a2, a3, a4, a5) => ({ "is-success": a0, "is-info": a1, "is-warning": a2, "is-error": a3, "custom-icon": a4, "as-link": a5 });
const _c5 = a0 => ({ "z-index": a0 });
const _c6 = (a0, a1) => ({ "min-width": a0, "max-width": a1 });
const _c7 = ["*"];
export class TooltipComponent {
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
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(15, _c2, ctx.showAsButton ? "block" : "flex"))("ngClass", i0.ɵɵpureFunction6(17, _c3, ctx.includeLabel, ctx.includeLegend, ctx.showAsButton, ctx.showTooltipOnHover, ctx.showTooltipOnClick, ctx.tooltipClicked));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.includeLabel && !ctx.showAsButton);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.includeLegend && !ctx.showAsButton);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction6(24, _c4, ctx.isSuccess, ctx.isInfo, ctx.isWarning, ctx.isError, ctx.customIcon, ctx.showAsAnchor))("ngStyle", i0.ɵɵpureFunction1(31, _c5, ctx.zIndex));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvd2lkZ2V0cy90b29sdGlwL3Rvb2x0aXAuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL3dpZGdldHMvdG9vbHRpcC90b29sdGlwLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7SUNROUYsZ0NBQWdFO0lBQUEsWUFBYTtJQUFBLGlCQUFROzs7SUFBOUUsZ0RBQWtCO0lBQXVDLGNBQWE7SUFBYixzQ0FBYTs7O0lBQzdFLGlDQUF3RTtJQUFBLFlBQWE7SUFBQSxpQkFBUzs7O0lBQXRCLGNBQWE7SUFBYixzQ0FBYTs7OztJQVVuRiwrQkFLSztJQUNILFlBQ0Y7SUFBQSxpQkFBTTs7O0lBUDJFLHVIQUs3RTtJQUNGLGNBQ0Y7SUFERSxnREFDRjs7OztJQUVBLGtDQUM4RTtJQUFoQyxzS0FBUyxlQUFBLDRCQUFxQixDQUFBLElBQUM7SUFDM0UsNEJBQU07SUFBQSxZQUFjO0lBQUEsaUJBQU8sRUFBQTs7O0lBRDNCLGlDQUFxQjtJQUQyRCxzQ0FBaUIsdUJBQUEsNkJBQUE7SUFFM0YsZUFBYztJQUFkLHVDQUFjOzs7SUFLcEIsNEJBQThCO0lBQUEsWUFBYztJQUFBLGlCQUFPOzs7SUFBckIsY0FBYztJQUFkLHVDQUFjOzs7SUFDNUMsNEJBQTZCO0lBQUEsWUFBa0I7SUFBQSxpQkFBTzs7O0lBQXpCLGNBQWtCO0lBQWxCLDJDQUFrQjs7OztJQUhqRCxrQ0FDOEc7SUFBaEUsaUtBQVMsNkJBQXFCLDZFQUFpQztJQUMzRyw2RUFBbUQsZ0VBQUE7SUFFckQsaUJBQVM7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QUFhO2tCQUFyQixLQUFLO1lBQ0cscUJBQXFCO2tCQUE3QixLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxrQkFBa0I7a0JBQTFCLEtBQUs7WUFDRyxrQkFBa0I7a0JBQTFCLEtBQUs7WUFDRyxjQUFjO2tCQUF0QixLQUFLO1lBQ0csY0FBYztrQkFBdEIsS0FBSztZQUVJLFdBQVc7a0JBQXBCLE1BQU07O2tGQTdCSSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWEtdG9vbHRpcCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3Rvb2x0aXAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9vbHRpcENvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgc2V0TWluV2lkdGg6IGFueTtcclxuICBASW5wdXQoKSBzZXRNYXhXaWR0aDogYW55O1xyXG4gIEBJbnB1dCgpIGlzU3VjY2VzczogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGlzSW5mbzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGlzV2FybmluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGluY2x1ZGVMYWJlbDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGluY2x1ZGVMZWdlbmQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBsYWJlbE5hbWU6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGlzRXJyb3I6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSB4cG9zOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSB5cG9zOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBjdXN0b21JY29uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgaWNvbk5hbWU6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIHpJbmRleDogbnVtYmVyID0gMDtcclxuICBASW5wdXQoKSBsYWJlbEZvcjogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgc2hvd0FzQW5jaG9yOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgdG9vbHRpcEFuY2hvcjogYW55O1xyXG4gIEBJbnB1dCgpIHByZXZlbnRBbmNob3JXcmFwcGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHNob3dBc0J1dHRvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGJ1dHRvblRleHQ6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGJ1dHRvbklkOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBidXR0b25DbGFzczogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBzaG93VG9vbHRpcE9uQ2xpY2s6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBzaG93VG9vbHRpcE9uSG92ZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSB0b29sdGlwQ2xpY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHRvb2x0aXBCdG5UZXh0OiBzdHJpbmcgPSAnJztcclxuXHJcbiAgQE91dHB1dCgpIGJ1dHRvbkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcclxuXHJcbiAgcHVibGljIG9uQnV0dG9uQ2xpY2soZTogRXZlbnQpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLmJ1dHRvbkNsaWNrLmVtaXQoZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJmbGV4LWdyb3VwXCIgW25nU3R5bGVdPVwieyAnZGlzcGxheSc6IHNob3dBc0J1dHRvbiA/ICdibG9jaycgOiAnZmxleCcgfVwiIFtuZ0NsYXNzXT1cIntcclxuICAgICdzcGFjZS1iZXR3ZWVuJyA6IGluY2x1ZGVMYWJlbCxcclxuICAgICdmbGV4LXN0YXJ0JyA6IGluY2x1ZGVMZWdlbmQsXHJcbiAgICAnc2hvdy1hcy1idXR0b24nIDogc2hvd0FzQnV0dG9uLFxyXG4gICAgJ3Nob3ctdG9vbHRpcC1vbi1ob3ZlcicgOiBzaG93VG9vbHRpcE9uSG92ZXIsXHJcbiAgICAnc2hvdy10b29sdGlwLW9uLWNsaWNrJyA6IHNob3dUb29sdGlwT25DbGljayxcclxuICAgICd0b29sdGlwLWNsaWNrZWQnIDogdG9vbHRpcENsaWNrZWRcclxuICB9XCI+XHJcbiAgPGxhYmVsIGZvcj1cInt7bGFiZWxGb3J9fVwiICpuZ0lmPVwiaW5jbHVkZUxhYmVsICYmICFzaG93QXNCdXR0b25cIj57e2xhYmVsTmFtZX19PC9sYWJlbD5cclxuICA8bGVnZW5kIGNsYXNzPVwibWFyZ2luLXJpZ2h0LTAtNVwiICpuZ0lmPVwiaW5jbHVkZUxlZ2VuZCAmJiAhc2hvd0FzQnV0dG9uXCI+e3tsYWJlbE5hbWV9fTwvbGVnZW5kPlxyXG4gIDxkaXYgY2xhc3M9XCJhYS10b29sdGlwIGljb24taW5mb1wiIFtuZ0NsYXNzXT1cIntcclxuICAgICAgJ2lzLXN1Y2Nlc3MnIDogaXNTdWNjZXNzLFxyXG4gICAgICAnaXMtaW5mbycgOiBpc0luZm8sXHJcbiAgICAgICdpcy13YXJuaW5nJyA6IGlzV2FybmluZyxcclxuICAgICAgJ2lzLWVycm9yJyA6IGlzRXJyb3IsXHJcbiAgICAgICdjdXN0b20taWNvbicgOiBjdXN0b21JY29uLFxyXG4gICAgICAnYXMtbGluayc6IHNob3dBc0FuY2hvclxyXG4gICAgfVwiIFtuZ1N0eWxlXT1cInsnei1pbmRleCcgOiB6SW5kZXh9XCI+XHJcblxyXG4gICAgPGRpdiAqbmdJZj1cImN1c3RvbUljb24gJiYgIXNob3dBc0FuY2hvciAmJiAhc2hvd0FzQnV0dG9uXCIgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiIFtuZ0NsYXNzXT1cIntcclxuICAgICAgICAnaXMtc3VjY2VzcycgOiBpc1N1Y2Nlc3MsXHJcbiAgICAgICAgJ2lzLWluZm8nIDogaXNJbmZvLFxyXG4gICAgICAgICdpcy13YXJuaW5nJyA6IGlzV2FybmluZyxcclxuICAgICAgICAnaXMtZXJyb3InIDogaXNFcnJvclxyXG4gICAgICB9XCI+XHJcbiAgICAgIHt7aWNvbk5hbWV9fVxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGJ1dHRvbiAqbmdJZj1cInNob3dBc0J1dHRvbiAmJiAhc2hvd1Rvb2x0aXBPbkNsaWNrXCIgY2xhc3M9XCJzaG93LXRvb2x0aXAtb24taG92ZXJcIiBbbmFtZV09XCJidXR0b25JZFwiIFtpZF09XCJidXR0b25JZFwiXHJcbiAgICAgIFtjbGFzc109XCJidXR0b25DbGFzc1wiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiIChjbGljayk9XCJvbkJ1dHRvbkNsaWNrKCRldmVudClcIj5cclxuICAgICAgPHNwYW4+e3tidXR0b25UZXh0fX08L3NwYW4+XHJcbiAgICA8L2J1dHRvbj5cclxuXHJcbiAgICA8YnV0dG9uICpuZ0lmPVwic2hvd0FzQnV0dG9uICYmIHNob3dUb29sdGlwT25DbGlja1wiIGNsYXNzPVwic2hvdy10b29sdGlwLW9uLWhvdmVyXCIgW25hbWVdPVwiYnV0dG9uSWRcIiBbaWRdPVwiYnV0dG9uSWRcIlxyXG4gICAgICBbY2xhc3NdPVwiYnV0dG9uQ2xhc3NcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiAoY2xpY2spPVwib25CdXR0b25DbGljaygkZXZlbnQpOyB0b29sdGlwQ2xpY2tlZD0hdG9vbHRpcENsaWNrZWRcIj5cclxuICAgICAgPHNwYW4gKm5nSWY9XCIhdG9vbHRpcENsaWNrZWRcIj57e2J1dHRvblRleHR9fTwvc3Bhbj5cclxuICAgICAgPHNwYW4gKm5nSWY9XCJ0b29sdGlwQ2xpY2tlZFwiPnt7dG9vbHRpcEJ0blRleHR9fTwvc3Bhbj5cclxuICAgIDwvYnV0dG9uPlxyXG5cclxuICAgIDxhICpuZ0lmPVwic2hvd0FzQW5jaG9yXCIgY2xhc3M9XCJjdXJzb3ItcG9pbnRlclwiIFtuZ0NsYXNzXT1cInsnbm93cmFwJyA6IHByZXZlbnRBbmNob3JXcmFwcGluZ31cIj5cclxuICAgICAge3t0b29sdGlwQW5jaG9yfX1cclxuICAgIDwvYT5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiZmVhdHVyZS1ib3gge3t4cG9zfX0ge3t5cG9zfX1cIiBbbmdTdHlsZV09XCJ7XHJcbiAgICAgICAgJ21pbi13aWR0aCc6IHNldE1pbldpZHRoLFxyXG4gICAgICAgICdtYXgtd2lkdGgnOiBzZXRNYXhXaWR0aFxyXG4gICAgICB9XCI+XHJcbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19