import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'aa-blade',
  templateUrl: './blade.component.html',
  styleUrls: ['./blade.component.scss']
})
export class BladeComponent implements OnInit {

  @Input() pinBlade: boolean;
  @Input() topPosition: number;
  @Input() zIndex: number;
  @Input() suppressAutoClose: boolean;
  @Input() customBlade: boolean;
  @Input() enableIcon: boolean;
  @Input() iconName: string;
  @Input() bladeTabs: boolean;
  @Input() customBladeTabs: boolean;

  @Input() showModal: boolean;
  @Input() oneColWidth: boolean;
  @Input() bladeSize: string;
  @Input() bladeHeading: string;
  @Input() enablePinning: boolean;
  @Input() toggleBlade: boolean;
  @Input() isPinned: boolean;
  @Output() bladeOpen = new EventEmitter<boolean>();
  @Output() bladePinned = new EventEmitter<boolean>();

  onClose() {
    this.toggleBlade = false;
    if (!this.suppressAutoClose) {
      this.bladeOpen.emit(this.toggleBlade);
    }
  }

  toggleThePin(e) {
    this.isPinned = !this.isPinned;
    e.stopPropagation();
    this.bladePinned.emit(this.isPinned);
  }

  constructor() { }

  ngOnInit() {
    this.bladePinned.emit(this.isPinned); // isPinned callback
    this.bladeOpen.emit(this.toggleBlade); // isOpen callback
  }

}
