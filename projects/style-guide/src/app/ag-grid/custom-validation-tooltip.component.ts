import { Component } from '@angular/core';
import { ITooltipAngularComp } from 'ag-grid-angular';
import { ITooltipParams } from 'ag-grid-community';

@Component({
  selector: 'tooltip-component',
  template:
    `<div class="custom-tooltip box-shadow-strong bd-2 bd-red bd-solid aa-red-100">
    <p><strong class="boxed">{{ data.athlete }}</strong></p>
    <p class="aa-red-100">
      <strong>Incorrect date format</strong><br/>
      Should be <strong>dd Mon yyyy</strong><br/>for example <strong>12 Aug 2008</strong>
    </p>
  </div>`,
  styles: [
    `
      :host {
        position: absolute;
        min-width: 150px;
        pointer-events: none;
        transition: opacity 1s;
      }
      :host.ag-tooltip-hiding {
        opacity: 0;
      }
    `,
  ],
})
export class CustomValidationTooltipComponent implements ITooltipAngularComp {
  params: {
    } & ITooltipParams;
  data: any;
  agInit(params: {
    } & ITooltipParams): void {
    this.data = params.api.getDisplayedRowAtIndex(params.rowIndex).data;
  }
}
