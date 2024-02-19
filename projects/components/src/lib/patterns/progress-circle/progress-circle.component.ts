import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'aa-progress-circle',
  templateUrl: './progress-circle.component.html',
  styleUrls: ['./progress-circle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressCircleComponent {

  @Input() name: string = '';
  @Input() percent: string = '';
  @Input() value: string = '';
  @Input() colour: string = '';
  @Input() isSmall: boolean = false;
  @Input() panelView: boolean = false;
  @Input() enableTooltip: boolean = false;
  @Input() tooltipTitle: any;
  @Input() tooltipBody: any;
  @Input() xpos: string = '';
  @Input() ypos: string = '';
  @Input() tooltipMinWidth: any;
  @Input() hideChevron: boolean = false;
  @Input() headerColor: any;
  @Input() isError: boolean = false;
  @Input() isWarning: boolean = false;
  @Input() isInfo: boolean = false;
  @Input() enableAlertShield: boolean = false;
  @Input() enableAlertShieldTooltip: boolean = false;
  @Input() alertShieldStatus: string = '';
  @Input() alertShieldSmall: boolean = false;
  @Input() tooltipTopLeft: boolean = false;
  @Input() tooltipTopRight: boolean = false;
  @Input() tooltipBottomLeft: boolean = false;
  @Input() tooltipBottomRight: boolean = false;
  @Input() showTooltipHeading: boolean = false;
  @Input() tooltipHeading: string = '';
  @Input() alertShieldText: string = '';
  @Input() customClass: string = '';
  @Input() customProgressCircle: boolean = false;
  @Input() customHeaderClass: string = '';
  @Input() customFooterClass: string = '';
  @Input() panelHeight: any;

  constructor() { }


}
