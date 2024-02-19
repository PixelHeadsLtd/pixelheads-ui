import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/common";
const _c0 = () => ["active"];
const _c1 = () => ({ exact: true });
const _c2 = a0 => ({ "nowrap": a0 });
export class ContextMenuItemComponent {
    constructor(router) {
        this.router = router;
        this.menuItemText = '';
        this.routerLink = '';
        this.routerLinkActive = false;
        this.minWidth = 0;
        this.noWrap = false;
    }
    onClick() {
        this.router.navigate([this.routerLink, 500]);
    }
    static { this.ɵfac = function ContextMenuItemComponent_Factory(t) { return new (t || ContextMenuItemComponent)(i0.ɵɵdirectiveInject(i1.Router)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ContextMenuItemComponent, selectors: [["aa-context-menu-item"]], inputs: { menuItemText: "menuItemText", routerLink: "routerLink", routerLinkActive: "routerLinkActive", minWidth: "minWidth", noWrap: "noWrap" }, decls: 3, vars: 9, consts: [[3, "routerLink", "routerLinkActive", "routerLinkActiveOptions", "ngClass"]], template: function ContextMenuItemComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "li")(1, "a", 0);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("routerLink", ctx.routerLink)("routerLinkActive", i0.ɵɵpureFunction0(5, _c0))("routerLinkActiveOptions", i0.ɵɵpureFunction0(6, _c1))("ngClass", i0.ɵɵpureFunction1(7, _c2, ctx.noWrap));
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.menuItemText, " ");
        } }, dependencies: [i2.NgClass, i1.RouterLink, i1.RouterLinkActive], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContextMenuItemComponent, [{
        type: Component,
        args: [{ selector: 'aa-context-menu-item', changeDetection: ChangeDetectionStrategy.OnPush, template: "<li>\r\n    <a \r\n        [routerLink]=\"routerLink\" \r\n        [routerLinkActive]=\"['active']\" \r\n        [routerLinkActiveOptions]=\"{exact: true}\"\r\n        [ngClass]=\"{'nowrap' : noWrap}\"\r\n        >\r\n        {{menuItemText}}\r\n    </a>\r\n</li>" }]
    }], () => [{ type: i1.Router }], { menuItemText: [{
            type: Input
        }], routerLink: [{
            type: Input
        }], routerLinkActive: [{
            type: Input
        }], minWidth: [{
            type: Input
        }], noWrap: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ContextMenuItemComponent, { className: "ContextMenuItemComponent", filePath: "lib\\navigation\\context-menu-item\\context-menu-item.component.ts", lineNumber: 10 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC1tZW51LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL25hdmlnYXRpb24vY29udGV4dC1tZW51LWl0ZW0vY29udGV4dC1tZW51LWl0ZW0uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL25hdmlnYXRpb24vY29udGV4dC1tZW51LWl0ZW0vY29udGV4dC1tZW51LWl0ZW0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7QUFTMUUsTUFBTSxPQUFPLHdCQUF3QjtJQVFuQyxZQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQU56QixpQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUMxQixlQUFVLEdBQW1CLEVBQUUsQ0FBQztRQUNoQyxxQkFBZ0IsR0FBYSxLQUFLLENBQUM7UUFDbkMsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixXQUFNLEdBQVksS0FBSyxDQUFDO0lBRUssQ0FBQztJQUV2QyxPQUFPO1FBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQzt5RkFaVSx3QkFBd0I7b0VBQXhCLHdCQUF3QjtZQ1RyQywwQkFBSSxXQUFBO1lBT0ksWUFDSjtZQUFBLGlCQUFJLEVBQUE7O1lBTkEsY0FBeUI7WUFBekIsMkNBQXlCLGdEQUFBLHVEQUFBLG1EQUFBO1lBS3pCLGNBQ0o7WUFESSxpREFDSjs7O2lGRENTLHdCQUF3QjtjQU5wQyxTQUFTOzJCQUNFLHNCQUFzQixtQkFHZix1QkFBdUIsQ0FBQyxNQUFNO3VDQUl0QyxZQUFZO2tCQUFwQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLGdCQUFnQjtrQkFBeEIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7O2tGQU5LLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FhLWNvbnRleHQtbWVudS1pdGVtJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY29udGV4dC1tZW51LWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NvbnRleHQtbWVudS1pdGVtLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbnRleHRNZW51SXRlbUNvbXBvbmVudCB7XHJcblxyXG4gIEBJbnB1dCgpIG1lbnVJdGVtVGV4dDogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgcm91dGVyTGluazogc3RyaW5nIHwgYW55W10gPSAnJztcclxuICBASW5wdXQoKSByb3V0ZXJMaW5rQWN0aXZlOiBib29sZWFuICA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG1pbldpZHRoOiBudW1iZXIgPSAwO1xyXG4gIEBJbnB1dCgpIG5vV3JhcDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7IH1cclxuXHJcbiAgb25DbGljaygpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLnJvdXRlckxpbmssIDUwMF0pO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiPGxpPlxyXG4gICAgPGEgXHJcbiAgICAgICAgW3JvdXRlckxpbmtdPVwicm91dGVyTGlua1wiIFxyXG4gICAgICAgIFtyb3V0ZXJMaW5rQWN0aXZlXT1cIlsnYWN0aXZlJ11cIiBcclxuICAgICAgICBbcm91dGVyTGlua0FjdGl2ZU9wdGlvbnNdPVwie2V4YWN0OiB0cnVlfVwiXHJcbiAgICAgICAgW25nQ2xhc3NdPVwieydub3dyYXAnIDogbm9XcmFwfVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgIHt7bWVudUl0ZW1UZXh0fX1cclxuICAgIDwvYT5cclxuPC9saT4iXX0=