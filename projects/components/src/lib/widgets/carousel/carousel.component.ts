import { Component, ChangeDetectionStrategy, Input, Directive, AfterViewInit, ElementRef, QueryList, ContentChildren, ViewChild, ViewChildren } from '@angular/core';
import { CarouselItemDirective } from '../../directives/carousel/carousel-item.directive';
import { animate, AnimationBuilder, AnimationFactory, AnimationPlayer, style } from '@angular/animations';

@Directive({
  selector: '[aaCarouselSlide]'
})

export class CarouselItemElementDirective { }

@Component({
  selector: 'aa-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CarouselComponent implements AfterViewInit {
  @ContentChildren(CarouselItemDirective) items: QueryList<CarouselItemDirective>;
  @ViewChildren(CarouselItemElementDirective, { read: ElementRef }) private itemsElements: QueryList<ElementRef>;
  @ViewChild('carousel') private carousel: ElementRef;
  @Input() timing = '250ms ease-in';
  @Input() showControls = true;
  @Input() carouselOuterWidth: any;
  @Input() carouselOuterHeight: any;
  @Input() carouselInnerWidth: any;
  @Input() carouselInnerHeight: any;
  @Input() carouselItemWidth: any;
  @Input() customClass: any;
  @Input() carouselItemBgColour: any;
  @Input() carouselItemPadding: any;
  @Input() nextBtnColour: any;
  @Input() nextBtnIcon: any;
  @Input() prevBtnColour: any;
  @Input() prevBtnIcon: any;
  private player: AnimationPlayer;
  private itemWidth: number;
  private currentSlide = 0;

  next() {
    if (this.currentSlide + 1 === this.items.length) {
      return;
    }
    this.currentSlide = (this.currentSlide + 1) % this.items.length;
    const offset = this.currentSlide * this.itemWidth;
    const myAnimation: AnimationFactory = this.buildAnimation(offset);
    this.player = myAnimation.create(this.carousel.nativeElement);
    this.player.play();
  }

  private buildAnimation(offset) {
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

    const myAnimation: AnimationFactory = this.buildAnimation(offset);
    this.player = myAnimation.create(this.carousel.nativeElement);
    this.player.play();
  }

  constructor(private builder: AnimationBuilder) {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.itemWidth = this.itemsElements.first.nativeElement.getBoundingClientRect().width;
    });

  }

}
