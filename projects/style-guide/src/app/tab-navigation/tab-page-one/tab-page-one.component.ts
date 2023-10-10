import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-page-one',
  templateUrl: './tab-page-one.component.html',
  styleUrls: ['./tab-page-one.component.scss']
})
export class TabPageOneComponent implements OnInit {

  showNestedOne: boolean;
  showNestedTwo: boolean;
  showNestedThree: boolean;
  showBodyOne: boolean;
  showBodyTwo: boolean;
  showBodyThree: boolean;
  showBodyFour: boolean;
  showBodyFive: boolean;

  onClick() {
    console.log('You clicked');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
