import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'aa-summary-top',
  templateUrl: './summary-top.component.html',
  styleUrls: ['./summary-top.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SummaryTopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
