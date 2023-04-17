import { Component, ChangeDetectionStrategy, Input, Directive, ElementRef, QueryList, ContentChildren, ViewChild, ViewChildren } from '@angular/core';
import { CarouselItemDirective } from '../../directives/carousel/carousel-item.directive';
import { animate, AnimationBuilder, style } from '@angular/animations';
export class CarouselItemElementDirective {
}
CarouselItemElementDirective.decorators = [
    { type: Directive, args: [{
                selector: '[aaCarouselSlide]'
            },] }
];
export class CarouselComponent {
    constructor(builder) {
        this.builder = builder;
        this.timing = '250ms ease-in';
        this.showControls = true;
        this.currentSlide = 0;
    }
    next() {
        if (this.currentSlide + 1 === this.items.length) {
            return;
        }
        this.currentSlide = (this.currentSlide + 1) % this.items.length;
        const offset = this.currentSlide * this.itemWidth;
        const myAnimation = this.buildAnimation(offset);
        this.player = myAnimation.create(this.carousel.nativeElement);
        this.player.play();
    }
    buildAnimation(offset) {
        return this.builder.build([
            animate(this.timing, style({ transform: `translateX(-${offset}px)` }))
        ]);
    }
    prev() {
        if (this.currentSlide === 0) {
            return;
        }
        this.currentSlide = ((this.currentSlide - 1) + this.items.length) % this.items.length;
        const offset = this.currentSlide * this.itemWidth;
        const myAnimation = this.buildAnimation(offset);
        this.player = myAnimation.create(this.carousel.nativeElement);
        this.player.play();
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.itemWidth = this.itemsElements.first.nativeElement.getBoundingClientRect().width;
        });
    }
}
CarouselComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-carousel',
                template: "<section \r\n    class=\"flex-group flex-center {{customClass}}\"\r\n    [ngStyle]=\"{'width' : carouselOuterWidth}\"\r\n>\r\n    <div \r\n        class=\"aa-carousel\" \r\n        [ngStyle]=\"{\r\n            'width' : carouselInnerWidth,\r\n            'height' : carouselInnerHeight\r\n        }\"\r\n    >\r\n        <div class=\"aa-carousel-content flex-group flex-nowrap\" #carousel>\r\n            <div \r\n                aaCarouselSlide\r\n                *ngFor=\"let item of items;\" \r\n                class=\"carousel-item {{carouselItemBgColour}}\" \r\n                [ngStyle]=\"{\r\n                    'min-width' : carouselItemWidth,\r\n                    'padding' : carouselItemPadding\r\n                }\"\r\n            >\r\n                <ng-container [ngTemplateOutlet]=\"item.tpl\"></ng-container>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<footer class=\"aa-carousel-footer flex-group flex-center\">\r\n    <button \r\n        (click)=\"prev()\"\r\n        class=\"{{prevBtnColour}} material-icons\" \r\n        type=\"button\" \r\n        >\r\n        <span>{{prevBtnIcon}}</span>\r\n    </button>\r\n    <button \r\n        (click)=\"next()\"\r\n        class=\"{{nextBtnColour}} material-icons\" \r\n        type=\"button\" \r\n        >\r\n        <span>{{nextBtnIcon}}</span>\r\n    </button>\r\n</footer>\r\n\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
