import { ChangeDetectionStrategy, Component, ViewChild, ElementRef, AfterViewInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'ph-range-slider',
  templateUrl: './range-slider.component.html',
  styleUrl: './range-slider.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RangeSliderComponent implements AfterViewInit {
  @ViewChild('rangeInput') rangeInput!: ElementRef<HTMLInputElement>;
  @Input() initialValue: number = 30; // Initial value received from parent component
  rangeValue: number = this.initialValue;
  @Input() customClass: any;
  
  constructor() { }

  ngAfterViewInit() {
    this.updateBackgroundColor();
    this.rangeInput.nativeElement.addEventListener('input', () => {
      this.updateBackgroundColor();
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('initialValue' in changes) {
      this.rangeValue = changes['initialValue'].currentValue;
    }
  }

  updateBackgroundColor() {
    const input = this.rangeInput.nativeElement;
    const value = (parseFloat(input.value) - parseFloat(input.min)) / (parseFloat(input.max) - parseFloat(input.min)) * 100;
    input.style.background = `linear-gradient(to right, #0075b0 0%, #0075b0 ${value}%, transparent ${value}%, transparent 100%)`;
  }

  updateRangeValue(event: Event) {
    const input = event.target as HTMLInputElement;
    this.rangeValue = parseFloat(input.value);
    this.updateBackgroundColor();
  }
}