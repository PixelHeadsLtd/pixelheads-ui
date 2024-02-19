import { Component, ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function DashboardFavouritesListComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 8);
    i0.ɵɵlistener("click", function DashboardFavouritesListComponent_button_2_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.onFavClick($event)); });
    i0.ɵɵtext(1, " star_outline ");
    i0.ɵɵelementEnd();
} }
function DashboardFavouritesListComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 8);
    i0.ɵɵlistener("click", function DashboardFavouritesListComponent_button_3_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r5.onFavClick($event)); });
    i0.ɵɵtext(1, " star ");
    i0.ɵɵelementEnd();
} }
function DashboardFavouritesListComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div", 9)(2, "div", 10)(3, "label");
    i0.ɵɵtext(4, "Tags");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 11)(8, "label");
    i0.ɵɵtext(9, "Last viewed");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "p");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div", 11)(13, "label");
    i0.ɵɵtext(14, "Title");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "p");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "div", 11)(18, "label");
    i0.ɵɵtext(19, "Description");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "p");
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r2.tagName);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r2.lastViewed);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r2.favouritesTitle);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r2.favDescription);
} }
export class DashboardFavouritesListComponent {
    onAnchorClick(e) {
        e.stopPropagation();
        this.anchorClick.emit(e);
    }
    onFavClick(e) {
        this.isFavourite = !this.isFavourite;
        e.stopPropagation();
        this.favClick.emit(this.isFavourite);
    }
    constructor() {
        this.isFavourite = false;
        this.showTags = false;
        this.itemAnchorTitle = '';
        this.itemAnchorURL = '';
        this.itemAnchor = '';
        this.itemTitle = '';
        this.itemDescription = '';
        this.showBody = false;
        this.favouriteId = '';
        this.iconName = '';
        this.tagName = '';
        this.lastViewed = '';
        this.favouritesTitle = '';
        this.favDescription = '';
        this.anchorClick = new EventEmitter();
        this.favClick = new EventEmitter();
        this.favClick.emit(this.isFavourite);
    }
    static { this.ɵfac = function DashboardFavouritesListComponent_Factory(t) { return new (t || DashboardFavouritesListComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DashboardFavouritesListComponent, selectors: [["aa-dashboard-favourites-list"]], inputs: { isFavourite: "isFavourite", showTags: "showTags", itemAnchorTitle: "itemAnchorTitle", itemAnchorURL: "itemAnchorURL", itemAnchor: "itemAnchor", itemTitle: "itemTitle", itemDescription: "itemDescription", showBody: "showBody", favouriteId: "favouriteId", iconName: "iconName", tagName: "tagName", lastViewed: "lastViewed", favouritesTitle: "favouritesTitle", favDescription: "favDescription" }, outputs: { anchorClick: "anchorClick", favClick: "favClick" }, decls: 12, vars: 7, consts: [[1, "accordion-favourites-list"], [1, "flex-group", "flex-start", "flex-align-center"], ["class", "btn-fav material-icons-outlined margin-left-0-75 margin-right-1-25", 3, "click", 4, "ngIf"], [1, "margin-top-1", "margin-bottom-0-75", "description"], ["type", "button", 1, "anchor-underline", 3, "title", "click"], [1, "margin-top-0-25"], [1, "icon-info", 3, "click"], [4, "ngIf"], [1, "btn-fav", "material-icons-outlined", "margin-left-0-75", "margin-right-1-25", 3, "click"], [1, "more-info"], [1, "field", "boxed"], [1, "field"]], template: function DashboardFavouritesListComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵtemplate(2, DashboardFavouritesListComponent_button_2_Template, 2, 0, "button", 2)(3, DashboardFavouritesListComponent_button_3_Template, 2, 0, "button", 2);
            i0.ɵɵelementStart(4, "div", 3)(5, "a", 4);
            i0.ɵɵlistener("click", function DashboardFavouritesListComponent_Template_a_click_5_listener($event) { return ctx.onAnchorClick($event); });
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(7, "br");
            i0.ɵɵelementStart(8, "div", 5);
            i0.ɵɵtext(9);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(10, "div", 6);
            i0.ɵɵlistener("click", function DashboardFavouritesListComponent_Template_div_click_10_listener() { return ctx.showTags = !ctx.showTags; });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(11, DashboardFavouritesListComponent_div_11_Template, 22, 4, "div", 7);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx.isFavourite);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.isFavourite);
            i0.ɵɵadvance(2);
            i0.ɵɵpropertyInterpolate("title", ctx.itemAnchorTitle);
            i0.ɵɵattribute("href", ctx.itemAnchorURL, i0.ɵɵsanitizeUrl);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.itemAnchor);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.itemDescription);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.showTags);
        } }, dependencies: [i1.NgIf], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DashboardFavouritesListComponent, [{
        type: Component,
        args: [{ selector: 'aa-dashboard-favourites-list', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"accordion-favourites-list\">\r\n  <div class=\"flex-group flex-start flex-align-center\">\r\n    <button \r\n      *ngIf=\"!isFavourite\" \r\n      (click)=\"onFavClick($event)\" \r\n      class=\"btn-fav material-icons-outlined margin-left-0-75 margin-right-1-25\"\r\n      >\r\n      star_outline\r\n    </button>\r\n    <button \r\n      *ngIf=\"isFavourite\" \r\n      (click)=\"onFavClick($event)\" \r\n      class=\"btn-fav material-icons-outlined margin-left-0-75 margin-right-1-25\"\r\n      >\r\n      star\r\n    </button>\r\n\r\n    <div class=\"margin-top-1 margin-bottom-0-75 description\">\r\n      <a (click)=\"onAnchorClick($event)\" class=\"anchor-underline\" title=\"{{itemAnchorTitle}}\"\r\n         type=\"button\" [attr.href]=\"itemAnchorURL\">{{itemAnchor}}</a><br/>\r\n      <div class=\"margin-top-0-25\">{{itemDescription}}</div>\r\n    </div>\r\n  </div>\r\n  <div (click)=\"showTags=!showTags\" class=\"icon-info\"></div>\r\n  <div *ngIf=\"showTags\">\r\n    <div class=\"more-info\">\r\n      <div class=\"field boxed\">\r\n        <label>Tags</label>\r\n        <p>{{tagName}}</p>\r\n      </div>\r\n      <div class=\"field\">\r\n        <label>Last viewed</label>\r\n        <p>{{lastViewed}}</p>\r\n      </div>\r\n      <div class=\"field\">\r\n        <label>Title</label>\r\n        <p>{{favouritesTitle}}</p>\r\n      </div>\r\n      <div class=\"field\">\r\n        <label>Description</label>\r\n        <p>{{favDescription}}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n" }]
    }], () => [], { isFavourite: [{
            type: Input
        }], showTags: [{
            type: Input
        }], itemAnchorTitle: [{
            type: Input
        }], itemAnchorURL: [{
            type: Input
        }], itemAnchor: [{
            type: Input
        }], itemTitle: [{
            type: Input
        }], itemDescription: [{
            type: Input
        }], showBody: [{
            type: Input
        }], favouriteId: [{
            type: Input
        }], iconName: [{
            type: Input
        }], tagName: [{
            type: Input
        }], lastViewed: [{
            type: Input
        }], favouritesTitle: [{
            type: Input
        }], favDescription: [{
            type: Input
        }], anchorClick: [{
            type: Output
        }], favClick: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DashboardFavouritesListComponent, { className: "DashboardFavouritesListComponent", filePath: "lib\\widgets\\dashboard-favourites-list\\dashboard-favourites-list.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLWZhdm91cml0ZXMtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvd2lkZ2V0cy9kYXNoYm9hcmQtZmF2b3VyaXRlcy1saXN0L2Rhc2hib2FyZC1mYXZvdXJpdGVzLWxpc3QuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL3dpZGdldHMvZGFzaGJvYXJkLWZhdm91cml0ZXMtbGlzdC9kYXNoYm9hcmQtZmF2b3VyaXRlcy1saXN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0lDRTVGLGlDQUlHO0lBRkQsc0xBQVMsZUFBQSx5QkFBa0IsQ0FBQSxJQUFDO0lBRzVCLDhCQUNGO0lBQUEsaUJBQVM7Ozs7SUFDVCxpQ0FJRztJQUZELHNMQUFTLGVBQUEseUJBQWtCLENBQUEsSUFBQztJQUc1QixzQkFDRjtJQUFBLGlCQUFTOzs7SUFTWCwyQkFBc0IsYUFBQSxjQUFBLFlBQUE7SUFHVCxvQkFBSTtJQUFBLGlCQUFRO0lBQ25CLHlCQUFHO0lBQUEsWUFBVztJQUFBLGlCQUFJLEVBQUE7SUFFcEIsK0JBQW1CLFlBQUE7SUFDViwyQkFBVztJQUFBLGlCQUFRO0lBQzFCLDBCQUFHO0lBQUEsYUFBYztJQUFBLGlCQUFJLEVBQUE7SUFFdkIsZ0NBQW1CLGFBQUE7SUFDVixzQkFBSztJQUFBLGlCQUFRO0lBQ3BCLDBCQUFHO0lBQUEsYUFBbUI7SUFBQSxpQkFBSSxFQUFBO0lBRTVCLGdDQUFtQixhQUFBO0lBQ1YsNEJBQVc7SUFBQSxpQkFBUTtJQUMxQiwwQkFBRztJQUFBLGFBQWtCO0lBQUEsaUJBQUks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b3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FhLWRhc2hib2FyZC1mYXZvdXJpdGVzLWxpc3QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXNoYm9hcmQtZmF2b3VyaXRlcy1saXN0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9kYXNoYm9hcmQtZmF2b3VyaXRlcy1saXN0LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIERhc2hib2FyZEZhdm91cml0ZXNMaXN0Q29tcG9uZW50IHtcclxuXHJcbiAgQElucHV0KCkgaXNGYXZvdXJpdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBzaG93VGFnczogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGl0ZW1BbmNob3JUaXRsZTogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgaXRlbUFuY2hvclVSTDogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgaXRlbUFuY2hvcjogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgaXRlbVRpdGxlOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBpdGVtRGVzY3JpcHRpb246IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIHNob3dCb2R5OiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZmF2b3VyaXRlSWQ6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGljb25OYW1lOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSB0YWdOYW1lOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBsYXN0Vmlld2VkOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBmYXZvdXJpdGVzVGl0bGU6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGZhdkRlc2NyaXB0aW9uOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgQE91dHB1dCgpIGFuY2hvckNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcclxuICBAT3V0cHV0KCkgZmF2Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIHB1YmxpYyBvbkFuY2hvckNsaWNrKGU6IEV2ZW50KSB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5hbmNob3JDbGljay5lbWl0KGUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uRmF2Q2xpY2soZTogYW55KSB7XHJcbiAgICB0aGlzLmlzRmF2b3VyaXRlID0gIXRoaXMuaXNGYXZvdXJpdGU7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5mYXZDbGljay5lbWl0KHRoaXMuaXNGYXZvdXJpdGUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmZhdkNsaWNrLmVtaXQodGhpcy5pc0Zhdm91cml0ZSk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJhY2NvcmRpb24tZmF2b3VyaXRlcy1saXN0XCI+XHJcbiAgPGRpdiBjbGFzcz1cImZsZXgtZ3JvdXAgZmxleC1zdGFydCBmbGV4LWFsaWduLWNlbnRlclwiPlxyXG4gICAgPGJ1dHRvbiBcclxuICAgICAgKm5nSWY9XCIhaXNGYXZvdXJpdGVcIiBcclxuICAgICAgKGNsaWNrKT1cIm9uRmF2Q2xpY2soJGV2ZW50KVwiIFxyXG4gICAgICBjbGFzcz1cImJ0bi1mYXYgbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWFyZ2luLWxlZnQtMC03NSBtYXJnaW4tcmlnaHQtMS0yNVwiXHJcbiAgICAgID5cclxuICAgICAgc3Rhcl9vdXRsaW5lXHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxidXR0b24gXHJcbiAgICAgICpuZ0lmPVwiaXNGYXZvdXJpdGVcIiBcclxuICAgICAgKGNsaWNrKT1cIm9uRmF2Q2xpY2soJGV2ZW50KVwiIFxyXG4gICAgICBjbGFzcz1cImJ0bi1mYXYgbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWFyZ2luLWxlZnQtMC03NSBtYXJnaW4tcmlnaHQtMS0yNVwiXHJcbiAgICAgID5cclxuICAgICAgc3RhclxyXG4gICAgPC9idXR0b24+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cIm1hcmdpbi10b3AtMSBtYXJnaW4tYm90dG9tLTAtNzUgZGVzY3JpcHRpb25cIj5cclxuICAgICAgPGEgKGNsaWNrKT1cIm9uQW5jaG9yQ2xpY2soJGV2ZW50KVwiIGNsYXNzPVwiYW5jaG9yLXVuZGVybGluZVwiIHRpdGxlPVwie3tpdGVtQW5jaG9yVGl0bGV9fVwiXHJcbiAgICAgICAgIHR5cGU9XCJidXR0b25cIiBbYXR0ci5ocmVmXT1cIml0ZW1BbmNob3JVUkxcIj57e2l0ZW1BbmNob3J9fTwvYT48YnIvPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibWFyZ2luLXRvcC0wLTI1XCI+e3tpdGVtRGVzY3JpcHRpb259fTwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiAoY2xpY2spPVwic2hvd1RhZ3M9IXNob3dUYWdzXCIgY2xhc3M9XCJpY29uLWluZm9cIj48L2Rpdj5cclxuICA8ZGl2ICpuZ0lmPVwic2hvd1RhZ3NcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJtb3JlLWluZm9cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZpZWxkIGJveGVkXCI+XHJcbiAgICAgICAgPGxhYmVsPlRhZ3M8L2xhYmVsPlxyXG4gICAgICAgIDxwPnt7dGFnTmFtZX19PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XHJcbiAgICAgICAgPGxhYmVsPkxhc3Qgdmlld2VkPC9sYWJlbD5cclxuICAgICAgICA8cD57e2xhc3RWaWV3ZWR9fTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxyXG4gICAgICAgIDxsYWJlbD5UaXRsZTwvbGFiZWw+XHJcbiAgICAgICAgPHA+e3tmYXZvdXJpdGVzVGl0bGV9fTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxyXG4gICAgICAgIDxsYWJlbD5EZXNjcmlwdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgPHA+e3tmYXZEZXNjcmlwdGlvbn19PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19