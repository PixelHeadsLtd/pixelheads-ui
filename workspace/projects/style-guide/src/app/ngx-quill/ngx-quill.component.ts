import { Component } from '@angular/core';

@Component({
  selector: 'app-ngx-quill',
  templateUrl: './ngx-quill.component.html',
  styleUrls: ['./ngx-quill.component.scss']
})
export class NgxQuillComponent {

  html = '';
  showEditor: boolean = false;
  popupPosition: string = 'display-top-right';
  toggleBlade: boolean = false;
  areYouSure: boolean = false;
  showOnH1: boolean = false;
  showOnH2: boolean = false;
  showOnH3: boolean = false;
  showOnH4: boolean = false;
  showOnLabel: boolean = false;
  showOnButton: boolean = false;
  showOnAlert: boolean = false;
  showOnCheckBoxOne: boolean = false;
  showOnCheckBoxTwo: boolean = false;
  showOnTextarea: boolean = false;
  showOnPara: boolean = false;
  showOnSelect: boolean = false;
  showOnShield: boolean = false;
  fullScreen: boolean = false;

  constructor() {}

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

}
