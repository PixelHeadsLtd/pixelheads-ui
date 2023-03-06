import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-page-two',
  templateUrl: './tab-page-two.component.html',
  styleUrls: ['./tab-page-two.component.scss']
})
export class TabPageTwoComponent implements OnInit {

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
