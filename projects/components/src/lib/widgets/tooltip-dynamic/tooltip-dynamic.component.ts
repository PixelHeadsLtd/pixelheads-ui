import { Component, ChangeDetectionStrategy, ChangeDetectorRef, ViewEncapsulation, Input } from '@angular/core';
import { TooltipDynamicPosition } from './tooltip-dynamic.enums';

@Component({
  selector: 'ph-tooltip-dynamic',
  templateUrl: './tooltip-dynamic.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class TooltipDynamicComponent {
  position: TooltipDynamicPosition = TooltipDynamicPosition.DEFAULT;
  @Input() tooltipWidth: string = 'auto';
  @Input() tooltipStatus: string = '';
  tooltip: string | string[] = '';
  left = 0;
  top = 0;
  visible = false;

  constructor(private cdr: ChangeDetectorRef) {}

  hideTooltipWithDelay(delay: number) {
    setTimeout(() => {
      this.visible = false;
      this.cdr.detectChanges();
    }, delay);
  }

  getTooltipClasses(): { [key: string]: boolean } {
    return {
      'tooltip-dynamic--visible': this.visible,
      [`tooltip-dynamic--${this.position}`]: true,
    };
  }

  showTooltip() {
    this.visible = true;
    this.cdr.detectChanges();
  }
}
