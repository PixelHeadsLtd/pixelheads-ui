import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'aa-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent implements OnInit {

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
  @Input() hideHeader: number;

  constructor() { }

  ngOnInit() {
  }

}
