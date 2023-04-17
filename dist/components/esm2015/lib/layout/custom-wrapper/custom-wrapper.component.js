import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
export class CustomWrapperComponent {
    constructor() { }
    ngOnInit() {
    }
}
CustomWrapperComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-custom-wrapper',
                template: "<section\r\n    class=\"{{borderColour}} {{backgroundColour}} position-relative\"\r\n    [ngClass]=\"{\r\n        'box-shadow-strong' : boxShadow\r\n    }\"\r\n    [ngStyle]=\"{\r\n        'border-radius' : borderRadius,\r\n        'padding' : paddingSize,\r\n        'min-width' : minWidth,\r\n        'max-width' : maxWidth,\r\n        'min-height' : minHeight,\r\n        'max-height' : maxHeight,\r\n        'z-index' : zIndex,\r\n        'border-width' : borderWidth,\r\n        'border-style' : borderStyle,\r\n        'margin-bottom' : marginBottom,\r\n        'overflow': enableScrolling ? 'auto' : 'initial'\r\n    }\"\r\n>\r\n    <ng-content></ng-content>\r\n</section>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            },] }
];
CustomWrapperComponent.ctorParameters = () => [];
CustomWrapperComponent.propDecorators = {
    boxShadow: [{ type: Input }],
    paddingSize: [{ type: Input }],
    borderRadius: [{ type: Input }],
    minWidth: [{ type: Input }],
    maxWidth: [{ type: Input }],
    minHeight: [{ type: Input }],
    maxHeight: [{ type: Input }],
    zIndex: [{ type: Input }],
    borderWidth: [{ type: Input }],
    borderStyle: [{ type: Input }],
    borderColour: [{ type: Input }],
    backgroundColour: [{ type: Input }],
    marginBottom: [{ type: Input }],
    enableScrolling: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLXdyYXBwZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tcG9uZW50cy9zcmMvbGliL2xheW91dC9jdXN0b20td3JhcHBlci9jdXN0b20td3JhcHBlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFRbEYsTUFBTSxPQUFPLHNCQUFzQjtJQWlCakMsZ0JBQWdCLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7OztZQTFCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsbXJCQUE4QztnQkFFOUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2hEOzs7O3dCQUdFLEtBQUs7MEJBQ0wsS0FBSzsyQkFDTCxLQUFLO3VCQUNMLEtBQUs7dUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7cUJBQ0wsS0FBSzswQkFDTCxLQUFLOzBCQUNMLEtBQUs7MkJBQ0wsS0FBSzsrQkFDTCxLQUFLOzJCQUNMLEtBQUs7OEJBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWEtY3VzdG9tLXdyYXBwZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jdXN0b20td3JhcHBlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY3VzdG9tLXdyYXBwZXIuY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ3VzdG9tV3JhcHBlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIGJveFNoYWRvdzogYm9vbGVhbjtcclxuICBASW5wdXQoKSBwYWRkaW5nU2l6ZTogYW55O1xyXG4gIEBJbnB1dCgpIGJvcmRlclJhZGl1czogYW55O1xyXG4gIEBJbnB1dCgpIG1pbldpZHRoOiBhbnk7XHJcbiAgQElucHV0KCkgbWF4V2lkdGg6IGFueTtcclxuICBASW5wdXQoKSBtaW5IZWlnaHQ6IGFueTtcclxuICBASW5wdXQoKSBtYXhIZWlnaHQ6IGFueTtcclxuICBASW5wdXQoKSB6SW5kZXg6IG51bWJlcjtcclxuICBASW5wdXQoKSBib3JkZXJXaWR0aDogYW55O1xyXG4gIEBJbnB1dCgpIGJvcmRlclN0eWxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgYm9yZGVyQ29sb3VyOiBhbnk7XHJcbiAgQElucHV0KCkgYmFja2dyb3VuZENvbG91cjogYW55O1xyXG4gIEBJbnB1dCgpIG1hcmdpbkJvdHRvbTogYW55O1xyXG4gIEBJbnB1dCgpIGVuYWJsZVNjcm9sbGluZzogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=