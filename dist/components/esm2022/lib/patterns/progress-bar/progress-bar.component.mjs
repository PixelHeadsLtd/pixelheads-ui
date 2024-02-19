import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = a0 => ({ "width": a0 });
const _c1 = a0 => ({ "display-over-header": a0 });
export class ProgressBarComponent {
    constructor() {
        this.titleBold = '';
        this.titleRegular = '';
        this.complete = 0;
        this.maxWidth = '';
        this.displayOverHeader = false;
    }
    static { this.ɵfac = function ProgressBarComponent_Factory(t) { return new (t || ProgressBarComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProgressBarComponent, selectors: [["aa-progress-bar"]], inputs: { titleBold: "titleBold", titleRegular: "titleRegular", leftSideText: "leftSideText", rightSideText: "rightSideText", complete: "complete", maxWidth: "maxWidth", displayOverHeader: "displayOverHeader", progressBgColour: "progressBgColour", progressColour: "progressColour", progressId: "progressId" }, decls: 13, vars: 20, consts: [[1, "progress-bar", 3, "ngStyle", "ngClass"], [3, "id", "ngStyle"], [1, "flex-group", "space-between"]], template: function ProgressBarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "span")(2, "strong");
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "span");
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "div");
            i0.ɵɵelement(7, "div", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div", 2)(9, "div");
            i0.ɵɵtext(10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "div");
            i0.ɵɵtext(12);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(14, _c0, ctx.maxWidth))("ngClass", i0.ɵɵpureFunction1(16, _c1, ctx.displayOverHeader));
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1("", ctx.titleBold, " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.titleRegular);
            i0.ɵɵadvance();
            i0.ɵɵclassMapInterpolate1("progress ", ctx.progressBgColour, "");
            i0.ɵɵadvance();
            i0.ɵɵclassMap(ctx.progressColour);
            i0.ɵɵproperty("id", ctx.progressId)("ngStyle", i0.ɵɵpureFunction1(18, _c0, ctx.complete + "%"));
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.leftSideText);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.rightSideText);
        } }, dependencies: [i1.NgClass, i1.NgStyle], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProgressBarComponent, [{
        type: Component,
        args: [{ selector: 'aa-progress-bar', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div \r\n    class=\"progress-bar\" \r\n    [ngStyle]=\"{'width' : maxWidth}\"\r\n    [ngClass]=\"{'display-over-header' : displayOverHeader}\"\r\n>\r\n    <span>\r\n        <strong>{{titleBold}} </strong>\r\n        <span>{{titleRegular}}</span>\r\n    </span>\r\n    <div class=\"progress {{progressBgColour}}\">\r\n        <div [id]=\"progressId\" class=\"{{progressColour}}\" [ngStyle]=\"{'width' : complete+'%'}\"></div>\r\n    </div>\r\n    <div class=\"flex-group space-between\">\r\n        <div>{{leftSideText}}</div>\r\n        <div>{{rightSideText}}</div>\r\n    </div>\r\n</div>" }]
    }], () => [], { titleBold: [{
            type: Input
        }], titleRegular: [{
            type: Input
        }], leftSideText: [{
            type: Input
        }], rightSideText: [{
            type: Input
        }], complete: [{
            type: Input
        }], maxWidth: [{
            type: Input
        }], displayOverHeader: [{
            type: Input
        }], progressBgColour: [{
            type: Input
        }], progressColour: [{
            type: Input
        }], progressId: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ProgressBarComponent, { className: "ProgressBarComponent", filePath: "lib\\patterns\\progress-bar\\progress-bar.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9wYXR0ZXJucy9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9wYXR0ZXJucy9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztBQVExRSxNQUFNLE9BQU8sb0JBQW9CO0lBYS9CO1FBWFMsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixpQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUcxQixhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsc0JBQWlCLEdBQVksS0FBSyxDQUFDO0lBSzVCLENBQUM7cUZBYk4sb0JBQW9CO29FQUFwQixvQkFBb0I7WUNSakMsOEJBSUMsV0FBQSxhQUFBO1lBRWUsWUFBYztZQUFBLGlCQUFTO1lBQy9CLDRCQUFNO1lBQUEsWUFBZ0I7WUFBQSxpQkFBTyxFQUFBO1lBRWpDLDJCQUEyQztZQUN2Qyx5QkFBNkY7WUFDakcsaUJBQU07WUFDTiw4QkFBc0MsVUFBQTtZQUM3QixhQUFnQjtZQUFBLGlCQUFNO1lBQzNCLDRCQUFLO1lBQUEsYUFBaUI7WUFBQSxpQkFBTSxFQUFBLEVBQUE7O1lBWmhDLG1FQUFnQywrREFBQTtZQUlwQixlQUFjO1lBQWQsNkNBQWM7WUFDaEIsZUFBZ0I7WUFBaEIsc0NBQWdCO1lBRXJCLGNBQXFDO1lBQXJDLGdFQUFxQztZQUNmLGNBQTBCO1lBQTFCLGlDQUEwQjtZQUE1QyxtQ0FBaUIsNERBQUE7WUFHakIsZUFBZ0I7WUFBaEIsc0NBQWdCO1lBQ2hCLGVBQWlCO1lBQWpCLHVDQUFpQjs7O2lGRE5qQixvQkFBb0I7Y0FOaEMsU0FBUzsyQkFDRSxpQkFBaUIsbUJBR1YsdUJBQXVCLENBQUMsTUFBTTtvQkFJdEMsU0FBUztrQkFBakIsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csaUJBQWlCO2tCQUF6QixLQUFLO1lBQ0csZ0JBQWdCO2tCQUF4QixLQUFLO1lBQ0csY0FBYztrQkFBdEIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7O2tGQVhLLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FhLXByb2dyZXNzLWJhcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2dyZXNzLWJhci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2dyZXNzQmFyQ29tcG9uZW50IHtcclxuXHJcbiAgQElucHV0KCkgdGl0bGVCb2xkOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSB0aXRsZVJlZ3VsYXI6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGxlZnRTaWRlVGV4dDogYW55O1xyXG4gIEBJbnB1dCgpIHJpZ2h0U2lkZVRleHQ6IGFueTtcclxuICBASW5wdXQoKSBjb21wbGV0ZTogbnVtYmVyID0gMDtcclxuICBASW5wdXQoKSBtYXhXaWR0aDogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgZGlzcGxheU92ZXJIZWFkZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBwcm9ncmVzc0JnQ29sb3VyOiBhbnk7XHJcbiAgQElucHV0KCkgcHJvZ3Jlc3NDb2xvdXI6IGFueTtcclxuICBASW5wdXQoKSBwcm9ncmVzc0lkOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG59XHJcbiIsIjxkaXYgXHJcbiAgICBjbGFzcz1cInByb2dyZXNzLWJhclwiIFxyXG4gICAgW25nU3R5bGVdPVwieyd3aWR0aCcgOiBtYXhXaWR0aH1cIlxyXG4gICAgW25nQ2xhc3NdPVwieydkaXNwbGF5LW92ZXItaGVhZGVyJyA6IGRpc3BsYXlPdmVySGVhZGVyfVwiXHJcbj5cclxuICAgIDxzcGFuPlxyXG4gICAgICAgIDxzdHJvbmc+e3t0aXRsZUJvbGR9fSA8L3N0cm9uZz5cclxuICAgICAgICA8c3Bhbj57e3RpdGxlUmVndWxhcn19PC9zcGFuPlxyXG4gICAgPC9zcGFuPlxyXG4gICAgPGRpdiBjbGFzcz1cInByb2dyZXNzIHt7cHJvZ3Jlc3NCZ0NvbG91cn19XCI+XHJcbiAgICAgICAgPGRpdiBbaWRdPVwicHJvZ3Jlc3NJZFwiIGNsYXNzPVwie3twcm9ncmVzc0NvbG91cn19XCIgW25nU3R5bGVdPVwieyd3aWR0aCcgOiBjb21wbGV0ZSsnJSd9XCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJmbGV4LWdyb3VwIHNwYWNlLWJldHdlZW5cIj5cclxuICAgICAgICA8ZGl2Pnt7bGVmdFNpZGVUZXh0fX08L2Rpdj5cclxuICAgICAgICA8ZGl2Pnt7cmlnaHRTaWRlVGV4dH19PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+Il19