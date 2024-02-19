import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = (a0, a1, a2, a3, a4) => ({ "width": a0, "left": a1, "top": a2, "bottom": a3, "z-index": a4 });
const _c1 = a0 => ({ "show-menu": a0 });
const _c2 = ["*"];
export class NavContextComponent {
    constructor() {
        this.zIndex = 0;
        this.showMenu = false;
    }
    toggle() {
        this.showMenu = !this.showMenu;
    }
    static { this.ɵfac = function NavContextComponent_Factory(t) { return new (t || NavContextComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NavContextComponent, selectors: [["aa-nav-context"]], inputs: { navWidth: "navWidth", topPos: "topPos", leftPos: "leftPos", rightPos: "rightPos", bottomPos: "bottomPos", zIndex: "zIndex", showMenu: "showMenu" }, ngContentSelectors: _c2, decls: 6, vars: 10, consts: [[1, "nav-context", 3, "ngStyle"], [1, "nav-context-content"], [1, "material-icons", "menu", 3, "click"], [3, "ngClass"]], template: function NavContextComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "nav", 0)(1, "div", 1)(2, "button", 2);
            i0.ɵɵlistener("click", function NavContextComponent_Template_button_click_2_listener() { return ctx.toggle(); });
            i0.ɵɵtext(3, "menu");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "ul", 3);
            i0.ɵɵprojection(5);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction5(2, _c0, ctx.navWidth, ctx.leftPos, ctx.topPos, ctx.bottomPos, ctx.zIndex));
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(8, _c1, ctx.showMenu));
        } }, dependencies: [i1.NgClass, i1.NgStyle], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NavContextComponent, [{
        type: Component,
        args: [{ selector: 'aa-nav-context', changeDetection: ChangeDetectionStrategy.OnPush, template: "<nav class=\"nav-context\" \r\n    [ngStyle]=\"{\r\n        'width' : navWidth, \r\n        'left' : leftPos, \r\n        'top' : topPos, \r\n        'bottom' : bottomPos, \r\n        'z-index' : zIndex\r\n    }\">\r\n    <div class=\"nav-context-content\">\r\n        <button (click)=\"toggle()\" class=\"material-icons menu\">menu</button>\r\n        <ul [ngClass]=\"{'show-menu' : showMenu}\">\r\n            <ng-content></ng-content>\r\n        </ul>\r\n    </div>\r\n</nav>" }]
    }], () => [], { navWidth: [{
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
        }], showMenu: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(NavContextComponent, { className: "NavContextComponent", filePath: "lib\\navigation\\nav-context\\nav-context.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LWNvbnRleHQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL25hdmlnYXRpb24vbmF2LWNvbnRleHQvbmF2LWNvbnRleHQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL25hdmlnYXRpb24vbmF2LWNvbnRleHQvbmF2LWNvbnRleHQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7OztBQVExRSxNQUFNLE9BQU8sbUJBQW1CO0lBVTlCO1FBSFMsV0FBTSxHQUFXLENBQUMsQ0FBQztRQUNuQixhQUFRLEdBQVksS0FBSyxDQUFDO0lBRW5CLENBQUM7SUFFakIsTUFBTTtRQUNKLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBRSxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ2xDLENBQUM7b0ZBZFUsbUJBQW1CO29FQUFuQixtQkFBbUI7O1lDUmhDLDhCQU9PLGFBQUEsZ0JBQUE7WUFFUyxnR0FBUyxZQUFRLElBQUM7WUFBNkIsb0JBQUk7WUFBQSxpQkFBUztZQUNwRSw2QkFBeUM7WUFDckMsa0JBQXlCO1lBQzdCLGlCQUFLLEVBQUEsRUFBQTs7WUFYVCxzSEFNRTtZQUdNLGVBQW9DO1lBQXBDLGtFQUFvQzs7O2lGREZuQyxtQkFBbUI7Y0FQL0IsU0FBUzsyQkFDRSxnQkFBZ0IsbUJBR1QsdUJBQXVCLENBQUMsTUFBTTtvQkFLdEMsUUFBUTtrQkFBaEIsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSzs7a0ZBUkssbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYS1uYXYtY29udGV4dCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL25hdi1jb250ZXh0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9uYXYtY29udGV4dC5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTmF2Q29udGV4dENvbXBvbmVudCB7XHJcblxyXG4gIEBJbnB1dCgpIG5hdldpZHRoOiBhbnk7XHJcbiAgQElucHV0KCkgdG9wUG9zOiBhbnk7XHJcbiAgQElucHV0KCkgbGVmdFBvczogYW55O1xyXG4gIEBJbnB1dCgpIHJpZ2h0UG9zOiBhbnk7XHJcbiAgQElucHV0KCkgYm90dG9tUG9zOiBhbnk7XHJcbiAgQElucHV0KCkgekluZGV4OiBudW1iZXIgPSAwO1xyXG4gIEBJbnB1dCgpIHNob3dNZW51OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIHRvZ2dsZSgpIHtcclxuICAgIHRoaXMuc2hvd01lbnUgPSAhIHRoaXMuc2hvd01lbnU7XHJcbiAgfVxyXG59XHJcbiIsIjxuYXYgY2xhc3M9XCJuYXYtY29udGV4dFwiIFxyXG4gICAgW25nU3R5bGVdPVwie1xyXG4gICAgICAgICd3aWR0aCcgOiBuYXZXaWR0aCwgXHJcbiAgICAgICAgJ2xlZnQnIDogbGVmdFBvcywgXHJcbiAgICAgICAgJ3RvcCcgOiB0b3BQb3MsIFxyXG4gICAgICAgICdib3R0b20nIDogYm90dG9tUG9zLCBcclxuICAgICAgICAnei1pbmRleCcgOiB6SW5kZXhcclxuICAgIH1cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJuYXYtY29udGV4dC1jb250ZW50XCI+XHJcbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwidG9nZ2xlKClcIiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIG1lbnVcIj5tZW51PC9idXR0b24+XHJcbiAgICAgICAgPHVsIFtuZ0NsYXNzXT1cInsnc2hvdy1tZW51JyA6IHNob3dNZW51fVwiPlxyXG4gICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG48L25hdj4iXX0=