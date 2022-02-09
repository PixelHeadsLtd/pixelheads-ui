import { Component, OnInit } from '@angular/core';
import { InfoPanel } from '../class/info-panel';

@Component({
  selector: 'app-info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.scss']
})
export class InfoPanelComponent implements OnInit {
  
  showMore: boolean;
  showMoreTwo: boolean;
  // statuses
  approvedForward: boolean;
  pendingForward: boolean;
  rejectedForward: boolean;
  withdrawnForward: boolean;
  returnedForward: boolean;
  abandonedForward: boolean;
  withdrawalPendingForward: boolean;
  draftForward: boolean;
  resetAll: boolean;
  
  toggleLayers: string;
  showInfoPanel: boolean;
  showInfoPanelStacked: boolean;
  public panelOneIndex: number;
  public panelTwoIndex: number;
  public panelThreeIndex: number;
  public panelFourIndex: number;
  public panelFiveIndex: number;
  
  constructor() { }
  
  panelOneClicked(index: number) {
    this.panelOneIndex = index;
  }
  
  panelTwoClicked(index: number) {
    this.panelTwoIndex = index;
  }
  
  panelThreeClicked(index: number) {
    this.panelThreeIndex = index;
  }
  
  panelFourClicked(index: number) {
    this.panelFourIndex = index;
  }
  
  panelFiveClicked(index: number) {
    this.panelFiveIndex = index;
  }
  
  infoPanelItemsOne: InfoPanel[] = [
    new InfoPanel('approved', 'business', 'Business address', 'done', '200005878M', 'thumb_up', 'create'),
    new InfoPanel('pending', 'business', 'Business address', 'error_outline', '700090978Z', 'thumb_up', 'create'),
  ];
  
  infoPanelItemsTwo: InfoPanel[] = [
    new InfoPanel('pending', 'tag', 'Business registration number', 'error_outline', '200005878M', 'thumb_up', 'create'),
    new InfoPanel('draft', 'tag', 'Business registration number', 'error_outline', '700090978Z', 'thumb_up', 'create'),
  ];
  
  infoPanelItemsThree: InfoPanel[] = [
    new InfoPanel('rejected', 'work', 'VAT number', 'error_outline', 'MR-759348-9', 'thumb_up', 'create'),
  ];
  
  infoPanelItemsFour: InfoPanel[] = [
    new InfoPanel('abandoned', 'work', 'VAT number', 'error_outline', 'MR-759348-9', 'thumb_up', 'create'),
    new InfoPanel('approved', 'work', 'VAT number', 'done', 'MR-759348-9', 'thumb_up', 'create'),
  ];
  
  infoPanelItemsFive: InfoPanel[] = [
    new InfoPanel('rejected', 'work', 'VAT number', 'error_outline', 'MR-759348-9', 'thumb_up', 'create'),
    new InfoPanel('approved', 'work', 'VAT number', 'done', 'MR-759348-9', 'thumb_up', 'create'),
  ];
  
  infoOne = this.infoPanelItemsOne[0];
  infoTwo = this.infoPanelItemsTwo[0];
  infoThree = this.infoPanelItemsThree[0];
  infoFour = this.infoPanelItemsFour[0];
  infoFive = this.infoPanelItemsFive[0];
  
  infoPanelHTML =
  `<aa-info-panel 
  [panelWidth]="'20'" 
  [panelStatus]="'info'"
>
  <ng-container custom-header>
    <section class="flex-group space-between">
      <div class="flex-group flex-start flex-align-center">
        <div class="material-icons">qr_code</div>
        <h3>Your title...</h3>
      </div>
      <div class="material-icons">error_outline</div>
    </section>
  </ng-container>
  <ng-container custom-content>
    <p>
      Your content...
    </p>
  </ng-container>
  <ng-container custom-footer>
    <div class="flex-group flex-end">
      <button class="material-icons aa-light-blue-100">create</button>
      <div class="material-icons">done</div>
    </div>
  </ng-container>
</aa-info-panel>`;

infoPanelStackedHTML = 
`<div class="flex-group flex-start">
<!--Note - wrapperWidth and wrapperHeight must be 1rem bigger than nested info-panel-->
<aa-info-panel-stacked
  [approvedForward]="approvedForward"
  [pendingForward]="approvedForward"
  [rejectedForward]="rejectedForward"
  [withdrawnForward]="withdrawnForward"
  [returnedForward]="returnedForward"
  [abandonedForward]="abandonedForward"
  [widthdrawnForward]="widthdrawnForward"
  [withdrawnPendingForward]="withdrawnPendingForward"
  [draftForward]="draftForward"
  [resetAll]="resetAll"
  wrapperWidth="21"
  wrapperHeight="13.5"
>
  <aa-info-panel panelWidth="20" panelHeight="12.5" panelStatus="success"></aa-info-panel>
  <aa-info-panel panelWidth="20" panelHeight="12.5" panelStatus="warning"></aa-info-panel>
</aa-info-panel-stacked>
</div>

<!-- USE BELOW FOR PULL PAGE VERSION -->
<aa-info-panel-stacked
[fullWidth]="true"
wrapperHeight="23"
>
<aa-info-panel 
  *ngFor="let p of infoPanelItemsOne; let i = index"
  (click)="panelOneClicked(i)" 
  [ngClass]="{'selected' : panelOneIndex===i}"
  [preventOpacity]="false"
  panelWidth="20" 
  panelHeight="12.5" 
  panelStatus="{{p.panelStatus}}"
>
  <ng-container custom-header>
    <section class="flex-group space-between">
      <div class="flex-group flex-start flex-align-center">
        <div class="material-icons">{{i.headerIconOne}}</div>
        <h3>{{i.headerTitle}}</h3>
      </div>
      <div class="flex-group flex-end">
        <div class="alert-shield pending-red small">In progress</div>
        <button class="material-icons aa-light-blue-100">create</button>
      </div>
    </section>
  </ng-container>
  <ng-container custom-content>
  <section class="padding-x-2">
      <div class="flex-group margin-bottom-1">
        <div>
          <h3 class="flex-group flex-start flex-align-center">
            <strong>Counterparty legal name</strong>
            <div class="material-icons">visibility</div>
          </h3>
          <p>Singapore Exchange Derivatives<br/>
            Clearing Limites</p>
        </div>
      </div>
  </section>
  </ng-container>
</aa-info-panel>
</aa-info-panel-stacked>`;
  
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
