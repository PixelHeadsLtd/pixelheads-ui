import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ph-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardContainerComponent {

  @Input() dashboardId: string = '';
  @Input() dashboardHeading: string = '';
  @Input() headerColor: string = '';

  constructor() { }

}

