import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function ModalComponent_section_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 5)(1, "h2", 6);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.heading);
} }
const _c0 = [[["", "content-custom", ""]], "*"];
const _c1 = (a0, a1, a2, a3) => ({ "aa-green": a0, "aa-orange": a1, "aa-red": a2, "aa-blue": a3 });
const _c2 = (a0, a1, a2, a3, a4, a5) => ({ "top": a0, "right": a1, "left": a2, "min-width": a3, "max-width": a4, "z-index": a5 });
const _c3 = ["[content-custom]", "*"];
export class ModalComponent {
    constructor() {
        this.heading = '';
        this.message = '';
        this.green = false;
        this.orange = false;
        this.red = false;
        this.blue = false;
        this.zIndex = 0;
        this.hideHeader = 0;
    }
    static { this.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ModalComponent, selectors: [["aa-modal"]], inputs: { heading: "heading", message: "message", topPos: "topPos", rightPos: "rightPos", leftPos: "leftPos", minWidth: "minWidth", maxWidth: "maxWidth", green: "green", orange: "orange", red: "red", blue: "blue", zIndex: "zIndex", hideHeader: "hideHeader" }, ngContentSelectors: _c3, decls: 8, vars: 16, consts: [[1, "aa-modal"], [1, "aa-modal-container", 3, "ngClass", "ngStyle"], ["class", "aa-modal-header", 4, "ngIf"], [1, "aa-modal-content"], [1, "aa-modal-footer", "flex-group", "flex-center"], [1, "aa-modal-header"], [1, "boxed", "align-center"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0);
            i0.ɵɵelementStart(0, "article", 0)(1, "div", 1);
            i0.ɵɵtemplate(2, ModalComponent_section_2_Template, 3, 1, "section", 2);
            i0.ɵɵelementStart(3, "section", 3);
            i0.ɵɵtext(4);
            i0.ɵɵprojection(5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "section", 4);
            i0.ɵɵprojection(7, 1);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction4(4, _c1, ctx.green, ctx.orange, ctx.red, ctx.blue))("ngStyle", i0.ɵɵpureFunction6(9, _c2, ctx.topPos, ctx.rightPos, ctx.leftPos, ctx.minWidth, ctx.maxWidth, ctx.zIndex));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.hideHeader);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.message, " ");
        } }, dependencies: [i1.NgClass, i1.NgIf, i1.NgStyle], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModalComponent, [{
        type: Component,
        args: [{ selector: 'aa-modal', changeDetection: ChangeDetectionStrategy.OnPush, template: "<article class=\"aa-modal\">\r\n  <div \r\n    class=\"aa-modal-container\" \r\n    [ngClass]=\"{'aa-green' : green, 'aa-orange' : orange, 'aa-red' : red, 'aa-blue' : blue}\"\r\n    [ngStyle]=\"{\r\n      'top' : topPos,\r\n      'right' : rightPos,\r\n      'left' : leftPos,\r\n      'min-width' : minWidth,\r\n      'max-width' : maxWidth,\r\n      'z-index' : zIndex\r\n    }\"\r\n  >\r\n    <section *ngIf=\"!hideHeader\" class=\"aa-modal-header\">\r\n      <h2 class=\"boxed align-center\">{{heading}}</h2>\r\n    </section>\r\n    <section class=\"aa-modal-content\">\r\n      {{message}}\r\n      <ng-content select=\"[content-custom]\"></ng-content>\r\n    </section>\r\n    <section class=\"aa-modal-footer flex-group flex-center\">\r\n        <ng-content></ng-content>\r\n    </section>\r\n  </div>\r\n</article>\r\n" }]
    }], () => [], { heading: [{
            type: Input
        }], message: [{
            type: Input
        }], topPos: [{
            type: Input
        }], rightPos: [{
            type: Input
        }], leftPos: [{
            type: Input
        }], minWidth: [{
            type: Input
        }], maxWidth: [{
            type: Input
        }], green: [{
            type: Input
        }], orange: [{
            type: Input
        }], red: [{
            type: Input
        }], blue: [{
            type: Input
        }], zIndex: [{
            type: Input
        }], hideHeader: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ModalComponent, { className: "ModalComponent", filePath: "lib\\widgets\\modal\\modal.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL3dpZGdldHMvbW9kYWwvbW9kYWwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL3dpZGdldHMvbW9kYWwvbW9kYWwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7SUNhdEUsa0NBQXFELFlBQUE7SUFDcEIsWUFBVztJQUFBLGlCQUFLLEVBQUE7OztJQUFoQixlQUFXO0lBQVgsb0NBQVc7Ozs7OztBRE5oRCxNQUFNLE9BQU8sY0FBYztJQWdCekI7UUFkUyxZQUFPLEdBQVksRUFBRSxDQUFDO1FBQ3RCLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFNckIsVUFBSyxHQUFZLEtBQUssQ0FBQztRQUN2QixXQUFNLEdBQVksS0FBSyxDQUFDO1FBQ3hCLFFBQUcsR0FBWSxLQUFLLENBQUM7UUFDckIsU0FBSSxHQUFZLEtBQUssQ0FBQztRQUN0QixXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLGVBQVUsR0FBVyxDQUFDLENBQUM7SUFFaEIsQ0FBQzsrRUFoQk4sY0FBYztvRUFBZCxjQUFjOztZQ1IzQixrQ0FBMEIsYUFBQTtZQWF0Qix1RUFFVTtZQUNWLGtDQUFrQztZQUNoQyxZQUNBO1lBQUEsa0JBQW1EO1lBQ3JELGlCQUFVO1lBQ1Ysa0NBQXdEO1lBQ3BELHFCQUF5QjtZQUM3QixpQkFBVSxFQUFBLEVBQUE7O1lBbkJWLGNBQXdGO1lBQXhGLDhGQUF3RixzSEFBQTtZQVU5RSxjQUFpQjtZQUFqQixzQ0FBaUI7WUFJekIsZUFDQTtZQURBLDRDQUNBOzs7aUZEVk8sY0FBYztjQU4xQixTQUFTOzJCQUNFLFVBQVUsbUJBR0gsdUJBQXVCLENBQUMsTUFBTTtvQkFJdEMsT0FBTztrQkFBZixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csR0FBRztrQkFBWCxLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSzs7a0ZBZEssY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FhLW1vZGFsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL21vZGFsLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE1vZGFsQ29tcG9uZW50IHtcclxuXHJcbiAgQElucHV0KCkgaGVhZGluZzogc3RyaW5nICA9ICcnO1xyXG4gIEBJbnB1dCgpIG1lc3NhZ2U6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIHRvcFBvczogYW55O1xyXG4gIEBJbnB1dCgpIHJpZ2h0UG9zOiBhbnk7XHJcbiAgQElucHV0KCkgbGVmdFBvczogYW55O1xyXG4gIEBJbnB1dCgpIG1pbldpZHRoOiBhbnk7XHJcbiAgQElucHV0KCkgbWF4V2lkdGg6IGFueTtcclxuICBASW5wdXQoKSBncmVlbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG9yYW5nZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHJlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGJsdWU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSB6SW5kZXg6IG51bWJlciA9IDA7XHJcbiAgQElucHV0KCkgaGlkZUhlYWRlcjogbnVtYmVyID0gMDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbn1cclxuIiwiPGFydGljbGUgY2xhc3M9XCJhYS1tb2RhbFwiPlxyXG4gIDxkaXYgXHJcbiAgICBjbGFzcz1cImFhLW1vZGFsLWNvbnRhaW5lclwiIFxyXG4gICAgW25nQ2xhc3NdPVwieydhYS1ncmVlbicgOiBncmVlbiwgJ2FhLW9yYW5nZScgOiBvcmFuZ2UsICdhYS1yZWQnIDogcmVkLCAnYWEtYmx1ZScgOiBibHVlfVwiXHJcbiAgICBbbmdTdHlsZV09XCJ7XHJcbiAgICAgICd0b3AnIDogdG9wUG9zLFxyXG4gICAgICAncmlnaHQnIDogcmlnaHRQb3MsXHJcbiAgICAgICdsZWZ0JyA6IGxlZnRQb3MsXHJcbiAgICAgICdtaW4td2lkdGgnIDogbWluV2lkdGgsXHJcbiAgICAgICdtYXgtd2lkdGgnIDogbWF4V2lkdGgsXHJcbiAgICAgICd6LWluZGV4JyA6IHpJbmRleFxyXG4gICAgfVwiXHJcbiAgPlxyXG4gICAgPHNlY3Rpb24gKm5nSWY9XCIhaGlkZUhlYWRlclwiIGNsYXNzPVwiYWEtbW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgIDxoMiBjbGFzcz1cImJveGVkIGFsaWduLWNlbnRlclwiPnt7aGVhZGluZ319PC9oMj5cclxuICAgIDwvc2VjdGlvbj5cclxuICAgIDxzZWN0aW9uIGNsYXNzPVwiYWEtbW9kYWwtY29udGVudFwiPlxyXG4gICAgICB7e21lc3NhZ2V9fVxyXG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbY29udGVudC1jdXN0b21dXCI+PC9uZy1jb250ZW50PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJhYS1tb2RhbC1mb290ZXIgZmxleC1ncm91cCBmbGV4LWNlbnRlclwiPlxyXG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgIDwvc2VjdGlvbj5cclxuICA8L2Rpdj5cclxuPC9hcnRpY2xlPlxyXG4iXX0=