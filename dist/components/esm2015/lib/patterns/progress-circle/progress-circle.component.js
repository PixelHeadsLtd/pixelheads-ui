import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
export class ProgressCircleComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProgressCircleComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-progress-circle',
                template: "<div *ngIf=\"!isSmall\" class=\"progress-circle\" [ngClass]=\"{'panel-view' : panelView}\">\r\n  <h3 class=\"flex-center title {{headerColor}}\" [ngClass]=\"{'padding-right-1' : enableTooltip}\">\r\n    <span \r\n      title=\"{{name}}\"\r\n      class=\"flex-group flex-align-center\"\r\n      >\r\n      {{ (name.length>19)? (name | slice:0:19)+'...':(name) }}\r\n      <span title=\"Error\" *ngIf=\"isError\" class=\"material-icons status padding-left-0-25 small aa-red-100\">error_outline</span>\r\n      <span title=\"Warning\" *ngIf=\"isWarning\" class=\"material-icons status padding-left-0-25 small aa-orange-100\">warning_amber</span>\r\n      <span title=\"Info\" *ngIf=\"isInfo\" class=\"material-icons-outlined status small padding-left-0-25 aa-light-blue-100\">info</span>\r\n    </span>\r\n    <div *ngIf=\"enableTooltip\" class=\"aa-tooltip icon-info margin-left-0-25\" [ngStyle]=\"{'position' : 'absolute', 'right' : '.75rem'}\">\r\n      <div class=\"feature-box {{xpos}} {{ypos}}\" [ngStyle]=\"{'min-width' : tooltipMinWidth+'rem'}\">\r\n        <p>{{tooltipBody}}</p>\r\n      </div>\r\n    </div>\r\n    <span *ngIf=\"panelView && !hideChevron\" class=\"material-icons\">chevron_right</span>\r\n  </h3>\r\n  <div class=\"percent\">\r\n    <svg viewBox=\"20 0 60 100\">\r\n      <circle [ngStyle]=\"{'stroke-dashoffset': 0, 'opacity': '.3', 'stroke': colour }\" cx=\"40\" cy=\"40\" r=\"40\"></circle>\r\n      <circle [ngStyle]=\"{'stroke-dashoffset': 'calc(250 - (250 * '+ percent +') / 100)', 'stroke': colour }\" cx=\"40\" cy=\"40\" r=\"40\"></circle>\r\n    </svg>\r\n    <span class=\"value margin-0\">{{percent}} <span>%</span></span>\r\n  </div>\r\n\r\n  <span \r\n    class=\"align-center number\" \r\n    *ngIf=\"panelView && !enableAlertShield && !enableAlertShieldTooltip\">\r\n    {{value}}\r\n  </span>\r\n\r\n  <div \r\n    *ngIf=\"enableAlertShield\" \r\n    class=\"alert-shield small {{alertShieldStatus}}\" \r\n    >\r\n      {{alertShieldText}}\r\n  </div>\r\n\r\n  <div \r\n    *ngIf=\"enableAlertShieldTooltip\" \r\n    class=\"alert-shield-tooltip-wrapper\"\r\n    [ngClass]=\"{\r\n        'tooltip-top-left' : tooltipTopLeft,\r\n        'tooltip-top-right' : tooltipTopRight,\r\n        'tooltip-bottom-left' : tooltipBottomLeft,\r\n        'tooltip-bottom-right' : tooltipBottomRight\r\n    }\"\r\n  >\r\n    <div \r\n        class=\"alert-shield-tooltip {{alertShieldStatus}}\"\r\n        [ngStyle]=\"{'min-width' : tooltipMinWidth+'rem'}\"\r\n    >\r\n        <h4 *ngIf=\"showTooltipHeading\">{{tooltipHeading}}</h4>\r\n        <ng-content select=\"[tooltip-content]\"></ng-content>\r\n    </div>\r\n    <div \r\n        class=\"alert-shield small {{alertShieldStatus}}\" \r\n        >\r\n          {{alertShieldText}}\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<li *ngIf=\"isSmall\" class=\"flex-group flex-start\">\r\n  <div class=\"progress-circle small margin-right-0-5\">\r\n    <div class=\"percent\">\r\n      <svg>\r\n        <circle [ngStyle]=\"{'stroke-dashoffset': 0, 'opacity': '.2', 'stroke': colour }\" cx=\"15\" cy=\"15\" r=\"15\"></circle>\r\n        <circle [ngStyle]=\"{'stroke-dashoffset': 'calc(250 - (92 * '+ percent +') / 100)', 'stroke': colour }\" cx=\"15\" cy=\"15\" r=\"15\"></circle>\r\n      </svg>\r\n      <span class=\"value margin-0\">{{percent}} <span>%</span></span>\r\n    </div>\r\n  </div>\r\n  <div class=\"margin-top-0-75\">{{name}}</div>\r\n</li>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
