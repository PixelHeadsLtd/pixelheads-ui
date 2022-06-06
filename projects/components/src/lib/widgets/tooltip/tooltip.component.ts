import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
@Component({
  selector: 'aa-tooltip',
  templateUrl: './tooltip.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipComponent implements OnInit {
  @Input() setMinWidth: number;
  @Input() isSuccess: boolean;
  @Input() isInfo: boolean;
  @Input() isWarning: boolean;
  @Input() includeLabel: boolean;
  @Input() includeLegend: boolean;
  @Input() labelName: string;
  @Input() isError: boolean;
  @Input() xpos: string;
  @Input() ypos: string;
  @Input() customIcon: boolean;
  @Input() iconName: string;
  @Input() zIndex: number;
  @Input() labelFor: string;

  constructor() {}

  ngOnInit() {}
}
