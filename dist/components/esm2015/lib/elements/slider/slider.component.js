import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
export class SliderComponent {
    constructor() {
        this.sliderCheckedChanged = new EventEmitter();
    }
    set sliderChecked(value) {
        this.sliderCheckedValue = value;
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
                template: "<div \r\n    class=\"{{fieldClass}} field slider\"\r\n    [ngClass]=\"{\r\n        'slider-inline flex-group flex-start flex-align-center nowrap' : sliderInline,\r\n        'list-display' : labelMinWidth\r\n    }\"\r\n>\r\n    <label [ngStyle]=\"{ 'min-width': labelMinWidth }\">{{labelText}}</label>\r\n    <label>\r\n        <input \r\n            type=\"checkbox\"\r\n            [name]=\"sliderName\"\r\n            [id]=\"sliderId\"\r\n            [checked]=\"sliderCheckedValue\"\r\n            [disabled]=\"disabled\"\r\n            (change)=\"onChange($event)\"\r\n         />\r\n        <span class=\"slider-btn\"></span>\r\n    </label>\r\n</div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9lbGVtZW50cy9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLHVCQUF1QixFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUXhHLE1BQU0sT0FBTyxlQUFlO0lBZTFCO1FBRlUseUJBQW9CLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQUU3QyxDQUFDO0lBTGpCLElBQWEsYUFBYSxDQUFDLEtBQVU7UUFDbkMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDO0lBS0QsUUFBUTtJQUNSLENBQUM7SUFFRCxRQUFRLENBQUMsS0FBVTtRQUNqQixJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztTQUNoQzthQUFNO1lBQ0wsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzs7O1lBbENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsNHBCQUFzQztnQkFFdEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2hEOzs7O3lCQUdFLEtBQUs7d0JBQ0wsS0FBSzsyQkFDTCxLQUFLO3VCQUNMLEtBQUs7eUJBQ0wsS0FBSzt1QkFDTCxLQUFLOzRCQUNMLEtBQUs7NEJBRUwsS0FBSzttQ0FHTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWEtc2xpZGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2xpZGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zbGlkZXIuY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2xpZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgZmllbGRDbGFzczogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGxhYmVsVGV4dDogYW55O1xyXG4gIEBJbnB1dCgpIHNsaWRlcklubGluZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBzbGlkZXJJZDogYW55O1xyXG4gIEBJbnB1dCgpIHNsaWRlck5hbWU6IGFueTtcclxuICBASW5wdXQoKSBkaXNhYmxlZDogYW55O1xyXG4gIEBJbnB1dCgpIGxhYmVsTWluV2lkdGg6IGFueTtcclxuICBzbGlkZXJDaGVja2VkVmFsdWU6IGFueTtcclxuICBASW5wdXQoKSBzZXQgc2xpZGVyQ2hlY2tlZCh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLnNsaWRlckNoZWNrZWRWYWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxuICBAT3V0cHV0KCkgc2xpZGVyQ2hlY2tlZENoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2UoZXZlbnQ6IGFueSkge1xyXG4gICAgaWYgKGV2ZW50LnRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgIHRoaXMuc2xpZGVyQ2hlY2tlZENoYW5nZWQuZW1pdCh0cnVlKTtcclxuICAgICAgdGhpcy5zbGlkZXJDaGVja2VkVmFsdWUgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zbGlkZXJDaGVja2VkQ2hhbmdlZC5lbWl0KGZhbHNlKTtcclxuICAgICAgdGhpcy5zbGlkZXJDaGVja2VkVmFsdWUgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19