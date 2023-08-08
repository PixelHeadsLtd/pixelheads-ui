import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'aa-feature-box',
  templateUrl: './feature-box.component.html',
  styleUrls: ['./feature-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureBoxComponent implements OnInit {

  @Input() marginTop: boolean;
  @Input() marginBottom: boolean;
  @Input() fbWidth: boolean;
  @Input() fbHeight: boolean;
  @Input() isSolid: boolean;
  @Input() fbStatus: string;
  @Input() includeHeader: boolean;
  @Input() enableScrolling: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
