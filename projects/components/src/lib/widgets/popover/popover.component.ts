import { ChangeDetectionStrategy, Component, Input, OnInit, HostListener, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'aa-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush - not needed, showpover is not input anymore
  // so should not be used
})
export class PopoverComponent implements OnInit {

  showPopover: boolean; // now exposed as api and not property - more flexible
  @Input() buttonClass: string;
  @Input() leftPos: number;
  @Input() topPos: any;
  @Input() bottomPos: any;
  @Input() rightPos: any;
  @Input() width: number;
  @Input() hideLabel: boolean;
  @Input() btnSmall: boolean;
  @Input() popoverTop: boolean;
  @Input() arrowPos: number;
  @Input() zIndex: number;

  @Output() popoverVisibilityChanged = new EventEmitter<boolean>();

  constructor(private elementRef: ElementRef) { }

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement) {
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

