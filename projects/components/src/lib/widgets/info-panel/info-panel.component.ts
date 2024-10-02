import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
@Component({
  selector: 'aa-info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class InfoPanelComponent {

  @Input() panelWidth: any;
  @Input() panelHeight: any;
  @Input() panelStatus: string = '';
  @Input() preventOpacity: boolean = false;
  @Input() removeHeaderBorder: boolean = false;
  @Input() roundedCorners: boolean = false;

  constructor() { }
}
