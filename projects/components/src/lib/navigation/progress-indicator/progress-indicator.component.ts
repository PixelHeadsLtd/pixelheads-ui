import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'aa-progress-indicator',
  templateUrl: './progress-indicator.component.html',
  styleUrls: ['./progress-indicator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressIndicatorComponent {
  @Input() asLink: boolean = false;
  @Input() progressCount: string = '';
  @Input() progressClass: string = '';
  @Input() progressLink: string = '';
  @Input() progressLabel: string = '';
  @Input() iconsEnabled: boolean = false;
  @Input() iconName: string = '';

  constructor() {}
}
