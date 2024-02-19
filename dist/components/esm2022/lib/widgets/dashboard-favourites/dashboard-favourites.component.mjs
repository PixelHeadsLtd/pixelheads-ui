import { ChangeDetectionStrategy, EventEmitter, Component, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function DashboardFavouritesComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div");
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("font-awesome ", ctx_r0.favIconClass, "");
} }
function DashboardFavouritesComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("material-icons ", ctx_r1.iconColour, "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.favIconClass);
} }
function DashboardFavouritesComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 8);
    i0.ɵɵlistener("click", function DashboardFavouritesComponent_button_7_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.onFavClick($event)); });
    i0.ɵɵtext(1, " star_outline ");
    i0.ɵɵelementEnd();
} }
function DashboardFavouritesComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 8);
    i0.ɵɵlistener("click", function DashboardFavouritesComponent_button_8_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.onFavClick($event)); });
    i0.ɵɵtext(1, " star ");
    i0.ɵɵelementEnd();
} }
export class DashboardFavouritesComponent {
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
        this.favouritesTitle = '';
        this.favouritesText = '';
        this.favouritesURL = '';
        this.favIconClass = '';
        this.iconColour = '';
        this.materialIcons = false;
        this.tagName = '';
        this.favDescription = '';
        this.lastViewed = '';
        this.anchorClick = new EventEmitter();
        this.favClick = new EventEmitter();
        this.favClick.emit(this.isFavourite);
    }
    static { this.ɵfac = function DashboardFavouritesComponent_Factory(t) { return new (t || DashboardFavouritesComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DashboardFavouritesComponent, selectors: [["aa-dashboard-favourites"]], inputs: { isFavourite: "isFavourite", favouritesTitle: "favouritesTitle", favouritesText: "favouritesText", favouritesURL: "favouritesURL", favIconClass: "favIconClass", iconColour: "iconColour", materialIcons: "materialIcons", tagName: "tagName", favDescription: "favDescription", lastViewed: "lastViewed" }, outputs: { anchorClick: "anchorClick", favClick: "favClick" }, decls: 30, vars: 14, consts: [[1, "dashboard-favourite", "flex-group", "flex-align-center"], [3, "class", 4, "ngIf"], [3, "click"], [1, "flex-group", "flex-align-center", "position-absolute", "top-0-5", "right-0-5", "margin-right-0"], ["class", "btn-fav material-icons-outlined margin-0 margin-left-0-25", 3, "click", 4, "ngIf"], [1, "hover-card", "animate-all"], [1, "field", "boxed"], [1, "field"], [1, "btn-fav", "material-icons-outlined", "margin-0", "margin-left-0-25", 3, "click"]], template: function DashboardFavouritesComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "article", 0);
            i0.ɵɵtemplate(1, DashboardFavouritesComponent_div_1_Template, 1, 3, "div", 1)(2, DashboardFavouritesComponent_div_2_Template, 2, 4, "div", 1);
            i0.ɵɵelementStart(3, "a", 2);
            i0.ɵɵlistener("click", function DashboardFavouritesComponent_Template_a_click_3_listener($event) { return ctx.onAnchorClick($event); });
            i0.ɵɵtext(4);
            i0.ɵɵpipe(5, "slice");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 3);
            i0.ɵɵtemplate(7, DashboardFavouritesComponent_button_7_Template, 2, 0, "button", 4)(8, DashboardFavouritesComponent_button_8_Template, 2, 0, "button", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "div", 5)(10, "div", 6)(11, "label");
            i0.ɵɵtext(12, "Tags");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "p");
            i0.ɵɵtext(14);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(15, "div", 7)(16, "label");
            i0.ɵɵtext(17, "Last viewed");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "p");
            i0.ɵɵtext(19);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(20, "div", 7)(21, "label");
            i0.ɵɵtext(22, "Title");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "p");
            i0.ɵɵtext(24);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(25, "div", 7)(26, "label");
            i0.ɵɵtext(27, "Description");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "p");
            i0.ɵɵtext(29);
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.materialIcons);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.materialIcons);
            i0.ɵɵadvance();
            i0.ɵɵattribute("href", ctx.favouritesURL, i0.ɵɵsanitizeUrl);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.favouritesTitle.length > 35 ? i0.ɵɵpipeBind3(5, 10, ctx.favouritesTitle, 0, 35) + "..." : ctx.favouritesTitle);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", !ctx.isFavourite);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.isFavourite);
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.tagName);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.lastViewed);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.favouritesTitle);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.favDescription);
        } }, dependencies: [i1.NgIf, i1.SlicePipe], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DashboardFavouritesComponent, [{
        type: Component,
        args: [{ selector: 'aa-dashboard-favourites', changeDetection: ChangeDetectionStrategy.OnPush, template: "<article class=\"dashboard-favourite flex-group flex-align-center\">\r\n  <div *ngIf=\"!materialIcons\" class=\"font-awesome {{favIconClass}}\"></div>\r\n  <div *ngIf=\"materialIcons\" class=\"material-icons {{iconColour}}\">{{favIconClass}}</div>\r\n  <a (click)=\"onAnchorClick($event)\" [attr.href]=\"favouritesURL\">{{(favouritesTitle.length>35)? (favouritesTitle | slice:0:35)+'...':(favouritesTitle)}}</a>\r\n  <div class=\"flex-group flex-align-center position-absolute top-0-5 right-0-5 margin-right-0\">\r\n    <button \r\n      *ngIf=\"!isFavourite\" \r\n      (click)=\"onFavClick($event)\" \r\n      class=\"btn-fav material-icons-outlined margin-0 margin-left-0-25\"\r\n      >\r\n      star_outline\r\n    </button>\r\n    <button \r\n      *ngIf=\"isFavourite\" \r\n      (click)=\"onFavClick($event)\" \r\n      class=\"btn-fav material-icons-outlined margin-0 margin-left-0-25\"\r\n      >\r\n      star\r\n    </button>\r\n  </div>\r\n  <div class=\"hover-card animate-all\">\r\n    <div class=\"field boxed\">\r\n      <label>Tags</label>\r\n      <p>{{tagName}}</p>\r\n    </div>\r\n    <div class=\"field\">\r\n      <label>Last viewed</label>\r\n      <p>{{lastViewed}}</p>\r\n    </div>\r\n    <div class=\"field\">\r\n      <label>Title</label>\r\n      <p>{{favouritesTitle}}</p>\r\n    </div>\r\n    <div class=\"field\">\r\n      <label>Description</label>\r\n      <p>{{favDescription}}</p>\r\n    </div>\r\n  </div>\r\n</article>\r\n" }]
    }], () => [], { isFavourite: [{
            type: Input
        }], favouritesTitle: [{
            type: Input
        }], favouritesText: [{
            type: Input
        }], favouritesURL: [{
            type: Input
        }], favIconClass: [{
            type: Input
        }], iconColour: [{
            type: Input
        }], materialIcons: [{
            type: Input
        }], tagName: [{
            type: Input
        }], favDescription: [{
            type: Input
        }], lastViewed: [{
            type: Input
        }], anchorClick: [{
            type: Output
        }], favClick: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DashboardFavouritesComponent, { className: "DashboardFavouritesComponent", filePath: "lib\\widgets\\dashboard-favourites\\dashboard-favourites.component.ts", lineNumber: 8 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLWZhdm91cml0ZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL3dpZGdldHMvZGFzaGJvYXJkLWZhdm91cml0ZXMvZGFzaGJvYXJkLWZhdm91cml0ZXMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL3dpZGdldHMvZGFzaGJvYXJkLWZhdm91cml0ZXMvZGFzaGJvYXJkLWZhdm91cml0ZXMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztJQ0M5RixzQkFBd0U7OztJQUE1QyxtRUFBcUM7OztJQUNqRSwyQkFBaUU7SUFBQSxZQUFnQjtJQUFBLGlCQUFNOzs7SUFBNUQsbUVBQXFDO0lBQUMsY0FBZ0I7SUFBaEIseUNBQWdCOzs7O0lBRy9FLGlDQUlHO0lBRkQsa0xBQVMsZUFBQSx5QkFBa0IsQ0FBQSxJQUFDO0lBRzVCLDhCQUNGO0lBQUEsaUJBQVM7Ozs7SUFDVCxpQ0FJRztJQUZELGtMQUFTLGVBQUEseUJBQWtCLENBQUEsSUFBQztJQUc1QixzQkFDRjtJQUFBLGlCQUFTOztBRFhiLE1BQU0sT0FBTyw0QkFBNEI7SUFnQmhDLGFBQWEsQ0FBQyxDQUFRO1FBQzNCLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRU0sVUFBVSxDQUFDLENBQU07UUFDdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDckMsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQ7UUF6QlMsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFDN0Isb0JBQWUsR0FBVyxFQUFFLENBQUM7UUFDN0IsbUJBQWMsR0FBVyxFQUFFLENBQUM7UUFDNUIsa0JBQWEsR0FBVyxFQUFFLENBQUM7UUFDM0IsaUJBQVksR0FBVyxFQUFFLENBQUM7UUFDMUIsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUN4QixrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUMvQixZQUFPLEdBQVcsRUFBRSxDQUFDO1FBQ3JCLG1CQUFjLEdBQVcsRUFBRSxDQUFDO1FBQzVCLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFFdkIsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBUyxDQUFDO1FBQ3hDLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBYy9DLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2QyxDQUFDOzZGQTdCVSw0QkFBNEI7b0VBQTVCLDRCQUE0QjtZQ1B6QyxrQ0FBa0U7WUFDaEUsNkVBQXdFLGdFQUFBO1lBRXhFLDRCQUErRDtZQUE1RCwwR0FBUyx5QkFBcUIsSUFBQztZQUE2QixZQUF1Rjs7WUFBQSxpQkFBSTtZQUMxSiw4QkFBNkY7WUFDM0YsbUZBTVMsc0VBQUE7WUFRWCxpQkFBTTtZQUNOLDhCQUFvQyxjQUFBLGFBQUE7WUFFekIscUJBQUk7WUFBQSxpQkFBUTtZQUNuQiwwQkFBRztZQUFBLGFBQVc7WUFBQSxpQkFBSSxFQUFBO1lBRXBCLCtCQUFtQixhQUFBO1lBQ1YsNEJBQVc7WUFBQSxpQkFBUTtZQUMxQiwwQkFBRztZQUFBLGFBQWM7WUFBQSxpQkFBSSxFQUFBO1lBRXZCLCtCQUFtQixhQUFBO1lBQ1Ysc0JBQUs7WUFBQSxpQkFBUTtZQUNwQiwwQkFBRztZQUFBLGFBQW1CO1lBQUEsaUJBQUksRUFBQTtZQUU1QiwrQkFBbUIsYUFBQTtZQUNWLDRCQUFXO1lBQUEsaUJBQVE7WUFDMUIsMEJBQUc7WUFBQSxhQUFrQjtZQUFBLGlCQUFJLEVBQUEsRUFBQSxFQUFBOztZQWxDdkIsY0FBb0I7WUFBcEIseUNBQW9CO1lBQ3BCLGNBQW1CO1lBQW5CLHdDQUFtQjtZQUNVLGNBQTJCO1lBQTNCLDJEQUEyQjtZQUFDLGNBQXVGO1lBQXZGLHVJQUF1RjtZQUdqSixlQUFrQjtZQUFsQix1Q0FBa0I7WUFPbEIsY0FBaUI7WUFBakIsc0NBQWlCO1lBVWYsZUFBVztZQUFYLGlDQUFXO1lBSVgsZUFBYztZQUFkLG9DQUFjO1lBSWQsZUFBbUI7WUFBbkIseUNBQW1CO1lBSW5CLGVBQWtCO1lBQWxCLHdDQUFrQjs7O2lGRDVCZCw0QkFBNEI7Y0FOeEMsU0FBUzsyQkFDRSx5QkFBeUIsbUJBR2xCLHVCQUF1QixDQUFDLE1BQU07b0JBSXRDLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxlQUFlO2tCQUF2QixLQUFLO1lBQ0csY0FBYztrQkFBdEIsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDRyxjQUFjO2tCQUF0QixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUVJLFdBQVc7a0JBQXBCLE1BQU07WUFDRyxRQUFRO2tCQUFqQixNQUFNOztrRkFkSSw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgRXZlbnRFbWl0dGVyLCBDb21wb25lbnQsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYS1kYXNoYm9hcmQtZmF2b3VyaXRlcycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Rhc2hib2FyZC1mYXZvdXJpdGVzLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9kYXNoYm9hcmQtZmF2b3VyaXRlcy5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRGYXZvdXJpdGVzQ29tcG9uZW50IHtcclxuXHJcbiAgQElucHV0KCkgaXNGYXZvdXJpdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBmYXZvdXJpdGVzVGl0bGU6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGZhdm91cml0ZXNUZXh0OiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBmYXZvdXJpdGVzVVJMOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBmYXZJY29uQ2xhc3M6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGljb25Db2xvdXI6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIG1hdGVyaWFsSWNvbnM6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSB0YWdOYW1lOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBmYXZEZXNjcmlwdGlvbjogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgbGFzdFZpZXdlZDogc3RyaW5nID0gJyc7XHJcblxyXG4gIEBPdXRwdXQoKSBhbmNob3JDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIGZhdkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBwdWJsaWMgb25BbmNob3JDbGljayhlOiBFdmVudCkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMuYW5jaG9yQ2xpY2suZW1pdChlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbkZhdkNsaWNrKGU6IGFueSkge1xyXG4gICAgdGhpcy5pc0Zhdm91cml0ZSA9ICF0aGlzLmlzRmF2b3VyaXRlO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMuZmF2Q2xpY2suZW1pdCh0aGlzLmlzRmF2b3VyaXRlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5mYXZDbGljay5lbWl0KHRoaXMuaXNGYXZvdXJpdGUpO1xyXG4gIH1cclxufVxyXG4iLCI8YXJ0aWNsZSBjbGFzcz1cImRhc2hib2FyZC1mYXZvdXJpdGUgZmxleC1ncm91cCBmbGV4LWFsaWduLWNlbnRlclwiPlxyXG4gIDxkaXYgKm5nSWY9XCIhbWF0ZXJpYWxJY29uc1wiIGNsYXNzPVwiZm9udC1hd2Vzb21lIHt7ZmF2SWNvbkNsYXNzfX1cIj48L2Rpdj5cclxuICA8ZGl2ICpuZ0lmPVwibWF0ZXJpYWxJY29uc1wiIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMge3tpY29uQ29sb3VyfX1cIj57e2Zhdkljb25DbGFzc319PC9kaXY+XHJcbiAgPGEgKGNsaWNrKT1cIm9uQW5jaG9yQ2xpY2soJGV2ZW50KVwiIFthdHRyLmhyZWZdPVwiZmF2b3VyaXRlc1VSTFwiPnt7KGZhdm91cml0ZXNUaXRsZS5sZW5ndGg+MzUpPyAoZmF2b3VyaXRlc1RpdGxlIHwgc2xpY2U6MDozNSkrJy4uLic6KGZhdm91cml0ZXNUaXRsZSl9fTwvYT5cclxuICA8ZGl2IGNsYXNzPVwiZmxleC1ncm91cCBmbGV4LWFsaWduLWNlbnRlciBwb3NpdGlvbi1hYnNvbHV0ZSB0b3AtMC01IHJpZ2h0LTAtNSBtYXJnaW4tcmlnaHQtMFwiPlxyXG4gICAgPGJ1dHRvbiBcclxuICAgICAgKm5nSWY9XCIhaXNGYXZvdXJpdGVcIiBcclxuICAgICAgKGNsaWNrKT1cIm9uRmF2Q2xpY2soJGV2ZW50KVwiIFxyXG4gICAgICBjbGFzcz1cImJ0bi1mYXYgbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWFyZ2luLTAgbWFyZ2luLWxlZnQtMC0yNVwiXHJcbiAgICAgID5cclxuICAgICAgc3Rhcl9vdXRsaW5lXHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxidXR0b24gXHJcbiAgICAgICpuZ0lmPVwiaXNGYXZvdXJpdGVcIiBcclxuICAgICAgKGNsaWNrKT1cIm9uRmF2Q2xpY2soJGV2ZW50KVwiIFxyXG4gICAgICBjbGFzcz1cImJ0bi1mYXYgbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQgbWFyZ2luLTAgbWFyZ2luLWxlZnQtMC0yNVwiXHJcbiAgICAgID5cclxuICAgICAgc3RhclxyXG4gICAgPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImhvdmVyLWNhcmQgYW5pbWF0ZS1hbGxcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJmaWVsZCBib3hlZFwiPlxyXG4gICAgICA8bGFiZWw+VGFnczwvbGFiZWw+XHJcbiAgICAgIDxwPnt7dGFnTmFtZX19PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cclxuICAgICAgPGxhYmVsPkxhc3Qgdmlld2VkPC9sYWJlbD5cclxuICAgICAgPHA+e3tsYXN0Vmlld2VkfX08L3A+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxyXG4gICAgICA8bGFiZWw+VGl0bGU8L2xhYmVsPlxyXG4gICAgICA8cD57e2Zhdm91cml0ZXNUaXRsZX19PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cclxuICAgICAgPGxhYmVsPkRlc2NyaXB0aW9uPC9sYWJlbD5cclxuICAgICAgPHA+e3tmYXZEZXNjcmlwdGlvbn19PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvYXJ0aWNsZT5cclxuIl19