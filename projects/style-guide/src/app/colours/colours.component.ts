import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-colours',
  templateUrl: './colours.component.html',
  styleUrls: ['./colours.component.scss']
})
export class ColoursComponent implements OnInit, OnDestroy {

  constructor (
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
  ) { }
  
  copyToClipboard(item): void {
    let listener = (e: ClipboardEvent) => {
        e.clipboardData.setData('text/plain', (item));
        e.preventDefault();
    };

    document.addEventListener('copy', listener);
    document.execCommand('copy');
    document.removeEventListener('copy', listener);
  }
  
  toggleBlade: boolean;

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

  toggleBodyClass: boolean;

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

  ngOnInit(): void {
   //this.renderer.addClass(this.document.body, 'embedded-body');
}

  ngOnDestroy(): void {
    //  this.renderer.removeClass(this.document.body, 'embedded-body');
  }

}
