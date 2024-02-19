import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["*"];
export class DashboardContainerComponent {
    constructor() {
        this.dashboardId = '';
        this.dashboardHeading = '';
        this.headerColor = '';
    }
    static { this.ɵfac = function DashboardContainerComponent_Factory(t) { return new (t || DashboardContainerComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DashboardContainerComponent, selectors: [["aa-dashboard-container"]], inputs: { dashboardId: "dashboardId", dashboardHeading: "dashboardHeading", headerColor: "headerColor" }, ngContentSelectors: _c0, decls: 5, vars: 4, consts: [[1, "dashboard-container", 3, "id"]], template: function DashboardContainerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "article", 0)(1, "h3")(2, "span");
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd()();
            i0.ɵɵprojection(4);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("id", ctx.dashboardId);
            i0.ɵɵadvance();
            i0.ɵɵclassMap("dashboard-heading flex-group space-between " + ctx.headerColor);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.dashboardHeading);
        } }, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DashboardContainerComponent, [{
        type: Component,
        args: [{ selector: 'aa-dashboard-container', changeDetection: ChangeDetectionStrategy.OnPush, template: "<article class=\"dashboard-container\" [id]=\"dashboardId\">\r\n  <h3 [class]=\"'dashboard-heading flex-group space-between ' + headerColor\">\r\n    <span>{{dashboardHeading}}</span>\r\n    <!-- <span class=\"icon-drag\"></span> -->\r\n  </h3>\r\n  <ng-content></ng-content>\r\n</article>" }]
    }], () => [], { dashboardId: [{
            type: Input
        }], dashboardHeading: [{
            type: Input
        }], headerColor: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DashboardContainerComponent, { className: "DashboardContainerComponent", filePath: "lib\\widgets\\dashboard-container\\dashboard-container.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvd2lkZ2V0cy9kYXNoYm9hcmQtY29udGFpbmVyL2Rhc2hib2FyZC1jb250YWluZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL3dpZGdldHMvZGFzaGJvYXJkLWNvbnRhaW5lci9kYXNoYm9hcmQtY29udGFpbmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7QUFRbEYsTUFBTSxPQUFPLDJCQUEyQjtJQU10QztRQUpTLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLHFCQUFnQixHQUFXLEVBQUUsQ0FBQztRQUM5QixnQkFBVyxHQUFXLEVBQUUsQ0FBQztJQUVsQixDQUFDOzRGQU5OLDJCQUEyQjtvRUFBM0IsMkJBQTJCOztZQ1J4QyxrQ0FBd0QsU0FBQSxXQUFBO1lBRTlDLFlBQW9CO1lBQUEsaUJBQU8sRUFBQTtZQUduQyxrQkFBeUI7WUFDM0IsaUJBQVU7O1lBTjJCLG9DQUFrQjtZQUNqRCxjQUFxRTtZQUFyRSw4RUFBcUU7WUFDakUsZUFBb0I7WUFBcEIsMENBQW9COzs7aUZETWpCLDJCQUEyQjtjQU52QyxTQUFTOzJCQUNFLHdCQUF3QixtQkFHakIsdUJBQXVCLENBQUMsTUFBTTtvQkFJdEMsV0FBVztrQkFBbkIsS0FBSztZQUNHLGdCQUFnQjtrQkFBeEIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7O2tGQUpLLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWEtZGFzaGJvYXJkLWNvbnRhaW5lcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Rhc2hib2FyZC1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2Rhc2hib2FyZC1jb250YWluZXIuY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkQ29udGFpbmVyQ29tcG9uZW50IHtcclxuXHJcbiAgQElucHV0KCkgZGFzaGJvYXJkSWQ6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGRhc2hib2FyZEhlYWRpbmc6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGhlYWRlckNvbG9yOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbn1cclxuXHJcbiIsIjxhcnRpY2xlIGNsYXNzPVwiZGFzaGJvYXJkLWNvbnRhaW5lclwiIFtpZF09XCJkYXNoYm9hcmRJZFwiPlxyXG4gIDxoMyBbY2xhc3NdPVwiJ2Rhc2hib2FyZC1oZWFkaW5nIGZsZXgtZ3JvdXAgc3BhY2UtYmV0d2VlbiAnICsgaGVhZGVyQ29sb3JcIj5cclxuICAgIDxzcGFuPnt7ZGFzaGJvYXJkSGVhZGluZ319PC9zcGFuPlxyXG4gICAgPCEtLSA8c3BhbiBjbGFzcz1cImljb24tZHJhZ1wiPjwvc3Bhbj4gLS0+XHJcbiAgPC9oMz5cclxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvYXJ0aWNsZT4iXX0=