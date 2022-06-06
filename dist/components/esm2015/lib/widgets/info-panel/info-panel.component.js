import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
export class InfoPanelComponent {
    constructor() { }
    ngOnInit() {
    }
}
InfoPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-info-panel',
                template: "<section \r\n  class=\"info-panel {{panelStatus}}\" \r\n  [ngStyle]=\"{\r\n    'width' : panelWidth+'rem', \r\n    'height' : panelHeight+'rem'\r\n  }\"\r\n>\r\n  <div class=\"foreground\" [ngStyle]=\"preventOpacity && {'opacity':'1'}\">\r\n    <div class=\"info-panel-header padding-1\">\r\n      <ng-content select=\"[custom-header]\"></ng-content>\r\n    </div>\r\n    <div class=\"info-panel-content padding-1\">\r\n      <ng-content select=\"[custom-content]\"></ng-content>\r\n    </div>\r\n    <div class=\"info-panel-footer\">\r\n      <ng-content select=\"[custom-footer]\"></ng-content>\r\n    </div>\r\n  </div>\r\n  <div class=\"background\"></div>\r\n</section>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
InfoPanelComponent.ctorParameters = () => [];
InfoPanelComponent.propDecorators = {
    panelWidth: [{ type: Input }],
    panelHeight: [{ type: Input }],
    panelStatus: [{ type: Input }],
    preventOpacity: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvd2lkZ2V0cy9pbmZvLXBhbmVsL2luZm8tcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUWxGLE1BQU0sT0FBTyxrQkFBa0I7SUFPN0IsZ0JBQWdCLENBQUM7SUFHakIsUUFBUTtJQUNSLENBQUM7OztZQWxCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLDhxQkFBMEM7Z0JBRTFDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7Ozt5QkFJRSxLQUFLOzBCQUNMLEtBQUs7MEJBQ0wsS0FBSzs2QkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FhLWluZm8tcGFuZWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9pbmZvLXBhbmVsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9pbmZvLXBhbmVsLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBJbmZvUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBwYW5lbFdpZHRoOiBudW1iZXI7XHJcbiAgQElucHV0KCkgcGFuZWxIZWlnaHQ6IG51bWJlcjtcclxuICBASW5wdXQoKSBwYW5lbFN0YXR1czogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHByZXZlbnRPcGFjaXR5OiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcbn1cclxuIl19