import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'ph-loading-spinner-page',
  templateUrl: './loading-spinner-page.component.html',
  styleUrls: ['./loading-spinner-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingSpinnerPageComponent {

  @Input() loadingMessage: string = '';
  @Input() zIndex: number = 0;

  constructor() { }

}
