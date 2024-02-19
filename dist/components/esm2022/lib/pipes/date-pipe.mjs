import { Pipe } from '@angular/core';
import { DatePipe } from '@angular/common';
import * as i0 from "@angular/core";
export class DateFormatPipe {
    transform(value) {
        const datePipe = new DatePipe('en-US');
        value = datePipe.transform(value, 'd MMMM y');
        return value;
    }
    static { this.ɵfac = function DateFormatPipe_Factory(t) { return new (t || DateFormatPipe)(); }; }
    static { this.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "DateFormatPipe", type: DateFormatPipe, pure: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DateFormatPipe, [{
        type: Pipe,
        args: [{
                name: 'DateFormatPipe',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL3BpcGVzL2RhdGUtcGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBSzNDLE1BQU0sT0FBTyxjQUFjO0lBQ3pCLFNBQVMsQ0FBQyxLQUFvQjtRQUM1QixNQUFNLFFBQVEsR0FBRyxJQUFJLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2QyxLQUFLLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDOUMsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOytFQUxVLGNBQWM7d0ZBQWQsY0FBYzs7aUZBQWQsY0FBYztjQUgxQixJQUFJO2VBQUM7Z0JBQ0osSUFBSSxFQUFFLGdCQUFnQjthQUN2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdEYXRlRm9ybWF0UGlwZScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXRlRm9ybWF0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nIHwgbnVsbCkge1xyXG4gICAgY29uc3QgZGF0ZVBpcGUgPSBuZXcgRGF0ZVBpcGUoJ2VuLVVTJyk7XHJcbiAgICB2YWx1ZSA9IGRhdGVQaXBlLnRyYW5zZm9ybSh2YWx1ZSwgJ2QgTU1NTSB5Jyk7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfVxyXG59XHJcbiJdfQ==