import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {
  
  showOverlay: boolean;
  obi: boolean;
  public selectedIndex: number = null;

  constructor() { }
  
  imgPath = "./assets/images/samples/obi-wan.png"

  overlayHTML = 
  `<aa-overlay 
  [showOverlay]="showOverlay"
  zIndex="999"
>
  <ng-container overlay-header>
    Your content...
  </ng-container>
  <ng-container overlay-content>
    Your content...
  </ng-container>
</aa-overlay>`;
  
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

  ngOnInit() {
  }

}
