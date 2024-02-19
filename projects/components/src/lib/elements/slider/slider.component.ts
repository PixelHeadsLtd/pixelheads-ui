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
  sliderCheckedValue: any;
  @Input() set sliderChecked(value: any) {
    this.sliderCheckedValue = value;
  }
  @Output() sliderCheckedChanged = new EventEmitter<boolean>();

  constructor() { }

  onChange(event: any) {
    if (event.target.checked) {
      this.sliderCheckedChanged.emit(true);
      this.sliderCheckedValue = true;
    } else {
      this.sliderCheckedChanged.emit(false);
      this.sliderCheckedValue = false;
    }
  }
}
