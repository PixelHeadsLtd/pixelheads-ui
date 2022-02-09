import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'aa-info-panel-stacked',
  templateUrl: './info-panel-stacked.component.html',
  styleUrls: ['./info-panel-stacked.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoPanelStackedComponent implements OnInit {

  @Input() approvedForward: boolean;
  @Input() pendingForward: boolean;
  @Input() rejectedForward: boolean;
  @Input() withdrawnForward: boolean;
  @Input() returnedForward: boolean;
  @Input() abandonedForward: boolean;
  @Input() draftForward: boolean;
  @Input() withdrawalPendingForward: boolean;

  @Input() resetAll: boolean;
  @Input() wrapperWidth: number;
  @Input() wrapperHeight: number;
  @Input() fullWidth: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
