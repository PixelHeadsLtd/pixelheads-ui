import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = (a0, a1) => ({ "width": a0, "height": a1 });
const _c1 = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) => ({ "approved-forward": a0, "pending-forward": a1, "rejected-forward": a2, "withdrawn-forward": a3, "returned-forward": a4, "abandoned-forward": a5, "draft-forward": a6, "withdrawn-pending-forward": a7, "reset-all": a8, "full-width": a9 });
const _c2 = ["*"];
export class InfoPanelStackedComponent {
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
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InfoPanelStackedComponent, selectors: [["aa-info-panel-stacked"]], inputs: { approvedForward: "approvedForward", pendingForward: "pendingForward", rejectedForward: "rejectedForward", withdrawnForward: "withdrawnForward", returnedForward: "returnedForward", abandonedForward: "abandonedForward", draftForward: "draftForward", withdrawalPendingForward: "withdrawalPendingForward", resetAll: "resetAll", wrapperWidth: "wrapperWidth", wrapperHeight: "wrapperHeight", fullWidth: "fullWidth" }, ngContentSelectors: _c2, decls: 2, vars: 16, consts: [[1, "info-panel-stacked", 3, "ngStyle", "ngClass"]], template: function InfoPanelStackedComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "section", 0);
            i0.ɵɵprojection(1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(2, _c0, ctx.wrapperWidth, ctx.wrapperHeight))("ngClass", i0.ɵɵpureFunctionV(5, _c1, [ctx.approvedForward, ctx.pendingForward, ctx.rejectedForward, ctx.withdrawnForward, ctx.returnedForward, ctx.abandonedForward, ctx.draftForward, ctx.withdrawalPendingForward, ctx.resetAll, ctx.fullWidth]));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby1wYW5lbC1zdGFja2VkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi93aWRnZXRzL2luZm8tcGFuZWwtc3RhY2tlZC9pbmZvLXBhbmVsLXN0YWNrZWQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL3dpZGdldHMvaW5mby1wYW5lbC1zdGFja2VkL2luZm8tcGFuZWwtc3RhY2tlZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBUTFFLE1BQU0sT0FBTyx5QkFBeUI7SUFnQnBDO1FBZFMsb0JBQWUsR0FBWSxLQUFLLENBQUM7UUFDakMsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFDaEMsb0JBQWUsR0FBWSxLQUFLLENBQUM7UUFDakMscUJBQWdCLEdBQVksS0FBSyxDQUFDO1FBQ2xDLG9CQUFlLEdBQVksS0FBSyxDQUFDO1FBQ2pDLHFCQUFnQixHQUFZLEtBQUssQ0FBQztRQUNsQyxpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5Qiw2QkFBd0IsR0FBWSxLQUFLLENBQUM7UUFFMUMsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUcxQixjQUFTLEdBQVksS0FBSyxDQUFDO0lBRXBCLENBQUM7MEZBaEJOLHlCQUF5QjtvRUFBekIseUJBQXlCOztZQ1J0QyxrQ0FrQkM7WUFDQyxrQkFBeUI7WUFDM0IsaUJBQVU7O1lBbEJSLHlGQUdFLHFQQUFBOzs7aUZER1MseUJBQXlCO2NBTnJDLFNBQVM7MkJBQ0UsdUJBQXVCLG1CQUdoQix1QkFBdUIsQ0FBQyxNQUFNO29CQUl0QyxlQUFlO2tCQUF2QixLQUFLO1lBQ0csY0FBYztrQkFBdEIsS0FBSztZQUNHLGVBQWU7a0JBQXZCLEtBQUs7WUFDRyxnQkFBZ0I7a0JBQXhCLEtBQUs7WUFDRyxlQUFlO2tCQUF2QixLQUFLO1lBQ0csZ0JBQWdCO2tCQUF4QixLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSztZQUNHLHdCQUF3QjtrQkFBaEMsS0FBSztZQUVHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7O2tGQWRLLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FhLWluZm8tcGFuZWwtc3RhY2tlZCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2luZm8tcGFuZWwtc3RhY2tlZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vaW5mby1wYW5lbC1zdGFja2VkLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIEluZm9QYW5lbFN0YWNrZWRDb21wb25lbnQge1xyXG5cclxuICBASW5wdXQoKSBhcHByb3ZlZEZvcndhcmQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBwZW5kaW5nRm9yd2FyZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHJlamVjdGVkRm9yd2FyZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHdpdGhkcmF3bkZvcndhcmQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSByZXR1cm5lZEZvcndhcmQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBhYmFuZG9uZWRGb3J3YXJkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZHJhZnRGb3J3YXJkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgd2l0aGRyYXdhbFBlbmRpbmdGb3J3YXJkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpIHJlc2V0QWxsOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgd3JhcHBlcldpZHRoOiBhbnk7XHJcbiAgQElucHV0KCkgd3JhcHBlckhlaWdodDogYW55O1xyXG4gIEBJbnB1dCgpIGZ1bGxXaWR0aDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxufVxyXG4iLCI8c2VjdGlvbiBcclxuICBjbGFzcz1cImluZm8tcGFuZWwtc3RhY2tlZFwiXHJcbiAgW25nU3R5bGVdPVwie1xyXG4gICAgJ3dpZHRoJyA6IHdyYXBwZXJXaWR0aCwgXHJcbiAgICAnaGVpZ2h0JyA6IHdyYXBwZXJIZWlnaHRcclxuICB9XCJcclxuICBbbmdDbGFzc109XCJ7XHJcbiAgICAnYXBwcm92ZWQtZm9yd2FyZCcgOiBhcHByb3ZlZEZvcndhcmQsXHJcbiAgICAncGVuZGluZy1mb3J3YXJkJyA6IHBlbmRpbmdGb3J3YXJkLFxyXG4gICAgJ3JlamVjdGVkLWZvcndhcmQnIDogcmVqZWN0ZWRGb3J3YXJkLFxyXG4gICAgJ3dpdGhkcmF3bi1mb3J3YXJkJyA6IHdpdGhkcmF3bkZvcndhcmQsXHJcbiAgICAncmV0dXJuZWQtZm9yd2FyZCcgOiByZXR1cm5lZEZvcndhcmQsXHJcbiAgICAnYWJhbmRvbmVkLWZvcndhcmQnIDogYWJhbmRvbmVkRm9yd2FyZCxcclxuICAgICdkcmFmdC1mb3J3YXJkJyA6IGRyYWZ0Rm9yd2FyZCxcclxuICAgICd3aXRoZHJhd24tcGVuZGluZy1mb3J3YXJkJyA6IHdpdGhkcmF3YWxQZW5kaW5nRm9yd2FyZCxcclxuICAgICdyZXNldC1hbGwnIDogcmVzZXRBbGwsXHJcbiAgICAnZnVsbC13aWR0aCcgOiBmdWxsV2lkdGhcclxuICB9XCJcclxuPlxyXG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPC9zZWN0aW9uPlxyXG4iXX0=