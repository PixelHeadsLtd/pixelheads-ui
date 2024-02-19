import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'aa-toastr-item',
  templateUrl: './toastr-item.component.html',
  styleUrls: ['./toastr-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToastrItemComponent {

  @Input() showToastr: boolean = false;
  @Input() isError: boolean = false;
  @Input() isWarning: boolean = false;
  @Input() isSuccess: boolean = false;
  @Input() isInfo: boolean = false;
  @Input() heading: any;
  @Input() message: any;

  @Output() closeToastr = new EventEmitter<Event>();

  public onCloseClick(e: Event) {
    e.stopPropagation();
    this.closeToastr.emit(e);
  }

  constructor() { }

}
