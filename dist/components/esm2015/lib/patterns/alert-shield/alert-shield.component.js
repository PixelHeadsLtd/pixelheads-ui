import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
export class AlertShieldComponent {
    constructor() { }
    ngOnInit() {
    }
}
AlertShieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-alert-shield',
                template: "<div \r\n    *ngIf=\"!showTooltip && !customShield\" \r\n    class=\"alert-shield {{alertShieldStatus}}\" \r\n    [ngClass]=\"{\r\n        'small' : alertShieldSmall, \r\n        'nowrap' : noWrap \r\n        }\"\r\n    >\r\n    <span [ngStyle]=\"{ 'display': hideLabel ? 'none' : 'inline' }\">\r\n        {{alertShieldText}}\r\n    </span>\r\n</div>\r\n\r\n<div \r\n    *ngIf=\"showTooltip && !customShield\" \r\n    class=\"alert-shield-tooltip-wrapper\"\r\n    [ngClass]=\"{\r\n        'tooltip-top-left' : tooltipTopLeft,\r\n        'tooltip-top-right' : tooltipTopRight,\r\n        'tooltip-bottom-left' : tooltipBottomLeft,\r\n        'tooltip-bottom-right' : tooltipBottomRight\r\n    }\"\r\n>\r\n    <div \r\n        class=\"alert-shield-tooltip {{alertShieldStatus}}\"\r\n        [ngStyle]=\"{'min-width' : minWidth}\"\r\n    >\r\n        <h4 *ngIf=\"showTooltipHeading\">{{tooltipHeading}}</h4>\r\n        <ng-content select=\"[tooltip-content]\"></ng-content>\r\n    </div>\r\n    <div \r\n        class=\"alert-shield {{alertShieldStatus}}\" \r\n        [ngClass]=\"{\r\n            'small' : alertShieldSmall, \r\n            'nowrap' : noWrap \r\n            }\"\r\n        >\r\n            <span [ngStyle]=\"{ 'display': hideLabel ? 'none' : 'inline' }\">\r\n                {{alertShieldText}}\r\n            </span>\r\n    </div>\r\n</div>\r\n\r\n<div \r\n    *ngIf=\"customShield\" \r\n    class=\"custom-alert-shield\"\r\n    [ngClass]=\"{\r\n        'tooltip-top-left' : tooltipTopLeft,\r\n        'tooltip-top-right' : tooltipTopRight,\r\n        'tooltip-bottom-left' : tooltipBottomLeft,\r\n        'tooltip-bottom-right' : tooltipBottomRight\r\n    }\"\r\n>\r\n    <div \r\n        class=\"\r\n            flex-group \r\n            flex-align-center \r\n            flex-start \r\n            custom-alert-shield-container\r\n            {{shieldColour}}\r\n        \"\r\n        [ngClass]=\"{\r\n            'small' : alertShieldSmall,\r\n            'nowrap' : noWrap,\r\n            'icon-only' : iconOnly,\r\n            'rotate' : enableRotation\r\n        }\"\r\n      >\r\n        <div \r\n            *ngIf=\"showTooltip\"\r\n            class=\"alert-shield-tooltip\"\r\n            [ngStyle]=\"{'min-width' : minWidth}\"\r\n        >\r\n            <h4 *ngIf=\"showTooltipHeading\">{{tooltipHeading}}</h4>\r\n            <ng-content select=\"[custom-tooltip-content]\"></ng-content>\r\n        </div>\r\n        <div \r\n            [ngClass]=\"{\r\n                'material-icons' : !iconOutlined,\r\n                'material-icons-outlined' : iconOutlined\r\n            }\">\r\n            {{iconName}}\r\n        </div>\r\n        <span [ngStyle]=\"{ 'display': hideLabel ? 'none' : 'inline' }\">\r\n            {{alertShieldText}}\r\n        </span>\r\n    </div>\r\n</div>",
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
    hideLabel: [{ type: Input }],
    tooltipTopLeft: [{ type: Input }],
    tooltipTopRight: [{ type: Input }],
    tooltipBottomLeft: [{ type: Input }],
    tooltipBottomRight: [{ type: Input }],
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
    bgGreyDark: [{ type: Input }],
    shieldColour: [{ type: Input }],
    iconOnly: [{ type: Input }],
    enableRotation: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtc2hpZWxkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9wYXR0ZXJucy9hbGVydC1zaGllbGQvYWxlcnQtc2hpZWxkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLHVCQUF1QixFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVFsRixNQUFNLE9BQU8sb0JBQW9CO0lBaUMvQixnQkFBZ0IsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7O1lBMUNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQiwyd0ZBQTRDO2dCQUU1QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7Ozs7Z0NBR0UsS0FBSzs4QkFDTCxLQUFLOzBCQUNMLEtBQUs7aUNBQ0wsS0FBSzs2QkFDTCxLQUFLO3VCQUNMLEtBQUs7K0JBQ0wsS0FBSztxQkFDTCxLQUFLO3dCQUNMLEtBQUs7NkJBQ0wsS0FBSzs4QkFDTCxLQUFLO2dDQUNMLEtBQUs7aUNBQ0wsS0FBSzsyQkFFTCxLQUFLO3VCQUNMLEtBQUs7MkJBQ0wsS0FBSzt5QkFDTCxLQUFLO3dCQUNMLEtBQUs7MkJBQ0wsS0FBSzswQkFDTCxLQUFLOzRCQUNMLEtBQUs7MkJBQ0wsS0FBSzswQkFDTCxLQUFLO3lCQUNMLEtBQUs7MEJBQ0wsS0FBSzt5QkFDTCxLQUFLOzJCQUNMLEtBQUs7dUJBQ0wsS0FBSzs2QkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYS1hbGVydC1zaGllbGQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hbGVydC1zaGllbGQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2FsZXJ0LXNoaWVsZC5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbGVydFNoaWVsZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIGFsZXJ0U2hpZWxkU3RhdHVzOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGFsZXJ0U2hpZWxkVGV4dDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHNob3dUb29sdGlwOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHNob3dUb29sdGlwSGVhZGluZzogYm9vbGVhbjtcclxuICBASW5wdXQoKSB0b29sdGlwSGVhZGluZzogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG1pbldpZHRoOiBhbnk7XHJcbiAgQElucHV0KCkgYWxlcnRTaGllbGRTbWFsbDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBub1dyYXA6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgaGlkZUxhYmVsOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHRvb2x0aXBUb3BMZWZ0OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHRvb2x0aXBUb3BSaWdodDogYm9vbGVhbjtcclxuICBASW5wdXQoKSB0b29sdGlwQm90dG9tTGVmdDogYm9vbGVhbjtcclxuICBASW5wdXQoKSB0b29sdGlwQm90dG9tUmlnaHQ6IGJvb2xlYW47XHJcblxyXG4gIEBJbnB1dCgpIGN1c3RvbVNoaWVsZDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBpY29uTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGljb25PdXRsaW5lZDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBiZ1JlZExpZ2h0OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGJnUmVkRGFyazogYm9vbGVhbjtcclxuICBASW5wdXQoKSBiZ0dyZWVuTGlnaHQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgYmdHcmVlbkRhcms6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgYmdPcmFuZ2VMaWdodDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBiZ09yYW5nZURhcms6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgYmdCbHVlTGlnaHQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgYmdCbHVlRGFyazogYm9vbGVhbjtcclxuICBASW5wdXQoKSBiZ0dyZXlMaWdodDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBiZ0dyZXlEYXJrOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHNoaWVsZENvbG91cjogYW55O1xyXG4gIEBJbnB1dCgpIGljb25Pbmx5OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGVuYWJsZVJvdGF0aW9uOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==