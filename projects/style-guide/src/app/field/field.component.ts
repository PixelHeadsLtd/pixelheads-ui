import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent {

  showField: boolean = false;
  showFieldSmall: boolean = false;
  showFieldInline: boolean = false;
  showFieldInlineForm: boolean = false;
  toggleBlade: boolean = false;
  isError: boolean = true;

  constructor() { }

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

}
