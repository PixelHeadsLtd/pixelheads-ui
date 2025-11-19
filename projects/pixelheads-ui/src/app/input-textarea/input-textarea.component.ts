import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-textarea',
  templateUrl: './input-textarea.component.html',
  styleUrls: ['./input-textarea.component.scss']
})
export class InputTextareaComponent {

  showTextarea: boolean = false;
  showTextareaAutoresize: boolean= false;
  toggleBlade: boolean= false;

  constructor() { }

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

}
