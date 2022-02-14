import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
export class InfoPanelStackedComponent {
    constructor() { }
    ngOnInit() {
    }
}
InfoPanelStackedComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-info-panel-stacked',
                template: "<section \r\n  class=\"info-panel-stacked\"\r\n  [ngStyle]=\"{\r\n    'width' : wrapperWidth+'rem', \r\n    'height' : wrapperHeight+'rem'\r\n  }\"\r\n  [ngClass]=\"{\r\n    'approved-forward' : approvedForward,\r\n    'pending-forward' : pendingForward,\r\n    'rejected-forward' : rejectedForward,\r\n    'withdrawn-forward' : withdrawnForward,\r\n    'returned-forward' : returnedForward,\r\n    'abandoned-forward' : abandonedForward,\r\n    'draft-forward' : draftForward,\r\n    'withdrawn-pending-forward' : withdrawalPendingForward,\r\n    'reset-all' : resetAll,\r\n    'full-width' : fullWidth\r\n  }\"\r\n>\r\n  <ng-content></ng-content>\r\n</section>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
InfoPanelStackedComponent.ctorParameters = () => [];
InfoPanelStackedComponent.propDecorators = {
    approvedForward: [{ type: Input }],
    pendingForward: [{ type: Input }],
    rejectedForward: [{ type: Input }],
    withdrawnForward: [{ type: Input }],
    returnedForward: [{ type: Input }],
    abandonedForward: [{ type: Input }],
    draftForward: [{ type: Input }],
    withdrawalPendingForward: [{ type: Input }],
    resetAll: [{ type: Input }],
    wrapperWidth: [{ type: Input }],
    wrapperHeight: [{ type: Input }],
    fullWidth: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby1wYW5lbC1zdGFja2VkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi93aWRnZXRzL2luZm8tcGFuZWwtc3RhY2tlZC9pbmZvLXBhbmVsLXN0YWNrZWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUWxGLE1BQU0sT0FBTyx5QkFBeUI7SUFnQnBDLGdCQUFnQixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7WUF6QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLHNxQkFBa0Q7Z0JBRWxELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7Ozs4QkFHRSxLQUFLOzZCQUNMLEtBQUs7OEJBQ0wsS0FBSzsrQkFDTCxLQUFLOzhCQUNMLEtBQUs7K0JBQ0wsS0FBSzsyQkFDTCxLQUFLO3VDQUNMLEtBQUs7dUJBRUwsS0FBSzsyQkFDTCxLQUFLOzRCQUNMLEtBQUs7d0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWEtaW5mby1wYW5lbC1zdGFja2VkJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaW5mby1wYW5lbC1zdGFja2VkLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9pbmZvLXBhbmVsLXN0YWNrZWQuY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5mb1BhbmVsU3RhY2tlZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIGFwcHJvdmVkRm9yd2FyZDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBwZW5kaW5nRm9yd2FyZDogYm9vbGVhbjtcclxuICBASW5wdXQoKSByZWplY3RlZEZvcndhcmQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgd2l0aGRyYXduRm9yd2FyZDogYm9vbGVhbjtcclxuICBASW5wdXQoKSByZXR1cm5lZEZvcndhcmQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgYWJhbmRvbmVkRm9yd2FyZDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBkcmFmdEZvcndhcmQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgd2l0aGRyYXdhbFBlbmRpbmdGb3J3YXJkOiBib29sZWFuO1xyXG5cclxuICBASW5wdXQoKSByZXNldEFsbDogYm9vbGVhbjtcclxuICBASW5wdXQoKSB3cmFwcGVyV2lkdGg6IG51bWJlcjtcclxuICBASW5wdXQoKSB3cmFwcGVySGVpZ2h0OiBudW1iZXI7XHJcbiAgQElucHV0KCkgZnVsbFdpZHRoOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==