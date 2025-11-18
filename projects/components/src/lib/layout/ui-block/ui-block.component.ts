import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'ph-ui-block',
  templateUrl: './ui-block.component.html',
  styleUrls: ['./ui-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiBlockComponent {

  @Input() showUiBlock: boolean = false;
  @Input() topPos: any;
  @Input() bottomPos: any;
  @Input() fontSize: any;
  @Input() allCaps: boolean = false;
  @Input() message: string = '';
  @Input() zIndex: number = 0;
}
