import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'aa-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderComponent implements OnInit {

  @Input() fieldClass: string;
  @Input() labelText: any;
  @Input() sliderInline: boolean;
  @Input() sliderId: any;
  @Input() sliderName: any;
  @Input() disabled: any;
  @Input() labelMinWidth: any;
  sliderCheckedValue: any;
  @Input() set sliderChecked(value: any) {
    this.sliderCheckedValue = value;
    if (value) {
      this.sliderCheckedChanged.emit(true);
    } else {
      this.sliderCheckedChanged.emit(false);
    }
  }
  @Output() sliderCheckedChanged = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

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
