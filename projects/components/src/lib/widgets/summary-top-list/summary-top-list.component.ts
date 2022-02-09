import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'aa-summary-top-list',
  templateUrl: './summary-top-list.component.html',
  styleUrls: ['./summary-top-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SummaryTopListComponent implements OnInit {

  @Input() itemTitle: string;
  @Input() itemDescription: string;
  @Input() highlight: boolean;

  constructor() { }

  ngOnInit() {
  }

}
