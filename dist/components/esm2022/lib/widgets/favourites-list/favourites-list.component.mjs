import { Component, ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
export class FavouritesListComponent {
    onFavClick(event) {
        this.favClick.emit(event);
    }
    onAnchorClick(event) {
        this.anchorClick.emit(event);
    }
    constructor() {
        this.isFavourite = false;
        this.itemAnchorTitle = '';
        this.itemAnchor = '';
        this.itemDescription = '';
        this.text = 'Click me';
        this.favClick = new EventEmitter();
        this.anchorClick = new EventEmitter();
    }
    static { this.ɵfac = function FavouritesListComponent_Factory(t) { return new (t || FavouritesListComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FavouritesListComponent, selectors: [["aa-favourites-list"]], inputs: { isFavourite: "isFavourite", itemAnchorTitle: "itemAnchorTitle", itemAnchor: "itemAnchor", itemDescription: "itemDescription", text: "text" }, outputs: { favClick: "favClick", anchorClick: "anchorClick" }, decls: 7, vars: 5, consts: [[1, "flex-group", "width-control", "repeatable"], [1, "button-star", "icon-orange", "one-rem", 3, "click"], ["type", "button", 3, "title", "click"]], template: function FavouritesListComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "button", 1);
            i0.ɵɵlistener("click", function FavouritesListComponent_Template_button_click_1_listener($event) { return ctx.onFavClick($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "div")(3, "a", 2);
            i0.ɵɵlistener("click", function FavouritesListComponent_Template_a_click_3_listener($event) { return ctx.onAnchorClick($event); });
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(5, "div");
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵclassProp("selected", ctx.isFavourite);
            i0.ɵɵadvance(2);
            i0.ɵɵpropertyInterpolate("title", ctx.itemAnchorTitle);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.itemAnchor);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.itemDescription);
        } }, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FavouritesListComponent, [{
        type: Component,
        args: [{ selector: 'aa-favourites-list', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"flex-group width-control repeatable\">\r\n  <button (click)=\"onFavClick($event)\" class=\"button-star icon-orange one-rem\" [class.selected]=\"isFavourite\"></button>\r\n  <div><a (click)=\"onAnchorClick($event)\" title=\"{{itemAnchorTitle}}\" type=\"button\">{{itemAnchor}}</a></div>\r\n  <div>{{itemDescription}}</div>\r\n</div>" }]
    }], () => [], { isFavourite: [{
            type: Input
        }], itemAnchorTitle: [{
            type: Input
        }], itemAnchor: [{
            type: Input
        }], itemDescription: [{
            type: Input
        }], text: [{
            type: Input
        }], favClick: [{
            type: Output
        }], anchorClick: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FavouritesListComponent, { className: "FavouritesListComponent", filePath: "lib\\widgets\\favourites-list\\favourites-list.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmF2b3VyaXRlcy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi93aWRnZXRzL2Zhdm91cml0ZXMtbGlzdC9mYXZvdXJpdGVzLWxpc3QuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL3dpZGdldHMvZmF2b3VyaXRlcy1saXN0L2Zhdm91cml0ZXMtbGlzdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVFoRyxNQUFNLE9BQU8sdUJBQXVCO0lBWTNCLFVBQVUsQ0FBQyxLQUFZO1FBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFTSxhQUFhLENBQUMsS0FBWTtRQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQ7UUFsQlMsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFDN0Isb0JBQWUsR0FBVyxFQUFFLENBQUM7UUFDN0IsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUN4QixvQkFBZSxHQUFXLEVBQUUsQ0FBQztRQUU3QixTQUFJLEdBQUcsVUFBVSxDQUFDO1FBRWpCLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzlCLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQVUzQixDQUFDO3dGQXBCTix1QkFBdUI7b0VBQXZCLHVCQUF1QjtZQ1JwQyw4QkFBaUQsZ0JBQUE7WUFDdkMsMEdBQVMsc0JBQWtCLElBQUM7WUFBd0UsaUJBQVM7WUFDckgsMkJBQUssV0FBQTtZQUFHLHFHQUFTLHlCQUFxQixJQUFDO1lBQTJDLFlBQWM7WUFBQSxpQkFBSSxFQUFBO1lBQ3BHLDJCQUFLO1lBQUEsWUFBbUI7WUFBQSxpQkFBTSxFQUFBOztZQUYrQyxjQUE4QjtZQUE5QiwyQ0FBOEI7WUFDbkUsZUFBMkI7WUFBM0Isc0RBQTJCO1lBQWUsY0FBYztZQUFkLG9DQUFjO1lBQzNGLGVBQW1CO1lBQW5CLHlDQUFtQjs7O2lGREtiLHVCQUF1QjtjQU5uQyxTQUFTOzJCQUNFLG9CQUFvQixtQkFHYix1QkFBdUIsQ0FBQyxNQUFNO29CQUl0QyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csZUFBZTtrQkFBdkIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxlQUFlO2tCQUF2QixLQUFLO1lBRUcsSUFBSTtrQkFBWixLQUFLO1lBRUksUUFBUTtrQkFBakIsTUFBTTtZQUNHLFdBQVc7a0JBQXBCLE1BQU07O2tGQVZJLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYS1mYXZvdXJpdGVzLWxpc3QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9mYXZvdXJpdGVzLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2Zhdm91cml0ZXMtbGlzdC5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGYXZvdXJpdGVzTGlzdENvbXBvbmVudCB7XHJcblxyXG4gIEBJbnB1dCgpIGlzRmF2b3VyaXRlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgaXRlbUFuY2hvclRpdGxlOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBpdGVtQW5jaG9yOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBpdGVtRGVzY3JpcHRpb246IHN0cmluZyA9ICcnO1xyXG5cclxuICBASW5wdXQoKSB0ZXh0ID0gJ0NsaWNrIG1lJztcclxuXHJcbiAgQE91dHB1dCgpIGZhdkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBhbmNob3JDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgcHVibGljIG9uRmF2Q2xpY2soZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICB0aGlzLmZhdkNsaWNrLmVtaXQoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uQW5jaG9yQ2xpY2soZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICB0aGlzLmFuY2hvckNsaWNrLmVtaXQoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcblxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJmbGV4LWdyb3VwIHdpZHRoLWNvbnRyb2wgcmVwZWF0YWJsZVwiPlxyXG4gIDxidXR0b24gKGNsaWNrKT1cIm9uRmF2Q2xpY2soJGV2ZW50KVwiIGNsYXNzPVwiYnV0dG9uLXN0YXIgaWNvbi1vcmFuZ2Ugb25lLXJlbVwiIFtjbGFzcy5zZWxlY3RlZF09XCJpc0Zhdm91cml0ZVwiPjwvYnV0dG9uPlxyXG4gIDxkaXY+PGEgKGNsaWNrKT1cIm9uQW5jaG9yQ2xpY2soJGV2ZW50KVwiIHRpdGxlPVwie3tpdGVtQW5jaG9yVGl0bGV9fVwiIHR5cGU9XCJidXR0b25cIj57e2l0ZW1BbmNob3J9fTwvYT48L2Rpdj5cclxuICA8ZGl2Pnt7aXRlbURlc2NyaXB0aW9ufX08L2Rpdj5cclxuPC9kaXY+Il19