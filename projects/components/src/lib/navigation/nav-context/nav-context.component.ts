import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
@Component({
  selector: 'aa-nav-context',
  templateUrl: './nav-context.component.html',
  styleUrls: ['./nav-context.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class NavContextComponent implements OnInit {

  @Input() navWidth: number;
  @Input() topPos: number;
  @Input() leftPos: number;
  @Input() rightPos: number;
  @Input() bottomPos: number;
  @Input() zIndex: number;
  @Input() showMenu: boolean;

  constructor() { }

  toggle() {
    this.showMenu = ! this.showMenu;
  }

  ngOnInit(): void {
  }
}
