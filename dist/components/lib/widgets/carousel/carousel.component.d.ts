import { OnInit, AfterViewInit, QueryList } from '@angular/core';
import { CarouselItemDirective } from '../../directives/carousel/carousel-item.directive';
import { AnimationBuilder } from '@angular/animations';
import * as i0 from "@angular/core";
export declare class CarouselItemElementDirective {
    static ɵfac: i0.ɵɵFactoryDeclaration<CarouselItemElementDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CarouselItemElementDirective, "[aaCarouselSlide]", never, {}, {}, never, never, false, never>;
}
export declare class CarouselComponent implements AfterViewInit, OnInit {
    private builder;
    items?: QueryList<CarouselItemDirective>;
    private itemsElements?;
    private carousel?;
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
    firstSlide: boolean;
    lastSlide: boolean;
    private player?;
    private itemWidth;
    currentSlide: number;
    next(): void;
    private buildAnimation;
    prev(): void;
    constructor(builder: AnimationBuilder);
    ngAfterViewInit(): void;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CarouselComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CarouselComponent, "aa-carousel", never, { "timing": { "alias": "timing"; "required": false; }; "showControls": { "alias": "showControls"; "required": false; }; "carouselOuterWidth": { "alias": "carouselOuterWidth"; "required": false; }; "carouselOuterHeight": { "alias": "carouselOuterHeight"; "required": false; }; "carouselInnerWidth": { "alias": "carouselInnerWidth"; "required": false; }; "carouselInnerHeight": { "alias": "carouselInnerHeight"; "required": false; }; "carouselItemWidth": { "alias": "carouselItemWidth"; "required": false; }; "customClass": { "alias": "customClass"; "required": false; }; "carouselItemBgColour": { "alias": "carouselItemBgColour"; "required": false; }; "carouselItemPadding": { "alias": "carouselItemPadding"; "required": false; }; "nextBtnColour": { "alias": "nextBtnColour"; "required": false; }; "nextBtnIcon": { "alias": "nextBtnIcon"; "required": false; }; "prevBtnColour": { "alias": "prevBtnColour"; "required": false; }; "prevBtnIcon": { "alias": "prevBtnIcon"; "required": false; }; "firstSlide": { "alias": "firstSlide"; "required": false; }; "lastSlide": { "alias": "lastSlide"; "required": false; }; }, {}, ["items"], never, false, never>;
}
