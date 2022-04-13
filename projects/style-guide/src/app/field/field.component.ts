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
  toggleBlade: boolean;

  constructor() { }

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

  ngOnInit() {
  }

}
