import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = a0 => ({ "z-index": a0 });
const _c1 = (a0, a1, a2, a3, a4, a5) => ({ "min-width": a0, "max-width": a1, "top": a2, "right": a3, "bottom": a4, "left": a5 });
function OverlayComponent_article_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 1)(1, "div", 2);
    i0.ɵɵprojection(2);
    i0.ɵɵprojection(3, 1);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c0, ctx_r0.zIndex));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction6(4, _c1, ctx_r0.minWidth, ctx_r0.maxWidth, ctx_r0.topPos, ctx_r0.rightPos, ctx_r0.bottomPos, ctx_r0.leftPos));
} }
const _c2 = [[["", "overlay-header", ""]], [["", "overlay-content", ""]]];
const _c3 = ["[overlay-header]", "[overlay-content]"];
export class OverlayComponent {
    constructor() {
        this.zIndex = 0;
        this.showOverlay = false;
    }
    static { this.ɵfac = function OverlayComponent_Factory(t) { return new (t || OverlayComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OverlayComponent, selectors: [["aa-overlay"]], inputs: { zIndex: "zIndex", showOverlay: "showOverlay", topPos: "topPos", rightPos: "rightPos", bottomPos: "bottomPos", leftPos: "leftPos", minWidth: "minWidth", maxWidth: "maxWidth" }, ngContentSelectors: _c3, decls: 1, vars: 1, consts: [["class", "aa-overlay flex-center", 3, "ngStyle", 4, "ngIf"], [1, "aa-overlay", "flex-center", 3, "ngStyle"], [1, "aa-overlay-container", 3, "ngStyle"]], template: function OverlayComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c2);
            i0.ɵɵtemplate(0, OverlayComponent_article_0_Template, 4, 11, "article", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.showOverlay);
        } }, dependencies: [i1.NgIf, i1.NgStyle], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OverlayComponent, [{
        type: Component,
        args: [{ selector: 'aa-overlay', changeDetection: ChangeDetectionStrategy.OnPush, template: "<article \r\n  class=\"aa-overlay flex-center\" \r\n  *ngIf=\"showOverlay\" \r\n  [ngStyle]=\"{\r\n    'z-index' : zIndex\r\n  }\">\r\n  <div \r\n    class=\"aa-overlay-container\" \r\n    [ngStyle]=\"{\r\n      'min-width' : minWidth,\r\n      'max-width' : maxWidth,\r\n      'top' : topPos,\r\n      'right' : rightPos,\r\n      'bottom' : bottomPos,\r\n      'left' : leftPos\r\n    }\"\r\n    >\r\n    <ng-content select=\"[overlay-header]\"></ng-content>\r\n    <ng-content select=\"[overlay-content]\"></ng-content>\r\n  </div>\r\n</article>" }]
    }], () => [], { zIndex: [{
            type: Input
        }], showOverlay: [{
            type: Input
        }], topPos: [{
            type: Input
        }], rightPos: [{
            type: Input
        }], bottomPos: [{
            type: Input
        }], leftPos: [{
            type: Input
        }], minWidth: [{
            type: Input
        }], maxWidth: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(OverlayComponent, { className: "OverlayComponent", filePath: "lib\\widgets\\overlay\\overlay.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvd2lkZ2V0cy9vdmVybGF5L292ZXJsYXkuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL3dpZGdldHMvb3ZlcmxheS9vdmVybGF5LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7SUNBMUUsa0NBS0ssYUFBQTtJQVlELGtCQUFtRDtJQUNuRCxxQkFBb0Q7SUFDdEQsaUJBQU0sRUFBQTs7O0lBaEJOLG1FQUVFO0lBR0EsY0FPRTtJQVBGLHdKQU9FOzs7O0FEUE4sTUFBTSxPQUFPLGdCQUFnQjtJQVczQjtRQVRTLFdBQU0sR0FBVyxDQUFDLENBQUM7UUFDbkIsZ0JBQVcsR0FBWSxLQUFLLENBQUM7SUFRdEIsQ0FBQztpRkFYTixnQkFBZ0I7b0VBQWhCLGdCQUFnQjs7WUNSN0IsMEVBb0JVOztZQWxCUCxzQ0FBaUI7OztpRkRNUCxnQkFBZ0I7Y0FONUIsU0FBUzsyQkFDRSxZQUFZLG1CQUdMLHVCQUF1QixDQUFDLE1BQU07b0JBSXRDLE1BQU07a0JBQWQsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLOztrRkFUSyxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYS1vdmVybGF5JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vb3ZlcmxheS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vb3ZlcmxheS5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPdmVybGF5Q29tcG9uZW50IHtcclxuXHJcbiAgQElucHV0KCkgekluZGV4OiBudW1iZXIgPSAwO1xyXG4gIEBJbnB1dCgpIHNob3dPdmVybGF5OiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgdG9wUG9zOiBhbnk7XHJcbiAgQElucHV0KCkgcmlnaHRQb3M6IGFueTtcclxuICBASW5wdXQoKSBib3R0b21Qb3M6IGFueTtcclxuICBASW5wdXQoKSBsZWZ0UG9zOiBhbnk7XHJcbiAgQElucHV0KCkgbWluV2lkdGg6IGFueTtcclxuICBASW5wdXQoKSBtYXhXaWR0aDogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxufVxyXG4iLCI8YXJ0aWNsZSBcclxuICBjbGFzcz1cImFhLW92ZXJsYXkgZmxleC1jZW50ZXJcIiBcclxuICAqbmdJZj1cInNob3dPdmVybGF5XCIgXHJcbiAgW25nU3R5bGVdPVwie1xyXG4gICAgJ3otaW5kZXgnIDogekluZGV4XHJcbiAgfVwiPlxyXG4gIDxkaXYgXHJcbiAgICBjbGFzcz1cImFhLW92ZXJsYXktY29udGFpbmVyXCIgXHJcbiAgICBbbmdTdHlsZV09XCJ7XHJcbiAgICAgICdtaW4td2lkdGgnIDogbWluV2lkdGgsXHJcbiAgICAgICdtYXgtd2lkdGgnIDogbWF4V2lkdGgsXHJcbiAgICAgICd0b3AnIDogdG9wUG9zLFxyXG4gICAgICAncmlnaHQnIDogcmlnaHRQb3MsXHJcbiAgICAgICdib3R0b20nIDogYm90dG9tUG9zLFxyXG4gICAgICAnbGVmdCcgOiBsZWZ0UG9zXHJcbiAgICB9XCJcclxuICAgID5cclxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltvdmVybGF5LWhlYWRlcl1cIj48L25nLWNvbnRlbnQ+XHJcbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbb3ZlcmxheS1jb250ZW50XVwiPjwvbmctY29udGVudD5cclxuICA8L2Rpdj5cclxuPC9hcnRpY2xlPiJdfQ==