import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'ph-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverlayComponent {

  @Input() zIndex: number = 0;
  @Input() showOverlay: boolean = false;
  @Input() topPos: any;
  @Input() rightPos: any;
  @Input() bottomPos: any;
  @Input() leftPos: any;
  @Input() minWidth: any;
  @Input() maxWidth: any;

  constructor() { }

}
