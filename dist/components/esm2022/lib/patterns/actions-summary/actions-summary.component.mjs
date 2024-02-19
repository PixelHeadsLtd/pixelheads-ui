import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function ActionsSummaryComponent_section_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 2)(1, "strong", 3);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h4");
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "slice");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("title", item_r1.value);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r1.heading);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("\n            ", item_r1.status, " \n            flex-center \n            bd-2 \n            bd-solid \n            margin-top-0-75\n            margin-right-0");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r1.value.length > 7 ? i0.ɵɵpipeBind3(5, 6, item_r1.value, 0, 7) + "..." : item_r1.value, " ");
} }
const _c0 = (a0, a1) => ({ "flex-column": a0, "flex-nowrap": a1 });
export class ActionsSummaryComponent {
    constructor() {
        this.heading = '';
        this.title = '';
        this.value = 0;
        this.status = '';
        this.verticalDisplay = false;
        this.noWrap = false;
        this.actionsSummaryItems = [];
    }
    static { this.ɵfac = function ActionsSummaryComponent_Factory(t) { return new (t || ActionsSummaryComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ActionsSummaryComponent, selectors: [["aa-actions-summary"]], inputs: { heading: "heading", title: "title", value: "value", status: "status", verticalDisplay: "verticalDisplay", noWrap: "noWrap", actionsSummaryItems: "actionsSummaryItems" }, decls: 2, vars: 5, consts: [[1, "actions-summary", "flex-group", "flex-start", 3, "ngClass"], ["class", "\n            flex-center \n            flex-group \n            flex-column\n        ", 3, "title", 4, "ngFor", "ngForOf"], [1, "flex-center", "flex-group", "flex-column", 3, "title"], [1, "nowrap", "margin-0"]], template: function ActionsSummaryComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "article", 0);
            i0.ɵɵtemplate(1, ActionsSummaryComponent_section_1_Template, 6, 10, "section", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(2, _c0, ctx.verticalDisplay, ctx.noWrap));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.actionsSummaryItems);
        } }, dependencies: [i1.NgClass, i1.NgForOf, i1.SlicePipe], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ActionsSummaryComponent, [{
        type: Component,
        args: [{ selector: 'aa-actions-summary', changeDetection: ChangeDetectionStrategy.OnPush, template: "<article \r\n    class=\"actions-summary flex-group flex-start\"\r\n    [ngClass]=\"{ \r\n        'flex-column' : verticalDisplay,\r\n        'flex-nowrap' : noWrap\r\n    }\"\r\n>\r\n    <section \r\n        *ngFor=\"let item of actionsSummaryItems; let i = index\" \r\n        title=\"{{item.value}}\"\r\n        class=\"\r\n            flex-center \r\n            flex-group \r\n            flex-column\r\n        \"\r\n    >\r\n        <strong class=\"nowrap margin-0\">{{item.heading}}</strong>\r\n        <h4 class=\"\r\n            {{item.status}} \r\n            flex-center \r\n            bd-2 \r\n            bd-solid \r\n            margin-top-0-75\r\n            margin-right-0\"\r\n            >\r\n            {{(item.value.length>7)? (item.value | slice:0:7)+'...':(item.value)}}\r\n        </h4>\r\n    </section>\r\n</article>" }]
    }], () => [], { heading: [{
            type: Input
        }], title: [{
            type: Input
        }], value: [{
            type: Input
        }], status: [{
            type: Input
        }], verticalDisplay: [{
            type: Input
        }], noWrap: [{
            type: Input
        }], actionsSummaryItems: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ActionsSummaryComponent, { className: "ActionsSummaryComponent", filePath: "lib\\patterns\\actions-summary\\actions-summary.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy1zdW1tYXJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9wYXR0ZXJucy9hY3Rpb25zLXN1bW1hcnkvYWN0aW9ucy1zdW1tYXJ5LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9wYXR0ZXJucy9hY3Rpb25zLXN1bW1hcnkvYWN0aW9ucy1zdW1tYXJ5LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0lDT3RFLGtDQVFDLGdCQUFBO0lBQ21DLFlBQWdCO0lBQUEsaUJBQVM7SUFDekQsMEJBT0s7SUFDRCxZQUNKOztJQUFBLGlCQUFLLEVBQUE7OztJQWpCTCxnREFBc0I7SUFPVSxlQUFnQjtJQUFoQixxQ0FBZ0I7SUFDNUMsY0FNZTtJQU5mLDZMQU1lO0lBRWYsY0FDSjtJQURJLDZIQUNKOzs7QURsQlIsTUFBTSxPQUFPLHVCQUF1QjtJQVVsQztRQVJTLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFDckIsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFDcEIsb0JBQWUsR0FBWSxLQUFLLENBQUM7UUFDakMsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUN4Qix3QkFBbUIsR0FBYSxFQUFFLENBQUM7SUFFNUIsQ0FBQzt3RkFWTix1QkFBdUI7b0VBQXZCLHVCQUF1QjtZQ1JwQyxrQ0FNQztZQUNHLGlGQW9CVTtZQUNkLGlCQUFVOztZQTFCTixxRkFHRTtZQUdtQixjQUF3QjtZQUF4QixpREFBd0I7OztpRkRBcEMsdUJBQXVCO2NBTm5DLFNBQVM7MkJBQ0Usb0JBQW9CLG1CQUdiLHVCQUF1QixDQUFDLE1BQU07b0JBSXRDLE9BQU87a0JBQWYsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLGVBQWU7a0JBQXZCLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxtQkFBbUI7a0JBQTNCLEtBQUs7O2tGQVJLLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FhLWFjdGlvbnMtc3VtbWFyeScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FjdGlvbnMtc3VtbWFyeS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYWN0aW9ucy1zdW1tYXJ5LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIEFjdGlvbnNTdW1tYXJ5Q29tcG9uZW50IHtcclxuXHJcbiAgQElucHV0KCkgaGVhZGluZzogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIHZhbHVlOiBudW1iZXIgPSAwO1xyXG4gIEBJbnB1dCgpIHN0YXR1czogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgdmVydGljYWxEaXNwbGF5OiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbm9XcmFwOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgYWN0aW9uc1N1bW1hcnlJdGVtczogQXJyYXk8YW55Pj1bXTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxufVxyXG4iLCI8YXJ0aWNsZSBcclxuICAgIGNsYXNzPVwiYWN0aW9ucy1zdW1tYXJ5IGZsZXgtZ3JvdXAgZmxleC1zdGFydFwiXHJcbiAgICBbbmdDbGFzc109XCJ7IFxyXG4gICAgICAgICdmbGV4LWNvbHVtbicgOiB2ZXJ0aWNhbERpc3BsYXksXHJcbiAgICAgICAgJ2ZsZXgtbm93cmFwJyA6IG5vV3JhcFxyXG4gICAgfVwiXHJcbj5cclxuICAgIDxzZWN0aW9uIFxyXG4gICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIGFjdGlvbnNTdW1tYXJ5SXRlbXM7IGxldCBpID0gaW5kZXhcIiBcclxuICAgICAgICB0aXRsZT1cInt7aXRlbS52YWx1ZX19XCJcclxuICAgICAgICBjbGFzcz1cIlxyXG4gICAgICAgICAgICBmbGV4LWNlbnRlciBcclxuICAgICAgICAgICAgZmxleC1ncm91cCBcclxuICAgICAgICAgICAgZmxleC1jb2x1bW5cclxuICAgICAgICBcIlxyXG4gICAgPlxyXG4gICAgICAgIDxzdHJvbmcgY2xhc3M9XCJub3dyYXAgbWFyZ2luLTBcIj57e2l0ZW0uaGVhZGluZ319PC9zdHJvbmc+XHJcbiAgICAgICAgPGg0IGNsYXNzPVwiXHJcbiAgICAgICAgICAgIHt7aXRlbS5zdGF0dXN9fSBcclxuICAgICAgICAgICAgZmxleC1jZW50ZXIgXHJcbiAgICAgICAgICAgIGJkLTIgXHJcbiAgICAgICAgICAgIGJkLXNvbGlkIFxyXG4gICAgICAgICAgICBtYXJnaW4tdG9wLTAtNzVcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0LTBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHt7KGl0ZW0udmFsdWUubGVuZ3RoPjcpPyAoaXRlbS52YWx1ZSB8IHNsaWNlOjA6NykrJy4uLic6KGl0ZW0udmFsdWUpfX1cclxuICAgICAgICA8L2g0PlxyXG4gICAgPC9zZWN0aW9uPlxyXG48L2FydGljbGU+Il19