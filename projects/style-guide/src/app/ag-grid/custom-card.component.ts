import { Component } from '@angular/core';
import { ITooltipAngularComp } from 'ag-grid-angular';
import { ITooltipParams } from 'ag-grid-community';

@Component({
  selector: 'card-component',
  template:
    `<article
          class="aa-card flex-group"
          style="
            z-index : 999999;
            top: -2.5rem;
            left : 1.5rem;
            right : auto;
          "
        >
        <section class="card-image fingerprint border-light">
          <img onerror="this.style.display='none'" src="./assets/images/samples/obi-wan.png">
        </section>
        <section>
          <h3 class="margin-top-0-5" title="Obi-Wan">{{data?.athlete}}</h3>
          <p title="Jedi Master">{{data?.sport}}</p>
          <div class="aa-toolbar flex-group space-between">
              <div>&nbsp;</div>
              <div class="flag gb margin-right-0-5"></div>
          </div>
        </section>
      </article>`,
  styles: [
    `
      :host {
        position: absolute;
        pointer-events: none;
        transition: opacity 1s;
      }
      :host.ag-tooltip-hiding {
        opacity: 0;
      }
    `,
  ],
})
export class CustomCardComponent implements ITooltipAngularComp {
  params: ({} & ITooltipParams) | undefined;
  data: any;
  agInit(params: {} & ITooltipParams): void {
    if(params?.rowIndex)
    {
      this.data = params.api.getDisplayedRowAtIndex(params.rowIndex)?.data;
    }
  }
}
