import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

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
  @Input() sliderValue: any;
  @Input() sliderChecked: any;
  @Input() disabled: any;

  constructor() { }

  ngOnInit(): void {
  }

}
