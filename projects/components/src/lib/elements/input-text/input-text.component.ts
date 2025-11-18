import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ph-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputTextComponent {

  @Input() isOptional: boolean = false;
  @Input() readOnly: boolean = false;
  @Input() inputTextLabel: string = '';
  @Input() inputTextId: string = '';
  @Input() inputPlaceholder: string = '';
  @Input() fieldClass: string = '';
  @Input() inputValue: any;

  constructor() { }


}
