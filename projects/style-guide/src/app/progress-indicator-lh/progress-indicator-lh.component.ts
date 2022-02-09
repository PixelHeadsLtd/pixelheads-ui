import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-indicator-lh',
  templateUrl: './progress-indicator-lh.component.html',
  styleUrls: ['./progress-indicator-lh.component.scss']
})
export class ProgressIndicatorLhComponent implements OnInit {

  constructor() { }
  
  progressIndicatorHTML =
  `<nav class="max-width-14">
  <ol class="progress-indicator-lh">
      <li class="complete">Home</li>
      <li class="active">Ownership</li>
      <li>Third parties</li>
      <li>Documents</li>
      <li class="error">
          Compliance
          <span class="icon-error-outline icon-red float-right padding-top-0-5"></span>
      </li>
      <li>Review and finish</li>
  </ol>
</nav>`;
  
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
