import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'aa-alert-shield',
  templateUrl: './alert-shield.component.html',
  styleUrls: ['./alert-shield.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertShieldComponent {

  @Input() alertShieldStatus: string = '';
  @Input() alertShieldText: string = '';
  @Input() showTooltip: boolean = false;
  @Input() showTooltipHeading: boolean = false;
  @Input() tooltipHeading: string = '';
  @Input() minWidth: any;
  @Input() alertShieldSmall: boolean = false;
  @Input() noWrap: boolean = false;
  @Input() hideLabel: boolean = false;
  @Input() tooltipTopLeft: boolean = false;
  @Input() tooltipTopRight: boolean = false;
  @Input() tooltipBottomLeft: boolean = false;
  @Input() tooltipBottomRight: boolean = false;

  @Input() customShield: boolean = false;
  @Input() iconName: string = '';
  @Input() iconOutlined: boolean = false;
  @Input() bgRedLight: boolean = false;
  @Input() bgRedDark: boolean = false;
  @Input() bgGreenLight: boolean = false;
  @Input() bgGreenDark: boolean = false;
  @Input() bgOrangeLight: boolean = false;
  @Input() bgOrangeDark: boolean = false;
  @Input() bgBlueLight: boolean = false;
  @Input() bgBlueDark: boolean = false;
  @Input() bgGreyLight: boolean = false;
  @Input() bgGreyDark: boolean = false;
  @Input() shieldColour: any;
  @Input() iconOnly: boolean = false;
  @Input() enableRotation: boolean = false;

  constructor() { }
}
