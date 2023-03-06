import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-sub-page-two',
  templateUrl: './tab-sub-page-two.component.html',
  styleUrls: ['./tab-sub-page-two.component.scss']
})
export class TabSubPageTwoComponent implements OnInit {

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
