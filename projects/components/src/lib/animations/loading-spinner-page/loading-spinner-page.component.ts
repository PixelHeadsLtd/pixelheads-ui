import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'aa-loading-spinner-page',
  templateUrl: './loading-spinner-page.component.html',
  styleUrls: ['./loading-spinner-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingSpinnerPageComponent implements OnInit {

  @Input() loadingMessage: string;
  @Input() zIndex: number;

  constructor() { }

  ngOnInit() {
  }

}
