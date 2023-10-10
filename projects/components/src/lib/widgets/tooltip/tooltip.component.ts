import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'aa-tooltip',
  templateUrl: './tooltip.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipComponent implements OnInit {
  @Input() setMinWidth: any;
  @Input() setMaxWidth: any;
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
  @Input() showAsAnchor: boolean;
  @Input() tooltipAnchor: any;
  @Input() preventAnchorWrapping: boolean;
  @Input() showAsButton: boolean;
  @Input() buttonText: string;
  @Input() buttonId: string;
  @Input() buttonClass: string;
  @Input() disabled: boolean;
  @Input() showTooltipOnClick: boolean;
  @Input() showTooltipOnHover: boolean;
  @Input() tooltipClicked: boolean;
  @Input() tooltipBtnText: boolean;

  @Output() buttonClick = new EventEmitter<Event>();

  public onButtonClick(e: Event) {
    e.stopPropagation();
    this.buttonClick.emit(e);
  }

  constructor() {}

  ngOnInit() {}
}
