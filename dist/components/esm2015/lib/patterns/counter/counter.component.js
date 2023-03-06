import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
export class CounterComponent {
    constructor() { }
    ngOnInit() {
    }
}
CounterComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-counter',
                template: "<span \n    class=\"\n    flex-group \n    flex-center \n    border-radius-50\n    width-1-25\n    height-1-25\n    font-size-xsmall\"\n    \n    [ngClass]=\"{\n        'bg-aa-light-blue-100' : countInfo,\n        'bg-aa-red-100' : countError, \n        'bg-aa-orange-100' : countWarning,\n        'bg-aa-green-100' : countSuccess,\n        'bg-aa-light-blue-15' : countInfoLight,\n        'bg-aa-red-10' : countErrorLight, \n        'bg-aa-orange-10' : countWarningLight,\n        'bg-aa-green-15' : countSuccessLight\n    }\"\n    >\n    <strong \n        class=\"flex-group flex-center\"\n        [ngClass]=\"{\n            'aa-white-100' : \n            countInfo || \n            countError || \n            countWarning || \n            countSuccess\n        }\"\n        >\n        {{ count }}\n    </strong>\n</span>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvcGF0dGVybnMvY291bnRlci9jb3VudGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLHVCQUF1QixFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVFsRixNQUFNLE9BQU8sZ0JBQWdCO0lBWTNCLGdCQUFnQixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7WUFyQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixvMEJBQXVDO2dCQUV2QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7Ozs7b0JBR0UsS0FBSzt5QkFDTCxLQUFLOzJCQUNMLEtBQUs7d0JBQ0wsS0FBSzsyQkFDTCxLQUFLOzhCQUNMLEtBQUs7Z0NBQ0wsS0FBSzs2QkFDTCxLQUFLO2dDQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FhLWNvdW50ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vY291bnRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvdW50ZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgQ291bnRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgY291bnQ6IG51bWJlcjtcbiAgQElucHV0KCkgY291bnRFcnJvcjogYm9vbGVhbjtcbiAgQElucHV0KCkgY291bnRXYXJuaW5nOiBib29sZWFuO1xuICBASW5wdXQoKSBjb3VudEluZm86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGNvdW50U3VjY2VzczogYm9vbGVhbjtcbiAgQElucHV0KCkgY291bnRFcnJvckxpZ2h0OiBib29sZWFuO1xuICBASW5wdXQoKSBjb3VudFdhcm5pbmdMaWdodDogYm9vbGVhbjtcbiAgQElucHV0KCkgY291bnRJbmZvTGlnaHQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGNvdW50U3VjY2Vzc0xpZ2h0OiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxufVxuIl19