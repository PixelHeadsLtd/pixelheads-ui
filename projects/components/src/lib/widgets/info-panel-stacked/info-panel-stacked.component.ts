import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'ph-info-panel-stacked',
  templateUrl: './info-panel-stacked.component.html',
  styleUrls: ['./info-panel-stacked.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoPanelStackedComponent {

  @Input() approvedForward: boolean = false;
  @Input() pendingForward: boolean = false;
  @Input() rejectedForward: boolean = false;
  @Input() withdrawnForward: boolean = false;
  @Input() returnedForward: boolean = false;
  @Input() abandonedForward: boolean = false;
  @Input() draftForward: boolean = false;
  @Input() withdrawalPendingForward: boolean = false;

  @Input() resetAll: boolean = false;
  @Input() wrapperWidth: any;
  @Input() wrapperHeight: any;
  @Input() fullWidth: boolean = false;

  constructor() { }

}
