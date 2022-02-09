import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class DlPopoverComponent implements OnInit {
  
  constructor() { }
  
  popoverHTML =
  `<aa-popover 
  btnLabel="Show popover" 
  leftPos="0" 
  topPos="5.5"
  width="20"
>
  <ng-container call-to-action>
  <div class="field label-transparent">
    <label>Edit name</label>
    <button class="primary">Edit name</button>
  </div>
  </ng-container>
  <ng-container custom-content>
    Your popover content here...
  </ng-container>
</aa-popover>`;
  
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
  
  ngOnInit() {}
}
