import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'aa-list-selectable',
  templateUrl: './list-selectable.component.html',
  styleUrls: ['./list-selectable.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListSelectableComponent implements OnInit {

  @Input() minWidth: number;
  @Input() topPos: number;
  @Input() leftPos: number;
  @Input() rightPos: number;
  @Input() bottomPos: number;
  @Input() zIndex: number;
  @Input() flexStart: boolean;
  @Input() fixedPosition: boolean;

  ngOnInit(): void {
  }

}
