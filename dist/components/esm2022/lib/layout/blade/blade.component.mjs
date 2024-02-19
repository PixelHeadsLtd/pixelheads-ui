import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = a0 => ({ "z-index": a0 });
function BladeComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 2);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(1, _c0, ctx_r0.zIndex));
} }
const _c1 = a0 => ({ "pinned": a0 });
function BladeComponent_aside_1_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵlistener("click", function BladeComponent_aside_1_div_3_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r7.toggleThePin($event)); });
    i0.ɵɵtext(1, " push_pin ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(1, _c1, ctx_r3.isPinned));
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
const _c2 = (a0, a1) => ({ "show-blade box-shadow": a0, "show-tabs": a1 });
const _c3 = (a0, a1) => ({ "top": a0, "z-index": a1 });
const _c4 = a0 => ({ "max-width": a0 });
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
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(11, _c2, ctx_r1.toggleBlade, ctx_r1.bladeTabs))("ngStyle", i0.ɵɵpureFunction2(14, _c3, ctx_r1.topPosition, ctx_r1.zIndex + 10));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.enablePinning);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.enableIcon);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(17, _c4, ctx_r1.headingMaxWidth));
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
const _c5 = (a0, a1) => ({ "show-blade box-shadow": a0, "show-tabs custom-header-tabs": a1 });
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
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(7, _c5, ctx_r2.toggleBlade, ctx_r2.customBladeTabs))("ngStyle", i0.ɵɵpureFunction2(10, _c3, ctx_r2.topPosition, ctx_r2.zIndex));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.showBladeModal);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r2.customBladeTabs);
} }
const _c6 = ["*", [["", "blade-tabs", ""]], [["", "blade-modal", ""]], [["", "custom-header", ""]], [["", "custom-content", ""]], [["", "custom-footer", ""]], [["", "blade-custom-modal", ""]], [["", "custom-blade-tabs", ""]]];
const _c7 = ["*", "[blade-tabs]", "[blade-modal]", "[custom-header]", "[custom-content]", "[custom-footer]", "[blade-custom-modal]", "[custom-blade-tabs]"];
export class BladeComponent {
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
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BladeComponent, selectors: [["aa-blade"]], inputs: { pinBlade: "pinBlade", topPosition: "topPosition", zIndex: "zIndex", suppressAutoClose: "suppressAutoClose", customBlade: "customBlade", enableIcon: "enableIcon", iconName: "iconName", bladeTabs: "bladeTabs", customBladeTabs: "customBladeTabs", headingMaxWidth: "headingMaxWidth", blockPageUI: "blockPageUI", showBladeModal: "showBladeModal", bladeSize: "bladeSize", bladeHeading: "bladeHeading", enablePinning: "enablePinning", toggleBlade: "toggleBlade", isPinned: "isPinned" }, outputs: { bladeOpen: "bladeOpen", bladePinned: "bladePinned" }, ngContentSelectors: _c7, decls: 3, vars: 3, consts: [["class", "aa-blade-modal", 3, "ngStyle", 4, "ngIf"], [3, "class", "ngClass", "ngStyle", 4, "ngIf"], [1, "aa-blade-modal", 3, "ngStyle"], [3, "ngClass", "ngStyle"], [1, "blade-header", "flex-group", "space-between", "flex-nowrap"], [1, "flex-group", "flex-start", "flex-align-center"], ["class", "material-icons pin flex-end", 3, "ngClass", "click", 4, "ngIf"], ["class", "material-icons header-icon margin-right-0-5", 4, "ngIf"], [1, "margin-0", "ellipsis", 3, "ngStyle"], [1, "anchor-close", "flex-align-center", 3, "click"], [4, "ngIf"], ["class", "blade-modal flex-center", 4, "ngIf"], [1, "material-icons", "pin", "flex-end", 3, "ngClass", "click"], [1, "material-icons", "header-icon", "margin-right-0-5"], [1, "blade-modal", "flex-center"], [1, "modal-background-tint"], [1, "modal-content"], [1, "blade-header", "custom-header"], [1, "blade-content"], [1, "blade-footer"]], template: function BladeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c6);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxhZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL2xheW91dC9ibGFkZS9ibGFkZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvbGF5b3V0L2JsYWRlL2JsYWRlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0lDQy9FLHlCQUFzRzs7O0lBQXZDLG1FQUFnQzs7Ozs7SUFpQnpGLCtCQUtDO0lBSEcsdUtBQVMsZUFBQSwyQkFBb0IsQ0FBQSxJQUFDO0lBSWhDLDBCQUNGO0lBQUEsaUJBQU07OztJQUpGLHFFQUFpQzs7O0lBS3JDLCtCQUE0RTtJQUFBLFlBQVk7SUFBQSxpQkFBTTs7O0lBQWxCLGNBQVk7SUFBWixxQ0FBWTs7O0lBTzVGLDZDQUFpRTs7O0lBRWpFLCtCQUE0RDtJQUMxRCwwQkFBeUM7SUFDekMsK0JBQTJCO0lBQ3pCLHFCQUFnRDtJQUNsRCxpQkFBTSxFQUFBOzs7Ozs7O0lBbkNWLGdDQVdDLGlCQUFBLGFBQUE7SUFHSyx1RUFPTSwwREFBQTtJQUVOLDZCQUEyRTtJQUN6RSxZQUNGO0lBQUEsaUJBQUssRUFBQTtJQUVQLDRCQUE4RDtJQUFwQix5SkFBUyxlQUFBLGdCQUFTLENBQUEsSUFBQztJQUFDLHFCQUFLO0lBQUEsaUJBQUksRUFBQTtJQUV6RSxzRkFBaUUsNkRBQUE7SUFRakUsbUJBQXlCO0lBQzNCLGlCQUFROzs7SUFwQ04scUVBQXVDO0lBQ3ZDLDJGQUdFLGdGQUFBO0lBU08sZUFBbUI7SUFBbkIsMkNBQW1CO0lBT2xCLGNBQWdCO0lBQWhCLHdDQUFnQjtJQUNRLGNBQTRDO0lBQTVDLDZFQUE0QztJQUN4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QUF2QixLQUFLO1lBRUcsV0FBVztrQkFBbkIsS0FBSztZQUNHLGNBQWM7a0JBQXRCLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNJLFNBQVM7a0JBQWxCLE1BQU07WUFDRyxXQUFXO2tCQUFwQixNQUFNOztrRkFyQkksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWEtYmxhZGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9ibGFkZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYmxhZGUuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQmxhZGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBwaW5CbGFkZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHRvcFBvc2l0aW9uOiBhbnk7XHJcbiAgQElucHV0KCkgekluZGV4OiBudW1iZXIgPSAwO1xyXG4gIEBJbnB1dCgpIHN1cHByZXNzQXV0b0Nsb3NlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgY3VzdG9tQmxhZGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBlbmFibGVJY29uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgaWNvbk5hbWU6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGJsYWRlVGFiczogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGN1c3RvbUJsYWRlVGFiczogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGhlYWRpbmdNYXhXaWR0aDogYW55O1xyXG5cclxuICBASW5wdXQoKSBibG9ja1BhZ2VVSTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHNob3dCbGFkZU1vZGFsOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgYmxhZGVTaXplOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBibGFkZUhlYWRpbmc6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGVuYWJsZVBpbm5pbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSB0b2dnbGVCbGFkZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGlzUGlubmVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIGJsYWRlT3BlbiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICBAT3V0cHV0KCkgYmxhZGVQaW5uZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIG9uQ2xvc2UoKSB7XHJcbiAgICB0aGlzLmJsYWRlT3Blbi5lbWl0KHRoaXMudG9nZ2xlQmxhZGUgPSBmYWxzZSk7XHJcbiAgICBpZiAoIXRoaXMuc3VwcHJlc3NBdXRvQ2xvc2UpIHtcclxuICAgICAgdGhpcy5ibGFkZU9wZW4uZW1pdCh0aGlzLnRvZ2dsZUJsYWRlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvZ2dsZVRoZVBpbihlOmFueSkge1xyXG4gICAgdGhpcy5pc1Bpbm5lZCA9ICF0aGlzLmlzUGlubmVkO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMuYmxhZGVQaW5uZWQuZW1pdCh0aGlzLmlzUGlubmVkKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5ibGFkZVBpbm5lZC5lbWl0KHRoaXMuaXNQaW5uZWQpOyAvLyBpc1Bpbm5lZCBjYWxsYmFja1xyXG4gICAgdGhpcy5ibGFkZU9wZW4uZW1pdCh0aGlzLnRvZ2dsZUJsYWRlKTsgLy8gaXNPcGVuIGNhbGxiYWNrXHJcbiAgfVxyXG5cclxufVxyXG4iLCI8IS0tIE1PREFMIFVJIEJMT0NLIC0tPlxyXG48ZGl2IGNsYXNzPVwiYWEtYmxhZGUtbW9kYWxcIiAqbmdJZj1cInRvZ2dsZUJsYWRlICYmIGJsb2NrUGFnZVVJXCIgW25nU3R5bGVdPVwieyd6LWluZGV4JyA6IHpJbmRleH1cIj48L2Rpdj5cclxuXHJcbjwhLS0gSEVBREVSIEJBS0VEIElOIC0tPlxyXG48YXNpZGUgXHJcbiAgKm5nSWY9XCIhY3VzdG9tQmxhZGVcIiBcclxuICBjbGFzcz1cImJsYWRlIGFuaW1hdGUtYWxsIHt7YmxhZGVTaXplfX1cIiBcclxuICBbbmdDbGFzc109XCJ7XHJcbiAgICAnc2hvdy1ibGFkZSBib3gtc2hhZG93JyA6IHRvZ2dsZUJsYWRlLFxyXG4gICAgJ3Nob3ctdGFicycgOiBibGFkZVRhYnNcclxuICB9XCJcclxuICBbbmdTdHlsZV09XCJ7XHJcbiAgICAndG9wJyA6IHRvcFBvc2l0aW9uLCBcclxuICAgICd6LWluZGV4JyA6IHpJbmRleCsxMFxyXG4gIH1cIlxyXG4+XHJcbiAgPGFydGljbGUgY2xhc3M9XCJibGFkZS1oZWFkZXIgZmxleC1ncm91cCBzcGFjZS1iZXR3ZWVuIGZsZXgtbm93cmFwXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZmxleC1ncm91cCBmbGV4LXN0YXJ0IGZsZXgtYWxpZ24tY2VudGVyXCI+XHJcbiAgICAgIDxkaXYgXHJcbiAgICAgICAgICAqbmdJZj1cImVuYWJsZVBpbm5pbmdcIiBcclxuICAgICAgICAgIChjbGljayk9XCJ0b2dnbGVUaGVQaW4oJGV2ZW50KVwiXHJcbiAgICAgICAgICBbbmdDbGFzc109XCJ7J3Bpbm5lZCcgOiBpc1Bpbm5lZH1cIiBcclxuICAgICAgICAgIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgcGluIGZsZXgtZW5kXCJcclxuICAgICAgPlxyXG4gICAgICAgIHB1c2hfcGluXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2ICpuZ0lmPVwiZW5hYmxlSWNvblwiIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgaGVhZGVyLWljb24gbWFyZ2luLXJpZ2h0LTAtNVwiPnt7aWNvbk5hbWV9fTwvZGl2PlxyXG4gICAgICA8aDIgY2xhc3M9XCJtYXJnaW4tMCBlbGxpcHNpc1wiIFtuZ1N0eWxlXT1cInsnbWF4LXdpZHRoJyA6IGhlYWRpbmdNYXhXaWR0aCB9XCI+XHJcbiAgICAgICAge3tibGFkZUhlYWRpbmd9fVxyXG4gICAgICA8L2gyPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8YSBjbGFzcz1cImFuY2hvci1jbG9zZSBmbGV4LWFsaWduLWNlbnRlclwiIChjbGljayk9XCJvbkNsb3NlKClcIj5DbG9zZTwvYT5cclxuICA8L2FydGljbGU+XHJcbiAgPG5nLWNvbnRlbnQgKm5nSWY9XCJibGFkZVRhYnNcIiBzZWxlY3Q9XCJbYmxhZGUtdGFic11cIj48L25nLWNvbnRlbnQ+XHJcbiAgPCEtLSBCTEFERSBNT0RBTCAtLT5cclxuICA8ZGl2ICpuZ0lmPVwic2hvd0JsYWRlTW9kYWxcIiBjbGFzcz1cImJsYWRlLW1vZGFsIGZsZXgtY2VudGVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYmFja2dyb3VuZC10aW50XCI+PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbYmxhZGUtbW9kYWxdXCI+PC9uZy1jb250ZW50PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L2FzaWRlPlxyXG5cclxuPCEtLSBDVVNUT01JU0FCTEUgSEVBREVSLCBDT05URU5UIEFORCBGT09URVIgLS0+XHJcbjxhc2lkZSBcclxuICAqbmdJZj1cImN1c3RvbUJsYWRlXCIgXHJcbiAgY2xhc3M9XCJibGFkZSBhbmltYXRlLWFsbCB7e2JsYWRlU2l6ZX19XCIgXHJcbiAgW25nQ2xhc3NdPVwie1xyXG4gICAgJ3Nob3ctYmxhZGUgYm94LXNoYWRvdycgOiB0b2dnbGVCbGFkZSxcclxuICAgICdzaG93LXRhYnMgY3VzdG9tLWhlYWRlci10YWJzJyA6IGN1c3RvbUJsYWRlVGFic1xyXG4gIH1cIiBcclxuICBbbmdTdHlsZV09XCJ7XHJcbiAgICAndG9wJyA6IHRvcFBvc2l0aW9uLCBcclxuICAgICd6LWluZGV4JyA6IHpJbmRleFxyXG4gIH1cIlxyXG4+XHJcbiAgPCEtLSBCTEFERSBDVVNUT00gTU9EQUwgLS0+XHJcbiAgPGRpdiAqbmdJZj1cInNob3dCbGFkZU1vZGFsXCIgY2xhc3M9XCJibGFkZS1tb2RhbCBmbGV4LWNlbnRlclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJhY2tncm91bmQtdGludFwiPjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2JsYWRlLWN1c3RvbS1tb2RhbF1cIj48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuXHJcbiAgPGFydGljbGUgY2xhc3M9XCJibGFkZS1oZWFkZXIgY3VzdG9tLWhlYWRlclwiPlxyXG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2N1c3RvbS1oZWFkZXJdXCI+PC9uZy1jb250ZW50PlxyXG4gICAgPG5nLWNvbnRlbnQgKm5nSWY9XCJjdXN0b21CbGFkZVRhYnNcIiBzZWxlY3Q9XCJbY3VzdG9tLWJsYWRlLXRhYnNdXCI+PC9uZy1jb250ZW50PlxyXG4gIDwvYXJ0aWNsZT5cclxuICA8YXJ0aWNsZSBjbGFzcz1cImJsYWRlLWNvbnRlbnRcIj5cclxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltjdXN0b20tY29udGVudF1cIj48L25nLWNvbnRlbnQ+XHJcbiAgPC9hcnRpY2xlPlxyXG4gIDxhcnRpY2xlIGNsYXNzPVwiYmxhZGUtZm9vdGVyXCI+XHJcbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbY3VzdG9tLWZvb3Rlcl1cIj48L25nLWNvbnRlbnQ+XHJcbiAgPC9hcnRpY2xlPlxyXG48L2FzaWRlPlxyXG5cclxuIl19