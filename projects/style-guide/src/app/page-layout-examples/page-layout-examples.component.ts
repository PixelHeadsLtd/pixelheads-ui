import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-layout-examples',
  templateUrl: './page-layout-examples.component.html',
  styleUrls: ['./page-layout-examples.component.scss']
})
export class PageLayoutExamplesComponent implements OnInit {

  yourValidationLogic: boolean = true;
  copyOne: boolean;
  copyTwo: boolean;
  copyThree: boolean;
  copyFour: boolean;
  copyFive: boolean;
  copySix: boolean;
  toggleBlade: boolean;

  constructor() { }

  copyOneHTML = `<!-- Every page needs to have a .control-bar -->
<section class="control-bar">
  <aa-anchor-back anchorBackText="Previous page heading"></aa-anchor-back>
  <h1>Page heading</h1>
</section>

<!-- Your page content needs to be nested inside the .content-container -->
<section class="content-container">
  <h2 class="boxed">Your section heading</h2>
  Your section content...
</section>`;

copyTwoHTML = `<!-- Every page needs to have a .control-bar -->
<section class="control-bar">
  <aa-anchor-back anchorBackText="Previous page heading"></aa-anchor-back>
  <h1>Page heading</h1>
</section>

<!-- Your page content needs to be nested inside the .content-container -->
<section class="content-container">
  <form name="myVerticalForm">
      <h2 class="boxed">Your section heading</h2>
      <!-- add the error class to the below filed with [class.error]="yourValidationLogic" -->
      <div class="field error">
        <label for="forename">Forename</label>
        <input type="text" />
        <div role="alert">Use an *ngIf to display this error</div>
      </div>
      <div class="field">
        <label class="optional" for="middlename">Middle name</label>
        <input type="text" placeholder="All fields are mandatory by default. If optional add the .optional class to the label" />
      </div>
      <!-- add the error class to the below filed with [class.error]="yourValidationLogic" -->
      <div class="field error">
        <label for="lastname">Last name</label>
        <input type="text" />
        <div role="alert">Use an *ngIf to display this error</div>
      </div>
      <!-- add the error class to the below filed with [class.error]="yourValidationLogic" -->
      <div class="field error">
        <label>Addresss</label>
        <textarea name="address" rows="4" cols="50"></textarea>
        <div role="alert">Use an *ngIf to display this error</div>
      </div>
      <div class="flex-group flex-start">
      <!-- add the error class to the below filed with [class.error]="yourValidationLogic" -->
      <div class="field error">
          <label for="date">Date</label>
          <div class="date-picker">
              <input type="text" name="mydatepicker" id="myId" placeholder="dd-mon-yyyy" />
              <button class="material-icons">date_range</button>
          </div>
          <div role="alert">Use an *ngIf to...</div>
      </div>
      <!-- add the error class to the below filed with [class.error]="yourValidationLogic" -->
      <div class="field error">
          <label for="contactnumber">Contact number</label>
          <input type="text" />
          <div role="alert">Use an *ngIf to...</div>
      </div>
      </div>
      <div class="flex-group flex-start">
          <aa-button 
              (click)="onClick()" 
              buttonClass="cancel" 
              fieldClass="label-transparent" 
              buttonId="buttonId" 
              buttonLabel=""
              buttonText="Cancel" 
              disabled="">
          </aa-button>
          <aa-button 
              (click)="onClick()" 
              buttonClass="primary" 
              fieldClass="label-transparent" 
              buttonId="buttonId" 
              buttonLabel=""
              buttonText="Save" 
              disabled="">
          </aa-button>
      </div>
  </form>
</section>`;

copyThreeHTML = `<!-- Every page needs to have a .control-bar -->
<section class="control-bar">
  <aa-anchor-back anchorBackText="Previous page heading"></aa-anchor-back>
  <h1>Page heading</h1>
</section>

<!-- Your page content needs to be nested inside the .content-container -->
<section class="content-container">
  <h2 class="boxed">Your section heading</h2>
  <form class="flex-group flex-start" name="myVerticalForm">
    <section>
    <!-- add the error class to the below filed with [class.error]="yourValidationLogic" -->
      <div class="field error">
        <label for="forename">Forename</label>
        <input type="text" />
        <div role="alert">Use an *ngIf to display this error</div>
      </div>
      <!-- add the error class to the below filed with [class.error]="yourValidationLogic" -->
      <div class="field error">
        <label class="optional" for="middlename">Middle name</label>
        <input type="text" placeholder="All fields are mandatory by default. If optional add the .optional class to the label" />
        <div role="alert">Use an *ngIf to display this error</div>
      </div>
      <!-- add the error class to the below filed with [class.error]="yourValidationLogic" -->
      <div class="field error">
        <label for="lastname">Last name</label>
        <input type="text" />
        <div role="alert">Use an *ngIf to display this error</div>
      </div>
    </section>

    <section>
      <!-- add the error class to the below filed with [class.error]="yourValidationLogic" -->
      <div class="field error">
        <label for="date">Date</label>
        <div class="date-picker">
          <input type="text" name="mydatepicker" id="myId" placeholder="dd-mon-yyyy" />
          <button class="material-icons">date_range</button>
          </div>
          <div role="alert">Use an *ngIf to...</div>
        </div>
      <!-- add the error class to the below filed with [class.error]="yourValidationLogic" -->
      <div class="field error">
        <label for="contactnumber">Contact number</label>
        <input type="text" />
        <div role="alert">Use an *ngIf to...</div>
      </div>
      <!-- add the error class to the below filed with [class.error]="yourValidationLogic" -->
      <div class="field error">
        <label for="contactnumber">Your reference</label>
        <input type="text" />
        <div role="alert">Use an *ngIf to...</div>
      </div>
    </section>
  </form>
</section>`;

copyFourHTML = `<!-- Every page needs to have a .control-bar -->
<section class="control-bar">
  <aa-anchor-back anchorBackText="Previous page heading"></aa-anchor-back>
  <h1>Page heading</h1>
</section>

<!-- Your page content needs to be nested inside the .content-container -->
<section class="content-container">
  <h2 class="boxed">Your section heading</h2>
  <form class="flex-group space-between" name="myVerticalForm">
    <section>
    <!-- add the error class to the below filed with [class.error]="yourValidationLogic" -->
      <div class="field error">
        <label for="forename">Forename</label>
        <input type="text" />
        <div role="alert">Use an *ngIf to display this error</div>
      </div>
      <div class="field">
        <label class="optional" for="middlename">Middle name</label>
        <input type="text" placeholder="All fields are mandatory by default. If optional add the .optional class to the label" />
      </div>
      <!-- add the error class to the below filed with [class.error]="yourValidationLogic" -->
      <div class="field error">
        <label for="lastname">Last name</label>
        <input type="text" />
        <div role="alert">Use an *ngIf to display this error</div>
      </div>
    </section>

    <section>
    <!-- add the error class to the below filed with [class.error]="yourValidationLogic" -->
      <div class="field error">
        <label for="date">Date</label>
        <div class="date-picker">
          <input type="text" name="mydatepicker" id="myId" placeholder="dd-mon-yyyy" />
          <button class="material-icons">date_range</button>
          </div>
          <div role="alert">Use an *ngIf to...</div>
        </div>
        <!-- add the error class to the below filed with [class.error]="yourValidationLogic" -->
      <div class="field error">
        <label for="contactnumber">Contact number</label>
        <input type="text" />
        <div role="alert">Use an *ngIf to...</div>
      </div>
      <!-- add the error class to the below filed with [class.error]="yourValidationLogic" -->
      <div class="field error">
        <label for="contactnumber">Your reference</label>
        <input type="text" />
        <div role="alert">Use an *ngIf to...</div>
      </div>
    </section>
  </form>
</section>`;

