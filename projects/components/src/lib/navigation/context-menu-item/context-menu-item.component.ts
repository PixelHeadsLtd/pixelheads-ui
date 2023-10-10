import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'aa-context-menu-item',
  templateUrl: './context-menu-item.component.html',
  styleUrls: ['./context-menu-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContextMenuItemComponent implements OnInit {

  @Input() menuItemText: string;
  @Input() routerLink: string | any[];
  @Input() routerLinkActive: boolean;
  @Input() minWidth: number;
  @Input() noWrap: boolean;

  constructor(private router: Router) { }

  onClick() {
    this.router.navigate([this.routerLink, 500]);
  }

  ngOnInit() {
  }

}
