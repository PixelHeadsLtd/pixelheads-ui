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
  @Input() verticalDisplay: boolean;
  @Input() noWrap: boolean;
  @Input() actionsSummaryItems: Array<object>;

  constructor() { }

  ngOnInit(): void {
  }

}
