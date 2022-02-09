import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'aa-progress-circle',
  templateUrl: './progress-circle.component.html',
  styleUrls: ['./progress-circle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressCircleComponent implements OnInit {

  @Input() name: string;
  @Input() percent: string;
  @Input() value: string;
  @Input() colour: string;
  @Input() isSmall: boolean;
  @Input() panelView: boolean;
  @Input() enableTooltip: boolean;
  @Input() tooltipTitle: string;
  @Input() tooltipBody: string;
  @Input() xpos: string;
  @Input() ypos: string;
  @Input() tooltipMinWidth: number;

  constructor() { }


  ngOnInit() {
  }

}
