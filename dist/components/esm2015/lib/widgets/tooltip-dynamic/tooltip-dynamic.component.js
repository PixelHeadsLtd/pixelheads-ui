import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TooltipDynamicPosition } from './tooltip-dynamic.enums';
export class TooltipDynamicComponent {
    constructor() {
        this.position = TooltipDynamicPosition.DEFAULT;
        this.left = 0;
        this.top = 0;
        this.visible = false;
    }
    isArrayPassed() {
        return (this.tooltip instanceof Array);
    }
    ngOnInit() { }
}
TooltipDynamicComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-tooltip-dynamic',
                template: "<div class=\"tooltip-dynamic box-shadow\"\r\n  [ngClass]=\"['tooltip-dynamic--'+position]\"\r\n  [class.tooltip--visible]=\"visible\"\r\n  [style.left]=\"left + 'px'\"\r\n  [style.top]=\"top + 'px'\">\r\n    <div [innerHtml]=\"tooltip\"></div>\r\n</div>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
TooltipDynamicComponent.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1keW5hbWljLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi93aWRnZXRzL3Rvb2x0aXAtZHluYW1pYy90b29sdGlwLWR5bmFtaWMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFPakUsTUFBTSxPQUFPLHVCQUF1QjtJQVlsQztRQVZBLGFBQVEsR0FBMkIsc0JBQXNCLENBQUMsT0FBTyxDQUFDO1FBRWxFLFNBQUksR0FBRyxDQUFDLENBQUM7UUFDVCxRQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ1IsWUFBTyxHQUFHLEtBQUssQ0FBQztJQU1ELENBQUM7SUFKaEIsYUFBYTtRQUNYLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxZQUFZLEtBQUssQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFJRCxRQUFRLEtBQUksQ0FBQzs7O1lBbkJkLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5Qiw2UUFBK0M7Z0JBQy9DLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRvb2x0aXBEeW5hbWljUG9zaXRpb24gfSBmcm9tICcuL3Rvb2x0aXAtZHluYW1pYy5lbnVtcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FhLXRvb2x0aXAtZHluYW1pYycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3Rvb2x0aXAtZHluYW1pYy5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb29sdGlwRHluYW1pY0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIHBvc2l0aW9uOiBUb29sdGlwRHluYW1pY1Bvc2l0aW9uID0gVG9vbHRpcER5bmFtaWNQb3NpdGlvbi5ERUZBVUxUO1xyXG4gIHRvb2x0aXA6IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gIGxlZnQgPSAwO1xyXG4gIHRvcCA9IDA7XHJcbiAgdmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICBpc0FycmF5UGFzc2VkKCkge1xyXG4gICAgcmV0dXJuICh0aGlzLnRvb2x0aXAgaW5zdGFuY2VvZiBBcnJheSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge31cclxufVxyXG4iXX0=