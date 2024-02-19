import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'aa-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent {

  @Input() count: number = 0;
  @Input() countError: boolean = false;
  @Input() countWarning: boolean = false;
  @Input() countInfo: boolean = false;
  @Input() countSuccess: boolean = false;
  @Input() countErrorLight: boolean = false;
  @Input() countWarningLight: boolean = false;
  @Input() countInfoLight: boolean = false;
  @Input() countSuccessLight: boolean = false;

  constructor() { }
}
