import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'aa-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressBarComponent implements OnInit {

  @Input() titleBold: string;
  @Input() titleRegular: string;
  @Input() leftSideText: any;
  @Input() rightSideText: any;
  @Input() complete: number;
  @Input() maxWidth: number;

  constructor() { }

  ngOnInit(): void {
  }

}
