import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
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
const _c0 = a0 => ({ "width": a0 });
function AccordionComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵprojection(1, 1);
    i0.ɵɵtemplate(2, AccordionComponent_div_5_div_2_Template, 3, 5, "div", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c0, ctx_r2.hideToggleIcon ? "100%" : "calc(100% - 2rem)"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r2.hideToggleIcon);
} }
const _c1 = a0 => ({ "padding": a0 });
function AccordionComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵprojection(1, 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("id", ctx_r3.sectionId)("ngStyle", i0.ɵɵpureFunction1(2, _c1, ctx_r3.clearPadding ? "0" : "1rem 1.25rem"));
} }
const _c2 = [[["", "header-custom", ""]], [["", "bespoke-header", ""]], "*"];
const _c3 = (a0, a1) => ({ "min-width": a0, "min-height": a1 });
const _c4 = (a0, a1) => ({ "box-shadow": a0, "vertical flex-group flex-start": a1 });
const _c5 = (a0, a1, a2, a3, a4) => ({ "expanded": a0, "clean": a1, "disabled": a2, "flex-column": a3, "flex-align-center": a4 });
const _c6 = ["[header-custom]", "[bespoke-header]", "*"];
export class AccordionComponent {
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
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AccordionComponent, selectors: [["aa-accordion"]], inputs: { showBody: "showBody", disabled: "disabled", iconsEnabled: "iconsEnabled", minWidth: "minWidth", dragable: "dragable", sectionId: "sectionId", accordionHeading: "accordionHeading", accordionId: "accordionId", iconName: "iconName", accordionClean: "accordionClean", fontAwesome: "fontAwesome", fontClassName: "fontClassName", iconBgColor: "iconBgColor", customBgColor: "customBgColor", clearPadding: "clearPadding", verticalDisplay: "verticalDisplay", verticalMinHeight: "verticalMinHeight", bespokeHeader: "bespokeHeader", hideToggleIcon: "hideToggleIcon", toggleIconColor: "toggleIconColor" }, outputs: { open: "open" }, ngContentSelectors: _c6, decls: 7, vars: 24, consts: [[1, "accordion-container", 3, "ngStyle", "ngClass"], [1, "margin-0"], ["aria-controls", "sectionId", "type", "button", 3, "ngClass", "id", "click"], ["class", "flex-align-center flex-group flex-start", 4, "ngIf"], ["class", "flex-group flex-end flex-align-center", 4, "ngIf"], ["class", "bespoke-header", 3, "ngStyle", 4, "ngIf"], ["class", "accordion-panel", 3, "id", "ngStyle", 4, "ngIf"], [1, "flex-align-center", "flex-group", "flex-start"], ["class", "accordion-icon material-icons drag-icon", 4, "ngIf"], [3, "class", 4, "ngIf"], [1, "nested-icons"], ["class", "material-icons", 4, "ngIf"], [1, "accordion-heading"], [1, "accordion-icon", "material-icons", "drag-icon"], [1, "material-icons"], [1, "flex-group", "flex-end", "flex-align-center"], [1, "toggle-icons", "flex-align-center"], [1, "bespoke-header", 3, "ngStyle"], [1, "accordion-panel", 3, "id", "ngStyle"]], template: function AccordionComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c2);
            i0.ɵɵelementStart(0, "article", 0)(1, "h3", 1)(2, "button", 2);
            i0.ɵɵlistener("click", function AccordionComponent_Template_button_click_2_listener($event) { return ctx.onOpen($event); });
            i0.ɵɵtemplate(3, AccordionComponent_div_3_Template, 9, 6, "div", 3)(4, AccordionComponent_div_4_Template, 5, 2, "div", 4)(5, AccordionComponent_div_5_Template, 3, 4, "div", 5);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(6, AccordionComponent_div_6_Template, 2, 4, "div", 6);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(12, _c3, ctx.minWidth, ctx.verticalDisplay ? ctx.verticalMinHeight : "auto"))("ngClass", i0.ɵɵpureFunction2(15, _c4, ctx.showBody, ctx.verticalDisplay));
            i0.ɵɵadvance(2);
            i0.ɵɵclassMapInterpolate1("accordion-trigger flex-group space-between flex-nowrap ", ctx.customBgColor, "");
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction5(18, _c5, ctx.showBody, ctx.accordionClean, ctx.disabled, ctx.verticalDisplay, !ctx.verticalDisplay))("id", ctx.accordionId);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi93aWRnZXRzL2FjY29yZGlvbi9hY2NvcmRpb24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL3dpZGdldHMvYWNjb3JkaW9uL2FjY29yZGlvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0lDcUJwRiwrQkFBc0U7SUFBQSw4QkFBYztJQUFBLGlCQUFNOzs7SUFDMUYsMkJBQWdHO0lBQUEsWUFBWTtJQUFBLGlCQUFNOzs7SUFBeEUsbUZBQXFEO0lBQUMsY0FBWTtJQUFaLHFDQUFZOzs7SUFDNUcsc0JBQXdGOzs7SUFBL0Msc0VBQXdDOzs7SUFFL0UsK0JBQThDO0lBQUEsa0NBQWtCO0lBQUEsaUJBQU07OztJQUN0RSwrQkFBNkM7SUFBQSxxQ0FBcUI7SUFBQSxpQkFBTTs7O0lBTjlFLDhCQUE0RTtJQUN4RSx5RUFBMEYsNERBQUEsNERBQUE7SUFHMUYsK0JBQTBCO0lBQ3hCLDBFQUFzRSw2REFBQTtJQUV4RSxpQkFBTTtJQUNOLCtCQUErQjtJQUFBLFlBQW9CO0lBQUEsaUJBQU0sRUFBQTs7O0lBUG5ELGNBQWM7SUFBZCxzQ0FBYztJQUNkLGNBQWtDO0lBQWxDLGlFQUFrQztJQUNsQyxjQUFpQztJQUFqQyxnRUFBaUM7SUFFUixlQUFlO0lBQWYsdUNBQWU7SUFDZixjQUFjO0lBQWQsc0NBQWM7SUFFZCxlQUFvQjtJQUFwQiw2Q0FBb0I7OztJQUtqRCwrQkFBOEM7SUFBQSxtQkFBRztJQUFBLGlCQUFNOzs7SUFDdkQsK0JBQTZDO0lBQUEsc0JBQU07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RyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLGNBQWM7a0JBQXRCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxhQUFhO2tCQUFyQixLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSztZQUNHLGVBQWU7a0JBQXZCLEtBQUs7WUFDRyxpQkFBaUI7a0JBQXpCLEtBQUs7WUFDRyxhQUFhO2tCQUFyQixLQUFLO1lBQ0csY0FBYztrQkFBdEIsS0FBSztZQUNHLGVBQWU7a0JBQXZCLEtBQUs7WUFFSSxJQUFJO2tCQUFiLE1BQU07O2tGQXZCSSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWEtYWNjb3JkaW9uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYWNjb3JkaW9uLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hY2NvcmRpb24uY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uQ29tcG9uZW50IHtcclxuXHJcbiAgQElucHV0KCkgc2hvd0JvZHk6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGljb25zRW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG1pbldpZHRoOiBhbnk7XHJcbiAgQElucHV0KCkgZHJhZ2FibGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBzZWN0aW9uSWQ6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGFjY29yZGlvbkhlYWRpbmc6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGFjY29yZGlvbklkOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBpY29uTmFtZTogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgYWNjb3JkaW9uQ2xlYW46IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBmb250QXdlc29tZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGZvbnRDbGFzc05hbWU6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGljb25CZ0NvbG9yOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBjdXN0b21CZ0NvbG9yOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBjbGVhclBhZGRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSB2ZXJ0aWNhbERpc3BsYXk6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSB2ZXJ0aWNhbE1pbkhlaWdodDogYW55O1xyXG4gIEBJbnB1dCgpIGJlc3Bva2VIZWFkZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBoaWRlVG9nZ2xlSWNvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHRvZ2dsZUljb25Db2xvcjogc3RyaW5nID0gJyc7XHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1vdXRwdXQtbmF0aXZlXHJcbiAgQE91dHB1dCgpIG9wZW4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIG9uT3BlbihlOiB7IHN0b3BQcm9wYWdhdGlvbjogKCkgPT4gdm9pZDsgfSkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGlmICh0aGlzLmRpc2FibGVkICE9PSB0cnVlKSB7XHJcbiAgICAgIHRoaXMub3Blbi5lbWl0KCk7XHJcbiAgICAgIHRoaXMuc2hvd0JvZHkgPSAhIHRoaXMuc2hvd0JvZHk7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG59XHJcbiIsIjxhcnRpY2xlIFxyXG4gIGNsYXNzPVwiYWNjb3JkaW9uLWNvbnRhaW5lclwiXHJcbiAgW25nU3R5bGVdPVwieydtaW4td2lkdGgnIDogbWluV2lkdGgsICdtaW4taGVpZ2h0JzogdmVydGljYWxEaXNwbGF5ID8gdmVydGljYWxNaW5IZWlnaHQgOiAnYXV0bycgfVwiXHJcbiAgW25nQ2xhc3NdPVwieydib3gtc2hhZG93JyA6IHNob3dCb2R5LCAndmVydGljYWwgZmxleC1ncm91cCBmbGV4LXN0YXJ0JyA6IHZlcnRpY2FsRGlzcGxheSB9XCJcclxuPlxyXG4gIDxoMyBjbGFzcz1cIm1hcmdpbi0wXCI+XHJcbiAgICA8YnV0dG9uIFxyXG4gICAgICBjbGFzcz1cImFjY29yZGlvbi10cmlnZ2VyIGZsZXgtZ3JvdXAgc3BhY2UtYmV0d2VlbiBmbGV4LW5vd3JhcCB7e2N1c3RvbUJnQ29sb3J9fVwiIFxyXG4gICAgICBbbmdDbGFzc109XCJ7XHJcbiAgICAgICAgJ2V4cGFuZGVkJyA6IHNob3dCb2R5LCBcclxuICAgICAgICAnY2xlYW4nIDogYWNjb3JkaW9uQ2xlYW4sIFxyXG4gICAgICAgICdkaXNhYmxlZCcgOiBkaXNhYmxlZCwgXHJcbiAgICAgICAgJ2ZsZXgtY29sdW1uJyA6IHZlcnRpY2FsRGlzcGxheSxcclxuICAgICAgICAnZmxleC1hbGlnbi1jZW50ZXInIDogIXZlcnRpY2FsRGlzcGxheVxyXG4gICAgICB9XCJcclxuICAgICAgKGNsaWNrKT1cIm9uT3BlbigkZXZlbnQpXCIgXHJcbiAgICAgIFthdHRyLmFyaWEtZXhwYW5kZWQudHJ1ZV09XCJzaG93Qm9keVwiXHJcbiAgICAgIGFyaWEtY29udHJvbHM9XCJzZWN0aW9uSWRcIiBcclxuICAgICAgW2lkXT1cImFjY29yZGlvbklkXCIgXHJcbiAgICAgIHR5cGU9XCJidXR0b25cIj5cclxuICAgICAgICA8ZGl2ICpuZ0lmPVwiIWJlc3Bva2VIZWFkZXJcIiBjbGFzcz1cImZsZXgtYWxpZ24tY2VudGVyIGZsZXgtZ3JvdXAgZmxleC1zdGFydFwiPlxyXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiZHJhZ2FibGVcIiBjbGFzcz1cImFjY29yZGlvbi1pY29uIG1hdGVyaWFsLWljb25zIGRyYWctaWNvblwiPmRyYWdfaW5kaWNhdG9yPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJpY29uc0VuYWJsZWQgJiYgIWZvbnRBd2Vzb21lXCIgY2xhc3M9XCJhY2NvcmRpb24taWNvbiBtYXRlcmlhbC1pY29ucyB7e2ljb25CZ0NvbG9yfX1cIj57e2ljb25OYW1lfX08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cImljb25zRW5hYmxlZCAmJiBmb250QXdlc29tZVwiIGNsYXNzPVwiYWNjb3JkaW9uLWljb24ge3tmb250Q2xhc3NOYW1lfX1cIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5lc3RlZC1pY29uc1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiICpuZ0lmPVwiIXNob3dCb2R5XCI+YWRkX2NpcmNsZV9vdXRsaW5lPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCIgKm5nSWY9XCJzaG93Qm9keVwiPnJlbW92ZV9jaXJjbGVfb3V0bGluZTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFjY29yZGlvbi1oZWFkaW5nXCI+e3thY2NvcmRpb25IZWFkaW5nfX08L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCIhYmVzcG9rZUhlYWRlclwiIGNsYXNzPVwiZmxleC1ncm91cCBmbGV4LWVuZCBmbGV4LWFsaWduLWNlbnRlclwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2hlYWRlci1jdXN0b21dXCI+PC9uZy1jb250ZW50PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9nZ2xlLWljb25zIGZsZXgtYWxpZ24tY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIiFzaG93Qm9keVwiIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5hZGQ8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwic2hvd0JvZHlcIiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+cmVtb3ZlPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAqbmdJZj1cImJlc3Bva2VIZWFkZXJcIiBcclxuICAgICAgICAgIGNsYXNzPVwiYmVzcG9rZS1oZWFkZXJcIlxyXG4gICAgICAgICAgW25nU3R5bGVdPVwieyAnd2lkdGgnOiBoaWRlVG9nZ2xlSWNvbiA/ICcxMDAlJyA6ICdjYWxjKDEwMCUgLSAycmVtKScgfVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2Jlc3Bva2UtaGVhZGVyXVwiPjwvbmctY29udGVudD5cclxuICAgICAgICAgIDxkaXYgKm5nSWY9XCIhaGlkZVRvZ2dsZUljb25cIiBjbGFzcz1cInRvZ2dsZS1pY29ucyBmbGV4LWFsaWduLWNlbnRlciB7e3RvZ2dsZUljb25Db2xvcn19XCI+XHJcbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCIhc2hvd0JvZHlcIiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+YWRkPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJzaG93Qm9keVwiIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5yZW1vdmU8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9idXR0b24+XHJcbiAgPC9oMz5cclxuICA8ZGl2IFxyXG4gICAgKm5nSWY9XCJzaG93Qm9keVwiIFxyXG4gICAgW2lkXT1cInNlY3Rpb25JZFwiIFxyXG4gICAgY2xhc3M9XCJhY2NvcmRpb24tcGFuZWxcIlxyXG4gICAgW25nU3R5bGVdPVwieyAncGFkZGluZyc6IGNsZWFyUGFkZGluZyA/ICcwJyA6ICcxcmVtIDEuMjVyZW0nIH1cIlxyXG4gICAgPlxyXG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgPC9kaXY+XHJcbjwvYXJ0aWNsZT5cclxuIl19