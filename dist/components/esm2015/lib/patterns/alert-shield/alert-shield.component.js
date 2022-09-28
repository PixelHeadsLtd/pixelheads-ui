import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
export class AlertShieldComponent {
    constructor() { }
    ngOnInit() {
    }
}
AlertShieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-alert-shield',
                template: "<div *ngIf=\"!showTooltip\" class=\"alert-shield {{alertShieldStatus}}\" [class.small]=\"alertShieldSmall\">{{alertShieldText}}</div>\n\n<div *ngIf=\"showTooltip\" class=\"alert-shield-tooltip-wrapper\">\n    <div \n        class=\"alert-shield-tooltip {{alertShieldStatus}}\"\n        [ngStyle]=\"{'min-width' : minWidth}\"\n    >\n        <h4 *ngIf=\"showTooltipHeading\">{{tooltipHeading}}</h4>\n        <ng-content select=\"[tooltip-content]\"></ng-content>\n    </div>\n    <div class=\"alert-shield {{alertShieldStatus}}\" [class.small]=\"alertShieldSmall\">{{alertShieldText}}</div>\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
AlertShieldComponent.ctorParameters = () => [];
AlertShieldComponent.propDecorators = {
    alertShieldStatus: [{ type: Input }],
    alertShieldText: [{ type: Input }],
    showTooltip: [{ type: Input }],
    showTooltipHeading: [{ type: Input }],
    tooltipHeading: [{ type: Input }],
    minWidth: [{ type: Input }],
    alertShieldSmall: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtc2hpZWxkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9wYXR0ZXJucy9hbGVydC1zaGllbGQvYWxlcnQtc2hpZWxkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLHVCQUF1QixFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVFsRixNQUFNLE9BQU8sb0JBQW9CO0lBVS9CLGdCQUFnQixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7WUFuQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLGltQkFBNEM7Z0JBRTVDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7OztnQ0FHRSxLQUFLOzhCQUNMLEtBQUs7MEJBQ0wsS0FBSztpQ0FDTCxLQUFLOzZCQUNMLEtBQUs7dUJBQ0wsS0FBSzsrQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhYS1hbGVydC1zaGllbGQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWxlcnQtc2hpZWxkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWxlcnQtc2hpZWxkLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEFsZXJ0U2hpZWxkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBhbGVydFNoaWVsZFN0YXR1czogYm9vbGVhbjtcbiAgQElucHV0KCkgYWxlcnRTaGllbGRUZXh0OiBib29sZWFuO1xuICBASW5wdXQoKSBzaG93VG9vbHRpcDogYm9vbGVhbjtcbiAgQElucHV0KCkgc2hvd1Rvb2x0aXBIZWFkaW5nOiBib29sZWFuO1xuICBASW5wdXQoKSB0b29sdGlwSGVhZGluZzogc3RyaW5nO1xuICBASW5wdXQoKSBtaW5XaWR0aDogYW55O1xuICBASW5wdXQoKSBhbGVydFNoaWVsZFNtYWxsOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxufVxuIl19