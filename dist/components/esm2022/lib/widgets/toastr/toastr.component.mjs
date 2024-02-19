import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = a0 => ({ "z-index": a0 });
const _c1 = ["*"];
export class ToastrComponent {
    constructor() {
        this.zIndex = 0;
    }
    static { this.ɵfac = function ToastrComponent_Factory(t) { return new (t || ToastrComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ToastrComponent, selectors: [["aa-toastr"]], inputs: { zIndex: "zIndex" }, ngContentSelectors: _c1, decls: 2, vars: 3, consts: [[1, "aa-toastr", 3, "ngStyle"]], template: function ToastrComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵprojection(1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(1, _c0, ctx.zIndex));
        } }, dependencies: [i1.NgStyle], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToastrComponent, [{
        type: Component,
        args: [{ selector: 'aa-toastr', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"aa-toastr\" [ngStyle]=\"{'z-index' : zIndex}\">\r\n    <ng-content></ng-content>\r\n</div>\r\n" }]
    }], () => [], { zIndex: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ToastrComponent, { className: "ToastrComponent", filePath: "lib\\widgets\\toastr\\toastr.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3RyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi93aWRnZXRzL3RvYXN0ci90b2FzdHIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL3dpZGdldHMvdG9hc3RyL3RvYXN0ci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFRMUUsTUFBTSxPQUFPLGVBQWU7SUFJMUI7UUFGUyxXQUFNLEdBQVcsQ0FBQyxDQUFDO0lBRVosQ0FBQztnRkFKTixlQUFlO29FQUFmLGVBQWU7O1lDUjVCLDhCQUF3RDtZQUNwRCxrQkFBeUI7WUFDN0IsaUJBQU07O1lBRmlCLGdFQUFnQzs7O2lGRFExQyxlQUFlO2NBTjNCLFNBQVM7MkJBQ0UsV0FBVyxtQkFHSix1QkFBdUIsQ0FBQyxNQUFNO29CQUl0QyxNQUFNO2tCQUFkLEtBQUs7O2tGQUZLLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYS10b2FzdHInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90b2FzdHIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RvYXN0ci5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb2FzdHJDb21wb25lbnQge1xyXG5cclxuICBASW5wdXQoKSB6SW5kZXg6IG51bWJlciA9IDA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJhYS10b2FzdHJcIiBbbmdTdHlsZV09XCJ7J3otaW5kZXgnIDogekluZGV4fVwiPlxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L2Rpdj5cclxuIl19