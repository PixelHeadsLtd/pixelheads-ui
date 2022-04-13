import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
export class SliderComponent {
    constructor() { }
    ngOnInit() {
    }
}
SliderComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-slider',
                template: "<div \r\n    class=\"{{fieldClass}} field slider\"\r\n    [ngClass]=\"{'slider-inline flex-group flex-start nowrap' : sliderInline}\"\r\n>\r\n    <label>{{labelText}}</label>\r\n    <label>\r\n        <input \r\n            type=\"checkbox\"\r\n            value={{sliderValue}} \r\n            name={{sliderName}} \r\n            id={{sliderId}} \r\n            checked={{sliderChecked}}\r\n            disabled=\"{{disabled}}\"\r\n         />\r\n        <span class=\"slider-btn\"></span>\r\n    </label>\r\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
SliderComponent.ctorParameters = () => [];
SliderComponent.propDecorators = {
    fieldClass: [{ type: Input }],
    labelText: [{ type: Input }],
    sliderInline: [{ type: Input }],
    sliderId: [{ type: Input }],
    sliderName: [{ type: Input }],
    sliderValue: [{ type: Input }],
    sliderChecked: [{ type: Input }],
    disabled: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9lbGVtZW50cy9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLHVCQUF1QixFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVFsRixNQUFNLE9BQU8sZUFBZTtJQVcxQixnQkFBZ0IsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7O1lBcEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsZ2hCQUFzQztnQkFFdEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2hEOzs7O3lCQUdFLEtBQUs7d0JBQ0wsS0FBSzsyQkFDTCxLQUFLO3VCQUNMLEtBQUs7eUJBQ0wsS0FBSzswQkFDTCxLQUFLOzRCQUNMLEtBQUs7dUJBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWEtc2xpZGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2xpZGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zbGlkZXIuY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2xpZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgZmllbGRDbGFzczogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGxhYmVsVGV4dDogYW55O1xyXG4gIEBJbnB1dCgpIHNsaWRlcklubGluZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBzbGlkZXJJZDogYW55O1xyXG4gIEBJbnB1dCgpIHNsaWRlck5hbWU6IGFueTtcclxuICBASW5wdXQoKSBzbGlkZXJWYWx1ZTogYW55O1xyXG4gIEBJbnB1dCgpIHNsaWRlckNoZWNrZWQ6IGFueTtcclxuICBASW5wdXQoKSBkaXNhYmxlZDogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==