import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
export class AlertComponent {
    constructor() { }
    ngOnInit() {
    }
}
AlertComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-alert',
                template: "<div \r\n    role=\"alert\" \r\n    class=\"overflow-hidden {{alertClass}}\"\r\n    [ngClass]=\"{\r\n        'align-icon-top' : alignIconTop,\r\n        'max-height-initial' : expandPanel\r\n    }\"\r\n    [ngStyle]=\"{\r\n        'min-width' : minWidth,\r\n        'max-width' : maxWidth,\r\n        'max-height': [collapsedHeight]\r\n    }\"\r\n>\r\n    <div \r\n        *ngIf=\"collapsible\" \r\n        class=\"\r\n        flex-group \r\n        space-between \r\n        flex-align-center \r\n        margin-top-0-5\"\r\n    >\r\n        <h3 class=\"margin-0\">{{ alertTitle }}</h3>\r\n        <div \r\n            class=\"flex-align-center cursor-pointer\"\r\n            (click)=\"expandPanel=!expandPanel\"\r\n        >\r\n            <span class=\"material-icons padding-left-1\" *ngIf=\"!expandPanel\">open_in_full</span>\r\n            <span class=\"material-icons padding-left-1\" *ngIf=\"expandPanel\">close_fullscreen</span>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"!collapsible\">\r\n        {{ alertText }}\r\n    </div> \r\n    <div \r\n        *ngIf=\"collapsible\"\r\n        [ngClass]=\"{\r\n            'margin-top-1' : collapsible\r\n        }\"\r\n    >\r\n        {{ alertText }}\r\n    </div>\r\n</div>",
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
    removePanel: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL3BhdHRlcm5zL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQU9sRixNQUFNLE9BQU8sY0FBYztJQVl6QixnQkFBZ0IsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7O1lBcEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsa3VDQUFxQztnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7eUJBRUUsS0FBSzt5QkFDTCxLQUFLO3dCQUNMLEtBQUs7MEJBQ0wsS0FBSzsyQkFDTCxLQUFLOzBCQUNMLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLOzhCQUNMLEtBQUs7MEJBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWEtYWxlcnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hbGVydC5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIEFsZXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBhbGVydENsYXNzOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgYWxlcnRUaXRsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGFsZXJ0VGV4dDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGNvbGxhcHNpYmxlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGFsaWduSWNvblRvcDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBleHBhbmRQYW5lbDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBtaW5XaWR0aDogYW55O1xyXG4gIEBJbnB1dCgpIG1heFdpZHRoOiBhbnk7XHJcbiAgQElucHV0KCkgY29sbGFwc2VkSGVpZ2h0OiBhbnk7XHJcbiAgQElucHV0KCkgcmVtb3ZlUGFuZWw6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=