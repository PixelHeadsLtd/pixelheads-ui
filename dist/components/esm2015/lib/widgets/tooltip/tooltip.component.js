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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvd2lkZ2V0cy90b29sdGlwL3Rvb2x0aXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPeEcsTUFBTSxPQUFPLGdCQUFnQjtJQW9DM0I7UUFQVSxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFTLENBQUM7SUFPbkMsQ0FBQztJQUxULGFBQWEsQ0FBQyxDQUFRO1FBQzNCLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBSUQsUUFBUSxLQUFJLENBQUM7OztZQTNDZCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLGdoRkFBdUM7Z0JBQ3ZDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7OzBCQUVFLEtBQUs7MEJBQ0wsS0FBSzt3QkFDTCxLQUFLO3FCQUNMLEtBQUs7d0JBQ0wsS0FBSzsyQkFDTCxLQUFLOzRCQUNMLEtBQUs7d0JBQ0wsS0FBSztzQkFDTCxLQUFLO21CQUNMLEtBQUs7bUJBQ0wsS0FBSzt5QkFDTCxLQUFLO3VCQUNMLEtBQUs7cUJBQ0wsS0FBSzt1QkFDTCxLQUFLOzJCQUNMLEtBQUs7NEJBQ0wsS0FBSztvQ0FDTCxLQUFLOzJCQUNMLEtBQUs7eUJBQ0wsS0FBSzt1QkFDTCxLQUFLOzBCQUNMLEtBQUs7dUJBQ0wsS0FBSztpQ0FDTCxLQUFLO2lDQUNMLEtBQUs7NkJBQ0wsS0FBSzs2QkFDTCxLQUFLOzBCQUVMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYS10b29sdGlwJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdG9vbHRpcC5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb29sdGlwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBzZXRNaW5XaWR0aDogYW55O1xyXG4gIEBJbnB1dCgpIHNldE1heFdpZHRoOiBhbnk7XHJcbiAgQElucHV0KCkgaXNTdWNjZXNzOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGlzSW5mbzogYm9vbGVhbjtcclxuICBASW5wdXQoKSBpc1dhcm5pbmc6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgaW5jbHVkZUxhYmVsOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGluY2x1ZGVMZWdlbmQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgbGFiZWxOYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaXNFcnJvcjogYm9vbGVhbjtcclxuICBASW5wdXQoKSB4cG9zOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgeXBvczogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGN1c3RvbUljb246IGJvb2xlYW47XHJcbiAgQElucHV0KCkgaWNvbk5hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSB6SW5kZXg6IG51bWJlcjtcclxuICBASW5wdXQoKSBsYWJlbEZvcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHNob3dBc0FuY2hvcjogYm9vbGVhbjtcclxuICBASW5wdXQoKSB0b29sdGlwQW5jaG9yOiBhbnk7XHJcbiAgQElucHV0KCkgcHJldmVudEFuY2hvcldyYXBwaW5nOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHNob3dBc0J1dHRvbjogYm9vbGVhbjtcclxuICBASW5wdXQoKSBidXR0b25UZXh0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgYnV0dG9uSWQ6IHN0cmluZztcclxuICBASW5wdXQoKSBidXR0b25DbGFzczogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHNob3dUb29sdGlwT25DbGljazogYm9vbGVhbjtcclxuICBASW5wdXQoKSBzaG93VG9vbHRpcE9uSG92ZXI6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgdG9vbHRpcENsaWNrZWQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgdG9vbHRpcEJ0blRleHQ6IGJvb2xlYW47XHJcblxyXG4gIEBPdXRwdXQoKSBidXR0b25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnQ+KCk7XHJcblxyXG4gIHB1YmxpYyBvbkJ1dHRvbkNsaWNrKGU6IEV2ZW50KSB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5idXR0b25DbGljay5lbWl0KGUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHt9XHJcbn1cclxuIl19