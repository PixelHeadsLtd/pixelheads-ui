import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'aa-ui-block',
  templateUrl: './ui-block.component.html',
  styleUrls: ['./ui-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiBlockComponent implements OnInit {

  @Input() showUiBlock: boolean;
  @Input() topPos: number;
  @Input() bottomPos: number;
  @Input() fontSize: number;
  @Input() allCaps: boolean;
  @Input() message: string;
  @Input() zIndex: number;

  ngOnInit(): void {
  }

}
