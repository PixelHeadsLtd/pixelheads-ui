import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'aa-blade-top',
  templateUrl: './blade-top.component.html',
  styleUrls: ['./blade-top.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BladeTopComponent implements OnInit {

  @Input() rightPos: number;
  @Input() leftPos: number;
  @Input() topPos: number;
  @Input() zIndex: number;
  @Input() maxHeight: number;
  @Input() countryFlag: string;
  @Input() paddingTop: boolean;
  @Input() paddingRight: boolean;
  @Input() paddingBottom: boolean;
  @Input() paddingLeft: boolean;
  @Input() userProfile: boolean;
  @Input() borderColour: string;
  @Input() profileSize: number;
  @Input() borderThickness: string;
  @Input() isOpen: boolean;
  @Input() isPinned: boolean;
  @Output() bladeOpen = new EventEmitter<boolean>();
  @Output() bladePinned = new EventEmitter<boolean>();

  onClose() {
    this.isOpen = false;
    this.bladeOpen.emit(this.isOpen);
  }

  toggleThePin(e) {
    this.isPinned = !this.isPinned;
    e.stopPropagation();
    this.bladePinned.emit(this.isPinned);
  }

  constructor() { }

  ngOnInit() {
    this.bladePinned.emit(this.isPinned); // isPinned callback
    this.bladeOpen.emit(this.isOpen); // isOpen callback
  }

}
