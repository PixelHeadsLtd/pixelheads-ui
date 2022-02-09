import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {

  myCheckboxes: string;
  showCheckbox: boolean;
  showCheckboxFeature: boolean;
  showValidation: boolean;
  
  checkboxHTML = 
  `<fieldset>
  <!-- HTML Version -->
  <legend>Checkbox</legend>
  <div class="field checkbox boxed">
    <label for="checkboxIdOne">
      <input 
      <!-- HTML Version -->  type="checkbox" 
        value="disabled" 
        name="myCheckbox"
        id="checkboxIdOne" 
        checked="checked">
      <span>Chickens</span>
    </label>
  </div>
  
  <!-- Component Version -->
  <aa-checkbox 
    checkboxChecked="'checkboxChecked'" 
    checkboxId="checkboxIdTwo" 
    checkboxName="myCheckboxes"
    checkboxText="Disabled" 
    checkboxValue="Disabled"
    fieldClass="boxed"
    disabled="true">
  </aa-checkbox>
</fieldset>`;

checkboxFeatureHTML =
`<section class="feature-box solid max-readable-width">
  <fieldset class="boxed">
    <legend>Checkbox</legend>
    <div class="field checkbox boxed">
      <label for="checkboxIdOne">
        <input 
          type="checkbox" 
          value="disabled" 
          name="myCheckbox"
          id="checkboxIdOne" 
          checked="checked">
        <span>Chickens</span>
      </label>
    </div>
    <aa-checkbox 
      checkboxChecked="'checkboxChecked'" 
      checkboxId="checkboxIdTwo" 
      checkboxName="myCheckboxes"
      checkboxText="Foxes" 
      checkboxValue="Foxes"
      fieldClass="boxed">
    </aa-checkbox>
    <aa-checkbox 
      checkboxChecked="checkboxChecked" 
      checkboxId="checkboxIdThree" 
      checkboxName="myCheckboxes"
      checkboxText="Disabled" 
      checkboxValue="Disabled"
      fieldClass="boxed"
      disabled="true">
    </aa-checkbox>
  </fieldset>
</section>`;

validationHTML =
`<fieldset class="boxed">
  <legend>Checkbox</legend>
  <div class="field error checkbox boxed">
    <label for="checkboxIdOne">
      <input 
        type="checkbox" 
        value="disabled" 
        name="myCheckbox"
        id="checkboxIdOne">
      <span>Chickens</span>
    </label>
  </div>
  <aa-checkbox 
    checkboxId="checkboxIdTwo" 
    checkboxName="myCheckboxes"
    checkboxText="Foxes" 
    checkboxValue="Foxes"
    fieldClass="error boxed">
  </aa-checkbox>
  <div class="error" role="alert">Please select at least one option</div>
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
