import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unauthorised',
  templateUrl: './unauthorised.component.html',
  styleUrls: ['./unauthorised.component.scss']
})
export class UnauthorisedComponent implements OnInit {

  toggleBlade: boolean;

  constructor() {}

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

  ngOnInit(): void {
  }

}
