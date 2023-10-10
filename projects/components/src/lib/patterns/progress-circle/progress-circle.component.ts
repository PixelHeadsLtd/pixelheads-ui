import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'aa-progress-circle',
  templateUrl: './progress-circle.component.html',
  styleUrls: ['./progress-circle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressCircleComponent implements OnInit {

  @Input() name: any;
  @Input() percent: any;
  @Input() value: any;
  @Input() colour: any;
  @Input() isSmall: boolean;
  @Input() panelView: boolean;
  @Input() enableTooltip: boolean;
  @Input() tooltipTitle: any;
  @Input() tooltipBody: any;
  @Input() xpos: string;
  @Input() ypos: string;
  @Input() tooltipMinWidth: any;
  @Input() hideChevron: boolean;
  @Input() headerColor: any;
  @Input() isError: boolean;
  @Input() isWarning: boolean;
  @Input() isInfo: boolean;
  @Input() enableAlertShield: boolean;
  @Input() enableAlertShieldTooltip: boolean;
  @Input() alertShieldStatus: string;
  @Input() alertShieldSmall: boolean;
  @Input() tooltipTopLeft: boolean;
  @Input() tooltipTopRight: boolean;
  @Input() tooltipBottomLeft: boolean;
  @Input() tooltipBottomRight: boolean;
  @Input() showTooltipHeading: boolean;
  @Input() tooltipHeading: string;
  @Input() alertShieldText: string;
  @Input() customClass: string;
  @Input() customProgressCircle: boolean;
  @Input() customHeaderClass: string;
  @Input() customFooterClass: string;
  @Input() panelHeight: any;

  constructor() { }


  ngOnInit() {
  }

}
