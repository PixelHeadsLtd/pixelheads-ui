import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-spinner-page',
  templateUrl: './loading-spinner-page.component.html',
  styleUrls: ['./loading-spinner-page.component.scss']
})
export class LoadingSpinnerPageComponent implements OnInit {

  toggleBlade: boolean;

  constructor() { }

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

  ngOnInit() {
  }

}
