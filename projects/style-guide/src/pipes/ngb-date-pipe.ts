import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
    name: 'NGBDateFormatPipe',
})
export class NGBDateFormatPipe implements PipeTransform {
    transform(value: string|null) {
        const datePipe = new DatePipe('en-US');
        value = datePipe.transform(value, 'dd MMM yyyy');
        return value;
    }
}
