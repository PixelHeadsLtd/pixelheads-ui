import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aa-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxComponent implements OnInit {
  @Input() checkboxId: string;
  @Input() checkboxName: string;
  @Input() checkboxValue: string;
  @Input() checkboxText: string;
  @Input() checkboxChecked: string;
  @Input() fieldClass: string;
  @Input() disabled: string;

  constructor() { }

  ngOnInit() {
  }
}
