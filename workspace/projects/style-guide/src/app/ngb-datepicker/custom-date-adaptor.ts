import { Injectable } from '@angular/core';
import { NgbDateStruct, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class CustomDateAdapter extends NgbDateAdapter<string> {
	readonly DT_FORMAT = '-';

	fromModel(value: string): NgbDateStruct|null  {
		if (value) {
			const date = value.split(this.DT_FORMAT);
			return {
				month: parseInt(date[0], 10),
				day: parseInt(date[1], 10),
				year: parseInt(date[2], 10),
			};
		}
		return null;
	}

	toModel(date: NgbDateStruct): string|null {
		return date ? date.month + this.DT_FORMAT + date.day + this.DT_FORMAT + date.year : null;

	}
}
