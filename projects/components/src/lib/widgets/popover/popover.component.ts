import { ChangeDetectionStrategy, Component, Input, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'aa-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush - not needed, showpover is not input anymore
  // so should not be used
})
export class PopoverComponent implements OnInit {

  showPopover: boolean; // now exposed as api and not property - more flexible
  setIndex: number;
  @Input() buttonClass: string;
  @Input() leftPos: number;
  @Input() topPos: any;
  @Input() bottomPos: any;
  @Input() width: number;
  @Input() hideLabel: boolean;
  @Input() btnSmall: boolean;
  @Input() popoverTop: boolean;
  @Input() arrowPos: number;

  constructor(private elementRef: ElementRef) { }

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement) {
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
        this.showPopover = false;
    }
  }

  public open() {
    this.showPopover = true;
    this.setIndex = 200;
  }

  public close() {
    this.showPopover = false;
  }


  ngOnInit() {}
}

