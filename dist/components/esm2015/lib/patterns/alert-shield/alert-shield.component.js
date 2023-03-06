import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
export class AlertShieldComponent {
    constructor() { }
    ngOnInit() {
    }
}
AlertShieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-alert-shield',
                template: "<div \r\n    *ngIf=\"!showTooltip && !customShield\" \r\n    class=\"alert-shield {{alertShieldStatus}}\" \r\n    [ngClass]=\"{\r\n        'small' : alertShieldSmall, \r\n        'nowrap' : noWrap \r\n        }\"\r\n    >\r\n    <span [ngStyle]=\"{ 'display': hideLabel ? 'none' : 'inline' }\">\r\n        {{alertShieldText}}\r\n    </span>\r\n</div>\r\n\r\n<div *ngIf=\"showTooltip && !customShield\" class=\"alert-shield-tooltip-wrapper\">\r\n    <div \r\n        class=\"alert-shield-tooltip {{alertShieldStatus}} {{xpos}} {{ypos}}\"\r\n        [ngStyle]=\"{'min-width' : minWidth}\"\r\n    >\r\n        <h4 *ngIf=\"showTooltipHeading\">{{tooltipHeading}}</h4>\r\n        <ng-content select=\"[tooltip-content]\"></ng-content>\r\n    </div>\r\n    <div \r\n        class=\"alert-shield {{alertShieldStatus}}\" \r\n        [ngClass]=\"{\r\n            'small' : alertShieldSmall, \r\n            'nowrap' : noWrap \r\n            }\"\r\n        >\r\n            <span [ngStyle]=\"{ 'display': hideLabel ? 'none' : 'inline' }\">\r\n                {{alertShieldText}}\r\n            </span>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"customShield\" class=\"custom-alert-shield\">\r\n    <div \r\n        class=\"flex-group flex-align-center flex-start custom-alert-shield-container\"\r\n        [ngClass]=\"{\r\n            'small' : alertShieldSmall,\r\n            'nowrap' : noWrap,\r\n            'bg-aa-red-8' : bgRedLight,\r\n            'bg-aa-red-100' : bgRedDark,\r\n            'bg-aa-green-5' : bgGreenLight,\r\n            'bg-aa-green-100' : bgGreenDark,\r\n            'bg-aa-orange-10' : bgOrangeLight,\r\n            'bg-aa-orange-100' : bgOrangeDark,\r\n            'bg-aa-light-blue-15' : bgBlueLight,\r\n            'bg-aa-light-blue-100' : bgBlueDark,\r\n            'bg-aa-grey-10' : bgGreyLight,\r\n            'bg-aa-grey-100' : bgGreyDark\r\n        }\"\r\n      >\r\n        <div \r\n            *ngIf=\"showTooltip\"\r\n            class=\"alert-shield-tooltip {{xpos}} {{ypos}}\"\r\n            [ngStyle]=\"{'min-width' : minWidth}\"\r\n        >\r\n            <h4 *ngIf=\"showTooltipHeading\">{{tooltipHeading}}</h4>\r\n            <ng-content select=\"[custom-tooltip-content]\"></ng-content>\r\n        </div>\r\n        <div \r\n            [ngClass]=\"{\r\n                'material-icons' : !iconOutlined,\r\n                'material-icons-outlined' : iconOutlined\r\n            }\">\r\n            {{iconName}}\r\n        </div>\r\n        <span [ngStyle]=\"{ 'display': hideLabel ? 'none' : 'inline' }\">\r\n            {{alertShieldText}}\r\n        </span>\r\n    </div>\r\n</div>",
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
    hideLabel: [{ type: Input }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtc2hpZWxkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9wYXR0ZXJucy9hbGVydC1zaGllbGQvYWxlcnQtc2hpZWxkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLHVCQUF1QixFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVFsRixNQUFNLE9BQU8sb0JBQW9CO0lBNEIvQixnQkFBZ0IsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7O1lBckNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQiwwa0ZBQTRDO2dCQUU1QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7Ozs7Z0NBR0UsS0FBSzs4QkFDTCxLQUFLOzBCQUNMLEtBQUs7aUNBQ0wsS0FBSzs2QkFDTCxLQUFLO3VCQUNMLEtBQUs7K0JBQ0wsS0FBSztxQkFDTCxLQUFLO21CQUNMLEtBQUs7bUJBQ0wsS0FBSzt3QkFDTCxLQUFLOzJCQUVMLEtBQUs7dUJBQ0wsS0FBSzsyQkFDTCxLQUFLO3lCQUNMLEtBQUs7d0JBQ0wsS0FBSzsyQkFDTCxLQUFLOzBCQUNMLEtBQUs7NEJBQ0wsS0FBSzsyQkFDTCxLQUFLOzBCQUNMLEtBQUs7eUJBQ0wsS0FBSzswQkFDTCxLQUFLO3lCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FhLWFsZXJ0LXNoaWVsZCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FsZXJ0LXNoaWVsZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYWxlcnQtc2hpZWxkLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIEFsZXJ0U2hpZWxkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgYWxlcnRTaGllbGRTdGF0dXM6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgYWxlcnRTaGllbGRUZXh0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc2hvd1Rvb2x0aXA6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgc2hvd1Rvb2x0aXBIZWFkaW5nOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHRvb2x0aXBIZWFkaW5nOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbWluV2lkdGg6IGFueTtcclxuICBASW5wdXQoKSBhbGVydFNoaWVsZFNtYWxsOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIG5vV3JhcDogYm9vbGVhbjtcclxuICBASW5wdXQoKSB4cG9zOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgeXBvczogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGhpZGVMYWJlbDogYm9vbGVhbjtcclxuXHJcbiAgQElucHV0KCkgY3VzdG9tU2hpZWxkOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGljb25OYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaWNvbk91dGxpbmVkOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGJnUmVkTGlnaHQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgYmdSZWREYXJrOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGJnR3JlZW5MaWdodDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBiZ0dyZWVuRGFyazogYm9vbGVhbjtcclxuICBASW5wdXQoKSBiZ09yYW5nZUxpZ2h0OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGJnT3JhbmdlRGFyazogYm9vbGVhbjtcclxuICBASW5wdXQoKSBiZ0JsdWVMaWdodDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBiZ0JsdWVEYXJrOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGJnR3JleUxpZ2h0OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGJnR3JleURhcms6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbn1cclxuIl19