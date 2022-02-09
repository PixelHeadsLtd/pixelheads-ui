import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'aa-toastr-item',
  templateUrl: './toastr-item.component.html',
  styleUrls: ['./toastr-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToastrItemComponent implements OnInit {

  @Input() showToastr: boolean;
  @Input() isError: boolean;
  @Input() isWarning: boolean;
  @Input() isSuccess: boolean;
  @Input() isInfo: boolean;
  @Input() heading: any;
  @Input() message: any;

  @Output() closeToastr = new EventEmitter<Event>();

  public onCloseClick(e: Event) {
    e.stopPropagation();
    this.closeToastr.emit(e);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
