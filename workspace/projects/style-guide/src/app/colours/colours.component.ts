import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-colours',
  templateUrl: './colours.component.html',
  styleUrls: ['./colours.component.scss']
})
export class ColoursComponent {

  constructor (
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
  ) { }

  copyToClipboard(item:any): void {
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

  toggleBodyClass: boolean = false;

  toggleTheme() {
    this.toggleBodyClass = !this.toggleBodyClass;
    if (this.toggleBodyClass) {
      this.renderer.addClass(this.document.body, 'dark-mode');
      this.renderer.removeClass(this.document.body, 'light-mode');
    } else {
      this.renderer.removeClass(this.document.body, 'dark-mode');
      this.renderer.addClass(this.document.body, 'light-mode');
    }
  }

}
