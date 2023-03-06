import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'aa-alert-shield',
  templateUrl: './alert-shield.component.html',
  styleUrls: ['./alert-shield.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertShieldComponent implements OnInit {

  @Input() alertShieldStatus: boolean;
  @Input() alertShieldText: string;
  @Input() showTooltip: boolean;
  @Input() showTooltipHeading: boolean;
  @Input() tooltipHeading: string;
  @Input() minWidth: any;
  @Input() alertShieldSmall: boolean;
  @Input() noWrap: boolean;
  @Input() xpos: string;
  @Input() ypos: string;
  @Input() hideLabel: boolean;

  @Input() customShield: boolean;
  @Input() iconName: string;
  @Input() iconOutlined: boolean;
  @Input() bgRedLight: boolean;
  @Input() bgRedDark: boolean;
  @Input() bgGreenLight: boolean;
  @Input() bgGreenDark: boolean;
  @Input() bgOrangeLight: boolean;
  @Input() bgOrangeDark: boolean;
  @Input() bgBlueLight: boolean;
  @Input() bgBlueDark: boolean;
  @Input() bgGreyLight: boolean;
  @Input() bgGreyDark: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
