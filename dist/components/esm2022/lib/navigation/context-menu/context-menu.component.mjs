import { ChangeDetectionStrategy, Component, Input, HostListener } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = a0 => ({ "show-on-left": a0 });
const _c1 = a0 => ({ "min-width": a0 });
function ContextMenuComponent_ul_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 4);
    i0.ɵɵprojection(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c0, ctx_r0.showOnLeft))("ngStyle", i0.ɵɵpureFunction1(4, _c1, ctx_r0.minWidth));
} }
const _c2 = (a0, a1, a2) => ({ "top": a0, "left": a1, "right": a2 });
const _c3 = a0 => ({ "position-absolute": a0 });
const _c4 = ["*"];
export class ContextMenuComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.absolutePosition = false;
        this.zIndex = 0;
        this.showOnLeft = false;
        this.showContextMenu = false; // now exposed as api and not property - more flexible
    }
    onClick(targetElement) {
        const clickedInside = this.elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.showContextMenu = false;
        }
    }
    open() {
        this.showContextMenu = true;
    }
    close() {
        this.showContextMenu = false;
    }
    static { this.ɵfac = function ContextMenuComponent_Factory(t) { return new (t || ContextMenuComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ContextMenuComponent, selectors: [["aa-context-menu"]], hostBindings: function ContextMenuComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function ContextMenuComponent_click_HostBindingHandler($event) { return ctx.onClick($event.target); }, false, i0.ɵɵresolveDocument);
        } }, inputs: { absolutePosition: "absolutePosition", leftPos: "leftPos", topPos: "topPos", rightPos: "rightPos", zIndex: "zIndex", minWidth: "minWidth", showOnLeft: "showOnLeft" }, ngContentSelectors: _c4, decls: 5, vars: 9, consts: [[1, "context-menu", "flex-group", "width-control", 3, "ngStyle", "ngClass"], [1, "margin-right-0"], [1, "material-icons", 3, "click"], ["class", "strip-bullets", 3, "ngClass", "ngStyle", 4, "ngIf"], [1, "strip-bullets", 3, "ngClass", "ngStyle"]], template: function ContextMenuComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "nav", 0)(1, "div", 1)(2, "button", 2);
            i0.ɵɵlistener("click", function ContextMenuComponent_Template_button_click_2_listener() { return ctx.showContextMenu = !ctx.showContextMenu; });
            i0.ɵɵtext(3, " more_vert ");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(4, ContextMenuComponent_ul_4_Template, 2, 6, "ul", 3);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction3(3, _c2, ctx.topPos, ctx.leftPos, ctx.rightPos))("ngClass", i0.ɵɵpureFunction1(7, _c3, ctx.absolutePosition));
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", ctx.showContextMenu);
        } }, dependencies: [i1.NgClass, i1.NgIf, i1.NgStyle], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContextMenuComponent, [{
        type: Component,
        args: [{ selector: 'aa-context-menu', changeDetection: ChangeDetectionStrategy.OnPush, template: "<nav \r\n  class=\"context-menu flex-group width-control\" \r\n  [ngStyle]=\"{\r\n    'top' : topPos, \r\n    'left' : leftPos, \r\n    'right' : rightPos\r\n  }\" \r\n  [ngClass]=\"{\r\n    'position-absolute' : absolutePosition\r\n  }\"\r\n  >\r\n  <div class=\"margin-right-0\">\r\n    <button \r\n      (click)=\"showContextMenu=!showContextMenu\" \r\n      class=\"material-icons\">\r\n      more_vert\r\n    </button>\r\n  </div>\r\n  <ul \r\n    *ngIf=\"showContextMenu\" \r\n    class=\"strip-bullets\" \r\n    [ngClass]=\"{'show-on-left' : showOnLeft}\"\r\n    [ngStyle]=\"{'min-width' : minWidth}\"\r\n  >\r\n    <ng-content></ng-content>\r\n  </ul>\r\n</nav>" }]
    }], () => [{ type: i0.ElementRef }], { absolutePosition: [{
            type: Input
        }], leftPos: [{
            type: Input
        }], topPos: [{
            type: Input
        }], rightPos: [{
            type: Input
        }], zIndex: [{
            type: Input
        }], minWidth: [{
            type: Input
        }], showOnLeft: [{
            type: Input
        }], onClick: [{
            type: HostListener,
            args: ['document:click', ['$event.target']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ContextMenuComponent, { className: "ContextMenuComponent", filePath: "lib\\navigation\\context-menu\\context-menu.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9uYXZpZ2F0aW9uL2NvbnRleHQtbWVudS9jb250ZXh0LW1lbnUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL25hdmlnYXRpb24vY29udGV4dC1tZW51L2NvbnRleHQtbWVudS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxZQUFZLEVBQWMsTUFBTSxlQUFlLENBQUM7Ozs7OztJQ2tCMUcsNkJBS0M7SUFDQyxrQkFBeUI7SUFDM0IsaUJBQUs7OztJQUpILHVFQUF5Qyx3REFBQTs7Ozs7QURiN0MsTUFBTSxPQUFPLG9CQUFvQjtJQVcvQixZQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBVGpDLHFCQUFnQixHQUFZLEtBQUssQ0FBQztRQUlsQyxXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBRW5CLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFDckMsb0JBQWUsR0FBWSxLQUFLLENBQUMsQ0FBQyxzREFBc0Q7SUFFMUMsQ0FBQztJQUd4QyxPQUFPLENBQUMsYUFBaUI7UUFDOUIsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDaEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7U0FDaEM7SUFDSCxDQUFDO0lBRU0sSUFBSTtRQUNULElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQzlCLENBQUM7SUFFTSxLQUFLO1FBQ1YsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztxRkEzQlUsb0JBQW9CO29FQUFwQixvQkFBb0I7MkdBQXBCLDBCQUFzQjs7O1lDUm5DLDhCQVVHLGFBQUEsZ0JBQUE7WUFHRywrSUFBMEM7WUFFMUMsMkJBQ0Y7WUFBQSxpQkFBUyxFQUFBO1lBRVgsbUVBT0s7WUFDUCxpQkFBTTs7WUF4QkosMkZBSUUsNkRBQUE7WUFhQyxlQUFxQjtZQUFyQiwwQ0FBcUI7OztpRkRYYixvQkFBb0I7Y0FOaEMsU0FBUzsyQkFDRSxpQkFBaUIsbUJBR1YsdUJBQXVCLENBQUMsTUFBTTsyQ0FJdEMsZ0JBQWdCO2tCQUF4QixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBTUMsT0FBTztrQkFEYixZQUFZO21CQUFDLGdCQUFnQixFQUFFLENBQUMsZUFBZSxDQUFDOztrRkFidEMsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgSG9zdExpc3RlbmVyLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FhLWNvbnRleHQtbWVudScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbnRleHQtbWVudS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY29udGV4dC1tZW51LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbnRleHRNZW51Q29tcG9uZW50IHtcclxuXHJcbiAgQElucHV0KCkgYWJzb2x1dGVQb3NpdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGxlZnRQb3M6IGFueTtcclxuICBASW5wdXQoKSB0b3BQb3M6IGFueTtcclxuICBASW5wdXQoKSByaWdodFBvczogYW55O1xyXG4gIEBJbnB1dCgpIHpJbmRleDogbnVtYmVyID0gMDtcclxuICBASW5wdXQoKSBtaW5XaWR0aDogYW55O1xyXG4gIEBJbnB1dCgpIHNob3dPbkxlZnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBzaG93Q29udGV4dE1lbnU6IGJvb2xlYW4gPSBmYWxzZTsgLy8gbm93IGV4cG9zZWQgYXMgYXBpIGFuZCBub3QgcHJvcGVydHkgLSBtb3JlIGZsZXhpYmxlXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikgeyB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJywgWyckZXZlbnQudGFyZ2V0J10pXHJcbiAgcHVibGljIG9uQ2xpY2sodGFyZ2V0RWxlbWVudDphbnkpIHtcclxuICAgIGNvbnN0IGNsaWNrZWRJbnNpZGUgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyh0YXJnZXRFbGVtZW50KTtcclxuICAgIGlmICghY2xpY2tlZEluc2lkZSkge1xyXG4gICAgICAgIHRoaXMuc2hvd0NvbnRleHRNZW51ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb3BlbigpIHtcclxuICAgIHRoaXMuc2hvd0NvbnRleHRNZW51ID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbG9zZSgpIHtcclxuICAgIHRoaXMuc2hvd0NvbnRleHRNZW51ID0gZmFsc2U7XHJcbiAgfVxyXG5cclxufVxyXG4iLCI8bmF2IFxyXG4gIGNsYXNzPVwiY29udGV4dC1tZW51IGZsZXgtZ3JvdXAgd2lkdGgtY29udHJvbFwiIFxyXG4gIFtuZ1N0eWxlXT1cIntcclxuICAgICd0b3AnIDogdG9wUG9zLCBcclxuICAgICdsZWZ0JyA6IGxlZnRQb3MsIFxyXG4gICAgJ3JpZ2h0JyA6IHJpZ2h0UG9zXHJcbiAgfVwiIFxyXG4gIFtuZ0NsYXNzXT1cIntcclxuICAgICdwb3NpdGlvbi1hYnNvbHV0ZScgOiBhYnNvbHV0ZVBvc2l0aW9uXHJcbiAgfVwiXHJcbiAgPlxyXG4gIDxkaXYgY2xhc3M9XCJtYXJnaW4tcmlnaHQtMFwiPlxyXG4gICAgPGJ1dHRvbiBcclxuICAgICAgKGNsaWNrKT1cInNob3dDb250ZXh0TWVudT0hc2hvd0NvbnRleHRNZW51XCIgXHJcbiAgICAgIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5cclxuICAgICAgbW9yZV92ZXJ0XHJcbiAgICA8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuICA8dWwgXHJcbiAgICAqbmdJZj1cInNob3dDb250ZXh0TWVudVwiIFxyXG4gICAgY2xhc3M9XCJzdHJpcC1idWxsZXRzXCIgXHJcbiAgICBbbmdDbGFzc109XCJ7J3Nob3ctb24tbGVmdCcgOiBzaG93T25MZWZ0fVwiXHJcbiAgICBbbmdTdHlsZV09XCJ7J21pbi13aWR0aCcgOiBtaW5XaWR0aH1cIlxyXG4gID5cclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICA8L3VsPlxyXG48L25hdj4iXX0=