import { AfterViewInit, QueryList } from '@angular/core';
import { CarouselItemDirective } from '../../directives/carousel/carousel-item.directive';
import { AnimationBuilder } from '@angular/animations';
import * as ɵngcc0 from '@angular/core';
export declare class CarouselItemElementDirective {
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<CarouselItemElementDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<CarouselItemElementDirective, "[aaCarouselSlide]", never, {}, {}, never>;
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
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<CarouselComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<CarouselComponent, "aa-carousel", never, { "timing": "timing"; "showControls": "showControls"; "carouselOuterWidth": "carouselOuterWidth"; "carouselOuterHeight": "carouselOuterHeight"; "carouselInnerWidth": "carouselInnerWidth"; "carouselInnerHeight": "carouselInnerHeight"; "carouselItemWidth": "carouselItemWidth"; "customClass": "customClass"; "carouselItemBgColour": "carouselItemBgColour"; "carouselItemPadding": "carouselItemPadding"; "nextBtnColour": "nextBtnColour"; "nextBtnIcon": "nextBtnIcon"; "prevBtnColour": "prevBtnColour"; "prevBtnIcon": "prevBtnIcon"; }, {}, ["items"], never>;
}

//# sourceMappingURL=carousel.component.d.ts.map