import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
export class InfoPanelComponent {
    constructor() { }
    ngOnInit() {
    }
}
InfoPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-info-panel',
                template: "<section \r\n  class=\"info-panel {{panelStatus}}\" \r\n  [ngStyle]=\"{\r\n    'width' : panelWidth+'rem', \r\n    'height' : panelHeight+'rem'\r\n  }\"\r\n>\r\n  <div \r\n    class=\"foreground\" \r\n    [ngStyle]=\"preventOpacity && {'opacity':'1'}\"\r\n    [ngClass]=\"{'border-radius-0-5' : roundedCorners}\"\r\n  >\r\n    <div \r\n      class=\"info-panel-header padding-1\" \r\n      [ngStyle]=\"{ 'border-bottom': removeHeaderBorder ? 'none' : 'inherit' }\"\r\n    >\r\n      <ng-content select=\"[custom-header]\"></ng-content>\r\n    </div>\r\n    <div class=\"info-panel-content padding-1\">\r\n      <ng-content select=\"[custom-content]\"></ng-content>\r\n    </div>\r\n    <div class=\"info-panel-footer\">\r\n      <ng-content select=\"[custom-footer]\"></ng-content>\r\n    </div>\r\n  </div>\r\n  <div class=\"background\"></div>\r\n</section>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
InfoPanelComponent.ctorParameters = () => [];
InfoPanelComponent.propDecorators = {
    panelWidth: [{ type: Input }],
    panelHeight: [{ type: Input }],
    panelStatus: [{ type: Input }],
    preventOpacity: [{ type: Input }],
    removeHeaderBorder: [{ type: Input }],
    roundedCorners: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvd2lkZ2V0cy9pbmZvLXBhbmVsL2luZm8tcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUWxGLE1BQU0sT0FBTyxrQkFBa0I7SUFTN0IsZ0JBQWdCLENBQUM7SUFHakIsUUFBUTtJQUNSLENBQUM7OztZQXBCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLHUyQkFBMEM7Z0JBRTFDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7Ozt5QkFJRSxLQUFLOzBCQUNMLEtBQUs7MEJBQ0wsS0FBSzs2QkFDTCxLQUFLO2lDQUNMLEtBQUs7NkJBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYS1pbmZvLXBhbmVsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaW5mby1wYW5lbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vaW5mby1wYW5lbC5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSW5mb1BhbmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgcGFuZWxXaWR0aDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHBhbmVsSGVpZ2h0OiBudW1iZXI7XHJcbiAgQElucHV0KCkgcGFuZWxTdGF0dXM6IHN0cmluZztcclxuICBASW5wdXQoKSBwcmV2ZW50T3BhY2l0eTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHJlbW92ZUhlYWRlckJvcmRlcjogYm9vbGVhbjtcclxuICBASW5wdXQoKSByb3VuZGVkQ29ybmVyczogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxufVxyXG4iXX0=