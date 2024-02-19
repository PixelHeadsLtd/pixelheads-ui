import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
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
const _c0 = a0 => ({ "margin-top-1": a0 });
function AlertComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c0, ctx_r4.collapsible));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r4.alertText, " ");
} }
const _c1 = (a0, a1) => ({ "align-icon-top": a0, "max-height-initial": a1 });
const _c2 = a0 => [a0];
const _c3 = (a0, a1, a2) => ({ "min-width": a0, "max-width": a1, "max-height": a2 });
function AlertComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, AlertComponent_div_0_div_1_Template, 6, 3, "div", 2)(2, AlertComponent_div_0_div_2_Template, 2, 1, "div", 3)(3, AlertComponent_div_0_div_3_Template, 2, 4, "div", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("overflow-hidden ", ctx_r0.alertClass, "");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(8, _c1, ctx_r0.alignIconTop, ctx_r0.expandPanel))("ngStyle", i0.ɵɵpureFunction3(13, _c3, ctx_r0.minWidth, ctx_r0.maxWidth, i0.ɵɵpureFunction1(11, _c2, ctx_r0.collapsedHeight)));
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
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c0, ctx_r11.collapsible));
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
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(8, _c1, ctx_r1.alignIconTop, !ctx_r1.expandPanel))("ngStyle", i0.ɵɵpureFunction3(13, _c3, ctx_r1.minWidth, ctx_r1.maxWidth, i0.ɵɵpureFunction1(11, _c2, ctx_r1.collapsedHeight)));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.collapsible);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.collapsible);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.collapsible);
} }
export class AlertComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL3BhdHRlcm5zL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9wYXR0ZXJucy9hbGVydC9hbGVydC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQzs7OztJQzJCdEUsK0JBQWlFO0lBQUEsNEJBQVk7SUFBQSxpQkFBTzs7O0lBQ3BGLCtCQUFnRTtJQUFBLGdDQUFnQjtJQUFBLGlCQUFPOzs7O0lBZC9GLDhCQU9DLFlBQUE7SUFDd0IsWUFBZ0I7SUFBQSxpQkFBSztJQUMxQyw4QkFHQztJQURHLDJOQUFrQztJQUVsQyw2RUFBb0YsZ0VBQUE7SUFFeEYsaUJBQU0sRUFBQTs7O0lBUGUsZUFBZ0I7SUFBaEIsdUNBQWdCO0lBS1ksZUFBa0I7SUFBbEIsMENBQWtCO0lBQ2xCLGNBQWlCO0lBQWpCLHlDQUFpQjs7O0lBR3RFLDJCQUEwQjtJQUN0QixZQUNKO0lBQUEsaUJBQU07OztJQURGLGNBQ0o7SUFESSxpREFDSjs7OztJQUNBLCtCQUtDO0lBQ0csWUFDSjtJQUFBLGlCQUFNOzs7SUFMRix3RUFFRTtJQUVGLGNBQ0o7SUFESSxpREFDSjs7Ozs7O0lBekNKLDhCQWFDO0lBQ0cscUVBZ0JNLHdEQUFBLHdEQUFBO0lBWVYsaUJBQU07OztJQXZDRixvRUFBc0M7SUFDdEMsNkZBR0UsK0hBQUE7SUFRRyxjQUFpQjtJQUFqQix5Q0FBaUI7SUFnQmhCLGNBQWtCO0lBQWxCLDBDQUFrQjtJQUluQixjQUFpQjtJQUFqQix5Q0FBaUI7OztJQW9DZCwrQkFBaUU7SUFBQSw0QkFBWTtJQUFBLGlCQUFPOzs7SUFDcEYsK0JBQWdFO0lBQUEsZ0NBQWdCO0lBQUEsaUJBQU87Ozs7SUFkL0YsOEJBT0MsWUFBQTtJQUN3QixZQUFnQjtJQUFBLGlCQUFLO0lBQzFDLDhCQUdDO0lBREcsK05BQWtDO0lBRWxDLDZFQUFvRixnRUFBQTtJQUV4RixpQkFBTSxFQUFBOzs7SUFQZSxlQUFnQjtJQUFoQix1Q0FBZ0I7SUFLWSxlQUFrQjtJQUFsQiwwQ0FBa0I7SUFDbEIsY0FBaUI7SUFBakIseUNBQWlCOzs7SUFHdEUsMkJBQTBCO0lBQ3RCLFlBQ0o7SUFBQSxpQkFBTTs7O0lBREYsY0FDSjtJQURJLGtEQUNKOzs7SUFDQSwrQkFLQztJQUNHLFlBQ0o7SUFBQSxpQkFBTTs7O0lBTEYseUVBRUU7SUFFRixjQUNKO0lBREksa0RBQ0o7OztJQXpDSiw4QkFhQztJQUNHLHFFQWdCTSx3REFBQSx3REFBQTtJQVlWLGlCQUFNOzs7SUF2Q0Ysb0VBQXNDO0lBQ3RDLDhGQUdFLCtIQUFBO0lBUUcsY0FBaUI7SUFBakIseUNBQWlCO0lBZ0JoQixjQUFrQjtJQUFsQiwwQ0FBa0I7SUFJbkIsY0FBaUI7SUFBakIseUNBQWlCOztBRHhFMUIsTUFBTSxPQUFPLGNBQWM7SUFhekI7UUFaUyxlQUFVLEdBQVcsRUFBRSxDQUFDO1FBQ3hCLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFDeEIsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUM3QixpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUs3QixvQkFBZSxHQUFZLEtBQUssQ0FBQztJQUUxQixDQUFDOytFQWJOLGNBQWM7b0VBQWQsY0FBYztZQ1AzQixnRUEwQ00sbURBQUE7O1lBekNELDJDQUFzQjtZQTRDdEIsY0FBcUI7WUFBckIsMENBQXFCOzs7aUZEdENiLGNBQWM7Y0FMMUIsU0FBUzsyQkFDRSxVQUFVLG1CQUVILHVCQUF1QixDQUFDLE1BQU07b0JBR3RDLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csZUFBZTtrQkFBdkIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxlQUFlO2tCQUF2QixLQUFLOztrRkFYSyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYS1hbGVydCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FsZXJ0LmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWxlcnRDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGFsZXJ0Q2xhc3M6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGFsZXJ0VGl0bGU6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGFsZXJ0VGV4dDogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgY29sbGFwc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBhbGlnbkljb25Ub3A6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBleHBhbmRQYW5lbDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG1pbldpZHRoOiBhbnk7XHJcbiAgQElucHV0KCkgbWF4V2lkdGg6IGFueTtcclxuICBASW5wdXQoKSBjb2xsYXBzZWRIZWlnaHQ6IGFueTtcclxuICBASW5wdXQoKSByZW1vdmVQYW5lbDogYW55O1xyXG4gIEBJbnB1dCgpIGRlZmF1bHRFeHBhbmRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxufVxyXG4iLCI8ZGl2IFxyXG4gICAgKm5nSWY9XCIhZGVmYXVsdEV4cGFuZGVkXCJcclxuICAgIHJvbGU9XCJhbGVydFwiIFxyXG4gICAgY2xhc3M9XCJvdmVyZmxvdy1oaWRkZW4ge3thbGVydENsYXNzfX1cIlxyXG4gICAgW25nQ2xhc3NdPVwie1xyXG4gICAgICAgICdhbGlnbi1pY29uLXRvcCcgOiBhbGlnbkljb25Ub3AsXHJcbiAgICAgICAgJ21heC1oZWlnaHQtaW5pdGlhbCcgOiBleHBhbmRQYW5lbFxyXG4gICAgfVwiXHJcbiAgICBbbmdTdHlsZV09XCJ7XHJcbiAgICAgICAgJ21pbi13aWR0aCcgOiBtaW5XaWR0aCxcclxuICAgICAgICAnbWF4LXdpZHRoJyA6IG1heFdpZHRoLFxyXG4gICAgICAgICdtYXgtaGVpZ2h0JzogW2NvbGxhcHNlZEhlaWdodF1cclxuICAgIH1cIlxyXG4+XHJcbiAgICA8ZGl2IFxyXG4gICAgICAgICpuZ0lmPVwiY29sbGFwc2libGVcIiBcclxuICAgICAgICBjbGFzcz1cIlxyXG4gICAgICAgIGZsZXgtZ3JvdXAgXHJcbiAgICAgICAgc3BhY2UtYmV0d2VlbiBcclxuICAgICAgICBmbGV4LWFsaWduLWNlbnRlciBcclxuICAgICAgICBtYXJnaW4tdG9wLTAtNVwiXHJcbiAgICA+XHJcbiAgICAgICAgPGgzIGNsYXNzPVwibWFyZ2luLTBcIj57eyBhbGVydFRpdGxlIH19PC9oMz5cclxuICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICBjbGFzcz1cImZsZXgtYWxpZ24tY2VudGVyIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgKGNsaWNrKT1cImV4cGFuZFBhbmVsPSFleHBhbmRQYW5lbFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIHBhZGRpbmctbGVmdC0xXCIgKm5nSWY9XCIhZXhwYW5kUGFuZWxcIj5vcGVuX2luX2Z1bGw8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgcGFkZGluZy1sZWZ0LTFcIiAqbmdJZj1cImV4cGFuZFBhbmVsXCI+Y2xvc2VfZnVsbHNjcmVlbjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiAqbmdJZj1cIiFjb2xsYXBzaWJsZVwiPlxyXG4gICAgICAgIHt7IGFsZXJ0VGV4dCB9fVxyXG4gICAgPC9kaXY+IFxyXG4gICAgPGRpdiBcclxuICAgICAgICAqbmdJZj1cImNvbGxhcHNpYmxlXCJcclxuICAgICAgICBbbmdDbGFzc109XCJ7XHJcbiAgICAgICAgICAgICdtYXJnaW4tdG9wLTEnIDogY29sbGFwc2libGVcclxuICAgICAgICB9XCJcclxuICAgID5cclxuICAgICAgICB7eyBhbGVydFRleHQgfX1cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgXHJcbiAgICAqbmdJZj1cImRlZmF1bHRFeHBhbmRlZFwiXHJcbiAgICByb2xlPVwiYWxlcnRcIiBcclxuICAgIGNsYXNzPVwib3ZlcmZsb3ctaGlkZGVuIHt7YWxlcnRDbGFzc319XCJcclxuICAgIFtuZ0NsYXNzXT1cIntcclxuICAgICAgICAnYWxpZ24taWNvbi10b3AnIDogYWxpZ25JY29uVG9wLFxyXG4gICAgICAgICdtYXgtaGVpZ2h0LWluaXRpYWwnIDogIWV4cGFuZFBhbmVsXHJcbiAgICB9XCJcclxuICAgIFtuZ1N0eWxlXT1cIntcclxuICAgICAgICAnbWluLXdpZHRoJyA6IG1pbldpZHRoLFxyXG4gICAgICAgICdtYXgtd2lkdGgnIDogbWF4V2lkdGgsXHJcbiAgICAgICAgJ21heC1oZWlnaHQnOiBbY29sbGFwc2VkSGVpZ2h0XVxyXG4gICAgfVwiXHJcbj5cclxuICAgIDxkaXYgXHJcbiAgICAgICAgKm5nSWY9XCJjb2xsYXBzaWJsZVwiIFxyXG4gICAgICAgIGNsYXNzPVwiXHJcbiAgICAgICAgZmxleC1ncm91cCBcclxuICAgICAgICBzcGFjZS1iZXR3ZWVuIFxyXG4gICAgICAgIGZsZXgtYWxpZ24tY2VudGVyIFxyXG4gICAgICAgIG1hcmdpbi10b3AtMC01XCJcclxuICAgID5cclxuICAgICAgICA8aDMgY2xhc3M9XCJtYXJnaW4tMFwiPnt7IGFsZXJ0VGl0bGUgfX08L2gzPlxyXG4gICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgIGNsYXNzPVwiZmxleC1hbGlnbi1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAoY2xpY2spPVwiZXhwYW5kUGFuZWw9IWV4cGFuZFBhbmVsXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgcGFkZGluZy1sZWZ0LTFcIiAqbmdJZj1cIiFleHBhbmRQYW5lbFwiPm9wZW5faW5fZnVsbDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBwYWRkaW5nLWxlZnQtMVwiICpuZ0lmPVwiZXhwYW5kUGFuZWxcIj5jbG9zZV9mdWxsc2NyZWVuPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2ICpuZ0lmPVwiIWNvbGxhcHNpYmxlXCI+XHJcbiAgICAgICAge3sgYWxlcnRUZXh0IH19XHJcbiAgICA8L2Rpdj4gXHJcbiAgICA8ZGl2IFxyXG4gICAgICAgICpuZ0lmPVwiY29sbGFwc2libGVcIlxyXG4gICAgICAgIFtuZ0NsYXNzXT1cIntcclxuICAgICAgICAgICAgJ21hcmdpbi10b3AtMScgOiBjb2xsYXBzaWJsZVxyXG4gICAgICAgIH1cIlxyXG4gICAgPlxyXG4gICAgICAgIHt7IGFsZXJ0VGV4dCB9fVxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PiJdfQ==