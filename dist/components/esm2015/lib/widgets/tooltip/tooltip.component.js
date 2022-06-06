import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
export class TooltipComponent {
    constructor() { }
    ngOnInit() { }
}
TooltipComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-tooltip',
                template: "<div class=\"flex-group\" [ngClass]=\"{ 'space-between' : includeLabel, 'flex-start' : includeLegend }\">\r\n  <label for=\"{{labelFor}}\" *ngIf=\"includeLabel\">{{labelName}}</label>\r\n  <legend class=\"margin-right-0-5\" *ngIf=\"includeLegend\">{{labelName}}</legend>\r\n  <div \r\n    class=\"aa-tooltip icon-info\" \r\n    [ngClass]=\"{\r\n      'is-success': isSuccess, \r\n      'is-info': isInfo, \r\n      'is-warning': isWarning, \r\n      'is-error': isError,\r\n      'custom-icon': customIcon\r\n    }\"\r\n    [ngStyle]=\"{'z-index' : zIndex}\"\r\n    >\r\n    \r\n    <div \r\n      *ngIf=\"customIcon\" \r\n      class=\"material-icons\"\r\n      [ngClass]=\"{\r\n        'is-success': isSuccess, \r\n        'is-info': isInfo, \r\n        'is-warning': isWarning, \r\n        'is-error': isError\r\n      }\">{{iconName}}</div>\r\n      \r\n    \r\n    <div class=\"feature-box {{xpos}} {{ypos}}\" [ngStyle]=\"{'min-width': setMinWidth+'rem'}\">\r\n        <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
TooltipComponent.ctorParameters = () => [];
TooltipComponent.propDecorators = {
    setMinWidth: [{ type: Input }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvd2lkZ2V0cy90b29sdGlwL3Rvb2x0aXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTWxGLE1BQU0sT0FBTyxnQkFBZ0I7SUFnQjNCLGdCQUFlLENBQUM7SUFFaEIsUUFBUSxLQUFJLENBQUM7OztZQXZCZCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLDJoQ0FBdUM7Z0JBQ3ZDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7OzBCQUVFLEtBQUs7d0JBQ0wsS0FBSztxQkFDTCxLQUFLO3dCQUNMLEtBQUs7MkJBQ0wsS0FBSzs0QkFDTCxLQUFLO3dCQUNMLEtBQUs7c0JBQ0wsS0FBSzttQkFDTCxLQUFLO21CQUNMLEtBQUs7eUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3FCQUNMLEtBQUs7dUJBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYS10b29sdGlwJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdG9vbHRpcC5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb29sdGlwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBzZXRNaW5XaWR0aDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGlzU3VjY2VzczogYm9vbGVhbjtcclxuICBASW5wdXQoKSBpc0luZm86IGJvb2xlYW47XHJcbiAgQElucHV0KCkgaXNXYXJuaW5nOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGluY2x1ZGVMYWJlbDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBpbmNsdWRlTGVnZW5kOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGxhYmVsTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGlzRXJyb3I6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgeHBvczogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHlwb3M6IHN0cmluZztcclxuICBASW5wdXQoKSBjdXN0b21JY29uOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGljb25OYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgekluZGV4OiBudW1iZXI7XHJcbiAgQElucHV0KCkgbGFiZWxGb3I6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHt9XHJcbn1cclxuIl19