import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
@Component({
  selector: 'aa-info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class InfoPanelComponent implements OnInit {

  @Input() panelWidth: number;
  @Input() panelHeight: number;
  @Input() panelStatus: string;
  @Input() preventOpacity: string;

  constructor() { }


  ngOnInit() {
  }
}
