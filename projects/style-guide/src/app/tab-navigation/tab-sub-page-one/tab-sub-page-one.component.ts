import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-sub-page-one',
  templateUrl: './tab-sub-page-one.component.html',
  styleUrls: ['./tab-sub-page-one.component.scss']
})
export class TabSubPageOneComponent implements OnInit {

  showNestedOne: boolean;
  showNestedTwo: boolean;
  showNestedThree: boolean;
  showBodyOne: boolean;
  showBodyTwo: boolean;
  showBodyThree: boolean;
  showBodyFour: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
