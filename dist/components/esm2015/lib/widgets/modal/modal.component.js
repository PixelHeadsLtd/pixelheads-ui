import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
export class ModalComponent {
    constructor() { }
    ngOnInit() {
    }
}
ModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-modal',
                template: "<article class=\"aa-modal\">\r\n  <div \r\n    class=\"aa-modal-container\" \r\n    [ngClass]=\"{'green':green, 'orange':orange, 'red':red, 'blue':blue}\"\r\n    [ngStyle]=\"{\r\n      'top' : topPos,\r\n      'right' : rightPos,\r\n      'left' : leftPos,\r\n      'min-width' : minWidth,\r\n      'max-width' : maxWidth,\r\n      'z-index' : zIndex\r\n    }\"\r\n  >\r\n    <section *ngIf=\"!hideHeader\" class=\"aa-modal-header\">\r\n      <h2 class=\"boxed align-center\">{{heading}}</h2>\r\n    </section>\r\n    <section class=\"aa-modal-content\">\r\n      {{message}}\r\n      <ng-content select=\"[content-custom]\"></ng-content>\r\n    </section>\r\n    <section class=\"aa-modal-footer flex-group flex-center\">\r\n        <ng-content></ng-content>\r\n    </section>\r\n  </div>\r\n</article>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
ModalComponent.ctorParameters = () => [];
ModalComponent.propDecorators = {
    heading: [{ type: Input }],
    message: [{ type: Input }],
    topPos: [{ type: Input }],
    rightPos: [{ type: Input }],
    leftPos: [{ type: Input }],
    minWidth: [{ type: Input }],
    maxWidth: [{ type: Input }],
    green: [{ type: Input }],
    orange: [{ type: Input }],
    red: [{ type: Input }],
    blue: [{ type: Input }],
    zIndex: [{ type: Input }],
    hideHeader: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL3dpZGdldHMvbW9kYWwvbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUWxGLE1BQU0sT0FBTyxjQUFjO0lBZ0J6QixnQkFBZ0IsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7O1lBekJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsbXpCQUFxQztnQkFFckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2hEOzs7O3NCQUdFLEtBQUs7c0JBQ0wsS0FBSztxQkFDTCxLQUFLO3VCQUNMLEtBQUs7c0JBQ0wsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7b0JBQ0wsS0FBSztxQkFDTCxLQUFLO2tCQUNMLEtBQUs7bUJBQ0wsS0FBSztxQkFDTCxLQUFLO3lCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FhLW1vZGFsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL21vZGFsLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgaGVhZGluZzogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG1lc3NhZ2U6IHN0cmluZztcclxuICBASW5wdXQoKSB0b3BQb3M6IGFueTtcclxuICBASW5wdXQoKSByaWdodFBvczogYW55O1xyXG4gIEBJbnB1dCgpIGxlZnRQb3M6IGFueTtcclxuICBASW5wdXQoKSBtaW5XaWR0aDogYW55O1xyXG4gIEBJbnB1dCgpIG1heFdpZHRoOiBhbnk7XHJcbiAgQElucHV0KCkgZ3JlZW46IGJvb2xlYW47XHJcbiAgQElucHV0KCkgb3JhbmdlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHJlZDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBibHVlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHpJbmRleDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGhpZGVIZWFkZXI6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=