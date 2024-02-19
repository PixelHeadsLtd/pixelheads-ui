import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = [[["", "custom-header", ""]], [["", "custom-content", ""]], [["", "custom-footer", ""]]];
const _c1 = (a0, a1) => ({ "width": a0, "height": a1 });
const _c2 = () => ({ "opacity": "1" });
const _c3 = () => ({});
const _c4 = a0 => ({ "border-radius-0-5": a0 });
const _c5 = a0 => ({ "border-bottom": a0 });
const _c6 = ["[custom-header]", "[custom-content]", "[custom-footer]"];
export class InfoPanelComponent {
    constructor() {
        this.panelStatus = '';
        this.preventOpacity = false;
        this.removeHeaderBorder = false;
        this.roundedCorners = false;
    }
    static { this.ɵfac = function InfoPanelComponent_Factory(t) { return new (t || InfoPanelComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InfoPanelComponent, selectors: [["aa-info-panel"]], inputs: { panelWidth: "panelWidth", panelHeight: "panelHeight", panelStatus: "panelStatus", preventOpacity: "preventOpacity", removeHeaderBorder: "removeHeaderBorder", roundedCorners: "roundedCorners" }, ngContentSelectors: _c6, decls: 9, vars: 16, consts: [[3, "ngStyle"], [1, "foreground", 3, "ngStyle", "ngClass"], [1, "info-panel-header", "padding-1", 3, "ngStyle"], [1, "info-panel-content", "padding-1"], [1, "info-panel-footer"], [1, "background"]], template: function InfoPanelComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0);
            i0.ɵɵelementStart(0, "section", 0)(1, "div", 1)(2, "div", 2);
            i0.ɵɵprojection(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 3);
            i0.ɵɵprojection(5, 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 4);
            i0.ɵɵprojection(7, 2);
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(8, "div", 5);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassMapInterpolate1("info-panel ", ctx.panelStatus, "");
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(7, _c1, ctx.panelWidth, ctx.panelHeight));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngStyle", ctx.preventOpacity ? i0.ɵɵpureFunction0(10, _c2) : i0.ɵɵpureFunction0(11, _c3))("ngClass", i0.ɵɵpureFunction1(12, _c4, ctx.roundedCorners));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(14, _c5, ctx.removeHeaderBorder ? "none" : "inherit"));
        } }, dependencies: [i1.NgClass, i1.NgStyle], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InfoPanelComponent, [{
        type: Component,
        args: [{ selector: 'aa-info-panel', changeDetection: ChangeDetectionStrategy.OnPush, template: "<section\r\n  class=\"info-panel {{panelStatus}}\"\r\n  [ngStyle]=\"{\r\n    'width' : panelWidth,\r\n    'height' : panelHeight\r\n  }\"\r\n>\r\n  <div\r\n    class=\"foreground\"\r\n    [ngStyle]=\"preventOpacity ? {'opacity':'1'} : {}\"\r\n    [ngClass]=\"{'border-radius-0-5' : roundedCorners}\"\r\n  >\r\n    <div\r\n      class=\"info-panel-header padding-1\"\r\n      [ngStyle]=\"{ 'border-bottom': removeHeaderBorder ? 'none' : 'inherit' }\"\r\n    >\r\n      <ng-content select=\"[custom-header]\"></ng-content>\r\n    </div>\r\n    <div class=\"info-panel-content padding-1\">\r\n      <ng-content select=\"[custom-content]\"></ng-content>\r\n    </div>\r\n    <div class=\"info-panel-footer\">\r\n      <ng-content select=\"[custom-footer]\"></ng-content>\r\n    </div>\r\n  </div>\r\n  <div class=\"background\"></div>\r\n</section>\r\n" }]
    }], () => [], { panelWidth: [{
            type: Input
        }], panelHeight: [{
            type: Input
        }], panelStatus: [{
            type: Input
        }], preventOpacity: [{
            type: Input
        }], removeHeaderBorder: [{
            type: Input
        }], roundedCorners: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InfoPanelComponent, { className: "InfoPanelComponent", filePath: "lib\\widgets\\info-panel\\info-panel.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvd2lkZ2V0cy9pbmZvLXBhbmVsL2luZm8tcGFuZWwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL3dpZGdldHMvaW5mby1wYW5lbC9pbmZvLXBhbmVsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7O0FBUTFFLE1BQU0sT0FBTyxrQkFBa0I7SUFTN0I7UUFMUyxnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixtQkFBYyxHQUFZLEtBQUssQ0FBQztRQUNoQyx1QkFBa0IsR0FBWSxLQUFLLENBQUM7UUFDcEMsbUJBQWMsR0FBWSxLQUFLLENBQUM7SUFFekIsQ0FBQzttRkFUTixrQkFBa0I7b0VBQWxCLGtCQUFrQjs7WUNSL0Isa0NBTUMsYUFBQSxhQUFBO1lBVUssa0JBQWtEO1lBQ3BELGlCQUFNO1lBQ04sOEJBQTBDO1lBQ3hDLHFCQUFtRDtZQUNyRCxpQkFBTTtZQUNOLDhCQUErQjtZQUM3QixxQkFBa0Q7WUFDcEQsaUJBQU0sRUFBQTtZQUVSLHlCQUE4QjtZQUNoQyxpQkFBVTs7WUF6QlIsNkRBQWtDO1lBQ2xDLHFGQUdFO1lBSUEsY0FBaUQ7WUFBakQsd0dBQWlELDREQUFBO1lBSy9DLGNBQXdFO1lBQXhFLGtHQUF3RTs7O2lGRE5qRSxrQkFBa0I7Y0FQOUIsU0FBUzsyQkFDRSxlQUFlLG1CQUdSLHVCQUF1QixDQUFDLE1BQU07b0JBS3RDLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLGNBQWM7a0JBQXRCLEtBQUs7WUFDRyxrQkFBa0I7a0JBQTFCLEtBQUs7WUFDRyxjQUFjO2tCQUF0QixLQUFLOztrRkFQSyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FhLWluZm8tcGFuZWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9pbmZvLXBhbmVsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9pbmZvLXBhbmVsLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBJbmZvUGFuZWxDb21wb25lbnQge1xyXG5cclxuICBASW5wdXQoKSBwYW5lbFdpZHRoOiBhbnk7XHJcbiAgQElucHV0KCkgcGFuZWxIZWlnaHQ6IGFueTtcclxuICBASW5wdXQoKSBwYW5lbFN0YXR1czogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgcHJldmVudE9wYWNpdHk6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSByZW1vdmVIZWFkZXJCb3JkZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSByb3VuZGVkQ29ybmVyczogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG59XHJcbiIsIjxzZWN0aW9uXHJcbiAgY2xhc3M9XCJpbmZvLXBhbmVsIHt7cGFuZWxTdGF0dXN9fVwiXHJcbiAgW25nU3R5bGVdPVwie1xyXG4gICAgJ3dpZHRoJyA6IHBhbmVsV2lkdGgsXHJcbiAgICAnaGVpZ2h0JyA6IHBhbmVsSGVpZ2h0XHJcbiAgfVwiXHJcbj5cclxuICA8ZGl2XHJcbiAgICBjbGFzcz1cImZvcmVncm91bmRcIlxyXG4gICAgW25nU3R5bGVdPVwicHJldmVudE9wYWNpdHkgPyB7J29wYWNpdHknOicxJ30gOiB7fVwiXHJcbiAgICBbbmdDbGFzc109XCJ7J2JvcmRlci1yYWRpdXMtMC01JyA6IHJvdW5kZWRDb3JuZXJzfVwiXHJcbiAgPlxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzcz1cImluZm8tcGFuZWwtaGVhZGVyIHBhZGRpbmctMVwiXHJcbiAgICAgIFtuZ1N0eWxlXT1cInsgJ2JvcmRlci1ib3R0b20nOiByZW1vdmVIZWFkZXJCb3JkZXIgPyAnbm9uZScgOiAnaW5oZXJpdCcgfVwiXHJcbiAgICA+XHJcbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltjdXN0b20taGVhZGVyXVwiPjwvbmctY29udGVudD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImluZm8tcGFuZWwtY29udGVudCBwYWRkaW5nLTFcIj5cclxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2N1c3RvbS1jb250ZW50XVwiPjwvbmctY29udGVudD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImluZm8tcGFuZWwtZm9vdGVyXCI+XHJcbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltjdXN0b20tZm9vdGVyXVwiPjwvbmctY29udGVudD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJiYWNrZ3JvdW5kXCI+PC9kaXY+XHJcbjwvc2VjdGlvbj5cclxuIl19