import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
export class FeatureBoxComponent {
    constructor() { }
    ngOnInit() {
    }
}
FeatureBoxComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-feature-box',
                template: "<section \r\n  class=\"feature-box {{fbStatus}}\"\r\n  [ngStyle]=\"{\r\n      'width' : fbWidth,\r\n      'margin-top' : marginTop,\r\n      'margin-bottom' : marginBottom\r\n  }\"\r\n  [ngClass]=\"{\r\n      'solid' : isSolid,\r\n      'padding-right-0' : enableScrolling\r\n  }\"\r\n>\r\n  <div *ngIf=\"includeHeader\">\r\n    <div [ngClass]=\"{'padding-right-0-75' : enableScrolling}\">\r\n      <ng-content select=\"[custom-header]\"></ng-content>\r\n    </div>\r\n    <div \r\n      [ngStyle]=\"{\r\n        'height' : fbHeight,\r\n        'overflow': enableScrolling ? 'auto' : ''\r\n      }\" \r\n      class=\"fb-contnet\"\r\n    >\r\n      <ng-content select=\"[custom-content]\"></ng-content>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"!includeHeader\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</section>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
FeatureBoxComponent.ctorParameters = () => [];
FeatureBoxComponent.propDecorators = {
    marginTop: [{ type: Input }],
    marginBottom: [{ type: Input }],
    fbWidth: [{ type: Input }],
    fbHeight: [{ type: Input }],
    isSolid: [{ type: Input }],
    fbStatus: [{ type: Input }],
    includeHeader: [{ type: Input }],
    enableScrolling: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1ib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL3BhdHRlcm5zL2ZlYXR1cmUtYm94L2ZlYXR1cmUtYm94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLHVCQUF1QixFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVFsRixNQUFNLE9BQU8sbUJBQW1CO0lBVzlCLGdCQUFnQixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7WUFwQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLHUwQkFBMkM7Z0JBRTNDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7Ozt3QkFHRSxLQUFLOzJCQUNMLEtBQUs7c0JBQ0wsS0FBSzt1QkFDTCxLQUFLO3NCQUNMLEtBQUs7dUJBQ0wsS0FBSzs0QkFDTCxLQUFLOzhCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FhLWZlYXR1cmUtYm94JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZmVhdHVyZS1ib3guY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2ZlYXR1cmUtYm94LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIEZlYXR1cmVCb3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBtYXJnaW5Ub3A6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgbWFyZ2luQm90dG9tOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGZiV2lkdGg6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZmJIZWlnaHQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgaXNTb2xpZDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBmYlN0YXR1czogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGluY2x1ZGVIZWFkZXI6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZW5hYmxlU2Nyb2xsaW5nOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==