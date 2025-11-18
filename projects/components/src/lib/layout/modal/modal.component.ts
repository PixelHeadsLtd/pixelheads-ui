import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'ph-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent {

  @Input() heading: string  = '';
  @Input() message: string = '';
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
  @Input() hideHeader: number = 0;

  constructor() { }

}
