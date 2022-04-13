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
  panelOneIndex: number;
  panelTwoIndex: number;
  panelThreeIndex: number;
  panelFourIndex: number;
  panelFiveIndex: number;
  
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
  toggleBlade: boolean;

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

  ngOnInit() {
  }

}
