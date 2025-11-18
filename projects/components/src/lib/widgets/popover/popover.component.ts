import { Component, Input, OnInit, HostListener, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ph-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  showPopover: boolean = false; // now exposed as api and not property - more flexible
  @Input() buttonClass: string = '';
  @Input() leftPos: any;
  @Input() topPos: any;
  @Input() bottomPos: any;
  @Input() rightPos: any;
  @Input() width: any;
  @Input() hideLabel: boolean = false;
  @Input() btnSmall: boolean = false;
  @Input() popoverTop: boolean = false;
  @Input() arrowPos: any;
  @Input() zIndex: number = 0;

  @Output() popoverVisibilityChanged = new EventEmitter<boolean>();

  constructor(private elementRef: ElementRef) { }

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement: any) {
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.showPopover = false;
      this.popoverVisibilityChanged.emit(this.showPopover);
    }
  }

  public open() {
    this.showPopover = true;
    this.popoverVisibilityChanged.emit(this.showPopover);
  }

  public close() {
    this.showPopover = false;
    this.popoverVisibilityChanged.emit(this.showPopover);
  }

  public changeVisibility() {
    this.showPopover = !this.showPopover;
    this.popoverVisibilityChanged.emit(this.showPopover);
  }
  ngOnInit() {
    this.popoverVisibilityChanged.emit(this.showPopover);
  }
}

