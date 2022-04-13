import {Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, OnDestroy} from '@angular/core';

@Component({
  selector: 'aa-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalDialogComponent implements OnInit, OnDestroy {

  constructor() { }

  @Input() heading: string;
  @Input() message: string;
  @Input() topPos: any;
  @Input() rightPos: any;
  @Input() leftPos: any;
  @Input() minWidth: any;
  @Input() maxWidth: any;
  @Input() green: boolean;
  @Input() orange: boolean;
  @Input() red: boolean;
  @Input() blue: boolean;
  @Input() zIndex: number;
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
