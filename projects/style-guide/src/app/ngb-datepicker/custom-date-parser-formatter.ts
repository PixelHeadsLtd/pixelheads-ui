import { Injectable } from '@angular/core';
import { formatDate } from '@angular/common';
import { NgbDateStruct, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';

@Injectable()
export class CustomDateParserFormatter extends NgbDateParserFormatter {
	readonly DT_FORMAT = 'DD-MMM-YYYY';

    parse(value: string): NgbDateStruct|null {
        if (!value) {
          return null;
        }
        const mdt = moment(value, this.DT_FORMAT);
        return { year: mdt.year(), month: mdt.month(), day: mdt.day() };
      }

      format(ngbDate: NgbDateStruct): string {
        if (!ngbDate) {
          return '';
        }
        const date = new Date(ngbDate.year, ngbDate.month - 1, ngbDate.day);
        return formatDate(date, 'dd-MMM-yyyy', 'en-GB');
      }
}
