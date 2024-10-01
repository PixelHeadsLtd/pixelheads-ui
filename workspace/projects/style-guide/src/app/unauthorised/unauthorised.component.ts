import { Component } from '@angular/core';

@Component({
  selector: 'app-unauthorised',
  templateUrl: './unauthorised.component.html',
  styleUrls: ['./unauthorised.component.scss']
})
export class UnauthorisedComponent {

  toggleBlade: boolean = false;

  constructor() {}

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }
}
