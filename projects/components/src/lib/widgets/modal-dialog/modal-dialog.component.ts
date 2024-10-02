import {Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, OnDestroy} from '@angular/core';

@Component({
  selector: 'aa-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalDialogComponent implements OnInit, OnDestroy {

  constructor() { }

  @Input() heading: string = '';
  @Input() message: string = '';
  @Input() cancelBtnText: string = '';
  @Input() submitBtnText: string = '';
  @Input() topPos: any;
  @Input() rightPos: any;
  @Input() leftPos: any;
  @Input() minWidth: any;
  @Input() maxWidth: any;
  @Input() green: boolean = false;
  @Input() orange: boolean = false;
  @Input() red: boolean = false;
  @Input() blue: boolean = false;
  @Input() zIndex: number = 0;
  @Input() hideHeader: boolean = false;
  @Output() closeMeEvent = new EventEmitter();
  @Output() confirmEvent = new EventEmitter();

  ngOnInit(): void {
    console.log('Modal init');
  }

  closeMe() {
    this.closeMeEvent.emit();
  }

  confirm() {
    this.confirmEvent.emit();
  }

  ngOnDestroy(): void {
    console.log(' Modal destroyed');
  }

}
