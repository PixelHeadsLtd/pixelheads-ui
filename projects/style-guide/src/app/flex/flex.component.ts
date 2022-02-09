import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flex',
  templateUrl: './flex.component.html',
  styleUrls: ['./flex.component.scss']
})
export class FlexComponent implements OnInit {

  constructor() { }
  
  flexGroup: boolean;
  flexStart: boolean;
  flexEnd: boolean;
  spaceBetween: boolean;
  flexCenter: boolean;
  
  flexGroupHTML =
  `<div class="flex-group">
  <div>flex 1</div>
  <div>flex 1</div>
  <div>flex 1</div>
</div>
<div class="flex-group">
  <div class="flex-1 col-left">flex 1</div>
  <div class="flex-2 col-right">flex 2</div>
  <div class="flex-3">flex 3</div>
</div>`;
  
  flexStartHTML =
  `<div class="flex-group">
  <div>flex start hello there is more text</div>
  <div>flex start</div>
  <div>flex sta`;
  
  flexEndHTML =
  `<div class="flex-group flex-end">
  <div>flex end</div>
  <div>flex end</div>
  <div>flex end</div>
</div>`;
  
  spaceBetweenHTML =
  `<div class="flex-group space-between">
  <div>flex end</div>
  <div>flex end</div>
  <div>flex end</div>
</div>

<div class="flex-group space-between">
  <div class="flex-group flex-start">
    <div>space-between</div>
    <div>space-between</div>
    <div>space-between</div>
  </div>
  <div>
    space-between
  </div>
</div>`;
  
  flexCenterHTML = 
  `<div class="flex-group flex-center">
  <div>flex end</div>
  <div>flex end</div>
  <div>flex end</div>
</div>`;
  
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
