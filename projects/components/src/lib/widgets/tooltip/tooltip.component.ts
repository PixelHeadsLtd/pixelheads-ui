import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'aa-tooltip',
  templateUrl: './tooltip.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipComponent {
  @Input() setMinWidth: any;
  @Input() setMaxWidth: any;
  @Input() isSuccess: boolean = false;
  @Input() isInfo: boolean = false;
  @Input() isWarning: boolean = false;
  @Input() includeLabel: boolean = false;
  @Input() includeLegend: boolean = false;
  @Input() labelName: string = '';
  @Input() isError: boolean = false;
  @Input() xpos: string = '';
  @Input() ypos: string = '';
  @Input() customIcon: boolean = false;
  @Input() iconName: string = '';
  @Input() zIndex: number = 0;
  @Input() labelFor: string = '';
  @Input() showAsAnchor: boolean = false;
  @Input() tooltipAnchor: any;
  @Input() preventAnchorWrapping: boolean = false;
  @Input() showAsButton: boolean = false;
  @Input() buttonText: string = '';
  @Input() buttonId: string = '';
  @Input() buttonClass: string = '';
  @Input() disabled: boolean = false;
  @Input() showTooltipOnClick: boolean = false;
  @Input() showTooltipOnHover: boolean = false;
  @Input() tooltipClicked: boolean = false;
  @Input() tooltipBtnText: string = '';

  @Output() buttonClick = new EventEmitter<Event>();

  public onButtonClick(e: Event) {
    e.stopPropagation();
    this.buttonClick.emit(e);
  }

  constructor() { }
}
