import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class LoadingSpinnerComponent {
    constructor() {
        this.loadingText = 'Loading...';
    }
    static { this.ɵfac = function LoadingSpinnerComponent_Factory(t) { return new (t || LoadingSpinnerComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LoadingSpinnerComponent, selectors: [["aa-loading-spinner"]], inputs: { loadingText: "loadingText" }, decls: 5, vars: 1, consts: [[1, "align-item-center"], [1, "flex-group", "flex-start"], [1, "loading-spinner-small"], [1, "flex-align-center", "text-info", "font-size-default", "text-pulsate"]], template: function LoadingSpinnerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "div", 1);
            i0.ɵɵelement(2, "div", 2);
            i0.ɵɵelementStart(3, "div", 3);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.loadingText);
        } }, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoadingSpinnerComponent, [{
        type: Component,
        args: [{ selector: 'aa-loading-spinner', changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"align-item-center\">\r\n  <div class=\"flex-group flex-start\">\r\n      <div class=\"loading-spinner-small\"></div>\r\n      <div class=\"flex-align-center text-info font-size-default text-pulsate\">{{loadingText}}</div>\r\n  </div>\r\n</section>\r\n" }]
    }], () => [], { loadingText: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LoadingSpinnerComponent, { className: "LoadingSpinnerComponent", filePath: "lib\\animations\\loading-spinner\\loading-spinner.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1zcGlubmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9hbmltYXRpb25zL2xvYWRpbmctc3Bpbm5lci9sb2FkaW5nLXNwaW5uZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL2FuaW1hdGlvbnMvbG9hZGluZy1zcGlubmVyL2xvYWRpbmctc3Bpbm5lci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQzs7QUFRbEYsTUFBTSxPQUFPLHVCQUF1QjtJQUlsQztRQUZTLGdCQUFXLEdBQUcsWUFBWSxDQUFDO0lBRXBCLENBQUM7d0ZBSk4sdUJBQXVCO29FQUF2Qix1QkFBdUI7WUNScEMsa0NBQW1DLGFBQUE7WUFFN0IseUJBQXlDO1lBQ3pDLDhCQUF3RTtZQUFBLFlBQWU7WUFBQSxpQkFBTSxFQUFBLEVBQUE7O1lBQXJCLGVBQWU7WUFBZixxQ0FBZTs7O2lGREtoRix1QkFBdUI7Y0FObkMsU0FBUzsyQkFDRSxvQkFBb0IsbUJBR2IsdUJBQXVCLENBQUMsTUFBTTtvQkFJdEMsV0FBVztrQkFBbkIsS0FBSzs7a0ZBRkssdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYS1sb2FkaW5nLXNwaW5uZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2FkaW5nLXNwaW5uZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2xvYWRpbmctc3Bpbm5lci5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2FkaW5nU3Bpbm5lckNvbXBvbmVudCB7XHJcblxyXG4gIEBJbnB1dCgpIGxvYWRpbmdUZXh0ID0gJ0xvYWRpbmcuLi4nO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuXHJcblxyXG59XHJcbiIsIjxzZWN0aW9uIGNsYXNzPVwiYWxpZ24taXRlbS1jZW50ZXJcIj5cclxuICA8ZGl2IGNsYXNzPVwiZmxleC1ncm91cCBmbGV4LXN0YXJ0XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nLXNwaW5uZXItc21hbGxcIj48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZsZXgtYWxpZ24tY2VudGVyIHRleHQtaW5mbyBmb250LXNpemUtZGVmYXVsdCB0ZXh0LXB1bHNhdGVcIj57e2xvYWRpbmdUZXh0fX08L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9zZWN0aW9uPlxyXG4iXX0=