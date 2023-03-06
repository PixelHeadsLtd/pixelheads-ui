import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
export class TooltipComponent {
    constructor() {
        this.buttonClick = new EventEmitter();
    }
    onButtonClick(e) {
        e.stopPropagation();
        this.buttonClick.emit(e);
    }
    ngOnInit() { }
}
TooltipComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-tooltip',
                template: "<div \r\n  class=\"flex-group\" \r\n  [ngStyle]=\"{ 'display': showAsButton ? 'block' : 'flex' }\"\r\n  [ngClass]=\"{ \r\n    'space-between' : includeLabel, \r\n    'flex-start' : includeLegend, \r\n    'show-as-button' : showAsButton,\r\n    'show-tooltip-on-hover' : showTooltipOnHover,\r\n    'show-tooltip-on-click' : showTooltipOnClick,\r\n    'tooltip-clicked' : tooltipClicked\r\n  }\">\r\n  <label for=\"{{labelFor}}\" *ngIf=\"includeLabel && !showAsButton\">{{labelName}}</label>\r\n  <legend class=\"margin-right-0-5\" *ngIf=\"includeLegend && !showAsButton\">{{labelName}}</legend>\r\n  <div \r\n    class=\"aa-tooltip icon-info\" \r\n    [ngClass]=\"{\r\n      'is-success' : isSuccess, \r\n      'is-info' : isInfo, \r\n      'is-warning' : isWarning, \r\n      'is-error' : isError,\r\n      'custom-icon' : customIcon,\r\n      'as-link': showAsAnchor\r\n    }\"\r\n    [ngStyle]=\"{'z-index' : zIndex}\"\r\n    >\r\n    \r\n    <div \r\n      *ngIf=\"customIcon && !showAsAnchor && !showAsButton\" \r\n      class=\"material-icons\"\r\n      [ngClass]=\"{\r\n        'is-success' : isSuccess, \r\n        'is-info' : isInfo, \r\n        'is-warning' : isWarning, \r\n        'is-error' : isError\r\n      }\"\r\n    >\r\n      {{iconName}}\r\n    </div>\r\n\r\n    <button \r\n      *ngIf=\"showAsButton && !showTooltipOnClick\"\r\n      class=\"show-tooltip-on-hover\"\r\n      [name]=\"buttonId\" \r\n      [id]=\"buttonId\" \r\n      [class]=\"buttonClass\" \r\n      [disabled]=\"disabled\" \r\n      (click)=\"onButtonClick($event)\"\r\n    >\r\n      <span>{{buttonText}}</span>\r\n    </button>\r\n\r\n    <button \r\n      *ngIf=\"showAsButton && showTooltipOnClick\"\r\n      class=\"show-tooltip-on-hover\"\r\n      [name]=\"buttonId\" \r\n      [id]=\"buttonId\" \r\n      [class]=\"buttonClass\" \r\n      [disabled]=\"disabled\" \r\n      (click)=\"onButtonClick($event); tooltipClicked=!tooltipClicked\"\r\n    >\r\n      <span *ngIf=\"!tooltipClicked\">{{buttonText}}</span>\r\n      <span *ngIf=\"tooltipClicked\">{{tooltipBtnText}}</span>\r\n    </button>\r\n\r\n    <a \r\n      *ngIf=\"showAsAnchor\" \r\n      class=\"cursor-pointer\"\r\n      [ngClass]=\"{'nowrap' : preventAnchorWrapping}\"\r\n      >\r\n      {{tooltipAnchor}}\r\n    </a>\r\n        \r\n    <div \r\n      class=\"feature-box {{xpos}} {{ypos}}\" \r\n      [ngStyle]=\"{\r\n        'min-width': setMinWidth+'rem', \r\n        'max-width': setMaxWidth+'rem'\r\n      }\"\r\n      >\r\n        <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
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
    labelFor: [{ type: Input }],
    showAsAnchor: [{ type: Input }],
    tooltipAnchor: [{ type: Input }],
    preventAnchorWrapping: [{ type: Input }],
    showAsButton: [{ type: Input }],
    buttonText: [{ type: Input }],
    buttonId: [{ type: Input }],
    buttonClass: [{ type: Input }],
    disabled: [{ type: Input }],
    showTooltipOnClick: [{ type: Input }],
    showTooltipOnHover: [{ type: Input }],
    tooltipClicked: [{ type: Input }],
    tooltipBtnText: [{ type: Input }],
    buttonClick: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvd2lkZ2V0cy90b29sdGlwL3Rvb2x0aXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFNeEcsTUFBTSxPQUFPLGdCQUFnQjtJQW9DM0I7UUFQVSxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFTLENBQUM7SUFPbkMsQ0FBQztJQUxULGFBQWEsQ0FBQyxDQUFRO1FBQzNCLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBSUQsUUFBUSxLQUFJLENBQUM7OztZQTNDZCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLGdoRkFBdUM7Z0JBQ3ZDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7OzBCQUVFLEtBQUs7MEJBQ0wsS0FBSzt3QkFDTCxLQUFLO3FCQUNMLEtBQUs7d0JBQ0wsS0FBSzsyQkFDTCxLQUFLOzRCQUNMLEtBQUs7d0JBQ0wsS0FBSztzQkFDTCxLQUFLO21CQUNMLEtBQUs7bUJBQ0wsS0FBSzt5QkFDTCxLQUFLO3VCQUNMLEtBQUs7cUJBQ0wsS0FBSzt1QkFDTCxLQUFLOzJCQUNMLEtBQUs7NEJBQ0wsS0FBSztvQ0FDTCxLQUFLOzJCQUNMLEtBQUs7eUJBQ0wsS0FBSzt1QkFDTCxLQUFLOzBCQUNMLEtBQUs7dUJBQ0wsS0FBSztpQ0FDTCxLQUFLO2lDQUNMLEtBQUs7NkJBQ0wsS0FBSzs2QkFDTCxLQUFLOzBCQUVMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FhLXRvb2x0aXAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90b29sdGlwLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRvb2x0aXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHNldE1pbldpZHRoOiBudW1iZXI7XHJcbiAgQElucHV0KCkgc2V0TWF4V2lkdGg6IG51bWJlcjtcclxuICBASW5wdXQoKSBpc1N1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgaXNJbmZvOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGlzV2FybmluZzogYm9vbGVhbjtcclxuICBASW5wdXQoKSBpbmNsdWRlTGFiZWw6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgaW5jbHVkZUxlZ2VuZDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBsYWJlbE5hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBpc0Vycm9yOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHhwb3M6IHN0cmluZztcclxuICBASW5wdXQoKSB5cG9zOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY3VzdG9tSWNvbjogYm9vbGVhbjtcclxuICBASW5wdXQoKSBpY29uTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHpJbmRleDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGxhYmVsRm9yOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc2hvd0FzQW5jaG9yOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHRvb2x0aXBBbmNob3I6IGFueTtcclxuICBASW5wdXQoKSBwcmV2ZW50QW5jaG9yV3JhcHBpbmc6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgc2hvd0FzQnV0dG9uOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGJ1dHRvblRleHQ6IHN0cmluZztcclxuICBASW5wdXQoKSBidXR0b25JZDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGJ1dHRvbkNsYXNzOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgc2hvd1Rvb2x0aXBPbkNsaWNrOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHNob3dUb29sdGlwT25Ib3ZlcjogYm9vbGVhbjtcclxuICBASW5wdXQoKSB0b29sdGlwQ2xpY2tlZDogYm9vbGVhbjtcclxuICBASW5wdXQoKSB0b29sdGlwQnRuVGV4dDogYm9vbGVhbjtcclxuXHJcbiAgQE91dHB1dCgpIGJ1dHRvbkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcclxuXHJcbiAgcHVibGljIG9uQnV0dG9uQ2xpY2soZTogRXZlbnQpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLmJ1dHRvbkNsaWNrLmVtaXQoZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge31cclxufVxyXG4iXX0=