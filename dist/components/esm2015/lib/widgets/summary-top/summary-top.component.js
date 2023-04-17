import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
export class SummaryTopComponent {
    constructor() { }
    ngOnInit() {
    }
}
SummaryTopComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-summary-top',
                template: "<article class=\"dl-container\" [ngClass]=\"{'display-block' : displayBlock}\">\r\n  <dl class=\"flex-align-center\" [ngClass]=\"{ 'vertical-display': verticalDisplay }\">\r\n   <ng-content></ng-content>\r\n  </dl>\r\n</article>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
SummaryTopComponent.ctorParameters = () => [];
SummaryTopComponent.propDecorators = {
    displayBlock: [{ type: Input }],
    verticalDisplay: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyeS10b3AuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL3dpZGdldHMvc3VtbWFyeS10b3Avc3VtbWFyeS10b3AuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUWxGLE1BQU0sT0FBTyxtQkFBbUI7SUFLOUIsZ0JBQWdCLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7OztZQWRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixvUEFBMkM7Z0JBRTNDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7OzsyQkFHRSxLQUFLOzhCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FhLXN1bW1hcnktdG9wJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc3VtbWFyeS10b3AuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3N1bW1hcnktdG9wLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIFN1bW1hcnlUb3BDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBkaXNwbGF5QmxvY2s6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgdmVydGljYWxEaXNwbGF5OiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==