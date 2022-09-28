import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'aa-actions-summary',
  templateUrl: './actions-summary.component.html',
  styleUrls: ['./actions-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionsSummaryComponent implements OnInit {

  @Input() title: string;
  @Input() value: number;
  @Input() status: string;
  @Input() divider: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
