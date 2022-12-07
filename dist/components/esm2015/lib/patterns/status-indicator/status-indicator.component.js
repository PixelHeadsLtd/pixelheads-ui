import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
export class StatusIndicatorComponent {
}
StatusIndicatorComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-status-indicator',
                template: "<section class=\"status-indicator flex-group flex-start\">\r\n    <div *ngFor=\"let item of currentStatus; let i = index\" class=\"status-container\">\r\n      <div \r\n        class=\"{{item.iconClass}} {{item.iconStatus}}\" \r\n        title=\"{{item.iconTitle}}\">\r\n        {{item.iconName}}\r\n        </div>\r\n    </div>\r\n  </section>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
StatusIndicatorComponent.propDecorators = {
    iconClass: [{ type: Input }],
    iconTitle: [{ type: Input }],
    iconName: [{ type: Input }],
    iconStatus: [{ type: Input }],
    currentStatus: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLWluZGljYXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvcGF0dGVybnMvc3RhdHVzLWluZGljYXRvci9zdGF0dXMtaW5kaWNhdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLHVCQUF1QixFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVFsRixNQUFNLE9BQU8sd0JBQXdCOzs7WUFOcEMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLG9XQUFnRDtnQkFFaEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2hEOzs7d0JBR0UsS0FBSzt3QkFDTCxLQUFLO3VCQUNMLEtBQUs7eUJBQ0wsS0FBSzs0QkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYS1zdGF0dXMtaW5kaWNhdG9yJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc3RhdHVzLWluZGljYXRvci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc3RhdHVzLWluZGljYXRvci5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdGF0dXNJbmRpY2F0b3JDb21wb25lbnQge1xyXG5cclxuICBASW5wdXQoKSBpY29uQ2xhc3M6IHN0cmluZztcclxuICBASW5wdXQoKSBpY29uVGl0bGU6IHN0cmluZztcclxuICBASW5wdXQoKSBpY29uTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGljb25TdGF0dXM6IHN0cmluZztcclxuICBASW5wdXQoKSBjdXJyZW50U3RhdHVzOiBBcnJheTxvYmplY3Q+O1xyXG5cclxufVxyXG4iXX0=