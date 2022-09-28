import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
export class OverlayComponent {
    constructor() { }
    ngOnInit() {
    }
}
OverlayComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-overlay',
                template: "<article \r\n  class=\"aa-overlay flex-center\" \r\n  *ngIf=\"showOverlay\" \r\n  [ngStyle]=\"{\r\n    'z-index' : zIndex, \r\n    'top' : topPos,\r\n    'right' : rightPos,\r\n    'bottom' : bottomPos,\r\n    'left' : leftPos\r\n  }\">\r\n  <div class=\"aa-overlay-container\" [ngStyle]=\"{'min-width' : minWidth}\">\r\n    <ng-content select=\"[overlay-header]\"></ng-content>\r\n    <ng-content select=\"[overlay-content]\"></ng-content>\r\n  </div>\r\n</article>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
OverlayComponent.ctorParameters = () => [];
OverlayComponent.propDecorators = {
    zIndex: [{ type: Input }],
    showOverlay: [{ type: Input }],
    topPos: [{ type: Input }],
    rightPos: [{ type: Input }],
    bottomPos: [{ type: Input }],
    leftPos: [{ type: Input }],
    minWidth: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL3NyYy9saWIvd2lkZ2V0cy9vdmVybGF5L292ZXJsYXkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUWxGLE1BQU0sT0FBTyxnQkFBZ0I7SUFVM0IsZ0JBQWdCLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7OztZQW5CRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLDhkQUF1QztnQkFFdkMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2hEOzs7O3FCQUdFLEtBQUs7MEJBQ0wsS0FBSztxQkFDTCxLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsS0FBSztzQkFDTCxLQUFLO3VCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FhLW92ZXJsYXknLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9vdmVybGF5LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9vdmVybGF5LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE92ZXJsYXlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSB6SW5kZXg6IG51bWJlcjtcclxuICBASW5wdXQoKSBzaG93T3ZlcmxheTogYm9vbGVhbjtcclxuICBASW5wdXQoKSB0b3BQb3M6IGFueTtcclxuICBASW5wdXQoKSByaWdodFBvczogYW55O1xyXG4gIEBJbnB1dCgpIGJvdHRvbVBvczogYW55O1xyXG4gIEBJbnB1dCgpIGxlZnRQb3M6IGFueTtcclxuICBASW5wdXQoKSBtaW5XaWR0aDogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==