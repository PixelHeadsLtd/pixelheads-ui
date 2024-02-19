import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function ProgressIndicatorAdvancedComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2)(1, "p", 3);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div");
    i0.ɵɵtext(4, "pan_tool_alt");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.description);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("material-icons ", ctx_r0.iconClass, "");
} }
const _c0 = ["*"];
export class ProgressIndicatorAdvancedComponent {
    constructor() {
        this.progressClass = '';
        this.progressLabel = '';
        this.iconClass = '';
        this.showDescription = false;
        this.description = '';
        this.asLink = false;
        this.progressLink = '';
        this.progressClick = new EventEmitter();
    }
    onProgressClick(e) {
        e.stopPropagation();
        this.progressClick.emit(e);
    }
    static { this.ɵfac = function ProgressIndicatorAdvancedComponent_Factory(t) { return new (t || ProgressIndicatorAdvancedComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProgressIndicatorAdvancedComponent, selectors: [["aa-progress-indicator-advanced"]], inputs: { progressClass: "progressClass", progressLabel: "progressLabel", iconClass: "iconClass", showDescription: "showDescription", description: "description", asLink: "asLink", progressLink: "progressLink" }, outputs: { progressClick: "progressClick" }, ngContentSelectors: _c0, decls: 4, vars: 4, consts: [["class", "description", 4, "ngIf"], [1, "bus-stop", "flex-group", "flex-column", "flex-center"], [1, "description"], [1, "box-shadow-light"]], template: function ProgressIndicatorAdvancedComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "section");
            i0.ɵɵtemplate(1, ProgressIndicatorAdvancedComponent_div_1_Template, 5, 4, "div", 0);
            i0.ɵɵelementStart(2, "div", 1);
            i0.ɵɵprojection(3);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵclassMapInterpolate1("indicator-item flex-group ", ctx.progressClass, "");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showDescription);
        } }, dependencies: [i1.NgIf], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProgressIndicatorAdvancedComponent, [{
        type: Component,
        args: [{ selector: 'aa-progress-indicator-advanced', changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"indicator-item flex-group {{ progressClass }}\">\r\n    <div *ngIf=\"showDescription\" class=\"description\">\r\n        <p class=\"box-shadow-light\">{{description}}</p>\r\n        <div class=\"material-icons {{iconClass}}\">pan_tool_alt</div>\r\n    </div>\r\n    <div class=\"bus-stop flex-group flex-column flex-center\">\r\n        <ng-content></ng-content>\r\n    </div>\r\n</section>" }]
    }], null, { progressClass: [{
            type: Input
        }], progressLabel: [{
            type: Input
        }], iconClass: [{
            type: Input
        }], showDescription: [{
            type: Input
        }], description: [{
            type: Input
        }], asLink: [{
            type: Input
        }], progressLink: [{
            type: Input
        }], progressClick: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ProgressIndicatorAdvancedComponent, { className: "ProgressIndicatorAdvancedComponent", filePath: "lib\\navigation\\progress-indicator-advanced\\progress-indicator-advanced.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtaW5kaWNhdG9yLWFkdmFuY2VkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9uYXZpZ2F0aW9uL3Byb2dyZXNzLWluZGljYXRvci1hZHZhbmNlZC9wcm9ncmVzcy1pbmRpY2F0b3ItYWR2YW5jZWQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL25hdmlnYXRpb24vcHJvZ3Jlc3MtaW5kaWNhdG9yLWFkdmFuY2VkL3Byb2dyZXNzLWluZGljYXRvci1hZHZhbmNlZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0lDQzVGLDhCQUFpRCxXQUFBO0lBQ2pCLFlBQWU7SUFBQSxpQkFBSTtJQUMvQywyQkFBMEM7SUFBQSw0QkFBWTtJQUFBLGlCQUFNLEVBQUE7OztJQURoQyxlQUFlO0lBQWYsd0NBQWU7SUFDdEMsY0FBb0M7SUFBcEMsa0VBQW9DOzs7QURLakQsTUFBTSxPQUFPLGtDQUFrQztJQU4vQztRQVFXLGtCQUFhLEdBQVcsRUFBRSxDQUFDO1FBQzNCLGtCQUFhLEdBQVcsRUFBRSxDQUFDO1FBQzNCLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsb0JBQWUsR0FBWSxLQUFLLENBQUM7UUFDakMsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFDekIsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUN4QixpQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUV6QixrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFTLENBQUM7S0FNckQ7SUFKUSxlQUFlLENBQUMsQ0FBUTtRQUM3QixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0IsQ0FBQzttR0FmVSxrQ0FBa0M7b0VBQWxDLGtDQUFrQzs7WUNSL0MsK0JBQStEO1lBQzNELG1GQUdNO1lBQ04sOEJBQXlEO1lBQ3JELGtCQUF5QjtZQUM3QixpQkFBTSxFQUFBOztZQVBELDhFQUFxRDtZQUNwRCxjQUFxQjtZQUFyQiwwQ0FBcUI7OztpRkRPbEIsa0NBQWtDO2NBTjlDLFNBQVM7MkJBQ0UsZ0NBQWdDLG1CQUd6Qix1QkFBdUIsQ0FBQyxNQUFNO2dCQUl0QyxhQUFhO2tCQUFyQixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxlQUFlO2tCQUF2QixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFFSSxhQUFhO2tCQUF0QixNQUFNOztrRkFWSSxrQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWEtcHJvZ3Jlc3MtaW5kaWNhdG9yLWFkdmFuY2VkJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZ3Jlc3MtaW5kaWNhdG9yLWFkdmFuY2VkLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wcm9ncmVzcy1pbmRpY2F0b3ItYWR2YW5jZWQuY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NJbmRpY2F0b3JBZHZhbmNlZENvbXBvbmVudCB7XHJcblxyXG4gIEBJbnB1dCgpIHByb2dyZXNzQ2xhc3M6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIHByb2dyZXNzTGFiZWw6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGljb25DbGFzczogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgc2hvd0Rlc2NyaXB0aW9uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZGVzY3JpcHRpb246IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGFzTGluazogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHByb2dyZXNzTGluazogc3RyaW5nID0gJyc7XHJcblxyXG4gIEBPdXRwdXQoKSBwcm9ncmVzc0NsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcclxuXHJcbiAgcHVibGljIG9uUHJvZ3Jlc3NDbGljayhlOiBFdmVudCkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMucHJvZ3Jlc3NDbGljay5lbWl0KGUpO1xyXG4gIH1cclxufVxyXG4iLCI8c2VjdGlvbiBjbGFzcz1cImluZGljYXRvci1pdGVtIGZsZXgtZ3JvdXAge3sgcHJvZ3Jlc3NDbGFzcyB9fVwiPlxyXG4gICAgPGRpdiAqbmdJZj1cInNob3dEZXNjcmlwdGlvblwiIGNsYXNzPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICA8cCBjbGFzcz1cImJveC1zaGFkb3ctbGlnaHRcIj57e2Rlc2NyaXB0aW9ufX08L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIHt7aWNvbkNsYXNzfX1cIj5wYW5fdG9vbF9hbHQ8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImJ1cy1zdG9wIGZsZXgtZ3JvdXAgZmxleC1jb2x1bW4gZmxleC1jZW50ZXJcIj5cclxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuPC9zZWN0aW9uPiJdfQ==