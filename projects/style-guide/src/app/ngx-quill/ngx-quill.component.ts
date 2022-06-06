import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngx-quill',
  templateUrl: './ngx-quill.component.html',
  styleUrls: ['./ngx-quill.component.scss']
})
export class NgxQuillComponent {

  html: '';
  showEditor: boolean;
  showCSH: boolean;
  popupPosition: string = 'display-top-right';
  toggleBlade: boolean;
  areYouSure: boolean;

  constructor() {}

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

}
