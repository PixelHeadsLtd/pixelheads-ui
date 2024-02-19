import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'aa-blade',
  templateUrl: './blade.component.html',
  styleUrls: ['./blade.component.scss']
})
export class BladeComponent implements OnInit {

  @Input() pinBlade: boolean = false;
  @Input() topPosition: any;
  @Input() zIndex: number = 0;
  @Input() suppressAutoClose: boolean = false;
  @Input() customBlade: boolean = false;
  @Input() enableIcon: boolean = false;
  @Input() iconName: string = '';
  @Input() bladeTabs: boolean = false;
  @Input() customBladeTabs: boolean = false;
  @Input() headingMaxWidth: any;

  @Input() blockPageUI: boolean = false;
  @Input() showBladeModal: boolean = false;
  @Input() bladeSize: string = '';
  @Input() bladeHeading: string = '';
  @Input() enablePinning: boolean = false;
  @Input() toggleBlade: boolean = false;
  @Input() isPinned: boolean = false;
  @Output() bladeOpen = new EventEmitter<boolean>();
  @Output() bladePinned = new EventEmitter<boolean>();

  onClose() {
    this.bladeOpen.emit(this.toggleBlade = false);
    if (!this.suppressAutoClose) {
      this.bladeOpen.emit(this.toggleBlade);
    }
  }

  toggleThePin(e:any) {
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
