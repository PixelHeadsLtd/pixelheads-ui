import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})

export class ButtonsComponent {

  public onClick() { console.log('You clicked the main button'); }

  selectedIcon: string = 'visibility';
  selectedColor: string = 'bg-aa-light-blue-100';
  settingsClicked: boolean;
  showBtnMenu: boolean;
  showPub: boolean;
  showPubLater: boolean;
  showCancelPub: boolean;
  buttonSplit: boolean;
  customButton: boolean;
  iconButtons: boolean;
  standardButtons: boolean;
  buttonEnriched: boolean;
  buttonSummary: boolean;
  toggleBlade: boolean;
  showOverlay: boolean;
  
  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

  selectIconHandler (event: any) {
    this.selectedIcon = event.target.value;
  }
  
  selectColorHandler (event: any) {
    this.selectedColor = event.target.value;
  }

  onSettingsClick(event) {
    event.stopPropagation();
    console.log("you clicked the settings icon");
  }
}
