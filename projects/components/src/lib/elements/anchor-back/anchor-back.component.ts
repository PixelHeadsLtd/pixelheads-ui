import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ph-anchor-back',
  templateUrl: './anchor-back.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnchorBackComponent  {

  @Input() anchorBackText: string = '';
  @Input() anchorURL: string = '';


}
