import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-page-four',
  templateUrl: './tab-page-four.component.html',
  styleUrls: ['./tab-page-four.component.scss']
})
export class TabPageFourComponent implements OnInit {

  imgPath = "./assets/images/samples/obi-wan.png"

  constructor() { }

  ngOnInit(): void {
  }

}
