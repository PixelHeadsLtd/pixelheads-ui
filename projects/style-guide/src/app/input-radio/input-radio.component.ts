import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-radio',
  templateUrl: './input-radio.component.html',
  styleUrls: ['./input-radio.component.scss']
})
export class InputRadioComponent {

  myRadios: string;
  myRadios2: string;
  showRadio: boolean;
  showRadioValidation: boolean;
  
  radioHTML =
  `<fieldset>
  <legend>Radio button</legend>
  <div class="field radio">
    <label [ngClass]="{'checked': myRadios==='yes'}">
      <input [(ngModel)]="myRadios" name="myRadios" type="radio" value="yes">
      <span>Yes</span>
    </label>
  </div>
  <div class="field radio">
    <label [ngClass]="{'checked': myRadios==='no'}">
      <input [(ngModel)]="myRadios" name="myRadios" type="radio" value="no">
      <span>No</span>
    </label>
  </div>
  <div class="field radio">
    <label [ngClass]="{'checked': myRadios==='disabled'}">
      <input [(ngModel)]="myRadios" name="myRadios" type="radio" value="disabled" disabled="true">
      <span>disabled=&ldquo;true&rdquo;</span>
    </label>
  </div>
</fieldset>`;
  
  radioValidationHTML =
  `<fieldset>
  <legend>Radio button</legend>
  <div class="field error radio">
    <label [ngClass]="{'checked': myRadios2==='yes'}">
      <input [(ngModel)]="myRadios2" name="myRadios2" type="radio" value="yes">
      <span>Yes</span>
    </label>
  </div>
  <div class="field error radio">
    <label [ngClass]="{'checked': myRadios2==='no'}">
      <input [(ngModel)]="myRadios2" name="myRadios2" type="radio" value="no">
      <span>No</span>
    </label>
  </div>
  <div class="error" role="alert">Please select an option</div>
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
  
  toggleBlade: boolean;

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

}
