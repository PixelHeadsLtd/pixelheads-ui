import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  showFilterGradient: boolean  = false;
  myRadios: string = '';
  toggleFilter: boolean = false;
  toggleBlade: boolean = false;
  showFilter: boolean = false;
  showFilterLeft: boolean = false;

  parentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.parentForm = this.fb.group({
      // Define your form controls here
    });
  }

  onClick() {
    console.log("You clicked")
  }

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

}
