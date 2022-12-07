import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'aa-status-indicator',
  templateUrl: './status-indicator.component.html',
  styleUrls: ['./status-indicator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusIndicatorComponent {

  @Input() iconClass: string;
  @Input() iconTitle: string;
  @Input() iconName: string;
  @Input() iconStatus: string;
  @Input() currentStatus: Array<object>;

}
