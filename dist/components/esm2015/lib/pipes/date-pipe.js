import { Pipe } from '@angular/core';
import { DatePipe } from '@angular/common';
export class DateFormatPipe {
    transform(value) {
        const datePipe = new DatePipe('en-US');
        value = datePipe.transform(value, 'd MMMM y');
        return value;
    }
}
DateFormatPipe.decorators = [
    { type: Pipe, args: [{
                name: 'DateFormatPipe',
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL3BpcGVzL2RhdGUtcGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFLM0MsTUFBTSxPQUFPLGNBQWM7SUFDdkIsU0FBUyxDQUFDLEtBQWE7UUFDbkIsTUFBTSxRQUFRLEdBQUcsSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQzlDLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7OztZQVJKLElBQUksU0FBQztnQkFDRixJQUFJLEVBQUUsZ0JBQWdCO2FBQ3pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5AUGlwZSh7XHJcbiAgICBuYW1lOiAnRGF0ZUZvcm1hdFBpcGUnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0ZUZvcm1hdFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgZGF0ZVBpcGUgPSBuZXcgRGF0ZVBpcGUoJ2VuLVVTJyk7XHJcbiAgICAgICAgdmFsdWUgPSBkYXRlUGlwZS50cmFuc2Zvcm0odmFsdWUsICdkIE1NTU0geScpO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxufVxyXG4iXX0=