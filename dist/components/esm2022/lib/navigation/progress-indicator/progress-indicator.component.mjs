import { ChangeDetectionStrategy, Component, Input, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function ProgressIndicatorComponent_li_0_a_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("href", ctx_r2.progressLink, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.progressLabel);
} }
function ProgressIndicatorComponent_li_0_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r3.progressLabel);
} }
function ProgressIndicatorComponent_li_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li")(1, "div");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, ProgressIndicatorComponent_li_0_a_3_Template, 2, 2, "a", 1)(4, ProgressIndicatorComponent_li_0_span_4_Template, 2, 1, "span", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r0.progressClass);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.progressCount);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.asLink);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.asLink);
} }
function ProgressIndicatorComponent_li_1_a_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("href", ctx_r4.progressLink, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r4.progressLabel);
} }
function ProgressIndicatorComponent_li_1_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r5.progressLabel);
} }
function ProgressIndicatorComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li")(1, "i", 4);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, ProgressIndicatorComponent_li_1_a_3_Template, 2, 2, "a", 1)(4, ProgressIndicatorComponent_li_1_span_4_Template, 2, 1, "span", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("align-center ", ctx_r1.progressClass, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.iconName);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.asLink);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.asLink);
} }
export class ProgressIndicatorComponent {
    constructor() {
        this.asLink = false;
        this.progressCount = '';
        this.progressClass = '';
        this.progressLink = '';
        this.progressLabel = '';
        this.iconsEnabled = false;
        this.iconName = '';
    }
    static { this.ɵfac = function ProgressIndicatorComponent_Factory(t) { return new (t || ProgressIndicatorComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProgressIndicatorComponent, selectors: [["aa-progress-indicator"]], inputs: { asLink: "asLink", progressCount: "progressCount", progressClass: "progressClass", progressLink: "progressLink", progressLabel: "progressLabel", iconsEnabled: "iconsEnabled", iconName: "iconName" }, decls: 2, vars: 2, consts: [[3, "class", 4, "ngIf"], [3, "href", 4, "ngIf"], [4, "ngIf"], [3, "href"], [1, "material-icons", "padding-x-0-25"]], template: function ProgressIndicatorComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ProgressIndicatorComponent_li_0_Template, 5, 6, "li", 0)(1, ProgressIndicatorComponent_li_1_Template, 5, 6, "li", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.iconsEnabled);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.iconsEnabled);
        } }, dependencies: [i1.NgIf], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProgressIndicatorComponent, [{
        type: Component,
        args: [{ selector: 'aa-progress-indicator', changeDetection: ChangeDetectionStrategy.OnPush, template: "<li *ngIf=\"!iconsEnabled\" class=\"{{ progressClass }}\">\r\n  <div>{{ progressCount }}</div>\r\n  <a *ngIf=\"asLink\" href=\"{{ progressLink }}\">{{ progressLabel }}</a>\r\n  <span *ngIf=\"!asLink\">{{ progressLabel }}</span>\r\n</li>\r\n\r\n<li *ngIf=\"iconsEnabled\" class=\"align-center {{ progressClass }}\">\r\n  <i class=\"material-icons padding-x-0-25\">{{ iconName }}</i>\r\n  <a *ngIf=\"asLink\" href=\"{{ progressLink }}\">{{ progressLabel }}</a>\r\n  <span *ngIf=\"!asLink\">{{ progressLabel }}</span>\r\n</li>\r\n" }]
    }], () => [], { asLink: [{
            type: Input
        }], progressCount: [{
            type: Input
        }], progressClass: [{
            type: Input
        }], progressLink: [{
            type: Input
        }], progressLabel: [{
            type: Input
        }], iconsEnabled: [{
            type: Input
        }], iconName: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ProgressIndicatorComponent, { className: "ProgressIndicatorComponent", filePath: "lib\\navigation\\progress-indicator\\progress-indicator.component.ts", lineNumber: 13 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtaW5kaWNhdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9uYXZpZ2F0aW9uL3Byb2dyZXNzLWluZGljYXRvci9wcm9ncmVzcy1pbmRpY2F0b3IuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL25hdmlnYXRpb24vcHJvZ3Jlc3MtaW5kaWNhdG9yL3Byb2dyZXNzLWluZGljYXRvci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEdBQ04sTUFBTSxlQUFlLENBQUM7Ozs7SUNGckIsNEJBQTRDO0lBQUEsWUFBbUI7SUFBQSxpQkFBSTs7O0lBQWpELHVFQUF5QjtJQUFDLGNBQW1CO0lBQW5CLDBDQUFtQjs7O0lBQy9ELDRCQUFzQjtJQUFBLFlBQW1CO0lBQUEsaUJBQU87OztJQUExQixjQUFtQjtJQUFuQiwwQ0FBbUI7OztJQUgzQywwQkFBc0QsVUFBQTtJQUMvQyxZQUFtQjtJQUFBLGlCQUFNO0lBQzlCLDRFQUFtRSxxRUFBQTtJQUVyRSxpQkFBSzs7O0lBSnFCLG1DQUEyQjtJQUM5QyxlQUFtQjtJQUFuQiwwQ0FBbUI7SUFDcEIsY0FBWTtJQUFaLG9DQUFZO0lBQ1QsY0FBYTtJQUFiLHFDQUFhOzs7SUFLcEIsNEJBQTRDO0lBQUEsWUFBbUI7SUFBQSxpQkFBSTs7O0lBQWpELHVFQUF5QjtJQUFDLGNBQW1CO0lBQW5CLDBDQUFtQjs7O0lBQy9ELDRCQUFzQjtJQUFBLFlBQW1CO0lBQUEsaUJBQU87OztJQUExQixjQUFtQjtJQUFuQiwwQ0FBbUI7OztJQUgzQywwQkFBa0UsV0FBQTtJQUN2QixZQUFjO0lBQUEsaUJBQUk7SUFDM0QsNEVBQW1FLHFFQUFBO0lBRXJFLGlCQUFLOzs7SUFKb0Isb0VBQXdDO0lBQ3RCLGVBQWM7SUFBZCxxQ0FBYztJQUNuRCxjQUFZO0lBQVosb0NBQVk7SUFDVCxjQUFhO0lBQWIscUNBQWE7O0FER3RCLE1BQU0sT0FBTywwQkFBMEI7SUFTckM7UUFSUyxXQUFNLEdBQVksS0FBSyxDQUFDO1FBQ3hCLGtCQUFhLEdBQVcsRUFBRSxDQUFDO1FBQzNCLGtCQUFhLEdBQVcsRUFBRSxDQUFDO1FBQzNCLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FBQzFCLGtCQUFhLEdBQVcsRUFBRSxDQUFDO1FBQzNCLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLGFBQVEsR0FBVyxFQUFFLENBQUM7SUFFaEIsQ0FBQzsyRkFUTCwwQkFBMEI7b0VBQTFCLDBCQUEwQjtZQ1p2Qyx5RUFJSyw0REFBQTs7WUFKQSx3Q0FBbUI7WUFNbkIsY0FBa0I7WUFBbEIsdUNBQWtCOzs7aUZETVYsMEJBQTBCO2NBTnRDLFNBQVM7MkJBQ0UsdUJBQXVCLG1CQUdoQix1QkFBdUIsQ0FBQyxNQUFNO29CQUd0QyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxhQUFhO2tCQUFyQixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxhQUFhO2tCQUFyQixLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7O2tGQVBLLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYS1wcm9ncmVzcy1pbmRpY2F0b3InLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9ncmVzcy1pbmRpY2F0b3IuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3Byb2dyZXNzLWluZGljYXRvci5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NJbmRpY2F0b3JDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGFzTGluazogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHByb2dyZXNzQ291bnQ6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIHByb2dyZXNzQ2xhc3M6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIHByb2dyZXNzTGluazogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgcHJvZ3Jlc3NMYWJlbDogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgaWNvbnNFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgaWNvbk5hbWU6IHN0cmluZyA9ICcnO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcbn1cclxuIiwiPGxpICpuZ0lmPVwiIWljb25zRW5hYmxlZFwiIGNsYXNzPVwie3sgcHJvZ3Jlc3NDbGFzcyB9fVwiPlxyXG4gIDxkaXY+e3sgcHJvZ3Jlc3NDb3VudCB9fTwvZGl2PlxyXG4gIDxhICpuZ0lmPVwiYXNMaW5rXCIgaHJlZj1cInt7IHByb2dyZXNzTGluayB9fVwiPnt7IHByb2dyZXNzTGFiZWwgfX08L2E+XHJcbiAgPHNwYW4gKm5nSWY9XCIhYXNMaW5rXCI+e3sgcHJvZ3Jlc3NMYWJlbCB9fTwvc3Bhbj5cclxuPC9saT5cclxuXHJcbjxsaSAqbmdJZj1cImljb25zRW5hYmxlZFwiIGNsYXNzPVwiYWxpZ24tY2VudGVyIHt7IHByb2dyZXNzQ2xhc3MgfX1cIj5cclxuICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zIHBhZGRpbmcteC0wLTI1XCI+e3sgaWNvbk5hbWUgfX08L2k+XHJcbiAgPGEgKm5nSWY9XCJhc0xpbmtcIiBocmVmPVwie3sgcHJvZ3Jlc3NMaW5rIH19XCI+e3sgcHJvZ3Jlc3NMYWJlbCB9fTwvYT5cclxuICA8c3BhbiAqbmdJZj1cIiFhc0xpbmtcIj57eyBwcm9ncmVzc0xhYmVsIH19PC9zcGFuPlxyXG48L2xpPlxyXG4iXX0=