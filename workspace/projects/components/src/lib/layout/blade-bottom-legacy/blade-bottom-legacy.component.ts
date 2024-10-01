import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'aa-blade-bottom-legacy',
  templateUrl: './blade-bottom-legacy.component.html',
  styleUrls: ['./blade-bottom-legacy.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class BladeBottomLegacyComponent implements OnInit {

  @Input() fullScreenPos: any;
  @Input() splitScreenPos: any;
  @Input() closedPos: any;
  @Input() isOpen: boolean = false;
  @Input() isPinned: boolean = false;
  @Input() disablePinning: boolean = false;
  @Input() isFullScreen: boolean = false;
  @Input() innitiallyPinned: boolean = false;
  @Input() controlsColor: any;
  @Input() headerBgColor: any;
  @Input() zIndex: number = 0;
  @Output() bladePinned = new EventEmitter<boolean>();
  @Output() bladeOpen = new EventEmitter<boolean>();
  @Output() bladeFullScreen = new EventEmitter<boolean>();

  toggle() {
    this.isOpen = !this.isOpen;
    this.bladeOpen.emit(this.isOpen);
    if (this.isPinned && this.isOpen) {
      this.isPinned = true;
      this.bladePinned.emit(true);
    } else {
      this.bladePinned.emit(false);
    }
  }

  toggleThePin(event: Event) {
    this.isPinned = ! this.isPinned;
    event.stopPropagation();
    this.bladePinned.emit(this.isPinned);
  }

  toggleFullScreen(event: Event) {
    this.isFullScreen = ! this.isFullScreen;
    event.stopPropagation();
    this.bladeFullScreen.emit(this.isFullScreen);
  }

  expandedPosition() {
    if (!this.isOpen) {
      return this.closedPos;
    } else if (this.isFullScreen) {
      return this.fullScreenPos;
    } else if (this.isPinned || this.isOpen) {
      return this.splitScreenPos;
    }
  }

  constructor() { }
  ngOnInit() {
    if (this.innitiallyPinned) {
      this.isPinned = true;
      this.isOpen = true;
      this.isFullScreen = false;
    }
    this.bladePinned.emit(this.isPinned); // isPinned callback
    this.bladeOpen.emit(this.isOpen); // isOpen callback
    this.bladeFullScreen.emit(this.isFullScreen); // isFullScreen callback
  }
}
