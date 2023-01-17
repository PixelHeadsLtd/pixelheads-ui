import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
export class ProgressIndicatorAdvancedComponent {
    constructor() {
        this.progressClick = new EventEmitter();
    }
    onProgressClick(e) {
        e.stopPropagation();
        this.progressClick.emit(e);
    }
    ngOnInit() {
    }
}
ProgressIndicatorAdvancedComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-progress-indicator-advanced',
                template: "<section class=\"indicator-item flex-group {{ progressClass }}\">\r\n    <div *ngIf=\"showDescription\" class=\"description\">\r\n        <p class=\"box-shadow\">{{description}}</p>\r\n        <div class=\"material-icons {{iconClass}}\">pan_tool_alt</div>\r\n    </div>\r\n    <div class=\"bus-stop flex-group flex-column flex-center\">\r\n        <ng-content></ng-content>\r\n    </div>\r\n</section>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
ProgressIndicatorAdvancedComponent.propDecorators = {
    progressClass: [{ type: Input }],
    progressLabel: [{ type: Input }],
    iconClass: [{ type: Input }],
    showDescription: [{ type: Input }],
    description: [{ type: Input }],
    asLink: [{ type: Input }],
    progressLink: [{ type: Input }],
    progressClick: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtaW5kaWNhdG9yLWFkdmFuY2VkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9uYXZpZ2F0aW9uL3Byb2dyZXNzLWluZGljYXRvci1hZHZhbmNlZC9wcm9ncmVzcy1pbmRpY2F0b3ItYWR2YW5jZWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFReEcsTUFBTSxPQUFPLGtDQUFrQztJQU4vQztRQWdCWSxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFTLENBQUM7SUFVdEQsQ0FBQztJQVJRLGVBQWUsQ0FBQyxDQUFRO1FBQzdCLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsUUFBUTtJQUNSLENBQUM7OztZQXhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdDQUFnQztnQkFDMUMsNlpBQTJEO2dCQUUzRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7Ozs0QkFHRSxLQUFLOzRCQUNMLEtBQUs7d0JBQ0wsS0FBSzs4QkFDTCxLQUFLOzBCQUNMLEtBQUs7cUJBQ0wsS0FBSzsyQkFDTCxLQUFLOzRCQUVMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYS1wcm9ncmVzcy1pbmRpY2F0b3ItYWR2YW5jZWQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9ncmVzcy1pbmRpY2F0b3ItYWR2YW5jZWQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3Byb2dyZXNzLWluZGljYXRvci1hZHZhbmNlZC5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc0luZGljYXRvckFkdmFuY2VkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgcHJvZ3Jlc3NDbGFzczogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHByb2dyZXNzTGFiZWw6IHN0cmluZztcclxuICBASW5wdXQoKSBpY29uQ2xhc3M6IHN0cmluZztcclxuICBASW5wdXQoKSBzaG93RGVzY3JpcHRpb246IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZGVzY3JpcHRpb246IHN0cmluZztcclxuICBASW5wdXQoKSBhc0xpbms6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgcHJvZ3Jlc3NMaW5rOiBzdHJpbmc7XHJcblxyXG4gIEBPdXRwdXQoKSBwcm9ncmVzc0NsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcclxuXHJcbiAgcHVibGljIG9uUHJvZ3Jlc3NDbGljayhlOiBFdmVudCkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMucHJvZ3Jlc3NDbGljay5lbWl0KGUpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=