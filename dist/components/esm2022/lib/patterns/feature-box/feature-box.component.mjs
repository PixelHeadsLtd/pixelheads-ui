import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = a0 => ({ "padding-right-0-75": a0 });
const _c1 = (a0, a1) => ({ "height": a0, "overflow": a1 });
function FeatureBoxComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div", 2);
    i0.ɵɵprojection(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 3);
    i0.ɵɵprojection(4, 1);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c0, ctx_r0.enableScrolling));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(4, _c1, ctx_r0.fbHeight, ctx_r0.enableScrolling ? "auto" : ""));
} }
function FeatureBoxComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵprojection(1, 2);
    i0.ɵɵelementEnd();
} }
const _c2 = [[["", "custom-header", ""]], [["", "custom-content", ""]], "*"];
const _c3 = (a0, a1, a2) => ({ "width": a0, "margin-top": a1, "margin-bottom": a2 });
const _c4 = (a0, a1) => ({ "solid": a0, "padding-right-0": a1 });
const _c5 = ["[custom-header]", "[custom-content]", "*"];
export class FeatureBoxComponent {
    constructor() {
        this.marginTop = '';
        this.marginBottom = '';
        this.fbWidth = '';
        this.fbHeight = '';
        this.isSolid = false;
        this.fbStatus = '';
        this.includeHeader = false;
        this.enableScrolling = false;
    }
    static { this.ɵfac = function FeatureBoxComponent_Factory(t) { return new (t || FeatureBoxComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FeatureBoxComponent, selectors: [["aa-feature-box"]], inputs: { marginTop: "marginTop", marginBottom: "marginBottom", fbWidth: "fbWidth", fbHeight: "fbHeight", isSolid: "isSolid", fbStatus: "fbStatus", includeHeader: "includeHeader", enableScrolling: "enableScrolling" }, ngContentSelectors: _c5, decls: 3, vars: 14, consts: [[3, "ngStyle", "ngClass"], [4, "ngIf"], [3, "ngClass"], [1, "fb-contnet", 3, "ngStyle"]], template: function FeatureBoxComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c2);
            i0.ɵɵelementStart(0, "section", 0);
            i0.ɵɵtemplate(1, FeatureBoxComponent_div_1_Template, 5, 7, "div", 1)(2, FeatureBoxComponent_div_2_Template, 2, 0, "div", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassMapInterpolate1("feature-box ", ctx.fbStatus, "");
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction3(7, _c3, ctx.fbWidth, ctx.marginTop, ctx.marginBottom))("ngClass", i0.ɵɵpureFunction2(11, _c4, ctx.isSolid, ctx.enableScrolling));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.includeHeader);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.includeHeader);
        } }, dependencies: [i1.NgClass, i1.NgIf, i1.NgStyle], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FeatureBoxComponent, [{
        type: Component,
        args: [{ selector: 'aa-feature-box', changeDetection: ChangeDetectionStrategy.OnPush, template: "<section \r\n  class=\"feature-box {{fbStatus}}\"\r\n  [ngStyle]=\"{\r\n      'width' : fbWidth,\r\n      'margin-top' : marginTop,\r\n      'margin-bottom' : marginBottom\r\n  }\"\r\n  [ngClass]=\"{\r\n      'solid' : isSolid,\r\n      'padding-right-0' : enableScrolling\r\n  }\"\r\n>\r\n  <div *ngIf=\"includeHeader\">\r\n    <div [ngClass]=\"{'padding-right-0-75' : enableScrolling}\">\r\n      <ng-content select=\"[custom-header]\"></ng-content>\r\n    </div>\r\n    <div \r\n      [ngStyle]=\"{\r\n        'height' : fbHeight,\r\n        'overflow': enableScrolling ? 'auto' : ''\r\n      }\" \r\n      class=\"fb-contnet\"\r\n    >\r\n      <ng-content select=\"[custom-content]\"></ng-content>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"!includeHeader\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</section>\r\n" }]
    }], () => [], { marginTop: [{
            type: Input
        }], marginBottom: [{
            type: Input
        }], fbWidth: [{
            type: Input
        }], fbHeight: [{
            type: Input
        }], isSolid: [{
            type: Input
        }], fbStatus: [{
            type: Input
        }], includeHeader: [{
            type: Input
        }], enableScrolling: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FeatureBoxComponent, { className: "FeatureBoxComponent", filePath: "lib\\patterns\\feature-box\\feature-box.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1ib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL3BhdHRlcm5zL2ZlYXR1cmUtYm94L2ZlYXR1cmUtYm94LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9wYXR0ZXJucy9mZWF0dXJlLWJveC9mZWF0dXJlLWJveC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0lDWXhFLDJCQUEyQixhQUFBO0lBRXZCLGtCQUFrRDtJQUNwRCxpQkFBTTtJQUNOLDhCQU1DO0lBQ0MscUJBQW1EO0lBQ3JELGlCQUFNLEVBQUE7OztJQVhELGNBQW9EO0lBQXBELDRFQUFvRDtJQUl2RCxlQUdFO0lBSEYsMkdBR0U7OztJQU1OLDJCQUE0QjtJQUMxQixxQkFBeUI7SUFDM0IsaUJBQU07Ozs7OztBRHBCUixNQUFNLE9BQU8sbUJBQW1CO0lBVzlCO1FBVFMsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixpQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUMxQixZQUFPLEdBQVcsRUFBRSxDQUFDO1FBQ3JCLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUN6QixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBQy9CLG9CQUFlLEdBQVksS0FBSyxDQUFDO0lBRTFCLENBQUM7b0ZBWE4sbUJBQW1CO29FQUFuQixtQkFBbUI7O1lDUmhDLGtDQVdDO1lBQ0Msb0VBYU0sdURBQUE7WUFJUixpQkFBVTs7WUE1QlIsMkRBQWdDO1lBQ2hDLGtHQUlFLDBFQUFBO1lBTUksY0FBbUI7WUFBbkIsd0NBQW1CO1lBY25CLGNBQW9CO1lBQXBCLHlDQUFvQjs7O2lGRGxCZixtQkFBbUI7Y0FOL0IsU0FBUzsyQkFDRSxnQkFBZ0IsbUJBR1QsdUJBQXVCLENBQUMsTUFBTTtvQkFJdEMsU0FBUztrQkFBakIsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyxlQUFlO2tCQUF2QixLQUFLOztrRkFUSyxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYS1mZWF0dXJlLWJveCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2ZlYXR1cmUtYm94LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9mZWF0dXJlLWJveC5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGZWF0dXJlQm94Q29tcG9uZW50IHtcclxuXHJcbiAgQElucHV0KCkgbWFyZ2luVG9wOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBtYXJnaW5Cb3R0b206IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGZiV2lkdGg6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGZiSGVpZ2h0OiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBpc1NvbGlkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZmJTdGF0dXM6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGluY2x1ZGVIZWFkZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBlbmFibGVTY3JvbGxpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxufVxyXG4iLCI8c2VjdGlvbiBcclxuICBjbGFzcz1cImZlYXR1cmUtYm94IHt7ZmJTdGF0dXN9fVwiXHJcbiAgW25nU3R5bGVdPVwie1xyXG4gICAgICAnd2lkdGgnIDogZmJXaWR0aCxcclxuICAgICAgJ21hcmdpbi10b3AnIDogbWFyZ2luVG9wLFxyXG4gICAgICAnbWFyZ2luLWJvdHRvbScgOiBtYXJnaW5Cb3R0b21cclxuICB9XCJcclxuICBbbmdDbGFzc109XCJ7XHJcbiAgICAgICdzb2xpZCcgOiBpc1NvbGlkLFxyXG4gICAgICAncGFkZGluZy1yaWdodC0wJyA6IGVuYWJsZVNjcm9sbGluZ1xyXG4gIH1cIlxyXG4+XHJcbiAgPGRpdiAqbmdJZj1cImluY2x1ZGVIZWFkZXJcIj5cclxuICAgIDxkaXYgW25nQ2xhc3NdPVwieydwYWRkaW5nLXJpZ2h0LTAtNzUnIDogZW5hYmxlU2Nyb2xsaW5nfVwiPlxyXG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbY3VzdG9tLWhlYWRlcl1cIj48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgXHJcbiAgICAgIFtuZ1N0eWxlXT1cIntcclxuICAgICAgICAnaGVpZ2h0JyA6IGZiSGVpZ2h0LFxyXG4gICAgICAgICdvdmVyZmxvdyc6IGVuYWJsZVNjcm9sbGluZyA/ICdhdXRvJyA6ICcnXHJcbiAgICAgIH1cIiBcclxuICAgICAgY2xhc3M9XCJmYi1jb250bmV0XCJcclxuICAgID5cclxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2N1c3RvbS1jb250ZW50XVwiPjwvbmctY29udGVudD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgKm5nSWY9XCIhaW5jbHVkZUhlYWRlclwiPlxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIDwvZGl2PlxyXG48L3NlY3Rpb24+XHJcbiJdfQ==