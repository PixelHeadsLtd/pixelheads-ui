import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'ph-actions-summary',
  templateUrl: './actions-summary.component.html',
  styleUrls: ['./actions-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionsSummaryComponent {

  @Input() heading: string = '';
  @Input() title: string = '';
  @Input() value: number = 0;
  @Input() status: string = '';
  @Input() verticalDisplay: boolean = false;
  @Input() noWrap: boolean = false;
  @Input() actionsSummaryItems: Array<any>=[];

  constructor() { }
}
