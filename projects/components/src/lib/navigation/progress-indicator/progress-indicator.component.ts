import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'aa-progress-indicator',
  templateUrl: './progress-indicator.component.html',
  styleUrls: ['./progress-indicator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressIndicatorComponent implements OnInit {
  @Input() asLink: boolean;
  @Input() progressCount: string;
  @Input() progressClass: string;
  @Input() progressLink: string;
  @Input() progressLabel: string;
  @Input() iconsEnabled: boolean;
  @Input() iconName: string;

  constructor() {}

  ngOnInit() {}
}
