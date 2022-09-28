import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
export class TooltipComponent {
    constructor() { }
    ngOnInit() { }
}
TooltipComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-tooltip',
                template: "<div class=\"flex-group\" [ngClass]=\"{ 'space-between' : includeLabel, 'flex-start' : includeLegend }\">\r\n  <label for=\"{{labelFor}}\" *ngIf=\"includeLabel\">{{labelName}}</label>\r\n  <legend class=\"margin-right-0-5\" *ngIf=\"includeLegend\">{{labelName}}</legend>\r\n  <div \r\n    class=\"aa-tooltip icon-info\" \r\n    [ngClass]=\"{\r\n      'is-success': isSuccess, \r\n      'is-info': isInfo, \r\n      'is-warning': isWarning, \r\n      'is-error': isError,\r\n      'custom-icon': customIcon\r\n    }\"\r\n    [ngStyle]=\"{'z-index' : zIndex}\"\r\n    >\r\n    \r\n    <div \r\n      *ngIf=\"customIcon\" \r\n      class=\"material-icons\"\r\n      [ngClass]=\"{\r\n        'is-success': isSuccess, \r\n        'is-info': isInfo, \r\n        'is-warning': isWarning, \r\n        'is-error': isError\r\n      }\">{{iconName}}</div>\r\n      \r\n    \r\n    <div class=\"feature-box {{xpos}} {{ypos}}\" [ngStyle]=\"{'min-width': setMinWidth+'rem', 'max-width': setMaxWidth+'rem'}\">\r\n        <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
TooltipComponent.ctorParameters = () => [];
TooltipComponent.propDecorators = {
    setMinWidth: [{ type: Input }],
    setMaxWidth: [{ type: Input }],
    isSuccess: [{ type: Input }],
    isInfo: [{ type: Input }],
    isWarning: [{ type: Input }],
    includeLabel: [{ type: Input }],
    includeLegend: [{ type: Input }],
    labelName: [{ type: Input }],
    isError: [{ type: Input }],
    xpos: [{ type: Input }],
    ypos: [{ type: Input }],
    customIcon: [{ type: Input }],
    iconName: [{ type: Input }],
    zIndex: [{ type: Input }],
    labelFor: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvd2lkZ2V0cy90b29sdGlwL3Rvb2x0aXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTWxGLE1BQU0sT0FBTyxnQkFBZ0I7SUFpQjNCLGdCQUFlLENBQUM7SUFFaEIsUUFBUSxLQUFJLENBQUM7OztZQXhCZCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLDJqQ0FBdUM7Z0JBQ3ZDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7OzBCQUVFLEtBQUs7MEJBQ0wsS0FBSzt3QkFDTCxLQUFLO3FCQUNMLEtBQUs7d0JBQ0wsS0FBSzsyQkFDTCxLQUFLOzRCQUNMLEtBQUs7d0JBQ0wsS0FBSztzQkFDTCxLQUFLO21CQUNMLEtBQUs7bUJBQ0wsS0FBSzt5QkFDTCxLQUFLO3VCQUNMLEtBQUs7cUJBQ0wsS0FBSzt1QkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FhLXRvb2x0aXAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90b29sdGlwLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRvb2x0aXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHNldE1pbldpZHRoOiBudW1iZXI7XHJcbiAgQElucHV0KCkgc2V0TWF4V2lkdGg6IG51bWJlcjtcclxuICBASW5wdXQoKSBpc1N1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgaXNJbmZvOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGlzV2FybmluZzogYm9vbGVhbjtcclxuICBASW5wdXQoKSBpbmNsdWRlTGFiZWw6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgaW5jbHVkZUxlZ2VuZDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBsYWJlbE5hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBpc0Vycm9yOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHhwb3M6IHN0cmluZztcclxuICBASW5wdXQoKSB5cG9zOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY3VzdG9tSWNvbjogYm9vbGVhbjtcclxuICBASW5wdXQoKSBpY29uTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHpJbmRleDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGxhYmVsRm9yOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7fVxyXG59XHJcbiJdfQ==