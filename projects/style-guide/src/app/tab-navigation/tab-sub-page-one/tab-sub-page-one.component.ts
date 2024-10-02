import { Component } from '@angular/core';

@Component({
  selector: 'app-tab-sub-page-one',
  templateUrl: './tab-sub-page-one.component.html',
  styleUrls: ['./tab-sub-page-one.component.scss']
})
export class TabSubPageOneComponent {

  showNestedOne: boolean = false;
  showNestedTwo: boolean = false;
  showNestedThree: boolean = false;
  showBodyOne: boolean = false;
  showBodyTwo: boolean = false;
  showBodyThree: boolean = false;
  showBodyFour: boolean = false;

  constructor() { }
}
