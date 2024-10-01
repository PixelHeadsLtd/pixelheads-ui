import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'aa-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent {
  @Input() verticalDisplay: boolean = false
  @Input() spaceBetween: boolean = false
  @Input() positionFixed: boolean = false
  @Input() topPos: string = ''
  @Input() leftPos: string = ''
  @Input() bottomPos: string = ''
  @Input() offsetAdjacentContentPos: string = ''
  @Input() setWidth: string = ''
  @Input() myForm: FormGroup = new FormGroup({});

  @Output() formSubmit: EventEmitter<any> = new EventEmitter();

  submitForm() {
    this.formSubmit.emit();
  }
}