  copyFiveHTML = `<section class="control-bar flex-group space-between">
  <h1>Page heading</h1>
  <!-- The button for the filter sits inside the .control-bar -->
  <aa-button 
    (buttonClick)="toggleFilter=!toggleFilter" 
    fieldClass="boxed label-hidden" 
    buttonClass="secondary filter" 
    buttonText="Filter" 
    disabled="">
  </aa-button>
</section>

<!-- The filter sits between the .control-bar and the .content-container sections -->
<article class="flex-group flex-align-center space-between filter-container padding-1-25 padding-top-0">
  <div class="flex-group">
      <div class="field">
          <label>First name</label>
          <input type="text" />
      </div>
      <div class="field">
          <label>Last name</label>
          <input type="text" />
      </div>
      <div class="field">
          <label>Company name</label>
          <input type="text" />
      </div>
  </div>
  <div class="flex-group">
      <div class="field label-transparent">
          <label>Save</label>
          <button class="primary">Save</button>
      </div>
      <div class="field label-transparent">
          <label>Cancel</label>
          <button class="cancel">Cancel</button>
      </div>
  </div>
</article>

<!-- This is where you put your html that sits between the filter and ag-grid -->
<section class="content-container">
  <h2 class="boxed">Your section heading</h2>
  Your html...
</section>

<!-- Put ag-grid inside a .content-container with the additional class .grid -->
<section class="content-container grid">
  <ag-grid-angular 
    #agGrid id="myGrid"
    class="ag-theme-balham ag-grid"
    [ngStyle]="{'height' : 'calc(100vh - 26rem)'}"
    [gridOptions]="gridOptions"
    [rowData]="rowData">
  </ag-grid-angular>
</section>`;

copySixHTML = `<!-- Every page needs to have a .control-bar -->
<section class="control-bar">
  <aa-anchor-back anchorBackText="Previous page heading"></aa-anchor-back>
  <h1>Page heading</h1>
</section>

<!-- Your page content needs to be nested inside the .content-container -->
<section class="content-container">
  <form>
  <div class="flex-group flex-start margin-bottom-2">
    <!-- for wider inputs include min-width value-->
    <section class="min-width-35 flex-group">
      <!-- add the error class to the below filed with [class.error]="yourValidationLogic" -->
      <div class="field error">
          <label for="">.field</label>
          <input type="text" />
      </div>
      <!-- add the error class to the below filed with [class.error]="yourValidationLogic" -->
      <div class="field error">
          <label for="">.field</label>
          <input type="text" />
      </div>
      <!-- add the error class to the below filed with [class.error]="yourValidationLogic" -->
      <div class="field error">
          <label for="">.field</label>
          <input type="text" />
      </div>
    </section>
  </div>

  <div class="flex-group flex-start">
    <!-- for wider inputs include min-width value-->
    <section class="min-width-35 margin-right-1 border-right padding-right-1">
      <!-- add the error class to the below filed with [class.error]="yourValidationLogic" -->
      <div class="field boxed error">
          <label for="">.field</label>
          <input type="text" />
          <div role="alert">Use an *ngIf to display this error</div>
      </div>
      <!-- add the error class to the below filed with [class.error]="yourValidationLogic" -->
      <div class="field error">
          <label for="">.field</label>
          <input type="text" />
          <div role="alert">Use an *ngIf to display this error</div>
      </div>
      <!-- add the error class to the below filed with [class.error]="yourValidationLogic" -->
      <div class="field error">
          <label for="">.field</label>
          <input type="text" />
          <div role="alert">Use an *ngIf to display this error</div>
      </div>
    </section>
    <!-- for wider inputs include min-width value-->
    <section class="min-width-35">
      <!-- add the error class to the below filed with [class.error]="yourValidationLogic" -->
      <div class="field boxed error">
          <label for="">.field</label>
          <input type="text" />
          <div role="alert">Use an *ngIf to display this error</div>
      </div>
      <!-- add the error class to the below filed with [class.error]="yourValidationLogic" -->
      <div class="field error">
          <label for="">.field</label>
          <input type="text" />
          <div role="alert">Use an *ngIf to display this error</div>
      </div>
      <!-- add the error class to the below filed with [class.error]="yourValidationLogic" -->
      <div class="field error">
          <label for="">.field</label>
          <input type="text" />
          <div role="alert">Use an *ngIf to display this error</div>
      </div>
      </section>
    </div>
  </form>
</section>`;

  copyToClipboard(item): void {
    let listener = (e: ClipboardEvent) => {
        e.clipboardData.setData('text/plain', (item));
        e.preventDefault();
    };

    document.addEventListener('copy', listener);
    document.execCommand('copy');
    document.removeEventListener('copy', listener);
  }

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

  ngOnInit(): void {
  }

}
