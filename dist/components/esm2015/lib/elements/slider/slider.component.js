import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
export class SliderComponent {
    constructor() {
        this.sliderCheckedChanged = new EventEmitter();
    }
    set sliderChecked(value) {
        this.sliderCheckedValue = value;
        if (value) {
            this.sliderCheckedChanged.emit(true);
        }
        else {
            this.sliderCheckedChanged.emit(false);
        }
    }
    ngOnInit() {
    }
    onChange(event) {
        if (event.target.checked) {
            this.sliderCheckedChanged.emit(true);
            this.sliderCheckedValue = true;
        }
        else {
            this.sliderCheckedChanged.emit(false);
            this.sliderCheckedValue = false;
        }
    }
}
SliderComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-slider',
                template: "<div \r\n    class=\"{{fieldClass}} field slider\"\r\n    [ngClass]=\"{\r\n        'slider-inline flex-group flex-start nowrap' : sliderInline,\r\n        'list-display' : labelMinWidth\r\n    }\"\r\n>\r\n    <label [ngStyle]=\"{ 'min-width': labelMinWidth }\">{{labelText}}</label>\r\n    <label>\r\n        <input \r\n            type=\"checkbox\"\r\n            [name]=\"sliderName\"\r\n            [id]=\"sliderId\"\r\n            [checked]=\"sliderCheckedValue\"\r\n            [disabled]=\"disabled\"\r\n            (change)=\"onChange($event)\"\r\n         />\r\n        <span class=\"slider-btn\"></span>\r\n    </label>\r\n</div>",
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
    disabled: [{ type: Input }],
    labelMinWidth: [{ type: Input }],
    sliderChecked: [{ type: Input }],
    sliderCheckedChanged: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9lbGVtZW50cy9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLHVCQUF1QixFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUXhHLE1BQU0sT0FBTyxlQUFlO0lBb0IxQjtRQUZVLHlCQUFvQixHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7SUFFN0MsQ0FBQztJQVZqQixJQUFhLGFBQWEsQ0FBQyxLQUFVO1FBQ25DLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7UUFDaEMsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3RDO2FBQU07WUFDTCxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQztJQUtELFFBQVE7SUFDUixDQUFDO0lBRUQsUUFBUSxDQUFDLEtBQVU7UUFDakIsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUN4QixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7U0FDaEM7YUFBTTtZQUNMLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztTQUNqQztJQUNILENBQUM7OztZQXZDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLDBvQkFBc0M7Z0JBRXRDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7Ozt5QkFHRSxLQUFLO3dCQUNMLEtBQUs7MkJBQ0wsS0FBSzt1QkFDTCxLQUFLO3lCQUNMLEtBQUs7dUJBQ0wsS0FBSzs0QkFDTCxLQUFLOzRCQUVMLEtBQUs7bUNBUUwsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FhLXNsaWRlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NsaWRlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc2xpZGVyLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIFNsaWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIGZpZWxkQ2xhc3M6IHN0cmluZztcclxuICBASW5wdXQoKSBsYWJlbFRleHQ6IGFueTtcclxuICBASW5wdXQoKSBzbGlkZXJJbmxpbmU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgc2xpZGVySWQ6IGFueTtcclxuICBASW5wdXQoKSBzbGlkZXJOYW1lOiBhbnk7XHJcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGFueTtcclxuICBASW5wdXQoKSBsYWJlbE1pbldpZHRoOiBhbnk7XHJcbiAgc2xpZGVyQ2hlY2tlZFZhbHVlOiBhbnk7XHJcbiAgQElucHV0KCkgc2V0IHNsaWRlckNoZWNrZWQodmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5zbGlkZXJDaGVja2VkVmFsdWUgPSB2YWx1ZTtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICB0aGlzLnNsaWRlckNoZWNrZWRDaGFuZ2VkLmVtaXQodHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNsaWRlckNoZWNrZWRDaGFuZ2VkLmVtaXQoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuICBAT3V0cHV0KCkgc2xpZGVyQ2hlY2tlZENoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2UoZXZlbnQ6IGFueSkge1xyXG4gICAgaWYgKGV2ZW50LnRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgIHRoaXMuc2xpZGVyQ2hlY2tlZENoYW5nZWQuZW1pdCh0cnVlKTtcclxuICAgICAgdGhpcy5zbGlkZXJDaGVja2VkVmFsdWUgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zbGlkZXJDaGVja2VkQ2hhbmdlZC5lbWl0KGZhbHNlKTtcclxuICAgICAgdGhpcy5zbGlkZXJDaGVja2VkVmFsdWUgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19