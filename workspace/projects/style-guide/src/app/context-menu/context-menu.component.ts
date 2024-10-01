import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss']
})
export class ContextMenuComponent {
  toggleBlade: boolean = false;

  constructor() { }

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

}
