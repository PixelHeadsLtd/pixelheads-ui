import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})

export class ButtonsComponent {
  selectedIcon: string = 'visibility';
  selectedColor: string = 'bg-ph-light-blue-100';
  settingsClicked: boolean = false;
  showBtnMenu: boolean = false;
  showPub: boolean = false;
  showPubLater: boolean = false;
  showCancelPub: boolean = false;
  showButtonClick: boolean = false;
  buttonSplit: boolean = false;
  customButton: boolean = false;
  iconButtons: boolean = false;
  standardButtons: boolean = false;
  buttonEnriched: boolean = false;
  toggleBlade: boolean = false;
  buttonSummary: boolean = false;
  showOverlay: boolean = false;
  buttonDayPick: boolean = false;
  monActive: boolean = false;
  tueActive: boolean = false;
  wedActive: boolean = false;
  thuActive: boolean = false;
  friActive: boolean = false;
  satActive: boolean = false;
  sunActive: boolean = false;

  onClick() {
    console.log('You clicked the main button');
    this.showButtonClick = true;
    this.showPub = false;
    this.showCancelPub = false;
    this.showPubLater = false;
  }

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

  selectIconHandler (event: any) {
    this.selectedIcon = event.target.value;
  }

  selectColorHandler (event: any) {
    this.selectedColor = event.target.value;
  }

  onSettingsClick(event: any) {
    event.stopPropagation();
    console.log("you clicked the settings icon");
  }
}
