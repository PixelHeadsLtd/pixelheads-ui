import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'ph-summary-top',
  templateUrl: './summary-top.component.html',
  styleUrls: ['./summary-top.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SummaryTopComponent {

  @Input() displayBlock: boolean = false;
  @Input() verticalDisplay: boolean = false;

  constructor() { }

}
