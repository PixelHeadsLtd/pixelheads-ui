import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'aa-blade-bottom',
  templateUrl: './blade-bottom.component.html',
  styleUrls: ['./blade-bottom.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class BladeBottomComponent implements OnInit {

  @Input() fullScreenPos: any;
  @Input() isOpen: boolean = false;
  @Input() isPinned: boolean = false;
  @Input() isFullScreen: boolean = false;
  @Input() toggleBlade: boolean = false;
  @Input() unpinnedOffset: any;
  @Input() zIndex: number = 0;
  @Output() bladePinned = new EventEmitter<boolean>();
  @Output() bladeOpen = new EventEmitter<boolean>();
  @Output() bladeFullScreen = new EventEmitter<boolean>();
  @Output() isOpenChange = new EventEmitter<boolean>();

  constructor() { }

  close() {
    this.isOpen = false;
    this.toggleBlade = false;
    this.isPinned = true;
    this.isOpenChange.emit(this.isOpen);
  }

  toggleThePin(event: Event) {
    this.isPinned = !this.isPinned;
    if (!this.isPinned && this.isOpen) {
      this.toggleBlade = false;
    } else {
      this.toggleBlade = true;
    }
    this.bladePinned.emit(this.isPinned);
    event.stopPropagation();
  }

  toggleFullScreen(event: Event) {
    this.isFullScreen = !this.isFullScreen;
    this.bladeFullScreen.emit(this.isFullScreen);
    event.stopPropagation();
}

  expandedPosition(): string | null {
    return this.isOpen && this.isFullScreen ? this.fullScreenPos : null;
  }

  ngOnInit() {
    this.isPinned = true; // must be pinned by default
    this.isOpen = false;
    this.isFullScreen = false;
    this.bladePinned.emit(this.isPinned);
    this.bladeOpen.emit(this.isOpen);
    this.bladeFullScreen.emit(this.isFullScreen);
    this.isOpenChange.emit(this.isOpen);
  }
}
