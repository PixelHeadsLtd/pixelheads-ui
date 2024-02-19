import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = (a0, a1) => ({ "left": a0, "z-index": a1 });
const _c1 = ["*"];
export class FooterComponent {
    constructor() {
        this.zIndex = 0;
        this.colorClass = '';
    }
    static { this.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FooterComponent, selectors: [["aa-footer"]], inputs: { leftPos: "leftPos", zIndex: "zIndex", colorClass: "colorClass" }, ngContentSelectors: _c1, decls: 2, vars: 7, consts: [[3, "ngStyle"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "footer", 0);
            i0.ɵɵprojection(1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassMap(ctx.colorClass);
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(4, _c0, ctx.leftPos, ctx.zIndex));
        } }, dependencies: [i1.NgStyle], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FooterComponent, [{
        type: Component,
        args: [{ selector: 'aa-footer', changeDetection: ChangeDetectionStrategy.OnPush, template: "<footer class=\"{{colorClass}}\" [ngStyle]=\"{'left':leftPos, 'z-index':zIndex}\">\r\n  <ng-content></ng-content>\r\n</footer>" }]
    }], () => [], { leftPos: [{
            type: Input
        }], zIndex: [{
            type: Input
        }], colorClass: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "lib\\layout\\footer\\footer.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9sYXlvdXQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBUTFFLE1BQU0sT0FBTyxlQUFlO0lBTTFCO1FBSFMsV0FBTSxHQUFXLENBQUMsQ0FBQztRQUNuQixlQUFVLEdBQVcsRUFBRSxDQUFDO0lBRWpCLENBQUM7Z0ZBTk4sZUFBZTtvRUFBZixlQUFlOztZQ1I1QixpQ0FBOEU7WUFDNUUsa0JBQXlCO1lBQzNCLGlCQUFTOztZQUZELDZCQUFzQjtZQUFDLDZFQUE4Qzs7O2lGRFFoRSxlQUFlO2NBTjNCLFNBQVM7MkJBQ0UsV0FBVyxtQkFHSix1QkFBdUIsQ0FBQyxNQUFNO29CQUl0QyxPQUFPO2tCQUFmLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLOztrRkFKSyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWEtZm9vdGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZm9vdGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9mb290ZXIuY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9vdGVyQ29tcG9uZW50ICB7XHJcblxyXG4gIEBJbnB1dCgpIGxlZnRQb3M6IGFueTtcclxuICBASW5wdXQoKSB6SW5kZXg6IG51bWJlciA9IDA7XHJcbiAgQElucHV0KCkgY29sb3JDbGFzczogc3RyaW5nID0gJyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG59XHJcbiIsIjxmb290ZXIgY2xhc3M9XCJ7e2NvbG9yQ2xhc3N9fVwiIFtuZ1N0eWxlXT1cInsnbGVmdCc6bGVmdFBvcywgJ3otaW5kZXgnOnpJbmRleH1cIj5cclxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvZm9vdGVyPiJdfQ==