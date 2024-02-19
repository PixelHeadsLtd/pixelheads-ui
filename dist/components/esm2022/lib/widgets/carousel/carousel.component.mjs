import { Component, ChangeDetectionStrategy, Input, Directive, ElementRef, ContentChildren, ViewChild, ViewChildren } from '@angular/core';
import { CarouselItemDirective } from '../../directives/carousel/carousel-item.directive';
import { animate, style } from '@angular/animations';
import * as i0 from "@angular/core";
import * as i1 from "@angular/animations";
import * as i2 from "@angular/common";
const _c0 = ["carousel"];
const _c1 = (a0, a1) => ({ "min-width": a0, "padding": a1 });
function CarouselComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵelementContainer(1, 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("aa-carousel-item ", ctx_r1.carouselItemBgColour, "");
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(5, _c1, ctx_r1.carouselItemWidth, ctx_r1.carouselItemPadding));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", item_r2.tpl);
} }
const _c2 = a0 => ({ "width": a0 });
const _c3 = (a0, a1) => ({ "width": a0, "height": a1 });
const _c4 = a0 => ({ "disable-first": a0 });
const _c5 = a0 => ({ "disable-last": a0 });
export class CarouselItemElementDirective {
    static { this.ɵfac = function CarouselItemElementDirective_Factory(t) { return new (t || CarouselItemElementDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: CarouselItemElementDirective, selectors: [["", "aaCarouselSlide", ""]] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CarouselItemElementDirective, [{
        type: Directive,
        args: [{
                selector: '[aaCarouselSlide]'
            }]
    }], null, null); })();
export class CarouselComponent {
    next() {
        if (this.currentSlide > -1) {
            this.firstSlide = false;
        }
        if (this.items && this.currentSlide === this.items.length - 2) {
            this.lastSlide = true;
        }
        if (this.items && this.currentSlide + 1 === this.items.length) {
            return;
        }
        if (!this.items) {
            return;
        }
        this.currentSlide = (this.currentSlide + 1) % this.items.length;
        const offset = this.currentSlide * this.itemWidth;
        const myAnimation = this.buildAnimation(offset);
        this.player = myAnimation.create(this.carousel?.nativeElement);
        this.player.play();
    }
    buildAnimation(offset) {
        return this.builder.build([
            animate(this.timing, style({ transform: `translateX(-${offset}px)` }))
        ]);
    }
    prev() {
        if (this.items && this.currentSlide !== this.items.length - 2) {
            this.lastSlide = false;
        }
        if (this.currentSlide === 1) {
            this.firstSlide = true;
        }
        if (this.currentSlide === 0) {
            return;
        }
        if (!this.items) {
            return;
        }
        this.currentSlide = ((this.currentSlide - 1) + this.items.length) % this.items.length;
        const offset = this.currentSlide * this.itemWidth;
        const myAnimation = this.buildAnimation(offset);
        this.player = myAnimation.create(this.carousel?.nativeElement);
        this.player.play();
    }
    constructor(builder) {
        this.builder = builder;
        this.timing = '250ms ease-in';
        this.showControls = true;
        this.firstSlide = false;
        this.lastSlide = false;
        this.itemWidth = 0;
        this.currentSlide = 0;
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.itemWidth = this.itemsElements?.first.nativeElement.getBoundingClientRect().width;
        });
    }
    ngOnInit() {
        if (this.currentSlide === 0) {
            this.firstSlide = true;
        }
    }
    static { this.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(i0.ɵɵdirectiveInject(i1.AnimationBuilder)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CarouselComponent, selectors: [["aa-carousel"]], contentQueries: function CarouselComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, CarouselItemDirective, 4);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.items = _t);
        } }, viewQuery: function CarouselComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(CarouselItemElementDirective, 5, ElementRef);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.carousel = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.itemsElements = _t);
        } }, inputs: { timing: "timing", showControls: "showControls", carouselOuterWidth: "carouselOuterWidth", carouselOuterHeight: "carouselOuterHeight", carouselInnerWidth: "carouselInnerWidth", carouselInnerHeight: "carouselInnerHeight", carouselItemWidth: "carouselItemWidth", customClass: "customClass", carouselItemBgColour: "carouselItemBgColour", carouselItemPadding: "carouselItemPadding", nextBtnColour: "nextBtnColour", nextBtnIcon: "nextBtnIcon", prevBtnColour: "prevBtnColour", prevBtnIcon: "prevBtnIcon", firstSlide: "firstSlide", lastSlide: "lastSlide" }, decls: 14, vars: 27, consts: [[3, "ngStyle"], [1, "carousel-count"], [1, "aa-carousel", 3, "ngStyle"], [1, "aa-carousel-content", "flex-group", "flex-nowrap"], ["carousel", ""], ["aaCarouselSlide", "", 3, "class", "ngStyle", 4, "ngFor", "ngForOf"], [1, "aa-carousel-footer", "flex-group", "flex-center"], ["type", "button", 3, "ngClass", "click"], ["aaCarouselSlide", "", 3, "ngStyle"], [3, "ngTemplateOutlet"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "span", 1);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 2)(4, "div", 3, 4);
            i0.ɵɵtemplate(6, CarouselComponent_div_6_Template, 2, 8, "div", 5);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(7, "footer", 6)(8, "button", 7);
            i0.ɵɵlistener("click", function CarouselComponent_Template_button_click_8_listener() { return ctx.prev(); });
            i0.ɵɵelementStart(9, "span");
            i0.ɵɵtext(10);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(11, "button", 7);
            i0.ɵɵlistener("click", function CarouselComponent_Template_button_click_11_listener() { return ctx.next(); });
            i0.ɵɵelementStart(12, "span");
            i0.ɵɵtext(13);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵclassMapInterpolate1("flex-group flex-center ", ctx.customClass, " position-relative");
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(18, _c2, ctx.carouselOuterWidth));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate2("", ctx.currentSlide + 1, " of ", ctx.items == null ? null : ctx.items.length, "");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(20, _c3, ctx.carouselInnerWidth, ctx.carouselInnerHeight));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.items);
            i0.ɵɵadvance(2);
            i0.ɵɵclassMapInterpolate1("", ctx.prevBtnColour, " material-icons");
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(23, _c4, ctx.firstSlide));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.prevBtnIcon);
            i0.ɵɵadvance();
            i0.ɵɵclassMapInterpolate1("", ctx.nextBtnColour, " material-icons");
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(25, _c5, ctx.lastSlide));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.nextBtnIcon);
        } }, dependencies: [i2.NgClass, i2.NgForOf, i2.NgTemplateOutlet, i2.NgStyle, CarouselItemElementDirective], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CarouselComponent, [{
        type: Component,
        args: [{ selector: 'aa-carousel', changeDetection: ChangeDetectionStrategy.OnPush, template: "<section\r\n    class=\"flex-group flex-center {{customClass}} position-relative\"\r\n    [ngStyle]=\"{'width' : carouselOuterWidth}\"\r\n>\r\n    <span class=\"carousel-count\">{{currentSlide + 1}} of {{items?.length}}</span>\r\n    <div\r\n        class=\"aa-carousel\"\r\n        [ngStyle]=\"{\r\n            'width' : carouselInnerWidth,\r\n            'height' : carouselInnerHeight\r\n        }\"\r\n    >\r\n        <div class=\"aa-carousel-content flex-group flex-nowrap\" #carousel>\r\n            <div\r\n                aaCarouselSlide\r\n                *ngFor=\"let item of items;\"\r\n                class=\"aa-carousel-item {{carouselItemBgColour}}\"\r\n                [ngStyle]=\"{\r\n                    'min-width' : carouselItemWidth,\r\n                    'padding' : carouselItemPadding\r\n                }\"\r\n            >\r\n                <ng-container [ngTemplateOutlet]=\"item.tpl\"></ng-container>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<footer class=\"aa-carousel-footer flex-group flex-center\">\r\n    <button\r\n        (click)=\"prev()\"\r\n        class=\"{{prevBtnColour}} material-icons\"\r\n        [ngClass]=\"{'disable-first' : firstSlide}\"\r\n        type=\"button\"\r\n        >\r\n        <span>{{prevBtnIcon}}</span>\r\n    </button>\r\n    <button\r\n        (click)=\"next()\"\r\n        class=\"{{nextBtnColour}} material-icons\"\r\n        [ngClass]=\"{'disable-last' : lastSlide}\"\r\n        type=\"button\"\r\n        >\r\n        <span>{{nextBtnIcon}}</span>\r\n    </button>\r\n</footer>\r\n\r\n" }]
    }], () => [{ type: i1.AnimationBuilder }], { items: [{
            type: ContentChildren,
            args: [CarouselItemDirective]
        }], itemsElements: [{
            type: ViewChildren,
            args: [CarouselItemElementDirective, { read: ElementRef }]
        }], carousel: [{
            type: ViewChild,
            args: ['carousel']
        }], timing: [{
            type: Input
        }], showControls: [{
            type: Input
        }], carouselOuterWidth: [{
            type: Input
        }], carouselOuterHeight: [{
            type: Input
        }], carouselInnerWidth: [{
            type: Input
        }], carouselInnerHeight: [{
            type: Input
        }], carouselItemWidth: [{
            type: Input
        }], customClass: [{
            type: Input
        }], carouselItemBgColour: [{
            type: Input
        }], carouselItemPadding: [{
            type: Input
        }], nextBtnColour: [{
            type: Input
        }], nextBtnIcon: [{
            type: Input
        }], prevBtnColour: [{
            type: Input
        }], prevBtnIcon: [{
            type: Input
        }], firstSlide: [{
            type: Input
        }], lastSlide: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CarouselComponent, { className: "CarouselComponent", filePath: "lib\\widgets\\carousel\\carousel.component.ts", lineNumber: 18 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL3dpZGdldHMvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL3dpZGdldHMvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQVUsU0FBUyxFQUFpQixVQUFVLEVBQWEsZUFBZSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0ssT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDMUYsT0FBTyxFQUFFLE9BQU8sRUFBdUQsS0FBSyxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7SUNXOUYsOEJBUUM7SUFDRywyQkFBMkQ7SUFDL0QsaUJBQU07Ozs7SUFQRiwrRUFBaUQ7SUFDakQsMEdBR0U7SUFFWSxjQUE2QjtJQUE3Qiw4Q0FBNkI7Ozs7OztBRGQzRCxNQUFNLE9BQU8sNEJBQTRCOzZGQUE1Qiw0QkFBNEI7b0VBQTVCLDRCQUE0Qjs7aUZBQTVCLDRCQUE0QjtjQUp4QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjthQUM5Qjs7QUFXRCxNQUFNLE9BQU8saUJBQWlCO0lBd0I1QixJQUFJO1FBQ0YsSUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUUsQ0FBQyxFQUFFO1lBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1NBQ3pCO1FBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxF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QUFwQixLQUFLO1lBQ0csa0JBQWtCO2tCQUExQixLQUFLO1lBQ0csbUJBQW1CO2tCQUEzQixLQUFLO1lBQ0csa0JBQWtCO2tCQUExQixLQUFLO1lBQ0csbUJBQW1CO2tCQUEzQixLQUFLO1lBQ0csaUJBQWlCO2tCQUF6QixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLG9CQUFvQjtrQkFBNUIsS0FBSztZQUNHLG1CQUFtQjtrQkFBM0IsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSzs7a0ZBbkJLLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0LCBPbkluaXQsIERpcmVjdGl2ZSwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgUXVlcnlMaXN0LCBDb250ZW50Q2hpbGRyZW4sIFZpZXdDaGlsZCwgVmlld0NoaWxkcmVuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENhcm91c2VsSXRlbURpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvY2Fyb3VzZWwvY2Fyb3VzZWwtaXRlbS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBhbmltYXRlLCBBbmltYXRpb25CdWlsZGVyLCBBbmltYXRpb25GYWN0b3J5LCBBbmltYXRpb25QbGF5ZXIsIHN0eWxlIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1thYUNhcm91c2VsU2xpZGVdJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENhcm91c2VsSXRlbUVsZW1lbnREaXJlY3RpdmUgeyB9XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FhLWNhcm91c2VsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY2Fyb3VzZWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2Nhcm91c2VsLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDYXJvdXNlbENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCB7XHJcbiAgQENvbnRlbnRDaGlsZHJlbihDYXJvdXNlbEl0ZW1EaXJlY3RpdmUpIGl0ZW1zPzogUXVlcnlMaXN0PENhcm91c2VsSXRlbURpcmVjdGl2ZT47XHJcbiAgQFZpZXdDaGlsZHJlbihDYXJvdXNlbEl0ZW1FbGVtZW50RGlyZWN0aXZlLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgcHJpdmF0ZSBpdGVtc0VsZW1lbnRzPzogUXVlcnlMaXN0PEVsZW1lbnRSZWY+O1xyXG4gIEBWaWV3Q2hpbGQoJ2Nhcm91c2VsJykgcHJpdmF0ZSBjYXJvdXNlbD86IEVsZW1lbnRSZWY7XHJcbiAgQElucHV0KCkgdGltaW5nID0gJzI1MG1zIGVhc2UtaW4nO1xyXG4gIEBJbnB1dCgpIHNob3dDb250cm9scyA9IHRydWU7XHJcbiAgQElucHV0KCkgY2Fyb3VzZWxPdXRlcldpZHRoOiBhbnk7XHJcbiAgQElucHV0KCkgY2Fyb3VzZWxPdXRlckhlaWdodDogYW55O1xyXG4gIEBJbnB1dCgpIGNhcm91c2VsSW5uZXJXaWR0aDogYW55O1xyXG4gIEBJbnB1dCgpIGNhcm91c2VsSW5uZXJIZWlnaHQ6IGFueTtcclxuICBASW5wdXQoKSBjYXJvdXNlbEl0ZW1XaWR0aDogYW55O1xyXG4gIEBJbnB1dCgpIGN1c3RvbUNsYXNzOiBhbnk7XHJcbiAgQElucHV0KCkgY2Fyb3VzZWxJdGVtQmdDb2xvdXI6IGFueTtcclxuICBASW5wdXQoKSBjYXJvdXNlbEl0ZW1QYWRkaW5nOiBhbnk7XHJcbiAgQElucHV0KCkgbmV4dEJ0bkNvbG91cjogYW55O1xyXG4gIEBJbnB1dCgpIG5leHRCdG5JY29uOiBhbnk7XHJcbiAgQElucHV0KCkgcHJldkJ0bkNvbG91cjogYW55O1xyXG4gIEBJbnB1dCgpIHByZXZCdG5JY29uOiBhbnk7XHJcbiAgQElucHV0KCkgZmlyc3RTbGlkZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGxhc3RTbGlkZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgcGxheWVyPzogQW5pbWF0aW9uUGxheWVyO1xyXG4gIHByaXZhdGUgaXRlbVdpZHRoOiBudW1iZXIgPSAwO1xyXG4gIGN1cnJlbnRTbGlkZSA9IDA7XHJcblxyXG4gIG5leHQoKSB7XHJcbiAgICBpZiAodGhpcy5jdXJyZW50U2xpZGUgPiAtIDEpIHtcclxuICAgICAgdGhpcy5maXJzdFNsaWRlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5pdGVtcyAmJiB0aGlzLmN1cnJlbnRTbGlkZSA9PT0gdGhpcy5pdGVtcy5sZW5ndGggLSAyKSB7XHJcbiAgICAgIHRoaXMubGFzdFNsaWRlID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLml0ZW1zICYmIHRoaXMuY3VycmVudFNsaWRlICsgMSA9PT0gdGhpcy5pdGVtcy5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5pdGVtcykgeyByZXR1cm47IH1cclxuXHJcbiAgICB0aGlzLmN1cnJlbnRTbGlkZSA9ICh0aGlzLmN1cnJlbnRTbGlkZSArIDEpICUgdGhpcy5pdGVtcy5sZW5ndGg7XHJcbiAgICBjb25zdCBvZmZzZXQgPSB0aGlzLmN1cnJlbnRTbGlkZSAqIHRoaXMuaXRlbVdpZHRoO1xyXG4gICAgY29uc3QgbXlBbmltYXRpb246IEFuaW1hdGlvbkZhY3RvcnkgPSB0aGlzLmJ1aWxkQW5pbWF0aW9uKG9mZnNldCk7XHJcbiAgICB0aGlzLnBsYXllciA9IG15QW5pbWF0aW9uLmNyZWF0ZSh0aGlzLmNhcm91c2VsPy5uYXRpdmVFbGVtZW50KTtcclxuICAgIHRoaXMucGxheWVyLnBsYXkoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYnVpbGRBbmltYXRpb24ob2Zmc2V0OiBudW1iZXIpIHtcclxuICAgIHJldHVybiB0aGlzLmJ1aWxkZXIuYnVpbGQoW1xyXG4gICAgICBhbmltYXRlKHRoaXMudGltaW5nLCBzdHlsZSh7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoLSR7b2Zmc2V0fXB4KWAgfSkpXHJcbiAgICBdKTtcclxuICB9XHJcblxyXG4gIHByZXYoKSB7XHJcbiAgICBpZiAodGhpcy5pdGVtcyAmJiB0aGlzLmN1cnJlbnRTbGlkZSAhPT0gdGhpcy5pdGVtcy5sZW5ndGggLSAyKSB7XHJcbiAgICAgIHRoaXMubGFzdFNsaWRlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jdXJyZW50U2xpZGUgPT09IDEpIHtcclxuICAgICAgdGhpcy5maXJzdFNsaWRlID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmN1cnJlbnRTbGlkZSA9PT0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoIXRoaXMuaXRlbXMpIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgdGhpcy5jdXJyZW50U2xpZGUgPSAoKHRoaXMuY3VycmVudFNsaWRlIC0gMSkgKyB0aGlzLml0ZW1zLmxlbmd0aCkgJSB0aGlzLml0ZW1zLmxlbmd0aDtcclxuICAgIGNvbnN0IG9mZnNldCA9IHRoaXMuY3VycmVudFNsaWRlICogdGhpcy5pdGVtV2lkdGg7XHJcbiAgICBjb25zdCBteUFuaW1hdGlvbjogQW5pbWF0aW9uRmFjdG9yeSA9IHRoaXMuYnVpbGRBbmltYXRpb24ob2Zmc2V0KTtcclxuICAgIHRoaXMucGxheWVyID0gbXlBbmltYXRpb24uY3JlYXRlKHRoaXMuY2Fyb3VzZWw/Lm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgdGhpcy5wbGF5ZXIucGxheSgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBidWlsZGVyOiBBbmltYXRpb25CdWlsZGVyKSB7IH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuaXRlbVdpZHRoID0gdGhpcy5pdGVtc0VsZW1lbnRzPy5maXJzdC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICh0aGlzLmN1cnJlbnRTbGlkZSA9PT0gMCkge1xyXG4gICAgICB0aGlzLmZpcnN0U2xpZGUgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8c2VjdGlvblxyXG4gICAgY2xhc3M9XCJmbGV4LWdyb3VwIGZsZXgtY2VudGVyIHt7Y3VzdG9tQ2xhc3N9fSBwb3NpdGlvbi1yZWxhdGl2ZVwiXHJcbiAgICBbbmdTdHlsZV09XCJ7J3dpZHRoJyA6IGNhcm91c2VsT3V0ZXJXaWR0aH1cIlxyXG4+XHJcbiAgICA8c3BhbiBjbGFzcz1cImNhcm91c2VsLWNvdW50XCI+e3tjdXJyZW50U2xpZGUgKyAxfX0gb2Yge3tpdGVtcz8ubGVuZ3RofX08L3NwYW4+XHJcbiAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3M9XCJhYS1jYXJvdXNlbFwiXHJcbiAgICAgICAgW25nU3R5bGVdPVwie1xyXG4gICAgICAgICAgICAnd2lkdGgnIDogY2Fyb3VzZWxJbm5lcldpZHRoLFxyXG4gICAgICAgICAgICAnaGVpZ2h0JyA6IGNhcm91c2VsSW5uZXJIZWlnaHRcclxuICAgICAgICB9XCJcclxuICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYWEtY2Fyb3VzZWwtY29udGVudCBmbGV4LWdyb3VwIGZsZXgtbm93cmFwXCIgI2Nhcm91c2VsPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBhYUNhcm91c2VsU2xpZGVcclxuICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zO1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImFhLWNhcm91c2VsLWl0ZW0ge3tjYXJvdXNlbEl0ZW1CZ0NvbG91cn19XCJcclxuICAgICAgICAgICAgICAgIFtuZ1N0eWxlXT1cIntcclxuICAgICAgICAgICAgICAgICAgICAnbWluLXdpZHRoJyA6IGNhcm91c2VsSXRlbVdpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgICdwYWRkaW5nJyA6IGNhcm91c2VsSXRlbVBhZGRpbmdcclxuICAgICAgICAgICAgICAgIH1cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIml0ZW0udHBsXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvc2VjdGlvbj5cclxuPGZvb3RlciBjbGFzcz1cImFhLWNhcm91c2VsLWZvb3RlciBmbGV4LWdyb3VwIGZsZXgtY2VudGVyXCI+XHJcbiAgICA8YnV0dG9uXHJcbiAgICAgICAgKGNsaWNrKT1cInByZXYoKVwiXHJcbiAgICAgICAgY2xhc3M9XCJ7e3ByZXZCdG5Db2xvdXJ9fSBtYXRlcmlhbC1pY29uc1wiXHJcbiAgICAgICAgW25nQ2xhc3NdPVwieydkaXNhYmxlLWZpcnN0JyA6IGZpcnN0U2xpZGV9XCJcclxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgPHNwYW4+e3twcmV2QnRuSWNvbn19PC9zcGFuPlxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8YnV0dG9uXHJcbiAgICAgICAgKGNsaWNrKT1cIm5leHQoKVwiXHJcbiAgICAgICAgY2xhc3M9XCJ7e25leHRCdG5Db2xvdXJ9fSBtYXRlcmlhbC1pY29uc1wiXHJcbiAgICAgICAgW25nQ2xhc3NdPVwieydkaXNhYmxlLWxhc3QnIDogbGFzdFNsaWRlfVwiXHJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgIDxzcGFuPnt7bmV4dEJ0bkljb259fTwvc3Bhbj5cclxuICAgIDwvYnV0dG9uPlxyXG48L2Zvb3Rlcj5cclxuXHJcbiJdfQ==