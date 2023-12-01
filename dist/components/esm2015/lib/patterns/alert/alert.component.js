import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
export class AlertComponent {
    constructor() { }
    ngOnInit() {
    }
}
AlertComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-alert',
                template: "<div \r\n    *ngIf=\"!defaultExpanded\"\r\n    role=\"alert\" \r\n    class=\"overflow-hidden {{alertClass}}\"\r\n    [ngClass]=\"{\r\n        'align-icon-top' : alignIconTop,\r\n        'max-height-initial' : expandPanel\r\n    }\"\r\n    [ngStyle]=\"{\r\n        'min-width' : minWidth,\r\n        'max-width' : maxWidth,\r\n        'max-height': [collapsedHeight]\r\n    }\"\r\n>\r\n    <div \r\n        *ngIf=\"collapsible\" \r\n        class=\"\r\n        flex-group \r\n        space-between \r\n        flex-align-center \r\n        margin-top-0-5\"\r\n    >\r\n        <h3 class=\"margin-0\">{{ alertTitle }}</h3>\r\n        <div \r\n            class=\"flex-align-center cursor-pointer\"\r\n            (click)=\"expandPanel=!expandPanel\"\r\n        >\r\n            <span class=\"material-icons padding-left-1\" *ngIf=\"!expandPanel\">open_in_full</span>\r\n            <span class=\"material-icons padding-left-1\" *ngIf=\"expandPanel\">close_fullscreen</span>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"!collapsible\">\r\n        {{ alertText }}\r\n    </div> \r\n    <div \r\n        *ngIf=\"collapsible\"\r\n        [ngClass]=\"{\r\n            'margin-top-1' : collapsible\r\n        }\"\r\n    >\r\n        {{ alertText }}\r\n    </div>\r\n</div>\r\n\r\n<div \r\n    *ngIf=\"defaultExpanded\"\r\n    role=\"alert\" \r\n    class=\"overflow-hidden {{alertClass}}\"\r\n    [ngClass]=\"{\r\n        'align-icon-top' : alignIconTop,\r\n        'max-height-initial' : !expandPanel\r\n    }\"\r\n    [ngStyle]=\"{\r\n        'min-width' : minWidth,\r\n        'max-width' : maxWidth,\r\n        'max-height': [collapsedHeight]\r\n    }\"\r\n>\r\n    <div \r\n        *ngIf=\"collapsible\" \r\n        class=\"\r\n        flex-group \r\n        space-between \r\n        flex-align-center \r\n        margin-top-0-5\"\r\n    >\r\n        <h3 class=\"margin-0\">{{ alertTitle }}</h3>\r\n        <div \r\n            class=\"flex-align-center cursor-pointer\"\r\n            (click)=\"expandPanel=!expandPanel\"\r\n        >\r\n            <span class=\"material-icons padding-left-1\" *ngIf=\"!expandPanel\">open_in_full</span>\r\n            <span class=\"material-icons padding-left-1\" *ngIf=\"expandPanel\">close_fullscreen</span>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"!collapsible\">\r\n        {{ alertText }}\r\n    </div> \r\n    <div \r\n        *ngIf=\"collapsible\"\r\n        [ngClass]=\"{\r\n            'margin-top-1' : collapsible\r\n        }\"\r\n    >\r\n        {{ alertText }}\r\n    </div>\r\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
AlertComponent.ctorParameters = () => [];
AlertComponent.propDecorators = {
    alertClass: [{ type: Input }],
    alertTitle: [{ type: Input }],
    alertText: [{ type: Input }],
    collapsible: [{ type: Input }],
    alignIconTop: [{ type: Input }],
    expandPanel: [{ type: Input }],
    minWidth: [{ type: Input }],
    maxWidth: [{ type: Input }],
    collapsedHeight: [{ type: Input }],
    removePanel: [{ type: Input }],
    defaultExpanded: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL3BhdHRlcm5zL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQU9sRixNQUFNLE9BQU8sY0FBYztJQWF6QixnQkFBZ0IsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7O1lBckJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsb2dGQUFxQztnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7eUJBRUUsS0FBSzt5QkFDTCxLQUFLO3dCQUNMLEtBQUs7MEJBQ0wsS0FBSzsyQkFDTCxLQUFLOzBCQUNMLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLOzhCQUNMLEtBQUs7MEJBQ0wsS0FBSzs4QkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYS1hbGVydCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FsZXJ0LmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWxlcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGFsZXJ0Q2xhc3M6IHN0cmluZztcclxuICBASW5wdXQoKSBhbGVydFRpdGxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgYWxlcnRUZXh0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY29sbGFwc2libGU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgYWxpZ25JY29uVG9wOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGV4cGFuZFBhbmVsOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIG1pbldpZHRoOiBhbnk7XHJcbiAgQElucHV0KCkgbWF4V2lkdGg6IGFueTtcclxuICBASW5wdXQoKSBjb2xsYXBzZWRIZWlnaHQ6IGFueTtcclxuICBASW5wdXQoKSByZW1vdmVQYW5lbDogYW55O1xyXG4gIEBJbnB1dCgpIGRlZmF1bHRFeHBhbmRlZDogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=