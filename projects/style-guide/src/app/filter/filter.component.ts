import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  
  showFilterGradient: boolean;
  myRadios: string;
  toggleFilter: boolean;

  constructor() { }
  
  filterHTML =
  `<!-- option 1 standard -->
  <article class="flex-group flex-start filter-container padding-1-25 padding-top-0">
    <!-- inputs here -->
    <!-- IMPORTANT - each aa-button must be wrapped in a div -->
  </article>
  
  
<!-- option 2 with space between -->
  <article class="flex-group space-between filter-container padding-1-25 padding-top-0">
    <div class="flex-group">
        <!-- left side inputs here -->
    </div>

    <div class="flex-group">
        <!-- right side 'aa-buttons' here -->
    </div>
  </article>`;
  
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
