import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
export class AlertShieldComponent {
    constructor() { }
    ngOnInit() {
    }
}
AlertShieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-alert-shield',
                template: "<div \r\n    *ngIf=\"!showTooltip && !customShield\" \r\n    class=\"alert-shield {{alertShieldStatus}}\" \r\n    [ngClass]=\"{\r\n        'small' : alertShieldSmall, \r\n        'nowrap' : noWrap \r\n        }\"\r\n    >\r\n    {{alertShieldText}}\r\n</div>\r\n\r\n<div *ngIf=\"showTooltip && !customShield\" class=\"alert-shield-tooltip-wrapper\">\r\n    <div \r\n        class=\"alert-shield-tooltip {{alertShieldStatus}} {{xpos}} {{ypos}}\"\r\n        [ngStyle]=\"{'min-width' : minWidth}\"\r\n    >\r\n        <h4 *ngIf=\"showTooltipHeading\">{{tooltipHeading}}</h4>\r\n        <ng-content select=\"[tooltip-content]\"></ng-content>\r\n    </div>\r\n    <div \r\n        class=\"alert-shield {{alertShieldStatus}}\" \r\n        [ngClass]=\"{\r\n            'small' : alertShieldSmall, \r\n            'nowrap' : noWrap \r\n            }\"\r\n        >\r\n            {{alertShieldText}}\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"customShield\" class=\"custom-alert-shield\">\r\n    <div \r\n        class=\"flex-group flex-align-center flex-start custom-alert-shield-container\"\r\n        [ngClass]=\"{\r\n            'small' : alertShieldSmall,\r\n            'nowrap' : noWrap,\r\n            'bg-aa-red-8' : bgRedLight,\r\n            'bg-aa-red-100' : bgRedDark,\r\n            'bg-aa-green-5' : bgGreenLight,\r\n            'bg-aa-green-100' : bgGreenDark,\r\n            'bg-aa-orange-10' : bgOrangeLight,\r\n            'bg-aa-orange-100' : bgOrangeDark,\r\n            'bg-aa-light-blue-15' : bgBlueLight,\r\n            'bg-aa-light-blue-100' : bgBlueDark,\r\n            'bg-aa-grey-10' : bgGreyLight,\r\n            'bg-aa-grey-100' : bgGreyDark\r\n        }\"\r\n      >\r\n        <div \r\n            *ngIf=\"showTooltip\"\r\n            class=\"alert-shield-tooltip {{xpos}} {{ypos}}\"\r\n            [ngStyle]=\"{'min-width' : minWidth}\"\r\n        >\r\n            <h4 *ngIf=\"showTooltipHeading\">{{tooltipHeading}}</h4>\r\n            <ng-content select=\"[custom-tooltip-content]\"></ng-content>\r\n        </div>\r\n        <div \r\n            [ngClass]=\"{\r\n                'material-icons' : !iconOutlined,\r\n                'material-icons-outlined' : iconOutlined\r\n            }\">\r\n            {{iconName}}\r\n        </div>\r\n      <span>{{alertShieldText}}</span>\r\n    </div>\r\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
AlertShieldComponent.ctorParameters = () => [];
AlertShieldComponent.propDecorators = {
    alertShieldStatus: [{ type: Input }],
    alertShieldText: [{ type: Input }],
    showTooltip: [{ type: Input }],
    showTooltipHeading: [{ type: Input }],
    tooltipHeading: [{ type: Input }],
    minWidth: [{ type: Input }],
    alertShieldSmall: [{ type: Input }],
    noWrap: [{ type: Input }],
    xpos: [{ type: Input }],
    ypos: [{ type: Input }],
    customShield: [{ type: Input }],
    iconName: [{ type: Input }],
    iconOutlined: [{ type: Input }],
    bgRedLight: [{ type: Input }],
    bgRedDark: [{ type: Input }],
    bgGreenLight: [{ type: Input }],
    bgGreenDark: [{ type: Input }],
    bgOrangeLight: [{ type: Input }],
    bgOrangeDark: [{ type: Input }],
    bgBlueLight: [{ type: Input }],
    bgBlueDark: [{ type: Input }],
    bgGreyLight: [{ type: Input }],
    bgGreyDark: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtc2hpZWxkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9wYXR0ZXJucy9hbGVydC1zaGllbGQvYWxlcnQtc2hpZWxkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLHVCQUF1QixFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVFsRixNQUFNLE9BQU8sb0JBQW9CO0lBMkIvQixnQkFBZ0IsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7O1lBcENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQix5eUVBQTRDO2dCQUU1QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7Ozs7Z0NBR0UsS0FBSzs4QkFDTCxLQUFLOzBCQUNMLEtBQUs7aUNBQ0wsS0FBSzs2QkFDTCxLQUFLO3VCQUNMLEtBQUs7K0JBQ0wsS0FBSztxQkFDTCxLQUFLO21CQUNMLEtBQUs7bUJBQ0wsS0FBSzsyQkFFTCxLQUFLO3VCQUNMLEtBQUs7MkJBQ0wsS0FBSzt5QkFDTCxLQUFLO3dCQUNMLEtBQUs7MkJBQ0wsS0FBSzswQkFDTCxLQUFLOzRCQUNMLEtBQUs7MkJBQ0wsS0FBSzswQkFDTCxLQUFLO3lCQUNMLEtBQUs7MEJBQ0wsS0FBSzt5QkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYS1hbGVydC1zaGllbGQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hbGVydC1zaGllbGQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2FsZXJ0LXNoaWVsZC5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbGVydFNoaWVsZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIGFsZXJ0U2hpZWxkU3RhdHVzOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGFsZXJ0U2hpZWxkVGV4dDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBzaG93VG9vbHRpcDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBzaG93VG9vbHRpcEhlYWRpbmc6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgdG9vbHRpcEhlYWRpbmc6IHN0cmluZztcclxuICBASW5wdXQoKSBtaW5XaWR0aDogYW55O1xyXG4gIEBJbnB1dCgpIGFsZXJ0U2hpZWxkU21hbGw6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgbm9XcmFwOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHhwb3M6IHN0cmluZztcclxuICBASW5wdXQoKSB5cG9zOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpIGN1c3RvbVNoaWVsZDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBpY29uTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGljb25PdXRsaW5lZDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBiZ1JlZExpZ2h0OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGJnUmVkRGFyazogYm9vbGVhbjtcclxuICBASW5wdXQoKSBiZ0dyZWVuTGlnaHQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgYmdHcmVlbkRhcms6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgYmdPcmFuZ2VMaWdodDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBiZ09yYW5nZURhcms6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgYmdCbHVlTGlnaHQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgYmdCbHVlRGFyazogYm9vbGVhbjtcclxuICBASW5wdXQoKSBiZ0dyZXlMaWdodDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBiZ0dyZXlEYXJrOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==