import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {
  
  box: boolean;
  featureBox: boolean;
  featureBoxApproval: boolean;

  constructor() { }
  
  boxHTML = 
  `<div class="box border-green padding-1 margin-top-1">
  <div class="field boxed">
    <button class="primary">Hello</button>
  </div>
  <div class="field boxed">
    <button class="secondary">Goodbye</button>
  </div>
</div>`;
  
  featureBoxHTML = 
  `<div class="feature-box flex-group flex-start">
  <div class="field boxed">
    <button class="primary">Hello</button>
  </div>
  <div class="field boxed">
    <button class="secondary">Goodbye</button>
  </div>
</div>`;
  
  featureBoxApprovalHTML =
  `<div class="feature-box field approve margin-top-1">
  <div class="field boxed">
    <label>Reason</label>
    <textarea>Some reason here...</textarea>
  </div>
  <div class="flex-group flex-center">
    <div class="field">
      <button class="reject">Reject</button>
    </div>
    <div class="field">
      <button class="cancel">Cancel</button>
    </div>
  </div>
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

  ngOnInit(): void {
  }

}
