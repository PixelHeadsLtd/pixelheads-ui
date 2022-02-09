import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aa-anchor-back',
  templateUrl: './anchor-back.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnchorBackComponent implements OnInit {

  @Input() anchorBackText: string;
  @Input() anchorURL: string;

  ngOnInit() { }

}
