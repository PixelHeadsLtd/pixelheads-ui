import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
    name: 'DateFormatPipe',
})
export class DateFormatPipe implements PipeTransform {
    transform(value: string) {
        const datePipe = new DatePipe('en-US');
        value = datePipe.transform(value, 'EEEE d MMMM y');
        return value;
    }
}
