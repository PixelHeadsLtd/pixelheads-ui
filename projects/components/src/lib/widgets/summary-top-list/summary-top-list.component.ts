import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'aa-summary-top-list',
  templateUrl: './summary-top-list.component.html',
  styleUrls: ['./summary-top-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SummaryTopListComponent {

  @Input() itemTitle: string = '';
  @Input() itemDescription: string = '';
  @Input() highlight: boolean = false;
  @Input() truncate: boolean = false;
  @Input() divider: boolean = false;
  @Input() maxWidth: any;

  constructor() { }

}
