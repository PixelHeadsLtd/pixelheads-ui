import { Component } from '@angular/core';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ngb-timepicker',
  templateUrl: './ngb-timepicker.component.html',
  styleUrl: './ngb-timepicker.component.scss'
})
export class NgbTimepickerComponent {
  toggleBlade: boolean = false;
	time: NgbTimeStruct = { hour: 13, minute: 30, second: 30 };
	seconds = true;
  
  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }
}
