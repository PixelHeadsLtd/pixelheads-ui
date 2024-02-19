import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
@Component({
  selector: 'aa-nav-context',
  templateUrl: './nav-context.component.html',
  styleUrls: ['./nav-context.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class NavContextComponent {

  @Input() navWidth: any;
  @Input() topPos: any;
  @Input() leftPos: any;
  @Input() rightPos: any;
  @Input() bottomPos: any;
  @Input() zIndex: number = 0;
  @Input() showMenu: boolean = false;

  constructor() { }

  toggle() {
    this.showMenu = ! this.showMenu;
  }
}
