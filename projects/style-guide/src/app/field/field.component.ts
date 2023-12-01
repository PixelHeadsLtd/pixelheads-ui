import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {
  
  showField: boolean;
  showFieldSmall: boolean;
  showFieldInline: boolean;
  showFieldInlineForm: boolean;
  toggleBlade: boolean;
  isError: boolean = true;

  constructor() { }

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

  ngOnInit() {
  }

}
