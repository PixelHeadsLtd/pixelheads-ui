import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'aa-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent implements OnInit {

  @Input() count: number;
  @Input() countError: boolean;
  @Input() countWarning: boolean;
  @Input() countInfo: boolean;
  @Input() countSuccess: boolean;
  @Input() countErrorLight: boolean;
  @Input() countWarningLight: boolean;
  @Input() countInfoLight: boolean;
  @Input() countSuccessLight: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
