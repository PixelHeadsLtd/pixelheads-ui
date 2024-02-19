import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = a0 => ({ "display-block": a0 });
const _c1 = a0 => ({ "vertical-display": a0 });
const _c2 = ["*"];
export class SummaryTopComponent {
    constructor() {
        this.displayBlock = false;
        this.verticalDisplay = false;
    }
    static { this.ɵfac = function SummaryTopComponent_Factory(t) { return new (t || SummaryTopComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SummaryTopComponent, selectors: [["aa-summary-top"]], inputs: { displayBlock: "displayBlock", verticalDisplay: "verticalDisplay" }, ngContentSelectors: _c2, decls: 3, vars: 6, consts: [[1, "dl-container", 3, "ngClass"], [1, "flex-align-center", 3, "ngClass"]], template: function SummaryTopComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "article", 0)(1, "dl", 1);
            i0.ɵɵprojection(2);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c0, ctx.displayBlock));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c1, ctx.verticalDisplay));
        } }, dependencies: [i1.NgClass], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SummaryTopComponent, [{
        type: Component,
        args: [{ selector: 'aa-summary-top', changeDetection: ChangeDetectionStrategy.OnPush, template: "<article class=\"dl-container\" [ngClass]=\"{'display-block' : displayBlock}\">\r\n  <dl class=\"flex-align-center\" [ngClass]=\"{ 'vertical-display': verticalDisplay }\">\r\n   <ng-content></ng-content>\r\n  </dl>\r\n</article>\r\n" }]
    }], () => [], { displayBlock: [{
            type: Input
        }], verticalDisplay: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SummaryTopComponent, { className: "SummaryTopComponent", filePath: "lib\\widgets\\summary-top\\summary-top.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyeS10b3AuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL3dpZGdldHMvc3VtbWFyeS10b3Avc3VtbWFyeS10b3AuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL3dpZGdldHMvc3VtbWFyeS10b3Avc3VtbWFyeS10b3AuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7OztBQVFsRixNQUFNLE9BQU8sbUJBQW1CO0lBSzlCO1FBSFMsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFDOUIsb0JBQWUsR0FBWSxLQUFLLENBQUM7SUFFMUIsQ0FBQztvRkFMTixtQkFBbUI7b0VBQW5CLG1CQUFtQjs7WUNSaEMsa0NBQTJFLFlBQUE7WUFFeEUsa0JBQXlCO1lBQzFCLGlCQUFLLEVBQUE7O1lBSHVCLHNFQUE0QztZQUMxQyxjQUFtRDtZQUFuRCx5RUFBbUQ7OztpRkRPdEUsbUJBQW1CO2NBTi9CLFNBQVM7MkJBQ0UsZ0JBQWdCLG1CQUdULHVCQUF1QixDQUFDLE1BQU07b0JBSXRDLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxlQUFlO2tCQUF2QixLQUFLOztrRkFISyxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FhLXN1bW1hcnktdG9wJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc3VtbWFyeS10b3AuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3N1bW1hcnktdG9wLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIFN1bW1hcnlUb3BDb21wb25lbnQge1xyXG5cclxuICBASW5wdXQoKSBkaXNwbGF5QmxvY2s6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSB2ZXJ0aWNhbERpc3BsYXk6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbn1cclxuIiwiPGFydGljbGUgY2xhc3M9XCJkbC1jb250YWluZXJcIiBbbmdDbGFzc109XCJ7J2Rpc3BsYXktYmxvY2snIDogZGlzcGxheUJsb2NrfVwiPlxyXG4gIDxkbCBjbGFzcz1cImZsZXgtYWxpZ24tY2VudGVyXCIgW25nQ2xhc3NdPVwieyAndmVydGljYWwtZGlzcGxheSc6IHZlcnRpY2FsRGlzcGxheSB9XCI+XHJcbiAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICA8L2RsPlxyXG48L2FydGljbGU+XHJcbiJdfQ==