import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aa-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldComponent implements OnInit {

  @Input() fieldId: string;
  @Input() fieldLabel: string;
  @Input() fieldClass: string;
  @Input() inputValue: any;
  @Input() buttonClass: string;
  @Input() readOnly: boolean;

  constructor() { }

  ngOnInit() {
  }

}
