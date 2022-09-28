import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'aa-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverlayComponent implements OnInit {

  @Input() zIndex: number;
  @Input() showOverlay: boolean;
  @Input() topPos: any;
  @Input() rightPos: any;
  @Input() bottomPos: any;
  @Input() leftPos: any;
  @Input() minWidth: any;

  constructor() { }

  ngOnInit(): void {
  }

}
