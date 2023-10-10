import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
export class ProgressCircleComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProgressCircleComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-progress-circle',
                template: "<div *ngIf=\"!isSmall && !customProgressCircle\" class=\"progress-circle\" [ngClass]=\"{'panel-view' : panelView}\">\r\n  <h3 class=\"flex-center title {{headerColor}}\" [ngClass]=\"{'padding-right-1' : enableTooltip}\">\r\n    <span \r\n      title=\"{{name}}\"\r\n      class=\"flex-group flex-align-center\"\r\n      >\r\n      {{ (name.length>19)? (name | slice:0:19)+'...':(name) }}\r\n      <span title=\"Error\" *ngIf=\"isError\" class=\"material-icons status padding-left-0-25 small aa-red-100\">error_outline</span>\r\n      <span title=\"Warning\" *ngIf=\"isWarning\" class=\"material-icons status padding-left-0-25 small aa-orange-100\">warning_amber</span>\r\n      <span title=\"Info\" *ngIf=\"isInfo\" class=\"material-icons-outlined status small padding-left-0-25 aa-light-blue-100\">info</span>\r\n    </span>\r\n    <div *ngIf=\"enableTooltip\" class=\"aa-tooltip icon-info margin-left-0-25\" [ngStyle]=\"{'position' : 'absolute', 'right' : '.75rem'}\">\r\n      <div class=\"feature-box {{xpos}} {{ypos}}\" [ngStyle]=\"{'min-width' : tooltipMinWidth+'rem'}\">\r\n        <p>{{tooltipBody}}</p>\r\n      </div>\r\n    </div>\r\n    <span *ngIf=\"panelView && !hideChevron\" class=\"material-icons\">chevron_right</span>\r\n  </h3>\r\n  <div class=\"percent\">\r\n    <svg viewBox=\"20 0 60 100\">\r\n      <circle [ngStyle]=\"{'stroke-dashoffset': 0, 'opacity': '.3', 'stroke': colour }\" cx=\"40\" cy=\"40\" r=\"40\"></circle>\r\n      <circle [ngStyle]=\"{'stroke-dashoffset': 'calc(250 - (250 * '+ percent +') / 100)', 'stroke': colour }\" cx=\"40\" cy=\"40\" r=\"40\"></circle>\r\n    </svg>\r\n    <span class=\"value margin-0\">{{percent}} <span>%</span></span>\r\n  </div>\r\n\r\n  <span \r\n    class=\"align-center number\" \r\n    *ngIf=\"panelView && !enableAlertShield && !enableAlertShieldTooltip\">\r\n    {{value}}\r\n  </span>\r\n\r\n  <div \r\n    *ngIf=\"enableAlertShield\" \r\n    class=\"alert-shield small {{alertShieldStatus}}\" \r\n    >\r\n      {{alertShieldText}}\r\n  </div>\r\n\r\n  <div \r\n    *ngIf=\"enableAlertShieldTooltip\" \r\n    class=\"alert-shield-tooltip-wrapper\"\r\n    [ngClass]=\"{\r\n        'tooltip-top-left' : tooltipTopLeft,\r\n        'tooltip-top-right' : tooltipTopRight,\r\n        'tooltip-bottom-left' : tooltipBottomLeft,\r\n        'tooltip-bottom-right' : tooltipBottomRight\r\n    }\"\r\n  >\r\n    <div \r\n        class=\"alert-shield-tooltip {{alertShieldStatus}}\"\r\n        [ngStyle]=\"{'min-width' : tooltipMinWidth+'rem'}\"\r\n    >\r\n        <h4 *ngIf=\"showTooltipHeading\">{{tooltipHeading}}</h4>\r\n        <ng-content select=\"[tooltip-content]\"></ng-content>\r\n    </div>\r\n    <div \r\n        class=\"alert-shield small {{alertShieldStatus}}\" \r\n        >\r\n          {{alertShieldText}}\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<li *ngIf=\"isSmall && !customProgressCircle\" class=\"flex-group flex-start\">\r\n  <div class=\"progress-circle small margin-right-0-5\">\r\n    <div class=\"percent\">\r\n      <svg>\r\n        <circle [ngStyle]=\"{'stroke-dashoffset': 0, 'opacity': '.2', 'stroke': colour }\" cx=\"15\" cy=\"15\" r=\"15\"></circle>\r\n        <circle [ngStyle]=\"{'stroke-dashoffset': 'calc(250 - (92 * '+ percent +') / 100)', 'stroke': colour }\" cx=\"15\" cy=\"15\" r=\"15\"></circle>\r\n      </svg>\r\n      <span class=\"value margin-0\">{{percent}} <span>%</span></span>\r\n    </div>\r\n  </div>\r\n  <div class=\"margin-top-0-75\">{{name}}</div>\r\n</li>\r\n\r\n<div \r\n  *ngIf=\"customProgressCircle\" \r\n  class=\"progress-circle panel-view progress-circle-custom {{customClass}}\"\r\n  [ngStyle]=\"{'height' : panelHeight}\"\r\n>\r\n  <header class=\"flex-center {{customHeaderClass}}\">\r\n    <ng-content select=\"[custom-header]\"></ng-content>\r\n  </header>\r\n  <div class=\"percent\">\r\n    <svg viewBox=\"20 0 60 100\">\r\n      <circle [ngStyle]=\"{'stroke-dashoffset': 0, 'opacity': '.3', 'stroke': colour }\" cx=\"40\" cy=\"40\" r=\"40\"></circle>\r\n      <circle [ngStyle]=\"{'stroke-dashoffset': 'calc(250 - (250 * '+ percent +') / 100)', 'stroke': colour }\" cx=\"40\" cy=\"40\" r=\"40\"></circle>\r\n    </svg>\r\n    <span class=\"value margin-0\">{{percent}} <span>%</span></span>\r\n  </div>\r\n  <footer class=\"flex-center {{customFooterClass}}\">\r\n    <ng-content select=\"[custom-footer]\"></ng-content>\r\n  </footer>\r\n</div>",
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
    alertShieldText: [{ type: Input }],
    customClass: [{ type: Input }],
    customProgressCircle: [{ type: Input }],
    customHeaderClass: [{ type: Input }],
    customFooterClass: [{ type: Input }],
    panelHeight: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtY2lyY2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9wYXR0ZXJucy9wcm9ncmVzcy1jaXJjbGUvcHJvZ3Jlc3MtY2lyY2xlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLHVCQUF1QixFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVFsRixNQUFNLE9BQU8sdUJBQXVCO0lBb0NsQyxnQkFBZ0IsQ0FBQztJQUdqQixRQUFRO0lBQ1IsQ0FBQzs7O1lBOUNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5Qiw4eUlBQStDO2dCQUUvQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7Ozs7bUJBR0UsS0FBSztzQkFDTCxLQUFLO29CQUNMLEtBQUs7cUJBQ0wsS0FBSztzQkFDTCxLQUFLO3dCQUNMLEtBQUs7NEJBQ0wsS0FBSzsyQkFDTCxLQUFLOzBCQUNMLEtBQUs7bUJBQ0wsS0FBSzttQkFDTCxLQUFLOzhCQUNMLEtBQUs7MEJBQ0wsS0FBSzswQkFDTCxLQUFLO3NCQUNMLEtBQUs7d0JBQ0wsS0FBSztxQkFDTCxLQUFLO2dDQUNMLEtBQUs7dUNBQ0wsS0FBSztnQ0FDTCxLQUFLOytCQUNMLEtBQUs7NkJBQ0wsS0FBSzs4QkFDTCxLQUFLO2dDQUNMLEtBQUs7aUNBQ0wsS0FBSztpQ0FDTCxLQUFLOzZCQUNMLEtBQUs7OEJBQ0wsS0FBSzswQkFDTCxLQUFLO21DQUNMLEtBQUs7Z0NBQ0wsS0FBSztnQ0FDTCxLQUFLOzBCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FhLXByb2dyZXNzLWNpcmNsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2dyZXNzLWNpcmNsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcHJvZ3Jlc3MtY2lyY2xlLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2dyZXNzQ2lyY2xlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgbmFtZTogYW55O1xyXG4gIEBJbnB1dCgpIHBlcmNlbnQ6IGFueTtcclxuICBASW5wdXQoKSB2YWx1ZTogYW55O1xyXG4gIEBJbnB1dCgpIGNvbG91cjogYW55O1xyXG4gIEBJbnB1dCgpIGlzU21hbGw6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgcGFuZWxWaWV3OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGVuYWJsZVRvb2x0aXA6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgdG9vbHRpcFRpdGxlOiBhbnk7XHJcbiAgQElucHV0KCkgdG9vbHRpcEJvZHk6IGFueTtcclxuICBASW5wdXQoKSB4cG9zOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgeXBvczogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHRvb2x0aXBNaW5XaWR0aDogYW55O1xyXG4gIEBJbnB1dCgpIGhpZGVDaGV2cm9uOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGhlYWRlckNvbG9yOiBhbnk7XHJcbiAgQElucHV0KCkgaXNFcnJvcjogYm9vbGVhbjtcclxuICBASW5wdXQoKSBpc1dhcm5pbmc6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgaXNJbmZvOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGVuYWJsZUFsZXJ0U2hpZWxkOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGVuYWJsZUFsZXJ0U2hpZWxkVG9vbHRpcDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBhbGVydFNoaWVsZFN0YXR1czogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGFsZXJ0U2hpZWxkU21hbGw6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgdG9vbHRpcFRvcExlZnQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgdG9vbHRpcFRvcFJpZ2h0OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHRvb2x0aXBCb3R0b21MZWZ0OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHRvb2x0aXBCb3R0b21SaWdodDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBzaG93VG9vbHRpcEhlYWRpbmc6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgdG9vbHRpcEhlYWRpbmc6IHN0cmluZztcclxuICBASW5wdXQoKSBhbGVydFNoaWVsZFRleHQ6IHN0cmluZztcclxuICBASW5wdXQoKSBjdXN0b21DbGFzczogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGN1c3RvbVByb2dyZXNzQ2lyY2xlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGN1c3RvbUhlYWRlckNsYXNzOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY3VzdG9tRm9vdGVyQ2xhc3M6IHN0cmluZztcclxuICBASW5wdXQoKSBwYW5lbEhlaWdodDogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=