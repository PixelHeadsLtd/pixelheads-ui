import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
export class AlertComponent {
    constructor() { }
    ngOnInit() {
    }
}
AlertComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-alert',
                template: "<div \r\n    role=\"alert\" \r\n    class={{alertClass}}\r\n    [ngClass]=\"{'align-icon-top' : alignIconTop}\"\r\n>\r\n    <div \r\n        *ngIf=\"collapsible\" \r\n        class=\"\r\n        flex-group \r\n        space-between \r\n        flex-align-center \r\n        margin-top-0-5\"\r\n    >\r\n        <h3 class=\"margin-0\">{{ alertTitle }}</h3>\r\n        <div \r\n            class=\"flex-align-center cursor-pointer\"\r\n            (click)=\"expandPanel=!expandPanel\"\r\n        >\r\n            <span class=\"material-icons padding-left-1\" *ngIf=\"!expandPanel\">open_in_full</span>\r\n            <span class=\"material-icons padding-left-1\" *ngIf=\"expandPanel\">close_fullscreen</span>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"!collapsible\">\r\n        {{ alertText }}\r\n    </div> \r\n    <div \r\n        *ngIf=\"collapsible\"\r\n        class=\"overflow-hidden\"\r\n        [ngStyle]=\"{ 'height': !expandPanel ? '3rem' : 'auto' }\"\r\n        [ngClass]=\"{\r\n            'margin-top-0-75' : collapsible,\r\n            'expanded' : expandPanel\r\n        }\"\r\n    >\r\n        {{ alertText }}\r\n    </div>\r\n</div>",
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
    expandPanel: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL3BhdHRlcm5zL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQU9sRixNQUFNLE9BQU8sY0FBYztJQVF6QixnQkFBZ0IsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7O1lBaEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsaXBDQUFxQztnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7eUJBRUUsS0FBSzt5QkFDTCxLQUFLO3dCQUNMLEtBQUs7MEJBQ0wsS0FBSzsyQkFDTCxLQUFLOzBCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FhLWFsZXJ0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYWxlcnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbGVydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgYWxlcnRDbGFzczogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGFsZXJ0VGl0bGU6IHN0cmluZztcclxuICBASW5wdXQoKSBhbGVydFRleHQ6IHN0cmluZztcclxuICBASW5wdXQoKSBjb2xsYXBzaWJsZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBhbGlnbkljb25Ub3A6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZXhwYW5kUGFuZWw6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbn1cclxuIl19