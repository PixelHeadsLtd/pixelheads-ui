import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, Renderer2, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'ph-blade-top',
  templateUrl: './blade-top.component.html',
  styleUrls: ['./blade-top.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BladeTopComponent implements OnInit, AfterViewInit {

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
  @Input() hidePin: boolean = false;
  @Input() borderColour: string = '';
  @Input() profileSize: any;
  @Input() borderThickness: any;
  @Input() isOpen: boolean = false;
  @Input() isPinned: boolean = false;
  @Output() bladeOpen = new EventEmitter<boolean>();
  @Output() bladePinned = new EventEmitter<boolean>();

  @ViewChild('bladeTop') bladeTop!: ElementRef;

  bladeHeight: number = 0;

  constructor(private renderer: Renderer2) { }

  onClose() {
    this.isOpen = false;
    this.setBladeOffscreenPosition();
    this.bladeOpen.emit(this.isOpen);
  }

  toggleThePin(e: any) {
    this.isPinned = !this.isPinned;
    e.stopPropagation();
    this.bladePinned.emit(this.isPinned);
  }

  ngOnInit() {
    this.bladePinned.emit(this.isPinned); // isPinned callback
    this.bladeOpen.emit(this.isOpen); // isOpen callback
  }

  ngAfterViewInit() {
    this.calculateBladeHeight();
  }

  calculateBladeHeight() {
    if (this.bladeTop) {
      this.bladeHeight = this.bladeTop.nativeElement.offsetHeight;
      this.setBladeOffscreenPosition();
    }
  }

  setBladeOffscreenPosition() {
    const offscreenPosition = 0 - this.bladeHeight;
    this.renderer.setStyle(this.bladeTop.nativeElement, 'top', `${offscreenPosition}px`);
  }

  toggleBlade() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.renderer.setStyle(this.bladeTop.nativeElement, 'top', '0');
    } else {
      this.setBladeOffscreenPosition();
    }
    this.bladeOpen.emit(this.isOpen);
  }

}
