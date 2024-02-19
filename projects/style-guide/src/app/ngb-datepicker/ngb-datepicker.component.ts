import { Component } from '@angular/core';
import { NgbDateStruct, NgbDateAdapter, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { CustomDateAdapter } from './custom-date-adaptor';
import { CustomDateParserFormatter } from './custom-date-parser-formatter';

@Component({
  selector: 'app-ngb-datepicker',
  templateUrl: './ngb-datepicker.component.html',
  styleUrls: ['./ngb-datepicker.component.scss'],
  providers: [
    { provide: NgbDateAdapter, useClass: CustomDateAdapter },
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter }
  ]
})
export class NgbDatepickerComponent {

  toggleBlade: boolean = false;
  model?: NgbDateStruct;

	constructor() {}

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
    }
}