ProgressCircleComponent.ctorParameters = () => [];
ProgressCircleComponent.propDecorators = {
    name: [{ type: Input }],
    percent: [{ type: Input }],
    value: [{ type: Input }],
    colour: [{ type: Input }],
    isSmall: [{ type: Input }],
    panelView: [{ type: Input }],
    enableTooltip: [{ type: Input }],
    tooltipTitle: [{ type: Input }],
    tooltipBody: [{ type: Input }],
    xpos: [{ type: Input }],
    ypos: [{ type: Input }],
    tooltipMinWidth: [{ type: Input }],
    hideChevron: [{ type: Input }],
    headerColor: [{ type: Input }],
    isError: [{ type: Input }],
    isWarning: [{ type: Input }],
    isInfo: [{ type: Input }],
    enableAlertShield: [{ type: Input }],
    enableAlertShieldTooltip: [{ type: Input }],
    alertShieldStatus: [{ type: Input }],
    alertShieldSmall: [{ type: Input }],
    tooltipTopLeft: [{ type: Input }],
    tooltipTopRight: [{ type: Input }],
    tooltipBottomLeft: [{ type: Input }],
    tooltipBottomRight: [{ type: Input }],
    showTooltipHeading: [{ type: Input }],
    tooltipHeading: [{ type: Input }],
    alertShieldText: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtY2lyY2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9wYXR0ZXJucy9wcm9ncmVzcy1jaXJjbGUvcHJvZ3Jlc3MtY2lyY2xlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLHVCQUF1QixFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVFsRixNQUFNLE9BQU8sdUJBQXVCO0lBK0JsQyxnQkFBZ0IsQ0FBQztJQUdqQixRQUFRO0lBQ1IsQ0FBQzs7O1lBekNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5Qix1M0dBQStDO2dCQUUvQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7Ozs7bUJBR0UsS0FBSztzQkFDTCxLQUFLO29CQUNMLEtBQUs7cUJBQ0wsS0FBSztzQkFDTCxLQUFLO3dCQUNMLEtBQUs7NEJBQ0wsS0FBSzsyQkFDTCxLQUFLOzBCQUNMLEtBQUs7bUJBQ0wsS0FBSzttQkFDTCxLQUFLOzhCQUNMLEtBQUs7MEJBQ0wsS0FBSzswQkFDTCxLQUFLO3NCQUNMLEtBQUs7d0JBQ0wsS0FBSztxQkFDTCxLQUFLO2dDQUNMLEtBQUs7dUNBQ0wsS0FBSztnQ0FDTCxLQUFLOytCQUNMLEtBQUs7NkJBQ0wsS0FBSzs4QkFDTCxLQUFLO2dDQUNMLEtBQUs7aUNBQ0wsS0FBSztpQ0FDTCxLQUFLOzZCQUNMLEtBQUs7OEJBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWEtcHJvZ3Jlc3MtY2lyY2xlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZ3Jlc3MtY2lyY2xlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wcm9ncmVzcy1jaXJjbGUuY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NDaXJjbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBuYW1lOiBhbnk7XHJcbiAgQElucHV0KCkgcGVyY2VudDogYW55O1xyXG4gIEBJbnB1dCgpIHZhbHVlOiBhbnk7XHJcbiAgQElucHV0KCkgY29sb3VyOiBhbnk7XHJcbiAgQElucHV0KCkgaXNTbWFsbDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBwYW5lbFZpZXc6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZW5hYmxlVG9vbHRpcDogYm9vbGVhbjtcclxuICBASW5wdXQoKSB0b29sdGlwVGl0bGU6IGFueTtcclxuICBASW5wdXQoKSB0b29sdGlwQm9keTogYW55O1xyXG4gIEBJbnB1dCgpIHhwb3M6IHN0cmluZztcclxuICBASW5wdXQoKSB5cG9zOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgdG9vbHRpcE1pbldpZHRoOiBhbnk7XHJcbiAgQElucHV0KCkgaGlkZUNoZXZyb246IGJvb2xlYW47XHJcbiAgQElucHV0KCkgaGVhZGVyQ29sb3I6IGFueTtcclxuICBASW5wdXQoKSBpc0Vycm9yOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGlzV2FybmluZzogYm9vbGVhbjtcclxuICBASW5wdXQoKSBpc0luZm86IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZW5hYmxlQWxlcnRTaGllbGQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZW5hYmxlQWxlcnRTaGllbGRUb29sdGlwOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGFsZXJ0U2hpZWxkU3RhdHVzOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgYWxlcnRTaGllbGRTbWFsbDogYm9vbGVhbjtcclxuICBASW5wdXQoKSB0b29sdGlwVG9wTGVmdDogYm9vbGVhbjtcclxuICBASW5wdXQoKSB0b29sdGlwVG9wUmlnaHQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgdG9vbHRpcEJvdHRvbUxlZnQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgdG9vbHRpcEJvdHRvbVJpZ2h0OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHNob3dUb29sdGlwSGVhZGluZzogYm9vbGVhbjtcclxuICBASW5wdXQoKSB0b29sdGlwSGVhZGluZzogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGFsZXJ0U2hpZWxkVGV4dDogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=