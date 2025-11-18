import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'ph-list-selectable',
  templateUrl: './list-selectable.component.html',
  styleUrls: ['./list-selectable.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListSelectableComponent {

  @Input() minWidth: any;
  @Input() topPos: any;
  @Input() leftPos: any;
  @Input() rightPos: any;
  @Input() bottomPos: any;
  @Input() zIndex: number = 0;
  @Input() flexStart: boolean = false;
  @Input() fixedPosition: boolean = false;
}
