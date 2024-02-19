import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'aa-toastr',
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToastrComponent {

  @Input() zIndex: number = 0;

  constructor() { }

}
