import { Component } from '@angular/core';

@Component({
  selector: 'app-page-templates',
  templateUrl: './page-templates.component.html',
  styleUrls: ['./page-templates.component.scss']
})
export class PageTemplatesComponent {

  yourValidationLogic: boolean = true;
  copyOne: boolean = false;
  copyTwo: boolean = false;
  copyThree: boolean = false;
  copyFour: boolean = false;
  copyFive: boolean = false;
  copySix: boolean = false;
  copySeven: boolean = false;
  copyEight: boolean = false;
  toggleBlade: boolean = false;

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
<article class="aa-filter flex-group space-between">
<div class="flex-group flex-start">
  <div class="field">
    <label for="date">Date</label>
    <div class="date-picker">
      <input type="text" name="mydatepicker" id="myId" placeholder="dd-mon-yyyy" />
      <button class="material-icons">date_range</button>
    </div>
  </div>
  <div class="field">
    <label for="contactnumber">Contact number</label>
    <input type="text" />
  </div>
  <div class="field">
    <label for="contactnumber">Your reference</label>
    <input type="text" />
  </div>
</div>
<div class="flex-group flex-start">
  <aa-button
    (buttonClick)="onClick()"
    fieldClass=""
    buttonClass="primary"
    buttonId="ButtonId"
    [showLabel]="false"
    buttonLabel="Primary"
    buttonText=".primary"
    disabled="">
  </aa-button>
  <aa-button
    (buttonClick)="onClick()"
    fieldClass=""
    buttonClass="cancel"
    buttonId="ButtonId"
    [showLabel]="false"
    buttonLabel="Cancel"
    buttonText=".cancel"
    disabled="">
  </aa-button>
</div>
</article>

<section class="content-container grid ag-grid-full-height" [ngStyle]="{'height' : 'calc(100vh - 9rem)'}">

<div class="content-container">
  <h2 class="boxed">Your section heading</h2>
  Your other page data...
</div>

<!--
  1. You must wrap ag-grid in the 'ag-grid-wrapper'
  2. You must ensure that 'ag-grid-wrapper' is the child element of
     your overarching page 'content-container' wrapper and NOT the ancestor.
     If 'ag-grid-container' has another wrapping element such as a div or
     section etc, ag-grid will not display. If you really do need to add
     another wrapper, use an <ng-container></ng-container> element
-->

<div class="ag-grid-wrapper">
  <ag-grid-angular
    #agGrid id="myGrid"
    class="ag-theme-balham ag-grid"
    [gridOptions]="gridOptions"
    [rowData]="rowData">
  </ag-grid-angular>
</div>
</section>`;

  copySixHTML = `<section class="control-bar flex-group space-between">
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

<!-- aa-tab-navigation sits here between the .control-bar and the .content-container sections -->
<nav>
  aa-tab-navigation sits here...
</nav>

<!-- The filter sits between the .control-bar and the .content-container sections -->
<article class="aa-filter flex-group space-between">
<div class="flex-group flex-start">
  <div class="field">
    <label for="date">Date</label>
    <div class="date-picker">
      <input type="text" name="mydatepicker" id="myId" placeholder="dd-mon-yyyy" />
      <button class="material-icons">date_range</button>
    </div>
  </div>
  <div class="field">
    <label for="contactnumber">Contact number</label>
    <input type="text" />
  </div>
  <div class="field">
    <label for="contactnumber">Your reference</label>
    <input type="text" />
  </div>
</div>
<div class="flex-group flex-start">
  <aa-button
    (buttonClick)="onClick()"
    fieldClass=""
    buttonClass="primary"
    buttonId="ButtonId"
    [showLabel]="false"
    buttonLabel="Primary"
    buttonText=".primary"
    disabled="">
  </aa-button>
  <aa-button
    (buttonClick)="onClick()"
    fieldClass=""
    buttonClass="cancel"
    buttonId="ButtonId"
    [showLabel]="false"
    buttonLabel="Cancel"
    buttonText=".cancel"
    disabled="">
  </aa-button>
</div>
</article>

<section class="content-container grid ag-grid-full-height" [ngStyle]="{'height' : 'calc(100vh - 9rem)'}">

<div class="content-container">
  <h2 class="boxed">Your section heading</h2>
  Your other page data...
</div>

<!--
  1. You must wrap ag-grid in the 'ag-grid-wrapper'
  2. You must ensure that 'ag-grid-wrapper' is the child element of
     your overarching page 'content-container' wrapper and NOT the ancestor.
     If 'ag-grid-container' has another wrapping element such as a div or
     section etc, ag-grid will not display. If you really do need to add
     another wrapper, use an <ng-container></ng-container> element
-->

<div class="ag-grid-wrapper">
  <ag-grid-angular
    #agGrid id="myGrid"
    class="ag-theme-balham ag-grid"
    [gridOptions]="gridOptions"
    [rowData]="rowData">
  </ag-grid-angular>
</div>
</section>`;

  copySevenHTML = `<!-- Every page needs to have a .control-bar -->
<section class="control-bar">
  <aa-anchor-back anchorBackText="Previous page heading"></aa-anchor-back>
  <h1>Page heading</h1>
</section>

<!-- Your page content needs to be nested inside the .content-container -->
<section class="content-container">
  <form>
    <div class="flex-group flex-start">
      <!-- add the error class to the below field with [class.error]="yourValidationLogic" -->
      <div class="field error">
        <label for="">.field</label>
        <input type="text" />
      </div>
      <!-- add the error class to the below field with [class.error]="yourValidationLogic" -->
      <div class="field error">
        <label for="">.field</label>
        <input type="text" />
      </div>
      <aa-button (buttonClick)="onClick()" fieldClass="" buttonClass="primary" buttonId="ButtonId" [showLabel]="false"
        buttonLabel="Primary" buttonText=".primary" disabled="">
      </aa-button>
    </div>

