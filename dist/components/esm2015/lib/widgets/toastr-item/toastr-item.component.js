import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
export class ToastrItemComponent {
    constructor() {
        this.closeToastr = new EventEmitter();
    }
    onCloseClick(e) {
        e.stopPropagation();
        this.closeToastr.emit(e);
    }
    ngOnInit() {
    }
}
ToastrItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-toastr-item',
                template: "<article \r\n    class=\"animate-normal bg-aa-red-100 box-shadow\" \r\n    [ngClass]=\"{\r\n        'show-toastr': showToastr,\r\n        'bg-aa-red-100': isError,\r\n        'bg-aa-orange-100': isWarning,\r\n        'bg-aa-green-100': isSuccess,\r\n        'bg-aa-light-blue-100': isInfo\r\n    }\"\r\n>\r\n    <button (click)=\"onCloseClick($event)\" class=\"material-icons aa-white-100\">clear</button>\r\n    <div class=\"flex-group flex-start\">\r\n        <section class=\"flex-align-center\">\r\n            <div *ngIf=\"isError\" class=\"material-icons toastr-icon aa-white-100\">local_police</div>\r\n            <div *ngIf=\"isWarning\" class=\"material-icons toastr-icon aa-white-100\">privacy_tip</div>\r\n            <div *ngIf=\"isSuccess\" class=\"material-icons toastr-icon aa-white-100\">verified_user</div>\r\n            <div *ngIf=\"isInfo\" class=\"material-icons toastr-icon aa-white-100\">security</div>\r\n        </section>\r\n        <section>\r\n            <h3 class=\"margin-0 aa-white-100 margin-bottom-0-25\">{{heading}}</h3>\r\n            <p class=\"aa-white-100 small\">{{message}}</p>\r\n        </section>\r\n    </div>\r\n</article>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
ToastrItemComponent.ctorParameters = () => [];
ToastrItemComponent.propDecorators = {
    showToastr: [{ type: Input }],
    isError: [{ type: Input }],
    isWarning: [{ type: Input }],
    isSuccess: [{ type: Input }],
    isInfo: [{ type: Input }],
    heading: [{ type: Input }],
    message: [{ type: Input }],
    closeToastr: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3RyLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL3dpZGdldHMvdG9hc3RyLWl0ZW0vdG9hc3RyLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFReEcsTUFBTSxPQUFPLG1CQUFtQjtJQWlCOUI7UUFQVSxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFTLENBQUM7SUFPbEMsQ0FBQztJQUxWLFlBQVksQ0FBQyxDQUFRO1FBQzFCLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBSUQsUUFBUTtJQUNSLENBQUM7OztZQTFCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsNnBDQUEyQztnQkFFM0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2hEOzs7O3lCQUdFLEtBQUs7c0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7cUJBQ0wsS0FBSztzQkFDTCxLQUFLO3NCQUNMLEtBQUs7MEJBRUwsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FhLXRvYXN0ci1pdGVtJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdG9hc3RyLWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RvYXN0ci1pdGVtLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIFRvYXN0ckl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBzaG93VG9hc3RyOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGlzRXJyb3I6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgaXNXYXJuaW5nOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGlzU3VjY2VzczogYm9vbGVhbjtcclxuICBASW5wdXQoKSBpc0luZm86IGJvb2xlYW47XHJcbiAgQElucHV0KCkgaGVhZGluZzogYW55O1xyXG4gIEBJbnB1dCgpIG1lc3NhZ2U6IGFueTtcclxuXHJcbiAgQE91dHB1dCgpIGNsb3NlVG9hc3RyID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcclxuXHJcbiAgcHVibGljIG9uQ2xvc2VDbGljayhlOiBFdmVudCkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMuY2xvc2VUb2FzdHIuZW1pdChlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbn1cclxuIl19