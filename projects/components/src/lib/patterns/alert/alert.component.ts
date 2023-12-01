import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aa-alert',
  templateUrl: './alert.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertComponent implements OnInit {
  @Input() alertClass: string;
  @Input() alertTitle: string;
  @Input() alertText: string;
  @Input() collapsible: boolean;
  @Input() alignIconTop: boolean;
  @Input() expandPanel: boolean;
  @Input() minWidth: any;
  @Input() maxWidth: any;
  @Input() collapsedHeight: any;
  @Input() removePanel: any;
  @Input() defaultExpanded: boolean;

  constructor() { }

  ngOnInit() {
  }

}
