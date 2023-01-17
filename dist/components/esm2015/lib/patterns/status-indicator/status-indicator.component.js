import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
export class StatusIndicatorComponent {
}
StatusIndicatorComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-status-indicator',
                template: "<section class=\"status-indicator flex-group flex-start\">\r\n    <div \r\n      *ngFor=\"let item of currentStatus; let i = index\" \r\n      class=\"status-container\"\r\n      [ngClass]=\"{'remove-line' : removeLine}\"\r\n    >\r\n      <div \r\n        class=\"{{item.iconClass}} {{item.iconStatus}}\" \r\n        title=\"{{item.iconTitle}}\">\r\n        {{item.iconName}}\r\n        </div>\r\n    </div>\r\n  </section>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
StatusIndicatorComponent.propDecorators = {
    iconClass: [{ type: Input }],
    iconTitle: [{ type: Input }],
    iconName: [{ type: Input }],
    iconStatus: [{ type: Input }],
    removeLine: [{ type: Input }],
    currentStatus: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLWluZGljYXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvcGF0dGVybnMvc3RhdHVzLWluZGljYXRvci9zdGF0dXMtaW5kaWNhdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLHVCQUF1QixFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVFsRixNQUFNLE9BQU8sd0JBQXdCOzs7WUFOcEMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLG9iQUFnRDtnQkFFaEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2hEOzs7d0JBR0UsS0FBSzt3QkFDTCxLQUFLO3VCQUNMLEtBQUs7eUJBQ0wsS0FBSzt5QkFDTCxLQUFLOzRCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FhLXN0YXR1cy1pbmRpY2F0b3InLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zdGF0dXMtaW5kaWNhdG9yLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zdGF0dXMtaW5kaWNhdG9yLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIFN0YXR1c0luZGljYXRvckNvbXBvbmVudCB7XHJcblxyXG4gIEBJbnB1dCgpIGljb25DbGFzczogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGljb25UaXRsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGljb25OYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaWNvblN0YXR1czogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHJlbW92ZUxpbmU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgY3VycmVudFN0YXR1czogQXJyYXk8b2JqZWN0PjtcclxuXHJcbn1cclxuIl19