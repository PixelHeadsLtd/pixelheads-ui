import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
export class TagComponent {
    constructor() {
        this.removeTag = new EventEmitter();
    }
    onRemove(e) {
        e.stopPropagation();
        this.removeTag.emit(e);
    }
    ngOnInit() {
    }
}
TagComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-tag',
                template: "<section \r\n    *ngIf=\"!isShaped\" \r\n    class=\"aa-tag\"\r\n    [ngClass]=\"{\r\n        'bg-aa-red-100' : isRed,\r\n        'bg-aa-orange-100' : isOrange,\r\n        'bg-aa-green-100' : isGreen,\r\n        'bg-aa-blue-100' : isBlue,\r\n        'bg-aa-light-blue-100' : isLightBlue,\r\n        'bg-aa-plum-100' : isPlum,\r\n        'bg-aa-ochre-100' : isOchre,\r\n        'bg-aa-white-100' : isWhite,\r\n        'bg-aa-grey-100' : isBlack,\r\n        'bg-aa-pink-100' : isPink\r\n    }\"\r\n>\r\n    <div *ngIf=\"!isWhite\" class=\"material-icons aa-white-100\">loyalty</div>\r\n    <div *ngIf=\"isWhite\" class=\"material-icons aa-blue-100\">loyalty</div>\r\n    <span *ngIf=\"!isWhite\" class=\"aa-white-100\">{{tagText}}</span>\r\n    <span *ngIf=\"isWhite\" class=\"aa-blue-100\">{{tagText}}</span>\r\n    <a *ngIf=\"!isWhite\" class=\"anchor-close aa-white-100\" (click)=\"onRemove($event)\"></a>\r\n    <a *ngIf=\"isWhite\" class=\"anchor-close aa-blue-100\" (click)=\"onRemove($event)\"></a>\r\n</section>\r\n\r\n<section \r\n    *ngIf=\"isShaped\"\r\n    class=\"aa-tag-shaped\"\r\n    [ngClass]=\"{\r\n        'bg-aa-red-100' : isRed,\r\n        'bg-aa-orange-100' : isOrange,\r\n        'bg-aa-green-100' : isGreen,\r\n        'bg-aa-blue-100' : isBlue,\r\n        'bg-aa-light-blue-100' : isLightBlue,\r\n        'bg-aa-plum-100' : isPlum,\r\n        'bg-aa-ochre-100' : isOchre,\r\n        'bg-aa-white-100' : isWhite,\r\n        'bg-aa-grey-100' : isBlack,\r\n        'bg-aa-pink-100' : isPink\r\n    }\"\r\n>\r\n    <span>{{tagText}}</span>\r\n</section>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
TagComponent.ctorParameters = () => [];
TagComponent.propDecorators = {
    isShaped: [{ type: Input }],
    tagText: [{ type: Input }],
    isRed: [{ type: Input }],
    isOrange: [{ type: Input }],
    isGreen: [{ type: Input }],
    isPlum: [{ type: Input }],
    isBlue: [{ type: Input }],
    isLightBlue: [{ type: Input }],
    isWhite: [{ type: Input }],
    isOchre: [{ type: Input }],
    isBlack: [{ type: Input }],
    isPink: [{ type: Input }],
    removeTag: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9wYXR0ZXJucy90YWcvdGFnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLHVCQUF1QixFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUXhHLE1BQU0sT0FBTyxZQUFZO0lBZ0J2QjtRQUZVLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBUyxDQUFDO0lBRWhDLENBQUM7SUFFVixRQUFRLENBQUMsQ0FBUTtRQUN0QixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELFFBQVE7SUFDUixDQUFDOzs7WUE5QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxRQUFRO2dCQUNsQixpakRBQW1DO2dCQUVuQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7Ozs7dUJBR0UsS0FBSztzQkFDTCxLQUFLO29CQUNMLEtBQUs7dUJBQ0wsS0FBSztzQkFDTCxLQUFLO3FCQUNMLEtBQUs7cUJBQ0wsS0FBSzswQkFDTCxLQUFLO3NCQUNMLEtBQUs7c0JBQ0wsS0FBSztzQkFDTCxLQUFLO3FCQUNMLEtBQUs7d0JBQ0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FhLXRhZycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RhZy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdGFnLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIFRhZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIGlzU2hhcGVkOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHRhZ1RleHQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgaXNSZWQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgaXNPcmFuZ2U6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgaXNHcmVlbjogYm9vbGVhbjtcclxuICBASW5wdXQoKSBpc1BsdW06IGJvb2xlYW47XHJcbiAgQElucHV0KCkgaXNCbHVlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGlzTGlnaHRCbHVlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGlzV2hpdGU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgaXNPY2hyZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBpc0JsYWNrOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGlzUGluazogYm9vbGVhbjtcclxuICBAT3V0cHV0KCkgcmVtb3ZlVGFnID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgcHVibGljIG9uUmVtb3ZlKGU6IEV2ZW50KSB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5yZW1vdmVUYWcuZW1pdChlKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbn1cclxuIl19