    <div class="flex-group flex-start margin-top-2">
      <div>
        <!-- add the error class to the below field with [class.error]="yourValidationLogic" -->
        <div class="field error">
          <label for="date">Date</label>
          <div class="date-picker">
            <input type="text" name="mydatepicker" id="myId" placeholder="dd-mon-yyyy" />
            <button class="material-icons">date_range</button>
          </div>
          <div role="alert">Use an *ngIf to...</div>
        </div>
        <!-- add the error class to the below field with [class.error]="yourValidationLogic" -->
        <div class="field error">
          <label for="contactnumber">Contact number</label>
          <input type="text" />
          <div role="alert">Use an *ngIf to...</div>
        </div>
        <!-- add the error class to the below field with [class.error]="yourValidationLogic" -->
        <div class="field error">
          <label for="contactnumber">Your reference</label>
          <input type="text" />
          <div role="alert">Use an *ngIf to...</div>
        </div>

        <aa-button (buttonClick)="onClick()" fieldClass="label-hidden" buttonClass="primary" buttonId="ButtonId"
          [showLabel]="false" buttonLabel="Primary" buttonText=".primary" disabled="">
        </aa-button>
      </div>
      <div>
        <!-- add the error class to the below field with [class.error]="yourValidationLogic" -->
        <div class="field error">
          <label for="date">Date</label>
          <div class="date-picker">
            <input type="text" name="mydatepicker" id="myId" placeholder="dd-mon-yyyy" />
            <button class="material-icons">date_range</button>
          </div>
          <div role="alert">Use an *ngIf to...</div>
        </div>
        <!-- add the error class to the below field with [class.error]="yourValidationLogic" -->
        <div class="field error">
          <label for="contactnumber">Contact number</label>
          <input type="text" />
          <div role="alert">Use an *ngIf to...</div>
        </div>
        <!-- add the error class to the below field with [class.error]="yourValidationLogic" -->
        <div class="field error">
          <label for="contactnumber">Your reference</label>
          <input type="text" />
          <div role="alert">Use an *ngIf to...</div>
        </div>
      </div>
    </div>
  </form>
</section>`;

  copyEightHTML = `<!-- Every page needs to have a .control-bar -->
<section class="control-bar">
  <aa-anchor-back anchorBackText="Previous page heading"></aa-anchor-back>
  <h1>Page heading</h1>
</section>

<!-- The filter sits between the .control-bar and the .content-container sections -->
<article class="aa-filter flex-group space-between">
  <div class="flex-group flex-start">
    <div class="field">
      <label for="date">Date</label>
      <div class="date-picker">
        <input type="text" name="mydatepicker" id="myId" placeholder="dd-mon-yyyy" />
        <button class="material-icons">date_range</button>
      </div>
    </div>
    <div class="field">
      <label for="contactnumber">Contact number</label>
      <input type="text" />
    </div>
    <div class="field">
      <label for="contactnumber">Your reference</label>
      <input type="text" />
    </div>
  </div>
  <div class="flex-group flex-start">
    <aa-button
      (buttonClick)="onClick()"
      fieldClass=""
      buttonClass="primary"
      buttonId="ButtonId"
      [showLabel]="false"
      buttonLabel="Primary"
      buttonText=".primary"
      disabled="">
    </aa-button>
    <aa-button
      (buttonClick)="onClick()"
      fieldClass=""
      buttonClass="cancel"
      buttonId="ButtonId"
      [showLabel]="false"
      buttonLabel="Cancel"
      buttonText=".cancel"
      disabled="">
    </aa-button>
  </div>
</article>

<!-- Your page content needs to be nested inside the .content-container -->
<section class="content-container">
  <form>
    <div>
      <!-- add the error class to the below field with [class.error]="yourValidationLogic" -->
      <div class="field error">
        <label for="date">Date</label>
        <div class="date-picker">
          <input type="text" name="mydatepicker" id="myId" placeholder="dd-mon-yyyy" />
          <button class="material-icons">date_range</button>
        </div>
        <div role="alert">Use an *ngIf to...</div>
      </div>
      <!-- add the error class to the below field with [class.error]="yourValidationLogic" -->
      <div class="field error">
        <label for="contactnumber">Contact number</label>
        <input type="text" />
        <div role="alert">Use an *ngIf to...</div>
      </div>
      <!-- add the error class to the below field with [class.error]="yourValidationLogic" -->
      <div class="field error">
        <label for="contactnumber">Your reference</label>
        <input type="text" />
        <div role="alert">Use an *ngIf to...</div>
      </div>

      <aa-button (buttonClick)="onClick()" fieldClass="label-hidden" buttonClass="primary" buttonId="ButtonId"
        [showLabel]="false" buttonLabel="Primary" buttonText=".primary" disabled="">
      </aa-button>
    </div>
  </form>
</section>`;

  copyToClipboard(item: any): void {
    let listener = (e: ClipboardEvent) => {
      e.clipboardData?.setData('text/plain', (item));
      e.preventDefault();
    };

    document.addEventListener('copy', listener);
    document.execCommand('copy');
    document.removeEventListener('copy', listener);
  }

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }
}
