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
                template: "<section \n    *ngIf=\"!isShaped\" \n    class=\"aa-tag\"\n    [ngClass]=\"{\n        'bg-aa-red-100' : isRed,\n        'bg-aa-orange-100' : isOrange,\n        'bg-aa-green-100' : isGreen,\n        'bg-aa-blue-100' : isBlue,\n        'bg-aa-light-blue-100' : isLightBlue,\n        'bg-aa-plum-100' : isPlum,\n        'bg-aa-ochre-100' : isOchre,\n        'bg-aa-white-100' : isWhite,\n        'bg-aa-grey-100' : isBlack,\n        'bg-aa-pink-100' : isPink\n    }\"\n>\n    <div *ngIf=\"!isWhite\" class=\"material-icons aa-white-100\">loyalty</div>\n    <div *ngIf=\"isWhite\" class=\"material-icons aa-blue-100\">loyalty</div>\n    <span *ngIf=\"!isWhite\" class=\"aa-white-100\">{{tagText}}</span>\n    <span *ngIf=\"isWhite\" class=\"aa-blue-100\">{{tagText}}</span>\n    <a *ngIf=\"!isWhite\" class=\"anchor-close aa-white-100\" (click)=\"onRemove($event)\"></a>\n    <a *ngIf=\"isWhite\" class=\"anchor-close aa-blue-100\" (click)=\"onRemove($event)\"></a>\n</section>\n\n<section \n    *ngIf=\"isShaped\"\n    class=\"aa-tag-shaped\"\n    [ngClass]=\"{\n        'bg-aa-red-100' : isRed,\n        'bg-aa-orange-100' : isOrange,\n        'bg-aa-green-100' : isGreen,\n        'bg-aa-blue-100' : isBlue,\n        'bg-aa-light-blue-100' : isLightBlue,\n        'bg-aa-plum-100' : isPlum,\n        'bg-aa-ochre-100' : isOchre,\n        'bg-aa-white-100' : isWhite,\n        'bg-aa-grey-100' : isBlack,\n        'bg-aa-pink-100' : isPink\n    }\"\n>\n    <span>{{tagText}}</span>\n</section>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbXBvbmVudHMvc3JjL2xpYi9wYXR0ZXJucy90YWcvdGFnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLHVCQUF1QixFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUXhHLE1BQU0sT0FBTyxZQUFZO0lBZ0J2QjtRQUZVLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBUyxDQUFDO0lBRWhDLENBQUM7SUFFVixRQUFRLENBQUMsQ0FBUTtRQUN0QixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELFFBQVE7SUFDUixDQUFDOzs7WUE5QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxRQUFRO2dCQUNsQiwrOUNBQW1DO2dCQUVuQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7Ozs7dUJBR0UsS0FBSztzQkFDTCxLQUFLO29CQUNMLEtBQUs7dUJBQ0wsS0FBSztzQkFDTCxLQUFLO3FCQUNMLEtBQUs7cUJBQ0wsS0FBSzswQkFDTCxLQUFLO3NCQUNMLEtBQUs7c0JBQ0wsS0FBSztzQkFDTCxLQUFLO3FCQUNMLEtBQUs7d0JBQ0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FhLXRhZycsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWcuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90YWcuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgVGFnQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBpc1NoYXBlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgdGFnVGV4dDogYm9vbGVhbjtcbiAgQElucHV0KCkgaXNSZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGlzT3JhbmdlOiBib29sZWFuO1xuICBASW5wdXQoKSBpc0dyZWVuOiBib29sZWFuO1xuICBASW5wdXQoKSBpc1BsdW06IGJvb2xlYW47XG4gIEBJbnB1dCgpIGlzQmx1ZTogYm9vbGVhbjtcbiAgQElucHV0KCkgaXNMaWdodEJsdWU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGlzV2hpdGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGlzT2NocmU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGlzQmxhY2s6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGlzUGluazogYm9vbGVhbjtcbiAgQE91dHB1dCgpIHJlbW92ZVRhZyA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnQ+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBwdWJsaWMgb25SZW1vdmUoZTogRXZlbnQpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMucmVtb3ZlVGFnLmVtaXQoZSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG59XG4iXX0=