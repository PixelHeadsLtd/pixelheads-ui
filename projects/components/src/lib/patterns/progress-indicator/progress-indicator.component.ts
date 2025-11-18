import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ph-progress-indicator',
  templateUrl: './progress-indicator.component.html',
  styleUrls: ['./progress-indicator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressIndicatorComponent {

  @Input() progressClass: string = '';
  @Input() progressLabel: string = '';
  @Input() iconClass: string = '';
  @Input() showDescription: boolean = false;
  @Input() description: string = '';
  @Input() asLink: boolean = false;
  @Input() progressLink: string = '';

  @Output() progressClick = new EventEmitter<Event>();

  public onProgressClick(e: Event) {
    e.stopPropagation();
    this.progressClick.emit(e);
  }
}
