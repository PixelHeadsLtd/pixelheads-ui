import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'aa-context-menu-item',
  templateUrl: './context-menu-item.component.html',
  styleUrls: ['./context-menu-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContextMenuItemComponent {

  @Input() menuItemText: string = '';
  @Input() routerLink: string | any[] = '';
  @Input() routerLinkActive: boolean  = false;
  @Input() minWidth: number = 0;
  @Input() noWrap: boolean = false;

  constructor(private router: Router) { }

  onClick() {
    this.router.navigate([this.routerLink, 500]);
  }

}
