import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'aa-alert-shield',
  templateUrl: './alert-shield.component.html',
  styleUrls: ['./alert-shield.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertShieldComponent implements OnInit {

  @Input() alertShieldStatus: boolean;
  @Input() alertShieldText: boolean;
  @Input() showTooltip: boolean;
  @Input() showTooltipHeading: boolean;
  @Input() tooltipHeading: string;
  @Input() minWidth: any;
  @Input() alertShieldSmall: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
