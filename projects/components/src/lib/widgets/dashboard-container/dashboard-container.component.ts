import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aa-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardContainerComponent implements OnInit {

  @Input() dashboardId: string;
  @Input() dashboardHeading: string;
  @Input() headerColor: string;

  constructor() { }

  ngOnInit() {
  }

}

