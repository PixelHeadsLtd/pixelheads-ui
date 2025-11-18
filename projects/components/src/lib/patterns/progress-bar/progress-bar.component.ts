import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'ph-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressBarComponent {

  @Input() titleBold: string = '';
  @Input() titleRegular: string = '';
  @Input() leftSideText: any;
  @Input() rightSideText: any;
  @Input() complete: number = 0;
  @Input() maxWidth: string = '';
  @Input() displayOverHeader: boolean = false;
  @Input() progressBgColour: any;
  @Input() progressColour: any;
  @Input() progressId: any;

  constructor() { }

}
