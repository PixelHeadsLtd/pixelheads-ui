import { Component } from '@angular/core';

@Component({
  selector: 'app-tab-page-two',
  templateUrl: './tab-page-two.component.html',
  styleUrls: ['./tab-page-two.component.scss']
})
export class TabPageTwoComponent {

  showNestedOne: boolean = false;
  showNestedTwo: boolean = false;
  showNestedThree: boolean = false;
  showBodyOne: boolean = false;
  showBodyTwo: boolean = false;
  showBodyThree: boolean = false;
  showBodyFour: boolean = false;

  constructor() { }
}
