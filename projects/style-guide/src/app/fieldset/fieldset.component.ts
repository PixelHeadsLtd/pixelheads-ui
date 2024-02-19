import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fieldset',
  templateUrl: './fieldset.component.html',
})
export class FieldsetComponent {

  myRadios?: string;
  myRadios2?: string;
  toggleBlade: boolean = false;

  constructor() { }

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

}
