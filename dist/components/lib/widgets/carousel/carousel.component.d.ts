import { AfterViewInit, QueryList } from '@angular/core';
import { CarouselItemDirective } from '../../directives/carousel/carousel-item.directive';
import { AnimationBuilder } from '@angular/animations';
export declare class CarouselItemElementDirective {
}
export declare class CarouselComponent implements AfterViewInit {
    private builder;
    items: QueryList<CarouselItemDirective>;
    private itemsElements;
    private carousel;
    timing: string;
    showControls: boolean;
    carouselOuterWidth: any;
    carouselOuterHeight: any;
    carouselInnerWidth: any;
    carouselInnerHeight: any;
    carouselItemWidth: any;
    customClass: any;
    carouselItemBgColour: any;
    carouselItemPadding: any;
    nextBtnColour: any;
    nextBtnIcon: any;
    prevBtnColour: any;
    prevBtnIcon: any;
    private player;
    private itemWidth;
    private currentSlide;
    next(): void;
    private buildAnimation;
    prev(): void;
    constructor(builder: AnimationBuilder);
    ngAfterViewInit(): void;
}
//# sourceMappingURL=carousel.component.d.ts.map