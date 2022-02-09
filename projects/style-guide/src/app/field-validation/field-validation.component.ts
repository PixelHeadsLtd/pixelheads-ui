import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-field-validation',
  templateUrl: './field-validation.component.html',
  styleUrls: ['./field-validation.component.scss']
})
export class FieldValidationComponent implements OnInit {

  constructor() { }
  
  fieldValidationHTML =
`<div class="field error">
  <label for="text-input-1">Field error incomplete</label>
  <input type="text" name="text-input-1" id="text-input-1" />
  <div role="alert">Please provide an answer</div>
</div>

<div class="field error">
  <label for="text-input-2">Field error invalid</label>
  <input type="text" name="text-input-2" id="text-input-2" />
  <div role="alert">
    Please enter a valid UK passport number - must be 8 alphanumeric
    characters
  </div>
</div>

<div class="field error">
  <label for="text-input-3">Field error invalid password</label>
  <input type="password" name="text-input-3" id="text-input-3" />
  <div role="alert">Please enter a valid password</div>
</div>`
  
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
