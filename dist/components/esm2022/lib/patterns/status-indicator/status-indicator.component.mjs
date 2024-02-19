import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = a0 => ({ "remove-line": a0 });
function StatusIndicatorComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 3);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(7, _c0, ctx_r0.removeLine));
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("", item_r1.iconClass, " ", item_r1.iconStatus, "");
    i0.ɵɵpropertyInterpolate("title", item_r1.iconTitle);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r1.iconName, " ");
} }
export class StatusIndicatorComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLWluZGljYXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvcGF0dGVybnMvc3RhdHVzLWluZGljYXRvci9zdGF0dXMtaW5kaWNhdG9yLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9wYXR0ZXJucy9zdGF0dXMtaW5kaWNhdG9yL3N0YXR1cy1pbmRpY2F0b3IuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0lDQzlFLDhCQUlDLGFBQUE7SUFJRyxZQUNBO0lBQUEsaUJBQU0sRUFBQTs7OztJQU5SLHVFQUF3QztJQUd0QyxjQUE4QztJQUE5Qyw2RUFBOEM7SUFDOUMsb0RBQTBCO0lBQzFCLGNBQ0E7SUFEQSxpREFDQTs7QURGUixNQUFNLE9BQU8sd0JBQXdCO0lBTnJDO1FBUVcsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixjQUFTLEdBQVcsRUFBRSxDQUFDO1FBQ3ZCLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUN4QixlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLGtCQUFhLEdBQWUsRUFBRSxDQUFDO0tBRXpDO3lGQVRZLHdCQUF3QjtvRUFBeEIsd0JBQXdCO1lDUnJDLGtDQUF3RDtZQUNwRCx5RUFVTTtZQUNSLGlCQUFVOztZQVZXLGNBQWtCO1lBQWxCLDJDQUFrQjs7O2lGRE01Qix3QkFBd0I7Y0FOcEMsU0FBUzsyQkFDRSxxQkFBcUIsbUJBR2QsdUJBQXVCLENBQUMsTUFBTTtnQkFJdEMsU0FBUztrQkFBakIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxhQUFhO2tCQUFyQixLQUFLOztrRkFQSyx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FhLXN0YXR1cy1pbmRpY2F0b3InLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zdGF0dXMtaW5kaWNhdG9yLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zdGF0dXMtaW5kaWNhdG9yLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIFN0YXR1c0luZGljYXRvckNvbXBvbmVudCB7XHJcblxyXG4gIEBJbnB1dCgpIGljb25DbGFzczogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgaWNvblRpdGxlOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBpY29uTmFtZTogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgaWNvblN0YXR1czogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgcmVtb3ZlTGluZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGN1cnJlbnRTdGF0dXM6IEFycmF5PGFueT4gPSBbXTtcclxuXHJcbn1cclxuIiwiPHNlY3Rpb24gY2xhc3M9XCJzdGF0dXMtaW5kaWNhdG9yIGZsZXgtZ3JvdXAgZmxleC1zdGFydFwiPlxyXG4gICAgPGRpdlxyXG4gICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBjdXJyZW50U3RhdHVzOyBsZXQgaSA9IGluZGV4XCJcclxuICAgICAgY2xhc3M9XCJzdGF0dXMtY29udGFpbmVyXCJcclxuICAgICAgW25nQ2xhc3NdPVwieydyZW1vdmUtbGluZScgOiByZW1vdmVMaW5lfVwiXHJcbiAgICA+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzcz1cInt7aXRlbS5pY29uQ2xhc3N9fSB7e2l0ZW0uaWNvblN0YXR1c319XCJcclxuICAgICAgICB0aXRsZT1cInt7aXRlbS5pY29uVGl0bGV9fVwiPlxyXG4gICAgICAgIHt7aXRlbS5pY29uTmFtZX19XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L3NlY3Rpb24+XHJcbiJdfQ==