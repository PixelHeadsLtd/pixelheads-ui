import { Component, ChangeDetectionStrategy, Input, OnInit, Directive, AfterViewInit, ElementRef, QueryList, ContentChildren, ViewChild, ViewChildren } from '@angular/core';
import { CarouselItemDirective } from '../../directives/carousel/carousel-item.directive';
import { animate, AnimationBuilder, AnimationFactory, AnimationPlayer, style } from '@angular/animations';

@Directive({
  selector: '[phCarouselSlide]'
})

export class CarouselItemElementDirective { }

@Component({
  selector: 'ph-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CarouselComponent implements AfterViewInit, OnInit {
  @ContentChildren(CarouselItemDirective) items?: QueryList<CarouselItemDirective>;
  @ViewChildren(CarouselItemElementDirective, { read: ElementRef }) private itemsElements?: QueryList<ElementRef>;
  @ViewChild('carousel') private carousel?: ElementRef;
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
  @Input() firstSlide: boolean = false;
  @Input() lastSlide: boolean = false;
  private player?: AnimationPlayer;
  private itemWidth: number = 0;
  currentSlide = 0;

  next() {
    if (this.currentSlide > - 1) {
      this.firstSlide = false;
    }
    if (this.items && this.currentSlide === this.items.length - 2) {
      this.lastSlide = true;
    }
    if (this.items && this.currentSlide + 1 === this.items.length) {
      return;
    }

    if (!this.items) { return; }

    this.currentSlide = (this.currentSlide + 1) % this.items.length;
    const offset = this.currentSlide * this.itemWidth;
    const myAnimation: AnimationFactory = this.buildAnimation(offset);
    this.player = myAnimation.create(this.carousel?.nativeElement);
    this.player.play();
  }

  private buildAnimation(offset: number) {
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
    if (!this.items) { return; }

    this.currentSlide = ((this.currentSlide - 1) + this.items.length) % this.items.length;
    const offset = this.currentSlide * this.itemWidth;
    const myAnimation: AnimationFactory = this.buildAnimation(offset);
    this.player = myAnimation.create(this.carousel?.nativeElement);
    this.player.play();
  }

  constructor(private builder: AnimationBuilder) { }

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
}
