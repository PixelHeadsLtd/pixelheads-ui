import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-spinner-page',
  templateUrl: './loading-spinner-page.component.html',
  styleUrls: ['./loading-spinner-page.component.scss']
})
export class LoadingSpinnerPageComponent implements OnInit {

  public toggleBlade: boolean;

  constructor() { }

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }
  
  loadingSpinnerHTML = '<aa-loading-spinner-page loadingText="Loading..."></aa-loading-spinner-page>'
  
  copyToClipboard(item): void {
    let listener = (e: ClipboardEvent) => {
        e.clipboardData.setData('text/plain', (item));
        e.preventDefault();
    };

    document.addEventListener('copy', listener);
    document.execCommand('copy');
    document.removeEventListener('copy', listener);
  }

  ngOnInit() {
  }

}
