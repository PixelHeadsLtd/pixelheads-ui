import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'aa-progress-indicator-advanced',
  templateUrl: './progress-indicator-advanced.component.html',
  styleUrls: ['./progress-indicator-advanced.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressIndicatorAdvancedComponent {

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
