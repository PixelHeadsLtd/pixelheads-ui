import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngx-quill',
  templateUrl: './ngx-quill.component.html',
  styleUrls: ['./ngx-quill.component.scss']
})
export class NgxQuillComponent {

  html: '';
  showEditor: boolean;
  popupPosition: string = 'display-top-right';
  toggleBlade: boolean;
  areYouSure: boolean;
  showOnH1: boolean;
  showOnH2: boolean;
  showOnH3: boolean;
  showOnH4: boolean;
  showOnLabel: boolean;
  showOnButton: boolean;
  showOnAlert: boolean;
  showOnCheckBoxOne: boolean;
  showOnCheckBoxTwo: boolean;
  showOnTextarea: boolean;
  showOnPara: boolean;
  showOnSelect: boolean;
  showOnShield: boolean;
  fullScreen: boolean;

  constructor() {}

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

}
