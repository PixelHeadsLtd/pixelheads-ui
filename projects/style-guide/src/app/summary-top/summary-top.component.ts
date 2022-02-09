import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary-top',
  templateUrl: './summary-top.component.html',
  styleUrls: ['./summary-top.component.scss']
})
export class SummaryTopComponent implements OnInit {

  hightlight: boolean;

  constructor() { }
  
  summaryTopHTML = 
  `<aa-summary-top>
  <aa-summary-top-list 
    class="component" 
    [highlight]="false" 
    [itemTitle]="'Employee name'" 
    [itemDescription]="'Paul Smith'"
  >
  </aa-summary-top-list>
</aa-summary-top>`;
  
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
