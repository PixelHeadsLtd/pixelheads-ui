import { Component } from '@angular/core';
import { ITooltipAngularComp } from 'ag-grid-angular';
import { ITooltipParams } from 'ag-grid-community';

@Component({
  selector: 'tooltip-component',
  template: 
    `<div class="custom-tooltip box-shadow-strong">
    <p><strong class="boxed">{{ data.athlete }}</strong></p>
    <p><span>Country: </span>{{ data.country }}</p>
    <p><span>Total: </span>{{ data.total }}</p>
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
export class CustomTooltipComponent implements ITooltipAngularComp {
  params: { 
    } & ITooltipParams;
  data: any;
  agInit(params: { 
    } & ITooltipParams): void {
    this.data = params.api.getDisplayedRowAtIndex(params.rowIndex).data;
  }
}