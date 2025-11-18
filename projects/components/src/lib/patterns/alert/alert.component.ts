import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ph-alert',
  templateUrl: './alert.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertComponent {
  @Input() alertClass: string = '';
  @Input() alertTitle: string = '';
  @Input() alertText: string = '';
  @Input() collapsible: boolean = false;
  @Input() alignIconTop: boolean = false;
  @Input() expandPanel: boolean = false;
  @Input() minWidth: any;
  @Input() maxWidth: any;
  @Input() collapsedHeight: any;
  @Input() removePanel: any;
  @Input() defaultExpanded: boolean = false;

  constructor() { }

}
