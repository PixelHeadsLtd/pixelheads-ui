import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = (a0, a1) => ({ "top": a0, "bottom": a1 });
const _c1 = (a0, a1) => ({ "font-size": a0, "text-transform": a1 });
function UiBlockComponent_article_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 1)(1, "h1", 2);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "div", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(3, _c0, ctx_r0.topPos, ctx_r0.bottomPos));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(6, _c1, ctx_r0.fontSize, ctx_r0.allCaps && "uppercase"));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.message, " ");
} }
export class UiBlockComponent {
    constructor() {
        this.showUiBlock = false;
        this.allCaps = false;
        this.message = '';
        this.zIndex = 0;
    }
    static { this.ɵfac = function UiBlockComponent_Factory(t) { return new (t || UiBlockComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: UiBlockComponent, selectors: [["aa-ui-block"]], inputs: { showUiBlock: "showUiBlock", topPos: "topPos", bottomPos: "bottomPos", fontSize: "fontSize", allCaps: "allCaps", message: "message", zIndex: "zIndex" }, decls: 1, vars: 1, consts: [["class", "aa-ui-block flex-group flex-center", 3, "ngStyle", 4, "ngIf"], [1, "aa-ui-block", "flex-group", "flex-center", 3, "ngStyle"], [3, "ngStyle"], [1, "background"]], template: function UiBlockComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, UiBlockComponent_article_0_Template, 4, 9, "article", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.showUiBlock);
        } }, dependencies: [i1.NgIf, i1.NgStyle], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UiBlockComponent, [{
        type: Component,
        args: [{ selector: 'aa-ui-block', changeDetection: ChangeDetectionStrategy.OnPush, template: "<article \r\n    *ngIf=\"showUiBlock\" \r\n    class=\"aa-ui-block flex-group flex-center\"\r\n    [ngStyle]=\"{\r\n        'top' : topPos,\r\n        'bottom' : bottomPos\r\n    }\"\r\n>\r\n    <h1\r\n        [ngStyle]=\"{\r\n            'font-size' : fontSize,\r\n            'text-transform' : allCaps&&'uppercase'\r\n        }\"\r\n    >\r\n        {{message}}\r\n    </h1>\r\n    <div class=\"background\"></div>\r\n</article>" }]
    }], null, { showUiBlock: [{
            type: Input
        }], topPos: [{
            type: Input
        }], bottomPos: [{
            type: Input
        }], fontSize: [{
            type: Input
        }], allCaps: [{
            type: Input
        }], message: [{
            type: Input
        }], zIndex: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(UiBlockComponent, { className: "UiBlockComponent", filePath: "lib\\layout\\ui-block\\ui-block.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktYmxvY2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL2xheW91dC91aS1ibG9jay91aS1ibG9jay5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvbGF5b3V0L3VpLWJsb2NrL3VpLWJsb2NrLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7SUNBMUUsa0NBT0MsWUFBQTtJQU9PLFlBQ0o7SUFBQSxpQkFBSztJQUNMLHlCQUE4QjtJQUNsQyxpQkFBVTs7O0lBZE4scUZBR0U7SUFHRSxjQUdFO0lBSEYsb0dBR0U7SUFFRixjQUNKO0lBREksK0NBQ0o7O0FEUEosTUFBTSxPQUFPLGdCQUFnQjtJQU43QjtRQVFXLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBSTdCLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUNyQixXQUFNLEdBQVcsQ0FBQyxDQUFDO0tBQzdCO2lGQVRZLGdCQUFnQjtvRUFBaEIsZ0JBQWdCO1lDUjdCLHlFQWlCVTs7WUFoQkwsc0NBQWlCOzs7aUZET1QsZ0JBQWdCO2NBTjVCLFNBQVM7MkJBQ0UsYUFBYSxtQkFHTix1QkFBdUIsQ0FBQyxNQUFNO2dCQUl0QyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7O2tGQVJLLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FhLXVpLWJsb2NrJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdWktYmxvY2suY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3VpLWJsb2NrLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIFVpQmxvY2tDb21wb25lbnQge1xyXG5cclxuICBASW5wdXQoKSBzaG93VWlCbG9jazogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHRvcFBvczogYW55O1xyXG4gIEBJbnB1dCgpIGJvdHRvbVBvczogYW55O1xyXG4gIEBJbnB1dCgpIGZvbnRTaXplOiBhbnk7XHJcbiAgQElucHV0KCkgYWxsQ2FwczogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG1lc3NhZ2U6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIHpJbmRleDogbnVtYmVyID0gMDtcclxufVxyXG4iLCI8YXJ0aWNsZSBcclxuICAgICpuZ0lmPVwic2hvd1VpQmxvY2tcIiBcclxuICAgIGNsYXNzPVwiYWEtdWktYmxvY2sgZmxleC1ncm91cCBmbGV4LWNlbnRlclwiXHJcbiAgICBbbmdTdHlsZV09XCJ7XHJcbiAgICAgICAgJ3RvcCcgOiB0b3BQb3MsXHJcbiAgICAgICAgJ2JvdHRvbScgOiBib3R0b21Qb3NcclxuICAgIH1cIlxyXG4+XHJcbiAgICA8aDFcclxuICAgICAgICBbbmdTdHlsZV09XCJ7XHJcbiAgICAgICAgICAgICdmb250LXNpemUnIDogZm9udFNpemUsXHJcbiAgICAgICAgICAgICd0ZXh0LXRyYW5zZm9ybScgOiBhbGxDYXBzJiYndXBwZXJjYXNlJ1xyXG4gICAgICAgIH1cIlxyXG4gICAgPlxyXG4gICAgICAgIHt7bWVzc2FnZX19XHJcbiAgICA8L2gxPlxyXG4gICAgPGRpdiBjbGFzcz1cImJhY2tncm91bmRcIj48L2Rpdj5cclxuPC9hcnRpY2xlPiJdfQ==