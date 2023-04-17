import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
export class CounterComponent {
    constructor() { }
    ngOnInit() {
    }
}
CounterComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-counter',
                template: "<span \r\n    class=\"\r\n    flex-group \r\n    flex-center \r\n    border-radius-50\r\n    width-1-25\r\n    height-1-25\r\n    font-size-xsmall\"\r\n    \r\n    [ngClass]=\"{\r\n        'bg-aa-light-blue-100' : countInfo,\r\n        'bg-aa-red-100' : countError, \r\n        'bg-aa-orange-100' : countWarning,\r\n        'bg-aa-green-100' : countSuccess,\r\n        'bg-aa-light-blue-15' : countInfoLight,\r\n        'bg-aa-red-10' : countErrorLight, \r\n        'bg-aa-orange-10' : countWarningLight,\r\n        'bg-aa-green-15' : countSuccessLight\r\n    }\"\r\n    >\r\n    <strong \r\n        class=\"flex-group flex-center\"\r\n        [ngClass]=\"{\r\n            'aa-white-100' : \r\n            countInfo || \r\n            countError || \r\n            countWarning || \r\n            countSuccess\r\n        }\"\r\n        >\r\n        {{ count }}\r\n    </strong>\r\n</span>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
CounterComponent.ctorParameters = () => [];
CounterComponent.propDecorators = {
    count: [{ type: Input }],
    countError: [{ type: Input }],
    countWarning: [{ type: Input }],
    countInfo: [{ type: Input }],
    countSuccess: [{ type: Input }],
    countErrorLight: [{ type: Input }],
    countWarningLight: [{ type: Input }],
    countInfoLight: [{ type: Input }],
    countSuccessLight: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvcGF0dGVybnMvY291bnRlci9jb3VudGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLHVCQUF1QixFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVFsRixNQUFNLE9BQU8sZ0JBQWdCO0lBWTNCLGdCQUFnQixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7WUFyQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixvNEJBQXVDO2dCQUV2QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7Ozs7b0JBR0UsS0FBSzt5QkFDTCxLQUFLOzJCQUNMLEtBQUs7d0JBQ0wsS0FBSzsyQkFDTCxLQUFLOzhCQUNMLEtBQUs7Z0NBQ0wsS0FBSzs2QkFDTCxLQUFLO2dDQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FhLWNvdW50ZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jb3VudGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jb3VudGVyLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIENvdW50ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBjb3VudDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGNvdW50RXJyb3I6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgY291bnRXYXJuaW5nOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGNvdW50SW5mbzogYm9vbGVhbjtcclxuICBASW5wdXQoKSBjb3VudFN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgY291bnRFcnJvckxpZ2h0OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGNvdW50V2FybmluZ0xpZ2h0OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGNvdW50SW5mb0xpZ2h0OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGNvdW50U3VjY2Vzc0xpZ2h0OiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==