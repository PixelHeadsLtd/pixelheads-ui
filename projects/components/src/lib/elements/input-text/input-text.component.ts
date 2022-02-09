import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aa-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputTextComponent implements OnInit {

  @Input() isOptional: boolean;
  @Input() readOnly: boolean;
  @Input() inputTextLabel: string;
  @Input() inputTextId: string;
  @Input() inputPlaceholder: string;
  @Input() fieldClass: string;
  @Input() inputValue: any;

  constructor() { }

  ngOnInit() {
  }

}