CarouselComponent.ctorParameters = () => [
    { type: AnimationBuilder }
];
CarouselComponent.propDecorators = {
    items: [{ type: ContentChildren, args: [CarouselItemDirective,] }],
    itemsElements: [{ type: ViewChildren, args: [CarouselItemElementDirective, { read: ElementRef },] }],
    carousel: [{ type: ViewChild, args: ['carousel',] }],
    timing: [{ type: Input }],
    showControls: [{ type: Input }],
    carouselOuterWidth: [{ type: Input }],
    carouselOuterHeight: [{ type: Input }],
    carouselInnerWidth: [{ type: Input }],
    carouselInnerHeight: [{ type: Input }],
    carouselItemWidth: [{ type: Input }],
    customClass: [{ type: Input }],
    carouselItemBgColour: [{ type: Input }],
    carouselItemPadding: [{ type: Input }],
    nextBtnColour: [{ type: Input }],
    nextBtnIcon: [{ type: Input }],
    prevBtnColour: [{ type: Input }],
    prevBtnIcon: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL3dpZGdldHMvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBaUIsVUFBVSxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNySyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUMxRixPQUFPLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFxQyxLQUFLLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQU0xRyxNQUFNLE9BQU8sNEJBQTRCOzs7WUFKeEMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7YUFDOUI7O0FBV0QsTUFBTSxPQUFPLGlCQUFpQjtJQW9ENUIsWUFBb0IsT0FBeUI7UUFBekIsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7UUFoRHBDLFdBQU0sR0FBRyxlQUFlLENBQUM7UUFDekIsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFlckIsaUJBQVksR0FBRyxDQUFDLENBQUM7SUFpQ3pCLENBQUM7SUEvQkQsSUFBSTtRQUNGLElBQUksSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDL0MsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDaEUsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2xELE1BQU0sV0FBVyxHQUFxQixJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVPLGNBQWMsQ0FBQyxNQUFNO1FBQzNCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDeEIsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLGVBQWUsTUFBTSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1NBQ3ZFLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxJQUFJO1FBQ0YsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLENBQUMsRUFBRTtZQUMzQixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDdEYsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBRWxELE1BQU0sV0FBVyxHQUFxQixJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUtELGVBQWU7UUFDYixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxLQUFLLENBQUM7UUFDeEYsQ0FBQyxDQUFDLENBQUM7SUFFTCxDQUFDOzs7WUFuRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixnM0NBQXdDO2dCQUV4QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7OztZQWJpQixnQkFBZ0I7OztvQkFnQi9CLGVBQWUsU0FBQyxxQkFBcUI7NEJBQ3JDLFlBQVksU0FBQyw0QkFBNEIsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7dUJBQy9ELFNBQVMsU0FBQyxVQUFVO3FCQUNwQixLQUFLOzJCQUNMLEtBQUs7aUNBQ0wsS0FBSztrQ0FDTCxLQUFLO2lDQUNMLEtBQUs7a0NBQ0wsS0FBSztnQ0FDTCxLQUFLOzBCQUNMLEtBQUs7bUNBQ0wsS0FBSztrQ0FDTCxLQUFLOzRCQUNMLEtBQUs7MEJBQ0wsS0FBSzs0QkFDTCxLQUFLOzBCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCwgRGlyZWN0aXZlLCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBRdWVyeUxpc3QsIENvbnRlbnRDaGlsZHJlbiwgVmlld0NoaWxkLCBWaWV3Q2hpbGRyZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2Fyb3VzZWxJdGVtRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9jYXJvdXNlbC9jYXJvdXNlbC1pdGVtLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IGFuaW1hdGUsIEFuaW1hdGlvbkJ1aWxkZXIsIEFuaW1hdGlvbkZhY3RvcnksIEFuaW1hdGlvblBsYXllciwgc3R5bGUgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2FhQ2Fyb3VzZWxTbGlkZV0nXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ2Fyb3VzZWxJdGVtRWxlbWVudERpcmVjdGl2ZSB7IH1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWEtY2Fyb3VzZWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJvdXNlbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENhcm91c2VsQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQENvbnRlbnRDaGlsZHJlbihDYXJvdXNlbEl0ZW1EaXJlY3RpdmUpIGl0ZW1zOiBRdWVyeUxpc3Q8Q2Fyb3VzZWxJdGVtRGlyZWN0aXZlPjtcclxuICBAVmlld0NoaWxkcmVuKENhcm91c2VsSXRlbUVsZW1lbnREaXJlY3RpdmUsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBwcml2YXRlIGl0ZW1zRWxlbWVudHM6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcclxuICBAVmlld0NoaWxkKCdjYXJvdXNlbCcpIHByaXZhdGUgY2Fyb3VzZWw6IEVsZW1lbnRSZWY7XHJcbiAgQElucHV0KCkgdGltaW5nID0gJzI1MG1zIGVhc2UtaW4nO1xyXG4gIEBJbnB1dCgpIHNob3dDb250cm9scyA9IHRydWU7XHJcbiAgQElucHV0KCkgY2Fyb3VzZWxPdXRlcldpZHRoOiBhbnk7XHJcbiAgQElucHV0KCkgY2Fyb3VzZWxPdXRlckhlaWdodDogYW55O1xyXG4gIEBJbnB1dCgpIGNhcm91c2VsSW5uZXJXaWR0aDogYW55O1xyXG4gIEBJbnB1dCgpIGNhcm91c2VsSW5uZXJIZWlnaHQ6IGFueTtcclxuICBASW5wdXQoKSBjYXJvdXNlbEl0ZW1XaWR0aDogYW55O1xyXG4gIEBJbnB1dCgpIGN1c3RvbUNsYXNzOiBhbnk7XHJcbiAgQElucHV0KCkgY2Fyb3VzZWxJdGVtQmdDb2xvdXI6IGFueTtcclxuICBASW5wdXQoKSBjYXJvdXNlbEl0ZW1QYWRkaW5nOiBhbnk7XHJcbiAgQElucHV0KCkgbmV4dEJ0bkNvbG91cjogYW55O1xyXG4gIEBJbnB1dCgpIG5leHRCdG5JY29uOiBhbnk7XHJcbiAgQElucHV0KCkgcHJldkJ0bkNvbG91cjogYW55O1xyXG4gIEBJbnB1dCgpIHByZXZCdG5JY29uOiBhbnk7XHJcbiAgcHJpdmF0ZSBwbGF5ZXI6IEFuaW1hdGlvblBsYXllcjtcclxuICBwcml2YXRlIGl0ZW1XaWR0aDogbnVtYmVyO1xyXG4gIHByaXZhdGUgY3VycmVudFNsaWRlID0gMDtcclxuXHJcbiAgbmV4dCgpIHtcclxuICAgIGlmICh0aGlzLmN1cnJlbnRTbGlkZSArIDEgPT09IHRoaXMuaXRlbXMubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuY3VycmVudFNsaWRlID0gKHRoaXMuY3VycmVudFNsaWRlICsgMSkgJSB0aGlzLml0ZW1zLmxlbmd0aDtcclxuICAgIGNvbnN0IG9mZnNldCA9IHRoaXMuY3VycmVudFNsaWRlICogdGhpcy5pdGVtV2lkdGg7XHJcbiAgICBjb25zdCBteUFuaW1hdGlvbjogQW5pbWF0aW9uRmFjdG9yeSA9IHRoaXMuYnVpbGRBbmltYXRpb24ob2Zmc2V0KTtcclxuICAgIHRoaXMucGxheWVyID0gbXlBbmltYXRpb24uY3JlYXRlKHRoaXMuY2Fyb3VzZWwubmF0aXZlRWxlbWVudCk7XHJcbiAgICB0aGlzLnBsYXllci5wbGF5KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGJ1aWxkQW5pbWF0aW9uKG9mZnNldCkge1xyXG4gICAgcmV0dXJuIHRoaXMuYnVpbGRlci5idWlsZChbXHJcbiAgICAgIGFuaW1hdGUodGhpcy50aW1pbmcsIHN0eWxlKHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgtJHtvZmZzZXR9cHgpYCB9KSlcclxuICAgIF0pO1xyXG4gIH1cclxuXHJcbiAgcHJldigpIHtcclxuICAgIGlmICh0aGlzLmN1cnJlbnRTbGlkZSA9PT0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jdXJyZW50U2xpZGUgPSAoKHRoaXMuY3VycmVudFNsaWRlIC0gMSkgKyB0aGlzLml0ZW1zLmxlbmd0aCkgJSB0aGlzLml0ZW1zLmxlbmd0aDtcclxuICAgIGNvbnN0IG9mZnNldCA9IHRoaXMuY3VycmVudFNsaWRlICogdGhpcy5pdGVtV2lkdGg7XHJcblxyXG4gICAgY29uc3QgbXlBbmltYXRpb246IEFuaW1hdGlvbkZhY3RvcnkgPSB0aGlzLmJ1aWxkQW5pbWF0aW9uKG9mZnNldCk7XHJcbiAgICB0aGlzLnBsYXllciA9IG15QW5pbWF0aW9uLmNyZWF0ZSh0aGlzLmNhcm91c2VsLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgdGhpcy5wbGF5ZXIucGxheSgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBidWlsZGVyOiBBbmltYXRpb25CdWlsZGVyKSB7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5pdGVtV2lkdGggPSB0aGlzLml0ZW1zRWxlbWVudHMuZmlyc3QubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG59XHJcbiJdfQ==