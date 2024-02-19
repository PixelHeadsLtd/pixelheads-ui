import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = (a0, a1, a2, a3, a4, a5, a6, a7) => ({ "bg-aa-light-blue-100": a0, "bg-aa-red-100": a1, "bg-aa-orange-100": a2, "bg-aa-green-100": a3, "bg-aa-light-blue-15": a4, "bg-aa-red-10": a5, "bg-aa-orange-10": a6, "bg-aa-green-15": a7 });
const _c1 = a0 => ({ "aa-white-100": a0 });
export class CounterComponent {
    constructor() {
        this.count = 0;
        this.countError = false;
        this.countWarning = false;
        this.countInfo = false;
        this.countSuccess = false;
        this.countErrorLight = false;
        this.countWarningLight = false;
        this.countInfoLight = false;
        this.countSuccessLight = false;
    }
    static { this.ɵfac = function CounterComponent_Factory(t) { return new (t || CounterComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CounterComponent, selectors: [["aa-counter"]], inputs: { count: "count", countError: "countError", countWarning: "countWarning", countInfo: "countInfo", countSuccess: "countSuccess", countErrorLight: "countErrorLight", countWarningLight: "countWarningLight", countInfoLight: "countInfoLight", countSuccessLight: "countSuccessLight" }, decls: 3, vars: 14, consts: [[1, "flex-group", "flex-center", "border-radius-50", "width-1-25", "height-1-25", "font-size-xsmall", 3, "ngClass"], [1, "flex-group", "flex-center", 3, "ngClass"]], template: function CounterComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 0)(1, "strong", 1);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction8(3, _c0, ctx.countInfo, ctx.countError, ctx.countWarning, ctx.countSuccess, ctx.countInfoLight, ctx.countErrorLight, ctx.countWarningLight, ctx.countSuccessLight));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(12, _c1, ctx.countInfo || ctx.countError || ctx.countWarning || ctx.countSuccess));
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.count, " ");
        } }, dependencies: [i1.NgClass], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CounterComponent, [{
        type: Component,
        args: [{ selector: 'aa-counter', changeDetection: ChangeDetectionStrategy.OnPush, template: "<span \r\n    class=\"\r\n    flex-group \r\n    flex-center \r\n    border-radius-50\r\n    width-1-25\r\n    height-1-25\r\n    font-size-xsmall\"\r\n    \r\n    [ngClass]=\"{\r\n        'bg-aa-light-blue-100' : countInfo,\r\n        'bg-aa-red-100' : countError, \r\n        'bg-aa-orange-100' : countWarning,\r\n        'bg-aa-green-100' : countSuccess,\r\n        'bg-aa-light-blue-15' : countInfoLight,\r\n        'bg-aa-red-10' : countErrorLight, \r\n        'bg-aa-orange-10' : countWarningLight,\r\n        'bg-aa-green-15' : countSuccessLight\r\n    }\"\r\n    >\r\n    <strong \r\n        class=\"flex-group flex-center\"\r\n        [ngClass]=\"{\r\n            'aa-white-100' : \r\n            countInfo || \r\n            countError || \r\n            countWarning || \r\n            countSuccess\r\n        }\"\r\n        >\r\n        {{ count }}\r\n    </strong>\r\n</span>" }]
    }], () => [], { count: [{
            type: Input
        }], countError: [{
            type: Input
        }], countWarning: [{
            type: Input
        }], countInfo: [{
            type: Input
        }], countSuccess: [{
            type: Input
        }], countErrorLight: [{
            type: Input
        }], countWarningLight: [{
            type: Input
        }], countInfoLight: [{
            type: Input
        }], countSuccessLight: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CounterComponent, { className: "CounterComponent", filePath: "lib\\patterns\\counter\\counter.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvcGF0dGVybnMvY291bnRlci9jb3VudGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9wYXR0ZXJucy9jb3VudGVyL2NvdW50ZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBUTFFLE1BQU0sT0FBTyxnQkFBZ0I7SUFZM0I7UUFWUyxVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFDOUIsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QixvQkFBZSxHQUFZLEtBQUssQ0FBQztRQUNqQyxzQkFBaUIsR0FBWSxLQUFLLENBQUM7UUFDbkMsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFDaEMsc0JBQWlCLEdBQVksS0FBSyxDQUFDO0lBRTVCLENBQUM7aUZBWk4sZ0JBQWdCO29FQUFoQixnQkFBZ0I7WUNSN0IsK0JBbUJLLGdCQUFBO1lBV0csWUFDSjtZQUFBLGlCQUFTLEVBQUE7O1lBdEJULDhNQVNFO1lBSUUsY0FNRTtZQU5GLDhIQU1FO1lBRUYsY0FDSjtZQURJLDBDQUNKOzs7aUZEdkJTLGdCQUFnQjtjQU41QixTQUFTOzJCQUNFLFlBQVksbUJBR0wsdUJBQXVCLENBQUMsTUFBTTtvQkFJdEMsS0FBSztrQkFBYixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSztZQUNHLGVBQWU7a0JBQXZCLEtBQUs7WUFDRyxpQkFBaUI7a0JBQXpCLEtBQUs7WUFDRyxjQUFjO2tCQUF0QixLQUFLO1lBQ0csaUJBQWlCO2tCQUF6QixLQUFLOztrRkFWSyxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYS1jb3VudGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY291bnRlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY291bnRlci5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb3VudGVyQ29tcG9uZW50IHtcclxuXHJcbiAgQElucHV0KCkgY291bnQ6IG51bWJlciA9IDA7XHJcbiAgQElucHV0KCkgY291bnRFcnJvcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGNvdW50V2FybmluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGNvdW50SW5mbzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGNvdW50U3VjY2VzczogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGNvdW50RXJyb3JMaWdodDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGNvdW50V2FybmluZ0xpZ2h0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgY291bnRJbmZvTGlnaHQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBjb3VudFN1Y2Nlc3NMaWdodDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG59XHJcbiIsIjxzcGFuIFxyXG4gICAgY2xhc3M9XCJcclxuICAgIGZsZXgtZ3JvdXAgXHJcbiAgICBmbGV4LWNlbnRlciBcclxuICAgIGJvcmRlci1yYWRpdXMtNTBcclxuICAgIHdpZHRoLTEtMjVcclxuICAgIGhlaWdodC0xLTI1XHJcbiAgICBmb250LXNpemUteHNtYWxsXCJcclxuICAgIFxyXG4gICAgW25nQ2xhc3NdPVwie1xyXG4gICAgICAgICdiZy1hYS1saWdodC1ibHVlLTEwMCcgOiBjb3VudEluZm8sXHJcbiAgICAgICAgJ2JnLWFhLXJlZC0xMDAnIDogY291bnRFcnJvciwgXHJcbiAgICAgICAgJ2JnLWFhLW9yYW5nZS0xMDAnIDogY291bnRXYXJuaW5nLFxyXG4gICAgICAgICdiZy1hYS1ncmVlbi0xMDAnIDogY291bnRTdWNjZXNzLFxyXG4gICAgICAgICdiZy1hYS1saWdodC1ibHVlLTE1JyA6IGNvdW50SW5mb0xpZ2h0LFxyXG4gICAgICAgICdiZy1hYS1yZWQtMTAnIDogY291bnRFcnJvckxpZ2h0LCBcclxuICAgICAgICAnYmctYWEtb3JhbmdlLTEwJyA6IGNvdW50V2FybmluZ0xpZ2h0LFxyXG4gICAgICAgICdiZy1hYS1ncmVlbi0xNScgOiBjb3VudFN1Y2Nlc3NMaWdodFxyXG4gICAgfVwiXHJcbiAgICA+XHJcbiAgICA8c3Ryb25nIFxyXG4gICAgICAgIGNsYXNzPVwiZmxleC1ncm91cCBmbGV4LWNlbnRlclwiXHJcbiAgICAgICAgW25nQ2xhc3NdPVwie1xyXG4gICAgICAgICAgICAnYWEtd2hpdGUtMTAwJyA6IFxyXG4gICAgICAgICAgICBjb3VudEluZm8gfHwgXHJcbiAgICAgICAgICAgIGNvdW50RXJyb3IgfHwgXHJcbiAgICAgICAgICAgIGNvdW50V2FybmluZyB8fCBcclxuICAgICAgICAgICAgY291bnRTdWNjZXNzXHJcbiAgICAgICAgfVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgIHt7IGNvdW50IH19XHJcbiAgICA8L3N0cm9uZz5cclxuPC9zcGFuPiJdfQ==