import { Component } from '@angular/core';

@Component({
  selector: 'app-tab-sub-page-two',
  templateUrl: './tab-sub-page-two.component.html',
  styleUrls: ['./tab-sub-page-two.component.scss']
})
export class TabSubPageTwoComponent {

  showNestedOne: boolean = false;
  showNestedTwo: boolean = false;
  showNestedThree: boolean = false;
  showBodyOne: boolean = false;
  showBodyTwo: boolean = false;
  showBodyThree: boolean = false;
  showBodyFour: boolean = false;

  constructor() { }
}
