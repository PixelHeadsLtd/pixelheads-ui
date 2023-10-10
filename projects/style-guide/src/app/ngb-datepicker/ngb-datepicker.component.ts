import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngb-datepicker',
  templateUrl: './ngb-datepicker.component.html',
  styleUrls: ['./ngb-datepicker.component.scss']
})
export class NgbDatepickerComponent implements OnInit {

  showPopup: boolean;
  dateVal: string = '04 May 2023';

  clearDate() {
    this.dateVal = '';
  }

  constructor() { }

  ngOnInit() {
  }

}
