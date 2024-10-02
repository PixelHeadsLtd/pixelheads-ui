import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'DateFormatPipe',
})
export class DateFormatPipe implements PipeTransform {
  transform(value: string | null) {
    if (!value) return ''; // handle null or undefined values
    const datePipe = new DatePipe('en-US');
    value = datePipe.transform(value, 'd MMMM y, HH:mm');
    return value;
  }
}