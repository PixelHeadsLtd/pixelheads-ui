import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = (a1, a2, a3, a4) => ({ "position": "fixed", "left": a1, "top": a2, "bottom": a3, "z-index": a4 });
const _c1 = () => ({});
const _c2 = a0 => ({ "flex-start": a0 });
const _c3 = ["*"];
export class ListSelectableComponent {
    constructor() {
        this.zIndex = 0;
        this.flexStart = false;
        this.fixedPosition = false;
    }
    static { this.ɵfac = function ListSelectableComponent_Factory(t) { return new (t || ListSelectableComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ListSelectableComponent, selectors: [["aa-list-selectable"]], inputs: { minWidth: "minWidth", topPos: "topPos", leftPos: "leftPos", rightPos: "rightPos", bottomPos: "bottomPos", zIndex: "zIndex", flexStart: "flexStart", fixedPosition: "fixedPosition" }, ngContentSelectors: _c3, decls: 3, vars: 10, consts: [[1, "aa-list-selectable", "flex-group", 3, "ngStyle", "ngClass"]], template: function ListSelectableComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "nav", 0)(1, "ul");
            i0.ɵɵprojection(2);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵproperty("ngStyle", ctx.fixedPosition ? i0.ɵɵpureFunction4(2, _c0, ctx.leftPos, ctx.topPos, ctx.bottomPos, ctx.zIndex) : i0.ɵɵpureFunction0(7, _c1))("ngClass", i0.ɵɵpureFunction1(8, _c2, ctx.flexStart));
        } }, dependencies: [i1.NgClass, i1.NgStyle], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListSelectableComponent, [{
        type: Component,
        args: [{ selector: 'aa-list-selectable', changeDetection: ChangeDetectionStrategy.OnPush, template: "<nav\r\n    class=\"\r\n        aa-list-selectable\r\n        flex-group\r\n    \"\r\n    [ngStyle]=\"fixedPosition ? {\r\n        'position' : 'fixed',\r\n        'left' : leftPos,\r\n        'top' : topPos,\r\n        'bottom' : bottomPos,\r\n        'z-index' : zIndex\r\n    } : {}\"\r\n    [ngClass]=\"{\r\n        'flex-start' : flexStart\r\n    }\"\r\n    >\r\n    <ul>\r\n        <ng-content></ng-content>\r\n    </ul>\r\n</nav>\r\n" }]
    }], null, { minWidth: [{
            type: Input
        }], topPos: [{
            type: Input
        }], leftPos: [{
            type: Input
        }], rightPos: [{
            type: Input
        }], bottomPos: [{
            type: Input
        }], zIndex: [{
            type: Input
        }], flexStart: [{
            type: Input
        }], fixedPosition: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ListSelectableComponent, { className: "ListSelectableComponent", filePath: "lib\\widgets\\list-selectable\\list-selectable.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1zZWxlY3RhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi93aWRnZXRzL2xpc3Qtc2VsZWN0YWJsZS9saXN0LXNlbGVjdGFibGUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL3dpZGdldHMvbGlzdC1zZWxlY3RhYmxlL2xpc3Qtc2VsZWN0YWJsZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztBQVExRSxNQUFNLE9BQU8sdUJBQXVCO0lBTnBDO1FBYVcsV0FBTSxHQUFXLENBQUMsQ0FBQztRQUNuQixjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGtCQUFhLEdBQVksS0FBSyxDQUFDO0tBQ3pDO3dGQVZZLHVCQUF1QjtvRUFBdkIsdUJBQXVCOztZQ1JwQyw4QkFlSyxTQUFBO1lBRUcsa0JBQXlCO1lBQzdCLGlCQUFLLEVBQUE7O1lBYkwseUpBTU8sc0RBQUE7OztpRkRIRSx1QkFBdUI7Y0FObkMsU0FBUzsyQkFDRSxvQkFBb0IsbUJBR2IsdUJBQXVCLENBQUMsTUFBTTtnQkFJdEMsUUFBUTtrQkFBaEIsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7O2tGQVRLLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FhLWxpc3Qtc2VsZWN0YWJsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2xpc3Qtc2VsZWN0YWJsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbGlzdC1zZWxlY3RhYmxlLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIExpc3RTZWxlY3RhYmxlQ29tcG9uZW50IHtcclxuXHJcbiAgQElucHV0KCkgbWluV2lkdGg6IGFueTtcclxuICBASW5wdXQoKSB0b3BQb3M6IGFueTtcclxuICBASW5wdXQoKSBsZWZ0UG9zOiBhbnk7XHJcbiAgQElucHV0KCkgcmlnaHRQb3M6IGFueTtcclxuICBASW5wdXQoKSBib3R0b21Qb3M6IGFueTtcclxuICBASW5wdXQoKSB6SW5kZXg6IG51bWJlciA9IDA7XHJcbiAgQElucHV0KCkgZmxleFN0YXJ0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZml4ZWRQb3NpdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG59XHJcbiIsIjxuYXZcclxuICAgIGNsYXNzPVwiXHJcbiAgICAgICAgYWEtbGlzdC1zZWxlY3RhYmxlXHJcbiAgICAgICAgZmxleC1ncm91cFxyXG4gICAgXCJcclxuICAgIFtuZ1N0eWxlXT1cImZpeGVkUG9zaXRpb24gPyB7XHJcbiAgICAgICAgJ3Bvc2l0aW9uJyA6ICdmaXhlZCcsXHJcbiAgICAgICAgJ2xlZnQnIDogbGVmdFBvcyxcclxuICAgICAgICAndG9wJyA6IHRvcFBvcyxcclxuICAgICAgICAnYm90dG9tJyA6IGJvdHRvbVBvcyxcclxuICAgICAgICAnei1pbmRleCcgOiB6SW5kZXhcclxuICAgIH0gOiB7fVwiXHJcbiAgICBbbmdDbGFzc109XCJ7XHJcbiAgICAgICAgJ2ZsZXgtc3RhcnQnIDogZmxleFN0YXJ0XHJcbiAgICB9XCJcclxuICAgID5cclxuICAgIDx1bD5cclxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICA8L3VsPlxyXG48L25hdj5cclxuIl19