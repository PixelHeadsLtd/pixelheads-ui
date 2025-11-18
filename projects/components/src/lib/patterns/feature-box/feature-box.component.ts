import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'ph-feature-box',
  templateUrl: './feature-box.component.html',
  styleUrls: ['./feature-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureBoxComponent {

  @Input() marginTop: string = '';
  @Input() marginBottom: string = '';
  @Input() fbWidth: string = '';
  @Input() fbHeight: string = '';
  @Input() isSolid: boolean = false;
  @Input() fbStatus: string = '';
  @Input() includeHeader: boolean = false;
  @Input() enableScrolling: boolean = false;

  constructor() { }
}
