import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TooltipDynamicPosition } from './tooltip-dynamic.enums';

@Component({
  selector: 'aa-tooltip-dynamic',
  templateUrl: './tooltip-dynamic.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipDynamicComponent implements OnInit {

  position: TooltipDynamicPosition = TooltipDynamicPosition.DEFAULT;
  tooltip: string | string[];
  left = 0;
  top = 0;
  visible = false;

  isArrayPassed() {
    return (this.tooltip instanceof Array);
  }

  constructor() {}

  ngOnInit() {}
}
