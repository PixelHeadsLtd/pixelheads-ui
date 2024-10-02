import { Component } from '@angular/core';
import { NgbDatepicker, NgbDateStruct, NgbDateAdapter, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
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
  showDatePicker: boolean = false;
  showDatePickerMonth: boolean = false;
  model?: NgbDateStruct;

  navigate(datepicker: NgbDatepicker, number: number) {
		const { state, calendar } = datepicker;
		datepicker.navigateTo(calendar.getNext(state.firstDate, 'm', number));
	}

	today(datepicker: NgbDatepicker) {
		const { calendar } = datepicker;
		datepicker.navigateTo(calendar.getToday());
	}

	constructor() {}

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
    }
}
