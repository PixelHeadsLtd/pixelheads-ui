import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
export class FeatureBoxComponent {
    constructor() { }
    ngOnInit() {
    }
}
FeatureBoxComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-feature-box',
                template: "<section \n  class=\"feature-box {{fbStatus}}\"\n  [ngStyle]=\"{\n      'width' : fbWidth,\n      'margin-top' : marginTop,\n      'margin-bottom' : marginBottom\n  }\"\n  [ngClass]=\"{\n      'solid' : isSolid,\n      'padding-right-0' : enableScrolling\n  }\"\n>\n  <div *ngIf=\"includeHeader\">\n    <div [ngClass]=\"{'padding-right-0-75' : enableScrolling}\">\n      <ng-content select=\"[custom-header]\"></ng-content>\n    </div>\n    <div \n      [ngStyle]=\"{\n        'height' : fbHeight,\n        'overflow': enableScrolling ? 'auto' : ''\n      }\" \n      class=\"fb-contnet\"\n    >\n      <ng-content select=\"[custom-content]\"></ng-content>\n    </div>\n  </div>\n  <div *ngIf=\"!includeHeader\">\n    <ng-content></ng-content>\n  </div>\n</section>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1ib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL3BhdHRlcm5zL2ZlYXR1cmUtYm94L2ZlYXR1cmUtYm94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLHVCQUF1QixFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVFsRixNQUFNLE9BQU8sbUJBQW1CO0lBVzlCLGdCQUFnQixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7WUFwQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLDJ3QkFBMkM7Z0JBRTNDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7Ozt3QkFHRSxLQUFLOzJCQUNMLEtBQUs7c0JBQ0wsS0FBSzt1QkFDTCxLQUFLO3NCQUNMLEtBQUs7dUJBQ0wsS0FBSzs0QkFDTCxLQUFLOzhCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FhLWZlYXR1cmUtYm94JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZlYXR1cmUtYm94LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZmVhdHVyZS1ib3guY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgRmVhdHVyZUJveENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgbWFyZ2luVG9wOiBib29sZWFuO1xuICBASW5wdXQoKSBtYXJnaW5Cb3R0b206IGJvb2xlYW47XG4gIEBJbnB1dCgpIGZiV2lkdGg6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGZiSGVpZ2h0OiBib29sZWFuO1xuICBASW5wdXQoKSBpc1NvbGlkOiBib29sZWFuO1xuICBASW5wdXQoKSBmYlN0YXR1czogc3RyaW5nO1xuICBASW5wdXQoKSBpbmNsdWRlSGVhZGVyOiBib29sZWFuO1xuICBASW5wdXQoKSBlbmFibGVTY3JvbGxpbmc6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG59XG4iXX0=