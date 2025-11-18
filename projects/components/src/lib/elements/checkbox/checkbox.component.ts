import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ph-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxComponent {
  @Input() checkboxId: string = '';
  @Input() checkboxName: string = '';
  @Input() checkboxValue: string = '';
  @Input() checkboxText: string = '';
  @Input() checkboxChecked: string = '';
  @Input() fieldClass: string = '';
  @Input() disabled: string = '';

  constructor() { }

}
