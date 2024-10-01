import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'aa-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderComponent {

  @Input() fieldClass: string = '';
  @Input() labelText: any;
  @Input() sliderInline: boolean = false;
  @Input() sliderId: any;
  @Input() sliderName: any;
  @Input() disabled: any;
  @Input() labelMinWidth: any;
  @Input() lockOnPosition: boolean = false;
  sliderCheckedValue: any;
  @Input() set sliderChecked(value: any) {
    this.sliderCheckedValue = value;
    if (this.lockOnPosition && !this.disabled) {
      this.sliderCheckedValue = true;
    }
  }
  @Output() sliderCheckedChanged = new EventEmitter<boolean>();

  constructor() { }

  onChange(event: any) {
    if (this.disabled) {
      return;
    }
    if (this.lockOnPosition) {
      this.sliderCheckedValue = true;
      event.target.checked = true;
    } else {
      this.sliderCheckedValue = event.target.checked;
      this.sliderCheckedChanged.emit(this.sliderCheckedValue);
    }
  }

}
