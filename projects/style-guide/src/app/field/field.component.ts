import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {
  
  showField: boolean;
  showFieldSmall: boolean;
  showFieldInline: boolean;
  showDate: boolean;
  myRadios: string;

  constructor() { }
    
  fieldHTML =
`<div class="field">
  <label for="text-input-1">Field</label>
  <input type="text" name="text-input-1" id="text-input-1" />
</div>

<!-- Optional field -->
<div class="field optional">
<label for="text-input-1">Field optional</label>
<input type="text" name="text-input-1" id="text-input-1" placeholder="Field" />
</div>

<!-- Readonly -->
<div class="field">
  <label for="text-input-1">Field</label>
  <input readonly type="text" name="text-input-1" id="text-input-1" value="Read only" />
</div>

<!-- Confirmation dialog -->
<div class="field">
<label for="text-input-1">Confirmation dialog</label>
<input type="text" placeholder="Test" />
<article class="confirmation flex-group">
  <div class="flex-group flex-start flex-2">
    <div class="material-icons flex-1">error_outline</div>
    <p class="small flex-4">
      This field must be completed in English. Would you also<br/>
      like to enter this information in your native language?
    </p>
  </div>
  <div class="flex-group flex-end flex-1">
    <div class="field radio small">
      <label [ngClass]="{'checked': myRadios==='yes'}">
        <input [(ngModel)]="myRadios" name="myRadios" type="radio" value="yes">
        <span>Yes</span>
      </label>
    </div>
    <div class="field radio small">
      <label [ngClass]="{'checked': myRadios==='no'}">
        <input [(ngModel)]="myRadios" name="myRadios" type="radio" value="no">
        <span>No</span>
      </label>
    </div>
  </div>
</article>
</div>`;

  dateHTML =
`<div class="field">
  <label for="text-input-2">Date</label>
  <div class="date-picker">
    <input type="text" name="text-input-2" id="text-input-2" placeholder="dd-mon-yyyy" />
    <button class="material-icons">date_range</button>
  </div>
</div>

<div class="field">
  <label for="text-input-2">Date readonly</label>
  <div class="date-picker">
    <input type="text" name="text-input-2" id="text-input-2" placeholder="dd-mon-yyyy" readonly="true" />
    <button class="material-icons">date_range</button>
  </div>
</div>`;
  
  fieldSmallHTML =
  `<div class="field small">
  <label for="text-input-1">Field small</label>
  <input type="text" name="text-input-1" id="text-input-1" placeholder="Field small" />
</div>`;

  fieldInlineHTML =
`<div class="field inline">
  <label for="text-input">Field inline</label>
  <input type="text" name="text-input" id="text-input" placeholder="Field inline" />
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
