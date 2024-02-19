import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class AnchorBackComponent {
    constructor() {
        this.anchorBackText = '';
        this.anchorURL = '';
    }
    static { this.ɵfac = function AnchorBackComponent_Factory(t) { return new (t || AnchorBackComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AnchorBackComponent, selectors: [["aa-anchor-back"]], inputs: { anchorBackText: "anchorBackText", anchorURL: "anchorURL" }, decls: 2, vars: 2, consts: [[1, "anchor-back"]], template: function AnchorBackComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "a", 0);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵattribute("href", ctx.anchorURL, i0.ɵɵsanitizeUrl);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.anchorBackText);
        } }, encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AnchorBackComponent, [{
        type: Component,
        args: [{ selector: 'aa-anchor-back', changeDetection: ChangeDetectionStrategy.OnPush, template: "<a class=\"anchor-back\" [attr.href]=\"anchorURL\">{{anchorBackText}}</a>" }]
    }], null, { anchorBackText: [{
            type: Input
        }], anchorURL: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AnchorBackComponent, { className: "AnchorBackComponent", filePath: "lib\\patterns\\anchor-back\\anchor-back.component.ts", lineNumber: 8 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5jaG9yLWJhY2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL3BhdHRlcm5zL2FuY2hvci1iYWNrL2FuY2hvci1iYWNrLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9wYXR0ZXJucy9hbmNob3ItYmFjay9hbmNob3ItYmFjay5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQzs7QUFPbEYsTUFBTSxPQUFPLG1CQUFtQjtJQUxoQztRQU9XLG1CQUFjLEdBQVcsRUFBRSxDQUFDO1FBQzVCLGNBQVMsR0FBVyxFQUFFLENBQUM7S0FHakM7b0ZBTlksbUJBQW1CO29FQUFuQixtQkFBbUI7WUNQaEMsNEJBQStDO1lBQUEsWUFBa0I7WUFBQSxpQkFBSTs7WUFBOUMsdURBQXVCO1lBQUMsY0FBa0I7WUFBbEIsd0NBQWtCOzs7aUZET3BELG1CQUFtQjtjQUwvQixTQUFTOzJCQUNFLGdCQUFnQixtQkFFVCx1QkFBdUIsQ0FBQyxNQUFNO2dCQUl0QyxjQUFjO2tCQUF0QixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSzs7a0ZBSEssbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYS1hbmNob3ItYmFjaycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FuY2hvci1iYWNrLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQW5jaG9yQmFja0NvbXBvbmVudCAge1xyXG5cclxuICBASW5wdXQoKSBhbmNob3JCYWNrVGV4dDogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgYW5jaG9yVVJMOiBzdHJpbmcgPSAnJztcclxuXHJcblxyXG59XHJcbiIsIjxhIGNsYXNzPVwiYW5jaG9yLWJhY2tcIiBbYXR0ci5ocmVmXT1cImFuY2hvclVSTFwiPnt7YW5jaG9yQmFja1RleHR9fTwvYT4iXX0=