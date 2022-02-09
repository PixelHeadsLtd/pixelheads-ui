import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fieldset',
  templateUrl: './fieldset.component.html',
})
export class FieldsetComponent {

  myRadios: string;
  myRadios2: string;
  toggleBlade: boolean;

  constructor() { }

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

  anchorHTML =
  `<fieldset>
  <legend>Radio button</legend>
  <div class="field radio">
    <label [ngClass]="{checked: myRadios==='yes'}">
      <input [(ngModel)]="myRadios" name="myRadios" type="radio" value="yes">
      <span>Yes</span>
    </label>
  </div>
  <div class="field radio">
    <label [ngClass]="{checked: myRadios==='no'}">
      <input [(ngModel)]="myRadios" name="myRadios" type="radio" value="no">
      <span>No</span>
    </label>
  </div>
</fieldset>`;

  copyToClipboard(item): void {
    let listener = (e: ClipboardEvent) => {
        e.clipboardData.setData('text/plain', (item));
        e.preventDefault();
    };

    document.addEventListener('copy', listener);
    document.execCommand('copy');
    document.removeEventListener('copy', listener);
  }

}
