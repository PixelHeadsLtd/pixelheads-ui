import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = (a0, a1, a2) => ({ "highlight": a0, "truncate-text": a1, "divider": a2 });
const _c1 = a0 => ({ "max-width": a0 });
export class SummaryTopListComponent {
    constructor() {
        this.itemTitle = '';
        this.itemDescription = '';
        this.highlight = false;
        this.truncate = false;
        this.divider = false;
    }
    static { this.ɵfac = function SummaryTopListComponent_Factory(t) { return new (t || SummaryTopListComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SummaryTopListComponent, selectors: [["aa-summary-top-list"]], inputs: { itemTitle: "itemTitle", itemDescription: "itemDescription", highlight: "highlight", truncate: "truncate", divider: "divider", maxWidth: "maxWidth" }, decls: 5, vars: 15, consts: [[1, "dl-repeater", 3, "ngClass"], [3, "title", "ngStyle"]], template: function SummaryTopListComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "dt", 1);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "dd", 1);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(7, _c0, ctx.highlight, ctx.truncate, ctx.divider));
            i0.ɵɵadvance();
            i0.ɵɵpropertyInterpolate("title", ctx.itemTitle);
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(11, _c1, ctx.maxWidth));
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.itemTitle);
            i0.ɵɵadvance();
            i0.ɵɵpropertyInterpolate("title", ctx.itemDescription);
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(13, _c1, ctx.maxWidth));
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.itemDescription);
        } }, dependencies: [i1.NgClass, i1.NgStyle], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SummaryTopListComponent, [{
        type: Component,
        args: [{ selector: 'aa-summary-top-list', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div \r\n  class=\"dl-repeater\" \r\n  [ngClass]=\"{\r\n    'highlight' : highlight, \r\n    'truncate-text' : truncate,\r\n    'divider' : divider\r\n  }\"\r\n>\r\n  <dt title=\"{{itemTitle}}\" [ngStyle]=\"{'max-width' : maxWidth}\">{{itemTitle}}</dt>\r\n  <dd title=\"{{itemDescription}}\" [ngStyle]=\"{'max-width' : maxWidth}\">{{itemDescription}}</dd>\r\n</div>\r\n" }]
    }], () => [], { itemTitle: [{
            type: Input
        }], itemDescription: [{
            type: Input
        }], highlight: [{
            type: Input
        }], truncate: [{
            type: Input
        }], divider: [{
            type: Input
        }], maxWidth: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SummaryTopListComponent, { className: "SummaryTopListComponent", filePath: "lib\\widgets\\summary-top-list\\summary-top-list.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyeS10b3AtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvd2lkZ2V0cy9zdW1tYXJ5LXRvcC1saXN0L3N1bW1hcnktdG9wLWxpc3QuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL3dpZGdldHMvc3VtbWFyeS10b3AtbGlzdC9zdW1tYXJ5LXRvcC1saXN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztBQVExRSxNQUFNLE9BQU8sdUJBQXVCO0lBU2xDO1FBUFMsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixvQkFBZSxHQUFXLEVBQUUsQ0FBQztRQUM3QixjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsWUFBTyxHQUFZLEtBQUssQ0FBQztJQUdsQixDQUFDO3dGQVROLHVCQUF1QjtvRUFBdkIsdUJBQXVCO1lDUnBDLDhCQU9DLFlBQUE7WUFDZ0UsWUFBYTtZQUFBLGlCQUFLO1lBQ2pGLDZCQUFxRTtZQUFBLFlBQW1CO1lBQUEsaUJBQUssRUFBQTs7WUFQN0YsOEZBSUU7WUFFRSxjQUFxQjtZQUFyQixnREFBcUI7WUFBQyxtRUFBb0M7WUFBQyxjQUFhO1lBQWIsbUNBQWE7WUFDeEUsY0FBMkI7WUFBM0Isc0RBQTJCO1lBQUMsbUVBQW9DO1lBQUMsY0FBbUI7WUFBbkIseUNBQW1COzs7aUZERDdFLHVCQUF1QjtjQU5uQyxTQUFTOzJCQUNFLHFCQUFxQixtQkFHZCx1QkFBdUIsQ0FBQyxNQUFNO29CQUl0QyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csZUFBZTtrQkFBdkIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSzs7a0ZBUEssdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWEtc3VtbWFyeS10b3AtbGlzdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3N1bW1hcnktdG9wLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3N1bW1hcnktdG9wLWxpc3QuY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VtbWFyeVRvcExpc3RDb21wb25lbnQge1xyXG5cclxuICBASW5wdXQoKSBpdGVtVGl0bGU6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGl0ZW1EZXNjcmlwdGlvbjogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgaGlnaGxpZ2h0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgdHJ1bmNhdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBkaXZpZGVyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbWF4V2lkdGg6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbn1cclxuIiwiPGRpdiBcclxuICBjbGFzcz1cImRsLXJlcGVhdGVyXCIgXHJcbiAgW25nQ2xhc3NdPVwie1xyXG4gICAgJ2hpZ2hsaWdodCcgOiBoaWdobGlnaHQsIFxyXG4gICAgJ3RydW5jYXRlLXRleHQnIDogdHJ1bmNhdGUsXHJcbiAgICAnZGl2aWRlcicgOiBkaXZpZGVyXHJcbiAgfVwiXHJcbj5cclxuICA8ZHQgdGl0bGU9XCJ7e2l0ZW1UaXRsZX19XCIgW25nU3R5bGVdPVwieydtYXgtd2lkdGgnIDogbWF4V2lkdGh9XCI+e3tpdGVtVGl0bGV9fTwvZHQ+XHJcbiAgPGRkIHRpdGxlPVwie3tpdGVtRGVzY3JpcHRpb259fVwiIFtuZ1N0eWxlXT1cInsnbWF4LXdpZHRoJyA6IG1heFdpZHRofVwiPnt7aXRlbURlc2NyaXB0aW9ufX08L2RkPlxyXG48L2Rpdj5cclxuIl19