import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TooltipDynamicPosition } from './tooltip-dynamic.enums';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = a0 => [a0];
export class TooltipDynamicComponent {
    isArrayPassed() {
        return (this.tooltip instanceof Array);
    }
    constructor() {
        this.position = TooltipDynamicPosition.DEFAULT;
        this.tooltip = '';
        this.left = 0;
        this.top = 0;
        this.visible = false;
    }
    static { this.ɵfac = function TooltipDynamicComponent_Factory(t) { return new (t || TooltipDynamicComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TooltipDynamicComponent, selectors: [["aa-tooltip-dynamic"]], decls: 2, vars: 10, consts: [[1, "tooltip-dynamic", "box-shadow", 3, "ngClass"], [3, "innerHtml"]], template: function TooltipDynamicComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelement(1, "div", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵstyleProp("left", ctx.left + "px")("top", ctx.top + "px");
            i0.ɵɵclassProp("tooltip--visible", ctx.visible);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(8, _c0, "tooltip-dynamic--" + ctx.position));
            i0.ɵɵadvance();
            i0.ɵɵproperty("innerHtml", ctx.tooltip, i0.ɵɵsanitizeHtml);
        } }, dependencies: [i1.NgClass], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TooltipDynamicComponent, [{
        type: Component,
        args: [{ selector: 'aa-tooltip-dynamic', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"tooltip-dynamic box-shadow\"\r\n  [ngClass]=\"['tooltip-dynamic--'+position]\"\r\n  [class.tooltip--visible]=\"visible\"\r\n  [style.left]=\"left + 'px'\"\r\n  [style.top]=\"top + 'px'\">\r\n    <div [innerHtml]=\"tooltip\"></div>\r\n</div>\r\n" }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TooltipDynamicComponent, { className: "TooltipDynamicComponent", filePath: "lib\\widgets\\tooltip-dynamic\\tooltip-dynamic.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1keW5hbWljLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi93aWRnZXRzL3Rvb2x0aXAtZHluYW1pYy90b29sdGlwLWR5bmFtaWMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL3dpZGdldHMvdG9vbHRpcC1keW5hbWljL3Rvb2x0aXAtZHluYW1pYy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7O0FBT2pFLE1BQU0sT0FBTyx1QkFBdUI7SUFRbEMsYUFBYTtRQUNYLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxZQUFZLEtBQUssQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRDtRQVZBLGFBQVEsR0FBMkIsc0JBQXNCLENBQUMsT0FBTyxDQUFDO1FBQ2xFLFlBQU8sR0FBb0IsRUFBRSxDQUFDO1FBQzlCLFNBQUksR0FBRyxDQUFDLENBQUM7UUFDVCxRQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ1IsWUFBTyxHQUFHLEtBQUssQ0FBQztJQU1ELENBQUM7d0ZBWkwsdUJBQXVCO29FQUF2Qix1QkFBdUI7WUNScEMsOEJBSTJCO1lBQ3ZCLHlCQUFpQztZQUNyQyxpQkFBTTs7WUFISix1Q0FBMEIsdUJBQUE7WUFEMUIsK0NBQWtDO1lBRGxDLHdGQUEwQztZQUluQyxjQUFxQjtZQUFyQiwwREFBcUI7OztpRkRHakIsdUJBQXVCO2NBTG5DLFNBQVM7MkJBQ0Usb0JBQW9CLG1CQUViLHVCQUF1QixDQUFDLE1BQU07O2tGQUVwQyx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRvb2x0aXBEeW5hbWljUG9zaXRpb24gfSBmcm9tICcuL3Rvb2x0aXAtZHluYW1pYy5lbnVtcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FhLXRvb2x0aXAtZHluYW1pYycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3Rvb2x0aXAtZHluYW1pYy5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb29sdGlwRHluYW1pY0NvbXBvbmVudCB7XHJcblxyXG4gIHBvc2l0aW9uOiBUb29sdGlwRHluYW1pY1Bvc2l0aW9uID0gVG9vbHRpcER5bmFtaWNQb3NpdGlvbi5ERUZBVUxUO1xyXG4gIHRvb2x0aXA6IHN0cmluZyB8IHN0cmluZ1tdPScnO1xyXG4gIGxlZnQgPSAwO1xyXG4gIHRvcCA9IDA7XHJcbiAgdmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICBpc0FycmF5UGFzc2VkKCkge1xyXG4gICAgcmV0dXJuICh0aGlzLnRvb2x0aXAgaW5zdGFuY2VvZiBBcnJheSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cInRvb2x0aXAtZHluYW1pYyBib3gtc2hhZG93XCJcclxuICBbbmdDbGFzc109XCJbJ3Rvb2x0aXAtZHluYW1pYy0tJytwb3NpdGlvbl1cIlxyXG4gIFtjbGFzcy50b29sdGlwLS12aXNpYmxlXT1cInZpc2libGVcIlxyXG4gIFtzdHlsZS5sZWZ0XT1cImxlZnQgKyAncHgnXCJcclxuICBbc3R5bGUudG9wXT1cInRvcCArICdweCdcIj5cclxuICAgIDxkaXYgW2lubmVySHRtbF09XCJ0b29sdGlwXCI+PC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=