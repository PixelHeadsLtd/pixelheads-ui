import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'aa-blade-top',
  templateUrl: './blade-top.component.html',
  styleUrls: ['./blade-top.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BladeTopComponent implements OnInit {

  @Input() rightPos: any;
  @Input() leftPos: any;
  @Input() topPos: any;
  @Input() zIndex: number = 0;
  @Input() maxHeight: any;
  @Input() countryFlag: string = '';
  @Input() paddingTop: boolean = false;
  @Input() paddingRight: boolean = false;
  @Input() paddingBottom: boolean = false;
  @Input() paddingLeft: boolean = false;
  @Input() userProfile: boolean = false;
  @Input() borderColour: string = '';
  @Input() profileSize: any;
  @Input() borderThickness: any;
  @Input() isOpen: boolean = false;
  @Input() isPinned: boolean = false;
  @Output() bladeOpen = new EventEmitter<boolean>();
  @Output() bladePinned = new EventEmitter<boolean>();

  onClose() {
    this.isOpen = false;
    this.bladeOpen.emit(this.isOpen);
  }

  toggleThePin(e:any) {
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
