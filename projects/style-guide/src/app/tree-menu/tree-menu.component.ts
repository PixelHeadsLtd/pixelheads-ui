import { Component } from '@angular/core';
import { NODES } from '../class/tree-mock-nodes';

@Component({
  selector: 'app-tree-menu',
  templateUrl: './tree-menu.component.html',
  styleUrls: ['./tree-menu.component.scss']
})
export class TreeMenuComponent {

  nodes = NODES;

  constructor() { }

  copyToClipboard(item: string): void {
    let listener = (e: ClipboardEvent) => {
        e.clipboardData?.setData('text/plain', (item));
        e.preventDefault();
    };

    document.addEventListener('copy', listener);
    document.execCommand('copy');
    document.removeEventListener('copy', listener);
  }

  toggleBlade: boolean = false;

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }
}
