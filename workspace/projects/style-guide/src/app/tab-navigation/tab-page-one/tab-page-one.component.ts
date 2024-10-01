import { TooltipDynamicPosition } from '@angloamerican/components';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab-page-one',
  templateUrl: './tab-page-one.component.html',
  styleUrls: ['./tab-page-one.component.scss']
})
export class TabPageOneComponent {

  TooltipDynamicPosition=TooltipDynamicPosition;

  showNestedOne: boolean = false;
  showNestedTwo: boolean = false;
  showNestedThree: boolean = false;
  showBodyOne: boolean = false;
  showBodyTwo: boolean = false;
  showBodyThree: boolean = false;
  showBodyFour: boolean = false;
  showBodyFive: boolean = false;

  onClick() {
    console.log('You clicked');
  }

  constructor() { }

}
