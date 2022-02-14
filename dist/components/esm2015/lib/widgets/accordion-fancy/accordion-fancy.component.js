import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
export class AccordionFancyComponent {
    constructor() { }
    ngOnInit() {
    }
}
AccordionFancyComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-accordion-fancy',
                template: "<section [id]=\"accordionId\">\r\n  <h3 class=\"margin-0\">\r\n    <button class=\"accordion-fancy-trigger box flex-group flex-align-center space-between\" (click)=\"showBody=!showBody\"\r\n        [attr.aria-expanded.true]=\"showBody\" aria-controls=\"accordionId\" type=\"button\">\r\n        <div class=\"flex-align-center\">\r\n          <div *ngIf=\"materialIcons\" class=\"material-icons width-3 margin-right-0-5 {{iconColour}}\">{{iconName}}</div>\r\n          <div *ngIf=\"!materialIcons\" class=\"width-3 {{iconName}}\"></div>\r\n          <span>{{itemTitle}}</span>\r\n        </div>\r\n        <div class=\"aa-toggle flex-align-center\">\r\n          <div *ngIf=\"!showBody\" class=\"material-icons\">add</div>\r\n          <div *ngIf=\"showBody\" class=\"material-icons\">remove</div>\r\n        </div>\r\n    </button>\r\n  </h3>\r\n  <div *ngIf=\"showBody\" class=\"accordion-fancy-panel\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</section>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
AccordionFancyComponent.ctorParameters = () => [];
AccordionFancyComponent.propDecorators = {
    showBody: [{ type: Input }],
    materialIcons: [{ type: Input }],
    itemTitle: [{ type: Input }],
    accordionId: [{ type: Input }],
    iconName: [{ type: Input }],
    iconColour: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLWZhbmN5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi93aWRnZXRzL2FjY29yZGlvbi1mYW5jeS9hY2NvcmRpb24tZmFuY3kuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBUWxGLE1BQU0sT0FBTyx1QkFBdUI7SUFTbEMsZ0JBQWdCLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7OztZQW5CRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsbTlCQUErQztnQkFFL0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2hEOzs7O3VCQUlFLEtBQUs7NEJBQ0wsS0FBSzt3QkFDTCxLQUFLOzBCQUNMLEtBQUs7dUJBQ0wsS0FBSzt5QkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FhLWFjY29yZGlvbi1mYW5jeScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FjY29yZGlvbi1mYW5jeS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYWNjb3JkaW9uLWZhbmN5LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25GYW5jeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIHNob3dCb2R5OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIG1hdGVyaWFsSWNvbnM6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgaXRlbVRpdGxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgYWNjb3JkaW9uSWQ6IHN0cmluZztcclxuICBASW5wdXQoKSBpY29uTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGljb25Db2xvdXI6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=