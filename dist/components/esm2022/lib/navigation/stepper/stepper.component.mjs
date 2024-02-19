import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = [[["", "steps-header", ""]], [["", "steps-content", ""]], [["", "steps-footer", ""]]];
const _c1 = ["[steps-header]", "[steps-content]", "[steps-footer]"];
export class StepperComponent {
    constructor() {
        this.formName = '';
    }
    static { this.ɵfac = function StepperComponent_Factory(t) { return new (t || StepperComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StepperComponent, selectors: [["aa-stepper"]], inputs: { formName: "formName" }, ngContentSelectors: _c1, decls: 8, vars: 0, consts: [[1, "aa-stepper"], ["formGroup", "formName"], [1, "aa-stepper-header", "flex-group"], [1, "aa-stepper-content"], [1, "aa-stepper-footer"]], template: function StepperComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvbmF2aWdhdGlvbi9zdGVwcGVyL3N0ZXBwZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL25hdmlnYXRpb24vc3RlcHBlci9zdGVwcGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBUTFFLE1BQU0sT0FBTyxnQkFBZ0I7SUFJM0I7UUFGUyxhQUFRLEdBQVcsRUFBRSxDQUFDO0lBRWYsQ0FBQztpRkFKTixnQkFBZ0I7b0VBQWhCLGdCQUFnQjs7WUNSN0IsOEJBQXdCLGNBQUEsWUFBQTtZQUdoQixrQkFBaUQ7WUFDakQsaUJBQUs7WUFDTCxrQ0FBb0M7WUFDaEMscUJBQWtEO1lBQ3RELGlCQUFVO1lBQ1YsOEJBQStCO1lBQzNCLHFCQUFpRDtZQUNyRCxpQkFBTSxFQUFBLEVBQUE7OztpRkRGRCxnQkFBZ0I7Y0FONUIsU0FBUzsyQkFDRSxZQUFZLG1CQUdMLHVCQUF1QixDQUFDLE1BQU07b0JBSXRDLFFBQVE7a0JBQWhCLEtBQUs7O2tGQUZLLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FhLXN0ZXBwZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zdGVwcGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zdGVwcGVyLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIFN0ZXBwZXJDb21wb25lbnQge1xyXG5cclxuICBASW5wdXQoKSBmb3JtTmFtZTogc3RyaW5nID0gJyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJhYS1zdGVwcGVyXCI+XHJcbiAgICA8Zm9ybSBmb3JtR3JvdXA9XCJmb3JtTmFtZVwiPlxyXG4gICAgICAgIDx1bCBjbGFzcz1cImFhLXN0ZXBwZXItaGVhZGVyIGZsZXgtZ3JvdXBcIj5cclxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbc3RlcHMtaGVhZGVyXVwiPjwvbmctY29udGVudD5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiYWEtc3RlcHBlci1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltzdGVwcy1jb250ZW50XVwiPjwvbmctY29udGVudD5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPG5hdiBjbGFzcz1cImFhLXN0ZXBwZXItZm9vdGVyXCI+XHJcbiAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltzdGVwcy1mb290ZXJdXCI+PC9uZy1jb250ZW50PlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgPC9mb3JtPlxyXG48L2Rpdj4iXX0=